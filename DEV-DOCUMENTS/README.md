# 项目维护帮助

欢迎帮助我们维护RavenfieldCommunityResource（以下简称RCR）社区客制化支持项目！
在开始之前，您需要先阅读维护注意事项

## 维护注意事项

> [RavenfieldCommunityResource](/) 项目（简称RCR）是一个仅用于学习研究、社区开源、公益性质的[Ravenfield](https://ravenfieldgame.com/)文档，基于 [GPLv3](LICENSE) (除[/OpenSource Mod](/OpenSource%20Mod)与[/Resource](/Resource)内被另外声明的内容)协议开源，禁止一切商业使用，如需转载请注明"Github@RavenfieldCommunityResource"

> 本项目为开源项目，不接受任何形式的催单和索取行为，更不容许存在付费内容

> 该项目使用 [Markdown](https://zh.wikipedia.org/zh-cn/Markdown) 语法进行文档书写

> 请上传内容之前检查版权合法性，您将您的内容上传至RCR时即意味着您同意以无Copyright署名的形式（除[/OpenSource Mod](/OpenSource%20Mod)与[/Resource](/Resource)内被另外声明的内容）授权RCR项目使用与分发您的内容

## Index、路径结构、命名规范

### Index

文档目录索引应以Markdown无序列表语法写在[主Index](/INDEX.md)、/Documents下（包括子文件夹）的README.md中，使用缩进标识（四个空格）文档的层级，并包括一下元素：
```markdown
# **RCR** {title}
- [{Index1.name}]({Index1.path})
- {N Type}
    - [{Index2.name}]({Index2.path})
{以下省略}
```

其中，`{title}`分为多个部分，分别填充以下内容（省略Documents、in-GAME）：
| 目录名 | 在索引中替换为 |
|------|------|
| DEV-DOCUMENTS | 项目维护帮助 |
| Components | RFTools组件 |
| Vehicle | 载具 |
| Weapon | 武器 |
| Map | 地图 |
| Misc | 其他 |
| Ravenscrpit | Ravenscrpit |
| Basic | 基础 |
| Tutorials | RFCreator Project |
| OpenSource Mod | 开源模组 |
| Resource | 资源镜像 |

如Documents\Components\Vehicle\README.md的`{title}`，应替换为“RFTools组件 - 载具”

每个`{Index*.name}`都应以对应的.cs脚本文件名或Lua table类名填写，如“DamageZone.cs”为"`DamageZone`"，文件名也为"`DamageZone.md`"

每个`{Index*.path}`都填充对应.md的绝对路径，如“`/Documents/Components/Vehicle/VehicleContentMod.md`”，不应使用local修饰，如“`.\VehicleContentMod.md`”是不被允许的

每个`{N Type}`都应以对应在RFTools\Scrpits里的父文件夹名填写（顶级的父文件夹名可省略），如“..\Visual”为"`Visual`"



示例：

```markdown
# **RCR** RFTools组件 - 载具

- [VehicleContentMod](/Documents/Components/Vehicle/VehicleContentMod.md) 载具导出配置
- [Vehicle](/Documents/Components/Vehicle/Vehicle.md)
- [Seat](/Documents/Components/Vehicle/Seat.md)
- [Plane](/Documents/Components/Vehicle/Plane.md)
- [Helicopter](/Documents/Components/Vehicle/Helicopter.md)
- [CarWheel](/Documents/Components/Vehicle/CarWheel.md)
- [Boat](/Documents/Components/Vehicle/Boat.md)
- [ArcadeCar](/Documents/Components/Vehicle/ArcadeCar.md)
- [AnimationDrivenVehicle](/Documents/Components/Vehicle/AnimationDrivenVehicle.md)
- Weapon
    - [AutoRepairVehicleWeapon](/Documents/Components/Vehicle/Weapon/AutoRepairVehicleWeapon.md)
    - [CarHorn](/Documents/Components/Vehicle/Weapon/CarHorn.md)
    - [Mortar](/Documents/Components/Vehicle/Weapon/Mortar.md)
    - [MountedStabilizedTurret](/Documents/Components/Vehicle/Weapon/MountedStabilizedTurret.md)
    - [MountedTurret](/Documents/Components/Vehicle/Weapon/MountedTurret.md)
    - [MountedWeapon](/Documents/Components/Vehicle/Weapon/MountedWeapon.md)
    - [TankTurret](/Documents/Components/Vehicle/Weapon/TankTurret.md)
{以下省略}
```

### 路径结构

纯英文，开头大写，只能包括连字符“`-`”,文件夹名参考{title}

### 命名规范

参考{Index*.name}

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

## 编程语言类文档编写规范

包括以下元素：
```markdown
# {title}
## 描述
{description}
## 属性
| 属性 | variable类型 | 类型 | 描述 |
| ----------- | ----------- | ----------- | ----------- |
|  |  |  |  |
## 事件
| Event | 描述 |
| ----------- | ----------- |
|  |  |

## 方法
| Method | 描述 |
| ----------- | ----------- |
|  |  |
```

## 开源模组上传要求

## 文档Commit提交

应先提交至对应人类语言的开发分支（如CN为中文稳定版分支，修改应提交至CN-DEV分支），并填写好Commit的详细信息（包括修改、增添的大概，方便其他贡献者），确保GPG签名有效，等待管理员手动merge或Actions自动merge。不要fork或新建一个分支后向我们提交pull resquests

## Issue与社群讨论

对文档内容存在**不理解**之处、以及发现文档内容有所**缺失**或**错误**，可直接提出，强烈建议以发 **Issue** 的形式参与用户反馈，并希望关于本项目的各种交流都是**公开进行**的，因为这样才可以保证关键信息的一致性。

由于本项目属于文档型项目，故不设置 Issue 模板，同时允许中英文标题，但提交 Issue 请遵守以下原则：

1. 标题言简意骇，说明欲提出的问题要点；切勿使用表意含糊不清或索取性的标题

2. Issue 正文应对问题进行尽可能详细的描述，展开并聚焦有关的信息

3.  提出问题时注意 [提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md) 并且 [别像弱智一样提问](https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways)

你还可以通过加入社群的方式参与讨论（包括但不限于本项目
> ！！！未实装！！！
