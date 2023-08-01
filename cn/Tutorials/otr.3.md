# otr.3 Mutators
## 前言

此文档将一步步引导你开发一个简单的Mutators，带您理解Mutators的基本构造

## -1.0 环境配置
**此处不再详细说明，如果你有看过相关编程语言的教程，对下面的事情你应该会很快上手**

**详情请参考官方文档**
1. 安装
[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://code.visualstudio.com/)

2. 安装Chinese-Simple语言扩展包[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)

3. 安装vscode-lua扩展[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=sumneko.lua)

4. 安装C#扩展[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

5. 配置工作区的.vscode\settings.json为：
```json 
{
    //配置文件扩展名关联
    "files.associations": {
        "*.txt": "lua",
    },
	//隐藏meta文件
    "files.exclude": {
        "**/*.meta":true,
    },
}
```
6. 配置VSCode为Unity的外部编辑器

## 0.0 想！
现在我们先想一下我们的Mutators有什么功能

例如我们本次的示例Mutators简单血量回复，他应该有：
- 基本的血量回复，每次修复35%（可修改）
- 有冷却时间（可修改）
- 防止血量回复后健康超过最大值
- 加入UI，显示修复状态与健康

然后我们再简单想一下脚本的运行逻辑与可以供玩家在游戏中调整的数值，方便实际敲代码(可以跳过)

在本实例中，公开的可以供玩家在游戏中调整的数值：血量回复比例、冷却时间

现在我们可以正式开始了!

## 1.0 Unity内简单配置
在打代码之前，我们先在Unity配置一下Mutators的预制件的Mod导出设置

场景内新建一个空物体，添加[ScriptedBehaviour](/cn/Components/ScriptedBehaviour.md)组件，游戏中这个物体下的所有东西都会被实例化

新建一个右键新建一个Ravenscrpit文件，把这个文件拖入组件内的source，Behaviour处填写TXT的文件名：

{缺图}

预制件化这个物体，在Mutator Content Mod配置


## 1.1 撸码

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
