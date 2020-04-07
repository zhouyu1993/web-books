# https://www.npmjs.com/

# https://nodejs.org/

# github 搜索 node

# https://stackoverflow.com/

# node + mongodb

# node.js 版本号

x.y.z

数字 z: 偶数位为稳定版本，奇数位为非稳定版本

# windows 下安装

node.js、git-bash

# linux 下安装

# Mac OS 下安装

# 浏览器与 node 环境

浏览器: window

node 环境: process

``` js
process.env
```

# 介绍

          JavaScript
              |
              |
|----------------------------|
|         nodejs api         |
|                            |
|   全局  内置的模块  第三方模块 | --- npm
|                            |
|   V8             libuv     |
|----------------------------|
              |
              |
  系统环境（window/macOS/linux）

V8

libuv

# nodemon

nodemon.json

# nrm

管理 npm 源

---

# node.js 模块 与 common.js 规范

# node.js 模块

- 核心模块
- 文件模块
- 第三方模块

# **API**

# URL

``` bash
node
```

``` bash
url
```

## url.parse

``` js
const url = require('url')

url.parse('https://www.baidu.com:9876/s?wd=夏亚倩#love=true')
```

Result

``` js
{
  protocol: 'https:', // 协议
  slashes: true, // 是否有双斜线
  auth: null, //
  host: 'www.baidu.com:9876', // 域名
  port: '9876', // 端口
  hostname: 'www.baidu.com', // 主机名
  hash: '#love=true', // 锚点
  search: '?wd=夏亚倩', // 查询字符串参数
  query: 'wd=夏亚倩', // 参数串
  pathname: '/s', // 路径名
  path: '/s?wd=夏亚倩', // 路径
  href: 'https://www.baidu.com:9876/s?wd=夏亚倩#love=true' // 完整地址
}
```

``` js
const url = require('url')

url.parse('https://www.baidu.com:9876/s?wd=夏亚倩#love=true', true)
```

Result

``` js
{
  protocol: 'https:', // 协议
  slashes: true, // 是否有双斜线
  auth: null, //
  host: 'www.baidu.com:9876', // 域名
  port: '9876', // 端口
  hostname: 'www.baidu.com', // 主机名
  hash: '#love=true', // 锚点
  search: '?wd=夏亚倩', // 查询字符串参数
  query: {
    wd: '夏亚倩'
  }, // 参数串被解析成 JSON
  pathname: '/s', // 路径名
  path: '/s?wd=夏亚倩', // 路径
  href: 'https://www.baidu.com:9876/s?wd=夏亚倩#love=true' // 完整地址
}
```

如果 urlString 不是字符串将会抛出 TypeError。

如果 auth 属性存在但无法编码则抛出 URIError

## url.format

``` js
const url = require('url')

url.format({
  protocol: 'https:', // 协议
  slashes: true, // 是否有双斜线
  auth: null, //
  host: 'www.baidu.com:9876', // 域名
  port: '9876', // 端口
  hostname: 'www.baidu.com', // 主机名
  hash: '#love=true', // 锚点
  search: '?wd=夏亚倩', // 查询字符串参数
  query: 'wd=夏亚倩', // 参数串
  pathname: '/s', // 路径名
  path: '/s?wd=夏亚倩', // 路径
  href: 'https://www.baidu.com:9876/s?wd=夏亚倩#love=true' // 完整地址
})
```

Result

``` js
https://www.baidu.com:9876/s?wd=夏亚倩#love=true
```

## url.resolve

``` js
const url = require('url')

url.resolve('https://www.baidu.com:9876/', '/s?wd=夏亚倩#love=true')
```

Result

``` js
https://www.baidu.com:9876/s?wd=夏亚倩#love=true
```

# querystring

``` js
{
  unescapeBuffer: [Function: unescapeBuffer],
  unescape: [Function: qsUnescape],
  escape: [Function: qsEscape],
  stringify: [Function: stringify],
  encode: [Function: stringify],
  parse: [Function: parse],
  decode: [Function: parse]
}
```

## querystring.stringify

序列化

常用三个参数

``` js
querystring.stringify({
  name: 'rainjoy',
  sex: 'man',
  age: '25',
})
```

Result

``` js
'name=rainjoy&sex=man&age=25'
```

``` js
querystring.stringify({
  name: 'rainjoy',
  sex: 'man',
  age: '25',
}, ',')
```

Result

``` js
'name=rainjoy-sex=man-age=25'
```

``` js
querystring.stringify({
  name: 'rainjoy',
  sex: 'man',
  age: '25',
}, ',', ':')
```

Result

``` js
'name:rainjoy,sex:man,age:25'
```

## querystring.parse

反序列化

常用三个参数

``` js
querystring.parse('name=rainjoy&sex=man&age=25')
```

Result

``` js
{
  name: 'rainjoy',
  sex: 'man',
  age: '25'
}
```

这里注意，如果参数之间连接符不是默认的 '&' 必须要加第二个参数，否则无法正常解析

``` js
querystring.parse('name=rainjoy,sex=man,age=25')
```

Result

``` js
{
  name: 'rainjoy,sex=man,age=25'
}
```

``` js
querystring.parse('name=rainjoy,sex=man,age=25', ',')
```

Result

``` js
{
  name: 'rainjoy',
  sex: 'man',
  age: '25'
}
```

同理，如果 key 与 value 的连接符不是默认的 '=' 必须要加第三个参数，否则无法正常解析

``` js
querystring.parse('name:rainjoy,sex:man,age:25', ',')
```

Result

``` js
{
  'name:rainjoy': '',
  'sex:man': '',
  'age:25': ''
}
```

``` js
querystring.parse('name:rainjoy,sex:man,age:25', ',', ':')
```

Result

``` js
{
  name: 'rainjoy',
  sex: 'man',
  age: '25'
}
```

## querystring.escape

编码

``` js
querystring.escape('htpps://w.cekid.com?keyword=<哈哈>')
```

Result

``` js
'htpps%3A%2F%2Fw.cekid.com%3Fkeyword%3D%3C%E5%93%88%E5%93%88%3E'
```

类似 `encodeURIComponent`

## querystring.unescape

编码

``` js
querystring.unescape('htpps%3A%2F%2Fw.cekid.com%3Fkeyword%3D%3C%E5%93%88%E5%93%88%3E')
```

Result

``` js
'htpps://w.cekid.com?keyword=<哈哈>'
```

类似 `decodeURIComponent`

# nodejs 相关至少

- 支持更多特性
- 不缓存请求和响应
- 处理流相关

## 什么是回调

【回调 callback】

软件模块之间总是存在着一定的接口，从调用方式上，可以把他们分为三类：同步调用、回调和异步调用。

同步调用是一种阻塞式调用，调用方要等待对方执行完毕才返回，它是一种单向调用；

回调是一种双向调用模式，也就是说，被调用方在接口被调用时也会调用对方的接口；

异步调用是一种类似消息或事件的机制，不过它的调用方向刚好相反，接口的服务在收到某种讯息或发生某种事件时，会主动通知客户方（即调用客户方的接口）。

回调和异步调用的关系非常紧密，通常我们使用回调来实现异步消息的注册，通过异步调用来实现消息的通知。而回调又常常是异步调用的基础。同步调用是三者当中最简单的。

编程分为两类：系统编程（system programming）和应用编程（application programming）。所谓系统编程，简单来说，就是编写库；而应用编程就是利用写好的各种库来编写具某种功用的程序，也就是应用。系统程序员会给自己写的库留下一些接口，即 API（application programming interface，应用编程接口），以供应用程序员使用。所以在抽象层的图示里，库位于应用的底下。

当程序跑起来时，一般情况下，应用程序（application program）会时常通过 API 调用库里所预先备好的函数。但是有些库函数（library function）却要求应用先传给它一个函数，好在合适的时候调用，以完成目标任务。这个被传入的、后又被调用的函数就称为回调函数（callback function）。

回调函数是你写一个函数，让预先写好的系统来调用。你去调用系统函数，是直调。让系统调用你的函数，就是回调。

你到一个商店买东西，刚好你要的东西没有货，于是你在店员那里留下了你的电话，过了几天店里有货了，店员就打了你的电话，然后你接到电话后就到店里去取了货。在这个例子里，你的电话号码就叫回调函数，你把电话留给店员就叫登记回调函数，店里后来有货了叫做触发了回调关联的事件，店员给你打电话叫做调用回调函数，你到店里去取货叫做响应回调事件。

``` js
// 系统函数
function systemProgramming (callback, something) {
  // 系统调用回调函数
  callback && callback(something)
}

// 回调函数
function applicationProgramming (something) {
  console.log(something)
}

// 调用系统函数
systemProgramming(applicationProgramming, 'hello')
```

## 什么是同步/异步

同步 synchronous sync 就是我调用一个功能，该功能没有结束前，我死等结果。

异步 asynchronous async 就是我调用一个功能，不需要知道该功能结果，该功能有结果后主动通知我（回调通知）

你想烧开水泡茶喝

1. 你用普通水壶烧水

同步阻塞：你烧水，就傻看着火等水烧开。水烧开后泡茶喝。

同步非阻塞：你烧水，然后去客厅看电视，时不时去看看水烧开没有。水烧开后泡茶喝。

``` js
let i = 0

while (i < 10) {
  i++
}

console.log(i) // 10
```

2. 你用响水壶烧水

异步阻塞：你烧水，就傻看着火等水烧开。水烧开后泡茶喝。

异步非阻塞：你烧水，然后去客厅看电视，水壶响之前就不再去看它。水壶响了，你就停止看电视，去把火关了，泡茶喝。

所谓同步异步，只是对于水壶而言。普通水壶，同步；响水壶，异步。

用户调用一个方法，用户为了得到结果，用户主动去轮询。

所谓阻塞非阻塞，仅仅对于你而言。你啥事不干等水开，阻塞；你等水的同时去看电视，非阻塞。

用户调用一个方法，有了结果后通知用户，用户再去获取。

``` js
let i = 0

setTimeout(() => {
	i++
  console.log(i) // 1 秒后输出 1
}, 1000)

console.log(i) // 0
```

## 什么是 I/O

input/output，即输入/输出端口

接口

## 什么是单线程/多线程

单线程：你谈对象，很专心，每次谈一个，谈了分手，才去谈下一个。

多线程：你谈对象，很花心，每次谈多个，脚踩多只船。每个都相安无事，皇帝后宫翻牌子过日子。但是，遇到情人节了，你陪谁过，就会出现冲突，出现争抢资源，分身乏术

## 什么是阻塞/非阻塞

阻塞: 就是我调用一个函数，在我没有接收完数据或者没有得到结果之前，我不会再做别的事情。

非阻塞: 就是我调用一个函数，然后我去做的别事情了。至于我怎么知道函数有没有结果呢，要么就是我隔段时间再次去询问，要么就是函数有了结果主动通知我。

## 什么是事件

事件是可以被控件识别的操作，如按下确定按钮，选择某个单选按钮或者复选框。每一种控件有自己可以识别的事件，如窗体的加载、单击、双击等事件，编辑框（文本框）的文本改变事件，等等。

事件有系统事件和用户事件。系统事件由系统激发，如时间每隔24小时，银行储户的存款日期增加一天。用户事件由用户激发，如用户点击按钮，在文本框中显示特定的文本。

一个事件去驱动绑定的控件来执行某项功能。

触发事件的对象称为事件发送者；接收事件的对象称为事件接收者。

## 什么是事件驱动 (event driven)

事件驱动是指在持续事务管理过程中，进行决策的一种策略，即跟随当前时间点上出现的事件，调动可用资源，执行相关任务，使不断出现的问题得以解决，防止事务堆积。

## 事件处理器 (event handler) 和基于事件驱动的回调 (event callback)

事件处理器，指的是确定控件如何响应事件的事件过程。事件处理器的名称由控件名称和相应事件的名称共同构成，例如“Form Load ()”表示，对象是“Form“窗体，“Load“表示窗体的加载事件，即窗体启动时发生的事件，对此事件进行编程可以确定窗体启动时所做的事情。

基于事件驱动的回调，？？？？？

## 什么是事件循环 (event loop)

### 为什么 JavaScript 是单线程？

JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。

JavaScript 的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

所以，为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。所以，这个新标准并没有改变 JavaScript 单线程的本质。

### 任务队列

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。

如果排队是因为计算量大，CPU 忙不过来，倒也算了，但是很多时候 CPU 是闲着的，因为 I/O 设备（输入输出设备）很慢（比如 Ajax 操作从网络读取数据），不得不等着结果出来，再往下执行。

JavaScript 语言的设计者意识到，这时主线程完全可以不管 I/O 设备，挂起处于等待中的任务，先运行排在后面的任务。等到 I/O 设备返回了结果，再回过头，把挂起的任务继续执行下去。

所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。

同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

``` bash
（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

（4）主线程不断重复上面的第三步。
```

"任务队列"是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，"任务队列"上第一位的事件就自动进入主线程。但是，由于存在后文提到的"定时器"功能，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程。

### Event Loop (事件循环)

主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。

![Philip Roberts的演讲图](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png)

上图中，主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在"任务队列"中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行那些事件所对应的回调函数。

执行栈中的代码（同步任务），总是在读取"任务队列"（异步任务）之前执行。

``` js
var req = new XMLHttpRequest();
req.open('GET', url);
req.onload = function (){};
req.onerror = function (){};
req.send();
```

上面代码中的req.send方法是Ajax操作向服务器发送数据，它是一个异步任务，意味着只有当前脚本的所有代码执行完，系统才会去读取"任务队列"。所以，它与下面的写法等价。

``` js
var req = new XMLHttpRequest();
req.open('GET', url);
req.send();
req.onload = function (){};
req.onerror = function (){};
```

也就是说，指定回调函数的部分（onload和onerror），在send()方法的前面或后面无关紧要，因为它们属于执行栈的一部分，系统总是执行完它们，才会去读取"任务队列"。

### 定时器

除了放置异步任务的事件，"任务队列"还可以放置定时事件，即指定某些代码在多少时间之后执行。这叫做"定时器"（timer）功能，也就是定时执行的代码。

定时器功能主要由 setTimeout() 和 setInterval() 这两个函数来完成，它们的内部运行机制完全一样，区别在于前者指定的代码是一次性执行，后者则为反复执行。以下主要讨论 setTimeout()。

setTimeout() 接受两个参数，第一个是回调函数，第二个是推迟执行的毫秒数。

``` js
console.log(1);
setTimeout(function () {
  console.log(2);
}, 1000);
console.log(3);
```

上面代码的执行结果是1，3，2，因为setTimeout()将第二行推迟到1000毫秒之后执行。

如果将 setTimeout() 的第二个参数设为 0，就表示当前代码执行完（执行栈清空）以后，立即执行（0毫秒间隔）指定的回调函数。

``` js
console.log(1);
setTimeout(function () {
  console.log(2);
}, 0);
console.log(3);
```

上面代码的执行结果总是1，3，2，因为只有在执行完`console.log(3);`以后，系统才会去执行"任务队列"中的回调函数。

总之，setTimeout(fn, 0) 的含义是，指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行。它在"任务队列"的尾部添加一个事件，因此要等到同步任务和"任务队列"现有的事件都处理完，才会得到执行。

HTML5 标准规定了 setTimeout() 的第二个参数的最小值（最短间隔），不得低于 4 毫秒，如果低于这个值，就会自动增加。在此之前，老版本的浏览器都将最短间隔设为10毫秒。另外，对于那些DOM的变动（尤其是涉及页面重新渲染的部分），通常不会立即执行，而是每 16 毫秒执行一次。这时使用 requestAnimationFrame() 的效果要好于 setTimeout()。

需要注意的是，setTimeout() 只是将事件插入了"任务队列"，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。要是当前代码耗时很长，有可能要等很久，所以并没有办法保证，回调函数一定会在 setTimeout() 指定的时间执行。

### Node.js 中的 Event Loop (事件循环)

Node.js 也是单线程的 Event Loop，但是它的运行机制不同于浏览器环境。

![BusyRich的示意图](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100803.png)

根据上图，Node.js 的运行机制如下。

``` bash
（1）V8引擎解析JavaScript脚本。

（2）解析后的代码，调用Node API。

（3）libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。

（4）V8引擎再将结果返回给用户。
```

除了 setTimeout 和setInterval 这两个方法，Node.js 还提供了另外两个与"任务队列"有关的方法：[process.nextTick](https://nodejs.org/docs/latest/api/process.html#process_process_nexttick_callback_args) 和 [setImmediate](https://nodejs.org/docs/latest/api/timers.html#timers_setimmediate_callback_args)。

process.nextTick 方法可以在当前"执行栈"的尾部----下一次 Event Loop（主线程读取"任务队列"）之前----触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。

setImmediate 方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次 Event Loop 时执行，这与 setTimeout(fn, 0) 很像。

``` js
process.nextTick(function () {
  console.log(1);

  process.nextTick(function () {
    console.log(2);
  });
});

setTimeout(function () {
  console.log('TIMEOUT FIRED');
}, 0)

// 1
// 2
// TIMEOUT FIRED
```

process.nextTick 是在“执行栈”的尾部执行，而 setTimeout 是在“任务队列”中，必须等“执行栈”中任务全部执行完才能进入“执行栈”。

再看 setImmediate。

``` js
setImmediate(function A () {
  console.log(1);

  setImmediate(function B () {
    console.log(2);
  });
});

setTimeout(function timeout () {
  console.log('TIMEOUT FIRED');
}, 0)
```

setImmediate 与 setTimeout(fn, 0) 各自添加了一个回调函数和 timeout，都是在下一次 Event Loop 触发。那么，哪个回调函数先执行呢？答案是不确定。运行结果可能是 1--TIMEOUT FIRED--2，也可能是 TIMEOUT FIRED--1--2。

可以确定的是 2 总是在 TIMEOUT FIRED 后执行。因为 setImmediate 总是将事件注册到下一轮 Event Loop，所以函数 A 和 timeout 是在同一轮 Loop 执行，而函数 B 在下一轮 Loop 执行。

令人困惑的是，Node.js 文档中称，setImmediate 指定的回调函数，总是排在 setTimeout 前面。实际上，这种情况只发生在递归调用的时候。

``` js
setImmediate(function () {
  setImmediate(function () {
    console.log(1);

    setImmediate(function () {
      console.log(2);
    });
  });

  setTimeout(function () {
    console.log('TIMEOUT FIRED');
  }, 0);
});

// 1
// TIMEOUT FIRED
// 2
```

我们由此得到了 process.nextTick 和 setImmediate 的一个重要区别：多个 process.nextTick 语句总是在当前"执行栈"一次执行完，多个 setImmediate 可能则需要多次 loop 才能执行完。

## 作用域

局部作用域

全局作用域

处在局部作用域里面，可以访问到全局作用域的变量。处在局部作用域外面，无法访问到局部作用域的变量。

``` js
var globalVariable = 'This is global variable'

function globalFunction () {
  var localVariable = 'This is local variable\n'

  console.log(globalVariable)

  console.log(localVariable)

  function localFunction () {
    var innerLocalVariable = 'This is inner local variable'

    globalVariable = 'global variable is changed'

    console.log(globalVariable)
    console.log(localVariable)
    console.log(innerLocalVariable)
  }

  localFunction()

  try {
    console.log(innerLocalVariable)
  } catch (e) {
    console.log(e)
    // ReferenceError: innerLocalVariable is not defined
  }
}

globalFunction()
```

## 上下文

`this`

``` js
var pet = {
  words: '...',
  speak: function () {
    // 这里 this 指的是 speak 这个函数的上文，即 pet
    console.log(this.words) // ...
    console.log(this === pet) // true
  }
}

pet.speak()
```

``` js
function pet (words) {
  this.words = words
  // 这里 this 指的是 pet 这个函数的上文，即 global 对象
  console.log(this.words) // ...
  console.log(this === pet, this === global) // false true
}

pet('...')
```

``` js
function Pet (words) {
  this.words = words
  this.speak = function () {
    // 这里 this 指的是 Pet 的实例对象
    console.log(this.words) // ...
    console.log(this) // Pet 的实例对象
    return this
  }
}

var cat = new Pet('...') // cat 是 Pet 的实例对象

var result = cat.speak() // result 是返回的 this

console.log(cat === result) // true
```

- 定义时的上下文

- 运行时的上下文

- 上下文是可以改变的，call 和 apply

call 接受参数列表

某个方法.call(this, 参数1, 参数2, ...)

某个方法.apply(this, [参数1, 参数2, ...])

某个方法能够让 this 去使用，并且将 参数1, 参数2, ... 作为这个方法的参数

``` js
var pet = {
  words: '...',
  speak: function (name, words) {
     console.log(name + ' say ' + words)
  }
}


var dog = {
  name: 'da huang',
  words: 'wang~wang~wang~'
}

pet.speak.call(dog, dog.name, dog.words)

pet.speak.apply(dog, [dog.name, dog.words])
```

``` js
function Pet (name, words) {
  this.name = name
  this.words = words

  this.speak = function (otherWords) {
     console.log(this.name + ' say ' + this.words + otherWords)
  }
}

function Dog (name, words) {
  Pet.call(this, name, words)
  // Pet.call(this, name, words)
}

var dog = new Dog('dahuang', 'wang~wang~wang~')

dog.speak('hahaha')
```

# HTTP 源码解读

- 在浏览器输入网址 'https://www.baidu.com'
- Chrome（浏览器）搜索自身的 DNS 缓存 `chrome://net-internals/#dns`
- 没有找到或者已经失效，搜索操作系统自身的 DNS 缓存
- 没有找到或者已经失效，读取本地 HOST 文件
- 浏览器向搜索操作系统发起一个 DNS 的系统调用
- 宽带运营商服务器查看自身的 DNS 缓存
- 没有找到或者已经失效，宽带运营商服务器发起一个迭代 DNS 解析的请求 (首先问根域名服务器[www.baidu.com 的 IP 地址是多少]；它说不知道，只知道 .com 域的 IP 地址；然后去问 .com 域[www.baidu.com 的 IP 地址是多少]；它说不知道，只知道 baidu.com 域的 IP 地址；然后去问 baidu.com 域[www.baidu.com 的 IP 地址是多少]；它说就在我这，把结果给了宽带运营商服务器)
- 宽带运营商服务器拿到结果，把结果返回给搜索操作系统，同时宽带运营商服务器自己缓存结果
- 搜索操作系统把结果返回给浏览器，同时搜索操作系统自己缓存结果
- 浏览器拿到结果（得到 https://www.baidu.com 对应 IP 地址），同时浏览器自己缓存结果
- 浏览器获得域名对应的 IP 地址后，发起 HTTP “三次握手”
- 第一次握手：建立连接时，HTTP 客户端发送 syn 包（syn=j）到服务器，并进入 SYN_SENT 状态，等待服务器确认。SYN：同步序列编号（Synchronize Sequence Numbers）。嘿，你能听到我说话吗？
- 第二次握手：服务器收到 syn 包，必须确认客户的 SYN（ack=j+1），同时自己也发送一个 SYN 包（syn=k），即 SYN+ACK 包，此时服务器进入 SYN_RECV 状态。ACK：确认标志。嘿，我能听到你说话。
- 第三次握手：客户端收到服务器的 SYN+ACK 包，向服务器发送确认包 ACK(ack=k+1），此包发送完毕，客户端和服务器进入 ESTABLISHED（TCP连接成功）状态，完成三次握手。好的，那我们聊聊吧。
- 客户端与服务器开始传输数据
- 客户端（Chrome（浏览器））创建随机端口，发起 TCP 连接请求
- TCP 连接请求通过层层路由设备、经过网卡、经过内核的 TCP/IP 协议栈、经过防火墙的过滤，最终到达服务端，从而建立起 TCP 连接请求
- 客户端（Chrome（浏览器））向服务器发送 HTTP 请求（HTTP1.0、HTTP1.1、HTTP2.0）
- 服务器在端口监听客户端请求，处理路径参数等，把一系列处理后的结果返回给客户端（Chrome（浏览器））
- 客户端（Chrome（浏览器））根据拿到的结果进行解析，如果是页面会进行渲染

## 请求和响应

发送 HTTP 头信息和正文信息

### HTTP 头信息（Headers）

附加信息：内容类型、服务端发送响应的日前、HTTP 状态码

### HTTP 正文信息

### Network

#### Headers

- General
- Response Headers
- Request Headers
- Query String Parameters

#### Timing 时间线

- Stalled 等待时间
- Proxy negotiation 代理协商时间
- Request sent 请求发送时间
- Waitting (TTFB) 请求发送后到收到响应的时间
- Contend Download 接收（下载）响应的时间

#### Request Method

- GET
- POST
- PUT
- DELETE
- HEAD
- TRACE
- OPTIONS

#### Status Code

- 1xx
- 1xx
- 3xx
- 4xx
- 5xx

## [HTTP 的源码](https://github.com/nodejs/node/blob/master/lib/http.js)

带下划线的变量一般代表私有模块。

例如 http.createServer，创建一个服务器。

``` js
const {
  Server,
} = require('_http_server');

function createServer (opts, requestListener) {
  return new Server(opts, requestListener);
}
```

##
