---
category: 
- 组件
- 地图
---
# SpawnPointNeighborManager
## 描述

据点寻路系统，用于帮助bot在游戏中规划攻击路线

## 用法

套用在一个空物体，在`Size`处填入路线数量，然后在各个`Element *`配置每条路线，即两两之间把CapturePoint关联起来（就成了一条路线，是把CapturePoint放进去而不是SpawnPoint），按需配置每条路线的属性

或者直接使用`RFTools\Prefabs\Map Elements`内的`Spawn Point Neighbor Manager.prefab`(推荐)，同上配置这个物体

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| a | [SpawnPoint](./SpawnPoint.md) | 据点A |  
| b | [SpawnPoint](./SpawnPoint.md) | 据点B |  
| landConnection  | bool | AB两个据点间可以走陆路 |  
| waterConnection  | bool | AB两个据点间可以走水路 |  
| oneWay  | bool | 是单向路线（A => B） |  
