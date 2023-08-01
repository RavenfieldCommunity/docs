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

配置各个武器时先在Sizes设置本次导出的武器数量

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| name  | string | Mutator名 |  
| description  | string | Mutator描述 |  
| menuImage | Texture2D | Mutator的Logo（建议比例16:10） |  
| mutatorPrefab | GameObject | Mutator的prefab |  
| labels | class.configuration.MutatorConfigurationLabel[] | 标签 |  
| integers | class.configuration.IntegerConfigurationField[] | 整数 |  
| floats | class.configuration.FloatConfigurationField[] | 浮点数 |  
| ranges | class.configuration.RangeConfigurationField[] | 范围 |  
| strings | class.configuration.StringConfigurationField[] | 字符串 |  
| bools | class.configuration.BoolConfigurationField[] | 布尔 |  
| dropdowns | class.configuration.DropdownConfigurationField[] | 下拉列表 |  

| id | string |  |  
| displayName | string |  |  
| orderPriority | int |  |  
| value | T |  |  
| value, min, max | float |  |  
| wholeNumbers | bool |  |  
| index | int |  |  
| labels | string[] |  |  
