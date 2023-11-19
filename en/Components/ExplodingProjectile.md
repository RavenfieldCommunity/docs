---
category: 
- Components
- Weapon
---
# ExplodingProjectile
## Description

Explosive Projectile

## Usage

Refer [Projectile](./Projectile.md)

It is recommended to configure an Audio Source component to place bullet flight sound effects for a better gameplay experience.

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| smokeTime  | float | The playback time of the Particle System group under this Projectile and sub-levels. |  
| renderers | Renderer[] | Renderer for Projectile models |  
| trailParticles | ParticleSystem |  |  
| impactParticles | ParticleSystem | explosion of particles |  
| activateOnExplosion | GameObject | Objects activated at the time of the explosion |  
| deactivateAgainTime  | float |  |  
| damage  | float | blast damage |  
| balanceDamage  | float | Impact (affects player balance) |  
| force  | float |  |  
| damageRange  | float | radius of damage |  
| damageFalloff | AnimationCurve | Damage curve (distance) |  
| balanceRange  | float | impact radius |  
| balanceFalloff | AnimationCurve | Shock curve (distance) |  
