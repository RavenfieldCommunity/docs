---
category: 
- 组件
---

# 组件索引
::: warning
此组件文档仍处于十分早期的阶段，由于相当一部分组件仅通过检查源码进行编写，所以可能与现实存在偏差，敬请在网站评论区或[此项目的Steam指南原链接](https://steamcommunity.com/sharedfiles/filedetails/?id=2902809158)评论区提出此错误！

另外请注意“[派生类](https://www.runoob.com/csharp/csharp-inheritance.html)”（类似“克隆”父脚本并添加一些新的内容）这个在[C#](https://www.runoob.com/csharp/csharp-tutorial.html)开发中的概念，父脚本的变量注解（可能需要转意）、注释大部分情况对于子脚本都是通用的，例外情况会特殊说明

此文档大量应用并省略了子类引用的父类内容但在文档开头的地方注明了父类文档的链接
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
    - [VehicleDestructibleHitbox](./VehicleDestructibleHitbox.md) 
    - Cameras 相机
        - [BombCamera](./BombCamera.md)
        - [FirstPersonCameraLook](./FirstPersonCameraLook.md)  第一人称自由视角
        - [LookAtCamera](./LookAtCamera.md) 当相机启用时克隆旋转属性
        - [ThirdPersonCameraLook](./ThirdPersonCameraLook.md) 第三人称自由视角
    - Visual 
        - [ActivateForSeatWeapon](./ActivateForSeatWeapon.md) 按载具座位的活动武器激活物体
        - [ActivateWhenAimingWeapon](./ActivateWhenAimingWeapon.md) 瞄准时激活物体
        - [ActivateWhenLocked](./ActivateWhenLocked.md) 被导弹锁定时激活物体
        - [AimTransform](./AimTransform.md) 瞄准时应用Transform
        - [AimingWheel](./AimingWheel.md) 跟随目标物体的旋转属性
        - [ControlSurface](./ControlSurface.md)
        - [CopyRotation](./CopyRotation.md) 克隆旋转属性
		- [DeltaRotationIndicator](./DeltaRotationIndicator.md)
        - [EnginePoweredParticles](./EnginePoweredParticles.md)
        - [FollowMainCamera](./FollowMainCamera.md) 跟随活动相机的Transform
        - [ForceHeight](./ForceHeight.md) 强制保持高度
        - [GeometryTrack](./GeometryTrack.md)
        - [HeadingGuide](./HeadingGuide.md)
        - [InheritDeltaRotation](./InheritDeltaRotation.md) 克隆旋转属性Pro
		- [InheritDeltaPosition](./InheritDeltaPosition.md)
        - [Joystick](./Joystick.md)
        - [MountedStabilizedTurretUIAimIndicator](./MountedStabilizedTurretUIAimIndicator.md)
        - [ParticlesAmbientColor](./ParticlesAmbientColor.md)
        - [PitchRollGuide](./PitchRollGuide.md) 飞机水平仪
        - [PlayerRecoilCamera](./PlayerRecoilCamera.md)
        - [PlayerRecoilTransform](./PlayerRecoilTransform.md)
        - [RollGuide](./RollGuide.md)
        - [Rotor](./Rotor.md) 飞机螺旋桨
        - [SteeringWheel](./SteeringWheel.md)
        - [UvOffset](./UvOffset.md)
        - [UvVehicleTrackScroll](./UvVehicleTrackScroll.md)
        - [WaterRipples](./WaterRipples.md) 载具水波
        - UI
            - [ChangeEmissionAtNight](./ChangeEmissionAtNight.md)
            - [CountermeasureStatusIndicator](./CountermeasureStatusIndicator.md)
            - [GearIndicator](./GearIndicator.md)
            - [HelicopterHud](./HelicopterHud.md) 直升机HUB监视
            - [PlaneHud](./PlaneHud.md) 飞机HUB监视
            - [RefreshRateText](./RefreshRateText.md)
            - [Speedometer](./Speedometer.md)
            - [UiAnimator](./UiAnimator.md)
            - [UiElementTracker](./UiElementTracker.md)
            - [WeaponStatusIndicator](./WeaponStatusIndicator.md) 武器HUB监视

## 武器
- [Ammobox](./Ammobox.md) 弹药包
- [ExplodingProjectile](./ExplodingProjectile.md) 爆炸性Projectile
- [GrenadeProjectile](./GrenadeProjectile.md) 手榴弹Projectile
- [Medipack](./Medipack.md) 医疗包
- [MeleeWeapon](./MeleeWeapon.md) 近战武器
- [Projectile](./Projectile.md) 子弹
- [RemoteDetonatedProjectile](./RemoteDetonatedProjectile.md)
- [ProximityFuzeProjectile](./ProximityFuzeProjectile.md) 近程引信Projectile
- [RigidbodyProjectile](./RigidbodyProjectile.md) 刚体Projectile
- [Rocket](./Rocket.md) 火箭弹
- [SoundBank](./SoundBank.md)  AudioCilp集
- [SpinWhenHoldingFire](./SpinWhenHoldingFire.md)
- [TargetSeekingMissile](./TargetSeekingMissile.md) 跟踪导弹
- [ThrowableWeapon](./ThrowableWeapon.md)
- [ToggleableItem](./ToggleableItem.md)
- [Weapon](./Weapon.md) 基础武器类
- [WeaponCotentMod](./WeaponCotentMod.md) 武器导出向导
- [WireGuidedMissile](./WireGuidedMissile.md)
- [Wrench](./Wrench.md) 扳手
- Misc其他
    - [AmmoCountUiText](./AmmoCountUiText.md)
    - [MaterialTarget](./MaterialTarget.md)
    - [PlayAudioAfterDelay](./PlayAudioAfterDelay.md)
    - [Rangefinder](./Rangefinder.md) 测距仪
    - [RocketPodShaderController](./RocketPodShaderController.md)
    - [TargetTracker](./TargetTracker.md)


## 地图
- [AlternativePathSet](./AlternativePathSet.md)
- [AvoidanceBox](./AvoidanceBox.md) 避障箱
- [CapturePoint](./CapturePoint.md) 地图据点
- [CustomActorModel](./CustomActorModel.md) 自定义皮肤
- [CustomGraphCache](./CustomGraphCache.md)
- [DamageZone](./DamageZone.md) 伤害领域
- [Destructible](./Destructible.md)
- [GameModeInfo](./GameModeInfo.md) 地图信息
- [Ladder](./Ladder.md) 梯子
- [LandingZone](./LandingZone.md) 船只停泊区
- [LevelColorGrading](./LevelColorGrading.md)
- [LevelGravity](./LevelGravity.md)
- [MinimapCamera](./MinimapCamera.md) 小地图相机
- [ObjectOptionsToggler](./ObjectOptionsToggler.md)
- [PathfindingBox](./PathfindingBox.md) 寻路盒
- [PathfindingLink](./PathfindingLink.md) 强制寻路器
- [PathfindingRelevantPoint](./PathfindingRelevantPoint.md)
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
- [GameModeBase](./GameModeBase.md)
- [ScriptedGameMode](./ScriptedGameMode.md)
- ScriptedGameMode触发系统
    - [ICompoundTriggerSender](./ICompoundTriggerSender.md)
    - [TriggerBaseComponent](./TriggerBaseComponent.md)
    - [TriggerDebug](./TriggerDebug.md)
    - [TriggerReceiver](./TriggerReceiver.md)
    - [TriggerSend](./TriggerSend.md)
	- AI
        - [TriggerDetectionGroup](./TriggerDetectionGroup.md)
        - [TriggerEnterVehicle](./TriggerEnterVehicle.md)
		- [TriggerFireWeapon](./TriggerFireWeapon.md)
        - [TriggerFollowPathGroup](./TriggerFollowPathGroup.md)
        - [TriggerIssueSquadOrder](./TriggerIssueSquadOrder.md)
        - [TriggerJoinSquad](./TriggerJoinSquad.md)
        - [TriggerLeavePathGroup](./TriggerLeavePathGroup.md)
        - [TriggerLookAt](./TriggerLookAt.md)
		- [TriggerOnSquadRequestsNewOrder](./TriggerOnSquadRequestsNewOrder.md)
        - [TriggerSmokePoint](./TriggerSmokePoint.md)
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
		- [TriggerChangeScene](./TriggerChangeScene.md)
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
- [RequireGameVersion](./RequireGameVersion.md) 限制最低运行游戏版本