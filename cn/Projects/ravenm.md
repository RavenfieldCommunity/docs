---
title: RavenM联机插件国内版
description: 适用于国内Ravenfield玩家的RavenM联机插件
---

::: center
![QQGuild](https://img.shields.io/badge/QQ频道-9pmc179t29-blue?style=flat-square) ![插件QQ群](https://img.shields.io/badge/插件QQ群-710832844-blue?style=flat-square) ![插件QQ群](https://img.shields.io/badge/插件QQ群-677540488-blue?style=flat-square)
:::

## 描述

RavenM联机插件国内版（授权），是国内社区在原RavenM国际版（社区驱动的Ravenfield联机插件，在[Github](https://github.com/iliadsh/RavenM)）基础上的二改版本，更适合中国RF玩家使用

## 安装

**安装完后或者有问题记得看完这篇文档！ ↓↓↓**

> **直接安装**
>
> `Win键`+`R`打开运行框，输入以下命令并确定，这会自动打开安装文件，按说明操作即可：
> ```batch
> powershell -nop -c "$w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ghproxy.net/https://raw.githubusercontent.com/ravenfieldcommunity/ravenfieldcommunity.github.io/main/static/get_ravenmcn_d-utf8.ps1'));Read-Host;"
> ```
>
> 直接安装方式不支持Win7自带的Powershell 2.0，有需要可以自行升级Powershell或使用手动安装方式

> **Macos/linux直接安装**
>
>如果你是MacOS或Linux用户，请打开终端运行以下命令，这会自动打开安装文件，按说明操作即可：
> ```sh
> curl -sSL http://ravenfieldcommunity.github.io/static/get_ravenmcn_d-utf8.sh | bash
> ```
>
> 或者请按照[BepInEX官方文档](https://docs.bepinex.dev/articles/user_guide/installation/index.html?tabs=tabid-nix#installing-bepinex-1)来配置你的BepInEX环境后，让一个用Windows的朋友安装RavenM并让他把游戏目录下的`BepInEX\plugins\RavenM.dll`发给你，然后安装这个插件dll

> **工具辅助安装**
>
> `Win键`+`R`打开运行框，输入以下命令并确定，这会自动打开安装文件，按说明操作即可：
> ```batch
> powershell -nop -c "$w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ghproxy.net/https://raw.githubusercontent.com/ravenfieldcommunity/ravenfieldcommunity.github.io/main/static/get_ravenmcn-utf8.ps1'));Read-Host;"
> ```
>
>此安装方式不支持Win7自带的Powershell 2.0，有需要可以自行升级Powershell或使用手动安装方式

> **手动一键安装**
>
> 访问链接获取安装文件：[[蓝奏云(提取码:eetl)]](https://wwyl.lanzouj.com/b007slq59i)  最新版本号见网盘内备注
>
> 若无法访问蓝奏云，请参考[此知乎专栏](https://zhuanlan.zhihu.com/p/419457461)
>
> 在电脑上**下载并运行**网盘zip压缩包内的EXE文件即可

## 使用

参阅[RavenM联机使用](/cn/in-GAME/ravenm.md)

## 更新

仿照安装步骤，重新安装一遍即可

## 常见问题

> **大部队在哪里？**
>
> 参见页首的QQ频道号和QQ群
>
> 若群已满，请在安装RavenM后，添加游戏右下角显示的QQ群号
>
> 如有问题可先至QQ频道或[贴吧](https://tieba.baidu.com/f?kw=ravenfield)提问（务必关注回复）

> **这个插件跟RFMP有什么区别？**
>
> RFMP （或称RFMM，全称“Ravenfield: Multiplayer Mod”，商店链接在[Steam商店](https://store.steampowered.com/app/1104390)）是一款社区制作的，独立于Ravenfield原版且带联机功能的游戏
>
> 它长得像原版只是因为乌鸦协助开发了这款游戏，因此这两个实际上是完全不同的游戏（而RavenM是真正用于原版RF的一个插件）
>
> RFMP发行于2019年7月11日，最后一次更新于[2020年5月31日（来源SteamDB）](https://steamdb.info/app/1104390/patchnotes/)
>
> 在官方的Discord服务器（可以理解为qq群，此处不提供原文链接），开发团队已经于2020年宣布放弃此项目，并关闭了下设所有频道的聊天权限，建议玩家使用RavenM作为更加好的替代
>
> RFMP曾辉煌了一段时期（甚至RF贴吧那边都搭建过国服服务器，开设联机赛，当然现在已经关了，Steam评论区犹见当年吧主贴的[公告评论](https://steamcommunity.com/profiles/76561198357197363/recommended/1104390/)），但由于RFMP确实确实比较粗糙，质量堪忧，挂壁飞天，不久就鬼服（指没人玩，没人有时间经常玩，越没人玩越不想玩）+ 停更 + 贬褒不一（评论区一堆差评和之前的好评） + 几年后永久停服了
>
> 至此，RFMP应是RF史上的一座遗迹

> **卸载插件？**
> `Win键`+`R`打开运行框，输入以下命令并确定，这会自动打开卸载向导（完全卸载插件与前置框架），按说明操作即可：
> ```batch
> powershell -nop -c "$w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ghproxy.net/https://raw.githubusercontent.com/ravenfieldcommunity/ravenfieldcommunity.github.io/main/static/uninstall_bepinex-utf8.ps1'));"
> ```

> **开了Steamcommunity302也无法正常执行命令？**
>
> 记得在设置里启用默认关闭的github代理:
>
> ![](https://ravenfieldcommunity.github.io/docs-img/Projects/mlang.007.png)

> **第一个安装方式的备用方法？**
>
> `Win键`+`R`打开运行框，输入`powershell`并确定，在打开的Powershell窗口复制并输入以下命令并回车，效果等价上面：
> ```powershell
> $w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ravenfieldcommunity.github.io/static/get_ravenmcn_d-utf8.ps1'));
> ```
>
> 如果无法正常链接到脚本，请将脚本中的`ghproxy.net/https://raw.githubusercontent.com/ravenfieldcommunity/ravenfieldcommunity.github.io/main`替换为`ravenfieldcommunity.github.io`(准确替换！)

> **Windows Defender误报病毒？**
>
> 参考[CSDN](https://blog.csdn.net/qq_54780911/article/details/121993809)
>
> 安装后记得回复原来的Windows Defender设置，**不建议使用CSDN链接中提供的工具！**


> **盗版能跑？**
>
> 可行，但绝对无法直接同步mod
>
> 此处不提供直接方法的链接，有条件真的建议入正