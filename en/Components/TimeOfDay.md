---
category: 
- Components
- Map
---
# TimeOfDay
## Description

Environmental properties for controlling the map during the day and at night (Lighting, Atmosphere atmospheric scattering, Ambient colors, Skybox)

## Usage

Apply to empty objects

Place the Light object used during the day inside the application object of this component and rename it to "Day", do the same for the night object and rename it to "Night".

Alternatively, you can use the Time Of Day.prefab in \Assets\Prefabs\Map Elements\Must Haves (recommended).

For a large part of the options of this component to work, you need to configure the map scene environment in the [Lighting Window](https://docs.unity3d.com/2020.3/Documentation/Manual/lighting-window.html) first.

Color can only be changed when Lighting window -> Environment tab -> Environment Lighting -> Source property is Gradient.

Modify fog properties in the component when Lighting window -> Environment tab -> Other Settings -> Fog property is enabled.

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- | 
| nightAtmosphere | Atmosphere | night's Atmosphere |  
| atmosphere | Atmosphere | day's Atmosphere |  
| testNight  | bool | Testing the night (previewing the night effect in the Editor's playback mode) |  
| sky | Color | sky color |  
| equator | Color | The Color of the Horizon |  
| ground | Color | floor color |  
| fogDensity | float | Fog density |  
| fog | Color | Fog color (available when fog is enabled) |  
| skyboxMaterial | Material | Night Sky Box Material |  
