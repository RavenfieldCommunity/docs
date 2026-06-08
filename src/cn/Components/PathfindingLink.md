---
category: 
- 组件
- 地图
---
# PathfindingLink
## 描述
从GraphModifier类派生

强制寻路器可以让一个被NAV系统认为不可可以行走的地方但可以行走强制让AI认为可以行走（好像说得有点乱），优先级比[Avoidance Box](./AvoidanceBox.md)高
## 用法

套用在一个空物体作为起始点上

或者直接使用`RFTools\Prefabs\Map Elements\Must Have\的Pathfinding Link.prefab`(推荐)

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| end | Transform | 结束点（空物体） |  
| costFactor  | float | Bot通过这条路径的代价（影响优先级） |  
| oneWay  | bool | 是单向路线 |  
| type | [PathfindingBox](./PathfindingBox.md).Type | 类型(即此寻路器是用于限定谁的。Infantry=步兵, Car=陆上载具, Boat=水上载具) |  
