---
title: RavenM联机插件国内版
description: 适用于国内Ravenfield玩家的RavenM联机插件。通过插件，只需简易操作，您即可在多人游戏中加入房间，与他人文字或语音聊天，同其他玩家在游戏地图中畅玩，包括全mod支持
photoSwipe: true
---

::: center
![QQ频道号](https://img.shields.io/badge/QQ频道-9pmc179t29-blue?style=flat-square) ![插件QQ群号](https://img.shields.io/badge/插件QQ群-710832844-blue?style=flat-square) ![插件QQ群号](https://img.shields.io/badge/插件QQ群-677540488-blue?style=flat-square) ![插件oopz频道号](https://img.shields.io/badge/%E6%8F%92%E4%BB%B6Oopz%E9%A2%91%E9%81%93-%E6%97%A0%E9%82%80%E8%AF%B7%E9%93%BE%E6%8E%A5-blue?style=flat-square)

![最新版本号](https://img.shields.io/badge/dynamic/json?label=%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC&&color=green&&style=flat-square&url=https://gitee.com/api/v5/repos/RedQieMei/Raven-M/releases/372833&query=%24.name)
:::

## 描述

RavenM联机插件国内版（此页面已经授权。本插件国内名或称 RFM），是国内社区在原RavenM国际版的基础上的二改版本，更适合中国RF玩家使用

通过插件，只需简易操作，您即可在多人游戏中加入房间，与他人文字/语音聊天，同其他玩家在游戏地图中畅玩，包括全mod支持

这一切都由RavenM提供，依靠Steam官方稳定、安全、强大的[玩家网络](https://partner.steamgames.com/doc/features/multiplayer)提供主机中继与点对点连接服务

RavenM是社区驱动的Ravenfield联机插件，国际版在[Github](https://github.com/iliadsh/RavenM)，另可参见本站英文版获取详情

## 预览图

<!-- markdownlint-disable -->
<!-- from https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/theme/src/zh/guide/feature/photo-swipe.md -->
<div class="image-preview"> 
  <img src="https://ravenfieldcommunity.github.io/docs-img/Projects/ravenm.001.cn.png" />
  <img src="https://ravenfieldcommunity.github.io/docs-img/Projects/ravenm.002.png" />
</div>

<style>
  .image-preview {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .image-preview > img {
     box-sizing: border-box;
     width: 33.3% !important;
     padding: 9px;
     border-radius: 16px;
  }

  @media (max-width: 719px){
    .image-preview > img {
      width: 50% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>

<!-- markdownlint-restore -->

## 安装

::: caution
**安装完后或者有问题记得看完这篇文档！ ↓↓↓**

**特别是下面的[常见问题](#常见问题)！**

**你也可以在[这里](#使用)获取RavenM的详细使用指南**
:::

### 直接安装

在开始菜单找到并打开 [终端](https://apps.microsoft.com/detail/9n0dx20hk701?hl=zh-CN&gl=CN) 或 [Powershell](https://www.51cto.com/article/696873.html)，右键复制粘贴以下命令到那边，并回车确定，稍等一下，按说明操作即可：

```powershell
$w=(New-Object System.Net.WebClient);
$w.Encoding=[System.Text.Encoding]::UTF8;
iex($w.DownloadString('https://ravenfieldcommunity-static.netlify.app/get_ravenmcn_d-utf8.ps1'));
Read-Host;
```

直接安装方式不支持Win7自带的Powershell 2.0，有需要可以自行升级Powershell或使用手动安装方式

如果你是MacOS或Linux用户，请打开终端运行以下命令，这会自动打开安装文件，按说明操作即可：
```sh
curl -sSL http://ravenfieldcommunity.github.io/static/get_ravenmcn_d-utf8.sh | bash
```

### 手动安装
先安装[BepInEX](./mlang.md#安装BepInEX)

然后加入qq群，获取插件包，将其解压到游戏目录下的 `BepInEX/plugins` 目录

如果没有这个目录，就在正确安装BepInEX后先运行一遍游戏


### 工具辅助安装

访问链接获取安装文件：[[蓝奏云(提取码:eetl)]](https://wwyl.lanzouj.com/b007slq59i)  

若无法访问蓝奏云，请参考[此知乎专栏](https://zhuanlan.zhihu.com/p/419457461)

在电脑上**下载并运行**网盘zip压缩包内的EXE文件即可

## 使用

参阅[RavenM联机使用](/cn/in-GAME/ravenm.md)

## 更新

仿照安装步骤，重新安装一遍即可

## 常见问题

> **运行命令，为什么杀软报毒**
>
> 参见[此处](./mlang.md#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)

> **大部队在哪里？**
>
> 参见页首的QQ频道号和QQ群
>
> 若群已满，请在安装RavenM后，添加游戏右下角显示的QQ群号
>
> 这里也开设了一个[Oopz](https://oopz.cn/)语音频道，邀请链接请去群里问，或者在公共广场搜
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
> ![steamcommunity302设置页面截图](https://ravenfieldcommunity.github.io/docs-img/Projects/mlang.007.png)

> **第一个安装方式的备用方法？**
>
> `Win键`+`R`打开运行框，输入`powershell`并确定，在打开的Powershell窗口复制并输入以下命令并回车，效果等价上面：
> ```powershell
> $w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ravenfieldcommunity.github.io/static/get_ravenmcn_d-utf8.ps1'));
> ```
>
> 如果无法正常链接到脚本，请将命令中的`ghproxy.net/https://raw.githubusercontent.com/ravenfieldcommunity/ravenfieldcommunity.github.io/main`替换为`ravenfieldcommunity.github.io`(准确替换！)

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