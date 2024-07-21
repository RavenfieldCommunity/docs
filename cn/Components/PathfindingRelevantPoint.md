---
category: 
- 组件
- 地图
---
# PathfindingRelevantPoint
## 描述

相关寻路点

这些点用于决定从[PathfindingBox](./PathfindingBox.md)生成的导航网格的哪些部分是有效的。PathfindingRelevantPoint将自动查找20米内最近的NAV-MESH曲面，并将该曲面标记为有效路径

## 用法

套用在一个空物体作上

或者直接使用`RFTools\Prefabs\Map Elements\Must Have\Pathfinding`的`Relevant Pathfinding Point.prefab`(推荐)

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| type | enum.Type | 针对的类型(Ground=地面, Water=水面) |