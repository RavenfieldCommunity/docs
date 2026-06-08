---
category: 
- Components
- Vehicle
---
# MountedWeapon

## Description
Derived from [Weapon](./Weapon.md)

vehicle base weapon class, similar to [Weapon](./Weapon.md), but for vehicle-mounted weapons, the standard [Weapon](./Weapon.md) class cannot be used in vehicle.

## Usage

mounted on [Seat](/cn/Components/Seat.md)'s `Weapons[]`

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| overrideCamera | Camera | Prioritized cameras (beyond control) |
| aimCamera | Camera | Camera for aiming (so that the fov can be changed) |
| aimChangeSpeed |float  | Aiming speed (fov change speed) |
| vehicleRigidbodyRecoilForce | float | vehicle body recoil (this is what actually causes the carrier to move, not the same as the "kickback" in [Weapon](./Weapon.md), which is not the same thing as "Kickback" in [Weapon](./Weapon.md) |
