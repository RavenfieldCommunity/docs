---
category: 
- 组件
- 载具
---
# Plane

## 描述
从[Vehicle](./Vehicle.md)类派生

飞机类，建构飞机的基础

已弃用，使用[Airplane](./Airplane.md)替代
## 用法

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| liftVsAngleOfAttack | AnimationCurve | 升力与迎角 |  
| controlVsAngleOfAttack | AnimationCurve |  |  
| thruster | Transform | 推进器(空物体，作为飞机动力中心) |  
| baseLift  | float | 升力 |  
| acceleration  | float | 加速度 |  
| accelerationThrottleUp  | float | 油门加速度 |  
| accelerationThrottleDown  | float |  |  
| throttleEngineAudioPitchControl | float |  |
| autoPitchTorqueGain  | float | 自动俯仰转矩增益 |  
| perpendicularDrag  | float | 垂直阻力 |  
| pitchSensitivity  | float | 俯仰操作灵敏度 |  
| yawSensitivity  | float | 偏航操作灵敏度 |  
| rollSensitivity  | float |  |  
| liftGainTime  | float |  |  
| controlWhenBurning  | float | 飞机滚动的灵敏度 |  
| landingGearActivationObjects | GameObject[] | 起落架物体 |  
| flightAltitudeMultiplier | float |  |
