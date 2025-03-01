---
title: HavenM
tagline: "Ravenfield原版AI增强."
description: "Ravenfield原版AI增强."
---

::: center
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

### 替换dll

在 [这里](https://github.com/RavenfieldCommunity/HavenM/releases/tag/Release)下载 `Assembly-CSharp.dll` .

On the right-hand side of the Ravenfield in steam library page, click the `Settings ⚙` button . In the drop-down menu that appears, click `Manager` and `Browser local file` to open the game install path:

![](https://ravenfieldcommunity.github.io/docs-img/Projects/havenm.001.en.png)

Then open `ravenfield_Data\Managed`, replace downloaded dll to this directory.

![](https://ravenfieldcommunity.github.io/docs-img/Projects/havenm.002.png)

### Install BepInEX

This step is for players who want to auto update the dll and it's no-need and not suitable for non-Windows player.

Refer [docs](https://docs.bepinex.dev/articles/user_guide/installation/index.html)

### Install ACUpdater

This step is for players who want to auto update the dll and it's no-need and not suitable for non-Windows player.

Because HavenM works by editing game dll, so the dll may be replaced to the original game dll by Steam when game has offical update. The ACUpdater will solve this problem.

Download the `HavenM.ACUpdater.dll` [here](https://github.com/RavenfieldCommunity/HavenM/releases/tag/ACUpdaterRelease).	

Make sure BepInEX is already installed.

Open game install path and add it to `BepInEx\plugins`. If the folder isn't exist and you installed BepInEX just now, run the game and the folder will be created automatically:

![](https://ravenfieldcommunity.github.io/docs-img/Projects/havenm.003.png)

### Uninstall

Open game install path and open folder `BepInEx\plugins`, **delete** `HavenM.ACUpdater.dll` and `HavenM.ACUpdater0.dll`(if exists). 

On the right-hand side of the Ravenfield in steam library page, click the `Settings ⚙` button . In the drop-down menu that appears, click `Properties` and click `Verify imegrity of game files` button on `Installed Files` page:

![](https://ravenfieldcommunity.github.io/docs-img/Projects/havenm.004.en.png)


## Q&A
> **The firewall blocked the command.**
>
> Just allow it on your firewall.
>
>  Or copy the following command and open [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701) or [powershell](https://learn.microsoft.com/en-us/powershell/scripting/windows-powershell/starting-windows-powershell?view=powershell-7.5), paste and press `Enter`
>  
> ```powershell
> $w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ravenfieldcommunity.github.io/static/get_ravenmcn_d-utf8.ps1'));
> ```
>
> Or copy the [original install script](http://ravenfieldcommunity.github.io/static/get_ravenmcn_d-utf8.ps1), paste and run it on windows terminal or powershell

> **Is this a trojan? Why you tell me to turn off the firewall? Why you made such a installer?**
>
> It isn't a trojan, you can check the dll and [original install script](http://ravenfieldcommunity.github.io/static/get_ravenmcn_d-utf8.ps1) in any time, all the details are visible.
>
> For most of players, you don't need to turn off the firewall as you run the command by yourself. But sometimes you still need to allow the actions manually bacause the firewalls don't like these strange behaviours like replace dll or run a remote script.
>
> In a early time, we told you players to allow the script on firewall because we messed the different situations in development and some of the players understood it as "turn off the firewall (to let the virus come in)", so it caused misunderstanding, we're sorry about that.
>
> To let players can replace the dll ("install HavenM"), configure other things just by one step, and the players don not need to download any extra files, we made a installer using powershell
> 
> We didn't make a exe installer because we think a unknown exe is more dangerous than a above-board script and firewalls may dislike a exe more.

> **Can HavenM run on mac/linux?**
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

