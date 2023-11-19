---
category: 
- Components
- Vehicle
---
# PlaneHud
## Description

Used to monitor the values of the aircraft in real time in the game and apply them to UI objects.

## Usage

Add anywhere, recommended to be mounted on top of the UI parent object

## Comment

If no helicopter is specified, the component will automatically look for the airplane component of the bound parent.

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| plane | [Airplane](./Airplane.md) | Target Monitoring Aircraft |  
| gearIndicator | GameObject.Indicator | Landing gear status (ready = UI object shown when ready, waiting = UI object shown when busy) |  
| airbrakeIndicator | GameObject.Indicator | Decelerator state (trigger ready when the aircraft's vector.y is less than -0.3, otherwise waiting. ready = UI object shown when ready, waiting = UI object shown when busy) |  
| countermeasureIndicator | GameObject.Indicator | Thermal booby trap status (ready = UI object shown when ready, waiting = UI object shown when loaded) |  
| speedLabel | Text | Text object showing speed (purely numeric, would overwrite the original text) |  
| altitudeLabel | Text | Text object showing elevation (purely numeric, will overwrite the original text) |  
