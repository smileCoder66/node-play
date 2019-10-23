# 全局配置项目搭建指令
```
1.windows下构建一个自己的全局命令行工具
2.目的简单仿照类似cli搭建项目
```
## Start
```js
npm root -g //查看当前全局命令行工具软件所在目录

`在找到的目录上一级找到npm目录,随便找一个后缀名是 .cmd的文件`
`找到后更改复制新建一个cmd文件,类似我改的zxl.cmd如下`
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\zxl\bin\zxl.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\node_modules\zxl\bin\zxl.js" %*
)
`新建目录放置主要文件（用于读写和功能操作的js,html等待）`
`例在node_modules\zxl\lib\bin\zxl.js的zxl.js文件中写入要引入的模块`
require('../lib/index')

`详情可根据我文件参考，完成后打开cmd输入`
zxl init [filename]
`即可生成对应文件及进入目标目录安装npm操作(这里我用的gulp去测试)`
```

### Todo
```js
`进入node_modules目录 模仿其他的包新建目录并且npm init -y`
`zxl是我创建的比较简单的目录，对比原作者略做修改且添加如何添加后续cmd指令`
```

### End
[摘自](https://www.jianshu.com/p/50129ca8e7a3)
```
node一时爽，一直玩一直爽！
```