# rvs.1 Ravenscrpit
## -2.0 何为Ravenscrpit？
Ravenscrpit是一个基于Lua的游戏语言（其实就是Lua），为了Ravenfield的模组化开发

它的诞生基于[MoonSharp Project](https://www.moonsharp.org/)（可惜自2016年就没了更新，官方仓库堆了一堆PR）

Ravenscript可以控制Ravenfield和Unity引擎的某些部分

因此它具有与Unity开发中的C#具有相同的逻辑与操作

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

## 1.0 文件结构

## 1.1 一般Api使用方法

## 1.2 在游戏测试

## 1.3 常见报错

## 1.4 Debug