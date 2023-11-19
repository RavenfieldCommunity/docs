---
category: 
- Components
- Vehicle
---
# Airplane
## Description
Derived from [Vehicle](./Vehicle.md)

Airplane class, building the foundation of an airplane
## Usage
Refer [Vehicle](./Vehicle.md)

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| liftVsAngleOfAttack | AnimationCurve | Lift and angle of approach |  
| controlVsAngleOfAttack | AnimationCurve |  |  
| thruster | Transform | Propellers (empty objects that serve as aircraft power centers) |  
| baseLift  | float | lift |  
| acceleration  | float | acceleration |  
| accelerationThrottleUp  | float | acceleration of the throttle |  
| accelerationThrottleDown  | float |  |  
| autoPitchTorqueGain  | float | Auto Pitch Torque Gain |  
| perpendicularDrag  | float | vertical resistance |  
| pitchSensitivity  | float | Tilt operation sensitivity |  
| yawSensitivity  | float | Yaw operation sensitivity |  
| rollSensitivity  | float |  |  
| liftGainTime  | float |  |  
| controlWhenBurning  | float | Aircraft roll sensitivity |  
| landingGearActivationObjects | GameObject[] | Landing gear objects |  
| throttleEngineAudioPitchControl  | float |  |  
| flightAltitudeMultiplier  | float |  |  
