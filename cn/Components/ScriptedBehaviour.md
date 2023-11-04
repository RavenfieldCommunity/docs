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
| behaviour | string | 要使用的行为名（可留空，在文件名与脚本注册的behaviour名一致的情况下可以自动匹配） |  
| targets | class.NamedTarget[] | 要在脚本内使用的target物体(`Size`=数量。先填写`Size`，再在`Element`里配置target，`name`=要给这个target定义的id，value=目标物体) |  
