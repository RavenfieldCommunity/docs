# Actor
## Members
| Member | Variable类型 | 类型 | 描述 |
| ----------- | ----------- | ----------- | ----------- |
| activeSeat | const |  |  |
| activeWeapon  | const |  |  |
| activeVehicle | const |  |  |
| actorIndex | const |  |  |
| actorTeamIndex | const |  |  |
| aiController | const |  |  |
| balance | normal |  |  |
| canBeSeated | const |  |  |
| canCapturePoint | const |  |  |
| canDeployParachute |  |  |  |
| centerPosition | const |  |  |
| currentCapturePoint | const |  |  |
| dropsAmmoOnKick |  |  |  |
| facingDirection | const |  |  |
| gameObject | const |  |  |
| health |  |  |  |
| hitboxCollidersAreEnabled |  |  |  |
| isAiming |  |  |  |
| isAtResupplyCrate |  |  |  |
| isBot |  |  |  |
| isCrouching |  |  |  |
| isDeactivated |  |  |  |
| isDead |  |  |  |
| isDriver |  |  |  |
| isFallenOver |  |  |  |
| isFrozen |  |  |  |
| isInWater |  |  |  |
| isOnLadder |  |  |  |
| isParachuteDeployed |  |  |  |
| isPassenger |  |  |  |
| isPlayer |  |  |  |
| isProne |  |  |  |
| isReadyToSpawn |  |  |  |
| isRendered |  |  |  |
| isResupplyingAmmo |  |  |  |
| isResupplyingHealth |  |  |  |
| isSeated |  |  |  |
| isSprinting |  |  |  |
| isStanding |  |  |  |
| isSwimming |  |  |  |
| ladder |  |  |  |
| maxBalance |  |  |  |
| maxHealth |  |  |  |
| name |  |  |  |
| needsResupply |  |  |  |
| position |  |  |  |
| rotation |  |  |  |
| speedMultiplier |  |  |  |
| squad |  |  |  |
| team |  |  |  |
| transform |  |  |  |
| wasRecentlyInWater |  |  |  |
| weaponSlots |  |  |  |
| velocity |  |  |  |
## 事件
| Event | 描述 |
| ----------- | ----------- |
| onTakeDamage | Invoked when this actor takes damage. |
## 方法
| Method | 描述 |
| ----------- | ----------- |
| Activate() |  |
| AddAccessory(mesh, materials) |  |
| ApplyTeamSkin() |  |
| CanBeDamagedBy(weapon) |  |
| CanEnterSeat(seat) |  |
| CutParachute() |  |
| Damage(health) |  |
| Damage(source, info) |  |
| Damage(source, health, balance, isSplash, isPiercing) |  |
| Damage(source, health, balance, isSplash, isPiercing, point, direction, force) |  |
| Deactivate() |  |
| DeployParachute() |  |
| EnterSeat(seat) |  |
| EnterSeatForced(seat) |  |
| EnterVehicle(vehicle) |  |
| EquipNewWeaponEntry(entry, slotNumber, forceSwitchTo) |  |
| EvaluateShotDifficulty(target, weapon) |  |
| ExitLadder() |  |
| ExitVehicle() |  |
| FallOver() |  |
| GetHumanoidTransformAnimated(bone) |  |
| GetHumanoidTransformRagdoll(bone) |  |
| GetOnLadder(ladder) |  |
| InstantlyReloadCarriedWeapons() |  |
| IsWeaponUnholstered() |  |
| Kill(killer) |  |
| KillSilently() |  |
| KnockOver(force) |  |
| RemoveAccessories() |  |
| RemoveWeapon(slotNumber) |  |
| ResupplyAmmo() |  |
| ResupplyHealth() |  |
| SetHumanoidBoneScale(bone, scale) |  |
| SetHumanoidBoneScale(bone, scale) |  |
| SetRagdollJointDrive(spring, stiffness) |  |
| SetRagdollJointDriveDefault() |  |
| SetSkin(actorSkin) |  |
| SetSkin(mesh, materials, teamMaterialIndex) |  |
| SetWeaponParentApproximateWorldScale(scale) |  |
| SetWeaponParentScale(scale) |  |
| SpawnAt(position) |  |
| SpawnAt(position, rotation) |  |
| SwapWithSeat(seat) |  |
| SwitchToSeat(seat) |  |
| TeleportTo(position, rotation) |  |
