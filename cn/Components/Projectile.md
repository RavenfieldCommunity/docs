---
category: 
- 组件
- 武器
---
# Projectile
## 描述

子弹Projectile的基本类，作为子弹

## 用法

挂载在子弹模型物体上，参考本站MOD武器教程，将其作为预制件

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| autoAssignArmorDamage  | bool | 是否自动分配装甲载具各个部位的的伤害 |  
| armorDamage  | [Vehicle](./Vehicle.md).ArmorRating | 伤害类型（`SmallArms`=轻武器、`HeavyArms`=重武器、`AntiTank`=反装甲武器） |  
| speed  | float | 速度（*m/s） |  
| impactForce  | float | {机翻}冲击力 |  
| lifetime  | float | 存在时间 |  
| damage  | float |  伤害 |  
| balanceDamage  | float | 冲击力（影响玩家平衡） |  
| impactDecalSize  | float |  {机翻}冲击面积 |  
| passThroughPenetrateLayer  | bool | {机翻}通过穿透层 |  
| piercing  | bool |  是否有穿透力 |  
| makesFlybySound  | bool |  飞过时制造声音 |  
| flybyPitch  | float |  飞行距离 |  
| dropoffEnd  | float | 最大距离 |  
| gravityMultiplier  | float |  重力效应 |  
| damageDropOff | AnimationCurve |  {机翻}伤害曲线 |  
| inheritVelocity  | bool |  {机翻}继承速度 |  
