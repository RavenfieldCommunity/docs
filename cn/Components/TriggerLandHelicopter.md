---
category: 
- 组件
- Custom  GameMode
---
# TriggerLandHelicopter
## 描述
从[TriggerReceiver](./TriggerReceiver.md)类派生

可以使小队驾驶的直升机降落至指定地点
你还可以创建一个类型设置为 TakeOff 的新触发器来让直升机重新起飞
## 用法

挂载在任意空物体上即可

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| Type | enum | 降落&重新起飞 |  
| squad | SquadReference | 驾驶直升机的目标小队 |  
| landPosition  | Transform | 要降落的位置 |  
| onLanded  | TriggerSend | 降落完成后的事件 |  
