---
category: 
- 组件
- 载具
---
# WeaponStatusIndicator
## 描述
用于监视在游戏中实时监控目标武器的各项数值并应用到UI物体

## 用法

随意，建议挂载在UI父物体顶层

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| weapon | [Weapon](./Weapon.md) | 目标武器 |  
| ignoreUnholster  | bool | 是否监视武器的切换行为 |  
| ignoreCooldown  | bool | 是否监视武器的过热行为 |  
| textIndicator | Text | 显示武器状态的Text物体 |  
| readyText  | string | 就绪时显示的文本 |  
| notReadyText  | string | 未就绪时显示的文本 |  
| reloadText  | string | 装弹中显示的文本 |  
| tintTargets | Graphic[] |  |  
| readyColor | Color |  |  
| notReadyColor | Color |  |  
| readyObject | GameObject | 就绪时启用的物体 |  
| notReadyObject | GameObject | 未就绪时启用的物体 |  
