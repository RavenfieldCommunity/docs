---
category: 
- 组件
- 载具
---
# Seat

## 描述

载具的基础座位类

## 用法

应用在空物体或一个座椅的模型(没错，需要手动应用模型)上

需要应用的物体具有体积，可以选择连带加上一个BoxCollider组件

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| animation | enum.SitAnimation | 座椅上的人的动作（Chair=坐下, Quad=驾驶车辆, Standing=站立） |
| type | enum.Type | 座椅类型（FreelookUnarmed, LockedAllowFreelookUnarmed, AlwaysLockedUnarmed, FreelookArmed） |
| enclosed | bool | 载具内 |
| enclosedDamagedByDirectFire | bool | 载具内不受保护 |
| soundMuffle | enum.SoundMuffle | （ Auto, On, Off ） |
| allowLean | bool | 允许侧头 |
| allowUnderwater | bool | 允许在水下 |
| exitOffset | Vector3 | 下车位移 |
| weapons | [MountedWeapon](./MountedWeapon.md)[] | 此座位的武器 |
| handTargetL | Transform | 左手目标位置 |
| handTargetR | Transform | 右手目标位置 |
| camera | Camera | 第一人称摄像机 |
| thirdPersonCamera | Camera | 第三人称摄像机 |
| hud | GameObject | 抬头显示HUB |
| maxOccupantBalance | float |  |
