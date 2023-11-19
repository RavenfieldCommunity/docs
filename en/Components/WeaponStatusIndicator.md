---
category: 
- Components
- Vehicle
---
# WeaponStatusIndicator
## Description
Used to monitor the values of target weapons in real time during gameplay and apply them to UI objects.

## Usage

recommended to be mounted on top of the UI parent object

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| weapon | [Weapon](./Weapon.md) | target weapon |  
| ignoreUnholster  | bool | Whether to monitor weapon switching behavior |  
| ignoreCooldown  | bool | Whether to monitor the overheating behavior of weapons |  
| textIndicator | Text | Text object showing weapon status |  
| readyText  | string | Text to be displayed on readiness |  
| notReadyText  | string | Text displayed when not ready |  
| reloadText  | string | Text shown in the loading |  
| tintTargets | Graphic[] |  |  
| readyColor | Color |  |  
| notReadyColor | Color |  |  
| readyObject | GameObject | Objects enabled on readiness |  
| notReadyObject | GameObject | Objects enabled when not ready |  
