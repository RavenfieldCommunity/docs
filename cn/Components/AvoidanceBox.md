---
category: 
- 组件
- 地图
---
# AvoidanceBox
## 描述
回避箱可以设置一个AI不会通过的地方即使进去了也会快速离开（即类似那种NAV-MESH未覆盖的地方）
## 用法
套用在一个空物体上

或者直接使用`RFTools\Prefabs\Map Elements`内的`Avoidance Box.prefab`(推荐)

物体的体积即是作用范围

无需其他的附加组件（如碰撞检测、刚体之类）
## 注释

当AvoidanceBox包含未使用的载具（特别时在据点保护范围的载具）时，载具的优先级可能会超过AvoidanceBox回避箱

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| applyToAllTypes  | bool | 是否针对所有Bot |  
| type | [PathfindingBox](./PathfindingBox.md).Type | 是针对哪些Bot的(Infantry=步兵, Car=车辆, Boat=船) |  
| penalty  | uint | 惩罚值（类似于在这条路行走的代价，但似乎在此处无论如何（即使`penalty`=0）Bot都会认为这条路的代价过大而不行走。此处1000=Unity里的1？） |  
| unwalkable  | bool | 是否不可行走 |  
