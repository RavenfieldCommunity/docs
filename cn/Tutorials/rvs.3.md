---
category: 
- 教程
---
# rvs.3 反盗版

## 前言
此文档将带你认识反盗版（Anti-piracy，AP）的原理，理解MOD反盗版系统的构造

## 0.0 什么时候使用AP机制？

在您为您的MOD付出很大心血时，不想被盗版玩家无情滥用

遏制盗版玩家的猖狂（毕竟你游盗版玩家真的多又恶心。不包括会在将来补票的的玩家）

不建议滥用AP机制

## 1.0 原理
自Ravenfield在EA20（？）去除UFO反盗版机制（一大群UFO在头顶飞击杀玩家）后，相当（？）一部分MODDER开始转入自开发反盗版机制

按大多数MOD采用的方案，都是用判断`Player.actor.name`是否等于"`Unknown Player`"？来确定游戏是否为盗版

使用这原理的缘由是因为这是游戏提供的唯一一个可用Api（毕竟你游限制了外来C#的导入，C#使用SteamworksAPI进行盗版验证会更加地准确）

即使是在正版环境，如果Steam不在后台，`Player.actor.name`仍等于"`Unknown Player`"，这是一个问题

此处仍可以通过某种方法进行规避

而且当Steam在后台时（即正版的运行环境）时，Steamworks API会传入用户名到游戏来填充`Player.actor.name`，即使Steam用户名未设置似乎也不会为"`Unknown Player`"？

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
Player.actor.Freeze() --阻止玩家移动

Player.actor.health = 0 --玩家血量清零

SpawnUi.Open()  --打开武器选择界面来阻止玩家游戏

Player.actor.activeWeapon.LockWeapon()  --锁定玩家武器

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

不推荐使用jumpscare（极度不推荐）等方式来恐吓盗版玩家

适度就好

## 2.1 混淆机制

防止盗版玩家通过分批测试找到带AP机制的MOD

此规避机制包括延时&随机启动AP

## 3.0 应用

在介绍完原理与操作后，相信您应该可以自行构建一个反盗版脚本了

祝您好运！（〃｀ 3′〃）

（实际上你作为modder可以直接进国内的modding要AP的成品Prefab hhh）
