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

