---
category: 
- Components
- Ravenscrpit
---
# MutatorCotentMod
## Description

Mutator exports a configuration component that can only be exported by Unity and imported by the game if it is applied to a prefab.

## Usage

Just apply it to an empty object prefab or to the weapon itself.

Configure each Mutator by setting the number of Mutators to be exported in `Size`.

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| name  | string | Mutator name |  
| description  | string | Mutator's description |  
| menuImage | Texture2D | Mutator's Logo（Recommended ratio 16:10） |  
| mutatorPrefab | GameObject | Mutator's prefab |  
| labels | class.configuration.MutatorConfigurationLabel[] | Text to be displayed in the configuration page (`Size`=quantity. Fill in `Size` first, then configure labels in `Element`, `id` = id to be defined for this label, `displayName` = text to be displayed, `orderPriority` = priority of displaying this item, i.e., sorting) |  
| integers | class.configuration.IntegerConfigurationField[] | The integers tab available for configuration in the configuration page (`Size`=quantity. Fill in `Size` first, then configure the integers in `Element`, `id` = id to be defined for this integer, `displayName` = text to be displayed for this integer, `orderPriority` = priority of displaying this item i.e. ordering, `value`=default value) |  
| floats | class.configuration.FloatConfigurationField[] | Floats tab available for configuration in the configuration page (`Size`=quantity. Fill in `Size` first, then configure floats in `Element`, `id` = id to be defined for this float, `displayName` = text to be displayed for this float, `orderPriority` = priority to be displayed for this item i.e. ordering, value = default value) |  
| ranges | class.configuration.RangeConfigurationField[] | In the [Sliders](https://docs.unity3d.com/2020.3/Documentation/Manual/script-Slider.html) tab available for configuration on the configuration page (`Size`=quantity. Fill in `Size` first, then configure ranges in `Element`, `id`=id to be defined for this range, `displayName`=text to be displayed for this range, `orderPriority`=priority of displaying this item i.e. ordering, `value.value`=default value, ` value.value`=default value, `value.min`=minimum value corresponding to the leftmost part of the slider, `value.max`=maximum value corresponding to the rightmost part of the slider, `wholeNumbers`=whether or not to constrain the slider to integer values) |  
| strings | class.configuration.StringConfigurationField[] | The strings tab available for configuration in the configuration page (`Size`=quantity. Fill in `Size` first, then configure strings in `Element`, `id` = id to be defined for this string, `displayName` = text to be displayed for this string, `orderPriority` = priority of displaying this item i.e. sorting, `value` = default value) |
| bools | class.configuration.BoolConfigurationField[] | The bools tab available for configuration in the configuration page (`Size`=quantity. Fill in `Size` first, then configure the bools in `Element`, `id` = id to be defined for this bool, `displayName` = text to be displayed for this bool, `orderPriority` = priority of displaying this item i.e. sorting, `value` = default value) |  
| dropdowns | class.configuration.DropdownConfigurationField[] | The dropdown list tab available for configuration on the configuration page (`Size`=Quantity. Fill in `Size` first, then configure the dropdowns in `Element`, `id` = the id to be defined for this dropdown, `displayName` = the text to be displayed for this dropdown, `orderPriority` = the priority i.e. ordering for displaying this item, `value.index` = the serial number of the default value, `value.lables`. `Size`=number of tabs, `value.lables`[*]=option text) |   
