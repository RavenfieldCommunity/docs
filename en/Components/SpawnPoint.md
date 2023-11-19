---
category: 
- Components
- Map
---
# SpawnPoint
## Description

The base class of [CapturePoint](./CapturePoint.md) and [VehicleSpawner](./VehicleSpawner.md),this component is generally not used

## Usage

Instead of using this component, its subcomponents are usually used.

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |  
| defaultOwner  | enum.Team | Initial default for all teams (Neutral=to be occupied, Blue=Eagle team, Red=Raven team) |  
| protectRange  | float | Bot's radius of movement within the point (when defending this point) |  
| defenseStrategy  | enum.DefenseStrategy | Defense Policy (Default=Default, NeverAutoDefend=No AutoDefend, AlwaysAutoDefend=AutoDefend) |  
| vehicleFilter | class.VehicleFilter | What Type of vehicle can be used to reach this point (landcraft=land warfare, amphibious=amphibious, watercraft=water warfare, air=helicopter, airFastmover=airplane, allowOnlyFromFrontlineSpawnUsage) |  
| shortName  | string | Point abbreviation name |  
| spawnpointContainer | Transform | Birth point register. (Determines where the Bot and the player will be born. Empty objects added within empty objects in this register are considered birth points) |  
| isRelevantPathfindingPoint  | bool |  |  
| captureAnimation | class.CaptureAnimation |  |  
| helicopterLandingZones | Transform[] |  |  
| animators | Animation[] |  |  
| neutralCapturedAnimation | string |  |  
| blueCapturedAnimation | string |  |  
| redCapturedAnimation | string |  |  
