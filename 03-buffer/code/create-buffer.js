const buf = new Buffer(256);
console.log(buf);

const len = buf.write('test write in buffer');
console.log("写入的字节数：" + len);

