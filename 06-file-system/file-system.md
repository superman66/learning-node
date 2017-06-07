# Node.js 文件系统
文件 I/O 是由简单封装的标准 POSIX 函数提供。通过 `require('fs')` 即可使用该模块。所有的方法都支持异步和同步的形式。
异步方法的最后一个参数都是回调函数。回调函数的第一个参数都会保留给异常。如果操作成功，则第一个参数是 null 或者 undefined。
当使用同步方法时，任何异常都会被立即抛出。可以使用 `try/catch` 来捕获异常。
建议使用异步方法来获取文件。同步会阻塞整个进程，直到完成。所以异步比同步会高效。
## 读取文件
```javascript
const fs = require('fs');

// 异步读取文件
fs.readFile('../../data/output.txt', (err, data) => {
    if(err){
        return console.log(err);
    }
    console.log(data.toString());
})

// 同步读取文件
const data = fs.readFileSync('../../data/output.txt');
console.log('同步读取文件' + data);

```

## 打开文件
语法如下：
```javascript
fs.open(path, flags[, mode], callback)
```
参数说明：
* path - 文件路径
* flags - 文件打开的行文（见后文）
* mode - 设置文件的模式（权限），文件创建的默认权限为0666（可读、可写）
* callback - 回到函数

其中 flags 的值可以为以下值：
* r 
* r+
* rs
* rs+
* w
* wx
* w+
* wx+
* a
* ax
* a+
* ax+

## 获取文件信息
```javascript
fs.stat(path, callback)
```
## 写入文件
```javascript
fs.writeFile(file,data[, option], callback)
```

>更多方法见文档：[fs | Node.js 文档](http://nodejs.cn/api/fs.html)