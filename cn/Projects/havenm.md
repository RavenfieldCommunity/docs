---
title: HavenM
tagline: "Ravenfield原版AI增强."
description: "Ravenfield原版AI增强."
---

::: center
![](https://img.shields.io/discord/1132554570099343380.svg?label=Discord&logo=Discord&style=flat-square) ![](https://img.shields.io/github/downloads/RavenfieldCommunity/HavenM/latest/total.svg?label=当前版本下载量&logo=GitHub&style=flat-square) 

![](https://img.shields.io/badge/dynamic/json?label=最后更新时间%20(UTC)&logo=GitHub&style=flat-square&url=https%3A%2F%2Fapi.github.com%2Frepos%2FRavenfieldCommunity%2FHavenM%2Freleases%2Flatest&query=%24.assets%5B0%5D.updated_at)

项目repo：[Github](https://github.com/RavenfieldCommunity/HavenM) Steam工坊:[Item](https://steamcommunity.com/sharedfiles/filedetails/?id=3428665609)
:::

::: tip
尽管此项目被我们托管，却不属于本站(Github@RavenfieldCommunity).
:::

## 描述

HavenM 是一个旨在通过使用dnSpy反编dll来爆改原版bot逻辑的项目

其余参考Github

## 直接安装

`Win键`+`R`打开运行框，输入以下命令并确定，这会自动打开安装文件，按说明操作即可：
```batch
powershell -nop -c "$w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ravenfieldcommunity.github.io/static/get_havenm-utf8.ps1'));Read-Host;"
```

重新安装等价于更新!

**安装完后记得看完这篇文档！ ↓↓↓**

## 手动安装

非windows玩家请参考 [Q&A](#Q&A)!

### 替换dll

在这里下载 `Assembly-CSharp.dll`:

> [Github](https://github.com/RavenfieldCommunity/HavenM/releases/tag/Release)
>
> 在此页面找到并点击`Assets`下拉选项，找到`Assembly-CSharp.dll`点击并下载

> [KGithub镜像](https://kkgithub.com/RavenfieldCommunity/HavenM/releases/tag/Release)
>
> 方法同上

> [GHProxy](https://ghproxy.net/https://github.com/RavenfieldCommunity/HavenM/releases/download/Release/Assembly-CSharp.dll)

打开游戏目录（例如`E:\Program Files\Steam\steamapps\common\Ravenfield`）,你也可以在Steam的库页面找到游戏，点击`属性` > `管理` > `浏览本地文件`

![](https://ravenfieldcommunity.github.io/docs-img/Projects/mlang.002.png)

然后打开目录下的 `ravenfield_Data\Managed`, 将下载的dll替换进去

![](https://ravenfieldcommunity.github.io/docs-img/Projects/havenm.002.png)

### 安装BepInEX

如果你想启用自动更新，那么请跟着做，非windows玩家没必要也不能这么做。

参考[这里](./mlang.md#安装BepInEX)

### 安装ACUpdater

如果你想启用自动更新，那么请跟着做，非windows玩家没必要也不能这么做。

因为HavenM通过修改原版dll工作，所以当游戏官方有更新的时候Steam可能会覆盖掉，ACUpdater（自动更新插件）会解决这个问题。

在这里下载 `HavenM.ACUpdater.dll`:

> [Github](https://github.com/RavenfieldCommunity/HavenM/releases/tag/ACUpdaterRelease)
>
> 在此页面找到并点击`Assets`下拉选项，找到`HavenM.ACUpdater.dll`点击并下载

> [KGithub镜像](https://kkgithub.com/RavenfieldCommunity/HavenM/releases/tag/ACUpdaterRelease)
>
> 方法同上

> [GHProxy](https://ghproxy.net/https://github.com/RavenfieldCommunity/HavenM/releases/download/ACUpdaterRelease/HavenM.ACUpdater.dll)	

确保已经安装BepInEX。

打开游戏安装目录下的`BepInEx\plugins`并黏贴插件dll到这里，没有这个文件夹就先开一次游戏

![](https://ravenfieldcommunity.github.io/docs-img/Projects/havenm.003.png)

### 卸载

打开游戏安装目录下的`BepInEx\plugins`并**删除** `HavenM.ACUpdater.dll` 和 `HavenM.ACUpdater0.dll`(如果有).。

在Steam的库页面找到游戏，点击`属性` > `管理` > 点击`属性`，再点击 `已安装文件` 选项页的`验证游戏文件的完整性`:

![](https://ravenfieldcommunity.github.io/docs-img/Projects/havenm.004.en.png)


## Q&A
> **命令安全软件被误杀**
>
> 点一下允许即可
>
>  Or copy the following command and open [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701) or [powershell](https://learn.microsoft.com/en-us/powershell/scripting/windows-powershell/starting-windows-powershell?view=powershell-7.5), paste and press `Enter`
>  
> ```powershell
> $w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ravenfieldcommunity.github.io/static/get_ravenmcn_d-utf8.ps1'));
> ```
>
> Or copy the [original install script](http://ravenfieldcommunity.github.io/static/get_ravenmcn_d-utf8.ps1), paste and run it on windows terminal or powershell
>
> 详情参见[此处](./mlang.md#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)

> **HavenM run on mac/linux?**
>
> Yes. Refer [this](https://www.howtogeek.com/738967/how-to-use-steams-proton-to-play-windows-games-on-linux/#how-to-use-proton-for-steam) to enable Proton and install HavenM manually like on Windows.
>
> Auto-updater and installation script are unavailable now.
>
> Any problems with Proton, refer [ProtonDB](https://www.protondb.com/help)

> **Can HavenM run on piracy game**
>
> No.

> **Error "\* is not recongnized as the a name of cmdlet ..."**
>
> First, the command cannot be run on Windows 7. 
>
> Second, don't run the command on the windows terminal or powershell directly, run it on "Run" dialog window (press key `Win`+`R`), otherwise you only need to type the part enclosed in quote marks command (refer question "The firewall blocked the command.").

