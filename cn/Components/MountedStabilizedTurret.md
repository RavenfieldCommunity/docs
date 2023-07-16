---
category: 
- 组件
- 载具
---
# MountedStabilizedTurret

## 描述
从[MountedWeapon](./MountedWeapon.md)类派生

固定炮塔武器

## 用法

参考[MountedWeapon](./MountedWeapon.md)以及RFTools的Prefab

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| bearingTransform | Transform | 偏航轴 |
| pitchTransform | Transform | 俯仰轴 |
| sensitivityX | float | 偏航灵敏度 |
| sensitivityY | float | 俯仰灵敏度 |
| clampX | Clamp | 偏航角限制（enabled=是否启用，min=最小，max=最大） |
| clampY | Clamp | 俯仰角限制（enabled=是否启用，min=最小，max=最大） |
| clampNotch | ClampYNotch[]  | 角度限制点位（一般用于炮塔四周高度不一致的情况）点位可以想象成一个梯形，有上底，下底和高(，参考[Unity文档](https://docs.unity.cn/cn/2020.3/ScriptReference/Mathf.Clamp.html)) |
| useMaxTurnSpeed | bool | 使用最大旋转速度 |
| maxTurnSpeed | float | 最大旋转速度 |
| useSpring | bool  | 使用弹簧（这玩意几乎没人用，我也搞不清楚咋弄） |
| springAmount | float |  |
| springForce | float  |  |
| springDrag |  float|  |
| type | enum.Type | 类型（clampnotch)  |
| bearingAngle | float | 偏航角（clampnotch) |
| notchWidth | float | 点位上底宽度 |
| notchSlopeWidth | float | 点位下底宽度 |
| notchHeight |  float | 点位高度 |
