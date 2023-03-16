| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| bearingTransform | Transform | 偏航轴 |
| pitchTransform | Transform | 俯仰轴 |
| sensitivityX | float | 偏航灵敏度 |
| sensitivityY | float | 俯仰灵敏度 |
| clampX | Clamp | 偏航角限制 |
| clampY | Clamp | 俯仰角限制 |
| clampNotch | ClampYNotch[]  | 角度限制点位（一般用于炮塔四周高度不一致的情况）点位可以想象成一个梯形，有上底，下底和高 |
| useMaxTurnSpeed | bool | 使用最大旋转速度 |
| maxTurnSpeed | float | 最大旋转速度 |
| useSpring | bool  | 使用弹簧（这玩意几乎没人用，我也搞不清楚咋弄） |
| springAmount | float | 未知 |
| springForce | float  | 未知 |
| springDrag |  float| 未知 |
|  |  |  |
| enabled | bool | 估计是上面（clampnotch) 里面的，不重要，在unity里你应该搞得清楚是怎么回事 |
| min | float | 最小（clampnotch)  |
| max | float | 最大（clampnotch)  |
|  |  |  |
| AffectMin | ? | 影响最小(clampnotch) |
| AffectMax | ? | 影响最大（clampnotch) |
| Type | Type | 类型（clampnotch)  |
| bearingAngle | float | 偏航角（clampnotch) |
| notchWidth | float | 点位上底宽度 |
| notchSlopeWidth | float | 点位下底宽度 |
| notchHeight |  float | 点位高度 |
