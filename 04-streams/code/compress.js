const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('../../data/data.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('../../data/input.txt.gz'));

console.log('文件压缩完成');
