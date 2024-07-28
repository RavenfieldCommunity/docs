---
category: 
- 组件
- 地图
---
# ObjectOptionsToggler
## 描述

当`option`选择的游戏设置项（就是实际那个游戏的设置页）启用的时候，启用`trueObject`的GameObject，否则启用`falseObject`的GameObject

## 用法

挂载任意物体上`trueObject`、`falseObject`最好作为其子物体

## 注释
这玩意原本使用在原版据点旗帜上的，用来切换普通旗帜和布料模拟旗帜

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| option | OptionToggle.Id | 游戏设置项(`Hitmarkers`=启用命中提示,`AutoReload`=自动装弹,`ToggleAim`=单击瞄准,`ToggleCrouch`=单击下蹲,`ControlHints`=显示按键提示,`FullScreen`=全屏,`WeatherEffects`=天气效果,`HDR`=HDR高动态范围,`ColorCorrection`=色彩校正,`AllowJoystickBinds`=允许使用手柄,`ClothPhysics`=旗帜物理布料模拟,`AutoLoadLastVehicleMod`=测试模式下自动使用Mod载具,`KillIndicator`=启用击杀指示,`VSync`=垂直同步,`NeverendingBattles`=游戏胜利时不自动结束,`AmbientOcclusion`=AO环境光遮蔽,`ToggleSprint`=单击冲刺) |  
| trueObject | GameObject | `option`对应选项启用时要启用的物体 |  
| falseObject | GameObject | `option`对应选项禁用时要禁用的物体 |  
