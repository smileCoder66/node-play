// 下面是主要代码部分： index.js
'use strict'
const fs = require('fs');
const path = require('path');
const structure = require('./data').items;
// dos 窗口输入--->zxl init blog ,init属于 第二个参数
let args = process.argv.slice(2);
let cmd = args[0];
const {
    exec
} = require('child_process');


switch (cmd) {
    case 'init':
        let projectName = args[1];
        var rootName = `./${projectName}`; //首次操作，假设此文件目录不存在
        fs.mkdir(rootName, (err) => { //创建目录
            if (err) {
                throw err;
            }
            let nextName = rootName + '/src';
            fs.mkdir(nextName, (err) => {
                if (err) {
                    throw err;
                }
                structure.forEach((item) => { //遍历创建相应类型的文件 or 目录
                    let type = item.type;
                    if (type === 'dir') {
                        fs.mkdir(`${nextName}/${item.name}`, (err) => {
                            if (err) {
                                throw err;
                            }
                        })
                        console.log(`${nextName}/${item.name}`);
                    } else if (type === 'file') {
                        fs.writeFile(`${nextName}/${item.name}`, item.content, (err) => {
                            if (err) {
                                console.log('failed')
                                throw err;
                            }
                        })
                        console.log(`${nextName}/${item.name}`);
                    } else if (type === 'tool') {
                        fs.writeFile(`${rootName}/${item.name}`, item.content, (err) => {
                            if (err) {
                                console.log('failed')
                                throw err;
                            }
                        })
                        console.log(`${rootName}/${item.name}`);
                    }
                })
                //进一步执行cmd操作并在在目录projectName里执行npm install
                const runCMD2 = exec('npm install', {
                    cwd: projectName
                }, (error, stdout, stderr) => {
                    if (error) {
                        throw error;
                    }
                    console.log(stdout);
                });
            })
        })
        break;
    case 'help':
        // TODO
        console.log('this is do for create lp')
        console.log("zxl+'arg[1]:dowhat'+[if(arg[1]=='init')->'arg[2]':fileName]")
        break;
    case '-v':
        break;
    default:
        console.log('Wrong support')
        break;
}