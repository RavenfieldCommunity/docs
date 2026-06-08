---
category: 
- Components
- Map
---
# SpawnPointNeighborManager
## Description

Stronghold pathfinding system, used to help bot plan attack routes in the game

## Usage

Apply to an empty object, fill in the number of routes at `Size`, and then configure each route in each `Element *`.

Or just use Spawn Point Neighbor Manager.prefab in \Assets\Prefabs\Map Elements (recommended).

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| a | [SpawnPoint](./SpawnPoint.md) | Point A |  
| b | [SpawnPoint](./SpawnPoint.md) | Point B |  
| landConnection  | bool | Land transportation is possible between the AB and AB strongholds. |  
| waterConnection  | bool | Waterways are available between the AB and AB strongholds |  
| oneWay  | bool | Is a one-way route (A => B) |  
