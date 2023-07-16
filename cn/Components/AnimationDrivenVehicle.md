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
参考[Vehicle](./Vehicle.md)
## 注释
对应动画机的Parameters：
| Parameters名 | 类型 | 描述 |
|------|------|------|
| input forward | float |  |
| input right | float |  |
| moving | bool |  |
| sprint | bool |  |
| jump | bool |  |
| crouch | bool |  |
| lean | float |  |
| touching ground | bool |  |

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| groundCheckers | GroundChecker[] | 地面检测 |
| inputSmoothness | int | 输入平滑度 |
| checker | Transform |  |
| rayLength | float  | 光线长度（应该是作用于groundChecker） |
