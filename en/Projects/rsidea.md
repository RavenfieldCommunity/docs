---
title: Ravenscript IDEA
heroImage: \image\Project\rsidea.001.png
heroText: Ravenscript IDEA
tagline: "Ravenscript IDE Addon, the NEXT snippet addons for ravenscript coding"
description: "The NEXT snippet addons for ravenscript coding"
---

# Ravenscript IDEA

::: center
![GitHub issues](https://img.shields.io/github/issues/RavenfieldCommunity/ravenscriptidea.svg?style=flat-square&) ![GitHub last commit](https://img.shields.io/github/last-commit/RavenfieldCommunity/ravenscriptidea.svg?style=flat-square&)


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

In the new version of RFTools (the old is RavenfieldToolPack), there is no need to configure extension associations, and Unity can automatically recognize Lua files as TextAsset

If you are using an old RavenfieldToolPack ,you have to associate the txt files with the Lua language in the IDE, so that you can use the Lua extension to develop RS.

Find out for yourself on the Internet

### Register script

**If you only need to use RSIDEA's basic snippet fill and don't care about the self pointer fill and the autofill for creating functions or if it's too much of a hassle, you can ignore this step.**

Before starting the development of each rs script, you need to create a separate file in the workspace (e.g. open folder, look it up yourself if you don't understand the concept, or define the global use of the following file in the extension's settings) as follows (here the example file name is `exampleWorker.lua`, the filename is arbitrary):
```lua
---@meta

---@class TO_DEF: Behaviours 
TO_DEF2 = {
    ---@type float
    a=ANY,
	b=ANY
}

rawset(_G,"YOUR_BEHAVIOUR_NAME",TO_DEF2)

--Duplication in this case means that multiple behaviors can be defined in the same file.
---@class TO_DEF_X: Behaviours 
TO_DEF_X2 = {
    ---@type float
    a=ANY,
	b=ANY
}

rawset(_G,"YOUR_BEHAVIOUR_NAME_X",TO_DEF_X2)
```

where the `---@meta` tag needs to appear only once in the file to indicate that the file is globally enabled in the workspace

`---@class TO_DEF: Behaviours` refers to the derivation of a class `TO_DEF` from the class `Behaviour` (as with `TO_DEF2` below, which may be named something else but may not be duplicated, the variable `TO_DEF2` is used in place of the class `TO_DEF`. This variable `TO_DEF2` is used to replace the class `TO_DEF`.)

The following `TO_DEF2` is filled with the variable you want to use in the self pointer when writing the rs script (so it can be left blank, but not missing `TO_DEF2 = {}`), and `ANY` is a placeholder for the `--@type float` that means that the variable is of type float (optional).

Finally, in `rawset(_G, "YOUR_BEHAVIOUR_NAME",TO_DEF2)`, `YOUR_BEHAVIOUR_NAME` is filled in with the name of the behavior registered in `behaviour()` in your ravenscript, and `TO_DEF2` refers to the variable defined above.

Now you can put this file aside and start writing this ravenscript

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

I'm guessing there are no external contributors, so I'm not planning to write a contribution guide yet... If you want to help us contribute to the project, you can send us an issue, leave a comment in the comments section of this site or in the [Steam comments](https://steamcommunity.com/sharedfiles/filedetails/?id=2902808812), and I'll try to hurry up and write a contribution document, or take your suggestions to fix bugs and improve the plugin!

## ❤SPONSER

Give us a like and a subscribe at Steam Workshop so we can see your approval of this project and let more people know this addon!



