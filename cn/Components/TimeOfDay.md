---
category: 
- 组件
- 地图
---
# TimeOfDay
## 描述

用于控制地图白天与夜晚的环境属性（灯光、Atmosphere大气散射、环境颜色、Skybox天空盒）

## 用法

套用在空物体中

白天所使用的Light物体（是的官方的Prefab里包含一个Light物体，你可以调整它）置于此组件应用物体内并并重命名为"`Day`",夜晚所使用的也做同样操作并重命名为"`Night`"

白天的Atmosphere直接在Lighting窗口 -> Environment选项卡配置

或者直接使用`\Assets\Prefabs\Map Elements\Must Haves`内的`Time Of Day.prefab`(推荐)

此组件很大一部分选项要生效的话，需要先行在[Lighting窗口](https://docs.unity.cn/cn/2020.3/Manual/lighting-window.html)配置地图场景环境

当Lighting窗口 -> Environment选项卡 -> Environment Lighting -> Source属性为Gradient时才能修改颜色

当Lighting窗口 -> Environment选项卡 -> Other Settings -> Fog属性已启用时才能在组件修改雾的属性

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- | 
| nightAtmosphere | Atmosphere | 夜晚的Atmosphere |  
| testNight  | bool | 测试夜晚（在Editor的播放模式下预览夜晚效果） |  
| sky | Color | 天空颜色 |  
| equator | Color | 地平线的颜色 |  
| ground | Color | 地面颜色 |  
| fogDensity | float | 雾的密度 |  
| fog | Color | 雾的颜色(启用雾的时候可用) |  
| skyboxMaterial | Material | 夜晚的天空盒材质 |  
