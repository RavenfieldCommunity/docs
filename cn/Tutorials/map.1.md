---
category: 
- 教程
---
# 教程 map.1 地图
## 前言
在此文档中，我们将为您呈现制作一个地图的大致过程，与Trigger的使用指南


## 0.0 构思
我们同样需要想一下怎么做我们的地图

首先确定地图大小，小的如[Free Hold](https://steamcommunity.com/sharedfiles/filedetails/?id=1861292254)，小空间，动线（活动路径）灵活，速战速决，大的如（不知道？），地图大，文件大小也大，加载时间也长，适合好友约好联机，跑图

然后是地图活动路线，小地图务必确保多路线与路线灵活性，免得被围殴

然后是地图物体、障碍布置，包含建筑物、掩体、景观（树、草、生活中的物品）

然后，开工！

## 1.0 制作所需资源

一般来说，地图仅包含的模型

细节上，另有音效、以及[粒子效果](https://docs.unity.cn/cn/2020.3/Manual/ParticleSystems.html)（用于模拟烟雾、火焰）

大地图可能需要在这里着重下笔，这是保证游玩体验的一个关键

制作过程不再赘述

## 2.0 导入Unity
创建一个Unity场景

如果你需要使用地形，请自行创建一个地形Terrain物体并使用Terrain工具做好你的地形。如果直接使用模型可以忽略这步

然后将你的模型放在地图上布置好

## 2.1 配置必需项与组件

首先将`RFTools\Prefabs\Map Elements\Must Haves`内的Prefab全部添加到地图（`Pathfinding`内的稍后解释），这些东西是CP据点旗帜，Minimap[小地图摄像机](/cn/Components/MinimapCamera.md)，NM管理器（[Neighbor Manager](/cn/Components/SpawnPointNeighborManager.md)），RP[反射探针](/cn/Components/ReflectionProber.md)`，SC[背景场景相机](/cn/Components/SceneryCamera.md)，TD[世界属性](/cn/Components/TimeOfDay.md)，WP[海平面](/cn/Components/WaterPlane.md)（当然地图不需要海平面可以不加），这些是地图必需包含的东西

这些东西的用法参见它们所属的组件文档

除据点旗帜需要复制粘贴与配置较多的选项、NM管理器的连线外，其他大部分的物体按文档移动好它们的位置即可

对于一些自定义模型，若要实现特定功能，按[文档](/cn/Components/README.md#地图)说明，添加组件即可

## 2.2 寻路Pathfinding配置

不像游戏的Map Editor，在Unity你需要自行配置Pathfinding Box寻路盒

参考[PathfindingBox](/cn/Components/PathfindingBox.md)

其他的Pathfinding工具参见[组件文档](/cn/Components/README.md#地图)

## 2.3 地图特性索引

这里用于索引地图中的可实现的一些特殊功能

### 2.3.1 Trigger系统

即触发器系统，可以依照让玩家以一定的条件与事件，来触发一定的行为，仅可用于RFTools，不支持旧版的RavenfieldToolPack

每个触发器组件左上角有一个`?`按钮，点击可查看官方文档，此处的中文文档也会抽时间更新

首先，你需要分清，Trigger组件分为"触发器"组件与"动作器"组件（官方没有注明）

触发器组件用于“接受刺激”,即接受到一定的条件或发生的事件，就将信息传导到动作器组件，告诉动作器组件去执行它（这个“它”指动作器组件）的操作

触发器组件的标志是组件名包含"TriggerOn"，或由[TriggerBaseComponent](/cn/Components/TriggerBaseComponent.md)派生，或组件选项中包含"`Sender`"字段（这个字段是用来放动作器组件的）

动作器组件用于接受触发器组件的信息，执行玩家在动作器组件上定义的操作，例如结束游戏，跳转场景

动作器组件的标志与触发器组件的标志的相反，由[TriggerReceiver](/cn/Components/TriggerReceiver.md)派生

如果你的触发器与动作器组合无法正常执行，请你检查是否漏掉了某些选项没有配置

## 3.0 测试&导出

参考[RFTools杂项](/cn/Tutorials/otr.1.md)，确保已经打开要测试/导出的地图，点击菜单的`*** Map or Content Mod`即可


