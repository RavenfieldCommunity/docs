---
title: HavenM
home: true
heroImage: false
heroText: HavenM
tagline: "Bot enhancement for Ravenfield."
description: "Bot enhancement for Ravenfield."
sidebar: true
---

# HavenM

::: center
Project repo：[Github](https://github.com/RavenfieldCommunity/HavenM) Steam Workshop:[Item](https://steamcommunity.com/sharedfiles/filedetails/?id=3428665609)
:::

::: tip
Though this project is hosted on us, it doesn't blelong to us (Github@RavenfieldCommunity).
:::

## Description

## Q&A
> **The firewall blocked the command.**
>
> Just allow it on your firewall.
>
>  or copy the following command and open [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701) or [powershell](https://learn.microsoft.com/en-us/powershell/scripting/windows-powershell/starting-windows-powershell?view=powershell-7.5), paste and press `Enter`
>  
> ```powershell
> $w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ravenfieldcommunity.github.io/static/get_ravenmcn_d-utf8.ps1'));
> ```
>
> Or copy the [original install script](http://ravenfieldcommunity.github.io/static/get_ravenmcn_d-utf8.ps1), paste and run it on windows terminal or powershell

> ** Is this a trojan? Why you tell me to turn off the firewall? Why you made such a installer? **
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

> ** Error "\* is not recongnized as the a name of cmdlet ..." **
>
> First, the command cannot be run on Windows 7. Second, don't run the command on the windows terminal or powershell directly, run it on "Run" dialog window (press key Win+R), otherwise you only need to type the content enclosed in quote marks.

