---
category: 
- 组件
- 载具
---
# MountedWeapon

## 描述
从[Weapon](./Weapon.md)类派生

类似于[Weapon](./Weapon.md)，但针对车载武器，标准类无法在载具使用

## 用法

挂载在[Seat](/cn/Components/Seat.md)的Weapons下

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| overrideCamera | Camera | 优先使用的摄像机（超越控制） |
| aimCamera | Camera | 瞄准用摄像机（这样才能更改fov） |
| aimChangeSpeed |float  | 瞄准速度（fov变化速度） |
| vehicleRigidbodyRecoilForce | float | 载具刚体后坐力（这是真的能导致载具移动的，跟[Weapon](./Weapon.md)里的后坐力“Kickback”不是一个意思） |
