---
category: 
- 组件
- 武器
---
# CountermeasureStatusIndicator
## 描述

用于在游戏中实时监控载具热诱弹的状态并应用到UI物体

虽然游戏原版hub可以显示热诱弹状态

## 用法
随意，建议挂载在UI父物体顶层
## 注释
如果没有指定vehicle，组件会指定寻找所绑定的父物体载具
## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| vehicle | [Vehicle](./Vehicle.md) | 目标载具 |  
| textIndicator | Text | 显示热诱弹状态的Text物体 |  
| readyText  | string | 就绪时显示的文本（应用到`textIndicator`并覆盖） |  
| notReadyText  | string | 未就绪时显示的文本（应用到`textIndicator`并覆盖） |  
| tintTargets | Graphic[] | 用于显示热诱弹状态的UI物体（用于依据热诱弹状态状态变色） |  
| readyColor | Color | 就绪时在`tintTargets`叠加的颜色 |  
| notReadyColor | Color | 就绪时在`tintTargets`叠加的颜色 |  
| readyObject | GameObject | 热诱弹就绪时启用的物体 |  
| notReadyObject | GameObject | 热诱弹未就绪时启用的物体 |  
