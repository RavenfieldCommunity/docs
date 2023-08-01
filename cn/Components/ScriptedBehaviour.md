---
category: 
- 组件
- Ravenscrpit
---
# ScriptedBehaviour
## 描述

将自定义的Ravenscrpit脚本实例化到游戏物体上

## 用法

附加在目标游戏物体

参见[RFCreator Project](/cn/Tutorials/README.md)

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| source | TextAsset | Ravenscrpit脚本 |  
| behaviour | string | 要使用的行为名（可留空，大部分情况下可以自动匹配） |  
| targets | class.NamedTarget[] | 要使用的target物体(Size=数量。先填写Sizes，再在Element里配置target，name=要给这个target订义的id，value=目标物体) |  
