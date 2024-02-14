---
title: Ravenscript IDEA
home: true
heroImage: \image\Project\rsidea.001.png
heroText: Ravenscript IDEA
tagline: "新一代RS开发snippet插件（又新又拉XD"
description: "Ravenscript IDE Addon,新一代RS开发snippet插件（又新又拉XD"
sidebar: true
head:
  - - meta
    - name: robots
      content: yesindex
---

# Ravenscript IDEA

::: center
![GitHub issues](https://img.shields.io/github/issues/RavenfieldCommunity/ravenscriptidea.svg?style=flat-square&) ![GitHub last commit](https://img.shields.io/github/last-commit/RavenfieldCommunity/ravenscriptidea.svg?style=flat-square&)


[![License](https://img.shields.io/badge/%E6%8E%88%E6%9D%83%E5%9F%BA%E4%BA%8E%E8%AE%B8%E5%8F%AF-GPLv3-lightblue.svg?style=for-the-badge&)](https://github.com/RavenfieldCommunity/ravenscriptidea/blob/main/LICENSE)

项目地址：[Github](https://github.com/RavenfieldCommunity/ravenscriptidea/) Steaml工坊：[Steam](https://steamcommunity.com/sharedfiles/filedetails/?id=3160495493)
:::

:::tip
下文中的“插件”指RSIDEA这个项目本身，“前置扩展”与“前置Framework”均代指Luals、EmmyLua这样的IDE扩展
:::

## 描述

RSIDEA是一个帮助modder编写RS脚本的插件，依赖于前端Framework，它可以给modder带来完整的snippet自动补全以及基本类型检查且附带RS官方文档，帮助modder缩短coding用时，减少lua语法错误


## 特性
```md
✅ 基本完整、简单易用的snippet&type checking

✅ 基本完全还原RS官方文档

✅ 用户annotation支持

✅ 本体与前置Frameworks在开发支持期内

✅ 多IDE兼容

🅾 未来将加入RavenM扩展api

❌ 稀烂的self指针与register(behaviour注册、local变量注入与同步的基本不可用)

❌ 不存在的const / var / static / array 辨别（前置扩展不支持我也没办法
```

## 安装
本插件支持Luals与[Emmylua](https:\\emmylua.github.io)（仅兼容）两个前置扩展，即支持VSCode、Neovim、JetBrains IDEA至少四个IDEA（当然如果你会写LSP还能自行支持更多），此处推荐使用[Luals](https:\\luals.github.io)

### 快速安装(仅VSCode)

首先安装Luals for vscode的扩展 [![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=sumneko.lua)

完成后,打开一个文件夹或工作区，打开任意一个Lua文件，右键单击选择“Lua: 打开插件管理器”或Ctrl+P打开命令面板输入“`>lua.addon_manager.open`”

等待插件管理器从Github拉取完插件（可能需要本机安装了git,必须可以访问Github，然后在插件列表找到”Ravenscript IDEA”并启用（Enable），然后尽情享用我们带给你的snippet体验吧~

### 本地安装

如果你使用的是其他的IDE或你无法使用插件管理器时你才应选择此方式

无法访问github就参考[资源镜像](/cn/RESOURCE.md)

以任何一种方法下载到本项目的git源码到本地的一个文件夹，然后在IDE的前置扩展配置里增加这个文件夹作为外部库即可

例如使用[ghproxy.net](https://ghproxy.net)下载本项目源码（即`https://github.com/RavenfieldCommunity/ravenscriptidea/archive/main.zip`），解压到本地文件夹如`D:\Program\RSIDEA`,然后在VSCode的设置的`Lua.userThirdParty`添加上面你解压的文件夹路径


## 用法

由于前置扩展与我的开发经验不成熟，因此您在早期开发rs脚本时需遵循以下步骤

### 关联文件类型

这个我就不用多说了吧？rs脚本用的是txt文件，那你就在IDE里把txt扩展名的文件跟Lua语言关联起来，这样才能使用Lua扩展开发rs

请自行上网查找，如[VSCode中txt文件关联Lua](https://blog.csdn.net/u012433546/article/details/100566579)

### 注册脚本

**这一步上，如果你只需要使用RSIDEA的基本snippet填充而不在乎self指针的填充以及创建function的自动填充时或嫌麻烦，你可以自行忽略**

在开始每一项rs脚本的开发前，你需要在工作区（如打开的文件夹，这个概念不懂请自行查找，或者说在扩展的设置里定义全局使用以下文件）另行先创建一个文件如下（此处实例文件名为`exampleWorker.lua`,文件名随意）：
```lua
---@meta

---@class TO_DEF: Behaviours 
TO_DEF2 = {
    ---@type float
    a=ANY,
	b=ANY
}

rawset(_G,"YOUR_BEHAVIOUR_NAME",TO_DEF2)

--此处的重复代表可以在同一文件里定义多个behaviour
---@class TO_DEF_X: Behaviours 
TO_DEF_X2 = {
    ---@type float
    a=ANY,
	b=ANY
}

rawset(_G,"YOUR_BEHAVIOUR_NAME_X",TO_DEF_X2)
```

其中`---@meta`标记只需在文件中出现一次，表示文件在工作区全局启用

`---@class TO_DEF: Behaviours `指从`Behaviour`这个类派生一个一个`TO_DEF`的类（和下文的`TO_DEF2`一样可为其他名称但不可重复，`TO_DEF2`这个变量用于代`TO_DEF`这个类。仅作临时用）

下面`TO_DEF2`里填写的是编写rs脚本时你要在self指针里用的变量（因此可留空，但不可缺少`TO_DEF2 = {}`）,`ANY`做占位符，其上的`---@type float`指这个变量的类型为float（可选）

最后`rawset(_G,"YOUR_BEHAVIOUR_NAME",TO_DEF2)`里`YOUR_BEHAVIOUR_NAME`填写你rs脚本里在`behaviour()`里注册的行为名，`TO_DEF2`指上文定义的变量

现在你就可以把这个文件放一边，开始编写这个rs脚本了

### 手动定义类型

有时扩展不能自动判断一个变量的类型，需要手动定义，下方示例中的`---@type GameObject`就是声明这个变量`a`的类型是GameObject（仅做IDE层面的辅助变量类型判断，在实际运行中不具备任何功能）：
```lua
---@type GameObject
a = self.targets.canvas
```

### 手动定义function回传参数类型与返回值

当你添加一个事件监听时，扩展不能自动辨别回传参数的类型，，需要手动定义，下方示例中的`---@param value int`就是声明这个参数`value`的类型是int（仅做IDE层面的辅助变量类型判断，在实际运行中不具备任何功能）：
```lua
---@param value int
function test: OnValueChanged(value)
end
```

如下，`---@return bool`声明这个function的返回值是bool（仅做IDE层面的辅助变量类型判断，在实际运行中不具备任何功能）：
```lua
---@return bool
function test: Calc()
end
```


## 鸣谢&贡献项目

我估计没有外部贡献者，所以还没打算写贡献指南呢...如果你想帮助我们贡献项目，你可以给我们提issue、留下评论在本站评论区或[Steam评论区](https://steamcommunity.com/sharedfiles/filedetails/?id=3160495493)，我会加紧时间赶写贡献文档，或吸取你的建议修bug和完善插件

## ❤捐助

虽然很不想说，但确实，开发这个插件所费精力确实大，我也难以分配太多时间维护，因此如果你想帮助我们，欢迎在爱发电给我们一点小小的捐助（别自定义太多哈，不值得）：

[![License](https://img.shields.io/badge/爱发电-支持我们！-lightpurple.svg?style=for-the-badge&)](https://afdian.net/a/Nsrc233)

或者说更简单，在Steam工坊给我们一个赞和订阅，让我们看到你们的对这个项目的认可，让更多人知道这个插件！



