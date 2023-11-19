---
category: 
- Components
- Weapon
---
# SoundBank
## Description

AudioCilp集

Used for in-game Animations events to play the specified AudioCilp according to the incoming intType parameter.

Scenarios such as single/multi-shot weapons playing a specific sound effect at a specific animation time.（Refer [RFCreator Project](/cn/Tutorials/wpn.1.md)）

Refer [Unity docs' "Animation Event"](https://docs.unity3d.com/2020.3/Documentation/Manual/script-AnimationWindowEvent.html)

## Usage

add to a weapon object

AnimationEvent has two available functions, PlayRandom and PlaySoundBank.

PlayRandom has no parameters available and is used to play a random AudioClip from a clip[].

PlaySoundBank needs to pass an int parameter as index ("serial number", the * in "Element \*" at the clips is the index of the AudioClip), which is used to play the AudioClip corresponding to the index in the `clips[]` according to the index.

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| clips | AudioClip[] | AudioClip to be used |  
| audioSource | AudioSource | AudioSource object for AudioCilp playback |  
