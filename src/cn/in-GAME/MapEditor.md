# 使用地图编辑器

## 主选单

在主界面点击 `MAP EDITOR` 选项，进入地图编辑器的初始菜单

![地图编辑器主界面](https://images.steamusercontent.com/ugc/1856059209718814229/5F8884EBCA11BD338D389939E52E7B75B89C187E/)

`LOAD MAP` 意为加载保存过的存档地图，`CREATE NEW` 是创建新地图

先介绍一下点击 `LOAD MAP` 后的界面：

![地图编辑器加载地图](https://images.steamusercontent.com/ugc/1856059209718816274/D92CF1543DE34F683E4B1F3D412231504C38F128/)

上方的文本框是用来搜索地图的

中间的大框显示地图

下方 `Show autosaves` 点击后可以查看以前自动保存的地图（防止意外事故），选择地图后点击 `LOAD` 即可加载地图

回到 `CREATE NEW` 选项，点击后，会进入以下界面：

![生成地图](https://images.steamusercontent.com/ugc/1856059209718819721/D078B8645F7101CE210BDF3EF927E304EA0BED19/)

左边的 GENERATE MAP 框内，有几个选项

`Map size` 处调整初始地图的大小，`SMALL` 为小，`LARGE` 为大

`Biome`处可以调整地图主题，`Flat`为只有海，`Round Island`是海岛，`Monument Valley`是峡谷，以下为各种主题的生成样式参考：

![地图主题1](https://images.steamusercontent.com/ugc/1856059209718823282/DBD87922897DBE0D997FEBF3B184A34267B03F4D/)
![生成主题2](https://images.steamusercontent.com/ugc/1856059209718823562/CBE39BD0EF20ED4C6A2A0E0F1BDB49304BF7BD32/)
![生成主题3](https://images.steamusercontent.com/ugc/1856059209718824107/2FA246A04C6BCE99501CBE8FBCE86DBB37A8AA5A/)

调整完后点击 `GENERATE` 生成地图，如果不满意再点击一次可以重新生成，满意后点击 `OK` 即可进入编辑界面

## 基本操作

好了 (￣▽￣)

我们先简单介绍一下编辑界面各个选项卡的功能

![界面总览](https://images.steamusercontent.com/ugc/1856059209718831567/BEC4CEE9F0916A63AAA48FB465978AE00864D81D/)

在下拉选项卡中：

![下拉选项卡](https://images.steamusercontent.com/ugc/1856059209718833307/C004C7803CB607DDE16EE22C7ABA457FDCBCCC08/)

`MAIN MENU`是主菜单，`PLAY`是测试地图（测试前会提示保存），`OPEN`是打开其他地图，`SAVE`是保存，`LEVEL DETAILS`是地图设置，`NIGHT`是夜晚视图，`NAV-MESH`是NAV导航视图，`MUTE`静音（对`ASSET BROWSER`里的的Audio Source物体生效），`SETTING`是编辑设置，`EXIT`是退出编辑器

`LOCAL` / `GLOBAL`用来切换物体的X、Y、Z轴朝向，前者以物体方向为参考，后者以场景的方向为参考，**这个的解释参见下文**，若按[unity文档](https://docs.unity.cn/cn/2020.3/Manual/PositioningGameObjects.html)的原文是：

> `Local` 保持辅助图标相对于游戏对象的旋转
>
> `Global` 将辅助图标固定在世界空间方向

对工具栏：

![工具栏](https://images.steamusercontent.com/ugc/1856059209718853752/86B114D0778BC767E565AB05784EC929DC707610/)

`SELECT`的功能是选择地图内对象，`MOVE`的功能是移动对象，`ROTATE`的功能是旋转对象，`SCALE`的功能是拉伸对象，`TERRAIN`的功能是调整地形、绘制，`PLACE`与`ASSETS`功能一致，都是从资源库中选择游戏对象放置，`PHOTO`的功能是为地图拍摄封面，`MATERALS`的功能是调整、创建地形贴图

在编辑界面中的操作如正常游戏中的上帝视角一样，鼠标控制视角，WASD移动，`Shift`加速移动，`Q`、`E`升降

### 地形与材质修改

点击`TERRAIN`，右边会冒出一个名为“TERRAIN TOOL”框

将鼠标移至游戏视图，你会发现有一个蓝点吸附在了鼠标上:

![地形工具](https://images.steamusercontent.com/ugc/1856059209718861670/4EBAA2B2C5D4556018FBF72D4A1394BC5EFF1A21/)

这时，我们就可以修改地形了

修改地形有三个模式，分别是，`RASIE` 抬高/降低地形，`FLATTEN` 以固定高度修改地形地形，`SMOOTH` 平滑地形

下方的`Brush sizes`可以调整笔刷大小，滑动条越靠近右边或文本框内的值笔刷越大，反之亦然

`Brush intensity`用来调整笔刷强度（译作“不透明度“），滑动条越靠近右边或文本框内的值单位时间内地形的修改更加明显，反之亦然

`Brush intensity`偏大 / 偏小的效果图：

![笔刷强度示意](https://images.steamusercontent.com/ugc/1856059209718866199/2A98BC28124478D329B32519CB0330F8481E2BA9/)

具体如何操作呢？ ¯\(°_o)/¯

我们先选择一个模式，调整好笔刷属性，然后在地面上长按即可，到适合的时候松手即可（操作可以撤销

是`RAISE`模式时默认是升高，如果在涂抹的过程中按住`Ctrl`则变为降低，RAISE效果图：

![RAISE模式示意](https://images.steamusercontent.com/ugc/1856059209718870334/5668390D277DE76B47097BB85EF3171B785CD5D0/)

如果是`FLATTEN`则先要在要指定的高度按住`Ctrl`键并单击鼠标左键指定高度，再在地上涂抹修改地形。FLATTEN效果图：

![FLATTEN模式示意](https://images.steamusercontent.com/ugc/1856059209718874764/1D5F16644598B503DE3A9122D99CF827ACB9C789/)

`SMOOTH`效果图（原图：平滑后）：

![SMOOTH模式示意：原图](https://images.steamusercontent.com/ugc/1856059209718879139/FD5A86DEA768AA86667943C93D91EBE31B96C08A/)
![SMOOTH模式示意：平滑后](https://images.steamusercontent.com/ugc/1856059209718881975/2ED1A4A8DB0E014ECF8602958A72D07A056AC28A/)

或参见[unity文档](https://docs.unity.cn/cn/2020.3/Manual/terrain-Tools.html)

要绘制地形贴图，就在TERRAIN TOOL处的`Layers`处选择一个贴图

此时无论选择哪个模式在地图上涂抹都不会修改地形，只会修改地形贴图

![绘制地形贴图](https://images.steamusercontent.com/ugc/1856059209718889353/2AF61E767659BBCA0D425131AB7CF69166298E4E/)

`Brush intensity`值的大小变为笔刷透明度，点击`AUTO-PAINT`会自动给地形刷上贴图

选择一个贴图后点击`DELETE`删除贴图

点击`ADD`添加一个贴图，点击`EDIT`和菜单栏的`MATERIALS`一样，进入贴图编辑器

所以下面说贴图编辑器的使用

![贴图编辑器](https://images.steamusercontent.com/ugc/1856059209718898580/ED876A9C342F025218D825AA6D6A0B3517F55270/)

下方的`ADD`（添加）和`REMOVE`（删除）不多解释，用来编辑贴图预设

右边的`Materials Properties`框的`Name`可以修改贴图名字

下方的`Main Texture`和`Normal Texture`点击可以修改贴图（一般不改`Normal Texture`）

### 物品放置

好的，把地形设置成自己满意的效果后，你肯定需要放一点东西到地图上吧？

本章这就教您如何放置 / 移动（调整） 一个物体

我们先点击`PLACE`（`ASSETS`也行）

然后会出现一个名为”`ASSETS BROWSER`“的窗口

![ASSET BROWSER窗口](https://images.steamusercontent.com/ugc/1856059209718903624/8110C4367DD19BBC49E7CDA88217DC084E0D366F/)

上方的”`Search...`“是搜索框

左边的是标签栏，你可以从这些标签中选择选择一个建筑等的物体放置在地图中。（目前无法导入外部模型）

这里先介绍两个特殊的：

“`Level`”标签里的是Resupply Box（补给箱，回血、补弹药）

“`Primitives`”内是Unity的基础元素（如Cube、Place，标准几何体，无材质）

”`Build-in Types`“内是构成地图的基本元素（如旗帜等，下章再详细谈）

回到正题

先点击一个物品，会回到编辑界面，这时点击要放置的地方，物品就被放到地图中了

![放置物品](https://images.steamusercontent.com/ugc/1856059209718905802/3A19C2A2A0AE74145DBF58A26281F009F16731AA/)

再说说物品位置的微调

又回到菜单栏，介绍四个工具的使用

先选中`SELECT`（选择），然后长按拖动鼠标，会出现一个被填充的方框，这就像Windows的资源管理器的选择，PowerPoint的选择，把选择的物体框在框内即可选择物体，单击物体则仅选中这一个物体

![选择物体](https://images.steamusercontent.com/ugc/1856059209718912455/7C5A10351497E8017EE79AA1375301FE03499495/)

在选择物体时，按住`Ctrl`键，可以连续选择地图上的对象

选择物体后，点击键盘上的`Delete`（`Del`)键删除物体，`Ctrl`+`C`/`Ctrl`+`X`/`Ctrl`+`V` 复制/剪贴/粘贴物体（放置物体的方法与上面一样）

选中`MOVE`（移动），然后地图上被选中的物体此时会冒出三个箭头

向上的绿箭头是Z轴，向前的蓝箭头是Y轴，向左的红箭头是X轴

按住一个箭头拖动，物体会顺着箭头的方向移动

按住三个轴中心的圆点拖动，物体会贴着地面在地图上移动

![移动物体](https://images.steamusercontent.com/ugc/1856059209718908033/D1516CFCEA44EF0CC0B8116F2E14170A3567A082/)

选中`ROTATE`（旋转），然后地图上被选中的物体此时会冒出一个圆圈，三个颜色的圈圈代表三个方向，按住一个圈圈拖动物体就在哪个轴上旋转

![旋转物体](https://images.steamusercontent.com/ugc/1856059209718917245/3483F869ABB39974C5C97837369E2A762812001F/)

选中`SCALE`（拉伸），然后地图上被选中的物体此时会冒出一个类似`SELECT`的三个轴

按住三个轴上的方块拖动，物体会在拖动的轴上拉伸

按住三个轴中心的方块拖动，物体会在三个轴上等比例缩放

![拉伸物体](https://images.steamusercontent.com/ugc/1856059209718921692/541C816F3C90F2D98D51428BC3319422CBF65E48/)

以上操作都可以在选择了物体后在右边出现的名为“PROPERTIES”的框以设置数值的方式操作

![属性窗口](https://images.steamusercontent.com/ugc/1856059209718925158/87C75518AAB088C3E0A8ED7EEBE9459075354803/)

再讲一下菜单栏左上角的`GOLBAL`/`LOCAL`

当此处为`GOLBAL`时，选中物体时出现的XYZ三轴的方向以地图的XYZ轴方向对准

当此处为`LOCAL`时，选中物体时出现的XYZ三轴的方向以物体本身的的XYZ轴方向对准

对比（图片前方是地图的正前方）：

### 地图基础元素

说到地图的基本元素

他们位于`ASSET`内的`Built-in Types`标签内

分别是：
|物体名|译名|
|------|------|
| Audio Source | 环境音 |
| Avoidance Box|  回避箱|
|Capture Point |据点旗帜|
|Collider Box |空气墙|
|Ladder |梯子|
|Light| 灯光|
|Pathfing Box |路径盒|
|Pathfinding Link| 强制寻路器|
|Spawn Point| 出生点|
|Turret Spawn |固定武器生成点（如机枪）|
|Vehicle Spawn |载具生成点|

用法参见本站[组件文档](/cn/Components)

### AI寻路规划

在完成地图的建设后，你需要检查地图的可行走性

不然一不小心，AI就哪也去不了

点击`MAIN MENU`中的`NAV-MESH`查看地图的导航网格（或寻路网格）：

![寻路网格预览](https://images.steamusercontent.com/ugc/1856059209718951622/3E73293AE5AE304BE7ADEB109811FE8A9CE6B7FE/)

被白色覆盖的地方AI就能到达，被其他颜色或无颜色覆盖的地方反之

对于寻路地图中工具的用法，参见组件文档

注意，地图编辑器默认带一个全局的Pathfinding Box

### 地图属性

本章用于解释主菜单中`LEVEL DETAILS`和`EDIT SETTING`的各选项

- `Minimap`

  该选项用来设置游戏中的小地图的

  点击`W` `N` `S` `E`调整视图

  `FOV`可以缩放视图

  `CENTER`使视图回归中心点（重置）
  
  ![Minimap](https://images.steamusercontent.com/ugc/1856059209719005161/BB27306426D9A39668B81A77706821205B46385C/)

- `Scenery Camera`

  用来设置进入地图时武器选择界面的背景

  点击`SELECT CAMERA`，编辑界面中会出现一个类似相机的物体（没有就四处转转视角）

  移动方法与一般游戏物体类似

  可以随时回到这个界面预览
  
  ![Scenery Camera](https://images.steamusercontent.com/ugc/1856059209719006926/4F1BCD792D3D2B2E4E517F43C8AEBF2C096E3B3A/)

- `World`

  中间的`Water Level`设置海平面高度

- `Lighting`

  调整游戏时白天和黑夜的颜色

  以下翻译：


- `Atmosphere`

  调整环境大气散射（天空氛围）

  以下翻译：

- `Validation`

  错误检查器

- `Upload`

  参考[#保存_发布地图]()

以下为`SETTING`的解释：

- `Snap to Grid Size`

  捕捉栅格大小，NAV-MESH精度，但似乎无论怎么调对生成速度都无多大影响

- `Autosaves Interval`

  自动保存间隔

  `0`为禁用自动保存
  
![EDITOR SETTING](https://images.steamusercontent.com/ugc/1856059209719074748/FA31A3C7B3900F69D53A14A207C80F949FF91B65/)

#### 战役路线

在调整好NAV后，你还要设置战役路线

否则会因为未设定进攻路线，AI就会呆在据点不动：

![bot呆在原点不动](https://images.steamusercontent.com/ugc/1856059209718979095/1963F3521976C3DA8A8A2274687BBBB6405E4599/)

下面我们就来设置战役路线

依次进入`MAIN MENU` -> `LEVEL DETAILS` -> `Neighbours`

点击地图上的据点并连接：

右边的`Land`（通过陆地）和`Water`（通过水路）可以设置这个路线可以以什么方式到达

`One way`设置这个线路是否为单向，按`REVERSE`反转方向，点击`DELETE`删除路线

![Neighbuors界面](https://images.steamusercontent.com/ugc/1856059209718981949/44C742EED6AEAC5C88E57D3B9D6F5D7A11A2E9C9/)

#### 地图封面
一个地图肯定要有封面

所以

要拍摄封面，请点击菜单栏的`PHOTO`，调整到一个合适的角度后，按空格键

注意，拍摄封面前请先保存地图

![拍摄封面](https://images.steamusercontent.com/ugc/1856059209718984831/DB8E06624FFEAC458CE0A81761E4E3703551C7CA/)

#### 保存/发布地图

当您完成了您的地图

就是时候保存他们了

点击`MAIN MENU`中的`SAVE`

在弹出的方框中的”`File Name`“里输入一个名字后点击`SAVE`

然后就会开始保存地图：

它可能会提示你是否要覆盖同名文件：

按需求点击即可，点击`NO`会回到命名框要求重新命名

可以通过`Ctrl`+`S`来快速保存，不过这样不会保存NAV（寻路网格），导致游戏过程中出现bot不会走路

这时需要在菜单完整保存一次

保存后，地图将会保存在`C:\Users\*你的用户名*\AppData\LocalLow\SteelRaven7\RavenfieldSteam\save\`，文件名为`*保存的名称*.rfld`

- 游玩

  在`CUSTOM MAP`处点击，找到您的地图并点击即可游玩

- 发布至Steam创意工坊

  点击`MAIN MENU` -> `LEVEL DETAILS` -> `Upload`

  它可能会在”`Please fix following problem:`“这个框内显示一些问题

  请自行修复

  如果一切正常，请直接点击`CONNECT`，这会跳转至Steam，按照提示操作即可，确保Steam在后台