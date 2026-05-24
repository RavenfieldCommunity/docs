---
category: 
- 组件
- 载具
---
# AircraftDrag

## 描述

飞机阻力

## 用法

挂载在飞机刚体一栏的任意位置，不过不建议使用，我测试了大概10小时，依然搞不懂这个对于更真实的空气动力学有什么用处。就好比rf里的飞机升力一样。我认为用pitch，roll,和Yaw的sensitivity更好

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| forwardDragGain | float | 正向阻力增益 |
| sideDragGain | float | 侧面阻力增益 |
| upDragGain | float | 上升阻力增益 |
| forwardAngularDragGain | float | 向前角阻力增益 |
| sideAngularDragGain | float | 侧面角阻力增益 |
| upAngularDragGain | float | 上角阻力增益 |
