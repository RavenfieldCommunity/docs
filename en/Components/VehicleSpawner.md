---
category: 
- Components
- Map
---
# VehicleSpawner
## Description

Vehicle spawning Points

## Usage

Applied to an empty object, you need to add the Mesh Filter (you should choose Resource\Perview\Default.obj in RFTools), Mesh Renderer and material by yourself.

Or just use Vehicle Spawner.prefab in \Assets\Prefabs\Map Elements (recommended).

The object should be protected by [Capture Point](./CapturePoint.md), otherwise there is a chance of error when exporting the map.

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| spawnTime  | float | Generation interval of two carriers |  
| respawnType  | enum.RespawnType | When to regenerate the carrier (AfterDestroyed=After the previous one is destroyed, AfterMoved=After the previous one is driven away, Never=Never) |  
| typeToSpawn | enum.VehicleSpawnType | spawn type(Jeep, JeepMachineGun, Quad, Tank, AttackHelicopter, AttackPlane, Rhib, AttackBoat, BombPlane, TransportHelicopter, Apc) |  
| prefab | GameObject | Custom spawn vehicle Prefab (i.e. specify one individually, this option is not affected by game options) |  
| priority  | byte | Priority (role unknown) |  
| isRelevantPathfindingPointForBoats  | bool | is the Pathfinding Point of the boat (enable when the generated carrier is a Boat) |  
