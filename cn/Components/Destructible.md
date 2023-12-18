---
category: 
- 组件
- 地图
---
# Destructible
## 描述

该组件可以受到来自射弹命中、射弹溅射、近战武器、撞击的伤害，一般用在地图中的一些可摧毁的物体上

## 用法

将其挂载在带有碰撞体的目标物体上

## 注释

如果你想给载具加上可被摧毁的物体，请使用 [VehicleDestructibleHitbox](./VehicleDestructibleHitbox.md)

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| smallArmsMultiplier  | float | 轻武器造成的伤害乘数 |  
| heavyArmsMultiplier  | float | 重武器造成的伤害乘数 |  
| antiTankMultiplier  | float | 反坦克武器造成的伤害乘数 |  
| armorDamagedBy  | Vehicle.ArmorRating | 可以受到最低来自指定武器类型的伤害 |  
| canInstantShatter  | bool | 如果勾选了该选项，并且受到的伤害类型大于或等于设定的armorInstantShatteredBy类型，则会直接消亡 |  
| armorInstantShatteredBy  | Vehicle.ArmorRating | 被伤害直接消亡所需的最低伤害类型 |  
| activateOnDeath | GameObject[] | 消亡后激活的游戏物体 |  
| disableOnDeath | GameObject[] | 消亡后隐藏的游戏物体 |  
| showHitIndicator  | bool | 是否显示命中反馈 |  
| takeSplashDamage  | bool | 允许受到溅射伤害 |  
| takesMeleeDamage  | bool | 允许受到近战伤害 |  
| takesCollisionDamage  | bool | 允许受到撞击的伤害 |  
| collisionDamageMultiplier  | float | 撞击造成的伤害乘数 |  
| health  | float | 生命值 |  
