//data.js 配置列表，根据配置项定义来新建对应文件or文件夹

'use strict';
const fs = require('fs');
const path = require('path');
module.exports = {
    items: [{
            name: 'css',
            type: 'dir', //目录
            items: []
        },
        {
            name: 'images',
            type: 'dir' //目录
        },
        {
            name: 'js',
            type: 'dir' //目录
        },
        {
            name: 'index.html',
            type: 'file', //文件
            content: fs.readFileSync(path.join(__dirname, 'index.html'))
            //同步读取文件，执行命令的时候会帮我们将此文件也创建出来
        },
        {
            name: 'gulpfile.js',
            type: 'tool',
            content: fs.readFileSync(path.join(__dirname, './gulp/gulp.js'))
        },
        {
            name: 'package.json',
            type: 'tool',
            content: fs.readFileSync(path.join(__dirname, './gulp/package.json'))
        },
        {
            name: 'package-lock.json',
            type: 'tool',
            content: fs.readFileSync(path.join(__dirname, './gulp/package-lock.json'))
        }
    ]
};