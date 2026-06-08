---
category: 
- Components
- Vehicle
---
# Vehicle

## Description

The base class of a carrier, the foundation for building a carrier

## Usage

Add to the topmost level of a carrier object, with attached objects hanging down inside this object

Refer [RFCreator Project](/cn/Tutorials/README.md)

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| aiType | enum | Type of vehicle use as determined by bot (Capture=capture position, Roam=move, Transport=transport) |
| armorRating | enum | Armor strength (SmallArms=light weapons, HeavyArms=heavy weapons, AntiTank=armor piercing)|
| aiUseStrategy |enum |  Carrier use scenarios identified by bot (Default, OnlyFromFrontlineSpawn, FromAnySpawn)|
| name | string | vehicle name | 
| seats | List<[Seat](./Seat.md)> | Seats (first seat will be set as driver's seat) |
| targetType | enum.Actor.TargetType | Target Type (the vehicle's own Type. Infantry=Infantry, InfantryGroup=Infantry Group, Unarmored=Unarmored, Armored=Armored, Air=Airborne, AirFastMover=High-speed airborne target)|
| armorDamagedBy | enum.ArmorRating | What type of weapon the carrier can be attacked by (SmallArms=light weapons, HeavyArms=heavy weapons, AntiTank=armor piercing) | 
| smallArmsMultiplier | float | Light weapon damage multiplier | 
| heavyArmsMultiplier | float | Heavy weapon damage multiplier |
| canBeRepairedAfterDeath | bool | Repairable on death |
| maxHealth | float |  Maximum health value |
| crashDamageSpeedThrehshold | float |   Threshold for the speed at which impacts cause damage |
| crashDamageMultiplier | float |   impact damage |
| spotChanceMultiplier | float |   Visibility multiplier |
| burnTime | float |  burn time |
| crashSkipsBurn | bool | Crash and burn |
| directJavelinPath | bool |  Whether to guide the missile lock (without checking the box, it defaults to the origin, I think) |
| canCapturePoints | bool |  can occupiable captrue points |
| canFireAtOwnVehicle | bool |   Can damage the vehicle itself |
| targetLockPoint | Transform |   Missile lock point (guided missile lock must be enabled first) |
| aiUseToDefendPoint | bool | Whether or not a bot can use a carrier to defend a stronghold |
| minCrewCount | int |  bot minimum occupancy (applicable to transport carriers) |
| roamCompleteDistance | float |  |
| smokeParticles | ParticleSystem |  fuming particle |
| fireParticles | ParticleSystem |  Ignition particle |
| fireAlarmSound | AudioSource |  flame warning |
| deathParticles | ParticleSystem |   death particle |
| deathSound | AudioSource |   Death sound effects |
| impactAudio | AudioSource |   Impact sound effects |
| heavyDamageAudio | AudioSource |  Sound effects when smoking |
| blockSensor | Transform |  |
| blip | Texture |   vehicle icons on the mini-map |
| blipScale | float |   Display size multiplier for vehicle icons on the mini-map |
| avoidanceSize | Vector2 | Carrier generation avoidance size (the size of the volume that the AI considers in the patrolling system) |
| pathingRadius | float | Minimum distance for bot to enter carrier |
| ramSize | Vector3 |   Impact area resizing |
| ramOffset | Vector3 |  Impact area repositioning |
| disableOnDeath | GameObject[] | Objects hidden at the time of death |
| activateOnDeath | GameObject[] | Objects displayed (enabled) on death |
| teamColorMaterials | MaterialTarget[] |  Camp color material (requires a material slot to be pre-assigned in Blender for displaying the material color) |
| hasCountermeasures | bool | Whether or not to enable countermeasures |
| countermeasuresActiveTime | float | Duration of countermeasures |
| countermeasuresCooldown | float | countermeasures cooldown time |
| countermeasureParticles | ParticleSystem | countermeasure particle |
| countermeasureSpawnPrefab | GameObject | countermeasure generation prefab |
| countermeasureAudio | AudioSource | countermeasure sound effect |
| controlAudio | bool |  Control audio (engine sounds) |
| powerGainSpeed | float |  Audio loudness boost speed (not quite sure if it is) |
| pitchGainSpeed | float |  Audio frequency boost speed |
| throttleGainSpeed | float |  Carrier Throttle Lift Speed |
| throttleAudioSource | AudioSource |   |
| extraAudioSource | AudioSource |  |
| shiftForwardClip | AudioClip |   |
| shiftReverseClip | AudioClip |   |
| ignitionClip | AudioClip | Startup Sound |
| shiftForwardClip | AudioClip |  |  
| shiftReverseClip | AudioClip |  |  
| ignitionClip | AudioClip |  |  
