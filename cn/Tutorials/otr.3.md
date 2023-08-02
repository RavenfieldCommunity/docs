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
- 有冷却时间（可修改，最低为60s）
- 防止血量回复后健康超过最大值
- （次要）加入UI，显示修复状态与健康

然后我们再简单想一下脚本的运行逻辑与可以供玩家在游戏中调整的数值，方便实际敲代码(可以跳过)

在本实例中，公开的可以供玩家在游戏中调整的数值：血量回复比例、冷却时间、键位

现在我们可以正式开始了!

## 1.0 Unity内简单配置
在打代码之前，我们先在Unity配置一下Mutators的预制件的Mod导出设置

场景内新建一个空物体，添加[ScriptedBehaviour](/cn/Components/ScriptedBehaviour.md)组件，游戏中这个物体下的所有东西都会被实例化

新建一个右键新建一个Ravenscrpit文件，把这个文件拖入组件内的source，Behaviour处填写TXT的文件名：

{缺图}

预制件化这个物体，在[MutatorCotentMod](/cn/Components/MutatorCotentMod.md)配置这个Mutator，这里配置了float、range、string各一个：

{缺图}


## 1.1 完成主要功能

打开官方的[Ravenscrpit的文档](http://ravenfieldgame.com/ravenscript/api.html)

首先你需要明白文档中那些classes可以[“直接调用”](https://www.runoob.com/csharp/csharp-class.html)

即哪些类已经实例化可以直接作为对象进行调用（如[类Player](http://ravenfieldgame.com/ravenscript/api/Player.html)），哪些是作为“数据类型”，需要先实例化才能使用（如[类Actor](http://ravenfieldgame.com/ravenscript/api/Actor.html)，它需要先在一个Bot的GameObject上调用GetComponentInParent\<Actor\>，“get”了这个类才能使用 ）

官方并没有标注这些内容，这需要您按照逻辑思维与常识自行探索

其次你需要明白如何为脚本对应找到合适的Api:

提取功能中的关键字，如“载具” > Vehicle

然后到文档的Api索引查找相关方法、member，如我们可以在Player这个类中找到可以获取玩家活动载具的menber是Player.Actor.activeVehicle，我们就可以在

如果找不到合适的方法，可以尝试关键词搜索，如果还找不到。那就是乌鸦没写估计，只能另辟蹊径

然后按文档提供的member和method编写脚本，不断重复这个行为

首先，我们先实现我们最核心的功能血量回复：
```lua 
behaviour("QuickTreat")  --注册Ravenscript行为，然后我们才能从这个基类派生自己的自定义类

function QuickTreat:Start()
end

function QuickTreat:Update()
    if Input.GetKey(KeyCode.P) then --当按下P键时...
        Player.actor.ResupplyHealth(50) --调用Player的成员actor内的一个成员方法来回复50血量
    end
end
```

然后实际测试，发现没有Bug，同时发现使用Player.actor.ResupplyHealth()这个方法可以确保防止血量回复后健康超过最大值，这意味着我们可以减少实现这个功能的代码量


然后继续添加下一个功能冷却时间：
```lua 
behaviour("QuickTreat")

--初始化局部变量变量
local timer = 0

function QuickTreat:Start()
end

function QuickTreat:Update()
    timer = Time.deltaTime + timer  --计时器，会不断累加一帧的时间
    if Input.GetKey(KeyCode.P) then
	    if timer >= 60 then
            Player.actor.ResupplyHealth(50)
			timer = 0  --重置计时器
		end
    end
end
```

然后实际测试，发现没有Bug，然后继续添加下一个功能，不断重复这个过程，直到完成：
```lua 
behaviour("QuickTreat")  --注册Ravenscript行为，然后我们才能从这个基类派生自己的自定义类

--初始化局部变量变量
local timer = 0
local cooldown  --冷却时间
local bits --血量回复比
local keybind --触发键位
local mutator

function QuickTreat:Start() --进入游戏地图的一开始时运行
    coroutine.yield(WaitForSeconds(0.2))    --延迟运行下一行确保mutators设置加载成功
    mutator = ScriptedBehaviour.mutator  --获取此脚本绑定的mutator信息
	cooldown = mutator.GetConfigurationFloat("cooldown")  --获取mutator自定义选项卡中id为cooldown的float对应的值
	if cooldown < 60 then  --如果cooldown小于60，则重置cooldown为60
	    cooldown = 60
    end
	bits = mutator.GetConfigurationRange("bits")  --获取mutator自定义选项卡中id为bits的range对应的值
	keybind = mutator.GetConfigurationString("keybind")  --获取mutator自定义选项卡中id为keybind的string对应的值
	if keybind == "" then  --如果keybind为空，则重置keybind为"p"
	    keybind = "P"
    end
end

function QuickTreat:Update() --在游戏的每帧时运行
    timer = Time.deltaTime + timer  --计时器，会不断累加一帧的时间
    if Input.GetKeyDown(keybind) then --当按下可以keybind对应的键位时...
	    if timer >= cooldown then --当计时器超出冷却时间时...
            Player.actor.ResupplyHealth(Player.actor.maxHealth * bits) --调用Player的成员actor内的一个成员方法来回复最大血量的%bits
			timer = 0  --重置计时器
		end
    end
end
```

当主要功能完成时，我们就可以继续下一步：添加次要功能

## 1.2 添加次要功能