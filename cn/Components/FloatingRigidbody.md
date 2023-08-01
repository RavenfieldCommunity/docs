---
category: 
- 组件
- 载具
---
# FloatingRigidbody

## 描述

在游戏水面（[WaterLevel](./WaterLevel.md)、[WaterVolume](./WaterVolume.md)）的浮动刚体

适用于非[Boat](/cn/Components/Boat.md)载具

## 用法
此组件已自带绑定Rigidbody组件，无需手动添加

参考[Vehicle](/cn/Components/Vehicle.md)，挂载在载具物体的最顶层物体上
## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| floatingSamplers | Transform[] | 采样点(刚体基准点，空物体，建议跟循官方设置四个以保持载具平衡) |
| floatAcceleration | float | 浮动加速度 |
| floatDepth | float | 浮动深度 |
| waterDrag | float | 在水中的阻力 |
| waterAngularDrag | float | 在水中转向的阻力 |
