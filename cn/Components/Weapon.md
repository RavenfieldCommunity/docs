---
category: 
- 组件
- 武器
---
# Weapon
## 描述

## 用法

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| thirdPersonTransform | Transform |  第三人称显示的武器模型 |  
| thirdPersonOffset  | Vector3 | 第三人称显示的武器模型位置偏移量（矫正位置） |  
| cullInThirdPerson | GameObject[] | 第三人称不显示的游戏物体（Size=数量。先填写要隐藏的物体数量，再在Element*处拖入物体） |  
| thirdPersonScale  | float | 第三人称显示的武器模型缩放偏移量（矫正位置） |  
| reloadAudio | AudioSource | 装填音效 |  
| changeFireModeAudio | AudioSource |  切换开火模式的音效 |  
| reflectionSound  | enum.ReflectionSound |  回音效果（Auto=自动、None=无、Handgun=手枪、RifleSmall=小步枪、RifleLarge=大步枪、Launcher=炮、Tank=坦克） |  
| reflectionVolume  | float |  |  
| walkBobMultiplier  | float |  走路时晃动倍数 |  
| sprintBobMultiplier  | float |  跑步时晃动倍数 |  
| proneBobMultiplier  | float |  趴下时晃动倍数 |  
| uiSprite | Sprite | 武器图标 |  
| arms | SkinnedMeshRenderer | 武器动画的手臂模型（场景层级内的！） |  
| allowArmMeshReplacement  | bool |  是否允许实际游戏时玩家皮肤替换手部皮肤 |  
| parentWeapon | Weapon |  父武器 |  
| useParentWeaponSightModes | bool |  使用父武器的瞄准方式 |  
| ammo | int | 武器装载的弹药数 |  
| isLocked  | bool | 是否该锁定武器 |  
| auto  | bool | 是否为自动武器 |  
| spareAmmo  | int | 武器备用的弹药数 |  
| resupplyNumber  | int | 每次从补给箱补充的弹药数 |  
| reloadTime  | float |   装填所用时间 |  
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
| forceAutoReload  | bool |  强制自动换弹 |  
| loud  | bool |  是否声音大（吸引Bot） |  
| forceWorldAudioOutput  | bool |  强制场景音频输出 |  
| muzzles | Transform[] |  枪口（生成子弹projectiles的地方，Size=数量。先填写枪口数量，一般为1，再在Element*处拖入物体） |  
| optionalThirdPersonMuzzles | Transform[] | 可选的第三人称时的枪口 |  
| casingParticles | ParticleSystem[] | 抛壳口（Size=数量。先填写数量，一般为1，再在Element*处拖入物体） |  
| fireFromAllMuzzles  | bool | 开火时所有的枪口是否不受开火模式的影响，都会作用 |  
| projectilesPerShot  | int |  每次开火出多少子弹 |  
| projectilePrefab | GameObject |  子弹的预制件 |  
| scopeAimObject | GameObject | 瞄准时出现的物体（可选，类似狙击时画面外的一圈黑边，聚焦瞄准时的黑边物体。应在场景层级内，游戏时默认在此项设置的物体会禁用，玩家瞄准时会启用） |  
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
| followupSpreadProneMultiplier  | float | 趴下时后续增加的不精准度倍数 |  
| snapProneMultiplier  | float |  |  
| aiAllowedAimSpread  | float |  ai瞄准不精准度 |  
| aiAimSwing  | float | {机翻}Bot的瞄准摇摆 |  
| effInfantry  | enum.Effectiveness | 攻击是否对步兵作用(No, Yes, Preferred) | 
| effInfantryGroup  | enum.Effectiveness |  攻击是否对步兵群作用(No, Yes, Preferred) | 
| effUnarmored  | enum.Effectiveness |  攻击是否对无装甲的载具作用(No, Yes, Preferred) | 
| effArmored  | enum.Effectiveness |  攻击是否对装甲载具作用(No, Yes, Preferred) | 
| effAir  | enum.Effectiveness | 攻击是否对空中目标作用(No, Yes, Preferred) | 
| effAirFastMover  | enum.Effectiveness |  攻击是否对快速移动的空中目标作用(No, Yes, Preferred) | 
| effectiveRange  | float | 攻击有效范围 |  
| haltStrategy  | enum.HaltStrategy |  开火方案（建议不用改。Auto, Never, PreferredLongRange, PreferredAnyRange, AlwaysLongRange, Always) |  
| pose  | int |  第三人称握持武器的姿势(类：0=AK、1=手雷、2=SMAW) |  
| applyHeat  | bool | 是否有过热效果 |  
| heatMaterial | MaterialTarget |  过热效果的材质（参考Unity的文档） |  
| heatGainPerShot  | float | 每发使武器过热%多少） |  
| heatDrainRate  | float |  每秒使武器散热%多少 |  
| heatColor | Color |  过热效果的颜色 |  
| heatColorGain | AnimationCurve | 过热散热时颜色消失的曲线 |  
| overheatParticles | ParticleSystem |  过热出现的粒子 |  
| overheatSound | AudioSource |  过热音效 |  
| useChargeTime  | bool |  更改开火模式是否有切换时间 |  
| chargeTime  | float |  开火模式切换时间 |  
| chargeSound | AudioSource |  开火模式切换音效 |  
| dropAmmoWhenReloading  | bool | 换弹时丢弃弹药 |  
| maxRemainingAmmoAfterDrop  | int | 丢弃弹药后最大剩余弹药 |  
| useMaxAmmoPerReload  | bool | 允许的换弹（应该是弹药数） |  
| maxAmmoPerReload  | int |  |  
| advancedReload  | bool | 弹匣的最大弹药量（暂未深入了解） |  
| allowedReloads | int[] |  {机翻}允许重新装填（什么玩意...） |  
| sightModes | SightMode[] | 瞄准方式（Sizes=有多少种瞄准方式，overrideFov=铺满视角；fov=可视范围；name=名称，显示在实际游戏时的HUB中） |  