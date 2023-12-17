---
category: 
- Components
- Map
---
# TurretSpawner
## Description

Turret Generation Points

## Usage

Applied to an empty object, you need to add the Mesh Filter (you should choose Resource\Perview\Default.obj in RFTools), Mesh Renderer and material by yourself.

Or directly use Turret Spawner.prefab in \Assets\Prefabs\Map Elements (recommended).

The object should be placed in the [CapturePoint](./CapturePoint.md), otherwise there is a chance of an error when exporting the map.

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| typeToSpawn | enum.TurretSpawnType | spawn type(MachineGun, AntiTank, AntiAir) |  
| prefab | GameObject | Custom Generated Turret Prefab (i.e. specify one individually, this option is not affected by game options) |  
| priority  | byte | Priority (role unknown) |  
