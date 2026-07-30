---
title: RavenM 
description: The RavenM Multiplayer Plugin
photoSwipe: true
---

::: center
OFFICIAL: ![Discord online member count](https://img.shields.io/discord/458403487982682113.svg?label=Discord&logo=Discord&colorB=7289da&style=flat-square) ![Last commit time](https://img.shields.io/github/last-commit/ABigPickle/RavenM.svg?style=flat-square&) ![Latest release version number](https://img.shields.io/github/v/release/ABigPickle/RavenM?label=release&logo=GitHub&style=flat-square) ![Downloads count](https://img.shields.io/github/downloads/ABigPickle/RavenM/total.svg?logo=GitHub&style=flat-square)

**COMMUNITY EDITION**:  ![Latest release version number ](https://img.shields.io/github/v/release/RavenfieldCommunity/RavenM?label=release&logo=GitHub&style=flat-square) ![Downloads count](https://img.shields.io/github/downloads/RavenfieldCommunity/RavenM/total.svg?logo=GitHub&style=flat-square) ![Update time](https://img.shields.io/badge/dynamic/json?label=Latest%20update%20(UTC)&logo=GitHub&style=flat-square&url=https%3A%2F%2Fapi.github.com%2Frepos%2FRavenfieldCommunity%2FRavenM%2Freleases%2Flatest&query=%24.updated_at)

 [![Join Discord]( https://img.shields.io/badge/discord-JOIN%20DISCORD%20SERVER-grey.svg?style=for-the-badge&logo=discord&colorB=7289da)](https://discord.gg/63zE4gY)
:::

::: caution
**This webpage does not belong to [github.com/iliadsh/RavenM](https://github.com/iliadsh/RavenM) this project itself but [community edition](https://github.com/RavenfieldCommunity/RavenM) !!!**

**For guidance only !!!**

Some content maybe not suitable for official edition
:::

## Description

A Ravenfield multiplayer plugin.

You can use workshop mods, join lobbies, chat, or play in matches with other Ravenfield players in the multiplayer gaming, which supported by RavenM, depended on safe and high-quality [Steam Network](https://partner.steamgames.com/doc/features/multiplayer).

Here we also provide a community edition of RavenM for newer game like **EA32** as the official one has no update currently (if the version is still v0.7 for EA29).

## Previews

<!-- markdownlint-disable -->
<!-- from https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/theme/src/zh/guide/feature/photo-swipe.md -->
<div class="image-preview">
  <img src="https://ravenfieldcommunity.github.io/docs-img/Projects/ravenm.001.en.png" />
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

## Usage

### Installation

#### Manually

#### Install BepInEx
BepInEX is a cross-platform framework for Unity modding.

Refer [BepInEX docs](https://docs.bepinex.dev/articles/user_guide/installation/index.html) or [ThunderStore(windows only)](https://thunderstore.io/package/bbepis/BepInExPack/) to finish installing BepInEX.

Do not use the package in ThunderStore, as they are same with the pervious one but older.

::: tip For Mac/Linux players
- Download BepInEx
  [Here](https://github.com/BepInEx/BepInEx/releases) to download BepInEx for specific LINUX or MAC OS devices.
  
  You can use [gib](https://github.com/toebeann/gib) for a friendly BepInEX setup.
  
  **If you're MAC OS Player, using macOS Sequoia 26+**, **DO NOT** use gib. Download [this](https://github.com/BepInEx/BepInEx/releases/download/v5.4.23.5/BepInEx_macos_universal_5.4.23.5.zip) to maunally install.
  
- Unzip file
  
  Unzip your downloaded file to game directory
  
- (SPECIFIC MACOS PLAYER ONLY) Replace preloader

  **For MAC OS Player using macOS Sequoia 26+**, Also download [BepInEx.Preloader.dll](https://github.com/RavenfieldCommunity/RFExtra/releases/download/SinglePackages/BepInEx.Preloader.zip) and unzip it to replace the file with same name at `BepInEx\core\`
  
- Editing startup script

  Follow [here](https://docs.bepinex.dev/articles/user_guide/installation/index.html?tabs=tabid-nix#tabpanel_bHGHmlrG6S-1_tabid-nix) to eedit the `run_bepinex.sh`
  
  If you're MAC OS Player who can't find `ravenfield.app`, right click to cancel `Show package content` at Finder[this](https://discussions.apple.com/thread/6740790)(just ensure file `ravenfield.app` with name in proper letter case)
  
  **If you're MAC OS Player using macOS Sequoia 26+ or using M series CPU e.g. [M1](https://www.apple.com/newsroom/2020/11/apple-unleashes-m1/)**, Download [this](https://github.com/cauyxy/bepinex-mac-patcher/blob/master/run_bepinex.sh) to replace `run_bepinex.sh` first then edit it
  
- Grant executable access

  Open terminal at game directory and paste the command then press `Enter` to run: `chmod +x run_bepinex.sh`
  
- Configure Steam

  Before this, you can already run command `./run_bepinex.sh` to launch game

  Follow [docs](https://docs.bepinex.dev/articles/advanced/steam_interop.html?tabs=tabid-3#3-configure-steam-to-run-the-script)
:::


![Unzip files](https://images.steamusercontent.com/ugc/9686593247643904992/49311F910E7414A30FAE827459B422E6CD28B1B2/)

**Install BepInEX 5.x instead of 6.x!**

After installing BepInEX, launch game to generate some files first.

#### Download and install the plugin

You can download the plugin here:

> [**Official github**](https://github.com/iliadsh/RavenM/releases) for EA29 or older

> [**Community edition's github**](https://github.com/RavenfieldCommunity/RavenM/releases) for EA32 or newer
>
> Latest build is updated at ![update timestamp](https://img.shields.io/badge/dynamic/json?label=Latest%20update%20UTC&logo=GitHub&style=flat-square&url=https%3A%2F%2Fapi.github.com%2Frepos%2FRavenfieldCommunity%2FRavenM%2Freleases%2Flatest&query=%24.updated_at).
>
> The testing build(find out the "`test`" tab to download) is updated at ![update timestamp](https://img.shields.io/badge/dynamic/json?label=UTC&logo=GitHub&style=flat-square&url=https%3A%2F%2Fapi.github.com%2Frepos%2FRavenfieldCommunity%2FRavenM%2Freleases%2F225323657&query=%24.assets%5B0%5D.updated_at).
>
> Sometimes we suggest you use testing build instead.

> **personperhaps' version** for EA30/31
>
>    Go to the discord server for it

As you downloaded the release, unzip the `.zip` file to `BepInEX\plugins` in game directory, or directly put the plugin `.dll` to `BepInEX\plugins` in game directory if there are only dlls(`.dll` files are plugin itself):

Now start the game, there will be a line of RavenM info at the down-left corner of window, if the plugin is installed correctly.

### Usage

Refer [RavenM Usage Guide](/en/in-GAME/ravenm.md)

### Uninstallation

#### By script on windows 

Copy the following command and open [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701) or [powershell](https://learn.microsoft.com/en-us/powershell/scripting/windows-powershell/starting-windows-powershell?view=powershell-7.5), paste it and press `Enter` to run:
> `$w=(New-Object System.Net.WebClient);$w.Encoding=[System.Text.Encoding]::UTF8;iex($w.DownloadString('http://ravenfieldcommunity.github.io/static/uninstall_bepinex-utf8.ps1'));Read-Host;`

#### Manually

Open `BepInEX/plugins/`, and delete all the dlls with name "`RavenM`".

If yoi also want to delete BepInEX, then delete the folder `BepInEX` and dll `winhttp.dll`.

## Q&A

> **Where I can find others who playing RavenM or give some suggestions for RavenM?**
>
> Join the discord server below the page title.
>
> For community edition suggestions, you can go [here](https://discord.com/channels/458403487982682113/1370918742795616276) after joining the server.

> **What is the differences between RFMP and RavenM**
>
> RFMP (or RFMM, full name is “Ravenfield: Multiplayer Mod”, at [Steam store](https://store.steampowered.com/app/1104390)) is a community-made game with multi-play feature, independing from the vanilla game.
>
> It looks like vanilla game because SteelRaven7 has give some original artwork resources to it. (instead, RavenM is a truly plugin made for vanilla game).
>
> RFMP released on July 11, 2019, last updated on [May 31,2020 (from SteamDB)](https://steamdb.info/app/1104390/patchnotes/)
>
> At the official discord server of RFMP (no post link provided), the dev team announced this project stopped developing in 2020, and set the all channels to read-only, suggesting players to use RavenM for a better choice.
>
> RFMP had its wonderful lifetime, but because of bad game quality and cheat problems, nobody play it almost soon. As no updates, it caused lots of bad ratings, and finally closed online server forever.
>
> It was a past wonder of Ravenfield game community.


> **Windows Defender raised a red flag for it?**
> 
> Common problem, just allow it.
>
> If you don't trust this plugin, feel free to upload it to any online sandbox analysis service or build it from source code by yourself.


> **Can I run it on pirated game?**
>
> Yes, but we won't provide the solutions for you.
>
> Some problems take skills to work out.


## THANKS

All [contributors](https://github.com/RavenfieldCommunity/RavenM/graphs/contributors), because of you this project is more perfect day by day ❤❤❤:

![GitHub Contributors Image](https://contrib.rocks/image?repo=RavenfieldCommunity/RavenM)

**And all the dev testers in the discord server, thanks for taking time to find out the bugs! ❤❤❤❤️❤️**

**Feel free to give us a star on [github](https://github.com/RavenfieldCommunity/RavenM), thanks for support!**