---
title: RavenM 
description: The RavenM Multiplayer Plugin
---

::: center
OFFICIAL: ![Discord online member count](https://img.shields.io/discord/458403487982682113.svg?label=Discord&logo=Discord&colorB=7289da&style=flat-square) ![Last commit time](https://img.shields.io/github/last-commit/ABigPickle/RavenM.svg?style=flat-square&) ![Latest release version number](https://img.shields.io/github/v/release/ABigPickle/RavenM?label=release&logo=GitHub&style=flat-square) ![Downloads count](https://img.shields.io/github/downloads/ABigPickle/RavenM/total.svg?logo=GitHub&style=flat-square)

**COMMUNITY EDITION**: ![Last commit time](https://img.shields.io/github/last-commit/RavenfieldCommunity/RavenM.svg?style=flat-square&) ![Latest release version number ](https://img.shields.io/github/v/release/RavenfieldCommunity/RavenM?label=release&logo=GitHub&style=flat-square) ![Downloads count](https://img.shields.io/github/downloads/RavenfieldCommunity/RavenM/total.svg?logo=GitHub&style=flat-square)

 [![Join Discord]( https://img.shields.io/badge/discord-JOIN%20DISCORD%20SERVER-grey.svg?style=for-the-badge&logo=discord&colorB=7289da)](https://discord.gg/63zE4gY)
:::

::: caution
**This webpage does not belong to [github.com/iliadsh/RavenM](https://github.com/iliadsh/RavenM) this project itself but [community edition](https://github.com/RavenfieldCommunity/RavenM) !!!**

**For guidance only !!!**

Some content may not suitable for official edition
:::

## Description

A Ravenfield multiplayer plugin.

You can use workshop mods, join lobbies, chat, or play in matches with other Ravenfield players in the multiplayer gaming, which supported by RavenM, depended on safe and high-quality [Steam Network](https://partner.steamgames.com/doc/features/multiplayer).

Here we also provide a community edition of RavenM for newer game as the official one has no update currently (if the version is still v0.7 for EA29).

## Pictures


## Usage

### Installation

#### By installer on windows

join the [Official discord server](https://discord.gg/63zE4gY), you can get the Windows installer on [#mod-installation channel](https://discord.com/channels/458403487982682113/458455470793949234).

It will finish all thing you need.

Official version of RavenM only.

#### By script on Macos/Linux
Open terminal and run the following command, then follow the script(on macos, this script may work badly):

```sh
curl -sSL http://ravenfieldcommunity.github.io/static/get_ravenm_d-utf8.sh | bash
```

Official version of RavenM only.

#### Manually

#### Install BepInEX
BepInEX is a cross-platform framework for Unity modding.

Refer [BepInEX docs](https://docs.bepinex.dev/articles/user_guide/installation/index.html).

**Install BepInEX 5.x instead of 6.x!**

#### Download and install the plugin

You can download the plugin here:

> [Official github](https://github.com/iliadsh/RavenM/releases)

> [Community edition's github](https://github.com/RavenfieldCommunity/RavenM/releases)

As you downloaded the release, unzip the `.zip` file to `BepInEX\plugins` in game directory, or directly put the plugin `.dll` to `BepInEX\plugins` in game directory if there are only dlls(`.dll` files are plugin itself).

Now start the game, there will be a line of RavenM info at the down-left corner of window, if the plugin is installed correctly.

### Usage

Refer [RavenM Usage Guide](/en/in-GAME/ravenm.md)

### Uninstallation

#### By script on windows 

Copy the following command and open [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701) or [powershell](https://learn.microsoft.com/en-us/powershell/scripting/windows-powershell/starting-windows-powershell?view=powershell-7.5), paste it and press `Enter` to run:
> `$w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ravenfieldcommunity.github.io/static/uninstall_bepinex-utf8.ps1'));Read-Host;`

#### Manually

Open `BepInEX/plugins/`, and delete the dll with name "`RavenM`".

If yoi also want to delete BepInEX, then delete the folder `BepInEX` and dll `winhttp.dll`.

## Q&A

> **Where I can find others who playing RavenM or give some suggestions for RavenM?**
>
> Join the discord server below the page title.
>
> For community edition suggestions, you can go [here](https://discord.com/channels/458403487982682113/1370918742795616276) after joining the server.

> **What is the differences between RFMP and RavenM**
>
> RFMP (or RFMM, full name is “Ravenfield: Multiplayer Mod”, at [Steam store](https://store.steampowered.com/app/1104390)) is a community-made game with multi-play feature, independent from the vanilla game.
>
> It looks like vanilla game because SteelRaven7 has give some original game resources to it. (instead, RavenM is a truly plugin made for vanilla game).
>
> RFMP released on July 11, 2019, last updated on [May 31,2020 (from SteamDB)](https://steamdb.info/app/1104390/patchnotes/)
>
> At the official discord server of RFMP (no post link provided), the dev team announced this project stopped developing in 2020, and set the all channels to read-only, suggesting players to use RavenM for a better choice.
>
> RFMP had its wonderful lifetime, but because of bad game qualitiy, cheat problems, then mostly no one play on it sooon + no updates + lots of bad ratings + close online server forever.
>
> It was a past wonder of Ravenfield game community.


> **Windows Defender raised a red flag for it?**
> 
> Common problem, just allow it.


> **Can I run it on pirated game?**
>
> Yes, but we won't provide the solutions for you.
>
> Some problems take skills to work out.


## THANKS

All [contributors](https://github.com/RavenfieldCommunity/RavenM/graphs/contributors), because of you this project is more perfected day by day ❤❤❤:

![GitHub Contributors Image](https://contrib.rocks/image?repo=RavenfieldCommunity/RavenM)

**And all the dev version testers in the discord server, thanks for taking time to find out the bugs! ❤❤❤❤️❤️**
