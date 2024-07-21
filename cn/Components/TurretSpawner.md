---
category: 
- 组件
- 地图
---
# TurretSpawner
## 描述

炮塔生成点

## 用法

套用在一个空物体，需自行添加Mesh Filter（应选择RFTools内的`Resource\Perview\Default.obj`）、Mesh Renderer与材质

或者直接使用`RFTools\Prefabs\Map Elements`内的`Turret Spawner.prefab`(推荐)

应将此物体至于[据点Capture Point](./CapturePoint.md)的保护范围，否则导出地图时有概率报错

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| typeToSpawn | enum.TurretSpawnType | 生成类型(`MachineGun`, `AntiTank`, `AntiAir`) |  
| prefab | GameObject | 自定义生成炮塔Prefab（即单独指定一个，此选项不受游戏选项的影响） |  
| priority  | byte | 优先级（作用未知） |  
