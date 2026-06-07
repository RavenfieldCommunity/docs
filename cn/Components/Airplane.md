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
| liftVsAngleOfAttack | AnimationCurve | 升力/迎角曲线，y轴为升力的multiplier |  
| controlVsAngleOfAttack | AnimationCurve | 控制（机鼻指向）/迎角曲线 |  
| thruster | Transform | 推进器(空物体，作为飞机动力中心) |  
| baseLift  | float | 基础升力 |  
| acceleration  | float | 加速度（在rf中实际意义是最大速度，无单位） |  
| accelerationThrottleUp  | float | 正油门加速度（在rf中实际意义是按w时的最大速度，无单位） |  
| accelerationThrottleDown  | float | 负油门加速度（在rf中实际意义是按s时的倒车最大速度，无单位） |  
| autoPitchTorqueGain  | float | 自动俯仰转矩增益（目前不知道是干嘛的） |  
| perpendicularDrag  | float | 垂直阻力 |  
| pitchSensitivity  | float | 俯仰操作灵敏度 |  
| yawSensitivity  | float | 偏航操作灵敏度 |  
| rollSensitivity  | float | 翻滚操作灵敏度 |  
| liftGainTime  | float | 获得升力需要的时间（可以看作升力效果的缓冲器） |  
| controlWhenBurning  | float | 飞机滚动的灵敏度 |  
| landingGearActivationObjects | GameObject[] | 起落架物体（收起起落架状态时隐藏） |  
| throttleEngineAudioPitchControl  | float | 引擎（`engine`那项）音效受油门控制的音高程度 |  
| flightAltitudeMultiplier  | float | bot的最大飞行高度倍率 |  
