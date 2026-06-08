---
category: 
- Components
- Map
---
# AvoidanceBox
## Description
Evasion boxes can be set up in a place where the bot won't pass through even if it goes in and leaves quickly (i.e. something like that NAV-MESH uncovered place)
## Usage
Add to an empty object

Or just use Avoidance Box.prefab within \Assets\Prefabs\Map Elements (recommended).

The volume of an object is the range of action

No need for other components (like Collision, Rigidbody, etc.)
## Comment

When the AvoidanceBox contains unused vehicles (especially those in the stronghold's protection zone), the vehicles may be prioritized over the AvoidanceBox

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| applyToAllTypes  | bool | Is it for all Bot |  
| type | [PathfindingBox](./PathfindingBox.md).Type | Which Bot is it for (Infantry=Infantry, Car=Vehicle, Boat=Boat) |  
| penalty  | uint | Penalty value (similar to the cost of walking on this path, but it seems that here no matter what (even if penalty=0) the Bot will consider the path too costly to walk on. Here 1000 = 1 in Unity? |  
| unwalkable  | bool | Is it non-walkable |  
