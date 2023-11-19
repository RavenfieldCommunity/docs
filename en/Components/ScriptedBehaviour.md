---
category: 
- Components
- Ravenscrpit
---
# ScriptedBehaviour
## Description

Instantiating custom Ravenscrpit scripts to game objects

## Usage

Attachment to the target game object

Refer [RFCreator Project](/cn/Tutorials/README.md)

## Comment

## Variables
| Name | Type | Description |
| ----------- | ----------- | ----------- |
| source | TextAsset | Ravenscrpit file |  
| behaviour | string | The name of the behavior to be used (can be left blank to allow automatic matching in case the file name matches the behavior name registered with the script) |  
| targets | class.NamedTarget[] | Target object to be used within the script (`Size`=quantity. Fill in `Size` first, then configure the target in `Element`, `name` = id to be defined for this target, `value` = target object) |  
