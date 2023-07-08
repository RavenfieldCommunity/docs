# PlaneHud
## 描述

用于监视在游戏中实时监控飞机的各项数值并应用到UI物体

## 用法

随意，建议挂载在UI父物体顶层

## 注释

如果没有指定plane，组件会指定寻找所绑定的父物体飞机

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| plane | [Airplane](./Airplane.md) | 目标监控飞机 |  
| gearIndicator | GameObject.Indicator | 起落架状态(ready=准备好时显示的UI物体, waiting=忙时显示的UI物体) |  
| airbrakeIndicator | GameObject.Indicator | 减速板状态(当飞机的vector.y小于-0.3时触发ready，否则为waiting。ready=准备好时显示的UI物体, waiting=忙时显示的UI物体) |  
| countermeasureIndicator | GameObject.Indicator | 热诱弹状态(ready=准备好时显示的UI物体, waiting=装弹时显示的UI物体) |  
| speedLabel | Text | 显示速度的Text物体（纯数字，会覆盖原文本） |  
| altitudeLabel | Text | 显示海拔的Text物体（纯数字，会覆盖原文本） |  
