---
category: 
- 组件
- 地图
---
# CapturePoint
## 描述
从[SpawnPoint](./SpawnPoint.md)类派生

地图据点

## 用法

套用在一个3D Object，可以修改材质

或者直接使用`RFTools\Prefabs\Map Elements\Must Have`内的`Capture Point.prefab`(推荐)，你可以替换其中的模型

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| contestedSpawnpointContainer | Transform | 次出生点的寄存器。（决定Bot与玩家将在哪里出生，当此据点在被两拨军队争夺时使用。在这个寄存器空物体内再添加的空物体视为出生点） |  
| captureRange  | float | 据点保护半径范围 |  
| captureFloor  | float | 据点保护范围的深度 |  
| captureCeiling  | float | 据点保护范围的高度 |  
| flagParent | Transform | 旗帜物体 |  
