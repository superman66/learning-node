# Node.js 中的 EventEmitter
在 Node.js 中，所有的 I/O 操作在完成时都会发送一个事件到事件队列。比如：
* `net.server` 对象在每次有连接时分发一个事件
* `fs.readStream` 对象在文件被打开时发出一个事件。

所有这些产生事件的对象都是 `events.EventEmitter` 的实例。

# EventEmitter 类
Node.js 中 events模块只提供一个对象：`events.EventEmitter`。它的核心就是 **事件触发与事件监听功能的封装**。
如果 EventEmitter 对象在实例化时发生错误，会触发 error 事件。当添加新的监听器时，`newListener` 事件会被触发；当监听器被移除时，`removeListener` 会被触发。
```javascript

const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();

event.on('test_event', () => {
    console.log('test_event trigger');
})

setTimeout(() => {
    event.emit('test_event')
}, 1000)

//1s后输出
test_event trigger
```
EventEmitter 的每个事件由一个事件名和若干个参数组成。事件名是一个字符串，通常表达一定的含义。对于每个事件，EventEmitter支持若干个事件监听器。
当事件触发时，注册到这个事件的事件监听器会被依次调用，事件参数作为回调函数传递。如下面的例子 `events-02.js`：
```javascript
const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('someEvent', (arg1, arg2) => {
    console.log('listener1', arg1, arg2);
})

emitter.on('someEvent', (arg1, arg2) => {
    console.log('listener2', arg1, arg2);
})

emitter.emit('someEvent', 'test_arg1', 'test_arg2');

// 输出结果
listener1 test_arg1 test_arg2
listener2 test_arg1 test_arg2
```
`on` 和 `emit` 是 EventEmitter 提供的两个属性。on 用于绑定事件，emit 用于触发事件。EventEmiiter 还有其他属性：
* `addEventListener(event, listener)`: 为指定事件添加一个监听器到监听器数组的尾部；
* `on(event, listener)`: 为指定事件注册一个监听器，接受一个字符串和一个回调函数。（添加和注册的区别？） 
* `once(event, listener)`: 注册一次性事件监听器，触发一次就移除该监听器
* `removeListener(event, listener)`: 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器
* `removeAllListener([event])`: 移除所有事件的监听器
* `setMaxListeners(n)`: EventEmitter 默认的事件监听器数量是10，超过就会输出警告信息。使用 `setMaxListeners` 函数用于提供监听器的默认数量的限制
* `listeners(event)`: 返回指定事件的监听器数组
* `emit(event, [arg1], [arg2], [...])` 按参数的顺序 执行每个监听器，如果事件有注册监听返回true，否则返回false

关于 `addEventListener` 和 `on` 有何区别？答案是没有区别。二者是一样的。通过源码可以看到[https://github.com/nodejs/node-v0.x-archive/blob/master/lib/events.js#L188]()：
```javascript
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
```
## error 事件
error 事件包含了错误的语义，程序在遇到异常的时候会触发 error 事件。当 error 被触发时，EventEmitter 规定，如果没有响应的监听器，Node.js 会把它当做异常，退出程序并输出错误信息。所以我们一般要为触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。