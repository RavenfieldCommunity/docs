# Boat

## 描述
从[Vehicle](./Vehicle.md)类派生

船只类，建构船只的基础
## 用法
参考[Vehicle](./Vehicle.md)
## 注释

## 变量

| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| floatAcceleration | float | 上浮加速度 |
| floatDepth | float | 上浮起始作用的深度 |
| speed | float | 速度 |
| reverseMultiplier | float | 倒车速度倍率 |
| turnSpeed | float | 转向速度 |
| stability | float | 稳定性（应该是影响的重心） |
| floatingSamplers | Transform[] | 上浮采样器 |
| requireDeepWater | bool | 需要深水（未知作用，可能是会导致大船无法在潜水生成或者影响ai行为，还未测试） |
