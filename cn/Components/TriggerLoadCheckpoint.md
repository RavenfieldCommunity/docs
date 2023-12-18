---
category: 
- 组件
- Custom  GameMode
---
# TriggerLoadCheckpoint
## 描述
从[TriggerBaseComponent](./TriggerBaseComponent.md)类派生

脚本任务模式的关键组件，你需要用它来加载游戏的存档点
## 用法

挂载在任意空物体上触发即可

## 注释

脚本任务模式启动后，游戏会尝试寻找场景内所有游戏物体是否拥有该组件。
如果有，则会触发一次当前检查点的信号组

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| checkpoint | ScriptedGameMode.Checkpoint | 要读取的检查点 |  
| onCheckpointLoadedTrigger | TriggerSend | 当关卡以指定的检查点开始时发送该信号组 |  
