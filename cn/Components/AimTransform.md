---
category: 
- 组件
- 载具
---
# AimTransform
## 描述

当监听的座位的乘员处于瞄准或`userSeat`为空时，目标物体的position与rotation属性会逐步变换为aimTransform的position与rotation属性

否则逐步变换为`idleTransform`的的position与rotation属性

## 用法

挂载在目标物体

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| idleTransform | Transform | 参考“描述”一栏 |  
| aimTransform | Transform |参考“描述”一栏 |  
| changeSpeed  | float | 每秒的变换速度 |  
| userSeat | Seat | 监听的座位 |  
