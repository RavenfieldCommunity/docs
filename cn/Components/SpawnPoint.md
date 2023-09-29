---
category: 
- 组件
- 地图
---
# SpawnPoint
## 描述

[据点](./CapturePoint.md)与[载具生成器](./VehicleSpawner.md)等组件的基类，一般不使用此组件

## 用法

一般不使用此组件而是使用其子组件

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |  
| defaultOwner  | enum.Team | 初始默认所有队伍(Neutral=待占领, Blue=Eagle队, Red=Raven队) |  
| protectRange  | float | Bot在点位内的活动半径（防御此点位时） |  
| defenseStrategy  | enum.DefenseStrategy | 防御策略(Default=默认, NeverAutoDefend=不自动防御, AlwaysAutoDefend=自动防御) |  
| vehicleFilter | class.VehicleFilter | 此点位可以用什么类型的载具到达（landcraft=陆战类, amphibious=两栖类, watercraft=水战类, air=直升机, airFastmover=飞机, allowOnlyFromFrontlineSpawnUsage） |  
| shortName  | string | 点位缩写名 |  
| spawnpointContainer | Transform | 出生点的寄存器。（决定Bot与玩家将在哪里出生。在这个寄存器空物体内再添加的空物体视为出生点） |  
| isRelevantPathfindingPoint  | bool |  |  
| captureAnimation | class.CaptureAnimation |  |  
| helicopterLandingZones | Transform[] |  |  
| animators | Animation[] |  |  
| neutralCapturedAnimation | string |  |  
| blueCapturedAnimation | string |  |  
| redCapturedAnimation | string |  |  
