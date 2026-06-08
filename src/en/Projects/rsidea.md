---
title: Ravenscript IDEA
heroImage: \image\Project\rsidea.001.png
heroText: Ravenscript IDEA
tagline: "Ravenscript IDE Addon, the NEXT snippet addons for ravenscript coding"
description: "The NEXT snippet addons for ravenscript coding"
---

# Ravenscript IDEA

::: center
![GitHub last commit](https://img.shields.io/github/last-commit/RavenfieldCommunity/ravenscriptidea.svg?style=flat-square&) ![Release](https://img.shields.io/github/v/release/RavenfieldCommunity/ravenscriptidea?label=release&logo=GitHub&style=flat-square)

[![License](https://img.shields.io/badge/LICENSED%20UNDER-GPLv3-lightblue.svg?style=for-the-badge&)](https://github.com/RavenfieldCommunity/ravenscriptidea/blob/main/LICENSE)

Project repo：[Github](https://github.com/RavenfieldCommunity/ravenscriptidea) Steam Workshop:[Item](https://steamcommunity.com/sharedfiles/filedetails/?id=3160495493)
:::

::: tip
In the following, the term "addon" refers to the RSIDEA project itself, and the terms "dependent extension" and "dependent framework" refer to IDE extensions such as Luals and EmmyLua. IDE extensions like Luals, EmmyLua, etc.
:::

## Description

RSIDEA is a sub addon to help modders develop ravenscript. though dependent extension,the addon can bring the full of snippet auto fill ,type checking and RS Official Docs.Let modders cut the longer time of developing script and make less syntax errors.


## Features
```md
✅ Complete and easy to use snippet & type checking (maybe

✅ A complete restoration of the official RS documentation(maybe

✅ User annotation aupport

✅ Project with dependent Framework during development support period

✅ Multi-IDE compatible

✅ RavenM extra api added 

✅ Sparse self pointers with register (behaviour registration, local variable injection and basic unavailability of synchronization)

❌ Non-existent const / var / static discrimination \(I can't help it if the frontend extension doesn't support it\)
```

## Installation
This plugin supports Luals and [Emmylua](https://emmylua.github.io) (only compatible) with the two dependent extensions, that is, support for VSCode, Neovim, JetBrains IDEA at least four IDEA (of course, if you will write the LSP can also be supported by their own more), here we recommend the use of [Luals](https://luals.github.io)

### Quick install(VSCode ONLY)

First install [Git](https://git-scm.com/install/), just as default config.

Install Luals for vscode extension [![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=sumneko.lua)

When you're done,open a folder or code-workspace, open any Lua file, right-click and select "Lua: Open Addon Manager" or Ctrl+P to open the command panel and enter “`>lua.addon_manager.open`”

Wait for the Addons manager to finish fetching plugins from Github (you may need to have git installed locally, you must have connect to Github, then find "Ravenscript IDEA" in the list of addons and enable it), then enjoy the snippet experience that we bring to you!

![](https://ravenfieldcommunity.github.io/docs-img/Projects/rsidea.001.png)

### Local install

You should only choose this method if you are using another IDE or if you cannot use the Addons manager.

Download the project's git source code to a local folder by any means, and then add the folder as an external repository in the IDE's dependent extensions configuration.

For example, download the source code for this project\(link:`https://github.com/RavenfieldCommunity/ravenscriptidea/archive/main.zip`\)，Unzip to a local folder such as `D:/Program/RSIDEA`,Then add the path to the folder you unzipped above to the VSCode settings of the `Lua.userThirdParty`


## Usage

Due to the immaturity of the dependent extensions and my development experience, you will need to follow these steps in your early development of ravenscript

### Update addon

Open the addon manager to automatically update. If the 'Update' button appears, please also click it ,too.
Place the cursor over the 'behavior()' in the code to check for updates and open the addon manager.

### Associate file types (NO NEED)

**In the new version of RFTools (the old is RavenfieldToolPack), there is no need to configure extension associations, and Unity can automatically recognize Lua files as TextAsset**

If you are using an old RavenfieldToolPack ,you have to associate the txt files with the Lua language in the IDE, so that you can use the Lua extension to develop RS.

Find out for yourself on the Internet

### Register script

This addon provide `self` vars and funcs pointers. However, you need to configure it manually due to Addon Manager restriction.

To enable this feature, firstly download [`plugin.lua`](https://github.com/RavenfieldCommunity/RavenscriptIDEA/raw/refs/heads/main/plugin.lua) and put it to a suitable place.

Then open vscode -> `File` -> `Preferences` -> `Settings` -> `Extensions` -> `Lua` -> `Runtime: Plugin`, and fill in the full path of the `plugin.lua` file, like(yes **use `\\` instead**):

![](https://ravenfieldcommunity.github.io/docs-img/Projects/rsidea.002.png)

### Example Usage

Sometimes extension can not automatically determine the type of a variable, you need to define it manually, the `--@type GameObject` in the example below is to declare that the type of this variable `a` is GameObject (only do IDE level auxiliary variable type determination, does not have any functionality in the actual operation):
```lua
---@type GameObject
a = self.targets.canvas
```

or:
```lua
a = self.targets["canvas"]
a = self.targets[1]
```

When you add an event listener, the extension can not automatically identify the type of the return parameter, you need to define it manually, the `--@param value int` in the example below is to declare that the type of the parameter `value` is int (only to do the IDE level of auxiliary variables to determine the type of the actual operation does not have any function):
```lua
---@param value int
function test: OnValueChanged(value)
end
```

As follows, `--@return bool` declares that the return value of this function is bool (which is only a secondary variable type determination at the IDE level, and has no functionality in actual operation):
```lua
---@return bool
function test: Calc()
end
```


## Acknowledgement & Contribution

I'm guessing there are no external contributors, so I'm not planning to write a contribution guide yet lol...

 If you want to help us contribute to the project, you can send us an issue, leave a comment in the comments section of this site or in the [Steam comments](https://steamcommunity.com/sharedfiles/filedetails/?id=2902808812), and I'll try to hurry up and write a contribution document, or take your suggestions to fix bugs and improve the plugin!

## ❤SPONSER

Give us a like and a subscribe at Steam Workshop so we can see your approval of this project and let more people know this addon!



