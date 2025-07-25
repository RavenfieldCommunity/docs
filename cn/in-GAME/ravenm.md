---
description: 适用于国内版RavenM联机插件的使用说明
---

# RavenM联机使用
## 安装

参考[RavenM联机插件国内版](/cn/Project/ravenm.md)

打开游戏，若右下角提示版本不兼容，请参考[常见问题](#常见问题)

**已安装插件的玩家，如果插件有更新，游戏时会弹窗提示（但你需要手动重新下载安装）：**

![更新提示](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.004.png)

你可以直接运行你以前下载的安装工具，安装工具的会自动使用服务器提供的最新版本RavenM安装

## 游戏前配置房间
以下括号中的英文部分表示国际版RavenM原文

### 加入&创建房间

进入游戏后打开Instant Action（即平常跟游戏时一样）的对局配置界面，在此时按下`M`键以呼出联机大厅菜单：

![主界面](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.001.png)

`主机`（`HOST`）意为创建房间，`加入`（`JOIN`）意为加入房间

点击`主机`，你可以自行配置房间属性，注意当你勾选`是否为公共房间`时，你的房间会公开在联机大厅列表（该选项在新版本已经被房间密码功能替代）

![房间配置界面](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.002.png)

点击`确定`，即可进入预开始界面，点击`离开房间`可以关闭此房间（关闭地图不会关闭房间，除了关闭游戏），左边菜单的数字是你的房间Lobby ID（LID，房间ID）

![玩家列表](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.003.png)

像平常一样，配置好本局游戏（也会有Bot。非房主只能选择队伍），点击开始`START`即可进入游戏

点击`加入`，分别有两个选项，一为通过联机大厅列表进入，一为直接使用LID进入房间

点击联机列表的一个房间，可以查看房间信息并选择进入房间（房间如果设置了限制或为 RavenM国际版 创建的房间，或房主使用的兼容版EA27插件较为古老，`加入房间`按钮可能不可用）	

加入后，如果房主没有开始游戏，你点击开始`START`后，你可能需要等待房主开局（左边的玩家列表中玩家名字的颜色即为准备状态（绿色=就绪，红色=为加载玩mod，灰色=游戏中处于重生cd）

玩家加载完成mod后，玩家名左边会显示所处队伍，否则为已加载mod数

房主可以通过在玩家列表右键玩家名，或通过命令踢人

如果游戏已经开始，你会直接进入对局（但是地图可能不会正确同步）

另外，无论如何（即使为No Mod模式），玩家都会同步下载房主所使用的Mod，Mod会在进入房间的时候下载与载入

## 游戏中

进入游戏后，按`P`键打开/隐藏聊天框，按`Y`可输入全局消息（按`Enter`发送，`Esc`关闭文本框），按`U`可在队伍（Eagle\Raven）范围内输入消息（同）

按`Enter`打开重生界面的同时可打开房间菜单

按`CapsLock`可打开语音（不需要Discord。语音基于Steam，有方向性）

按`F7`可打开数据流检测UI(仅作测试用)

按`~`可标记地点

小队指挥控件（`G`、`B`键）不可用于指挥小队内其他玩家（因为连添加都添加不了）

右上角会显示Ping延迟值（房主的当然为0ms）

按`Tab`打开的计分面板会也会显示玩家击杀统计

另附聊天框的可用命令（有些命令需要权限，`true`和`false`参数不分大小写）:
| 命令 | 仅房主可用 | 描述 |
|------|------|------|
| `/help <命令名>` | 否 | 获取对应命令的帮助 |
| `/nametags <True\|False>` | 是 | 是否启用玩家名牌 |
| `/nametagsteamonly <True\|False>` | 是 | 是否仅启用同队伍的玩家名牌 |
| `/kill <玩家名>` | 是 | 击杀对应名称的玩家 |
| `/kick <玩家名>` | 是 | 将对应名称的玩家踢出房间 |
| `/ban <玩家名>` | 是 | 将对应名称的玩家永久踢出房间 |
| `/hostteammemberchange ?` | 是 |  |
| `/hostteamchange ?` | 是 |  |

示例如: `/nametags true`

玩的开心！

![游戏截图_Discord@Wolffe#6986](https://steamuserimages-a.akamaihd.net/ugc/1917988387306327667/C90622D8C9B8B654E187AA5038A84759DFF050D9/)


## 附加mod 

你也可以订阅mod[房主工具](https://steamcommunity.com/sharedfiles/filedetails/?id=3433624237)用来代替房间命令

启用mutator后在游戏按`O`键打开面板，有ui更方便

## 常见问题

> **右下角提示“Steam连接失败，请检查网络联接”**
>
> RavenM联机基于Steam官方架设的联机服务，故需要Steam在后台且不处于离线模式，请不要关闭Steam或尝试使用盗版环境运行

> **无法在未启动Steam的情况下正常直接运行游戏**
>
> 请自行临时禁用RavenM

> **右下角提示“版本不兼容”**
>
> 游戏大版本更新，导致插件不兼容，请更新或临时禁用插件

> **无法使用本地Mod**
>
> 由于联机需要房主与玩家同步工坊Mod，这依赖于Steam创意工坊服务（从本地Mod体量、云服务传输文件成本考虑，后续也不会考虑兼容本地Mod），故不本地Mod不可用
>
> 未来大概会支持？
> 
> 爱发电定制的Mod一般会由作者上传到工坊，请在工坊订阅问题Mod

> **如何删除游戏时同步的Mod？**
>
> 打开游戏安装目录，返回上两级目录（例如游戏目录为`E:\Program Files\Steam\steamapps\common\Ravenfield`，返回上级目录后，文件管理器应处在`E:\Program Files\Steam\steamapps\`），然后依次打开当前目录下的`\workshop\content\636480\`，清空其内内容即可（然后你自己订阅的Mod要重新下载，所以大可不必管这个）

> **原版游戏出现严重Bug（例如无法上车）**
>
> 一般是由于原版游戏小型补丁更新，导致插件不适用于现有游戏版本，切换至游戏stable（标准）分支（当为Beta版时，即在Steam游戏属性 -> 测试版处选`无`），更新或临时禁用插件即可

> **如何禁用插件**
>
> 打开steam，在游戏属性的启动参数里加上`-noravenm`（如果已经有其他参数请空格再加）即可，如图，要启用插件时记得手动删除：
>
> ![截图](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.005.png)
>
> 或打开游戏安装目录的`BepInEX\plugins`文件夹，将`RavenM.dll`文件重命名为`RavenM.dall`即可（或其他名称。但文件扩展名不可包含“`dll`”字样。若文件管理器不显示扩展名，参考[Win10](https://jingyan.baidu.com/article/9158e0004c6cbea2541228da.html)、[Win7](https://jingyan.baidu.com/article/3c48dd347a3e76e10be35895.html)）

> **联机失败**
>
> 请检查：
> - 游戏版本是否为最新稳定版，非`ravenm-compatible`分支版本，非任何`legacy-ea**`、`pervious-ea`、`test`分支版本，建议非Beta版
>
>    steam游戏开始按钮旁边，或者游戏属性的“`测试版`”选项卡写的就是当前游戏分支版本，为“`None 无`”即为最新稳定版。
> - 是否安装了非动态汉化补丁（基于修改游戏dll的。极少概率导致）
> - 插件版本是否为最新，且不为国际版（否则请至[本站](/cn/Project/ravenm.md)下载）
> - 网络是否稳定、可用
>    是否运行过你所安装的安全软件的网络修复工具来尝试修复，是否修改了hosts，是已经启动加速器
> - Steam是否抽风
> 
>    有时Steam抽风也会造成问题，可以过一段时间再看看
> - 如果是朋友间联机，请让朋友一并检查
>
> 如果仍无法解决问题，可能为Steam问题，请等待一段时间，或提问[QQ群](/cn/Project/ravenm.md#常见问题)

> **Ping延迟有点高**
>
> 要不你试一下挂加速器？

> **输入消息时未输入完就自动发送**
>
> Windows输入法的一点小毛病，可以试试换一个输入法

> **房主如何快速控制使用的mod**
>
> 进steam的游戏属性的创意工坊选项卡，你可以在这里直接管理mod：
>
> ![]()
>
>每个项目旁边的打勾复选框用来启用或禁用mod，搜索可以搜mod名，或对应tag的mod
>
> 点高级选项，新建 合集collection 分类mod，可以在游戏快速切换要加载mod合集
>
> 点 [`steam://gameproperties/636480/workshop`](steam://gameproperties/636480/workshop) 这个链接可以快速打开这个界面，你也可以复制这个链接在桌面新建一个快捷方式

> **如何加快从启动游戏到进入房间的速度**
>
> 使用no mods模式启动游戏，这样你可以省掉加载自己的mod的时间，只加载房主的mod

> **加入房间之后ui消失**
>
> Steam的问题，过一会再开


> **mod没下完自动退出房间**
>
> 偶发问题，可以提前自行订阅问题工坊mod