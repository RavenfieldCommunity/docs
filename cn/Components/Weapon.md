# Weapon
## 描述

## 用法

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| HaltStrategy | enum | (Auto, Never, PreferredLongRange, PreferredAnyRange, AlwaysLongRange, Always) |  
| Effectiveness | enum | (No, Yes, Preferred) |  
| ReflectionSound | enum | (Auto, None, Handgun, RifleSmall, RifleLarge, Launcher, Tank) |  
| thirdPersonTransform | Transform |  |  
| thirdPersonOffset  | Vector3 |  |  
| cullInThirdPerson | GameObject[] |  |  
| thirdPersonScale  | float |  |  
| configuration | Configuration |  |  
| reloadAudio | AudioSource |  |  
| changeFireModeAudio | AudioSource |  |  
| reflectionSound  | ReflectionSound |  |  
| reflectionVolume  | float |  |  
| walkBobMultiplier  | float |  |  
| sprintBobMultiplier  | float |  |  
| proneBobMultiplier  | float |  |  
| uiSprite | Sprite |  |  
| arms | SkinnedMeshRenderer |  |  
| allowArmMeshReplacement  | bool |  |  
| parentWeapon | Weapon |  |  
| useParentWeaponSightModes | bool |  |  
| holdingFire  | bool |  |  
| reloading  | bool |  |  
| unholstered  | bool |  |  
| switchedFromSubWeapon  | bool |  |  
| ammo | int |  |  
| activeSubWeaponIndex  | int |  |  
| activeSightModeIndex  | int |  |  
| isLocked  | bool |  |  
| auto  | bool |  |  
| ammo  | int |  |  
| spareAmmo  | int |  |  
| resupplyNumber  | int |  |  
| reloadTime  | float |  |  
| cooldown  | float |  |  
| unholsterTime  | float |  |  
| unholsterIsReload  | bool |  |  
| changeFireModeTime  | float |  |  
| changeFireModeIsReload  | bool |  |  
| aimFov  | float |  |  
| forceSniperAimSensitivity  | bool |  |  
| aimSensitivityMultiplier  | float |  |  
| autoReloadDelay  | float |  |  
| canBeAimedWhileReloading  | bool |  |  
| forceAutoReload  | bool |  |  
| loud  | bool |  |  
| forceWorldAudioOutput  | bool |  |  
| muzzles | Transform[] |  |  
| optionalThirdPersonMuzzles | Transform[] |  |  
| casingParticles | ParticleSystem[] |  |  
| fireFromAllMuzzles  | bool |  |  
| projectilesPerShot  | int |  |  
| projectilePrefab | GameObject |  |  
| scopeAimObject | GameObject |  |  
| kickback  | float |  |  
| randomKick  | float |  |  
| spread  | float |  |  
| followupSpreadGain  | float |  |  
| followupMaxSpreadHip  | float |  |  
| followupMaxSpreadAim  | float |  |  
| followupSpreadStayTime  | float |  |  
| followupSpreadDissipateTime  | float |  |  
| snapMagnitude  | float |  |  
| snapDuration  | float |  |  
| snapFrequency  | float |  |  
| kickbackProneMultiplier  | float |  |  
| spreadProneMultiplier  | float |  |  
| followupSpreadProneMultiplier  | float |  |  
| snapProneMultiplier  | float |  |  
| aiAllowedAimSpread  | float |  |  
| aiAimSwing  | float |  |  
| effInfantry  | Effectiveness |  |  
| effInfantryGroup  | Effectiveness |  |  
| effUnarmored  | Effectiveness |  |  
| effArmored  | Effectiveness |  |  
| effAir  | Effectiveness |  |  
| effAirFastMover  | Effectiveness |  |  
| effectiveRange  | float |  |  
| haltStrategy  | HaltStrategy |  |  
| pose  | int |  |  
| applyHeat  | bool |  |  
| heatMaterial | MaterialTarget |  |  
| heatGainPerShot  | float |  |  
| heatDrainRate  | float |  |  
| heatColor | Color |  |  
| heatColorGain | AnimationCurve |  |  
| overheatParticles | ParticleSystem |  |  
| overheatSound | AudioSource |  |  
| useChargeTime  | bool |  |  
| chargeTime  | float |  |  
| chargeSound | AudioSource |  |  
| dropAmmoWhenReloading  | bool |  |  
| maxRemainingAmmoAfterDrop  | int |  |  
| useMaxAmmoPerReload  | bool |  |  
| maxAmmoPerReload  | int |  |  
| advancedReload  | bool |  |  
| allowedReloads | int[] |  |  
| sightModes | SightMode[] |  |  
| overrideFov | bool |  |  
| fov | float |  |  
| name | string |  |  
