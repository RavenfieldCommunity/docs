---
category: 
- 组件
---
# 自定义类型

## ActorFilter

## ActorReference
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| type | enum | 要筛选到的人物（`Player`=仅玩家, `SquadMember`=小队成员, `VehiclePassenger`=载具乘客, `FromSignal`=触发触发器的人物, `None`=无） |
| squad | SquadReference | （仅`type`为`SquadMember`时可用）目标小队 |

## MeshSkin
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| mesh | Mesh | 此MeshSkin的Mesh（模型） |  
| materials | Material[] | 此MeshSkin模型所用材质 |  
| teamMaterial  | int | 该MeshSkin材质对应的队伍（`0`为Eagle蓝队，`1`为Raven红队） |  

# MaterialTarget
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| targetRenderer | Renderer | 目标renderer |  
| materialSlot | int | 材质数量 |  
