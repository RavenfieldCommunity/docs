# Mortar

## 描述
从[MountedWeapon](./MountedWeapon.md)类派生

一个作为迫击炮使用的武器，特性为可自动处理落点准星

## 用法

## 注释

弹道需要在[Rocket](Rocket.md)配置？

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| maxRange | float | 最大范围 |
| minRange | float | 最小范围 |
| defaultRange | float| 默认范围 |
| rangeChangeSpeed | float | 范围变换单位 |
| trajectoryHeight | float | 弹道高度 |
| targetSpreadRange | float | 扩散度（越大越不精准） |
| aimIndicator | GameObject | 落点标识（一个带Projector组件的空物体，应在武器子层级下） |
