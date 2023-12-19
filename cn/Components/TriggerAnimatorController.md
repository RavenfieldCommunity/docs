---
category: 
- 组件
- Custom  GameMode
---
# TriggerAnimatorController
## 描述
从[TriggerReceiver](./TriggerReceiver.md)类派生

当接收到信号时，触发动画状态机对应的条件名称（triggerName）
## 用法

挂载在任意空物体上触发即可

## 注释

注意，要触发的条件类型必须为trigger

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| animator | Animator | 要触发的动画状态机 |  
| triggerName | string | 要触发的Trigger类型的条件名称 |  
