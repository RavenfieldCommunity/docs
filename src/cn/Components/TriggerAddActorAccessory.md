---
category: 
- 组件
- Custom  GameMode
---
# TriggerAddActorAccessory
## 描述
从[TriggerReceiver](./TriggerReceiver.md)类派生

官方特别行动模式中的通讯兵身上使用了本组件相同的方法

用于给bot添加一点额外的东西到人物模型（装饰物）
## 用法

挂载在任意空物体上触发即可

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| type | enum | 目标操作（`AddAccessory`=添加, `ClearAccessories`=移除） |  
| actor | ActorReference | 要添加或清理装饰物的人员 |  
| accessory | ActorAccessory | 要添加的装饰物模型和对应的材质组 |  
