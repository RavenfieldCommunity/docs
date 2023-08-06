behaviour("QuickTreat")  --注册Ravenscript行为，然后我们才能从这个基类派生自己的自定义类

--初始化局部变量变量
local timer = 0
local cooldown  --冷却时间
local ratio --血量回复比
local keybind --触发键位
local mutator
local enableUI  --

function QuickTreat:Start() --进入游戏地图的一开始时运行
    coroutine.yield(WaitForSeconds(0.2))    --延迟运行下一行确保mutators设置加载成功
    self.mutator = self.script.mutator  --获取此脚本绑定的mutator信息
	self.cooldown = self.mutator.GetConfigurationFloat("cooldown")  --获取mutator自定义选项卡中id为cooldown的float对应的值
	if self.cooldown < 60 then  --如果cooldown小于60，则重置cooldown为60
	    self.cooldown = 60
    end
	self.ratio = self.mutator.GetConfigurationRange("ratio")  --获取mutator自定义选项卡中id为ratio的range对应的值
	self.keybind = self.mutator.GetConfigurationString("keybind")  --获取mutator自定义选项卡中id为keybind的string对应的值
	if self.keybind == "" then  --如果keybind为空，则重置keybind为"p"
        self.keybind = "P"
    end
	self.enableUI = self.mutator.GetConfigurationBool("enableUI")
end

function QuickTreat:Update() --在游戏的每帧时运行
    self.timer = Time.deltaTime + self.timer  --计时器，会不断累加一帧的时间
	-- self.timer = Time.time + self.cooldown  --计时器，计算超出冷却时间后时的游戏时间
    if Input.GetKeyDown(keybind) then --当按下可以keybind对应的键位时...
	    if self.enableUI then
		    self.target.canvas.gameObject.SetActive(self.target.canvas.gameObject.activeSelf and false)
		else
            if self.timer >= self.cooldown then --当计时器超出冷却时间时...
		    -- if Time.time >= self.timer then --当游戏时间超出timer时...
                Player.actor.ResupplyHealth(Player.actor.maxHealth * self.ratio) --调用Player的成员actor内的一个成员方法来回复最大血量的%ratio
			    -- self.timer = Time.time + self.cooldown  --重新计算超出冷却时间后时的游戏时间
			    self.timer = 0  --重置计时器
		    end 
	    end
    end
end

function QuickTreat:OnClick()
    if self.timer >= self.cooldown then --当计时器超出冷却时间时...
         -- if Time.time >= self.timer then --当游戏时间超出timer时...
         Player.actor.ResupplyHealth(Player.actor.maxHealth * ratio) --调用Player的成员actor内的一个成员方法来回复最大血量的%ratio
         -- self.timer = Time.time + self.cooldown  --重新计算超出冷却时间后时的游戏时间
         self.timer = 0  --重置计时器
    end 
end