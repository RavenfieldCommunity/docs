---
category: 
- Components
- Vehicle
---
# Boat

## Description
Derived from [Vehicle](./Vehicle.md)

Boat class, foundation for building boats
## Usage
Refer [Vehicle](./Vehicle.md)
## Comment

## Variables

| Name | Type | Description |
| ----------- | ----------- | ----------- |
| floatAcceleration | float | upward acceleration |
| floatDepth | float | Depth of onset of uplift |
| speed | float | velocity |
| reverseMultiplier | float | Reverse speed multiplier |
| turnSpeed | float | turning speed |
| stability | float | Stability (which should be the center of gravity of the impact) |
| floatingSamplers | Transform[] | upwelling sampler(Refer [FloatingRigidbody](./FloatingRigidbody.md)) |
| requireDeepWater | bool | Requires deep water (unknown effect, could be that it causes large ships to not be able to generate on dives or affects bot behavior, untested) |
