---
category: 
- Components
- Vehicle
---
# AimTransform
## Description

When the weapon of the listening seat is in aiming or`userSeat` is empty，The position and rotation properties of the target object are gradually transformed into the position and rotation properties of the `aimTransform` object.

Otherwise, the gradual transform is the position and rotation of `idleTransform`.

## Usage

add to target object

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| idleTransform | Transform | Refer to the "Description" field. |  
| aimTransform | Transform |Refer to the "Description" field. |  
| changeSpeed  | float | Transformation rate per second |  
| userSeat | Seat | Seats for listening |  
