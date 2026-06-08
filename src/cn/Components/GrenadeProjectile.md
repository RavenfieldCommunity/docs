---
category: 
- 组件
- 武器
---
# GrenadeProjectile
## 描述
手榴弹Projectile

从[Projectile](./Projectile.md)类派生
## 用法
参考[Projectile](./Projectile.md)
## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| renderers | Renderer[] | projectlie下的模型模型 |  
| radius  | float | 手榴弹大小半径 |  
| bounciness  | float | 碰撞反弹系数 |  
| bounceDrag  | float | 空气阻力系数（影响反弹后的运动速度衰减） |  
| cleanupTime  | float | 手榴弹的lifetime |  
| explosionParticles | ParticleSystem | 爆炸粒子 |  
| activateOnExplosion | GameObject | 爆炸时激活的物体 |  
| deactivateAgainTime  | float | 爆炸后多少秒禁用`activateOnExplosion`的物体 |  
| onlyDetonateOnGround  | bool | 手榴弹是否仅在接触地面时引爆 |  
| groundDetonationSpeedThreshold  | float | 手榴弹的速度低于多少时引爆 |  
