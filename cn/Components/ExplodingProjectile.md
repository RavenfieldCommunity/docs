# ExplodingProjectile
## 描述

爆炸型Projectile

## 用法

参考[Projectile](./Projectile.md)

建议配置一个Audio Source组件放置子弹飞行音效以获得更好的游戏体验

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| smokeTime  | float | 此Projectile及子层级下挂的Particle System组的播放时间 |  
| renderers | Renderer[] | Projectile模型的Renderer |  
| trailParticles | ParticleSystem |  |  
| impactParticles | ParticleSystem | 爆炸粒子 |  
| activateOnExplosion | GameObject | 爆炸时激活的物体 |  
| deactivateAgainTime  | float |  |  
| damage  | float | 爆炸伤害 |  
| balanceDamage  | float | 冲击力（影响玩家平衡） |  
| force  | float |  |  
| damageRange  | float | 伤害半径 |  
| damageFalloff | AnimationCurve | 伤害曲线（距离） |  
| balanceRange  | float | 冲击半径 |  
| balanceFalloff | AnimationCurve | 冲击曲线（距离） |  
