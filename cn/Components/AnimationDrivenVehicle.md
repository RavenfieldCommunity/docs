---
category: 
- 组件
- 载具
---
# AnimationDrivenVehicle

## 描述
从[Vehicle](./Vehicle.md)类派生

自定义动画的载具
## 用法
需要一个CharacterController组件，否则载具无法操作

参考[Vehicle](./Vehicle.md)
## 注释
建议将[InheritDeltaRotation](./InheritDeltaRotation.md)、[LookAtCamera](./LookAtCamera.md)与本组件配合使用

注意Animator组件applyRootMotion选项，按需求启用，作用参考[Unity官方文档](https://docs.unity.cn/cn/2020.3/Manual/class-Animator.html)

当CharacterController的碰撞箱与地面碰撞时，载具才会移动，因此请按情况调整CharacterController的碰撞箱体积

对应动画机的Parameters：
| Parameters名 | 类型 | 描述 |
|------|------|------|
| input forward | float | 前后操作的axis虚拟轴（Vertical） |
| input right | float | 左右操作的axis虚拟轴（Horizontal） |
| moving | bool | 当载具在移动时为true（仅XY轴） |
| sprint | bool | 玩家按下“冲刺”键时为true |
| jump | bool | 玩家按下“跳”键时为true |
| crouch | bool | 玩家按下“蹲起”键时为true |
| lean | float | 玩家按下“侧头”键时为true |
| touching ground | bool | 载具碰撞体接触地面时为true |

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| groundCheckers | GroundChecker[] | 地面检测 |
| inputSmoothness | int | 虚拟轴输入平滑度 |
| checker | Transform |  |
| rayLength | float  | 光线长度（应该是作用于groundChecker，但疑似废弃） |
