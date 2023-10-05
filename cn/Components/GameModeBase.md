---
category: 
- 组件
- Custom  GameMode
---
# GameModeBase
## 描述

地图游戏类型的基础配置类

## 用法

套用在地图内的一个空物体上

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| SpawnLayout | enum |  |  
| LoadoutUIType | enum |  |  
| gameModeName  | string | 游戏模式名称 |  
| loadoutType  | LoadoutUIType |  |  
| scoreboardType  | enum.ScoreboardUIType | 计分板类型(Scoreboard=标准, Objectives=任务清单, None=无) |  
| canConfigureFlags  | bool | 可自定义据点 |  
| canContinuePlayingAfterGameEnd  | bool | 游戏结束后不强制终止游戏 |  
| autoOpenLoadoutOnStart  | bool | 在游戏开始时打开武器选择面板 |  
