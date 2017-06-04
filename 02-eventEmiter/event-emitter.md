# Node.js 中的 EventEmitter
在 Node.js 中，所有的 I/O 操作在完成时都会发送一个事件到事件队列。比如：
* `net.server` 对象在每次有连接时分发一个事件
* `fs.readStream` 对象在文件被打开时发出一个事件。

所有这些产生事件的对象都是 `events.EventEmitter` 的实例。

# EventEmitter 类
Node.js 中 events模块只提供一个对象：`events.EventEmitter`。它的核心就是 **事件触发与事件监听功能的封装**。
如果 EventEmitter 对象在实例化时发生错误，会触发 error 事件。当添加新的监听器时，`newListener` 事件会被触发；当监听器被移除时，`removeListener` 会被触发。