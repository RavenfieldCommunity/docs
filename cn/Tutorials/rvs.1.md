---
category: 
- 教程
---
# rvs.1 Ravenscrpit
## -2.0 何为Ravenscrpit？
Ravenscrpit是一个基于Lua的游戏语言（其实就是Lua），为了Ravenfield的模组化开发

它的诞生基于[MoonSharp Project](https://www.moonsharp.org/)（可惜自2016年就没了更新，官方仓库堆了一堆PR）

Ravenscript可以控制Ravenfield和Unity引擎的某些部分

因此它具有与Unity开发中的C#具有相同的逻辑与操作

所以，建议你先入门Unity C#开发，再入门Ravenscript，有助于你更顺利的理解一些概念

## -1.0 环境配置
**此处不再详细说明，如果你有看过相关编程语言的教程，对下面的事情你应该会很快上手**

**详情请参考官方文档**
1. 安装
[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://code.visualstudio.com/)作为IDE

  或者自行选择一个合适的编辑器,以下内容部分仅适用VSCode

2. 安装Chinese-Simple语言扩展包[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)

3. 安装vscode-lua扩展[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=sumneko.lua)并安装[RSIDEA](/cn/Project/rsidea.md)

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

7. （可选）安装Debug扩展[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=xanathar.moonsharp-debug)

8. （可选）安装[BepInEx](https://www.bilibili.com/read/cv8997496/)并启用控制台（方便调取RS输出）

## 1.0 文件结构
标准的RS脚本一般分为3个结构：
```lua
--#1 注册RS父table，这样你才能从里面派生方法并让游戏执行
behavior("test")

--#2 local变量，为什么不可以在事件方法体里可以自行研究
local var1

--#3 定义事件方法体
function test: Start ()
end

function test: Update ()
end
```

在此示例中，第一部分的作用是向Ravenscript解释器要求注册一个名为`test`的table（应与[ScriptedBehaviour](/cn/Components/ScriptedBehaviour.md)的`behaviour`的值一致，或与文件名一致），调用此方法后解释器会在当前环境中创建一个名为`test`的table，这个table派生于[ScriptedBehaviour](http://ravenfieldgame.com/ravenscript/api/ScriptedBehaviour.html)，用于定义self指针包含的内容方便调用，并注复制test外部的local（即第二步定义的局部变量）进`test`

在第二部分中，在外部定义变量而不是在方法体内定义的原因时各个方法体的局部变量不可互相访问，在外部定义就可以直接通过self指针（例如`self.var1`）在table方法体内部全局读写变量（但因为解释器的逻辑，你不能在此处使用RS的Api初始化值？）

在第三部分中，你可以选择从注册的table派生一些一些方法，解释器会在游戏运行期间调用它们，
`Awake`、`OnEnable`、`OnDisable`、`OnDestroy`、`Start`、`Update`、`LateUpdate`、`FixedUpdate`、`OnAnimatorIK`这些都是默认可用的方法名，他们的意义与执行顺序与Unity C#的一致，你可以参考[Unity文档](https://docs.unity3d.com/cn/2020.3/Manual/ExecutionOrder.html)

至于为什么Ravenscript与Unity C#一样，不像一般编程一样直接在文件里贴代码，你可以自行探讨

## 1.1 文档使用方法

打开官方的[Ravenscrpit的文档](http://ravenfieldgame.com/ravenscript/api.html)

### 类Class
尽管文档没有标注，首先你仍需要明白文档中那些classes（其实classes这个名称并不准确？）可以分别是怎么用的

即哪些类已经实例化可以直接作为api对象进行调用（如[Player](http://ravenfieldgame.com/ravenscript/api/Player.html),它可以直接在脚本里Player.actor.health =9999这样直接调用 ）

哪些是作为“数据类型”需要先实例化这个类才能使用（如[类Actor](http://ravenfieldgame.com/ravenscript/api/Actor.html)，它需要先在一个Bot的GameObject上通过GameObject.GetComponentInParent(Actor)，“get”了这个类才能使用 ）

那些是作为enum枚举类使用(如[AudioMixer](http://ravenfieldgame.com/ravenscript/api/AudioMixer.html)，用于枚举Audio Source的Output配置)

官方并没有标注这些内容，这需要您按照逻辑思维与常识自行探索

### 类成员与类型、关键字

点击一个类的文档，在Details一栏，你会发现这样的一些文本，下面是这些类成员的描述

它们分为构建函数（Constructors，部分，参考C#）、成员属性（Members，参考C#）、成员方法（Methods，部分，参考C#）、成员事件（Events，部分）

构建函数用于实例化一个新类，需要按函数重载传入一些初始值，之后函数会返回实例化的新类

在成员属性中，如：

{缺图}[Page](http://ravenfieldgame.com/ravenscript/api/Actor.html#_CPPv4N5Actor7balanceE)

int表示这个属性的类型是int整数，balance表示这个属性的名字，其他的类似，RS自带的内建类会提供一个超链接高亮显示

可能你也会看到一些诸如const、static这样的关键字（类似于“标识符”），他们的含义如下：
| 关键字 | 含义 |
|------|------|
| const | 表示这个属性是常量，不可更改，指向的内容始终不变（即使玩家层面可见的变更，即使被变量无限引用） |
| static | 静态属性，无论如何类实例化，返回值不受实例的类影响，始终一致 |

在成员方法中，如：

{缺图}[Page](http://ravenfieldgame.com/ravenscript/api/Actor.html#_CPPv4N5Actor14CanBeDamagedByE6Weapon)

方法名前的是方法返回的数据的类型（如果是void则表示无返回值），`seat`表示的是参数，前头的`Seat`表示的是这个参数的类型

一个方法可能有多个重载，你可以按需求使用合适的重载

在成员事件中，如：

{缺图}[Page](http://ravenfieldgame.com/ravenscript/api/Actor.html#_CPPv4N5Actor12onTakeDamageE)

这是实际上是一个为[ScriptEvent](http://ravenfieldgame.com/ravenscript/api/ScriptEvent.html)类型的属性

在实际上，他是这样使用的：
```lua
behavior("test")

function test: Start ()
    --注册事件
    --self指触发事件时调用方法所在的table(ScriptedBehavior)，如果你已经获取了别的ScriptedBehavior，你也可以将self替换为ScriptedBehavior所在变量
    --"onTakeDamage"指触发事件时调用self所在方法的方法名，不一定非要填写属性ScriptEvent的属性名
    Player.onTakeDamage.AddListener(self, "onTakeDamage")
end

--触发事件时就会调用这个方法
function test: onTakeDamage ()

end
```

注意，如果你的类的ScriptEvent属性像[GameEvents的onActorCreated](http://ravenfieldgame.com/ravenscript/api/GameEvents.html#_CPPv4N10GameEvents14onActorCreatedE)一样，下方的`callback`内属性不为空，这表示调用这个方法时游戏会传入的参数，你必须在你注册的方法的参数中填写这些参数，否则会报错

## 1.3 Coding实践

如写一个玩家血量修复的RS脚本

首先提取功能中的关键字

然后到文档的Api索引查找相关方法、member，如我们可以在Player这个类中找到可以获取玩家对应actor的menber是`Player.actor`，我们就可以在

如果找不到合适的方法，可以尝试关键词搜索，如果还找不到。那就是乌鸦没写估计，只能另辟蹊径

然后按文档提供的member和method编写脚本，不断重复这个行为

首先，我们先实现我们最**核心**的功能血量回复

通过`Input.GetKeyDown`的return判断按键是否按下这个是基本操作，各个Unity基础教程应该有介绍

血量回复这个功能对应的API的话，先把这个功能拆出一个词“Health”（健康），在文档里搜索

在Actor这个类里找到`Actor.ResupplyHealth(float health)`这个方法似乎有用

那类Actor是什么？

类Actor是一个管理玩家与Bot在游戏中的“属性”的一个重要的类，包括但不限于血量、所使用的武器载具、所属小队等属性

同时我们又发现`Player.actor`这个API可以让我们获取到玩家的Actor

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

实际测试，发现没有Bug，同时发现使用`Player.actor.ResupplyHealth()`这个方法可以确保防止血量回复后健康超过最大值，这意味着我们可以减少实现这个功能的代码量

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

当主要功能完成时，我们就可以继续下一步：添加次要功能与优化代码

优化代码这部分表现为：减少不必要的判断、运算，精简代码，将可以迁移到事件函数的判断迁移之类

此处不再赘述

## 1.4 在游戏测试

这需要你使用[ScriptedBehaviour](/cn/Components/ScriptedBehaviour.md)将脚本挂载到游戏物体中

你具体可以参考＠[Lezvin](http://steamcommunity.com/profiles/76561198310507502)大佬翻译的这篇文档：[https://blog.csdn.net/x3464/article/details/105137284](https://blog.csdn.net/x3464/article/details/105137284)

无论如何，你都要将将脚本挂载到游戏物体中，并且保证这个物体在实际游戏中会被加载

## 1.5 常见报错
### 测试模式下无法重载脚本
其具体表现为，点击重载键不出现加载提示：

{缺图}

正常应为：

{缺图}

请检查游戏是否可以访问这个脚本所在位置，修改Windows文件夹的安全属性（Unity游戏不支持使用管理员权限运行），或检查访问是否被拒绝

否则尝试迁移Unity项目位置

## 1.6 Debug