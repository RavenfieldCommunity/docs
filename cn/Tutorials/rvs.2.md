---
category: 
- 教程
---
# rvs.2 Mutators
## 前言

此文档将一步步引导你开发一个简单的Mutators，带您理解Mutators的基本构造

## 0.0 想！
现在我们先想一下我们的Mutators有什么功能

例如我们本次的示例Mutators简单血量回复，他应该有：
- 基本的血量回复，每次修复35%（可修改）
- 有冷却时间（可修改，最低为60s）
- 防止血量回复后健康超过最大值
- （次要）加入UI，显示修复状态与健康

然后我们再简单想一下脚本的运行逻辑与可以供玩家在游戏中调整的数值，方便实际敲代码(可以跳过)

在本实例中，公开的可以供玩家在游戏中调整的数值：血量回复比例、冷却时间、键位

现在我们可以正式开始了!

## 1.0 Unity内简单配置
在打代码之前，我们先在Unity配置一下Mutators的预制件的Mod导出设置

场景内新建一个空物体，添加[ScriptedBehaviour](/cn/Components/ScriptedBehaviour.md)组件

新建一个右键新建一个Ravenscrpit文件，把这个文件拖入组件内的source，Behaviour处填写TXT的文件名：

{缺图}

预制件化这个物体（游戏中这个物体下的所有东西都会被实例化，包括UI之类的物体），在[MutatorCotentMod](/cn/Components/MutatorCotentMod.md)配置这个Mutator，此处在config这里配置了float、range、string各一个：

{缺图}


## 1.1 完成主要功能

已迁移至[rsv.1](./rvs.1.md)

## 1.2 添加次要功能

现在添加我们的次要功能UI操作

各类[UI组件的应用](https://docs.unity.cn/cn/current/Manual/UICanvas.html)不再赘述

首先在场景内的Mutator添加一个Canvas，在Canvas内添加Scroll View，在Scroll View内添加Button和Text：

{缺图}

然后自行修改UI物体的大小位置以及文字，注意禁用Canvas物体放置一开游戏就显示Canvas：

{缺图} 

将canvas添加进我们前面ScriptedBehaviour组件内的target，方便调用：

{缺图}

在MutatorCotentMod内添加一个Bool选项卡，让我们可以自定义UI的开启：

{缺图}

现在回到代码编辑器

按照文档提供的api编写脚本：
```lua 
behaviour("QuickTreat")

local timer = 0
local cooldown
local ratio
local keybind
local mutator
local enableUI = false  --是否启用UI，默认为false
local button  --canvas内的按键
local text  --canvas内的Text物体

function QuickTreat:Start()
    coroutine.yield(WaitForSeconds(0.2))
    self.mutator = self.script.mutator
	self.cooldown = self.mutator.GetConfigurationFloat("cooldown")
	if self.cooldown < 60 then
	    self.cooldown = 60
    end
	self.ratio = self.mutator.GetConfigurationRange("ratio")
	self.keybind = self.mutator.GetConfigurationString("keybind")
	if self.keybind == nil then
	    self.keybind = "P"
    end
	if self.mutator.GetConfigurationBool("enableUI") != nil then
	    self.enableUI = self.mutator.GetConfigurationBool("enableUI")
	end
	self.button = self.targets.canvas.gameObject.GetComponentInChildren(Button)  --获取Button组件
    self.button.onClick.AddListener(self, "onClick")  --添加一个监听事件，self是指在触发事件时要使用的事件函数所在脚本，“onClick”是指在触发事件时要调用的方法名，也就是下面的QuickTreat:onClick()
	self.text = self.targets.canvas.gameObject.GetComponentInChildren(Text)  --获取Text组件（可能会获取到button的Text组件，届时请自行修改代码lol）
    self.timer = Time.time + self.cooldown
end

function QuickTreat:Update()
    if Input.GetKeyDown(self.keybind) then
	    if self.enableUI == true then  --如果启用UI,就设置Canvas为活动
            self.targets.canvas.SetActive(not self.targets.canvas.activeSelf)
			if self.targets.canvas.activeSelf == true then  --如果Canvas处于活动状态，就将鼠标从游戏操作解锁，否则锁定鼠标
			    Screen.UnlockCursor()
			else
			    Screen.LockCursor()
			end
        else
		    if Time.time >= self.timer then
                Player.actor.ResupplyHealth(Player.actor.maxHealth * self.ratio)
			    self.timer = Time.time + self.cooldown
				Overlay.ShowMessage("[QuickTreat]Sucess")
            else
                Overlay.ShowMessage("[QuickTreat]Failure,Need delay",0.1)
			end
        end
	end
end

function QuickTreat:OnClick()   --点击Button时的事件函数
    if Time.time >= self.timer then
        Player.actor.ResupplyHealth(Player.actor.maxHealth * self.ratio)
        self.timer = Time.time + self.cooldown
		self.text.text = "Sucess"  --如果ResupplyHealth了，就将text物体的text属性改为目标文本
	else
	    self.text.text = "Failure,Need delay"..tostring(self.timer - Time.time)  --如果没过冷却了，就将text物体的text属性改为目标文本
    end 
end
```

测试，没bug，我们就可以进行最后一步了

## 3.0 测试与导出

参考[MutatorCotentMod](/cn/Components/MutatorCotentMod.md)