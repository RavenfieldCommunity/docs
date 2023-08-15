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
对应动画机的Parameters：
| Parameters名 | 类型 | 描述 |
|------|------|------|
| input forward | float |  |
| input right | float |  |
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
| inputSmoothness | int | 输入平滑度 |
| checker | Transform |  |
| rayLength | float  | 光线长度（应该是作用于groundChecker） |
