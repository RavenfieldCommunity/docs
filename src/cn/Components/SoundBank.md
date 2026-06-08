---
category: 
- 组件
- 武器
---
# SoundBank
## 描述

AudioCilp集

用于在游戏中的Animations事件按传入的int类型参数来播放指定的AudioCilp

使用场景譬如单/多发装填武器特定动画时间点播放特定音效（参考[RFCreator Project](/cn/Tutorials/wpn.1.md)）

详细参阅[Unity文档的"Animation Event"](https://docs.unity.cn/cn/2020.3/Manual/script-AnimationWindowEvent.html)

## 用法

挂载在武器物体上

AnimationEvent具有PlayRandom与PlaySoundBank两个可用Function

PlayRandom没有可用参数，用于随机播放一个clips[]中的AudioClip

PlaySoundBank需要传入一个int参数作为index（"序号"，clips处的"Element \*"的*就是这个AudioClip的index），用于按index播放clips[]中index对应的AudioClip

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| clips | AudioClip[] | 要使用的AudioClip |  
| audioSource | AudioSource | 用于播放AudioCilp的AudioSource物体 |  
