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

Open Instant Action Menu, press `M` to open the multi-player ui:


`HOST` is creating a lobby, while `JOIN` is joining a lobby.

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
| `ENABLE WALLHACK ` | Can players press `F7` to show others position in game? |
| `NAMETAGS ` | Whether to show a nametag above each player's head, and is it only for same team(Eagle/Raven)? |
| `LOBBY NOTE ` | Additional message for this lobby, will show in lobby info before join the lobby |

Click `START`, will enter pre-gaming ui, click `LEAVE` to close lobby (return from map will not close the lobby), your friends can directly join the lobby by the lobby id:

![Pre-gaming ui](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.003.en.png)

You can configure other things like vehicles as normal (Bots still will spawn in game. non-host players can only select teams), then `START` to start game.

Click `JOIN`, one way is joining from lobby list, another one is from lobby id.

Select a lobby, you can see the info and join the lobby (if the plugin and game is different, you can't join it).	

Colors of member name stand for member status (`green`=ready，`red`=loading mods, `grey or yellow`=in respawn cd time).

At the left side of member names, there is the loaded mods count, or selected team after all mod loaded.

You can right click a member's name to copy his user id.

If the game has already started, you will enter the game directly.

Besides, the mods that host used will always loaded when joining the lobby, even you launch the game with no mods mode. **So it is a good skill to launch the game with this mode if your friends invite you and it can reduce loading time.**

## In-game

Press `P` to show/hide chat field, press `Y` to send a global message (`Enter` is send, and `Esc` is close the text box), press `U` to send in team(Eagle or Raven).

Press `Enter`(or `Esc` in community edition) to open lobby list.

Press `CapsLock` to send voice messages (depending on Steam, positional)

Press `F7` will show something for debug.

Press `~` to place a marker to a place.

Squad order (`G`, `B` key) isn't avaliable between real players and players.

Left-up corner is the ping status.

Press `Tab` to show player scoreboard.

Available commands（Some commands need permission, `true`=`on` and `false`=`off` in community edition, and word case ignored) :
| command names | OP access need? | Details |
|------|------|------|
| `/help [name]` | No | Get all available commands or specific command's details |
| `/nametags (on|off|team)` (in community edition is `/tags`) | Yes | Enable player nametags or only for same team |


e.g. `/nametags true`

Have fun!

![Screenshot_Discord@Wolffe#6986](https://steamuserimages-a.akamaihd.net/ugc/1917988387306327667/C90622D8C9B8B654E187AA5038A84759DFF050D9/)

## Q&A

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
> Update RavenM or uninstall it if the update isn't released.

> **Cannot use local mods**
>
> Mod sync depends on Steam Cloud Services
>
> Please use workshop mods instead of local ones.
> 
> This issue maybe solved in future version.

> **Hoe can I delete the mods synced while I joined other lobby**
>
> Open game directory like `E:\Program Files\Steam\steamapps\common\Ravenfield` and back to `E:\Program Files\Steam\steamapps\\`, then open `\workshop\content\636480\\`, delete all the content(the mods you subscribed will also be deleted, so you haven't to care about this problem).

> **Big bug caused while I playing vanilla game**
>
> RavenM's bug or RavenM isn't really compatible with current game. Unload or update RavenM, please.

> **How can I disable RavenM **
>
> Open Steam add `-noravenm` to `Advanced launching arguments` (If there are already other things, just add a space first), remember to remove it when you want enable RavenM :
>
> ![Screenshot of steam props ui](https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.005.en.png)
>
> Or open`Ravenfield\BepInEX\plugins` directory, rename `RavenM.dll` to `RavenM.dall`, anyway the file extension name shouldn't include “`dll`“.

> **Failed to mutil-play with others**
>
> Please check:
> - Is your game is latest stable version, instead of `ravenm-compatible` branch, any `legacy-ea**`, `pervious-ea`, or `test` branch version, non-Beta version is suggested.
>
>    In steam, next to the `START` button is the game branch tag, click it or goto Game `properties` goto `Beta test` to set your game to stable branch, the choice "`None`" is stable branch.
> - Is your RavenM is latest version, otherwise update it.
> - Is your network high-quality enough and stable, sometimes have something to do with Steam if you sure there isn't other problem and you can muitl-play successfully recently. Wait until a certain time if it is Steam's problem.
> - Tell your friends to check together.
>
> If these solutions aren't helpful, please ask for help in discord server or raise a bug report.

> **Ping is too high**
>
> Your network or Steam server problem(problem of Steam is rare), use network booster or wait until a certain time.