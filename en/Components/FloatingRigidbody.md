---
category: 
- Components
- Vehicle
---
# FloatingRigidbody

## Description

In the game water（[WaterLevel](./WaterLevel.md) and [WaterVolume](./WaterVolume.md)'s floating rigid body

For non-[Boat](/cn/Components/Boat.md) vehicle(like APC).

## Usage
This component comes with a bound Rigidbody component, no need to add it manually.

Refer [Vehicle](/cn/Components/Vehicle.md), add to the topmost object of the vehicle object
## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| floatingSamplers | Transform[] | Sampling points (rigid body datums, empty objects, it is recommended to follow the official setting of four to keep the vehicle balanced) |
| floatAcceleration | float | Floating acceleration |
| floatDepth | float | floating depth |
| waterDrag | float | Resistance in water |
| waterAngularDrag | float | Resistance to steering in water |
