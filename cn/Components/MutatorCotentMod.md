---
category: 
- 组件
- Ravenscrpit
---
# MutatorCotentMod
## 描述

Mutator导出配置组件，只有给预制件应用这个组件才能被Unity导出与被游戏导入

## 用法

将其套用在一个空物体预制件或武器本身配置即可

配置各个Mutator时先在`Size`设置本次导出的Mutator数量

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| name  | string | Mutator名 |  
| description  | string | Mutator描述 |  
| menuImage | Texture2D | Mutator的Logo（建议比例16:10） |  
| mutatorPrefab | GameObject | Mutator的prefab |  
| labels | class.configuration.MutatorConfigurationLabel[] | 在配置页显示的文本(`Size`=数量。先填写`Size`，再在`Element`里配置labels，`id`=要给这个label定义的id，`displayName`=要显示的文本，`orderPriority`=显示这个项的优先级即排序) |  
| integers | class.configuration.IntegerConfigurationField[] | 在配置页可供配置的整数选项卡(`Size`=数量。先填写`Size`，再在`Element`里配置integers，`id`=要给这个integer定义的id，`displayName`=这个integer要显示的文本，`orderPriority`=显示这个项的优先级即排序，value=默认值) |  
| floats | class.configuration.FloatConfigurationField[] | 在配置页可供配置的浮点数选项卡(`Size`=数量。先填写`Size`，再在`Element`里配置floats，`id`=要给这个float定义的id，`displayName`=这个float要显示的文本，`orderPriority`=显示这个项的优先级即排序，value=默认值) |  
| ranges | class.configuration.RangeConfigurationField[] | 在配置页可供配置的[滑动条](https://docs.unity.cn/cn/2020.3/Manual/script-Slider.html)选项卡(`Size`=数量。先填写`Size`，再在`Element`里配置ranges，`id`=要给这个range定义的id，`displayName`=这个range要显示的文本，`orderPriority`=显示这个项的优先级即排序，`value.value`=默认值,`value.min`=滑动条最左边对应的最小值,`value.max`=滑动条最右边对应的最大值，`wholeNumbers`=是否将滑动条约束为整数值) |  
| strings | class.configuration.StringConfigurationField[] | 在配置页可供配置的字符串选项卡(`Size`=数量。先填写`Size`，再在`Element`里配置strings，`id`=要给这个string定义的id，`displayName`=这个string要显示的文本，`orderPriority`=显示这个项的优先级即排序，`value`=默认值) |
| bools | class.configuration.BoolConfigurationField[] | 在配置页可供配置的布尔选项卡(`Size`=数量。先填写`Size`，再在`Element`里配置bools，`id`=要给这个bool定义的id，`displayName`=这个bool要显示的文本，`orderPriority`=显示这个项的优先级即排序，`value`=默认值) |  
| dropdowns | class.configuration.DropdownConfigurationField[] | 在配置页可供配置的下拉列表选项卡(`Size`=数量。先填写`Size`，再在`Element`里配置dropdowns，`id`=要给这个dropdown定义的id，`displayName`=这个dropdown要显示的文本，`orderPriority`=显示这个项的优先级即排序，`value.index`=默认值的序号，`value.lables`.`Size`=选项卡的数量，`value.lables`[*]=选项文本) |   
