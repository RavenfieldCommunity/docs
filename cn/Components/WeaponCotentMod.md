---
category: 
- 组件
- 武器
---
# WeaponCotentMod
## 描述

武器导出配置组件，只有给载具预制件(包含[Weapon](./Weapon.md)或由其派生的组件)应用这个组件才能被Unity导出与被游戏导入

## 用法

将其套用在一个空物体预制件或武器本身配置即可

配置各个武器时先在Sizes设置本次导出的武器数量

然后就可选中在工具栏里导出MOD了

## 注释

游戏默认TAG标签的自动分配机制：
| TAG | 译名 | 机制 |
|------|------|------|
| CLOSE QUARTERS | 近战武器 | slot=Primary, 武器的projectilesPerShot>1 |
| ASSAULT | 突击性武器 | slot=Primary, 武器的auto=true|
| MARKSMAN | 远程武器 | slot=Primary且不符合CLOSE QUARTERS与ASSAULT的后一个判定 |
| EQUIPMENT | 装备 | slot=Gear或LargeGear，武器的projectilesPerShot=null或都不符合GRENADES与ANTI ARMOR的后一个判定  |
| GRENADES | 手榴弹 | slot=Gear或LargeGear，武器的projectiles是[GrenadeProjectile](./GrenadeProjectile.md) |
| ANTI ARMOR | 反装甲武器 | slot=Gear或LargeGear，武器的projectiles是[ExplodingProjectile](./ExplodingProjectile.md)或其派生类 |
| UNTAGGED | 未分类 | 均不符合以上判定 |

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| name  | string | 武器名（意义不等于武器的displayName） |  
| prefab | GameObject | 武器的Prefab |  
| slot | enum.WeaponSlot | 武器槽位类型(Primary=主武器, Secondary父武器, Gear一小格装备, LargeGear=两格装备) |  
| usableByAi  | bool | 此武器Bot可用 |  
| usableByAiAllowOverride  | bool | 此武器Bot可用（优先） |  
| type | enum.LoadoutType | 武器类型(Normal=普通, Stealth=消声类, AntiArmor=反装甲, Repair=载具修理工具, ResupplyAmmo=弹药补给包, ResupplyHealth=健康补给包) |  
| sortPriority | int |  |  
| tags | string[] | 标签（Size=数量。先填写标签数量，再输入文本。会覆盖游戏默认分配的TAG） |  