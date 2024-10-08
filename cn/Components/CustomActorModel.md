---
category: 
- 组件
- 地图
---
# CustomActorModel
## 描述

自定义在地图中使用的玩家皮肤

## 用法

随意挂载在一个空物体内，一个队伍单独一个，两个队伍则需要两个

其余变量项参考[MeshSkin](.\CustomTypes.md#MeshSkin)

或者直接使用`RFTools\Prefabs\Map Elements`内的`Custom Actor Model.prefab`(推荐)

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| team  | enum.[SpawnPoint](./SpawnPoint.md).Team | 要应用的队伍(`Neutral`=待占领, `Blue`=Eagle队, `Red`=Raven队) |  
| actorMesh | Mesh |  |  
| materials | Material[] |  |  
| actorMaterial  | int |  |  
| armMesh | Mesh |  |  
| armMaterials | Material[] |  |  
| armActorMaterial | int |  |  
| kickLegMesh | Mesh |  |  
| kickLegMaterials | Material[] |  |  
| kickLegActorMaterial | int |  |  
