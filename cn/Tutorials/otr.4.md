# otr.4 反盗版

## 前言
此文档将带你认识反盗版（Anti-piracy，AP）的原理，理解MOD反盗版系统的构造

## 0.0 什么时候使用AP机制？

在您为您的MOD付出很大心血时，不想被盗版玩家无情盗取

不建议滥用AP机制

## 1.0 原理
按大多数MOD采用的方案，都是用判断Player.actor.name是否等于"Unknown Player"？来确定游戏是否为盗版

使用这原理的缘由是因为这是游戏提供的唯一一个可用Api（毕竟你游限制了外来C#的导入，使用SteamworksAPI进行盗版验证会更加地准确，此处仍可以通过***dll进行规避

而且当Steam在后台时（即正版的运行环境）时，SteamworksAPI会传入用户名到游戏来填充Player.actor.name，即使Steam用户名未设置似乎也不会为"Unknown Player"？

有了原理，我们就可以继续添加触发操作了

```lua
behaviour("APSystem")

local enableAP = false


function APSystem:Start()
    if (Player.actor.name == "Unknown Player" and GameManager.isTestingContentMod != true) then --当...且游戏不处于测试模式时...
	   self.enableAP = ture
	end
end

function APSystem:Update()
    if self.enableAP == ture then
    	--放入你的触发操作
	end
end
```

## 2.0 触发操作
当到这一步时，你可以做的操作很多

如阻止玩家进行游戏（血量清零、删除地图场景内所有物体）：
```lua
Player.MoveActor(Vector3(0,0,0)) --阻止玩家移动

Player.actor.health = 0 --玩家血量清零

SpawnUi.Open()  --打开武器选择界面来阻止玩家游戏

Player.activeWeapon.LockWeapon()  --锁定玩家武器

Time.timeScale = 1 --阻止玩家暂停游戏

--删除游戏内物体，但这会直接卡崩游戏
gameObjects = GameObject.FindObjectsOfType(GameObject)
for x, y in pairs(gameObjects) do  
    GameObject.Destroy(y)
end 

--替换游戏内的所有Text
gameObjects = GameObject.FindObjectsOfType(Text)
for x, y in pairs(gameObjects) do
    y.text = "TEST"
end

--播放特定音频（假设音频的AudioSource在apAS这个变量）
apAS.SetOutputAudioMixer(AudioMixer.FirstPerson)  --将AS组件的Output设置为玩家的
```

不推荐使用jumpscare（极度不推荐）、强制传教等方式来恐吓盗版玩家

毕竟做人留一线，日后好相见

自己也有可能被自己的AP机制吓到

做人不要做太死

适度就好


## 3.0 应用

在介绍完原理与操作后，相信您应该可以自行构建一个反盗版脚本了

祝您好运！（〃｀ 3′〃）
