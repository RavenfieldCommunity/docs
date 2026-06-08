---
category: 
- Components
- Map
---
# PathfindingRelevantPoint
## Description

Associated Pathfinding Points

These points are used to determine which parts of the navigation grid generated from [PathfindingBox](./PathfindingBox.md) to determine which parts of the navigation mesh generated from [PathfindingBox](./PathfindingBox.md.md) are valid.

PathfindingRelevantPoint will automatically find the nearest NAV-MESH surface within 20 meters and mark that surface as a valid path!

## Usage

Apply to an empty object

Or just use the Relevant Pathfinding Point.prefab of \Assets\Prefabs\Map Elements\Must Have\Pathfinding\(recommended).

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| type | enum.Type | type targeted (Ground=Ground, Water=Water) |