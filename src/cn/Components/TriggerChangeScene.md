---
category: 
- 组件
- Custom  GameMode
---
# TriggerChangeScene
## 描述
从[TriggerReceiver](./TriggerReceiver.md)类派生

当触发时，加载按名称引用的另一个场景或直接返回主菜单/大厅页面
## 用法

挂载在任意空物体上触发即可

## 注释

如果你希望读取一个名为TestMap的场景，在sceneName写上"TestMap.rfl"后触发，即可加载对应场景

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| Type | enum | 通过名称加载场景或直接返回主菜单&大厅页面 |  
| sceneName | string | 要跳转的场景名称 |  
