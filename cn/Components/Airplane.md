---
category: 
- 组件
- 载具
---
# Airplane
## 描述
从[Vehicle](./Vehicle.md)类派生

飞机类，建构飞机的基础
## 用法
参考[Vehicle](./Vehicle.md)

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
| autoPitchTorqueGain  | float | 自动俯仰转矩增益 |  
| perpendicularDrag  | float | 垂直阻力 |  
| pitchSensitivity  | float | 俯仰操作灵敏度 |  
| yawSensitivity  | float | 偏航操作灵敏度 |  
| rollSensitivity  | float | 翻滚操作灵敏度 |  
| liftGainTime  | float |  |  
| controlWhenBurning  | float | 飞机滚动的灵敏度 |  
| landingGearActivationObjects | GameObject[] | 起落架物体（收起起落架状态时隐藏） |  
| throttleEngineAudioPitchControl  | float |  |  
| flightAltitudeMultiplier  | float |  |  
