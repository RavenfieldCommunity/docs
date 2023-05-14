# 项目维护帮助

欢迎帮助我们维护RavenfieldCommunity\docs（以下简称docs）社区客制化支持项目！
在开始之前，您需要先阅读维护注意事项

## 维护注意事项

> [RavenfieldCommunity\docs](/) 项目（简称RCR）是一个仅用于学习研究、社区开源、公益性质的[Ravenfield](https://ravenfieldgame.com/)文档，基于 [CC-BY-NC 2.0](https://github.com/RavenfieldCommunity/docs/blob/main/LICENSE) (除被另外声明的内容)协议开源，禁止一切商业使用，如需转载请注明"Github@RavenfieldCommunity"

> 本项目为开源项目，不接受任何形式的催单和索取行为，更不容许存在付费内容

> 该项目使用 [Markdown](https://zh.wikipedia.org/zh-cn/Markdown) 语法进行文档书写，不要滥用vuepress的拓展markdown语法

> 请上传内容之前检查版权合法性，您将您的内容上传至RCR时即意味着您同意以统一在[Contributors](https://github.com/RavenfieldCommunity/docs/graphs/contributors)署名的形式（除[/OpenSource Mod](/OpenSource%20Mod)与[/Resource](/Resource)内被另外声明的内容）授权RCR项目使用与分发您的内容

## Index、路径结构、命名规范

### Index

文档目录索引应以Markdown无序列表语法写在/cn、/en下（包括子文件夹）的README.md中，使用缩进标识（四个空格）文档的层级，并包括一下元素：
```markdown
# {title}
- [{Index1.name}]({Index1.path}) {Index1.transName}
- {N Type}
    - [{Index2.name}]({Index2.path}) {Index2.transName}
{以下省略}
```

其中，`{title}`分为多个部分，分别填充以下内容（省略Documents、in-GAME）：
| 目录名 | 在索引中替换为 |
|------|------|
| Components | 组件 |
| Weapon | 武器 |
| Ravenscrpit | Ravenscrpit |
| Tutorials | RFCreator Project |

如\Components\README.md的`{title}`，应替换为“组件”

每个`{Index*.name}`都应以对应的.cs脚本文件名或Lua table类名填写，如“DamageZone.cs”为"`DamageZone`"，文件名也为"`DamageZone.md`"

每个`{Index*.path}`都填充对应.md的绝对路径，如“`/Documents/Components/Vehicle/VehicleContentMod.md`”，不应使用local修饰，如“`.\VehicleContentMod.md`”是不被允许的

每个`{Index*.transName}`填充`{Index*.name}`的译名

每个`{N Type}`都应以对应在RFTools\Scrpits里的父文件夹名填写（顶级的父文件夹名可省略），如“..\Visual”为"`Visual`"



示例：

```markdown
# 组件
## 载具
- [VehicleContentMod](./VehicleContentMod.md) 载具导出配置
- [Vehicle](./Vehicle.md) 载具
- [Seat](./Seat.md) 载具座位
- [Plane](./Plane.md) 飞机
- [Helicopter](./Helicopter.md) 直升机
- [CarWheel](./CarWheel.md) 车轮
- [Boat](./Boat.md) 船
- [ArcadeCar](./ArcadeCar.md)
- [AnimationDrivenVehicle](./AnimationDrivenVehicle.md)
- Weapon 车载武器
    - [AutoRepairVehicleWeapon](./AutoRepairVehicleWeapon.md) 载具修复武器
    - [CarHorn](./CarHorn.md)
    - [Mortar](./Mortar.md)
    - [MountedStabilizedTurret](./MountedStabilizedTurret.md)
    - [MountedTurret](./MountedTurret.md)
    - [MountedWeapon](./MountedWeapon.md)
    - [TankTurret](./TankTurret.md)
{以下省略}
```

### 路径结构

纯英文，开头大写，只能包括连字符“`-`”,文件夹名参考`{title}`

### 命名规范

参考`{Index*.name}`

## 组件类文档编写规范

包括以下元素：
```markdown
# {title}
## 描述
{description}
## 用法
{usage}
## 注释
{note}
## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| {var.name} | {var.type} | {var.description} |
{以下省略}
```

其中，`{title}`与该组件文档相对应的`{Index*.name}`一致，无需其他字符

`{description}`填写对这个组件的描述，如“用于配置载具导出”，如果是由其他cs类派生而来的应注明`从[{Index*.name}]({Index*.path})类派生`。

`{usage}`填写如何使用这个组件，例如“套用在一个空物体上”或“武器的最顶层中附加”等

`{note}`填写一些开发时可用的技巧或注意事项

`{var.name}`填写.cs脚本中的可调整项（变量），应与在脚本中未被Unity格式化的名称一致，如“`banlanceDamage`”

`{var.type}`填写变量类型，如“`gameObject`”、“`float`”。当变量类型是由其他数据类型派生而来时应注明，如“`AiType`”类是由emun类派生而来的，则`{var.type}`中应填写“`emun.AiType`”

`{var.description}`填写对这个变量的说明、作用，填写的内容请尽量详细可靠。当这里为下拉列表或emun时，请填写对选项的说明，如“`（Auto=自动、None=无、Handgun=手枪、RifleSmall=小步枪、RifleLarge=大步枪、Launcher=炮、Tank=坦克）`”

注意：
> 当其上任何一个内容引用了任何一个其他的RFTools的组件时，应为这个字符串设置一个超链接，方便他人快速访问。如`{var.type}`中填写的“`List<Seat>`”时使用了一个组件，则应改为“`List<[Seat](/Documents/Components/Vehicle/Seat.md)>`”。其他地方同理。

> 当您不知道一个项例如`{var.description}`应填写什么时，应在这里填充“`unknown{*}`”，便于其他贡献者找到未知项，而不是填写“未知”、“不知道”。其中“`unknown{*}`”中的“`*`”可以替换为您对这个项的猜测，便于其他贡献者找到这个项应填写什么。

> 当某一栏不用填写什么例如`## 注释`下的`{note}`时，您可以填写“`无`”，但不能删除那一栏文本。

示例：
```markdown
# Vehicle

## 描述

载具的基本组成组件

## 用法

套用在场景载具物体最顶层物体上

## 注释

无

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| name | string | 载具名称 | 
| seats | List<[Seat](/Documents/Components/Vehicle/Seat.md)> | 座位 |
{以下省略}
```

## 编程语言类文档编写规范

包括以下元素：
```markdown
# {title}
## 描述
{description}
## 属性
| 属性 | variable类型 | 类型 | 描述 |
| ----------- | ----------- | ----------- | ----------- |
| {member.name} | {member.varType} | {member.type} | {member.description} |
## 事件
| Event | 描述 |
| ----------- | ----------- |
| {event.name} | {event.description} |

## 方法
| Method | 描述 |
| ----------- | ----------- |
| {method.name}( **{value} ) | {method.description} |

## 示例

### {Example1}
···lua
{Example1.code}
···
{以下省略}

```
其中，`{title}`与该table文档相对应的`{Index*.name}`一致，无需其他字符

`{description}`填写对这个table的描述，如“RS里的基础table，所有的AI与Player都包含这个table”。

`{member.name}`填写属性名，如“`Actor.team`”中的“`team`”

`{member.varType}`填写变量类型，如const、static、一般的，实际填写“`const`”、“`static`”、“`static`”。

`{member.type}`填写数据类型，如“`munber`”、“`Team`”、“`string`”。

`{member.description}`填写对这个变量的说明、作用，填写的内容请尽量详细可靠。

`{event.name}`、`{event.description}`暂未定义

`{method.name}( **{value} )`填写lua方法，其中“`{method.name}`”替换为方法名，“`**{value}`”替换为输入的数组，可留空。若文档中有其的示例代码片段，应设置超链接，如“`[ShowText](./Overlay#示例##Overlay.ShowText)`”

`{method.description}`填写对这个方法的描述，包括输入值的类型的描述，输出结果的类型与描述，如“```用于弹出文本。`string`（string）为`显示的文本、`time`（munber）为滞留时间```”。

在`### {Example*}`机器下的内容中：
> `{Example*}`填写示例代码片段的标题，如“`Overlay.ShowText()`”

> `{Example1.code}`填写代码片段，应包含注释。

注意：
> 当其上任何一个内容引用了任何一个其他的table时，应为这个字符串设置一个超链接，方便他人快速访问。如`{var.type}`中填写的“`List<Seat>`”时使用了一个组件，则应改为“`List<[Seat](/Documents/Components/Vehicle/Seat.md)>`”。其他地方同理。

> 当您不知道一个项例如`{method.description}`应填写什么时，应在这里填充“`unknown{*}`”，便于其他贡献者找到未知项，而不是填写“未知”、“不知道”。其中“`unknown{*}`”中的“`*`”可以替换为您对这个项的猜测，便于其他贡献者找到这个项应填写什么。

> 当某一栏不用填写什么例如`## 示例`下的`{Example*}`时，您可以填写“`无`”，但不能删除那一栏文本。

示例：
> 暂缺

## 开源模组上传要求

> ！！！请勿上传，未启用该功能

## 文档Commit提交

应先提交至开发分支（DEV-BRANCHES），并填写好Commit的详细信息（包括修改、增添的大概，方便其他贡献者），确保GPG签名有效，提交后等待管理员手动merge或Actions自动merge至稳定分支。不要fork或新建一个分支后向我们提交pull resquests

## Issue与社群讨论

对文档内容存在**不理解**之处、以及发现文档内容有所**缺失**或**错误**，可直接提出，强烈建议以发 **Issue** 的形式参与用户反馈，并希望关于本项目的各种交流都是**公开进行**的，因为这样才可以保证关键信息的一致性。

由于本项目属于文档型项目，故不设置 Issue 模板，同时允许中英文标题，但提交 Issue 请遵守以下原则：

1. 标题言简意骇，说明欲提出的问题要点；切勿使用表意含糊不清或索取性的标题

2. Issue 正文应对问题进行尽可能详细的描述，展开并聚焦有关的信息

3.  提出问题时注意 [提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md) 并且 [别像弱智一样提问](https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways)

你还可以通过加入社群的方式参与讨论（包括但不限于本项目
> ！！！未实装！！！
