---
category: 
- 组件
- Misc
---
# ActorSkinContentMod
## 描述

人物皮肤导出配置组件，只有给Mesh应用这个组件才能被Unity导出与被游戏导入

## 用法

将其套用在一个空物体预制件

配置各个Skin时先在Sizes设置本次导出的Skin数量

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| name  | string | 皮肤名 |  
| characterSkin | class.MeshSkin |  |  
| armSkin | class.MeshSkin |  |  
| kickLegSkin | class.MeshSkin |  |  
| mesh | Mesh |  |  

| materials | Material[] |  |  
| teamMaterial  | int |  |  
| RigVersion | enum |  |  
| RigVersion RECOMMENDED_VERSION  | const |  |  
| version  | RigVersion |  |  