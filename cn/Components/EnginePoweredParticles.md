# EnginePoweredParticles
## 描述

可根据引擎功率调整粒子的发射速率,通常用来搭配飞机的喷口火焰粒子

由于这里的engine功率并不会随着飞机的`acceleration`和deceleration（减速度）变化，而仅仅是在玩家上飞机时缓慢达到`1`，下飞机时下降到`0`. 可以简单的认为这个脚本是让玩家在上下飞机时缓慢打开/关闭粒子的开关，并不适合用于高级的飞机载具


## 用法

挂载在粒子系统一栏

## 注释

该值影响粒子系统中的`rateOverTimeMultiplier` 和 `rateOverDistanceMultiplier`

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| enginePowerControlsEmissionRate  | bool | 引擎功率是否控制粒子发射速率的变化 |  
