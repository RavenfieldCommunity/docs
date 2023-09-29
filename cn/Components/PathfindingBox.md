---
category: 
- 组件
- 地图
---
# PathfindingBox
## 描述

寻路盒，用于划定AI在全图的活动空间

## 用法

套用在一个空物体上

物体的体积即是范围（当用于水上载具寻路时请确保罩住水面）

无需其他的附加组件（如碰撞检测、刚体之类）

或者直接使用\Assets\Prefabs\Map Elements\Must Have\Pathfinding内的prefab(推荐，名字的不同对应不同类型的寻路盒，可在下面修改，不必纠结)

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| type | enum.Type | 寻路盒类型(即此寻路盒是用于限定谁的。Infantry=步兵, Car=陆上载具, Boat=水上载具) |  
| tiled  | bool | 此寻路盒内是一个平面（可加快寻路扫描时间，可能会引入一些不必要的障碍。禁用此项可保证NAV-MESH完全适合PathfindingBox。建议启用） |  
| automaticCellSize  | bool | 启用路径自动扫描精细度（越小越精细，扫描时间越长） |  
| cellSize  | float | 扫描精细度 |  
| characterRadius  | float | Bot的半径大小（一个Bot行走时占多大空间，距离MAV-MESH的距离，不被完全包含的地方将被标记为不可行走） |  
| climbHeight  | float | 最高相对坡度大小（度为单位） |  
| coverPointSpacing | float | 搜索覆盖点的距离（对于大地图，可以将此值增加到1左右以加快扫描寻路时间）  |  
| blockers | [PathfindingBox](./PathfindingBox.md)[] | 忽略的扫描地区（如果要使用另一个PathfindingBox扫描特定区域，可以通过添加另一个框作为阻止程序来阻止此PathfindingBox的NAV-MESH生成） |  
