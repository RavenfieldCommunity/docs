---
title: HavenM
tagline: "Bot enhancement for Ravenfield."
description: "Bot enhancement for Ravenfield."
---

::: center
![](https://img.shields.io/discord/1132554570099343380.svg?label=Discord&logo=Discord&style=flat-square) ![](https://img.shields.io/github/downloads/RavenfieldCommunity/HavenM/latest/total.svg?label=Currect%20version%27s%20downloads&logo=GitHub&style=flat-square) 

![](https://img.shields.io/badge/dynamic/json?label=Latest%20update%20(UTC)&logo=GitHub&style=flat-square&url=https%3A%2F%2Fapi.github.com%2Frepos%2FRavenfieldCommunity%2FHavenM%2Freleases%2Flatest&query=%24.assets%5B0%5D.updated_at)

Project repo：[Github](https://github.com/RavenfieldCommunity/HavenM) Steam Workshop:[Item](https://steamcommunity.com/sharedfiles/filedetails/?id=3428665609)
:::

::: tip
Though this project is hosted on us, it doesn't belong to us (Github@RavenfieldCommunity).

It belongs to [Standt_Up](https://steamcommunity.com/profiles/76561198296228036)

中国玩家请参阅[此处](https://ravenfieldcommunity.github.io/docs/cn/Projects/havenm.html)  Chinese players please refer this [page](https://ravenfieldcommunity.github.io/docs/cn/Projects/havenm.html).
:::

## Description

Refer Github

Re-installing equals updating!

::: caution
**DO NOT USE THE GAME'S BETA OR ANY NON-STABLE BRANCH!**

AND DO NOT download the dll from *[Archive](https://github.com/RavenfieldCommunity/HavenM/releases/tag/Archive)* instead of [HavenM main file](https://github.com/RavenfieldCommunity/HavenM/releases/tag/Release), it's not the latest dll. 
:::

## Install by command

Refer Github, `Win` + `R` to Open "Run" dialog window and run the command.

Run this command to get a update for Updater from time to time!

## Install manually

Non-windows players please refer [Q&A](#Q&A)!

### Replace dll

Download the `Assembly-CSharp.dll` [here](https://github.com/RavenfieldCommunity/HavenM/releases/tag/Release).

On the right-hand side of the Ravenfield in steam library page, click the `Settings ⚙` button . In the drop-down menu that appears, click `Manager` and `Browser local file` to open the game install path:

![](https://ravenfieldcommunity.github.io/docs-img/Projects/havenm.001.en.png)

Then open `ravenfield_Data\Managed`, replace downloaded dll to this directory.

![](https://ravenfieldcommunity.github.io/docs-img/Projects/havenm.002.png)

### Install BepInEX

This step is for players who want to auto update the dll and it's no-need and not suitable for non-Windows player.

Refer [docs](https://docs.bepinex.dev/articles/user_guide/installation/index.html)

**Install BepInEX 5.x instead of 6.x!**

### Install ACUpdater

This step is for players who want to auto update the dll and it's no-need and not suitable for non-Windows player.

Because HavenM works by editing game dll, the dll may be replaced to the original game dll by Steam when game has offical update. The ACUpdater will solve this problem.

Download the `HavenM.ACUpdater.dll` [here](https://github.com/RavenfieldCommunity/HavenM/releases/tag/ACUpdaterRelease).	

Make sure BepInEX is already installed.

Open game install path and add it to `BepInEx\plugins`. If the folder isn't exist and you installed BepInEX just now, run the game and the folder will be created automatically:

![](https://ravenfieldcommunity.github.io/docs-img/Projects/havenm.003.png)

## Use ahcrived dll

You can find out the old history release [here](https://github.com/RavenfieldCommunity/HavenM/releases/tag/Archive), but remember to rename the dll files to `Assembly-CSharp.dll`!

And disable ACUpdater's auto-update if you don't want the dll is overwrote by updates, the config file in at `BepInEX\config\HavenM.ACUpdater.cfg`

## Uninstall by command

Copy the following command and open [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701) or [powershell](https://learn.microsoft.com/en-us/powershell/scripting/windows-powershell/starting-windows-powershell?view=powershell-7.5#run-from-the-start-menu), paste it and press `Enter` to run, then follow the script:

> `$w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ravenfieldcommunity.github.io/static/uninstall_bepinex-utf8.ps1'));Read-Host;`

## Uninstall manually

Open game install path and open folder `BepInEx\plugins`, **delete** `HavenM.ACUpdater.dll` and `HavenM.ACUpdater0.dll`(if exists). 

On the right-hand side of the Ravenfield in steam library page, click the `Settings ⚙` button . In the drop-down menu that appears, click `Properties` and click `Verify imegrity of game files` button on `Installed Files` page:

![](https://ravenfieldcommunity.github.io/docs-img/Projects/havenm.004.en.png)


## Q&A
> **The firewall blocked the command.**
>
> Just allow it on your firewall.

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
> Yes. Refer [this](https://www.howtogeek.com/738967/how-to-use-steams-proton-to-play-windows-games-on-linux/#how-to-use-proton-for-steam) to enable Proton and install HavenM manually like on Windows, because runs HavenM natively may cause some bugs.
>
> Auto-updater and installation script are unavailable now.
>
> Any problems with Proton, refer [ProtonDB](https://www.protondb.com/help)

> **Can HavenM run on piracy game**
>
> No.

> **My game crash on splash screen**
>
> Check the game isn't on `beta` or `test` or any non-stable branch, then reinstall HavenM or verify imegrity of game files on Steam

> **Error "\* is not recongnized as the a name of cmdlet ..."**
>
> The command cannot be run on Windows 7. 


## Support Us

Give a `Like` in the [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3428665609) or a star on github, thanks for support!

You can feedback any issues and suggestions on workshop!