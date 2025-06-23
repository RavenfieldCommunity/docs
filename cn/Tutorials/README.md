---
category: 
- 教程
---
# MOD教程

## 前言
Hi~（＾∀＾●）ﾉｼ

欢迎成为RF的modder（模组作者）！

此页面集将指导您创建MOD

放心，RF的modding流程在同类游戏里可能是最友好的！

::: tip
此文档可能在某些方面仍然存在笼统、错误的部分，但只要我没弃坑这个项目都应该会长期维护&更新&重写XD，欢迎时不时回来这里!!

另外欢迎回到这个项目的[旧Steam指南](https://steamcommunity.com/sharedfiles/filedetails/?id=2902809158)给我们点赞或回馈点数！
:::

## 在启程之前...(必读)
在启程之前，这是您需要的掌握一些技能，**您必须至少先看一遍教程才能确保您MODDING的顺利，这里不是零基础教程**：

你可以在[资源镜像](/cn/RESOURCE.md)中找到下载链接
### 你必须掌握的技能
> ***Unity开发***
>
> **可以代表这项技能的软件** [Unity Editor](https://unity.com/releases/editor/archive) （中国特供版爬） *要求2020.3版的最新小版本*
>
> **描述**
>
> 这是这个游戏的的游戏引擎，也是这个系列的核心，但是您不必完全掌握，您只需了解Unity的核心操作即可（甚至不用完全记住，有些东西学了一辈子都用不到），您可以去查找相关速通教程（5小时内为佳），然后在实际开发中不断提升能力
>
> **学习路线（仅参考）**
>
> 初阶 [Tutorials1(速通请跳P1\~8、11\~17、20\~31、33\~61)](https://www.bilibili.com/video/BV1gQ4y1e7SS) => 
>
> 中高阶 [Unity Learn(Unity官方课程，支持中文翻译)](https://learn.unity.com/) [Unity文档](https://docs.unity.cn/cn/2020.3/Manual/index.html)

> ***模型、动画制作***
>
> **可以代表这项技能的软件** [Blender](https://www.blendercn.org/)、[Blockbench](https://www.blockbench.net/)
>
> **描述**
>
> 这项技能我们同样无需完全掌握，速通即可，然后在实际项目中不断提升能力（除非你能找到美术资源，版权的话一般来说只要不盈利都是允许的。不提倡高模，模型面数最好低于8万，推荐使用Blender版本2.93）
>
> Mod开发包仅提供了Blender的支持，如果你想使用其他的建模软件制作武器动画、皮肤（纯模型没关系），需要自行转化依赖blend文件为其他格式（包含骨骼）并导入进目标软件即可
>
> **学习路线（仅参考）**
>
> 初阶 [建模(速通请跳P1\~23)](https://www.bilibili.com/video/BV1qq4y1772P) [动画(速通请跳P1\~18)](https://www.bilibili.com/video/BV13y4y1H75J)
>
> 中阶 [动画(速通请跳P1\~18)](https://www.bilibili.com/video/BV13y4y1H75J) [硬表面建模(速通请看完)](https://www.bilibili.com/video/BV14A411n76J)
>
>请不要花费大量时间学习Blender的材质节点，了解材质槽等基础概念即可，Unity的材质并不与Blender兼容，有这时间不如学一下Unity的Shader（也不建议Shader，现阶段Shader跨版本兼容性不好，如果你使用的Unity版本与游戏的有差别，Shader效果也会有差别）
>
> **提示**
>
> 无论您使用何种版本的Blender（2.79b除外），都请使用乌鸦的[FBX导出预设(*.blend不兼容)](https://steamcommunity.com/sharedfiles/filedetails/?id=2690680489)！
>
> 或者更进一步，在Blender导出fbx模型时使用[Better FBX Importer & Exporter插件](https://blendermarket.com/products/better-fbx-importer--exporter)以最大化兼容性(付费，自行搜索破解版)

### 你可以额外掌握的技能
> ***音频制作***
>
> **可以代表这项技能的软件**[Audition](www.adobe.com)、[Audacity](https://www.audacityteam.org/)
>
> **描述**
>
>用于剪辑音效，同样速通

> ***C#、Lua(Ravenscript)***
>
> **可以代表这项技能的软件** [VS Code](https://code.visualstudio.com/)、[JetBrains' apps](www.jetbrains.com)、[Visual Studio](https://visualstudio.microsoft.com/zh-hans/vs/community/)
>
> **描述**
>
> 除非你不想干高级一点的MOD开发，可速通（至少包括基本语法、简单理解面向对象）
>
> **学习路线（仅参考）**
>
> 初阶（速通级，需要一定编程基础） [C#](https://www.bilibili.com/video/BV1sy4y1u7cw)、[Lua](https://www.bilibili.com/video/BV1vf4y1L7Rb)
>
>中高阶 [Unity文档(毕竟万物基于Unity，除了编程语言不同，开发逻辑完全一致)](https://docs.unity.cn/cn/2020.3/Manual/) [菜鸟教程](https://www.runoob.com/)、[Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/)
>
> **提示**
>
> Lua它相比C#更友好且目前在RF开发Mod写脚本用得更多的还是Lua(Ravenscript),除非你想使用[BepInEx](https://bepinex.dev)这类高级UnityMOD开发框架，否则不建议C#
>
> 但C#的逻辑与Lua一致且ide支持更友好，你还是得学C#才能获得开发能力地最大化
>
> 推荐配合ChatGPT一起学习开发Ravenscript脚本！

**看不懂可以硬着头皮看，实际开发过程有不会可以重新回来看相应内容，没有谁在实操中可以直接一下记下所有技能点

当然，一切的学习都需要时间**

## 文档正文

<= 正文在侧边栏

在开始前，你必须安装Unity并在你新建得Unity项目中导入RFTools（开发工具包，如果你使用的是旧版本的RavenfieldToolPack就直接解压并使用Unity打开此项目文件夹）

**注意Unity Editor的版本是否兼容**

这两项的下载链接你可以在本站的[资源镜像](/cn/RESOURCE.md)内找到

建议先通读所有教程再精读

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

一些有用的英文网站与**官方Discord服务器**在顶栏上的“站外链接”里 ↑↑

**非官方QQ频道号**：9pmc179t29（似得差不多了）

**非官方QQ群**：771055407（也许是目前最大专业群）、~~672972617（modder多但是不是专业群）~~ （群里modder跑啦但是可以和我们吹水hh）

## 后注

*有新modder入门*

*有老modder弃坑*

*道一句，人走茶凉各奔东西空怅叹*

*也喜得，旧调重弹满座高朋又潮起*

*无论如何*

*敬每一个路过的你*

*RF的光彩总留下一处你的记忆~*