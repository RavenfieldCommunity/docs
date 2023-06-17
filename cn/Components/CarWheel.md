---
category: 
- 组件
- 载具
---
# CarWheel

## 描述

载具的车轮，用于在游戏中自动处理轮胎的各类活动

## 用法

应用在一个空物体，在这个空物体内下挂轮胎的模型

或直接应用在轮胎的模型上（未测试）

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| suspensionHeight | float | 悬挂高度 |
| wheelRadius | float| 轮胎半径 |
| suspensionAcceleration | float | 悬挂加速度（应该是类似回弹速度？） |
| suspensionDrag | float | 悬挂阻力 |
| wheelModel | Transform | 轮胎模型 |
| rotate | bool | 是否可转向 |
| invertRotation | bool | 反向转向 |
| turnAngle | float | 转向角度 |
| speedSampleTransform | Transform |  |
