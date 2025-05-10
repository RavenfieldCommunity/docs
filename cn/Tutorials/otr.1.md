---
category: 
- 教程
---
# otr.1 RFTools杂项
## 前言

本文介绍有关RFTools的一些功能、文件目录结构，以及关于其的常见问题等

## 使用RFTools

新建一个空Unity项目（务必注意版本）并打开，然后在windows文件管理器点击打开RFTools包即可导入

## RFTools的目录结构
```
RFTools
├─Animations 一些Prefab使用的动画机
│  ├─Character #角色
│  ├─Vehicles #载具
│  └─Weapons #武器
├─Content #MOD导出向导的配置实例，即预置的预导出MOD实例（此文件夹内的Prefab无法Export或Test）
├─Export #MOD导出位置
├─Fonts #载具HUB使用的字体
├─Materials #Prefab以及示例场景使用的材质
│  ├─Actor #玩家皮肤材质
│  ├─Effects #粒子与Prijectiles效果
│  ├─Level #Map的Flag
│  ├─Misc #一些杂七杂八的像标靶、地图避障箱
│  ├─Nature #自然事物（水）
│  ├─Physics #物理材质
│  ├─Props #一些杂七杂八的物体材质如补给箱
│  ├─Shaders #材质Shader，但没什么东西
│  │  └─GrassOverride
│  ├─Skybox #天空盒材质
│  ├─Standard Assets #Unity Standard Assets包,但只有草
│  ├─Textures #图像材质
│  │  ├─Camo #迷彩
│  │  ├─Effects #又是粒子和载具准星
│  │  │  └─Materials 已Material的图像材质
│  │  ├─Misc #杂七杂八的的像标靶材质的原图像
│  │  ├─Nature #自然纹理（地形、植被）的原图像与法向贴图
│  │  ├─Props #杂七杂八的如补给箱的原图像
│  │  ├─UI #UI物体
│  │  │  ├─Blips #载具Prefab的地图图标
│  │  │  ├─Vehicles #载具Prefab的UI贴图
│  │  │  └─Weapons #武器Prefab的图标
│  │  └─Vehicles #载具Prefab所用材质原图像
│  │      └─Occlusion #武直Prefab的迷彩
│  ├─Tracers 武器红点瞄具材质
│  ├─UI #载具UI材质
│  ├─Vehicles #载具材质
│  │  └─Updated Vehicles #某次RFTools更新增加的载具材质
│  │      └─Attack Helicopter
│  └─Weapons #武器材质
├─Models #Prefab所用模型
│  ├─Character #玩家角色
│  │  └─Materials
│  ├─Effects #Projectiles的Prefab所用模型
│  │  └─Materials
│  ├─Misc #杂七杂八的别理
│  │  └─Materials
│  ├─Props #杂七杂八的别理
│  │  └─Level Elements
│  │      └─Materials
│  ├─Vehicles #载具Prefab所用模型
│  │  ├─Materials
│  │  └─UI #飞机Prefab的UI所用模型
│  │      └─Materials
│  └─Weapons #武器
│      ├─Materials
│      └─Misc #武器Prefab的子弹抛壳
├─Plugins #Steam Workshop的依赖，勿动
├─Prefabs #一些Prefab
│  ├─Combat #载具的Projectiles的Prefab
│  ├─Map Elements #地图的Prefab
│  │  └─Must Haves #地图必须有的Prefab
│  │      └─Pathfinding #寻路系统的Prefab
│  ├─Projectiles #子弹Projectiles的Prefab
│  ├─Vehicles #载具
│  │  ├─Misc #杂七杂八的
│  │  └─Old Versions #以前版本的旧载具
│  └─Weapons #武器
├─Resources #一些工具包组件的可视化预览所用模型
│  └─Preview
│      └─Materials
├─Scenes #示例场景
│  ├─ExampleScene #示例地图
│  └─Weapons Lab #武器实验场景
├─Scripts #RFTools依赖组件，勿动
├─Shaders #一些Shaders
├─Sounds #一些音效
│  ├─Ambience #环境音（风声）
│  ├─Vehicles #载具
│  └─Weapons #武器
│      ├─Effects #一些杂七杂八的像烟与子弹飞行声
│      └─Reflection #子弹打击回声，勿动
├─Standalone #Steam相关，勿动
├─Standard Assets #Unity Standard Assets资源包的东西，有Shaders以及图像材质，此处不作注解
│  ├─Editor
│  │  └─ImageEffects
│  └─Effects
│      ├─GlassRefraction
│      │  ├─Materials
│      │  ├─Shaders
│      │  └─Textures
│      ├─ImageEffects
│      │  ├─Scripts
│      │  ├─Shaders
│      │  │  ├─Contrast Stretch
│      │  │  ├─_Antialiasing
│      │  │  ├─_BloomAndFlares
│      │  │  └─_DepthOfField
│      │  └─Textures
│      ├─LightCookies
│      │  └─Textures
│      ├─LightFlares
│      │  ├─Flares
│      │  ├─Materials
│      │  └─Textures
│      ├─Projectors
│      │  ├─Materials
│      │  ├─Prefabs
│      │  ├─Shaders
│      │  └─Textures
│      ├─TessellationShaders
│      │  ├─Materials
│      │  ├─Models
│      │  ├─Scenes
│      │  ├─Shaders
│      │  └─Textures
│      └─ToonShading
│          ├─Materials
│          ├─Shaders
│          └─Textures
└─Tools #勿动
```

## 菜单栏功能
```
Ravenfield Tool
├─ Build Target #导出MOD对应目标系统类型（点击“Set ...”设置）
├─ Set Game Executeble #选择游戏文件目录（方便测试MOD）
├─ Map #地图相关
│   ├─ Scan Pathfinding #扫描地图的NAV-MESH（会唤醒游戏进程）
│   ├─ Export Open Scene as Map #将打开的Unity场景作为Map导出
│   └─ Sanity Check Map #检查Map是否可以导出（是否缺失必要物体）
├─ Content #MOD
│  ├─ Sanity Check Content Mod #检查选中的Mod导出向导Prefab是否可以导出（是否缺失必要物体）
│  └─ Export Content Mod #导出选中的Mod导出向导Prefab
├─ Export Map or Content Mod #导出选中的Map或Mod导出向导Prefab
├─ Test Map or Content Mod #导出并运行游戏测试选中的Map或Mod导出向导Prefab
└─ Publish to Steam Workshop #发布已导出的Mod或Map到Steam创意工坊
```

## 常见问题
> **打开Unity工程，提示进入安全模式**
>
> 提示[安全模式](https://docs.unity.cn/cn/2020.3/Manual/SafeMode.html)时，此时如果忽略错误并强制进入，大部分情况下RFTools的所有依赖组件都会无法运行
>
>若上一次打开工程时刚导入RFTools包，则尝试新建工程，再次导入RFTools包，检查控制台是否有报错
>
>如果有，则说明可能RFTools损坏或有Bug，尝试到官网下载一个最新版使用
>
> RFTools包与当前的Unity Editor版本不兼容，请确保使用的Unity Editor与Tools版本对应。详情请看本站的资源镜像
>
> 或请检查上一次打开工程时是否添加了外部C#脚本进入工程或修改了RFTools依赖组件，如果有，替换原版脚本或删除外来脚本