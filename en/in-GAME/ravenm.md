---
title: RavenM Usage 
description: Guide for how to use RavenM
---

# RavenM Usage

::: tip
Some content is not suitable for Official RavenM build!
:::

## Installation

Refer [RavenM](/en/Projects/ravenm.md)

When you can see a line of RavenM message at the left-down corner of game window, RavenM is installed successfully.

**There maybe some message when plugin is probably not compatible with current game version or plugin has available update.**

**Remember to check updates on our github page, re-installing enquals updating.**

## Join&create a lobby

Open Instant Action Menu, press `M` to open the multi-player ui

`HOST` is creating(hosting) a lobby, while `JOIN` is joining a lobby.

In `More`, there are other functions you can use.

Click `HOST`, you can edit some props of new lobby:

![Lobby creating ui](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.002.en.png)

Props details:

| Props | Details |
|------|------|
| `LOBBY NAME` | The name of this lobby |
| `MEMBER LIMIT` | Max members in the lobby (min is `2`) |
| `FRIENDS ONLY` | Only your steam friends can join the lobby? |
| `SHOW ON LOBBY LIST` | Show the lobby in public lobby list? otherwise others can only join it by lobby id |
| `JOINABLE MIDGAME ` | Can players join the game after the game is started?( Yes default is off because we aren't sure if it will cause extra bugs) |
| `ENABLE GOD INSPECT ` | Can players press `F8` to open inspect camera? |
| `ENABLE WALLHACK ` | Can players press `F10` to show others' position in game? |
| `NAMETAGS ` | Whether to show a nametag above each player's head, and is it only for in same team(Eagle or Raven)? |
| `LOBBY NOTE ` | Additional description for this lobby, will show in lobby info before join the lobby |

Click `START`, will enter pre-gaming ui, click `LEAVE` to close lobby (return from map will not close the lobby), your friends can directly join the lobby by the lobby id:

![Pre-gaming ui](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.003.en.png)

You can configure other things like vehicles as normal (Bots still will spawn in game. non-host players can only select teams), then `START` to start game.

Click `JOIN`, one way is joining from public lobby list, another one is by lobby id.

Select a lobby, you can see the info and join the lobby (if the plugin or game they are using is different from yours, you can't join it).	

Colors of member name stand for member status (`green`=ready, `red`=loading mods, `grey or yellow`=in respawn cd time).

At the left side of member names, there is the loaded mods count, or selected team after all mod loaded.

You can right click a member's name to copy his user id(in official edition is ban out sb.).

Click the lobby name button then you can hide the in-lobby menu ui.

Click `...` for more options.

If the game has already started, you will enter the game directly.

Besides, the mods that host used will always loaded when joining the lobby, even you launch the game with no mods mode. **So it is a good skill to launch the game with this mode if your friends invite you and it can reduce loading time.**

## In-game

Press `P` to show/hide chat field, press `Y` to send a global message (`Enter` is send, and `Esc` is close the text box), press `U` to send in team(Eagle or Raven).

Press `Enter`(or `Esc` in community edition) to open lobby list.

Press `CapsLock` to send voice messages (depending on Steam, positional, for same team only. using Discord instead is better)

Press `F7` will show something for debug.

Press `~` to place a marker to a place(for same team only).

Squad order (`G`, `B` key) isn't avaliable between real players and players.

Left-up corner is the ping status, higher is your network worse.

Press `Tab` to show player scoreboard(may sync incorrectly).

Available commands（Some commands need permission, `true`=`on` and `false`=`off` in community edition, and word case ignored) :
| command names | OP access need? | Details |
|------|------|------|
| `/help [name]` | No | Get all available commands or specific command's details |
| `/nametags (on\|off\|team)` (in community edition is `/tags`) | Yes | Enable player nametags or only for same team |
| `/kill ?` | Yes | Kill specific bot or player |
| `/ban ?`(in official edition is `/kick`) | Yes | Ban player out of lobby (applied before the lobby is closed) |
| `/unban ?` | Yes | Undo `/ban` |
| `/tp ?` | Yes | ? |

e.g. `/nametags true`

Have fun!

### Deal with bugs

A real bug that we can fix include these points: 

  - It can be always triggered steadily by certain ways
  
  - It isn't caused by outside factors like network or Steam
  
      That means this bug will disappear after a while or some days


If you find bug while playing, please tell us at `#bug-teports` or `#help` channel in discord server, and describe how you trigger it exactly or make a screen record video for it.

To save error log and send it to us, after trigger it, open main menu or more options in in-lobby menu and click `Save error log`:

![]()

If the log file is too big (>50MB), please re-launch game and re-trigger bug and re-save it(lol how many `re` I used in this sentence).

And you would better to put the debug file `RavenM.pdb`(in the zip file you downloaded from our GitHub page when you installing RavenM) next to the plugin before you trigger the bug and raise a bug report to us.

## Q&A

> **I can't spawn in map**
>
> Usually, you can see `🏴0 - 0🚩`(captured flags) in game progress bar at the top, or the ping is 0ms.
>
> This can be caused by network or Steam problem, check your local firewall whether allow game and Steam go through the network.
>
> Or ask your friends to host the lobby instead of you.
>
> Check following question "**Failed to multi-play with others**" for more

> **My game stuck in mod loading when I launch the game**
>
> Do not run your game while Steam isn't running, and don't use pirated game.
>
> Or you can unload(disable) RavenM temporarily.

> **Cannot run game while Steam isn't running**
>
> Please unload RavenM temporarily or uninstall RavenM.

> **My game showed tip “RavenM isn't compatible with ...“**
>
> Update RavenM or uninstall it if the update isn't released for newer game.

> **Cannot use local mods**
>
> Mod sync depends on Steam Cloud Services
>
> Please use workshop mods instead of local ones.
> 
> This issue maybe solved in future version.

> **Hoe can I delete the mods synced while I joined other lobby**
>
> Open game directory like `E:\Program Files\Steam\steamapps\common\Ravenfield` and back to `E:\Program Files\Steam\steamapps\\`, then open `\workshop\content\636480\\`, delete all the content(the mods you subscribed will also be deleted, so you don't have to care about this problem).

> **Critical bug caused while I playing vanilla game**
>
> RavenM's bug or RavenM isn't really compatible with current game. Unload or update RavenM, or raise bug report, please.

> **How can I disable RavenM**
>
> Open Steam add `-noravenm` to `Advanced launching arguments` (If there are already other things, just type a space first), remember to remove it when you want enable RavenM :
>
> ![Screenshot of steam props ui](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.005.en.png)
>
> Or open `Ravenfield\BepInEX\plugins` directory, rename `RavenM.dll` to `RavenM.dall`, anyway the file extension name shouldn't include “`dll`“.

> **Failed to multi-play with others**
>
> Please check:
> - Reopen lobby or game first.
> - Is your game is latest stable version
>
>    Instead of `ravenm-compatible` branch, any `legacy-ea**`, `pervious-ea`, or `test` branch version. Non-beta version is suggested.
>
>    In steam, what next to the `START` button is the current game branch tag, click it or goto Game `properties` goto `Betas` to set your game to stable branch, the choice "`None`" is stable branch:
>
>    ![game props of beta page](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.005.en.png)
>
> - Is your RavenM is latest version
>
>    Otherwise update it.
> - Is your network high-quality enough and stable
>
>    *This is most common one*
>
>    Tell your friend to host the lobby by himself, so you can join it
> - Steam and game is blocked by Windows Firewall
>    
> - Have something to do with Steam
>
>    If you can multi-play successfully last time, then wait for a while.
> - Tell your friends to check together.
>
> If these solutions aren't helpful, please ask for help in discord server or raise a bug report.

> **Ping is too high**
>
> Your network or Steam server problem(rare), use network booster or wait until a certain time.

> **Where can I get RavenM's chinese build (or "chinam")**
>
> [Here](/cn/Projects/ravenm.md), not suggested to use it as it provides no English language support, but it updates more faster than Official RavenM now.

> **My message is sent automatically but I didn't finish it yet**
>
> A little problem of your IME, try another one.

> **How can I, the host, control the mods used quickly**
>
> Open steam game properties' workshop page, you can manage the mods directly without starting the game.
>
> ![workshop manage ui](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.006.en.png)
>
> You can correct the checkbox of each item to enable/disable the mod. The search can find mods by name or tag.
>
> Click the `Advanced Options` button, create a new collections by `Save Filitered to Collection`, then you can quick switch the mod collections you want to used to load in game.
>
> Click link [`steam://gameproperties/636480/workshop`](steam://gameproperties/636480/workshop) can take you to there, or you can copy this it and create a quick link on your desktop.

> **How to reduce the time from launching game to joining my friends' lobby**
>
> Launch the game with no mods mode. Then you can skip loading your own mods and only load host's mods once.

> **Some mutators do not work as expected sometimes.**
>
> Yep, RavenM is not really compatible with them, as their script's logic cannot work in multiplayer well.

> **I can't save the map in my Map Editor**
>
> Please disable RavenM first. This issue maybe fixed in future.

> **What is build id (or client id)**
>
> It is a tag to sort the game environments that players are using, according to your Ravenfield version(Community edition only) and plugin version).
>
> This stuff is used to make sure clients are compatible with each other.
>
> For community edition, the client id is calculated like this following, including  game version(`EA32`), plugin version(`0-9`), and plugin uuid(`3d5fec24`) that linked with exact plugin version:
>
> `EA32-0-9-3d5fec24`