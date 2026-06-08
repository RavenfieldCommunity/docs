---
category: 
- Components
- Vehicle
---
# Mortar

## Description
Derived from [MountedWeapon](./MountedWeapon.md)

A weapon used as a mortar, characterized by automatic handling of the point of impact collimator.

## Usage

## Comment

Ballistics need to be configured in [Rocket](./Rocket.md)?

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| maxRange | float | Maximum Attack Range |
| minRange | float | Minimum Attack Range |
| defaultRange | float| Default drop point range |
| rangeChangeSpeed | float | range transformation unit |
| trajectoryHeight | float | trajectory altitude |
| targetSpreadRange | float | Diffusivity (the larger the less accurate) |
| aimIndicator | GameObject | Drop point marker (an empty object with a Projector component, which should be under the weapon sub-level) |
