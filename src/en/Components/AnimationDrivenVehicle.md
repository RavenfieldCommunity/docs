---
category: 
- Components
- Vehicle
---
# AnimationDrivenVehicle

## Description
Derived from [Vehicle](./Vehicle.md)

Custom animated vehicle
## Usage
A CharacterController component is required, otherwise the carrier cannot be operated

Refer [Vehicle](./Vehicle.md)
## Comment
It is recommended that use the [InheritDeltaRotation](./InheritDeltaRotation.md) and [LookAtCamera](./LookAtCamera.md) with this component

Note the Animator component applyRootMotion option, enable it on demand.Refer [Unity官方文档](https://docs.unity.cn/cn/2020.3/Manual/class-Animator.html)

The carrier will only move when the CharacterController's collision box collides with the ground, so please adjust the CharacterController's collision box size accordingly.

Parameters of the AnimatorController：
| Parameters Name | Type | Description |
|------|------|------|
| input forward | float | Axis virtual axis (Vertical) for forward and backward operations |
| input right | float | Axis virtual axis for left and right operation (Horizontal) |
| moving | bool | True when the carrier is moving (XY axis only) |
| sprint | bool | True when the player presses the "Sprint" button. |
| jump | bool | True when the player presses the "Jump" button. |
| crouch | bool | True when the player presses the "Crouch" button. |
| lean | float | True when the player presses the "Side Head" button. |
| touching ground | bool | True when the vehicle's collision body touches the ground |

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| groundCheckers | GroundChecker[] | Ground testing |
| inputSmoothness | int | Virtual Axis Input Smoothness |
| checker | Transform |  |
| rayLength | float  | Light length (supposed to act on groundChecker, but suspected to be deprecated) |
