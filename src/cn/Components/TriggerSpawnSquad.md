---
category: 
- 组件
- Custom  GameMode
---
# TriggerSpawnSquad
## 描述
从[TriggerReceiver](./TriggerReceiver.md)类派生
## 用法

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| RespawnType | enum |  |  
| CapType | enum |  |  
| team | Team |  |  
| respawnType  | RespawnType |  |  
| squadMembersToSpawn  | int |  |  
| pathGroup | ScriptedPathGroup |  |  
| spawnAtPathGroupNodes | bool |  |  
| detectionGroup | TriggerDetectionGroup |  |  
| onSquadAlerted | TriggerSend |  |  
| squadState | SquadState |  |  
| squadMemberInfo | SpawnInfo[] |  |  
| squadMemberAIInfo | AiInfo[] |  |  
| aliveActorsOnTeamCap | CapType |  |  
| onSpawnCompleteTrigger | TriggerSend |  |  
| isAlert | bool |  |  
| walkWhileUnalerted | bool |  |  
| slowDetection | bool |  |  
| leavePathGroupWhenAlerted | bool |  |  
| allowLeaveVehicleWhenStuck | bool |  |  
| followersInvisibleToUnalertedEnemies | bool |  |  
| engagementRule | Squad.EngagementRule |  |  
| order | OrderDefinition |  |  
| overrideName | string |  |  
| overrideSpawnPoint | Transform |  |  
| loadout | LoadoutInfo |  |  
| overrideSkin | ActorSkinData |  |  
| equipped | EquippedSlot |  |  
| health | Health |  |  
| hp | float |  |  
| attackersIgnoreEngagementRule | bool |  |  
| dropsAmmoWhenKicked | bool |  |  
| Health | enum |  |  
| EquippedSlot | enum |  |  
| useAutoPick | bool |  |  
| autoPickStrategy | AiActorController.LoadoutPickStrategy |  |  
| primary, secondary, gear1, gear2, gear3 | WeaponState |  |  
| weaponStates | WeaponStates |  |  
| skill | AiActorController.SkillLevel |  |  
| modifier | AiActorController.Modifier |  |  
