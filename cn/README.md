---
title: 首页
home: true
heroText: false
tagline: false
description: Ravenfield中文社区模组开发与游戏入门文档
head:
  - - meta
    - name: robots
      content: yesindex
---
<p align="center">

# Ravenfield社区客制化文档

</p>

![GitHub issues](https://img.shields.io/github/issues/RavenfieldCommunity/docs.svg?style=flat-square&) ![GitHub stars](https://img.shields.io/github/stars/RavenfieldCommunity/docs.svg?style=flat-square&) ![Github docs deploy](https://img.shields.io/github/actions/workflow/status/RavenfieldCommunity/docs/deploy-docs.yml?style=flat-square&)


[![License](https://img.shields.io/badge/%E6%8E%88%E6%9D%83%E5%9F%BA%E4%BA%8E%E8%AE%B8%E5%8F%AF-CC%20BY--NC%204.0-lightblue.svg?style=for-the-badge&)](https://github.com/RavenfieldCommunity/docs/blob/main/LICENSE) [![在 Steam 上了解Ravenfield](https://img.shields.io/badge/steam-%E4%BA%86%E8%A7%A3%20Ravenfield-blue.svg?style=for-the-badge&logo=steam)](https://store.steampowered.com/app/636480/)

Ravenfield是一款由[SteelRaven7](http://steelraven7.com/)开发的FPS射击游戏

此文档可帮助您了解如何如何开发Ravenfield的模组。您可以从头到尾阅读该文档，或将其用作参考。

如果这是第一次使用游玩Ravenfield或开发MOD，欢迎查看有关游玩Ravenfield的[介绍性文档](/cn/in-GAME/)，并参阅[RFCreator Project](/cn/Tutorials/README.md)。

:::: warning 公告：坏消息
> 由于[Unity的价格政策](https://unity.com/cn/pricing-updates)调整，目前RF开发者正在全力赶工非Early Access的正式1.0游戏版本，争取在新政策正式生效前取消掉他的Unity开发者执照。
>
>如果计划没有变更，这将意味着:
>- 原先计划的部分内容可能会被砍掉
>- 游戏可能将不会提供长期支持（不排除在另一个引擎上制作RF续作的可能）
::: right
——转自@[Sofa](http://steamcommunity.com/profiles/76561197985987595)的Discord频道（此处从[国内QQ频道RFCN](9pmc179t29)二转,经转意，[原图](/image/tmp/notice1.jpg)）
:::

因此，本文档可能在游戏停更后的某个未来时间节点（大概两年内？）永久停止维护

非常抱歉

但没有办法，如果未来游戏的创意工坊逐渐冷落，我想这只能是无用之功

@[Leafx-code](https://github.com/Leafx-code)
2023.9.22
::::

------

**浏览文档的组成部分**

::: card

```card
title: 游戏入门
desc: 引导 上手 熟悉Ravenfield
logo: /image/Components.png
link: /cn/in-GAME/README.md
```

```card
title: 教程
desc: 开发Ravenfield模组
logo: /image/Components.png
link: /cn/Tutorials/README.md
```

```card
title: 组件参考
desc: RFTools自建组件参考文档
logo: /image/Components.png
link: /cn/Components/README.md
```

```card
title: ❤贡献指南
desc: 帮助我们维护文档！
logo: /image/Components.png
link: /cn/CONTRIBUTING.md
```

```card
title: 资源镜像
desc: 开发资源链接
logo: /image/Components.png
link: /cn/RESOURCE.md
```

```card
title: 旧版项目
desc: 此文档的Steam原项目
logo: https://store.steampowered.com/favicon.ico
link: https://steamcommunity.com/sharedfiles/filedetails/?id=2902809158
```
:::

**鸣谢**

所有的[贡献者](https://github.com/RavenfieldCommunity/docs/graphs/contributors)们，因为你们才使得了这个文档日臻完善❤❤❤:

![GitHub Contributors Image](https://contrib.rocks/image?repo=RavenfieldCommunity/docs)

当然还有RF的modder群友们！谢谢你们对组件做出的注解！

以及以下开源项目 ：
- [SocialSisterYi/bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect/)

    为这个项目的结构与的构建提供了参考
- [vuepress-theme-hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope)、[vuepress/vuepress](https://github.com/vuepress/vuepress-next)、[JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)

    部署项目文档使用的开源项目
