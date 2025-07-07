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

Press `P` to show/hide chat field, press `Y` to send a global message (`Enter` is send, and `Esc` is close the text box), press `U` to send in team(Eagle\\Raven).

Press `Enter`(or `Esc` in community edition) to open lobby list.

Press `CapsLock` to send voice messages (depending on Steam, positional)

Press `F7` will show something for debug.

Press `~` to place a marker to a place.

Squad order (`G`, `B` key) isn't avaliable between real players and players.

Left-up corner is the ping status.

Press `Tab` to show player scoreboard.

Available commands（Some commands need permission, `true`=`on` and `false`=`off` in community edition, and word .