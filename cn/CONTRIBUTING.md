# 贡献指南

欢迎帮助我们维护RavenfieldCommunity\docs（以下简称rfmd）社区客制化支持项目！

由于项目仍处于早期阶段，导致此文档部分内容尚未完善，敬请谅解！

## 文档贡献方式与教程
### 评论
此方式的途径包括：
1. 网站自建评论区提出或[Issue](#issue与社群讨论)（需要Github账号，免费）
2. 在[此项目的Steam指南原链接](https://steamcommunity.com/sharedfiles/filedetails/?id=2902809158)

我们在收到后会及时同步更新
### 在线修改
在此之前请先通读这两篇篇文章[Github 是什么，有什么用？(包括附属文章)](https://www.github-zh.com/post/what-is-github)与[Github快速入门](https://docs.github.com/zh/get-started/quickstart/hello-world)以保证你对Git与Github的了解与使用

在线进入一个编辑模式的入口有两个，一是点击网页右上角的<HopeIcon icon="github" color="grey"/>Github图标进入本文档的Github存储库，再找到对应Markdown文件进入编辑模式

或者直接点击页面底部的"[在 GitHub 上编辑此页](https://github.com/ravenfieldcommunity/docs/edit/main/cn/CONTRIBUTING.md)"

完成后，无论如何你都将需要一个Github账号并[Fork本存储库](https://zhuanlan.zhihu.com/p/639014459)，如果曾经已经fork过的请先同步你的fork存储库至最新

如果你是直接点击编辑链接进入的，Github可能会提示"You need to fork this repository to propose changes."(你需要fork此存储库以编辑文档)，这时你可以直接点击"Fork this respository"进入编辑界面，Github会自动fork项目，然后你就可以直接编辑了，点击"Commit Changes"，在Commit Messages内填写好修改说明，将把修改提交至你的“副本”存储库

第一种方式的流程也大体类似

确认修改完毕后请在此“副本”存储库给我们提交一个[Pull requests](https://docs.github.com/zh/get-started/quickstart/contributing-to-projects#making-and-pushing-changes)

### 本地修改（高级）
一般是在大批量修改以及修改Vuepress（文档网页构建器，目录包括“\.github”以及“\.vuepress”）配置的时候再本地修改

需要安装[git](https://git-scm.com/)

需要先在Github fork本项目并clone到本地

然后在此本地git存储库配置[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/cookbook/tutorial/)环境

然后修改文档，测试文档是否能正常构建

提交，确认修改完成后给我们提交一个Pull requests

记得提交的时候签名

如要在提交中加入共同编辑者，请在Commit message的行尾留空回车两行后添加`Co-authored-by: {名字} <{邮箱}>`。示例：
```
这是一个Commit信息。


Co-authored-by: Test <test@example.com>
```

## 文档编写规范

### 组件
#### 正文

正文包括以下元素：
```markdown
---
category: 
- 组件
- {组件类别}
---
# {组件名}
## 描述

## 用法

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| {变量名} | {变量类型} | {描述} |
{以下省略}
```

其中，`{组件类别}`填写该组件的类别（载具、武器、地图、Misc、Ravenscrpit、Custom GameMode）

`{组件名}`与该组件文档相对应的组件名（未格式化,即文件名）一致，无需其他字符

描述一栏填写如“用于配置载具导出”等内容，如果是由其他C#类派生而来的应注明`从[{变量名}]({对应路径})类派生`，使用相对路径如`[Vehicle](./Vehicle.md)`

用法一栏填写如何使用这个组件，例如“套用在一个空物体上”或“武器的最顶层中附加”等

注释填写一些开发时可用的注意事项

`{变量名}`填写.cs脚本中的可调整项（变量），应与在脚本中未被Unity格式化（即[驼峰式camelCas](http://eslint.cn/docs/rules/camelcase)）的名称一致，如“`banlanceDamage`”

`{变量类型}`填写变量类型，如“`gameObject`”、“`float`”。当变量类型是由其他数据类型派生而来时应注明，如“`AiType`”类是由emun类派生而来的，则`{变量类型}`中应填写“`emun.AiType`”

`{描述}`填写对这个变量的说明、作用，填写的内容请尽量详细可靠并避免含糊不清的描述。当这里为下拉列表或emun时，请填写对选项的说明，如“`（Auto=自动、None=无、Handgun=手枪、RifleSmall=小步枪、RifleLarge=大步枪、Launcher=炮、Tank=坦克）`”

注意：
1. 当其上任何一个内容引用了任何一个其他的RFTools的组件时，应为这个字符串设置一个超链接，方便他人跳转。如`{变量类型}`中填写的“`List<Seat>`”时使用了一个组件，则应改为“`List<[Seat](/Documents/Components/Vehicle/Seat.md)>`”。其他地方同理。

2. 当您不知道一个项或一栏例应填写什么时，应在此处留空，而不是填写“未知”、“不知道”。

3. 请遵循上述示例编写文档,不要额外修改Vuepress config

4. 保证没有大小写的混淆

示例：
```markdown
---
category: 
- 组件
- 载具
---
# Vehicle

## 描述

载具的基本组成组件

## 用法

套用在场景载具物体最顶层物体上

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| name | string | 载具名称 | 
| seats | List<[Seat](/cn/Components/Seat.md)> | 座位 |
{以下省略}
```

#### 索引

当您编写完一个组件的文档时，您应将其添加到[组件索引](/cn/Components/README.md)中

包括一下元素，使用相对路径，注释译名：
```markdown
# 组件索引
## 载具
- [VehicleContentMod](./VehicleContentMod.md) 载具导出配置
- [Vehicle](./Vehicle.md) 载具
{以下省略}
```

### 教程类文档编写规范

未计划启用

## 杂项

1. 不要使用诸如`/cn/Components/`这类绝对路径，保证为以下示例：`/cn/Components`、`/cn/Components/README.md`
2. 请上传内容之前检查版权合法性

### 翻译文档
如要帮助翻译文档，请使用靠谱一点的翻译器如DeepL、ChatGPT

由于大部分翻译器在翻译文档时，会变更markdown语法格式导致错误，因此建议请使用翻译器PC端的划词翻译进行逐句翻译

对于不同语言的文档内容差异，可以使用[WinMerge](https://winmerge.org/)这类软件检查差异,但记住使用WinMerge时不要将[备份文件](https://manual.winmerge.org/en/Configuration.html#Configuration_backup)保存在git存储库内，选择一个其他的位置存储

固定词语的替换表：
| 原文 | 译文 |
|------|------|
| 组件 | Components |
| 载具 | Vehicle |
| 武器 | Weapon |
| 地图 | Map |
| Ravenscrpit | Ravenscrpit |
| Custom GameMode | Custom GameMode |
| Misc | Misc |
| 描述 | Description |
| 用法 | Usage |
| 注释 | Comment |
| 变量 | Variables |
### 图片上传
尽量不要上传图片（特别是组件文档），如要上传请传入至/.vuepress/pubilc/image文件夹内

按以下方式命名：`{文件名（对应引用的Markdown文件）}.{序号}{.语言（可选，仅一张图片需要多个显示语言时）}.{扩展名}`

如/cn/Tutorials/rvs.1.md引用的第二张图片，文件名为`rvs.1.002.png`，保存为/.vuepress/pubilc/image/Tutorials/rvs.1.001.png（或rvs.1.002.cn.png。只有一级子文件夹）

## Issue与社群讨论

对文档内容存在**不理解**之处、以及发现文档内容有所**缺失**或**错误**，可直接提出，强烈建议以发 **Issue** 的形式参与玩家反馈，并希望关于本项目的各种交流都是**公开进行**的，因为这样才可以保证关键信息的一致性。

由于本项目属于文档型项目，故不设置 Issue 模板，同时允许中英文标题，但提交 Issue 请遵守以下原则：

1. 标题言简意骇，说明欲提出的问题要点；切勿使用表意含糊不清或索取性的标题

2. Issue 正文应对问题进行尽可能详细的描述，展开并聚焦有关的信息

3.  提出问题时注意 [提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md) 并且 [别像弱智一样提问](https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways)
