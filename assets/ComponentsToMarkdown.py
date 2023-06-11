# 这是一个生成组件文档的py脚本
# 由于基于字符串识别，导出结果可能不仅准确，而我又不会C#，十分抱歉＞︿＜
import os

# 组件所在位置
workPath = r'D:\***\RavenfieldToolsPack\Assets\Scripts\Vehicle Tools\Components\Vehicle Components\Visual\UI'
# 导出目录
mdPath = r'D:\***\RavenfieldToolsPack\Assets\Scripts\md'
os.chdir(workPath)
#获取文件名
dir = [x for x in os.listdir('.') if os.path.isfile(x) and os.path.splitext(x)[1]=='.cs']

# 识别脚本pubilc项
def todict(file):
    classes = {}
    isntEnd = 1
    while isntEnd:
        fileline = file.readline()
        if fileline.find('public')  != -1:
            if fileline.find('class')  != -1:
                continue
            if fileline.find('void')  != -1:
                continue
            if fileline.find('(')  != -1:
                continue
            if fileline.find('struct')  != -1:
                continue
            table = fileline[fileline.find('{'):fileline.find('}')]
            if table == "":
                pass
            else:
               table = '('+table[1:]+')'
            Temp = fileline[ fileline.find('public ')+7 : fileline.find(';') ]
            classesnype = Temp[:Temp.find(' ')]
            Temp = str(Temp[Temp.find(' ')+1 :])
            if fileline.find('=') != -1:
               name = Temp[:Temp.find('=')] 
            elif fileline.find('{') != -1:
               name = Temp[:Temp.find('{')-1] 
            else:
               name = Temp[:] 
            classes[name] = (classesnype,table,)
        if fileline == '':
                isntEnd = None
    return classes

# 获取父类
def getParent(file):
    isntEnd = 1
    cominfo = ''
    while isntEnd:
        fileline = file.readline()
        if fileline.find('public')  != -1:
            if fileline.find('class')  != -1:
                if fileline.find('MonoBehaviour')  != -1:
                    pass
                else:
                    cominfo = fileline[fileline.find(':'):fileline.find('{')].replace(' ', "").replace(':', "")
        if fileline == '':
            isntEnd = None
    return cominfo


# 结果的dict转markdown
def tomarkdown(dict,info,f):
    text = ''
    defaultText = '# {title}\n## 描述\n{parentClass}\n## 用法\n\n## 注释\n\n## 变量\n| 名称 | 类型 | 描述 |\n| ----------- | ----------- | ----------- |\n'
    text = defaultText+text
    title = os.path.basename(f)[:-3]
    text = text.replace('{title}',title)
    for x in dict:
        text = text + '| ' + x + ' | ' + dict[x][0] + ' | ' + dict[x][1] + ' | ' + ' \n'
    if info != '':
         _ = "从[" + info + "](./" + info + ".md)类派生"
         text = text.replace('{parentClass}',_) 
    else:
         text = text.replace('{parentClass}',"")
    return text


####################
for x in dir:
    os.chdir(workPath)
    csfile = open(x)
    csdict = todict(csfile)
    csfile = open(x)
    sts = getParent(csfile)
    #输出索引
    print('- ['+os.path.basename(x)[:-3]+'](./'+os.path.basename(x)[:-3]+'.md)')
    st = tomarkdown(csdict,sts,x)
    os.chdir(mdPath)
    with open(os.path.basename(x)[:-3]+'.md', 'w+',encoding='utf-8') as md:
        md.write(st)