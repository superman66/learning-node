# Node.js 全局对象

## __filename
表示当前正在执行的脚本的文件名。它将输出文件所在位置的**绝对路径**。如果是在模块中，返回的值是模块文件的路径。
## __dirname
当前执行脚本所在的目录
## setTimeout(cb, ms)

## clearTimeout(t)

## setInterval(cb, ms)

## console

## Buffer
## process
process 是一个全局对象，也就是意味着使用它时无需引入。直接调用即可
process 用于描述**当前 Node.js 进程状态的对象，提供了一个与操作系统的简单接口**。
下面是 process 常用的事件（EventEmiiter 的实例）：
* exit - 当进程准备退出时触发
* beforeExit - 当 node 清空事件循环，
* uncaughtException - 当一个异常冒泡到事件循环，触发这个事件
* Signal 事件 - 当进程接收到信号就触发。

关于 `exit` 有专门的退出状态码来表示，默认是0
更多关于 process 可以阅读 [process | Node.js API 文档](http://nodejs.cn/api/process.html#process_process)
