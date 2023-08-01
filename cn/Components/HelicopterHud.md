---
category: 
- 组件
- 载具
---
# HelicopterHud
## 描述

用于监视在游戏中实时监控直升机的各项数值并应用到UI物体

## 用法

随意，建议挂载在UI父物体顶层
## 注释

如果没有指定helicopter，组件会指定寻找所绑定的父物体直升机

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| helicopter | [Helicopter](./Helicopter.md) | 目标监控直升机 |  
| autoHover | GameObject.[PlaneHud](./PlaneHud.md).Indicator | 自动悬停状态(ready=启用时显示的UI物体, waiting=关闭时显示的UI物体) |  
| countermeasureIndicator | GameObject.[PlaneHud](./PlaneHud.md).Indicator | 自动悬停状态(ready=启用时显示的UI物体, waiting=关闭时显示的UI物体) |  
| horizontalSpeedText | Text | 显示水平速度的Text物体（纯数字，会覆盖原文本） |  
| verticalSpeedText | Text | 显示垂直速度的Text物体（纯数字，会覆盖原文本） |  
| altitudeText | Text | 显示海拔的Text物体（纯数字，会覆盖原文本） |  
