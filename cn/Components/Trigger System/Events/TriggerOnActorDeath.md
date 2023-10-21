---
category: 
- 组件
- 触发
---
# TriggerOnActorDeath
## 描述

当指定条件组中的人员死亡时发送一个On Death信号

适用于脚本任务关卡中关键人物死亡时来触发某个事件

## 用法

随意挂载在任意空物体上

挂载的空物体必须为激活状态，否则事件将不生效

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| filter | [ActorFilter](./ActorFilter.md) | 条件组(达成条件后才会发送信号) |  
| ignoreSilentKills | bool | 是否忽略被静默击杀的人员(在原版中只有在玩家接替Bot时才会触发静默击杀) |  
| onDeath | [TriggerSend](./TriggerSend.md) | 如果条件满足，检测到人员死亡后会给目标组发送信号 |  