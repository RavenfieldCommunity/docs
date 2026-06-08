---
category: 
- Components
- Map
---
# Ladder
## Description
Derived from [Pathfinding](./PathfindingLink.md)

Ladder class
## Usage
Apply to an empty object, the model under which the ladder is placed (yes, you need to apply the model manually)

It is not recommended to apply components directly on the model, the scaling of the model will affect the scaling of the character model

## Comment

Since EA28Beta, players can no longer walk through walls via ladders

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| height  | float | ladder altitude |  
| topExitDirection  | Vector3 | Position of the relative departure point when reaching the top of the ladder and leaving the ladder |  
