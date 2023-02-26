# -1.0 环境配置
**此处不再详细说明，如果你有看过相关编程语言的教程，对下面的事情你应该会很快上手**

**详情请参考官方文档**
1. 安装VSCode
2. 安装Chinese-Simple语言扩展包
3. 安装vscode-lua扩展
4. 安装C#扩展
5. 安装EditorConfig for VS Code扩展
6. 配置工作区的.vscode\settings.json为：
```json 
{
    "files.associations": {
        "*.txt": "lua",
    },
    "files.exclude": {
        "**/*.meta":true,
    },
}
```

7. 配置VSCode为Unity的外部编辑器

# 0.0 想！
现在我们先想一下我们的Mutators有什么功能

例如我们本次的示例Mutators载具快速修复，他应该有：
- 基本的修复载具，每次修复35%
- 有冷却时间
- 防止修复载具后载具健康超过最大值
- 防止通过暂停游戏跳过修复时间
- 显示修复状态与健康
- 有音效
- 可以使用附加Alt键防止键位冲突
- 修复时不可操作载具(载具内有队友时除外)

然后我们再简单想一下脚本的运行逻辑与可以供玩家在游戏中调整的数值，方便实际敲代码(可以跳过)

在这之前，如果您不了解诸如Start()以及实际开发中可以调用的方法，请自行查阅RCR的[RS文档](/Documents/Ravenscrpit/README.md)（或Unity文档，基本通用），此处不再赘述

在本实例中，公开的可以供玩家在游戏中调整的数值：冷却时间、修复时间、激活键、是否使用Alt键、每次修复载具最大健康的%

计划的运行逻辑：
``` 
Start() > local化自定义选项与本地变量(如果数值不符合要求或为空则填充默认数值)

Update() > 当游戏未暂停时冷却计时器累加时间到变量self.deltaTime；
如果玩家按下激活键且不处于冷却状态且驾驶载具中，则将变量self.Repairing变量设置为Ture，否则打印报错信息到屏幕；
当self.Repairing为Ture时且游戏未暂停时，修复时间计时器累加时间到变量self.repairingDeltaTime并播放循环音效，打印修复剩余时间到屏幕，当载具只有玩家一个人时阻止玩家操作载具；
当self.rpairingDeltaTime大于玩家设置的修复时间，则修复载具的%，并打印修复的健康到屏幕，重置所有计时器，停止播放音效，重新允许玩家操作载具
 ```
现在我们可以正式开始了!

# 1.0 Unity内简单配置
在打代码之前，我们先在Unity配置一下Mutators的预制件()的Mod导出设置

场景内新建一个空物体，添加ScriptedBehaviour组件，游戏中这个物体下的所有东西都会被实例化

新建一个TXT(Ravenscrpit)文件，把这个文件托入组件内的source，Behaviour处填写TXT的文件名

预制件化这个物体，在Mutator Content Mod配置


# 1.1 撸码

首先您需要明白如何为脚本对应找到合适的Api:
提取功能中的关键字，如“载具” > Vehicle
然后到文档的Api索引查找相关方法、member，如我们可以在Player这个类中找到可以获取玩家活动载具的menber Player.Actor.activeVehicle
如果找不到合适的方法，可以尝试关键词搜索，如果还找不到。那就是乌鸦没写估计，只能另辟蹊径

然后复制一份


您最后的成品应该看着像这样
```lua 
behaviour("QuickRepair")  --注册Ravenscript行为

--以下的变量均为局部变量，无法从外界访问
local deltaTime = 0   --初始化冷却计时器
local repairDeltaTime = 0   --初始化修理时间计时器
local repairTime  --初始化修理所需时间
local colddown
local isRepairing    --初始化"是否正在维修"状态
local oldVehicleHealth   --初始化未维修前的载具健康
local keybind   --初始化激活键
local useAlt   --初始化"是否使用Alt键"
local repairRange    --初始化要维修载具健康的百分比
local mutators     --初始化与脚本绑定的Mutators
local isRuning     --初始化Mutator状态
local audioSource
local audioSourceVolume

function QuickRepair:AddListener()
    if isRuning == Ture then
        if useAlt == Ture then  --A
            function QuickRepair:Listener()
                if Input.GetKey(KeyCode.Alt) then
                    if Input.GetKeyDown(keybind) then
                        if deltaTime >= colddown then
                            isRepairing = Ture
                        end
                    end
                end
            end
    else   --B
            function QuickRepair:Listener()
                if Input.GetKeyDown(keybind) then
                    if deltaTime >= colddown then
                        isRepairing = Ture
                    end
                end
            end
    end      
end

function QuickRepair:Start()  --在进入游戏游戏时运行一次，用于将游戏设置载入变量
    coroutine.yield(WaitForSeconds(0.2))    --延迟运行确保mutators设置加载成功
    mutators = ScriptedBehaviour.mutator
    if mutators == nil then   --如果无法读取设置，则报错并禁用Mutators
        print("[QuickRepair]Couldn't find mutator setting,check mod plz.")
        isRuning = Flase
    else  --如果可以读取设置，则导入设置
        isRuning = Ture
        AddListener()
        if mutators.GetConfigurationFloat(epairTime) == nil then
            repairTime = 10
        else
            repairTime = mutators.GetConfigurationFloat(repairTime)
        if mutators.mutators.GetConfigurationString(keybind) == nil then
            keybind = '`'
        else
            keybind = mutators.GetConfigurationString(keybind)
        audioSource = self.target.audioSource.GameObject.GetComponent<AudioSource>
        audioSourceVolume = audioSource.AudioSource.volume
        audioSource.AudioSource.volume = 0
        useAlt = mutators.GetConfigurationBool(useAlt)
        repairRange = mutators.GetConfigurationRange(repairRange)
        end
end

function QuickRepair:Update()
    if isRuning == Ture then
            if GameManeger.isPaused == Flase then
                    deltaTime =+ Time.deltaTime  --计时器累加时间
                    Listener()
                    if isRepairing then
                        if Player.Actor.activeVehicle == nil then
                            Overlay.ShowMessage("[QuickRepair]No vehicle is active!", 0.2)
                            isRepairing = Flase
                    else
                        repairDeltaTime =+ Time.deltaTime
                        Overlay.ShowMessage("[QuickRepair]Remaining" + repairTime-repairDeltaTime, 0.01)
                        if Player.Actor.activeVehicle.team == nil then   --当载具只有玩家一个人时阻止玩家操作载具
                            Player.allowMouseLook = Flase
                            Screen.UnlockCursor()
                        end
                    end
                    if repairDeltaTime >= repairTime then
                        oldVehicleHealth = Player.Actor.activeVehicle.health
                        if Player.Actor.activeVehicle.health + Player.Actor.activeVehicle.maxHealth * repairRange >> Player.Actor.activeVehicle.maxHealth then
                            Player.Actor.activeVehicle.health = Player.Actor.activeVehicle.maxHealth
                        else
                            Player.Actor.activeVehicle.Repair(Player.Actor.activeVehicle.maxHealth * repairRange)
                        Overlay.ShowMessage("[QuickRepair]Success,Repaired" + Player.Actor.activeVehicle.health-oldVehicleHealth +'/'+ Player.Actor.activeVehicle.health, 0.5)
                        isRepairing = Flase
                        deltaTime = 0
                        repairDeltaTime = 0
                        Player.Actor.activeVehicle.isDead = Flase
                        if Player.allowMouseLook == Flase then
                            Player.allowMouseLook = Ture
                            Screen.LockCursor()
                        end
                    end
                    if Player.Actor.isDead == Ture then
                        Overlay.ShowMessage("[QuickRepair]Player is died!", 0.2)
                        isRepairing == Flase
                        deltaTime = 0
                    end
                    if Player.Actor.activeVehicle.isDead == Ture then
                        Overlay.ShowMessage("[QuickRepair]Vehicle is  too bad,can't repair!", 0.2)
                        isRepairing == Flase
                        deltaTime = 0
                    end
            end
     end
end 
```
