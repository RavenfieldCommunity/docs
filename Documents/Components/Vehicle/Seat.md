# Seat

| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| animation | enum.SitAnimation | 座椅上的人的动作 |
| type | enum.Type | 座椅类型 |
| enclosed | bool | 载具内 |
| enclosedDamagedByDirectFire | bool | 载具内不受保护 |
| soundMuffle | enum.SoundMuffle | 混响 |
| allowLean | bool | 允许侧头 |
| allowUnderwater | bool | 允许在水下 |
| exitOffset | Vector3 | 下车位移 |
| weapons | MountedWeapon[] | 武器 |
| handTargetL | Transform | 左手目标位置 |
| handTargetR | Transform | 右手目标位置 |
| camera | Camera | 第一人称摄像机 |
| thirdPersonCamera | Camera | 第三人称摄像机 |
| hud | GameObject | 抬头显示 |
| maxOccupantBalance | float | 未知 |
