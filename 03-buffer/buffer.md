# Node.js Buffer(缓冲区)
由于 JavaScript 本身只有字符串数据类型，并没有二进制数据类型。但是在处理 TCP 流或者文件流的时候，必须使用二进制数据。
因此在 Node.js 中定义了一个 Buffer 类，专门用于创建一个专门存放二进制数据的缓存区。
Buffer 类的出现使得 Node.js 可以存储原始数据的方法，可以让 Node.js 处理二进制数据。每当需要 Node.js 中处理 I/O 操作中的移动数据时，就有可能使用 Buffer 库。
一个 Buffer 类似于一个整数组，但它对应于 V8 堆内存之外的一块原始内存。

## 创建 Buffer 类
Node.js Buffer 创建方式有多种方式：
**方式一**
创建长度为指定长度字节的 Buffer 实例
```javascript
const buffer1 = new Buffer(10);
```

**方式二**
通过给定的数组创建 Buffer 实例
```javascript
const buffer2 = new Buffer([10,123,324,23,4]);
```

**方式三**
通过一个字符串创建 Buffer 实例
```javascript
const buffer3 = new Buffer('node.js buffer', 'utf-8');
```
`utf-8`是默认的编码方式，此外 Buffer 还支持以下编码：`ascii`、`uft16le`、`usc2`、`base64`和`hex`。

## 写入缓冲区
语法
```javascript
buf.write(string[, offset[, lenght]][, encoding])
```
参数：
* string - 写入缓冲区的字符串
* offset - 缓冲区开始写入的索引值，默认为0
* length - 写入的字节数，默认为 buffer.length
* encoding - 使用的编码，默认 utf-8

上述实际写入的大小。如果 buffer 空间不足，只会写入部分字符串。

demo:
```javascript
const buf = new Buffer(256);
console.log(buf);

const len = buf.write('test write in buffer');
console.log("写入的字节数：" + len);
```

## 从缓冲区读数据
语法如下
```javacript
buf.toString([encoding, [, start[, end]]])
```
参数：
* encoding - 编码
* start - 指定开始读取的索引位置，默认为0
* end - 结束位置，默认为缓冲区的末尾

**返回值**

解码缓冲区数据并使用指定的编码返回字符串。

demo
```javascript
let buf = new Buffer(26);

for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));         // abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5));   // abcde
console.log(buf.toString('utf8', 0, 5));    // abcde
console.log(buf.toString(undefined, 0, 5)); // abcde
```

## 将 Buffer 转换为 JSON 对象
语法
```javascript
buf.toJSON()
```

## 缓冲区合并
语法
```javascript
Buffer.concat(list[, totalLength])
```
参数：
* list - 用于合并的 Buffer 对象数组列表
* totalLength - 指定合并后 Buffer 对象的总长度

**返回值**
返回一个多个成员合并的新 Buffer 对象。

## 缓冲区比较
语法
```javascript
buf.compare(otherBuffer)
```
**返回值**

## ...其他方法具体参加文档s
