---
category: 
- 组件
- Custom  GameMode
---
# ScriptedGameMode
## 描述
从[GameModeBase](./GameModeBase.md)类派生

地图脚本任务的配置类

应用后将强制将地图游戏模式设置为脚本任务模式
## 用法

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| Checkpoint | enum |  |  
| InstantActionGameConfig | enum |  |  
| InstantActionMutatorConfig | enum |  |  
| TeamConfig | enum |  |  
| testConfiguration | TestConfiguration |  |  
| instantActionGameConfig | InstantActionGameConfig | 游戏大厅的各项模组配置（是否使用玩家自定义配置或读取官方配置） |  
| instantActionMutatorConfig | InstantActionMutatorConfig | 游戏大厅的脚本模组配置（是否使用玩家自定义配置或禁用） |  
| playerTeam | TeamConfig | 玩家的所在队伍（玩家自定义队伍或指定蓝&红队） |  
| Checkpoint currentCheckpoint  | static |  |  
| canCaptureFlagsByDefault  | bool | 地图内旗帜据点是否可被占领 |  
| spawnVehicles  | bool | 是否生成来自地图内载具重生点的载具 |  
| spawnTurrets  | bool | 是否生成来自地图内固定武器重生点的炮塔 |  
| generateAISquadOrders  | bool | 是否生成AI小队命令(如果关闭，则游戏不会自动下达任何有关进攻，防御等命令) |  
| triggerDebugLevel  | TriggerDebug.DebugLevel |  |  
| checkpoint | Checkpoint |  |  
