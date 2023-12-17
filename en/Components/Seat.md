---
category: 
- Components
- Vehicle
---
# Seat

## Description

Basic seating category of the carrier

## Usage

Apply to an empty object, the model under which the seat is placed (yes, you need to apply the model manually)

It is not recommended to apply components directly to the model, as the scaling of the model will affect the scaling of the character model.

If the object to be applied has a collision volume, you can optionally add a BoxCollider component along with it.

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| animation | enum.SitAnimation | Movement of the person in the seat (Chair=sitting down, Quad=driving a vehicle, Standing=standing) |
| type | enum.Type | Seat Type (FreelookUnarmed, LockedAllowFreelookUnarmed, AlwaysLockedUnarmed=Locked view with the weapon in the character's equipment column, FreelookArmed=Allowed to use the weapon in the character's equipment column) |
| enclosed | bool | Inside the carrier (to ensure that the character is not jolted out of his seat by balanceDamage damage) |
| enclosedDamagedByDirectFire | bool | Unprotected in carrier (works with enclosed to determine if splash damage will be dealt)） |
| soundMuffle | enum.SoundMuffle | （ Auto, On, Off ） |
| allowLean | bool | Side head allowed |
| allowUnderwater | bool | Allowed underwater |
| exitOffset | Vector3 | Displacement from the vehicle |
| weapons | [MountedWeapon](./MountedWeapon.md)[] | Weapons for this seat |
| handTargetL | Transform | Left hand placement position (empty object. Leave empty and it will not be shown) |
| handTargetR | Transform | Right hand placement position (empty object. (Leave empty and it will not be shown) |
| camera | Camera | First person camera (need to keep Camera component disabled) |
| thirdPersonCamera | Camera | Third person camera (need to keep Camera component disabled) |
| hud | GameObject | Heads up display HUB (Canvas of this HUB to be bound to the camera) |
| maxOccupantBalance | float |  |
