---
category: 
- 教程
---
# rvs.1 Ravenscrpit
## -2.0 何为Ravenscrpit？
Ravenscrpit是一个基于Lua的游戏语言（其实就是Lua），为了Ravenfield的模组化开发

它的诞生基于[MoonSharp Project](https://www.moonsharp.org/)（可惜自2016年就没了更新，官方仓库堆了一堆PR）

Ravenscript可以控制Ravenfield和Unity引擎的某些部分

因此它具有与Unity开发中的C#具有相同的逻辑与操作

所以，建议你先入门Unity C#开发，再入门Ravenscript，有助于你更顺利的理解一些概念

## -1.0 环境配置
**此处不再详细说明，如果你有看过相关编程语言的教程，对下面的事情你应该会很快上手**

**详情请参考官方文档**
1. 安装
[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://code.visualstudio.com/)作为IDE

  或者自行选择一个合适的编辑器,以下内容部分仅适用VSCode

2. 安装Chinese-Simple语言扩展包[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)

3. 安装vscode-lua扩展[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=sumneko.lua)（我们社区的还没出，敬请期待）

4. 安装C#扩展[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

5. 配置工作区的.vscode\settings.json为：
```json 
{
    //配置文件扩展名关联
    "files.associations": {
        "*.txt": "lua",
    },
	//隐藏meta文件
    "files.exclude": {
        "**/*.meta":true,
    },
}
```
6. 配置VSCode为Unity的外部编辑器

7. （可选）安装Debug扩展[![Install in VS Code](https://img.shields.io/badge/VS%20Code-Install-blue?style=for-the-badge&logo=visualstudiocode "Install in VS Code")](https://marketplace.visualstudio.com/items?itemName=xanathar.moonsharp-debug)

8. （可选）安装[BepInEx](https://www.bilibili.com/read/cv8997496/)并启用控制台（方便调取RS输出）

## 1.0 文件结构
标准的RS脚本一般分为3个结构：
```lua
--#1 注册RS父table，这样你才能从里面派生方法并让游戏执行
behavior("ravenscript")

--#2 local变量，为什么不可以在事件方法体里local可以自行研究
local var1

--#3 定义事件方法体
function ravenscript: Start ()
end

function ravenscript: Update ()
end
```

## 1.1 文档使用方法

## 1.2 在游戏测试

## 1.3 常见报错

## 1.4 Debug