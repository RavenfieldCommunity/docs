---
category: 
- 组件
---

# 组件索引
::: warning
此组件文档由于相当一部分组件仅通过检查源码进行编写，所以可能与现实存在偏差，敬请在网站评论区或[此项目的Steam指南原链接](https://steamcommunity.com/sharedfiles/filedetails/?id=2902809158)评论区提出此错误！

另外请注意“[派生类](https://www.runoob.com/csharp/csharp-inheritance.html)”（类似“克隆”父脚本并添加一些新的内容）这个在[C#](https://www.runoob.com/csharp/csharp-tutorial.html)开发中的概念，父脚本的变量注解（可能需要转意）、注释大部分情况对于子脚本都是通用的，例外情况会特殊说明

此文档大量应用并省略了子类引用的父类内容但在文档开头的地方注明了父类文档的链接
:::

:::tip 一些变量设置提示
大部分时候，尤其是一些设置项很少的效果组件，变量槽位多为必填

在组件文档中`Sizes`的说法是对于Unity 5而不是现在的Unity 2020的，Unity 2020版本的直接点击`+`按钮即可

对于一些诸如浮点数类型的组件变量设置，一部分像`*time*`的选项使用秒作为单位，一部分像`*multiplier*`以及[Weapon](./Weapon.md)的`followupSpreadGain`的倍数、倍增值、效果等，他们是作为百分比数值使用(作为小数显示)，注意辨别！
:::

## 载具
- [Airplane](./Airplane.md) 飞机
- [VehicleContentMod](./VehicleContentMod.md) 载具导出配置
- [Vehicle](./Vehicle.md) 载具基础类
- [Seat](./Seat.md) 载具座位
- ~~[Plane](./Plane.md) 飞机~~(已弃用)
- [Helicopter](./Helicopter.md) 直升机
- [CarWheel](./CarWheel.md) 车轮
- [Boat](./Boat.md) 船
- [ArcadeCar](./ArcadeCar.md) 带物理驾驶效果的载具
- [AnimationDrivenVehicle](./AnimationDrivenVehicle.md) 自定义动画的载具
- Weapon 车载武器
    - [AutoRepairVehicleWeapon](./AutoRepairVehicleWeapon.md) 载具修复武器
    - [CarHorn](./CarHorn.md) 载具喇叭
    - [Mortar](./Mortar.md) 迫击炮
    - [MountedStabilizedTurret](./MountedStabilizedTurret.md)  固定旋转炮塔
    - ~~[MountedTurret](./MountedTurret.md) 固定炮塔~~(已弃用)
    - [MountedWeapon](./MountedWeapon.md) 车载武器
    - ~~[TankTurret](./TankTurret.md) Tank的固定炮塔~~(已弃用)
- Vehicle Components 载具附属组件
    - [AircraftDrag](./AircraftDrag.md) 飞机阻力
    - [DirectionalDragForce](./DirectionalDragForce.md) 方向阻力
    - [FloatingRigidbody](./FloatingRigidbody.md) 浮动刚体
    - [IndependentRotation](./IndependentRotation.md) 独立旋转
    - [SpinWhenBurning](./SpinWhenBurning.md) 坠机螺旋
    - [VehicleDestructibleHitbox](./VehicleDestructibleHitbox.md) 可破坏物体
    - Cameras 相机
        - [BombCamera](./BombCamera.md) 投弹视角
        - [FirstPersonCameraLook](./FirstPersonCameraLook.md)  第一人称自由视角
        - [LookAtCamera](./LookAtCamera.md) 当相机启用时克隆旋转属性
        - [ThirdPersonCameraLook](./ThirdPersonCameraLook.md) 第三人称自由视角
    - Visual 
        - [ActivateForSeatWeapon](./ActivateForSeatWeapon.md) 按载具座位的活动武器激活物体
        - [ActivateWhenAimingWeapon](./ActivateWhenAimingWeapon.md) 瞄准时激活物体
        - [ActivateWhenLocked](./ActivateWhenLocked.md) 被导弹锁定时激活物体
        - [AimTransform](./AimTransform.md) 瞄准时应用Transform
        - [AimingWheel](./AimingWheel.md) 跟随目标物体的旋转属性
        - [ControlSurface](./ControlSurface.md) 飞机控制面
        - [CopyRotation](./CopyRotation.md) 克隆旋转属性
		- [DeltaRotationIndicator](./DeltaRotationIndicator.md) 炮塔旋转指示器
        - [EnginePoweredParticles](./EnginePoweredParticles.md) 飞机引擎粒子效果
        - [FollowMainCamera](./FollowMainCamera.md) 跟随活动相机的Transform
        - [ForceHeight](./ForceHeight.md) 强制保持高度
        - [GeometryTrack](./GeometryTrack.md) 形状混合权重
        - [HeadingGuide](./HeadingGuide.md) 跟随旋转+阻尼
        - [InheritDeltaRotation](./InheritDeltaRotation.md) 增量旋转
		- [InheritDeltaPosition](./InheritDeltaPosition.md) 增量移动
        - [Joystick](./Joystick.md) 飞机操控手柄
        - [MountedStabilizedTurretUIAimIndicator](./MountedStabilizedTurretUIAimIndicator.md)
        - [ParticlesAmbientColor](./ParticlesAmbientColor.md)
        - [PitchRollGuide](./PitchRollGuide.md) 飞机水平仪
        - [PlayerRecoilCamera](./PlayerRecoilCamera.md) 玩家镜头抖动
        - [PlayerRecoilTransform](./PlayerRecoilTransform.md) 开火后座
        - [RollGuide](./RollGuide.md) 横向水平仪
        - [Rotor](./Rotor.md) 飞机螺旋桨
        - [SteeringWheel](./SteeringWheel.md) 载具方向盘
        - [UvOffset](./UvOffset.md) UV贴图滚动
        - [UvVehicleTrackScroll](./UvVehicleTrackScroll.md) UV贴图滚动
        - [WaterRipples](./WaterRipples.md) 载具水波
        - UI
            - [ChangeEmissionAtNight](./ChangeEmissionAtNight.md) 夜间模式材质
            - [CountermeasureStatusIndicator](./CountermeasureStatusIndicator.md) 热诱弹指示器
            - [GearIndicator](./GearIndicator.md) 起落架HUB监视
            - [HelicopterHud](./HelicopterHud.md) 直升机HUB监视
            - [PlaneHud](./PlaneHud.md) 飞机HUB监视
            - [RefreshRateText](./RefreshRateText.md) 监视屏刷新率表
            - [Speedometer](./Speedometer.md) 速度表
            - [UiAnimator](./UiAnimator.md) 简单UI动画
            - [UiElementTracker](./UiElementTracker.md) UI物体跟踪
            - [WeaponStatusIndicator](./WeaponStatusIndicator.md) 武器HUB监视

## 武器
- [Ammobox](./Ammobox.md) 弹药包
- [ExplodingProjectile](./ExplodingProjectile.md) 爆炸性Projectile
- [GrenadeProjectile](./GrenadeProjectile.md) 手榴弹Projectile
- [Medipack](./Medipack.md) 医疗包
- [MeleeWeapon](./MeleeWeapon.md) 近战武器
- [Projectile](./Projectile.md) 子弹
- [RemoteDetonatedProjectile](./RemoteDetonatedProjectile.md) 遥控炸弹Projectile
- [ProximityFuzeProjectile](./ProximityFuzeProjectile.md) 近程引信Projectile
- [RigidbodyProjectile](./RigidbodyProjectile.md) 刚体Projectile
- [Rocket](./Rocket.md) 火箭弹
- [SoundBank](./SoundBank.md)  AudioCilp集
- [SpinWhenHoldingFire](./SpinWhenHoldingFire.md) 开火旋转力
- [TargetSeekingMissile](./TargetSeekingMissile.md) 跟踪导弹
- [ThrowableWeapon](./ThrowableWeapon.md) 可投掷武器
- [ToggleableItem](./ToggleableItem.md) 可投掷物体
- [Weapon](./Weapon.md) 基础武器类
- [WeaponCotentMod](./WeaponCotentMod.md) 武器导出向导
- [WireGuidedMissile](./WireGuidedMissile.md) 引导导弹
- [Wrench](./Wrench.md) 扳手
- Misc其他
    - [AmmoCountUiText](./AmmoCountUiText.md) 弹药HUB监视
    - [MaterialTarget](./MaterialTarget.md)
    - [PlayAudioAfterDelay](./PlayAudioAfterDelay.md) 延迟播放音频
    - [Rangefinder](./Rangefinder.md) 测距仪
    - [RocketPodShaderController](./RocketPodShaderController.md) 备弹反馈
    - [TargetTracker](./TargetTracker.md) 跟踪导弹目标锁定器


## 地图
- ~~[AlternativePathSet](./AlternativePathSet.md)~~(已弃用)
- [AvoidanceBox](./AvoidanceBox.md) 避障箱
- [CapturePoint](./CapturePoint.md) 地图据点
- [CustomActorModel](./CustomActorModel.md) 自定义皮肤
- [CustomGraphCache](./CustomGraphCache.md)
- [DamageZone](./DamageZone.md) 伤害领域
- [Destructible](./Destructible.md) 可破坏物体
- [GameModeInfo](./GameModeInfo.md) 地图信息
- [Ladder](./Ladder.md) 梯子
- [LandingZone](./LandingZone.md) 船只停泊区
- [LevelColorGrading](./LevelColorGrading.md) 地图颜色氛围
- [LevelGravity](./LevelGravity.md) 地图重力
- [MinimapCamera](./MinimapCamera.md) 小地图相机
- [ObjectOptionsToggler](./ObjectOptionsToggler.md) 游戏选项关联物体
- [PathfindingBox](./PathfindingBox.md) 寻路盒
- [PathfindingLink](./PathfindingLink.md) 强制寻路器
- [PathfindingRelevantPoint](./PathfindingRelevantPoint.md) 相关寻路点
- [ReflectionProber](./ReflectionProber.md) [反射探针](https://docs.unity.cn/cn/2020.3/Manual/class-ReflectionProbe.html)配置器
- [ResupplyCrate](./ResupplyCrate.md) 补给箱
- [SceneryCamera](./SceneryCamera.md) 地图背景相机
- [SpawnPoint](./SpawnPoint.md) 点位基类
- [SpawnPointNeighborManager](./SpawnPointNeighborManager.md) 据点寻路系统
- [SpeedLimitZone](./SpeedLimitZone.md) 限速区
- [TimeOfDay](./TimeOfDay.md) 地图昼夜环境控制
- [TurretSpawner](./TurretSpawner.md) 炮塔生成点
- [VehicleSpawner](./VehicleSpawner.md) 载具生成点
- [WaterLevel](./WaterLevel.md) 海平面
- [WaterVolume](./WaterVolume.md) 水面

## Ravenscrpit
- [MutatorCotentMod](./MutatorCotentMod.md) Mutator导出向导
- [ScriptedBehaviour](./ScriptedBehaviour.md) 实例化脚本

## Custom GameMode（自定义游戏模式）
- [自定义类型](./CustomTypes.md) 游戏使用的数据类型注释
- [GameModeBase](./GameModeBase.md) 游戏模式基类
- [ScriptedGameMode](./ScriptedGameMode.md) 脚本任务游戏模式
- ScriptedGameMode触发系统
    - [DynamicBlockWalkableBox](./DynamicBlockWalkableBox.md) 动态寻路盒
    - [ICompoundTriggerSender](./ICompoundTriggerSender.md)
    - [TriggerBaseComponent](./TriggerBaseComponent.md) Trigger基类
    - [TriggerDebug](./TriggerDebug.md)
    - [TriggerReceiver](./TriggerReceiver.md) Trigger动作器基类
    - [TriggerSend](./TriggerSend.md)
    - Actor
        - [TriggerAddActorAccessory](./TriggerAddActorAccessory.md)
        - [TriggerDeployParachute](./TriggerDeployParachute.md)
        - [TriggerEquipWeapon](./TriggerEquipWeapon.md)
        - [TriggerFireWeapon](./TriggerFireWeapon.md)
        - [TriggerRagdoll](./TriggerRagdoll.md)
        - [TriggerSpawnImposterActors](./TriggerSpawnImposterActors.md)
        - [TriggerTeleport](./TriggerTeleport.md)
        - [TriggerUpdateActorInfo](./TriggerUpdateActorInfo.md)
	- AI
        - [TriggerDetectionGroup](./TriggerDetectionGroup.md)
        - [TriggerEnterVehicle](./TriggerEnterVehicle.md)
        - [TriggerExitVehicle](./TriggerExitVehicle.md)
		- [TriggerFireWeapon](./TriggerFireWeapon.md)
        - [TriggerFollowPathGroup](./TriggerFollowPathGroup.md)
        - [TriggerIssueSquadOrder](./TriggerIssueSquadOrder.md)
        - [TriggerJoinSquad](./TriggerJoinSquad.md)
        - [TriggerLandHelicopter](./TriggerLandHelicopter.md)
        - [TriggerLeavePathGroup](./TriggerLeavePathGroup.md)
        - [TriggerLookAt](./TriggerLookAt.md)
		- [TriggerOnSquadRequestsNewOrder](./TriggerOnSquadRequestsNewOrder.md)
        - [TriggerSmokePoint](./TriggerSmokePoint.md)
        - [TriggerSquadFormation](./TriggerSquadFormation.md)
        - [TriggerSquadRecalculatePaths](./TriggerSquadRecalculatePaths.md)
        - [TriggerSyncPathGroup](./TriggerSyncPathGroup.md)
        - [TriggerUpdateSquadInfo](./TriggerUpdateSquadInfo.md)
	- Events
        - [TriggerOnActorDeath](./TriggerOnActorDeath.md)
        - [TriggerOnActorEnter](./TriggerOnActorEnter.md)
        - [TriggerOnActorEnterVehicle](./TriggerOnActorEnterVehicle.md)
        - [TriggerOnCaptured](./TriggerOnCaptured.md)
        - [TriggerOnDestructibleDamage](./TriggerOnDestructibleDamage.md)
    - Flow
	    - [TriggerCompleteAllGroup](./TriggerCompleteAllGroup.md)
        - [TriggerCondition](./TriggerCondition.md)
        - [TriggerDelay](./TriggerDelay.md)
        - [TriggerEndMatch](./TriggerEndMatch.md)
        - [TriggerForEach](./TriggerForEach.md)
        - [TriggerLoadCheckpoint](./TriggerLoadCheckpoint.md)
        - [TriggerOnStart](./TriggerOnStart.md)
        - [TriggerPassthroughNode](./TriggerPassthroughNode.md)
        - [TriggerPickOne](./TriggerPickOne.md)
        - [TriggerRandom](./TriggerRandom.md)
        - [TriggerRepeat](./TriggerRepeat.md)
        - [TriggerSaveCheckpoint](./TriggerSaveCheckpoint.md)
        - [TriggerSequence](./TriggerSequence.md)
	- Level
	    - [TriggerActivation](./TriggerActivation.md)
	    - [TriggerAddActorAccessory](./TriggerAddActorAccessory.md)
	    - [TriggerAnimatorController](./TriggerAnimatorController.md)
	    - [TriggerAudioSnapshot](./TriggerAudioSnapshot.md)
        - [TriggerChangeGravity](./TriggerChangeGravity.md)
		- [TriggerChangeScene](./TriggerChangeScene.md)
        - [TriggerChangeSpawnpointContainer](./TriggerChangeSpawnpointContainer.md)
	    - [TriggerCrossfadeAudio](./TriggerCrossfadeAudio.md)
	    - [TriggerDialog](./TriggerDialog.md)
	    - [TriggerDifficultyOption](./TriggerDifficultyOption.md)
	    - [TriggerDisablePlayerInput](./TriggerDisablePlayerInput.md)
	    - [TriggerEffect](./TriggerEffect.md)
	    - [TriggerEquipWeapon](./TriggerEquipWeapon.md)
	    - [TriggerExplosion](./TriggerExplosion.md)
	    - [TriggerKillActor](./TriggerKillActor.md)
	    - [TriggerMoveGameObject](./TriggerMoveGameObject.md)
	    - [TriggerPlayerOrderPoint](./TriggerPlayerOrderPoint.md)
	    - [TriggerRagdoll](./TriggerRagdoll.md)
	    - [TriggerRestartMap](./TriggerRestartMap.md)
	    - [TriggerSlowmotion](./TriggerSlowmotion.md)
	    - [TriggerTeleport](./TriggerTeleport.md)
	    - [TriggerUpdateActorInfo](./TriggerUpdateActorInfo.md)
	    - [TriggerUpdateCapturePoint](./TriggerUpdateCapturePoint.md)
	    - [TriggerUpdateVehicle](./TriggerUpdateVehicle.md)
        - [TriggerUpdateVehicleInfo](./TriggerUpdateVehicleInfo.md)
	    - [TriggerUsable](./TriggerUsable.md)
	- Objective
	    - [TriggerCreateObjective](./TriggerCreateObjective.md)
        - [TriggerUpdateObjective](./TriggerUpdateObjective.md)
    - Ravenscript
        - [TriggerScriptedFunction](./TriggerScriptedFunction.md)
        - [TriggerScriptedSignal](./TriggerScriptedSignal.md)
    - Spawn
	    - [TriggerPlayerTakeOverActor](./TriggerPlayerTakeOverActor.md)
        - [TriggerSpawnBloodParticles](./TriggerSpawnBloodParticles.md)
        - [TriggerSpawnPlayer](./TriggerSpawnPlayer.md)
        - [TriggerSpawnPrefab](./TriggerSpawnPrefab.md)
        - [TriggerSpawnSquad](./TriggerSpawnSquad.md)
        - [TriggerSpawnVehicle](./TriggerSpawnVehicle.md)
		
		
		
## Misc（其他）
- [ActorSkinContentMod](./ActorSkinContentMod.md) 皮肤导出向导
- [DataContainer](./DataContainer.md) 数据体
- [Lifetime](./Lifetime.md) GameObject生命周期
- [RequireGameVersion](./RequireGameVersion.md) 限制最低运行游戏版本
- [SynchronizeEditorTransforms](./SynchronizeEditorTransforms.md) 同步物体变换