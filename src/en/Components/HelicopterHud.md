---
category: 
- Components
- Vehicle
---
# HelicopterHud
## Description

Used to monitor the values of the helicopter in real time and apply them to UI objects in the game.

## Usage

Add anywhere, recommended to be mounted on top of the UI parent object
## Comment

If no helicopter is specified, the component will automatically look for the helicopter component of the bound parent.

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| helicopter | [Helicopter](./Helicopter.md) | target surveillance helicopter |  
| autoHover | GameObject.[PlaneHud](./PlaneHud.md).Indicator | Autohover state (ready=UI object shown when enabled, waiting=UI object shown when disabled) |  
| countermeasureIndicator | GameObject.[PlaneHud](./PlaneHud.md).Indicator | Autohover state (ready=UI object shown when enabled, waiting=UI object shown when disabled) |  
| horizontalSpeedText | Text | Text object showing horizontal speed (purely numeric, will overwrite the original text) |  
| verticalSpeedText | Text | Text object showing vertical velocity (purely numeric, will overwrite the original text) |  
| altitudeText | Text | Text object showing elevation (purely numeric, will overwrite the original text) |  
