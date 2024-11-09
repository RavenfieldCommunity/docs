---
category: 
- 组件
- 武器
---
# TargetTracker
## 描述

跟踪导弹[TargetSeekingMissile](./TargetSeekingMissile.md)目标锁定器

给予跟踪导弹跟踪目标

## 用法

挂载在weapon的子物体下

详见武器教程

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| fieldOfView  | float | 以瞄准中心为中心的视角广度 |  
| scanFrequency  | float | 每秒扫描频率 |  
| lockTime  | float | 锁定目标所需时间 |  
| requireAim  | bool | 武器处于瞄准状态时才可以锁定目标 |  
| requireLockToFire  | bool | 锁定目标后武器才可以开火 |  
| onlyLockWhenWeaponIsEquipped  | bool |  |  
| useMountedWeaponUserLook  | bool |  |  
| lockOntoEmptyVehicles  | bool |  |  
| maxPointTargetAngle  | float |  |  
| trackingPositionIndicator | Transform | 中心瞄准物体 |  
| pointTargetPositionIndicator | Transform |  |  
| activateWhenLocking | GameObject | 当正在锁定时激活的物体 |  
| activateWhenLocked | GameObject | 当已锁定时激活的物体 |  
| activateWhenPointTargetInRange | GameObject |  |  
| activateWhenPointTargetOutOfRange | GameObject |  |  
| updatePositionIndicatorEveryFrame  | bool |  |  
| lockType  | enum.LockType | 锁定的目标类型 |  
