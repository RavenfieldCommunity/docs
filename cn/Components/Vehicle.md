---
category: 
- 组件
- 载具
---
# Vehicle

## 描述

载具的基础类，是建构一个载具的基础

## 用法

套用在载具物体的最顶层层级，附属物体下挂在这个物体里面

参考[RFCreator Project](/cn/Tutorials/README.md)

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| aiType | enum | ai认定的载具用途类型(Capture=占领据点, Roam=移动, Transport=运输) |
| armorRating | enum | 装甲强度（SmallArms=轻武器, HeavyArms=重武器, AntiTank=穿甲）|
| aiUseStrategy |enum |  ai认定的载具使用方案（Default, OnlyFromFrontlineSpawn, FromAnySpawn）|
| name | string | 载具名称 | 
| seats | List<[Seat](./Seat.md)> | 座位 |
| targetType | enum.Actor.TargetType | 目标类型（载具自身的类型。Infantry=步兵, InfantryGroup=步兵群, Unarmored=非装甲, Armored=装甲, Air=空中, AirFastMover=高速的空中目标）|
| armorDamagedBy | enum.ArmorRating | 载具可被哪种武器攻击（SmallArms=轻武器, HeavyArms=重武器, AntiTank=穿甲） | 
| smallArmsMultiplier | float | 轻武器伤害倍率 | 
| heavyArmsMultiplier | float | 重武器伤害倍率 |
| canBeRepairedAfterDeath | bool | 死亡后可修复 |
| maxHealth | float |  最大生命值 |
| crashDamageSpeedThrehshold | float |   撞击造成伤害的速度的阈值 |
| crashDamageMultiplier | float |   撞击伤害 |
| spotChanceMultiplier | float |   醒目程度倍率 |
| burnTime | float |  燃烧时间 |
| crashSkipsBurn | bool |  撞死跳过燃烧 |
| directJavelinPath | bool |  是否引导导弹锁定（不打勾就默认是在坐标原点吧好像） |
| canCapturePoints | bool |  可占领点位 |
| canFireAtOwnVehicle | bool |   可以伤害自身所在的载具 |
| targetLockPoint | Transform |   导弹锁定点（须先开启引导导弹锁定） |
| aiUseToDefendPoint | bool |  ai是否使用载具防御据点 |
| minCrewCount | int |   最低载员（适用于运输载具） |
| roamCompleteDistance | float |  |
| smokeParticles | ParticleSystem |  冒烟粒子 |
| fireParticles | ParticleSystem |  着火粒子 |
| fireAlarmSound | AudioSource |  火焰警报 |
| deathParticles | ParticleSystem |   死亡粒子 |
| deathSound | AudioSource |   死亡音效 |
| impactAudio | AudioSource |   撞击音效 |
| heavyDamageAudio | AudioSource |  冒烟时的音效 |
| blockSensor | Transform |  |
| blip | Texture |   小地图上的载具图标 |
| blipScale | float |   小地图上的载具图标的显示大小倍率 |
| avoidanceSize | Vector2 | 载具生成避让大小(AI在巡路系统中认为的体积大小) |
| pathingRadius | float | ai进入载具的距离 |
| ramSize | Vector3 |   撞击区域大小调整 |
| ramOffset | Vector3 |  撞击区域位置调整 |
| disableOnDeath | GameObject[] | 死亡时隐藏的物体 |
| activateOnDeath | GameObject[] | 死亡时显示（启用）的物体 |
| teamColorMaterials | MaterialTarget[] |  阵营颜色材质（需事先在Blender分配一个材质槽用于显示材质颜色） |
| hasCountermeasures | bool | 有无干扰弹 |
| countermeasuresActiveTime | float |   干扰持续时间 |
| countermeasuresCooldown | float |   干扰冷却时间 |
| countermeasureParticles | ParticleSystem |  干扰粒子 |
| countermeasureSpawnPrefab | GameObject |  干扰生成prefab |
| countermeasureAudio | AudioSource |   干扰音效 |
| controlAudio | bool |  控制音频（引擎音效） |
| powerGainSpeed | float |  音频响度提升速度（不太确定是不是） |
| pitchGainSpeed | float |  音频频率提升速度 |
| throttleGainSpeed | float |  载具油门提升速度 |
| throttleAudioSource | AudioSource |   |
| extraAudioSource | AudioSource |  |
| shiftForwardClip | AudioClip |   |
| shiftReverseClip | AudioClip |   |
| ignitionClip | AudioClip |  启动音效 |
| shiftForwardClip | AudioClip |  |  
| shiftReverseClip | AudioClip |  |  
| ignitionClip | AudioClip |  |  
