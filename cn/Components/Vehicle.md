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

如果一并添加了Audio Source组件（与Vehicle组件并列），该组件将作为载具的运行音效（记得勾选Audio Source的`Loop`）

参考[RFCreator Project](/cn/Tutorials/README.md)

## 注释

可用动画机的Parameters：
| Parameters名 | 类型 | 描述 |
|------|------|------|
| velocity x | float | 载具x轴方向的速度 |
| velocity y | float | 载具y轴方向的速度 |
| velocity z | float | 载具z轴方向的速度 |
| input x | float | x轴方向操作的axis虚拟轴 |
| input y | float | y轴方向操作的axis虚拟轴 |
| input z | float | z轴方向操作的axis虚拟轴 |
| input w| float |  |

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| aiType | enum | ai认定的载具用途类型(`Capture`=占领据点, `Roam`=移动, `Transport`=运输) |
| armorRating | enum | 装甲强度（`SmallArms`=轻武器, `HeavyArms`=重武器, `AntiTank`=穿甲）|
| aiUseStrategy |enum |  ai认定的载具使用方案（`Default`, `OnlyFromFrontlineSpawn`, `FromAnySpawn`）|
| name | string | 载具名称 | 
| seats | List<[Seat](./Seat.md)> | 座位(第一个座位将设置为驾驶位) |
| targetType | enum.Actor.TargetType | 目标类型（载具自身的类型。`Infantry`=单步兵运输, `InfantryGroup`=步兵群运输, `Unarmored`=非装甲, `Armored`=装甲, `Air`=空中（即直升机）, `AirFastMover`=高速的空中目标（即飞机））|
| armorDamagedBy | enum.ArmorRating | 载具可被哪种武器攻击（SmallArms=轻武器, HeavyArms=重武器, AntiTank=穿甲） | 
| smallArmsMultiplier | float | 轻武器伤害倍率 | 
| heavyArmsMultiplier | float | 重武器伤害倍率 |
| canBeRepairedAfterDeath | bool | 死亡后可修复 |
| maxHealth | float |  最大生命值 |
| crashDamageSpeedThrehshold | float |   撞击造成伤害的速度的阈值 |
| crashDamageMultiplier | float |   撞击伤害 |
| spotChanceMultiplier | float |   醒目程度倍率 (该值越高，则敌军AI越容易透过地图雾气发现你) |
| burnTime | float |  燃烧时间 |
| crashSkipsBurn | bool |  撞死跳过燃烧 |
| directJavelinPath | bool |  是否引导导弹锁定（不打勾就默认是在坐标原点吧好像） |
| canCapturePoints | bool |  载具是否可用来占领点位 |
| canFireAtOwnVehicle | bool |   载具可以伤害自身 |
| targetLockPoint | Transform |   导弹锁定点（须先开启引导导弹锁定） |
| aiUseToDefendPoint | bool |  ai是否使用载具防御据点 |
| minCrewCount | int |   最低载员（适用于运输载具） |
| roamCompleteDistance | float |  巡游结束距离(如果驾驶该载具的小队队长当前位置和最后前往的位置小于该值，则会巡游至新目标位置)  |
| smokeParticles | ParticleSystem |  冒烟粒子 |
| fireParticles | ParticleSystem |  着火粒子 |
| fireAlarmSound | AudioSource |  火焰警报 |
| deathParticles | ParticleSystem |   死亡粒子 |
| deathSound | AudioSource |   死亡音效 |
| impactAudio | AudioSource |   撞击音效 |
| heavyDamageAudio | AudioSource |  冒烟时的音效 |
| blockSensor | Transform |  阻挡检测物体(一个简单的方块，并关闭其Mesh Render即可。如果有友军在检测器的范围内，车辆的驾驶员会尝试刹车，直到检测器内没有任何友军后才会继续行驶，但对直升机和飞机无效。疑似废弃，原版载具没有配置此项)  |
| blip | Texture |   小地图上的载具图标 |
| blipScale | float |   小地图上的载具图标的显示大小倍率 |
| avoidanceSize | Vector2 | 载具生成避让大小(AI在巡路系统中认为的体积大小) |
| pathingRadius | float | AI进入载具的范围(该值越大，则AI就能从更远的地方直接进入该载具)  |
| ramSize | Vector3 |   撞击区域大小调整 |
| ramOffset | Vector3 |  撞击区域位置调整 |
| disableOnDeath | GameObject[] | 死亡时隐藏的物体 |
| activateOnDeath | GameObject[] | 死亡时显示（启用）的物体 |
| teamColorMaterials | MaterialTarget[] |  阵营颜色材质（需事先在Blender分配一个材质槽用于显示材质颜色） |
| hasCountermeasures | bool | 有无干扰弹 |
| countermeasuresActiveTime | float |   干扰效果持续时间 |
| countermeasuresCooldown | float |   干扰弹冷却时间 |
| countermeasureParticles | ParticleSystem |  干扰弹发射时的粒子 |
| countermeasureSpawnPrefab | GameObject |  发射干扰弹时同时生成的Prefab |
| countermeasureAudio | AudioSource |   干扰弹音效 |
| controlAudio | bool |  控制音频（引擎音效） |
| powerGainSpeed | float |  音频响度提升速度（不太确定是不是） |
| pitchGainSpeed | float |  音频频率提升速度 |
| throttleGainSpeed | float |  载具油门提升速度 |
| throttleAudioSource | AudioSource |  随着油门的变化调整播放的音量和音高 |
| extraAudioSource | AudioSource |  换挡音效和启动音效的载体(shiftForwardClip、shiftReverseClip、ignitionClip必须要拥有此载体才可播放对应的音效) |
| shiftForwardClip | AudioClip |  载具前进时会播放此换前进挡音效 |
| shiftReverseClip | AudioClip |  载具倒车时会播放此换倒车挡音效 |
| ignitionClip | AudioClip |  载具启动的音效 |
