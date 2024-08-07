---
category: 
- 组件
- Misc
---
# ActorSkinContentMod
## 描述

人物皮肤导出配置组件，只有给Mesh应用这个组件才能被Unity导出与被游戏导入

## 用法

先给模型绑骨

将其套用在一个空物体预制件

配置各个Skin时先在`Sizes`设置本次导出的Skin数量再配置各个皮肤

然后再各个MeshSkin槽位配置对应皮肤模型

最后选中物体，在菜单栏导出

MeshSkin类槽位变量：
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| mesh | Mesh | 此MeshSkin的Mesh（模型） |  
| materials | Material[] | 此MeshSkin模型所用材质 |  
| teamMaterial  | int | 该MeshSkin对应的队伍（0为Eagle蓝队，1为Raven红队） |  

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| name  | string | 皮肤名 |  
| characterSkin | MeshSkin | 第三人称的MeshSkin |  
| armSkin | MeshSkin | 第一人称手臂的MeshSkin |  
| kickLegSkin | MeshSkin | 第一人称腿的模型的MeshSkin |  