# 使用地图编辑器

## 主选单

在主界面点击 `MAP EDITOR` 选项，进入地图编辑器的初始菜单

`LOAD MAP` 意为加载保存过的存档地图

`CREATE NEW` 是创建新地图

先介绍一下点击 `LOAD MAP` 后的界面：

上方的文本框是用来搜索地图的

中间的大框显示地图

下方 `Show autosaves` 点击后可以查看以前自动保存的地图（防止意外事故）

选择地图后点击 `LOAD` 即可加载地图

回到 `CREATE NEW` 选项，点击后，会进入以下界面：

左边的 GENERATE MAP 框内，有几个选项

`Map size` 处调整初始地图的大小，`SMALL` 为小，`LARGE` 为大

`Biome`处可以调整地图主题，`Flat`为只有海，`Round Island`是海岛，`Monument Valley`是峡谷，以下为各种主题的生成样式参考：

调整完后点击`GENERATE`生成地图，如果不满意再点击一次可以重新生成

满意后点击`OK`即可进入编辑界面

## 基本操作

好了 (￣▽￣)

我们先简单介绍一下编辑界面各个选项卡的功能

`MAIN MENU是`主菜单

`PLAY`是测试地图（测试前会提示保存）

`OPEN`是打开其他地图

`SAVE`是保存

`LEVEL DETAILS`是地图设置

`NIGHT`是夜晚视图

`NAV-MESH`是NAV导航视图

`MUTE`意义不明

`SETTING`是编辑设置

`EXIT`是退出编辑器

`LOCAL` / `GLOBAL`用来切换物体的X、Y、Z轴朝向，前者以物体方向为参考，后者以场景的方向为参考

`SELECT`的功能是选择地图内对象

`MOVE`的功能是移动对象

`ROTATE`的功能是旋转对象

`SCALE`的功能是拉伸对象

`TERRAIN`的功能是调整地形、绘制

`PLACE`与`ASSETS`功能一致，都是从资源库中选择游戏对象放置

`PHOTO`的功能是为地图拍摄封面

`MATERALS`的功能是调整、创建地形贴图

`MAIN MENU`的下方是对象视图

在编辑界面中的操作如正常游戏中的上帝视角一样，鼠标控制视角，WASD移动，`Shift`加速移动，`Q`、`E`升降

### 地形与材质修改
点击`TERRAIN`

右边会冒出一个名为“TERRAIN TOOL”框

将鼠标移至游戏视图，你会发现有一个蓝点吸附在了鼠标上

这时，我们就可以修改地形了

修改地形有三个模式，分别是：

`RASIE` 抬高 / 降低地形

`FLATTEN` 以固定高度修改地形地形

和`SMOOTH` 平滑地形

下方的`Brush sizes`可以调整笔刷大小，滑动条越靠近右边或文本框内的值笔刷越大，反之亦然

`Brush intensity`用来调整笔刷强度（译作“不透明度“），滑动条越靠近右边或文本框内的值单位时间内地形的修改更加明显，反之亦然

`Brush intensity`偏大 / 偏小的效果图：

具体如何操作呢？ ¯\(°_o)/¯

我们先选择一个模式，

调整好笔刷属性，

然后在地面上长按即可，到适合的时候松手即可（操作可以撤销

是RAISE模式时默认是升高，如果在涂抹的过程中按住`Ctrl`则变为降低，RAISE效果图：

如果是FLATTEN则先要在要指定的高度按住`Ctrl`键并单击鼠标左键指定高度，再在地上涂抹修改地形。FLATTEN效果图：

SMOOTH效果图（原图：平滑后）：

要绘制地形贴图，就在TERRAIN TOOL处的`Layers`处选择一个贴图

此时无论选择哪个模式在地图上涂抹都不会修改地形，只会修改地形贴图

`Brush intensity`值的大小变为笔刷透明度

点击`AUTO-PAINT`会自动给地形刷上贴图

选择一个贴图后点击`DELETE`删除贴图

点击`ADD`添加一个贴图

点击`EDIT`和菜单栏的`MATERIALS`一样，进入贴图编辑器

所以下面说贴图编辑器的使用

下方的`ADD`和`REMOVE`（删除）不多解释

右边的`Materials Properties`框的`Name`可以修改贴图名字

下方的`Main Texture`和`Normal Texture`点击可以修改贴图（一般不改`Normal Texture`）

### 物品放置

好的，把地形设置成自己满意的效果后，你肯定需要放一点东西到地图上吧？
本章这就教您如何放置 / 移动（调整） 一个物体

我们先点击PLACE（ASSETS也行）
然后会出现一个名为”ASSETS BROWSER“的窗口
上方的”Search...“是搜索框
左边的是标签栏，你可以从这些标签中选择选择一个建筑等的物体放置在地图中。（目前无法导入外部模型）
这里先介绍两个特殊的：
“Level”标签里的是Resupply Box（补给箱，回血、补弹药）
“Primitives”内是Unity的基础元素（如Cube、Place，用过Unity必懂）
”Build-in Types“内是构成地图的基本元素（如旗帜等，下章再详细谈）
回到正题
先点击一个物品，会回到编辑界面，这时点击要放置的地方，物品就被放到地图中了
再说说物品位置的微调
又回到菜单栏，介绍四个工具的使用

SELECT（选择）
先选中SELECT，然后长按拖动鼠标，会出现一个被填充的方框，这就像Windows的资源管理器的选择，PowerPoint的选择，把选择的物体框在框内即可选择物体，单击物体则仅选中这一个物体
在选择物体时，按住Ctrl键，可以连续选择地图上的对象
选择物体后：
点击键盘上的Delete / Del键删除物体
Ctrl+C / Ctrl+X / Ctrl+V 复制 / 剪贴 / 粘贴物体（放置物体的方法与上面一样）

MOVE（移动）
先选中MOVE，然后地图上被选中的物体此时会冒出三个箭头
向上的绿箭头是Z轴
向前的蓝箭头是Y轴
向左的红箭头是X轴
按住一个箭头拖动，物体会顺着箭头的方向移动
按住三个轴中心的圆点拖动，物体会贴着地面在地图上移动

ROTATE（旋转）
先选中ROTATE，然后地图上被选中的物体此时会冒出一个圆圈
三个颜色的圈圈代表三个方向
按住一个圈圈拖动物体就在哪个轴上旋转

SCALE（拉伸）
选中SCALE，然后地图上被选中的物体此时会冒出一个类似SELECT的三个轴
按住三个轴上的方块拖动，物体会在拖动的轴上拉伸
按住三个轴中心的方块拖动，物体会在三个轴上等比例缩放

以上操作都可以在选择了物体后在右边出现的名为“PROPERTIES”的框以设置数值的方式操作

在重点讲一下菜单栏左上角的GOLBAL/LOCAL
当此处为GOLBAL时，选中物体时出现的XYZ三轴的方向以地图的XYZ轴方向对准
当此处为LOCAL时，选中物体时出现的XYZ三轴的方向以物体本身的的XYZ轴方向对准
对比（图片前方是地图的正前方）：

### 地图基础元素

说到地图的基本元素
他们位于ASSET内的Built-in Types标签内
分别是：
Audio Source 环境音
Avoidance Box 回避箱
Capture Point 据点旗帜
Collider Box 空气墙
Ladder 梯子
Light 灯光
Pathfing Box 路径盒
Pathfinding Link 强制寻路器
Spawn Point 出生点
Turret Spawn 固定武器生成点（如机枪）
Vehicle Spawn 载具生成点
下面就一一介绍这些物体的作用和参数调节

### AI寻路规划

在完成地图的建设后，你需要检查地图的可行走性
否则AI就会哪也去不了

点击MAIN MENU中的NAV-MESH查看地图的导航网格
被白色覆盖的地方AI就能到达，被其他颜色或无颜色覆盖的地方反之
先介绍几个寻路系统中的几个工具

### 地图属性

本章用于解释主菜单中LEVEL DETAILS和EDIT SETTING的各选项
Minimap
该选项用来设置游戏中的小地图的
点击WNSE调整视图
FOV可以缩放视图
CENTER使视图回归中心点（重置）

Scenery Camera
用来设置进入地图时武器选择界面的背景
点击SELECT CAMERA，编辑界面中会出现一个类似相机的物体（没有就四处转转视角）
移动方法与一般游戏物体类似
可以随时回到这个界面预览

World
中间的Water Level设置海平面高度


Lighting
调整游戏时白天和黑夜的颜色
以下翻译：


Atmosphere
调整环境大气散射（天空氛围）
以下翻译：

Validation
错误检查器

Upload
参考3.0 保存 / 发布地图







以下为SETTING的解释：

Snap to Grid Size
捕捉栅格大小,NAV-MESH精度，但似乎无论怎么调对生成速度都无多大影响

Autosaves Interval
自动保存间隔
0为禁用自动保存

#### 战役路线

在调整好NAV后，你还要设置战役路线
否则AI就会像个***一样呆在据点不动
下面我们就来设置战役路线
依次进入MAIN MENU -> LEVEL DETAILS -> Neighbours
点击地图上的据点并连接：
右边的Land（通过陆地）和Water（通过水路）可以设置这个路线可以以什么方式到达
One way设置这个线路是否为单向，按REVERSE反转方向
点击DELETE删除路线

#### 地图封面
一个地图肯定要有封面
所以
要拍摄封面，请点击菜单栏的PHOTO，调整到一个合适的角度后，按空格键


注意：
拍摄封面前请先保存地图
#### 保存/发布地图

当您完成了您的地图
就是时候保存他们了
点击MAIN MENU中的SAVE


















在弹出的方框中的”File Name“里输入一个名字后点击SAVE
然后就会开始保存地图：






它可能会提示你是否要覆盖同名文件：









按需求点击即可，点击NO会回到命名框要求重新命名
非常不建议通过Ctrl+S来保存
因为这样不会保存NAV
导致游戏过程中出现一些问题
保存后，地图将会保存在以下位置：
C:\Users\*你的用户名*\AppData\LocalLow\SteelRaven7\RavenfieldSteam\save
文件名为保存的名称+rfld后缀
游玩
在CUSTOM MAP处点击，找到您的地图并点击即可游玩

发布至Steam创意工坊
点击MAIN MENU -> LEVEL DETAILS -> Upload
它可能会在”Please fix following problem:“这个框内显示一些问题：

请自行修复
如果一切正常，请直接点击CONNECT，这会跳转至Steam，按照提示操作即可
注意：请确保您游玩的不是盗版，并且Steam在后台，可以连接创意工坊！！！