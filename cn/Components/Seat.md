---
category: 
- 组件
- 载具
---
# Seat

## 描述

载具的基础座位类

## 用法

应用在空物体，在这个物体下放置座椅的模型(没错，需要手动应用模型)上

不建议直接在模型上应用组件，模型的缩放会影响人物模型的缩放

需要应用的物体具有碰撞体积，可以选择连带加上一个BoxCollider组件

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| animation | enum.SitAnimation | 座椅上的人的动作（Chair=坐下, Quad=驾驶车辆, Standing=站立） |
| type | enum.Type | 座椅类型（FreelookUnarmed, LockedAllowFreelookUnarmed, AlwaysLockedUnarmed=锁定视角与人物装备栏的的武器, FreelookArmed=允许使用人物装备栏的的武器） |
| enclosed | bool | 载具内（保证人物不受balanceDamage的伤害从座位上震掉） |
| enclosedDamagedByDirectFire | bool | 载具内不受保护（与enclosed配套，判断会不会造成溅射伤害） |
| soundMuffle | enum.SoundMuffle | （ Auto, On, Off ） |
| allowLean | bool | 允许侧头 |
| allowUnderwater | bool | 允许在水下 |
| exitOffset | Vector3 | 下车位移 |
| weapons | [MountedWeapon](./MountedWeapon.md)[] | 此座位的武器 |
| handTargetL | Transform | 左手放置的位置（空物体。留空则不显示） |
| handTargetR | Transform | 右手放置的位置（空物体。留空则不显示） |
| camera | Camera | 第一人称摄像机（需保持Camera组件的禁用） |
| thirdPersonCamera | Camera | 第三人称摄像机（需保持Camera组件的禁用） |
| hud | GameObject | 抬头显示HUB（此HUB的Canvas要绑定相机） |
| maxOccupantBalance | float |  |
