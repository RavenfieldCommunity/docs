---
category: 
- Components
- Vehicle
---
# MountedStabilizedTurret

## Description
Derived from [MountedWeapon](./MountedWeapon.md)

Mounted turret weapons

## Usage

Refer[MountedWeapon](./MountedWeapon.md) and RFTools's prefab

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| bearingTransform | Transform | yaw axis |
| pitchTransform | Transform | pitch axis |
| sensitivityX | float | yaw sensitivity |
| sensitivityY | float | pitch sensitivity |
| clampX | Clamp | Yaw angle limits (enabled=enabled or not, min=min, max=max) |
| clampY | Clamp | Pitch limitation (enabled=enabled or not, min=minimum, max=maximum) |
| clampNotch | ClampYNotch[]  | Angle Limit Points (generally used in cases where the height around the turret is inconsistent) Points can be visualized as a trapezoid with a top base, bottom base and height (refer to [Unity documentation](https://docs.unity3d.com/2020.3/Documentation/ScriptReference/Mathf.Clamp.html)) |
| useMaxTurnSpeed | bool | Use maximum rotation speed |
| maxTurnSpeed | float | maximum rotation speed |
| useSpring | bool  | Use a spring (which almost no one uses, can't figure it out) |
| springAmount | float |  |
| springForce | float  |  |
| springDrag |  float|  |
| type | enum.Type | type of clampnotch  |
| bearingAngle | float | yaw angle（clampnotch) |