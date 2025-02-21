---
title: HavenM
tagline: "Bot enhancement for Ravenfield."
description: "Bot enhancement for Ravenfield."
---

::: center
Project repo：[Github](https://github.com/RavenfieldCommunity/HavenM) Steam Workshop:[Item](https://steamcommunity.com/sharedfiles/filedetails/?id=3428665609)
:::

::: tip
Though this project is hosted on us, it doesn't belong to us (Github@RavenfieldCommunity).

中国玩家请参阅[此处](https://ravenfieldcommunity.github.io/docs/cn/Projects/havenm.html)(可能未完工)
:::

## Description

Refer Github

## Install by command

Refer Github

Re-installing equals updating!

Run this command to get a full update from time to time!

## Install manually

### Replace dll

Download the `Assembly-CSharp.dll` [here](https://github.com/RavenfieldCommunity/HavenM/releases/tag/Release).

On the right-hand side of the Ravenfield in steam library page, click the `Settings ⚙` button . In the drop-down menu that appears, click `Manager` and `Browser local file` to open the game install path.

Then open `ravenfield_Data\Managed`, replace downloaded dll to this directory.

### Install BepInEX

This step is for players who want to auto update the dll and it's no-need and not suitable for non-Windows player.

Refer [docs](https://docs.bepinex.dev/articles/user_guide/installation/index.html)

### Install ACUpdater

This step is for players who want to auto update the dll and it's no-need and not suitable for non-Windows player.

Because HavenM works by editing game dll, so the dll may be replaced to the original game dll by Steam when game has offical update. The ACUpdater will solve this problem.

Download the `HavenM.ACUpdater.dll` [here](https://github.com/RavenfieldCommunity/HavenM/releases/tag/ACUpdaterRelease).

Make sure BepInEX is already installed.

Open game install path and add it to `BepInEx\plugins`. If the folder isn't exist and you installed BepInEX just now, run the game and the folder will be created automatically.

### Uninstall

Open game install path and open folder `BepInEx\plugins`, delete `HavenM.ACUpdater.dll` and `HavenM.ACUpdater0.dll`(if exists). 

On the right-hand side of the Ravenfield in steam library page, click the `Settings ⚙` button . In the drop-down menu that appears, click `Properties` and click `Verify game` button on `GENERAL` page.

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

