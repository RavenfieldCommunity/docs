---
category: 
- 教程
---
# RFCreator Project

## 前言
Hi~（＾∀＾●）ﾉｼ

欢迎成为RF的modder！

此页面集将指导您创建MOD

::: tip
此文档可能在某些方面仍然存在笼统、错误的部分，但只要我没弃坑这个项目都应该会长期维护&更新&重写XD，欢迎时不时回来这里!!

另外欢迎回到这个项目的[旧Steam指南](https://steamcommunity.com/sharedfiles/filedetails/?id=2902809158)给我们点赞或回馈点数！
:::

## 在启程之前...(必读)
在启程之前，这是您需要的掌握一些技能，**您必须至少先看一遍教程才能确保您MODDING的顺利，RFCreator Project不是零基础教程**：

### 你必须掌握的技能
#### Unity开发
::: details 可以代表这项技能的软件
[Unity Editor](https://unity.com/releases/editor/archive) （中国特供版爬）

**要求2020.3版的最新小版本**
:::

::: details 描述
这是这个游戏的的游戏引擎，也是这个系列的核心，但是您不必完全掌握，您只需了解Unity的核心操作即可（甚至不用完全记住，有些东西学了一辈子都用不到），您可以去查找相关速通教程（5小时内为佳），然后在实际开发中不断提升能力
:::

::: details 学习路线（仅参考）
初阶 [Tutorials1(速通请跳P1\~8、11\~17、20\~31、33\~61)](https://www.bilibili.com/video/BV1gQ4y1e7SS) => 

中高阶 [Unity Learn(Unity官方课程，支持中文翻译)](https://learn.unity.com/) [Unity文档](https://docs.unity.cn/cn/2020.3/Manual/index.html)
:::
#### 模型、动画制作

::: details 可以代表这项技能的软件
[Blender](https://mirrors.aliyun.com/blender/release/)（如果你想在这个游戏做MOD就必须用Blender😡）
:::

::: details 描述
这项技能我们同样无需完全掌握，速通即可，然后在实际项目中不断提升能力（除非你能找到美术资源，版权的话一般来说只要不盈利都是允许的。不提倡高模，模型面数最好低于8万，推荐使用Blender版本2.93）
:::

:::: details 学习路线（仅参考）
初阶 [建模(速通请跳P1\~23)](https://www.bilibili.com/video/BV1qq4y1772P) [动画(速通请跳P1\~18)](https://www.bilibili.com/video/BV13y4y1H75J)

中阶 [动画(速通请跳P1\~18)](https://www.bilibili.com/video/BV13y4y1H75J) [硬表面建模(速通请看完)](https://www.bilibili.com/video/BV14A411n76J)
:::warning
**请不要花费大量时间学习Blender的材质节点，了解材质槽等基础概念即可，Unity的材质并不与Blender兼容，有这时间不如学一下Unity的Shader**
:::
::::

:::tip
无论您使用何种版本的Blender（2.79b除外），都请使用乌鸦的[FBX导出预设(*.blend不兼容)](https://steamcommunity.com/sharedfiles/filedetails/?id=2690680489)！

或者更进一步，在Blender导出fbx模型时使用[Better FBX Importer & Exporter插件](https://blendermarket.com/products/better-fbx-importer--exporter)以最大化兼容性(付费，自行搜索破解版)
:::


### 你可以额外掌握的技能

#### 音频制作
::: details 可以代表这项技能的软件
[Audition](www.adobe.com)、[Audacity](https://www.audacityteam.org/)
:::

::: details 描述
用于剪辑音效，同样速通
::: 

#### C#、Lua(Ravenscript基于此)

::: details 可以代表这项技能的软件
[VS Code](https://code.visualstudio.com/)、[JetBrains' apps](www.jetbrains.com)、[Visual Studio](https://visualstudio.microsoft.com/zh-hans/vs/community/)
::: 

::: details 描述
除非你不想干高级一点的MOD开发，不然就要学，可速通（至少包括基本语法、简单理解面向对象、会打Helloworld以及一部分实例）
:::
        
::: details 学习路线（仅参考）
初阶（速通级，需要一定编程基础） [C#](https://www.bilibili.com/video/BV1sy4y1u7cw)、[Lua](https://www.bilibili.com/video/BV1vf4y1L7Rb)

中高阶 [Unity文档(毕竟万物基于Unity，除了编程语言不同，开发逻辑完全一致)](https://docs.unity.cn/cn/2020.3/Manual/) [菜鸟教程](https://www.runoob.com/)、[Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/)
:::
        
:::tip
Lua它相比C#更友好且目前在RF开发Mod写脚本用得更多的还是Lua(Ravenscript)

最重要的一点是，TMD从EA27开始，游戏开始限制外来C#脚本的导入，RFTools在实际C#开发中缺少API支持，开发环境不友好，游戏导入机制极其SB，导致开发体验糟糕，除非你想使用[BepInEx](https://bepinex.dev)这类高级UnityMOD开发框架，否则不建议C#

但是，学习使用RS开发脚本是一项极其繁琐的行为（反复导出+加测试MOD），不如C#在Unity Editor里的所见即所得与快速修改，加之C#的逻辑与Lua一致，因此从这一方面来说如果你真的打算使用Lua来娴熟地开发脚本，那么你还是得学C#才能获得开发能力地最大化，等到你的C#在Unity实战运用得极为成熟了，再快速入门Lua
:::

**看不懂可以硬着头皮看，实际开发过程有不会可以重新回来看相应内容，没有谁在实操中可以直接一下记下所有技能点**

## 文档正文

<= 正文在侧边栏

在开始前，你必须安装Unity并在你新建得Unity项目中导入RFTools（开发工具包，如果你使用的是旧版本的RavenfieldToolPack就直接解压并使用Unity打开此项目文件夹）

这两项的下载链接你可以在本站的[资源镜像](/cn/RESOURCE.md)内找到

**记住多研究RFTools里的官方预制件！**

更新计划：
> wpn.1 武器
>
> vhc.1 载具
>
> map.1 地图
>
> map.2 自定义游戏模式（TriggerSystem与ScriptMission）
>
> otr.1 RFTools杂项（包括RFTools的一些功能、文件目录结构、常见问题等的集合）
>
> otr.2 皮肤
>
> ext.1 BepInEX插件
>
> rvs.1 Ravenscript（RS的入门）
>
> rvs.2 Mutator（Mutator的制作）
>
> rvs.3 反盗版（MOD内建反盗版的工作原理与实战）
>

:::: details ＳＯＭＥ　ＴＨＩＮＧＳ
> 我个人感觉做模组到了一定地步就是动画和脚本了，模型很多人都是“偷（DOWNLOADS）”的，但是如果你是一个有自己想法的人可以像@[青木](http://steamcommunity.com/profiles/76561198368231803)一样自己设计并制作。比如像我的模组大部分可以说是换皮，素材经常重复利用，不过说实话我的重复利用度已经很低了，[LETMS](https://steamcommunity.com/sharedfiles/filedetails/?id=2798038529)全系用的apfsds和heat模型总共也就俩，这几个武器的ui也是完全一致的，我是会给不同的炮弹不同的建模以及ui。在制作枪械模组的时候可以学习下骨骼和权重（用于弓弩或者机枪弹链），这些在皮肤和载具也很可能用到。制作载具基本就是拿原版换皮调调数据就完事，但是不管怎么样坐在剧的时候还是得自己弄精简的碰撞箱，这也需要点模型知识。皮肤是需要权重和绑骨。地图差不多就是找素材搭积木弄寻路，这个在之前这位佬（此项目所有者）的指南里应该有我就不说了。脚本需要编程知识，我不会，但是这边有几个网站
可能能给你提供帮助
>
> [http://ravenfieldgame.com/ravenscript/getting-started.html](http://ravenfieldgame.com/ravenscript/getting-started.html) #your-first-bug 这是乌鸦的
>
> [https://blog.csdn.net/x3464/article/details/105137284](https://blog.csdn.net/x3464/article/details/105137284)　#这是＠[Lezvin](http://steamcommunity.com/profiles/76561198310507502)大佬翻译的

::: right
*————@SRNKMDT[[Steam](http://steamcommunity.com/profiles/76561198859753798) [Github](https://github.com/SOP-von-SRN)]*
:::
::::

## 社区服务支持

一些有用的网站在顶栏上的“站外链接”里 ↑↑

**非官方QQ频道号**：9pmc179t29

**非官方QQ群**：771055407（modder几乎没有但能保证回答你的问题并提供干净的环境）、672972617（modder多但是不是专业群） 

## 附:如何更聪明地问他人问题
原文链接：https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way

！！！萌 新 ＭＯＤＤＥＲ特 供！！！

希望能帮到你！

1. 在开始询问他人之前，尽可能嘗試通过其他渠道來找到答案，如搜索引擎、论坛已有文章，不要问不该问的SB问题（自己明明可以解决非要问别人），如：

“我该怎样安装Unity？”“我找不到Unity”

2. 不要使用过度的修饰词，例如：

“救命！！！”“救救孩子！！”“緊急”

3. 仔細、清楚地描述问题而并非猜測，讲明需求，为他人提供准确的线索与文件，以帮助他人复现问题。例如：

SB问的问题：“救命！我的Unity无法启动！我怀疑电脑出了问题...”（你都怀疑了你自己就不会去查吗？？？而且什么信息也没提供...）

聪明人问的问题：“我的Unity在（什么情况下）...无法启动，报错‘Couldn't find main.dll’，这是出现错误时的日志文件[文件]，运行环境与程序版本是Win10 22H2 64bit、2022.3.23f1，我尝试过重装Unity与sfc /SCANNOW但没有用，我该如何修复它？”

因此，描述问题请包括：发生问题时的环境与行为、问题出现时的报错信息与日志、**工程文件**，程式信息、尝试过的方法、解决问题的具体要求

4. 別用低聲下氣取代你真正該做的事，尤其是伴隨著與實際問題含糊不清的描述時这更令人反感

（虽然我好像就是这样...当然礼貌性的用语还是可以的！)

5. 多给创意工坊的内容一个赞！！！

**这有助于维护良好的社区氛围**