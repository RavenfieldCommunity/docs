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

场景内新建一个空物体，添加[ScriptedBehaviour](/cn/Components/ScriptedBehaviour.md)组件

新建一个右键新建一个Ravenscrpit文件，把这个文件拖入组件内的source，Behaviour处填写TXT的文件名：

{缺图}

预制件化这个物体（游戏中这个物体下的所有东西都会被实例化，包括UI之类的物体），在[MutatorCotentMod](/cn/Components/MutatorCotentMod.md)配置这个Mutator，此处在config这里配置了float、range、string各一个：

{缺图}


## 1.1 完成主要功能

打开官方的[Ravenscrpit的文档](http://ravenfieldgame.com/ravenscript/api.html)

首先你需要明白文档中那些classes（其实classes这个名称并不准确？）可以[“直接调用”](https://www.runoob.com/csharp/csharp-class.html)

即哪些类已经实例化可以直接作为api对象进行调用（如[Player](http://ravenfieldgame.com/ravenscript/api/Player.html),它可以直接在脚本里Player.actor.health =9999这样直接调用 ），哪些是作为“数据类型”，需要先实例化这个类才能使用（如[类Actor](http://ravenfieldgame.com/ravenscript/api/Actor.html)，它需要先在一个Bot的GameObject上通过GetComponentInParent\<Actor\>，“get”了这个类才能使用 ）

官方并没有标注这些内容，这需要您按照逻辑思维与常识自行探索

其次你需要明白如何为脚本对应找到合适的Api:

提取功能中的关键字，如“载具” > Vehicle

然后到文档的Api索引查找相关方法、member，如我们可以在Player这个类中找到可以获取玩家活动载具的menber是Player.Actor.activeVehicle，我们就可以在

如果找不到合适的方法，可以尝试关键词搜索，如果还找不到。那就是乌鸦没写估计，只能另辟蹊径

然后按文档提供的member和method编写脚本，不断重复这个行为

首先，我们先实现我们最**核心**的功能血量回复

通过Input.GetKeyDown的return判断按键是否按下这个是基本操作，各个Unity基础教程应该有介绍

血量回复这个功能对应的API的话，先把这个功能拆出一个词“Health”（健康），在文档里搜索

在Actor这个类里找到Actor.ResupplyHealth(float health)这个方法似乎有用

那类Actor是什么？

类Actor是一个管理玩家与Bot在游戏中的“属性”的一个重要的类，包括但不限于血量、所使用的武器载具、所属小队等属性

同时我们又发现Player.actor这个API可以让我们获取到玩家的Actor

那么，所需的方法都有了！

示例：
```lua 
behaviour("QuickTreat")  --注册Ravenscript行为，然后我们才能从这个基类派生自己的自定义类

function QuickTreat:Update()
    if Input.GetKeyDown(KeyCode.P) then --当按下P键时...，通过Input.GetKeyDown的return判断按键是否按下，基本操作hhh
        Player.actor.ResupplyHealth(50) --调用Player的成员actor内的一个成员方法来回复50血量
    end
end
```

然后选中带MutatorCotentMod的Prefab，在顶栏的RFTools选项卡点击Test Cotent Mod or map在游戏测试mutator

操作过程不再赘述，参考[CSDN](https://blog.csdn.net/x3464/article/details/105137284)

实际测试，发现没有Bug，同时发现使用Player.actor.ResupplyHealth()这个方法可以确保防止血量回复后健康超过最大值，这意味着我们可以减少实现这个功能的代码量

然后继续添加下一个功能冷却时间：
```lua 
behaviour("QuickTreat")

--初始化局部变量,无法从脚本外部访问
local timer = 0  --计时器

function QuickTreat:Start()  --这个Start()函数会在游戏的一开始运行
    --在调用的变量前加一个self.防止得到的的值是nil
    self.timer = Time.time + 60  --初始化计时器，计算超出冷却时间后时的游戏时间，选用这个方案的原因是Time.deltaTime似乎无法正常使用
end

function QuickTreat:Update() --这个Update()函数会在游戏的每帧运行
    if Input.GetKeyDown(KeyCode.P) then
	    if Time.time >= self.timer then
            Player.actor.ResupplyHealth(50)
			self.timer = Time.time + 60  --重置计时器
		end
    end
end
```

然后实际测试，发现没有Bug，然后继续添加下一个功能，不断重复这个过程，直到完成：
```lua 
behaviour("QuickTreat"

local timer = 0
local cooldown  --冷却时间
local ratio --血量回复比
local keybind --触发键位
local mutator

function QuickTreat:Start() --进入游戏地图的一开始时运行
    coroutine.yield(WaitForSeconds(0.2))    --延迟运行下一行确保mutator设置加载成功
    self.mutator = self.script.mutator  --获取此脚本绑定的mutator信息
	self.cooldown = self.mutator.GetConfigurationFloat("cooldown")  --获取mutator自定义选项卡中id为cooldown的float对应的值
	if self.cooldown < 60 then  --如果cooldown小于60，则重置cooldown为60
	    self.cooldown = 60
    end
	self.ratio = self.mutator.GetConfigurationRange("ratio")  --获取mutator自定义选项卡中id为ratio的range对应的值
	self.keybind = self.mutator.GetConfigurationString("keybind")  --获取mutator自定义选项卡中id为keybind的string对应的值
	if self.keybind == nil then  --如果keybind为空，则重置keybind为"p"
	    self.keybind = "P"
    end
	self.timer = Time.time + self.cooldown  --计算超出冷却时间后的游戏时间
end

function QuickTreat:Update()
    if Input.GetKeyDown(self.keybind) then  --当按下keybind对应的按键时...
		if Time.time >= self.timer then
            Player.actor.ResupplyHealth(Player.actor.maxHealth * self.ratio)
			self.timer = Time.time + self.cooldown
			Overlay.ShowMessage("[QuickTreat]Sucess",0.15)  --调用Overlay.ShowMessage()来显示一行信息，后半部分的数值是消失延迟
        else
            Overlay.ShowMessage("[QuickTreat]Failure,Need delay",0.15)
		end
    end
end
```

当主要功能完成时，我们就可以继续下一步：添加次要功能

## 1.2 添加次要功能

现在添加我们的次要功能UI操作

各类[UI组件的应用](https://docs.unity.cn/cn/current/Manual/UICanvas.html)不再赘述

首先在场景内的Mutator添加一个Canvas，在Canvas内添加Scroll View，在Scroll View内添加Button和Text：

{缺图}

然后自行修改UI物体的大小位置以及文字，注意禁用Canvas物体放置一开游戏就显示Canvas：

{缺图} 

将canvas添加进我们前面ScriptedBehaviour组件内的target，方便调用：

{缺图}

在MutatorCotentMod内添加一个Bool选项卡，让我们可以自定义UI的开启：

{缺图}

现在回到代码编辑器

按照文档提供的api编写脚本：
```lua 
behaviour("QuickTreat")

local timer = 0
local cooldown
local ratio
local keybind
local mutator
local enableUI = false  --是否启用UI，默认为false
local button  --canvas内的按键
local text  --canvas内的Text物体

function QuickTreat:Start()
    coroutine.yield(WaitForSeconds(0.2))
    self.mutator = self.script.mutator
	self.cooldown = self.mutator.GetConfigurationFloat("cooldown")
	if self.cooldown < 60 then
	    self.cooldown = 60
    end
	self.ratio = self.mutator.GetConfigurationRange("ratio")
	self.keybind = self.mutator.GetConfigurationString("keybind")
	if self.keybind == nil then
	    self.keybind = "P"
    end
	if self.mutator.GetConfigurationBool("enableUI") != nil then
	    self.enableUI = self.mutator.GetConfigurationBool("enableUI")
	end
	self.button = self.targets.canvas.gameObject.GetComponentInChildren(Button)  --获取Button组件
    self.button.onClick.AddListener(self, "onClick")  --添加一个监听事件，self是指在触发事件时要使用的事件函数所在脚本，“onClick”是指在触发事件时要调用的方法名，也就是下面的QuickTreat:onClick()
	self.text = self.targets.canvas.gameObject.GetComponentInChildren(Text)  --获取Text组件（可能会获取到button的Text组件，届时请自行修改代码lol）
    self.timer = Time.time + self.cooldown
end

function QuickTreat:Update()
    if Input.GetKeyDown(self.keybind) then
	    if self.enableUI == true then  --如果启用UI,就设置Canvas为活动
            self.targets.canvas.SetActive(not self.targets.canvas.activeSelf)
			if self.targets.canvas.activeSelf == true then  --如果Canvas处于活动状态，就将鼠标从游戏操作解锁，否则锁定鼠标
			    Screen.UnlockCursor()
			else
			    Screen.LockCursor()
			end
        else
		    if Time.time >= self.timer then
                Player.actor.ResupplyHealth(Player.actor.maxHealth * self.ratio)
			    self.timer = Time.time + self.cooldown
				Overlay.ShowMessage("[QuickTreat]Sucess")
            else
                Overlay.ShowMessage("[QuickTreat]Failure,Need delay",0.1)
			end
        end
	end
end

function QuickTreat:OnClick()   --点击Button时的事件函数
    if Time.time >= self.timer then
        Player.actor.ResupplyHealth(Player.actor.maxHealth * self.ratio)
        self.timer = Time.time + self.cooldown
		self.text.text = "Sucess"  --如果ResupplyHealth了，就将text物体的text属性改为目标文本
	else
	    self.text.text = "Failure,Need delay"..tostring(self.timer - Time.time)  --如果没过冷却了，就将text物体的text属性改为目标文本
    end 
end
```

测试，没bug，我们就可以进行最后一步了

## 1.3 优化代码

这一步可以选择性跳过，但我们建议你执行

这一过程主要表现为：减少不必要的判断、运算，精简代码，将可以迁移到事件函数的判断迁移之类

此步不再赘述

## 3.0 测试与导出