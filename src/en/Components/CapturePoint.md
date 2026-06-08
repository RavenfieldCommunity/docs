---
category: 
- Components
- Map
---
# CapturePoint
## Description
Derived from [SpawnPoint](./SpawnPoint.md)

Map Positions

## Usage

Applied to a 3D Object, the material can be modified.

Or just use Capture Point.prefab in \Assets\Prefabs\Map Elements\Must Have (recommended).

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| contestedSpawnpointContainer | Transform | Sub-birthpoint register. (Determines where the Bot and player will be born, and is used when this stronghold is being contested by two sets of armies. Empty objects added to this register within empty objects are considered birth points) |  
| captureRange  | float | Radius of protection of a stronghold |  
| captureFloor  | float | Depth of the protected area of the stronghold |  
| captureCeiling  | float | Height of the protected area of the stronghold |  
| flagParent | Transform | Flag objects |  
