---
category: 
- Components
- Map
---
# PathfindingLink
## Description
Derived from the GraphModifier

A forced pathfinder allows a place that is considered unwalkable by the NAV system but where walking can be forced for the AI to consider it walkable (seems like a bit of a messy way to put it), with a higher priority than [Avoidance Box](./AvoidanceBox.md)
## Usage

Add to an empty object as a starting point

Or just use the Pathfinding Link.prefab of \Assets\Prefabs\Map Elements\Must Have\ (recommended).

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| end | Transform | End point (empty object) |  
| costFactor  | float | Cost to Bot of going through this path (affects priority) |  
| oneWay  | bool | It's a one-way street. |  
| type | [PathfindingBox](./PathfindingBox.md).Type | type (i.e. who this pathfinder is used to qualify. Infantry=Infantry, Car=Land Carrier, Boat=Water Carrier) |  
