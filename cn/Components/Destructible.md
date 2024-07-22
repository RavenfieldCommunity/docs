---
category: 
- 组件
- 地图
---
# Destructible
## 描述

可破坏物体

该组件可以给被添加的物体具有健康值属性，可受到来自射弹命中、射弹溅射、近战武器、撞击的伤害，一般用在地图中的一些可摧毁的物体上

破坏的效果可以通过`disableOnDeath`、`activateOnDeath`实现

## 用法

将其挂载在带有碰撞体的目标物体上

你可以把`disableOnDeath`、`activateOnDeath`的物体作为子物体放在主物体内

## 注释

如果你想给载具加上可被摧毁的物体，请使用 [VehicleDestructibleHitbox](./VehicleDestructibleHitbox.md)

如果`activateOnDeath`的物体具有Rigidbody组件且组件的`isKinematic`选项为false，则激活该物体时会对这个物体AddTorque，即施加一个旋转力，并使该物体不属于任何一个父物体

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| smallArmsMultiplier  | float | 轻武器造成的伤害乘数 |  
| heavyArmsMultiplier  | float | 重武器造成的伤害乘数 |  
| antiTankMultiplier  | float | 反坦克武器造成的伤害乘数 |  
| armorDamagedBy  | Vehicle.ArmorRating | 可以受到最低来自指定武器类型的伤害 |  
| canInstantShatter  | bool | 如果受到的伤害类型大于或等于设定的`armorInstantShatteredBy`值，直接消亡（死亡） |  
| armorInstantShatteredBy  | Vehicle.ArmorRating | 被伤害直接消亡所需的最低伤害类型 |  
| activateOnDeath | GameObject[] | 消亡（死亡）后激活的游戏物体 |  
| disableOnDeath | GameObject[] | 消亡（死亡）后隐藏（禁用）的游戏物体 |  
| showHitIndicator  | bool | 是否显示命中反馈 |  
| takeSplashDamage  | bool | 允许受到溅射伤害 |  
| takesMeleeDamage  | bool | 允许受到近战伤害 |  
| takesCollisionDamage  | bool | 允许受到撞击的伤害 |  
| collisionDamageMultiplier  | float | 撞击造成的伤害乘数 |  
| health  | float | 生命值（健康） |  
