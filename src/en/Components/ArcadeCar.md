---
category: 
- Components
- Vehicle
---
# ArcadeCar

## Description
Derived from  [Vehicle](./Vehicle.md)

Vehicle with physical driving effects
## Usage
Refer [Vehicle](./Vehicle.md)

Please add the Rigidbody component yourself, or you will get an error!
## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| reverseTurnType | enum.ReverseTurnType | (Reverse Speed,Reverse Throttle,Never) |
| acceleration | float | acceleration |
| reverseAcceleration | float | Reverse acceleration |
| accelerationTipAmount | float | Accelerated tilt level |
| frictionTipAmount | float | Degree of brake tilt |
| topSpeed | float | Maximum speed |
| speedTurnTorque | float | Degree of steering by speed |
| baseTurnTorque | float | steering level |
| tankTurning | bool | Enable tank steering (steering in place) |
| slideDrag | float | Lateral resistance |
| brakeDrag | float | Brake Resistance |
| driftByAcceleration | bool | Accelerated drift (really didn't feel like it was that noticeable) |
| brakeAccelerationTriggerSpeed | float | Minimum trigger speed for brake drift |
| driftByBrake | bool | Enable brake-drift |
| brakeDriftMinSpeed | float | Brake Drift Minimum Speed |
| driftingSlip | float |  |
| driftDuration | float | Drift Duration |
| isAmphibious | bool | The vehicle is amphibious. |
| extraStability | float | Additional stability (affects center of gravity) |
| groundDrag | float | ground resistance |
| groundAngularDrag | float | ground angular resistance |
| groundSteeringDrag | float | Ground steering resistance |
| airDrag | float | atmospheric drag |
| airAngularDrag | float | Angular resistance of air (acting on angular velocity?) |
| downforcePerSpeed | float | Downward force that varies by velocity (velocity, directional, not speed) |
| suspensionShiftSounds | [SoundBank](./SoundBank.md) | Suspended sound effects |
| brakeSounds | [SoundBank](./SoundBank.md) | Brake Sound |
