---
category: 
- 组件
- 载具
---
# ArcadeCar

## 描述
从[Vehicle](./Vehicle.md)类派生

带物理驾驶效果的载具
## 用法
参考[Vehicle](./Vehicle.md)

请自行添加Rigidbody组件，否则报错
## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| reverseTurnType | enum.ReverseTurnType | (`Reverse Speed`,`Reverse Throttle`,`Never`) |
| acceleration | float | 加速度 |
| reverseAcceleration | float | 倒车加速度 |
| accelerationTipAmount | float | 加速倾斜程度 |
| frictionTipAmount | float | 刹车倾斜程度 |
| topSpeed | float | 最高速度 |
| speedTurnTorque | float | 按速度变化的转向程度 |
| baseTurnTorque | float | 基础转向程度 |
| tankTurning | bool | 坦克转向（原地转向） |
| slideDrag | float | 侧向阻力 |
| brakeDrag | float | 刹车阻力 |
| driftByAcceleration | bool | 加速漂移（真没感觉有多明显） |
| brakeAccelerationTriggerSpeed | float | 刹车漂移最低触发速度 |
| driftByBrake | bool | 刹车漂移 |
| brakeDriftMinSpeed | float | 刹车漂移最低速度 |
| driftingSlip | float |  |
| driftDuration | float | 漂移持续时间 |
| isAmphibious | bool | 载具是两栖的 |
| extraStability | float | 额外稳定性（影响重心） |
| groundDrag | float | 地面阻力 |
| groundAngularDrag | float | 地面角阻力 |
| groundSteeringDrag | float | 地面转向阻力 |
| airDrag | float | 空气阻力 |
| airAngularDrag | float | 空气角阻力（作用于角速度？） |
| downforcePerSpeed | float | 按速度变化（是velocity，有方向性，不是speed）的向下力 |
| suspensionShiftSounds | [SoundBank](./SoundBank.md) | 悬挂音效（随机播放`clips`的一个AudioClip） |
| brakeSounds | [SoundBank](./SoundBank.md) | 刹车音效（随机播放`clips`的一个AudioClip） |
