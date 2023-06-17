---
category: 
- 组件
- 地图
---
# VehicleSpawner
## 描述

载具生成点

## 用法

套用在一个空物体，需自行添加Mesh Filter（应选择RFTools内的Resource\Perview\Default.obj）、Mesh Renderer与材质

或者直接使用\Assets\Prefabs\Map Elements内的Vehicle Spawner.prefab(推荐)

应将此物体至于[据点Capture Point](CapturePoint.md)的保护范围，否则导出地图时有概率报错

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| spawnTime  | float | 两个载具的生成间隔 |  
| respawnType  | enum.RespawnType | 何时再生成载具(AfterDestroyed=前一个报废后, AfterMoved=前一个开走后, Never=从不) |  
| typeToSpawn | enum.VehicleSpawnType | 生成类型(Jeep, JeepMachineGun, Quad, Tank, AttackHelicopter, AttackPlane, Rhib, AttackBoat, BombPlane, TransportHelicopter, Apc) |  
| prefab | GameObject | 自定义生成载具Prefab（即单独指定一个，此选项不受游戏选项的影响） |  
| priority  | byte | 优先级（作用未知） |  
| isRelevantPathfindingPointForBoats  | bool | 是船的Pathfinding Point（当生成的载具为Boat时请启用） |  
