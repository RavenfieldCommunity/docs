---
category: 
- Components
- Map
---
# PathfindingBox
## Description

Pathfinder box to delineate the bots' movement space across the map

## Usage

Applied to an empty object

Volume of the object is the range (make sure to cover the water when using it for watercraft pathfinding)

No other add-ons (collision, rigidbody, etc.) are needed.

Or just use the prefabs in \Assets\Prefabs\Map Elements\Must Have\Pathfinding (recommended, different names correspond to different types of pathfinding boxes, you can change them below, no need to get hung up).

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| type | enum.Type | Pathfinder Box Type (i.e. who this pathfinder box is used to qualify. Infantry=Infantry, Car=Land vahicle, Boat=Water vehicle) |  
| tiled  | bool | Inside this PathfindingBox is a flat surface (which speeds up the pathfinding scanning time and may introduce some unwanted obstacles. Disabling this item ensures that NAV-MESH fits perfectly in the PathfindingBox. it is recommended to enable it) |  
| automaticCellSize  | bool | Enable automatic path scanning fineness (smaller and finer, longer scanning time) |  
| cellSize  | float | Scanning fineness |  
| characterRadius  | float | Bot's radius size (how much space a Bot takes up when walking, distance from MAV-MESH, places that are not fully contained will be marked as unwalkable) |  
| climbHeight  | float | Maximum relative slope size (in degrees) |  
| coverPointSpacing | float | Distance to search coverage points (for large maps, you can increase this value to around 1 to speed up scanning pathfinding time)  |  
| blockers | [PathfindingBox](./PathfindingBox.md)[] | Ignored Scanned Areas (if another PathfindingBox is to be used to scan a specific area, the NAV-MESH generation of this PathfindingBox can be blocked by adding another box as a blocker) |  
