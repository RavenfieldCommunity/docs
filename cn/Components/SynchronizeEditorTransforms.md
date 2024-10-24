---
category: 
- 组件
- Misc
---
# SynchronizeEditorTransforms
## 描述

当Unity Editor打开的场景与游戏运行的测试地图一样时，同步挂载该组件的物体的位置与旋转到Editor内（一次只能同步一个）


## 用法

场景内挂载到目标物体

运行游戏地图测试（`RFTools/Test Map or Content Mod`）来在游戏内打开当前场景，同时在Editor内进入播放模式，单击`Q`键即可与游戏建立连接

可以配合Unity的Recorder工具（需自行启用）来录制动画


## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| port | int | 本地监听端口 |
| sendRateHz | byte | 每秒同步频率 |

