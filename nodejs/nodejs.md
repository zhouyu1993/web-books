# nodejs 中文文档

https://xiangfa.org/book/nodejs/documentation/

# 用法和示例

``` bash
node [options] [v8 options] [script.js | -e "script"] [arguments]
```

* <a href="../test/nodejs/webserver.js">“Hello World” 的 Web 服务器 示例</a>

# 全局对象(Globals)
## 方法和属性

### Buffer 类

* {Function}

详见 Buffer。

### __dirname

* {String}

<b>当前</b>执行脚本所在的目录名称。

__dirname 不是全局的，而是每个模块内部的。

### __filename

* {String}

<b>当前</b>执行脚本的文件名。这是该脚本文件经过解析后生成的绝对路径。在模块中此变量值是该模块的文件路径。对于主程序而言，这与命令行中使用的文件名未必相同。

__filename 不是全局的，而是每个模块内部的。

### global

* {Object} 全局命名空间对象

在浏览器中，顶级作用域就是全局作用域。这也意味着在浏览器中，如果在全局作用域内使用 var something 将会声明一个全局变量。在 Node.js 中则不同。顶级作用域并非全局作用域；在 Node.js 模块中使用 var something 会生成该模块的一个本地变量。

### process

* {Object} 进程对象

详见 process。

### module

* {Object}

当前模块的引用。尤其是 module.exports 用于定义模块的导出并确保该模块能够通过 require() 引入。

module 不是全局的，而是每个模块内部的。

详见 module。

### require()

* {Function}

引入模块。

require 不是全局的，而是每个模块内部的。

详见 module。

require.cache

require.resolve()

### console

* {Object}

用于打印 stdout 和 stderr。

详见 console 。

### timers 定时器

## 具体介绍

### console 控制台

console 模块提供了一个简单的调试控制台，与 Web 浏览器提供的 JavaScript 控制台机制类似。

<pre>
console.log(console)</pre>
<pre>
Console {
  log: [Function: bound ],
  info: [Function: bound ],
  warn: [Function: bound ],
  error: [Function: bound ],
  dir: [Function: bound ],
  time: [Function: bound ],
  timeEnd: [Function: bound ],
  trace: [Function: bound trace],
  assert: [Function: bound ],
  Console: [Function: Console]
}</pre>
<pre>
const log = console.log
log(1)</pre>

### timers 定时器

timer 模块暴露了一个全局的 API 用于调度在某个未来时间段内调用的函数。因为定时器函数是全局的，所以你没有必要调用 require('timers') 来使用该 API。

Node.js 中的计时器函数实现了与 Web 浏览器提供的定时器类似的 API，但它使用了基于 Node.js 事件循环构建的不同内部实现。

<pre>
const log = console.log
const t = require('timers')
log(t)
</pre>
<pre>
{
  active: [Function],
  _unrefActive: [Function],
  unenroll: [Function],
  enroll: [Function],
  setTimeout: [Function],
  clearTimeout: [Function],
  setInterval: [Function],
  clearInterval: [Function],
  setImmediate: [Function],
  clearImmediate: [Function]
}</pre>

* 预定定时器

> setTimeout(callback, delay[, ...args])
setInterval(callback, delay[, ...args])
setImmediate(callback[, ...args])


* 取消定时器

> clearTimeout(timeout)
clearInterval(timeout)
clearImmediate(immediate)

### modules 模块

模块加载系统

exports.vars + require  // 将每个变量当做属性输出

module.exports + require // 将整个对象输出

export + import // ES 6

* a.js
<pre>
const log = console.log
const x = 1
exports.log = log
exports.x = x</pre>
* b.js
<pre>
const a = require('./a')
console.log(a)
a.log(a.x)</pre>

* a.js
<pre>
const log = console.log
const x = 1
module.exports = {
    log,
    x
}</pre>
* b.js
<pre>
const a = require('./a')
console.log(a)
a.log(a.x)</pre>

<strong>注意：</strong>给 module.expors 的赋值必须立即生效，不能在回调中执行。这样是不起作用的：

* a.js
<pre>
const log = console.log
const x = 1
setTimeout(() => {
    module.exports = {
      log,
      x
    }
})</pre>
* b.js
<pre>
const a = require('./a')
console.log(a) // {} 空
a.log(a.x) // error</pre>


<strong>核心模块</strong>。定义在 Node.js 源代码的 lib/ 目录下。

require() 总是会优先加载核心模块。例如，require('http') 总是返回编译好的HTTP模块，而不管是否有同名文件。

<strong>文件模块</strong>。如果按文件名没有查找到，那么 Node.js 会添加 .js 和 .json 后缀名，再尝试加载；如果还是没有找到，最后会加上 .node 的后缀名再次尝试加载。

<strong>文件夹模块</strong>。可以把程序和库放到一个单独的文件夹里，并提供<b>单一入口</b>来指向它。

* 在文件夹的根目录创建package.json文件，配置入口：<pre>{
    "name": "some-library",
    "main": "./lib/some-library.js"
}</pre>
require('./some-library') 就将会去加载 ./some-library/lib/some-library.js

* 没有 package.json 文件，那么 Node.js 就尝试加载这个路径下的 index.js 或者 index.node 。 require('./some-library') 就尝试加载./some-library/index.js或者./some-library/index.node

<strong>node_modules模块</strong>。如果 require() 中的模块名不是一个本地模块，也没有以 '/' 、 '../' 或是 './' 开头，那么 Node.js 会从当前模块的父目录开始，尝试在它的 /node_modules 文件夹里加载相应模块。

例如，'/src/js/foo.js'里require('bar.js')，加载顺序是：

* /src/js/node_modules/bar.js
* /src/node_modules/bar.js
* /node_modules/bar.js

<strong>循环</strong>。循环调用时，一个模块可能在返回时并不被执行。

* a.js
<pre>
console.log('a starting');
exports.done = false;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');</pre>
* b.js
<pre>
console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');</pre>
* c.js
<pre>
console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);</pre>

* 这里运行c.js,发现c运行到一半,开始调用a;a开始运行，a运行到一半，开始调用b;而b又运行到一半，又开调用a。这里为了防止无限的循环，a会返回一个 unfinished copy 给b,然后b就知道了不运行a了,自己先运行完再说;b运行完后,回到a,a就接着运行完;a运行完,回到c,结果c又开始调用b,b返回一个 unfinished copy 给c,c就知道了不运行b了,自己先运行完再说,最后c运行完了。
<pre>$ node c.js
main starting
a starting
b starting
in b, a.done = false
b done
in a, b.done = true
a done
in main, a.done=true, b.done=true</pre>

<strong>缓存</strong>。模块在第一次加载后会被缓存，多次调用只会执行一次。

### events 事件

<pre>const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()</pre>

#### EventEmitter 类

* newListener 事件

>> eventName {String} | {Symbol} 被监听的事件的名称

>> listener {Function} 事件处理函数

>> EventEmitter 实例在一个监听器添加到它内部的监听器数组前会触发自身的 'newListener' 事件。注册了 'newListener' 事件的监听器将被传递事件名称并添加一个监听器的引用。

<pre>const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()
myEmitter.once('newListener', (eventName, listener) => {
    if (eventName === 'xxxx') {
        myEmitter.on('event', listener)
    }
})
myEmitter.on('xxxx', () => {
    console.log('A');
})
myEmitter.emit('event')</pre>

>> 返回 A。首先注册xxxx事件后，触发了 'newListener' 事件，可以获取到刚刚注册事件的事件名以及事件函数；又重新注册event事件。然后emit触发这个event事件。

* removeListener 事件

>> eventName {String} | {Symbol} 被监听的事件的名称

>> listener {Function} 事件处理函数

>> 在一个监听器被移除后触发。

* emitter.on(eventName, listener)
* emitter.addListener(eventName, listener)

>> 创建(可多次)监听

* emitter.once(eventName, listener)

>> 创建一个一次性监听

* emitter.removeListener(eventName, listener)
* emitter.removeAllListeners([eventName])

>> 删除监听

* emitter.emit(eventName[, arg1][, arg2][, ...])

>> 调用监听

* emitter.listeners(eventName)

>> 返回名为 eventName 所有监听(数组)

* emitter.listenerCount(eventName)

>> 返回名为 eventName 所有监听的个数(数组的长度)

* emitter.setMaxListeners(n)

>> 默认多于10个监听会报警，可以设置最大值避免

* emitter.listenerCount(eventName)

>> 返回当前 EventEmitter 实例的最大监听器数量

#### 错误事件

应该注册一个'error'事件监听，用于处理错误

<pre>const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()
myEmitter.on('error', (e) => {
    console.log(`something error: \n`, e)
})
try {
  console(1)
} catch (e) {
  myEmitter.emit('error', e)
}</pre>

#### 绑定一次性事件

once 只能被触发一次

#### 给监听器传参

emitter.emit(eventName[, arg1][, arg2][, ...])

后面是参数

#### 异步vs同步

一般安卓注册顺序，进行同步调用。当然也可以选择 setImmediate() 和 process.nextTick() 方法去选择一种异步的操作模式

### errors 错误

详见 errors

### debugger 调试器

调试界面

### Buffer

详见。

### stream 流

流是一个被 Node.js 中很多对象所实现的抽象接口。比如对一个 HTTP 服务器的请求是一个流，process.stdout 也是一个流。流是可读、可写或兼具两者的。所有流都是 EventEmitter 的实例。

require('stream') 加载 Stream 基类，这些基类提供了可读（Readable）流、可写（Writable）流、双工（Duplex）流和转换（Transform）流。

### querystring 字符串解码

<pre>const querystring = require('querystring')
console.log(querystring)

//

{
  unescapeBuffer: [Function],
  unescape: [Function: qsUnescape],
  escape: [Function],
  encode: [Function],
  stringify: [Function],
  decode: [Function],
  parse: [Function]
}</pre>

#### querystring.stringify(obj[, sep][, eq][, options])

序列化一个对象到一个查询字符串，默认以分隔符(&)和分配符(=)拼接。

<pre>querystring.stringify({
    foo: 'bar',
    baz: ['qux', 'quux'],
    corge: ''
})
// returns 'foo=bar&baz=qux&baz=quux&corge='

querystring.stringify({
    foo: 'bar',
    baz: 'qux'
}, ';', ':')
// returns 'foo:bar;baz:qux'

querystring.stringify({
    w: '中文',
}, ';', ':', {
    encodeURIComponent: 'gbkEncodeURIComponent'
})
// returns 'w=%D6%D0%CE%C4&foo=bar'</pre>
