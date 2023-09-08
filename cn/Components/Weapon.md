---
category: 
- 组件
- 武器
---
# Weapon
## 描述

武器的基础类，是建构一个武器的基础

## 用法

套用在武器物体的最顶层层级，附属物体下挂在这个物体里面

参考[RFCreator Project](/cn/Tutorials/wpn.1.md)

## 注释

此组件使用了一个Audio Source组件作为依赖项，请将开火音效置于此组件（如果是自动武器请勾选Audio Source的Loop，注意不要勾选Play on Awake！）

此外请避免装载有Weapon组件的物体上并排存在多个Audio Source组件，这会导致音效冲突+游戏报错

解决方法是武器内新建空物体再另外挂载一个Audio Source

此组件对应的可用动画机Parameters：
| 原名 | 类型 | 描述 |
|------|------|------|
| loaded ammo | int | 已装载的弹药数 |
| unholster | trigger | 切换到武器时为True |
| tuck | bool | 冲刺时为True |
| muzzle | int | 等于目前玩家所处的枪口序号（默认0开始） |
| alt weapons | int | 等于目前玩家所处的副武器序号（0=处于主武器，默认1开始） |
| charging | 处于充能状态时为True |  |
| overheat | bool | 过热时为True |
| sight mode | int | 等于目前玩家所处的瞄准模式（默认0开始） |
| smooth sight mode | float | 等于目前玩家所处的瞄准模式（与sight mode等同，适用于BlenderTree） |
| fire | trigger | 开火时为True |
| aim | bool | 瞄准时为True，其余状态为False |
| reload | trigger | 装填时为True |
| reloading | bool | 装填时为True |
| reload motion | int | 等于本次装载行为需要装多少弹？ |
| no ammo | bool | 疑似无弹药时为True（疑似是以备用弹药判定） |
| no ammo blend |  |  |
| kick | trigger | 踢人时为True |
| call | trigger | 召集队员时为True |
| direct | trigger | 指挥队员时为True |

对于此组件的子组件，部分选项是不可用的，请按照逻辑判断

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| displayName | string | 武器在实际UI显示的名称 |  
| thirdPersonTransform | Transform |  第三人称显示的武器模型（包括手臂） |  
| thirdPersonOffset  | Vector3 | 第三人称显示的武器模型位置偏移量（矫正位置） |  
| cullInThirdPerson | GameObject[] | 第三人称不显示的游戏物体（Size=数量。先填写要隐藏的物体数量，再在Element*处拖入物体） |  
| thirdPersonScale  | float | 第三人称显示的武器模型缩放偏移量（矫正位置） |  
| keepScriptsOnThirdPersonImposter  | bool |  | 
| reloadAudio | AudioSource | 装填音效(开启advanceRaload时忽略此项，此AudioSource建议放置于武器内的空物体上，参阅[RFCreator Project](/cn/Tutorials/README.md)) |  
| changeFireModeAudio | AudioSource | 切换开火模式的音效 |  
| reflectionSound  | enum.ReflectionSound | 回音效果（Auto=自动、None=无、Handgun=手枪、RifleSmall=小步枪、RifleLarge=大步枪、Launcher=炮、Tank=坦克） |  
| keepScriptsOnThirdPersonImposter  | bool |  |  
| reflectionVolume  | float | 回音效果大小 |  
| walkBobMultiplier  | float | 走路时晃动倍数 |  
| sprintBobMultiplier  | float | 跑步时晃动倍数 |  
| proneBobMultiplier  | float | 趴下时晃动倍数 |  
| uiSprite | Sprite | 武器图标 |  
| arms | SkinnedMeshRenderer | 武器动画的手臂模型（场景层级内的！包含骨骼，默认名为“Hands“） |  
| allowArmMeshReplacement  | bool |  是否允许实际游戏时玩家皮肤替换手部皮肤 |  
| parentWeapon | [Weapon](./Weapon.md) | 父武器（有子武器时可用，子武器就是Weapon物体里再套一个Weapon） |  
| useParentWeaponSightModes | bool | 使用父武器的sightModes |  
| ammo | int | 武器装载的弹药数（如武器无此弹药逻辑则设为-1） |  
| isLocked  | bool | 是否该锁定武器 |  
| auto  | bool | 是否为自动武器（影响开火是否为连发还是单发，影响开火音效是即时停止还是直接播放完音效） |  
| spareAmmo  | int | 武器备用的弹药数（如武器无此弹药逻辑则设为-1 |  
| resupplyNumber  | int | 每次从补给箱补充的弹药数 |  
| reloadTime  | float | 装填所需时间（启用advanceReload时不可用） |  
| cooldown  | float | 开火时连续两发子弹的间隔（开火速度，值越小越快） |  
| unholsterTime  | float | 切换到武器时所用时间 |  
| unholsterIsReload  | bool |  切换到武器的行为是否可以替代装填 |  
| changeFireModeTime  | float |  更改开火模式时所用时间 |  
| changeFireModeIsReload  | bool |  更改开火模式的行为是否可以替代装填 |  
| aimFov  | float |  瞄准时的视角FoV |  
| forceSniperAimSensitivity  | bool |  瞄准时鼠标操作视角的灵敏度 |  
| aimSensitivityMultiplier  | float |  瞄准灵敏度倍数 |  
| autoReloadDelay  | float | 自动装填的延迟 |  
| canBeAimedWhileReloading  | bool |  装填时是否可以瞄准 |  
| forceAutoReload  | bool |  强制自动换弹（如投掷类武器） |  
| loud  | bool |  是否声音大（吸引Bot） |  
| forceWorldAudioOutput  | bool |  强制场景音频输出 |  
| muzzles | Transform[] |  枪口（或近战武器攻击点，掷弹点。生成子弹projectiles的地方，Size=数量。先填写枪口数量，一般为1，再在Element*处拖入物体。**muzzlesz中指定的物体及此物体的子层级的Particle System组件在在开火时会触发**） |  
| optionalThirdPersonMuzzles | Transform[] | 可选的第三人称时的枪口 |  
| casingParticles | ParticleSystem[] | 抛壳口（Size=数量。先填写数量，一般为1，再在Element*处拖入物体，抛壳次序与muzzles次序保持一致） |  
| fireFromAllMuzzles  | bool | 开火时所有的枪口是否不受开火模式的影响，都会作用 |  
| projectilesPerShot  | int |  每次开火出多少子弹 |  
| projectilePrefab | GameObject |  子弹的预制件 |  
| scopeAimObject | GameObject | 瞄准时出现的物体（可选，类似狙击时画面外的一圈黑边，聚焦瞄准时的黑边物体。应在场景层级内，机制为游戏时默认在此项设置的物体会禁用，玩家瞄准时会启用） |  
| kickback  | float |  后坐力 |  
| randomKick  | float |  随机附加后坐的最大值 |  
| spread  | float |  散布效果 |  
| followupSpreadGain  | float |  连发时的散布效果 |  
| followupMaxSpreadHip  | float |  （未瞄准时）连发时的散布效果的最大值 |  
| followupMaxSpreadAim  | float |  （瞄准时）连发时的散布效果的最大值 |  
| followupSpreadStayTime  | float | 连发时的散布效果的持续时间 |  
| followupSpreadDissipateTime  | float | 连发时的散布效果的消散时间  |  
| snapMagnitude  | float | 开火时武器的上抬幅度 |  
| snapDuration  | float | 开火时武器上抬的持续时间 |  
| snapFrequency  | float | 开火时武器上抬频率 |  
| kickbackProneMultiplier  | float | 趴下时后座倍数 |  
| spreadProneMultiplier  | float | 不精准度倍数 |  
| followupSpreadProneMultiplier  | float | 趴下时后续增加的不精准度倍数 |  | snapProneMultiplier  | float |  |  
| aiAllowedAimSpread  | float |  Bot瞄准不精准度（数值越高，Bot就越容易开火，即使未瞄准） |  
| aiAimSwing  | float | Bot的攻击时的瞄准误差 |  
| effInfantry  | enum.Effectiveness | 攻击是否对步兵作用(No, Yes, Preferred) | 
| effInfantryGroup  | enum.Effectiveness |  攻击是否对步兵群作用(No, Yes, Preferred) | 
| effUnarmored  | enum.Effectiveness |  攻击是否对无装甲的载具作用(No, Yes, Preferred) | 
| effArmored  | enum.Effectiveness |  攻击是否对装甲载具作用(No, Yes, Preferred) | 
| effAir  | enum.Effectiveness | 攻击是否对空中目标作用(No, Yes, Preferred) | 
| effAirFastMover  | enum.Effectiveness |  攻击是否对快速移动的空中目标作用(No, Yes, Preferred) | 
| effectiveRange  | float | 攻击有效范围 |  
| diffInfantry  | enum.Difficulty | Bot使用此武器攻击步兵的难度(Auto=自动调整,Easy=轻松,Challenging=还行,Hard=困难,Impossible=不可能。**游戏中Bot自动分为Beginner、Normal、Veteran、Elite四个等级，各个级别的实力可从名字体现，武器的攻击难度对于不同级别的Bot是不同的，会削减或增强**) |  
| diffInfantryGroup  | enum.Difficulty | Bot使用此武器攻击步兵群的难度(Auto=自动调整,Easy=轻松,Challenging=还行,Hard=困难,Impossible=不可能) |  
| diffGroundVehicles  | enum.Difficulty | Bot使用此武器攻击载具的难度(Auto=自动调整,Easy=轻松,Challenging=还行,Hard=困难,Impossible=不可能) |  
| diffAir  | enum.Difficulty | Bot使用此武器攻击空中目标的难度(Auto=自动调整,Easy=轻松,Challenging=还行,Hard=困难,Impossible=不可能) |  
| diffAirFastMover  | enum.Difficulty | Bot使用此武器攻击快速移动的空中目标的难度(Auto=自动调整,Easy=轻松,Challenging=还行,Hard=困难,Impossible=不可能) |  
| haltStrategy  | enum.HaltStrategy |  Bot移动时的开火策略（建议不改。Auto=自动调整, Never=移动时始终开火, PreferredLongRange=远距离优先停止移动再开火但近距离依旧开火, PreferredAnyRange=允许边移动边开火跑打但优先停移, AlwaysLongRange=远距离才始终停移但近距离依旧开火, Always=开火时始终停移) |  
| pose  | int |  第三人称握持武器的姿势(例子：0=AK、1=手雷、2=SMAW) |  
| applyHeat  | bool | 是否有过热效果 |  
| heatMaterial | MaterialTarget |  过热效果的材质（参考Unity的文档与Prefab,需要自发光材质） |  
| heatGainPerShot  | float | 每发使武器过热%多少） |  
| heatDrainRate  | float |  每秒使武器散热%多少 |  
| heatColor | Color |  过热效果的颜色 |  
| heatColorGain | AnimationCurve | 过热散热时颜色消失的曲线 |  
| overheatParticles | ParticleSystem |  过热出现的粒子 |  
| overheatSound | AudioSource |  过热音效 |  
| useChargeTime  | bool | 武器是否需要充能（蓄力）  |  
| chargeTime  | float |  武器充能时间  |  
| chargeSound | AudioSource |  武器充能音效 |  
| dropAmmoWhenReloading  | bool | 换弹时丢弃剩余弹药 |  
| maxRemainingAmmoAfterDrop  | int | 丢弃弹药后最大剩余弹药 |  
| useMaxAmmoPerReload  | bool | 限制每次换弹的最大装填数 |  
| maxAmmoPerReload  | int | 每次换弹的最大装填数（与useMaxAmmoPerReload联动） |  
| advancedReload  | bool | 是否启用高级装填（用于单\多发装填武器,需要在AnimationEvent手动调用ReloadDone才能结束装填） |  
| allowedReloads | int[] |  {机翻}允许重新装填（什么玩意...） |  
| sightModes | SightMode[] | 瞄准方式（Sizes=有多少种瞄准方式；overrideFov=铺满视角；fov=可视范围；name=名称，显示在实际游戏时的HUB中） |  