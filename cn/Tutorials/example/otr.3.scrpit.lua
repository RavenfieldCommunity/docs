behaviour("QuickTreat")  --注册Ravenscript行为，然后我们才能从这个基类派生自己的自定义类

--初始化局部变量变量
local timer = 0
local cooldown  --冷却时间
local bits --血量回复比
local keybind --触发键位
local mutator

function QuickTreat:Start() --进入游戏地图的一开始时运行
    coroutine.yield(WaitForSeconds(0.2))    --延迟运行下一行确保mutators设置加载成功
    mutator = ScriptedBehaviour.mutator  --获取此脚本绑定的mutator信息
	cooldown = mutator.GetConfigurationFloat("cooldown")  --获取mutator自定义选项卡中id为cooldown的float对应的值
	if cooldown < 60 then  --如果cooldown小于60，则重置cooldown为60
	    cooldown = 60
    end
	bits = mutator.GetConfigurationRange("bits")  --获取mutator自定义选项卡中id为bits的range对应的值
	keybind = mutator.GetConfigurationString("keybind")  --获取mutator自定义选项卡中id为keybind的string对应的值
	if keybind == "" then  --如果keybind为空，则重置keybind为"p"
	    keybind = "P"
    end
end

function QuickTreat:Update() --在游戏的每帧时运行
    timer = Time.deltaTime + timer  --计时器，会不断累加一帧的时间
	-- timer = Time.time + cooldown  --计时器，计算超出冷却时间后时的游戏时间
    if Input.GetKeyDown(keybind) then --当按下可以keybind对应的键位时...
	    if timer >= cooldown then --当计时器超出冷却时间时...
		-- if Time.time >= timer then --当游戏时间超出timer时...
            Player.actor.ResupplyHealth(Player.actor.maxHealth * bits) --调用Player的成员actor内的一个成员方法来回复最大血量的%bits
			-- timer = Time.time + cooldown  --重新计算超出冷却时间后时的游戏时间
			timer = 0  --重置计时器
		end
    end
end