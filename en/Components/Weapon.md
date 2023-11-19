---
category: 
- Components
- Weapon
---
# Weapon
## Description

The base class of a weapon, which is the basis for constructing a weapon

## Usage

Applied to the topmost level of the weapon object, with subsidiary objects hanging down inside this object

Refer [RFCreator Project](/cn/Tutorials/wpn.1.md)

## Comment

This component uses an Audio Source component as a dependency, please place the fire sound in this component (check the `Loop` for Audio Source if it is an automatic weapon, and be careful not to check `Play on Awake`!)

In addition, please avoid having multiple Audio Source components side by side on an object with a Weapon component on it, as this will result in sound clashes and gameplay errors!

The solution is to create a new empty object inside the weapon and mount another Audio Source on it.

animatorcontroller parameters of  this component：
| Name | Type | Description |
|------|------|------|
| loaded ammo | int | Number of munitions loaded |
| unholster | trigger | True when switching to weapons |
| tuck | bool | True for sprinting |
| muzzle | int | Equal to the muzzle serial number the player is currently at (default starts at 0) |
| alt weapons | int | Equal to the serial number of the secondary weapon that the player is currently in (0 = in the primary weapon, default starts at 1) |
| charging | True when in charging state |  |
| overheat | bool | True in case of overheating |
| sight mode | int | Equal to the aiming mode the player is currently in (default starts at 0) |
| smooth sight mode | float | Equal to the aim mode the player is currently in (equivalent to sight mode, for BlenderTree) |
| fire | trigger | True when firing |
| aim | bool | True when aiming, False for the rest of the states |
| reload | trigger | True when loading munitions |
| reloading | bool | True when loading munitions |
| reload motion | int | Equal to how many rounds are required for this loading behavior? |
| no ammo | bool | True when no ammo is suspected (suspected to be judged by spare ammo) |
| no ammo blend |  |  |
| kick | trigger | True when kicking |
| call | trigger | True when gathering team members |
| direct | trigger | True when commanding team members |

For subcomponents of this component, some of the options are not available, please follow the logic to determine

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| displayName | string | Name of the weapon displayed in the actual UI |  
| thirdPersonTransform | Transform |  Third-person display of weapon models (including arms) |  
| thirdPersonOffset  | Vector3 | Offset of weapon model position shown in third person (corrected position) |  
| cullInThirdPerson | GameObject[] | Game objects not shown in third person (`Size` = number. Fill in the number of objects to hide first, then drag in the objects at Element*) |  
| thirdPersonScale  | float | Scaling offset (corrected position) of weapon model displayed in third person |  
| keepScriptsOnThirdPersonImposter  | bool |  | 
| reloadAudio | AudioSource | Reload Sound (Ignore this when `advanceRaload` is enabled, this AudioSource is recommended to be placed on empty objects inside the weapon),refer [RFCreator Project](/cn/Tutorials/README.md)) |  
| changeFireModeAudio | AudioSource | Sound effects for switching fire modes |  
| reflectionSound  | enum.ReflectionSound | Echo effects (Auto=Auto, None=None, Handgun=Pistol, RifleSmall=Small Rifle, RifleLarge=Large Rifle, Launcher=Gun, Tank=Tank) |  
| keepScriptsOnThirdPersonImposter  | bool |  |  
| reflectionVolume  | float | Echo effect size |  
| walkBobMultiplier  | float | Swaying times when walking |  
| sprintBobMultiplier  | float | Wobble times while running |  
| proneBobMultiplier  | float | Sway times while lying down |  
| uiSprite | Sprite | weapon icon |  
| arms | SkinnedMeshRenderer | The arm model for the weapon animation (within the scene hierarchy! contains bones, default name is "Hands") |  
| allowArmMeshReplacement  | bool |  Whether or not to allow player skins to replace hand skins during actual gameplay |  
| parentWeapon | [Weapon](./Weapon.md) | Parent Weapon (available when there is a child weapon, a child weapon is a Weapon inside a Weapon object) |  
| useParentWeaponSightModes | bool | Use the parent weapon's `sightModes`. |  
| ammo | int | Number of ammunition loaded on the weapon (set to -1 if the weapon does not have this ammunition logic) |  
| isLocked  | bool | Whether or not the weapon should be locked |  
| auto  | bool | Whether or not the weapon is automatic (affects whether or not the fire is continuous or single, and whether or not the fire sound effect stops instantly or just plays through) |  
| spareAmmo  | int | Number of spare ammunition for the weapon (set to -1 if the weapon does not have this ammunition logic) |  
| resupplyNumber  | int | Ammunition replenished from the supply box each time |  
| reloadTime  | float | Time required for loading (not available when `advanceReload` is enabled) |  
| cooldown  | float | Interval between two consecutive rounds when firing (rate of fire, smaller value is faster) |  
| unholsterTime  | float | Time taken to switch to weapons |  
| unholsterIsReload  | bool |  Whether the act of switching to a weapon is an alternative to reloading |  
| changeFireModeTime  | float |  Time taken to change firing mode |  
| changeFireModeIsReload  | bool |  Whether changing the behavior of the firing mode is an alternative to loading |  
| aimFov  | float |  Angle of View FoV when aiming |  
| forceSniperAimSensitivity  | bool |  Sensitivity of the viewpoint of mouse operation when aiming |  
| aimSensitivityMultiplier  | float |  Aiming Sensitivity Multiplier |  
| autoReloadDelay  | float | Delay in automatic loading |  
| canBeAimedWhileReloading  | bool |  Can you aim when loading |  
| forceAutoReload  | bool |  Forced automatic ammunition change (e.g., thrown weapons) |  
| loud  | bool |  Is it loud (attracts Bot) |  
| forceWorldAudioOutput  | bool |  Forced scene audio output |  
| muzzles | Transform[] |  Muzzle (or melee weapon attack point, bullet throwing point. Where bullet projectiles are generated, `Size` = quantity. Fill in the number of muzzles first, usually 1, then drag in the objects at `Element*`. (The Particle System component of the object specified in **muzzlesz and sub-levels of this object will trigger when firing**) |  
| optionalThirdPersonMuzzles | Transform[] | Optional muzzle in third person |  
| casingParticles | ParticleSystem[] | Throw shells at the mouth (`Size` = quantity. Fill in the quantity first, usually 1, then drag in the objects at `Element*`, throwing the shells in the same order as the `muzzles`). |  
| fireFromAllMuzzles  | bool | Whether or not all muzzles act independently of the firing mode when fired |  
| projectilesPerShot  | int |  How many projectile per shot? |  
| projectilePrefab | GameObject |  prefab for projectile |  
| scopeAimObject | GameObject | Objects that appear when aiming (optional, similar to the circle of black edges outside the screen when sniping, black edged objects when focusing on aiming. Should be within the scene hierarchy, the mechanism is that objects that are set here by default during gameplay will be disabled and enabled when the player is aiming) |  
| kickback  | float |  reactive force |  
| randomKick  | float |  Maximum value of random additional recoil |  
| spread  | float |  dispersion effect |  
| followupSpreadGain  | float |  Dispersion effect when firing in bursts |  
| followupMaxSpreadHip  | float |  Maximum value of the spread effect when firing in bursts (when not aiming) |  
| followupMaxSpreadAim  | float |  Maximum value of the spread effect when firing in bursts (when aiming) |  
| followupSpreadStayTime  | float | Duration of the scatter effect during a combo shot |  
| followupSpreadDissipateTime  | float | Dissipation time of the scatter effect during a burst  |  
| snapMagnitude  | float | Weapon uplift during firing |  
| snapDuration  | float | Duration of weapon uplift when firing |  
| snapFrequency  | float | Frequency of weapon uplift during firing |  
| kickbackProneMultiplier  | float | Backseat multiplier while lying down |  
| spreadProneMultiplier  | float | Imprecision multiplier |  
| followupSpreadProneMultiplier  | float | Subsequent increase in imprecision multiplier when lying down | 
| snapProneMultiplier  | float |  |  
| aiAllowedAimSpread  | float |  Bot aiming inaccuracy (the higher the value, the easier it is for the Bot to fire, even when not aiming) |  
| aiAimSwing  | float | Aiming error during Bot's attack |  
| effInfantry  | enum.Effectiveness | Whether the attack works on infantry (No, Yes, Preferred) | 
| effInfantryGroup  | enum.Effectiveness |  Whether the attack works on infantry groups (No, Yes, Preferred) | 
| effUnarmored  | enum.Effectiveness |  Whether or not the attack works on unarmored vehicles (No, Yes, Preferred) | 
| effArmored  | enum.Effectiveness |  Whether or not the attack works on armored vehicles (No, Yes, Preferred) | 
| effAir  | enum.Effectiveness | Whether or not the attack works on aerial targets (No, Yes, Preferred) | 
| effAirFastMover  | enum.Effectiveness |  Whether or not the attack works against fast-moving airborne targets (No, Yes, Preferred) | 
| effectiveRange  | float | Effective range of attack |  
| diffInfantry  | enum.Difficulty | The difficulty of Bot attacking infantry with this weapon (Auto=Automatically adjusted, Easy=Easy, Challenging=Okay, Hard=Difficult, Impossible=Impossible. **Bot in the game is automatically divided into four levels: Beginner, Normal, Veteran and Elite, the strength of each level can be reflected by the name, the difficulty of the weapon's attack is different for different levels of Bot, it will be cut down or enhanced**) |  
| diffInfantryGroup  | enum.Difficulty | Difficulty of Bot attacking infantry group with this weapon (Auto=Automatically adjusted, Easy=Easy, Challenging=Okay, Hard=Hard, Impossible=Impossible) |  
| diffGroundVehicles  | enum.Difficulty | Bot's difficulty in attacking carriers with this weapon (Auto=Automatically adjusted, Easy=Easy, Challenging=Okay, Hard=Hard, Impossible=Impossible). |  
| diffAir  | enum.Difficulty | Difficulty with which the Bot can attack aerial targets with this weapon (Auto=Automatically adjusted, Easy=Easy, Challenging=Okay, Hard=Hard, Impossible=Impossible). |  
| diffAirFastMover  | enum.Difficulty | Difficulty with which the Bot can attack fast-moving airborne targets with this weapon (Auto=Automatically adjusted, Easy=Easy, Challenging=Okay, Hard=Hard, Impossible=Impossible). |  
| haltStrategy  | enum.HaltStrategy |  Bot's fire strategy when moving (Recommended not to change. Auto=Automatically adjust, Never=Always fire when moving, PreferredLongRange=Preferred to stop moving and then fire at long range but still fire at close range, PreferredAnyRange=Allow to run and fire while moving but preferred to stop moving, AlwaysLongRange Always=Always stop moving at long range but fire at close range, Always=Always stop moving while firing) |  
| pose  | int |  Third-person weapon grip (examples: 0=AK, 1=Grenade, 2=SMAW) |  
| applyHeat  | bool | Whether there is an overheating effect |  
| heatMaterial | MaterialTarget |  Material for overheating effect (refer to Unity's documentation and Prefab, requires self-luminous material) |  
| heatGainPerShot  | float | % of weapon overheating per round |  
| heatDrainRate  | float |  How much heat is dissipated from the weapon per second |  
| heatColor | Color |  Overheating effect colors |  
| heatColorGain | AnimationCurve | Curve of color disappearance in case of overheating and heat dissipation |  
| overheatParticles | ParticleSystem |  Particles appearing from overheating |  
| overheatSound | AudioSource |  Overheating sound effect |  
| useChargeTime  | bool | Whether the weapon needs to be recharged (stored)  |  
| chargeTime  | float |  Weapon recharge time  |  
| chargeSound | AudioSource |  Weapon charging sound effects |  
| dropAmmoWhenReloading  | bool | Discarding surplus ammunition during reloading |  
| maxRemainingAmmoAfterDrop  | int | Maximum ammunition remaining after discarding ammunition |  
| useMaxAmmoPerReload  | bool | Limit the maximum number of loads per change |  
| maxAmmoPerReload  | int | Maximum loads per change (linked to `useMaxAmmoPerReload`) |  
| advancedReload  | bool | Whether or not to enable advanced loading (for single/multi-shot loaded weapons, need to call ReloadDone manually in AnimationEvent to end loading) |  
| allowedReloads | int[] |  {机翻}Allow reloading (what the hell...) |  
| sightModes | SightMode[] | Aiming styles (`Sizes` = how many aiming styles there are,`overrideFov` = spread view, `fov` = visual range, `name`=Name show in the HUB during actual gameplay) |  