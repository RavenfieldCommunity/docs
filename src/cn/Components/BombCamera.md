---
category: 
- 组件
- 载具
---
# BombCamera
## 描述

飞机投弹武器上，用于指向预计的炸弹撞击地点地摄像机组件

## 用法

挂载到武器子物体作为玩家视角的摄像机Camera的物体上，然后将这个摄像机Camera组件放到武器组件`overrideCamera`或`aimCamera`上

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| weapon | [Weapon](./Weapon.md) | 对应的武器 |  
| lockTargetWhenAiming  | bool | 是否默认限制相机旋转（使相机尽量指向目标落点。否则只在瞄准时生效） |  
