/**
 * 从流中读取文件
 */
const fs = require('fs');
let data = '';

// 创建可读流
const readerStreams = fs.createReadStream('../../data/data.txt');

readerStreams.setEncoding('utf8');

// 处理流事件 -> data, end and error
readerStreams.on('data', (chunk) => {
    data += chunk;
})

readerStreams.on('end', () => {
    console.log(data);
})

readerStreams.on('error', (error) => {
    console.log(error);
})

console.log('finish');
