const fs = require('fs');

const readStreams = fs.createReadStream('../../data/data.txt');
const writeStreams = fs.createWriteStream('../../data/output.txt');

readStreams.pipe(writeStreams);
console.log('程序执行结束');