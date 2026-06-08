---
category: 
- Components
- Weapon
---
# WeaponCotentMod
## Description

The Weapon Export Configuration component, which can only be exported by Unity and imported into the game if it is applied to a carrier prefab (containing [Weapon](./Weapon.md) or its derivatives) can only be exported by Unity and imported by the game.

## Usage

Just apply it to an empty object prefab or to the weapon itself.

To configure each weapon, first set the number of weapons to be exported in `Sizes`.

Then you can check the toolbar to export the mod.

## Comment

Automatic assignment mechanism for the game's default TAG tags:
| TAG | Name | Mechanism |
|------|------|------|
| CLOSE QUARTERS | CLOSE QUARTERS weapons | `slot`=Primary, weapon's `projectilesPerShot`>1 |
| ASSAULT | assault weapon | `slot`=Primary, weapon's `auto`=true|
| MARKSMAN | long-range weapon | `slot`=Primary and does not meet the latter determination of CLOSE QUARTERS and ASSAULT |
| EQUIPMENT | EQUIPMENT | `slot`=Gear或LargeGear，weapon's `projectilesPerShot`=null or neither of them meets the latter determination of GRENADES and ANTI ARMOR.  |
| GRENADES | GRENADES | `slot`=Gear或LargeGear，weapon's `projectiles` is [GrenadeProjectile](./GrenadeProjectile.md) |
| ANTI ARMOR | Anti-armor weapons | `slot`=Gear或LargeGear，weapon's `projectiles` is [ExplodingProjectile](./ExplodingProjectile.md) or its derivatives |
| UNTAGGED | Uncategorized | None of the above determinations |

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| name  | string | Weapon name (meaning not equal to the weapon's `displayName`) |  
| prefab | GameObject | Prefab for weapons |  
| slot | enum.WeaponSlot | Weapon Slot Type (Primary=Primary Weapon, Secondary Parent Weapon, Gear One Gear, LargeGear=Two Gear) |  
| usableByAi  | bool | This weapon is Bot-ready. |  
| usableByAiAllowOverride  | bool | This weapon Bot available (priority high) |  
| type | enum.LoadoutType | Weapon Type (Normal=Normal, Stealth=Silenced, AntiArmor=Anti-Armor, Repair=Carrier Repair Tool, ResupplyAmmo=Ammunition Resupply Kit, ResupplyHealth=Health Resupply Kit) |  
| sortPriority | int |  |  
| tags | string[] | Label (`Size` = quantity. Fill in the number of tags first, then enter the text. (This will override the default TAG assigned by the game) |  