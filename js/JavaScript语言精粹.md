# 1 精华

介绍 JavaScript

## 2 语法

## 2.1 空白(空格)

## 2.2 标识符

字符开头，选择性加上一个或多个字符、数字或下划线

## 2.4 6种数据类型
原始类型：Null、Undefined、布尔、字符串、数字

对象：数组、对象、Function、Date ...

Null、Undefined、布尔、字符串、数字、数组、对象


函数也是对象

## 2.5 语句：条件、循环、选择

## 2.6 表达式、优先级

## 2.7 字面量

## 2.8 函数

# 3 对象

一切都是对象

属性

方法

原型

原型链

## 3.1 对象字面量 名/值对

## 3.2 检索 [] .

## 3.3 更新，赋值语句

## 3.4 引用，对象的引用，内存地址

## 3.5 原型

## 3.6 反射

## 3.7 枚举

## 3.8 删除

## 3.9 减少全局变量污染

# 4 函数 function

## 4.7 给类型增加方法

<pre>
// 为所有函数添加method方法：Function/Array/String/Number/RegExp/Boolean
Function.prototype.method = function (name, func) {
  if (this.prototype[name]) return this;
  this.prototype[name] = func;
  return this;
}
// 新增正负取整: 根据正负判断是试用 Math.ceiling 还是 Math.floor
Number.method('integer', function () {
  return Math[this < 0 ? 'ceiling' : 'floor'](this);
});
// 新增移除字符串首尾空白的方法
String.method('trim', function () {
	return this.replace(/(^\s*)|(\s*$)/g, '');
})
</pre>

## 4.8 递归 recursion

递归函数就是直接或间接地调用自身的一种函数。  

尾递归，这是通过 return 来调用自身，即函数的返回值是函数自身。

## 4.9 作用域 scope

作用域控制着变量与参数的可见性及生命周期。减少变量名称冲突，提供自身内存管理。

ES6提出块级作用域，理由const/let来定义变量。全局变量一般在顶部声明。

## 4.10 闭包 closure

作用域使得内部函数可以访问外部函数的参数和变量(除了this和arguments)。内部函数拥有比外部函数更长的生命周期。

闭包使得函数可以访问它被创建时所处的上下文环境！

<pre>
function a(x) {
  console.log(m+x);
};
function b(s) {
  var m = s;
};
b(1);
a(2);  // 这里报错，m未定义。因为a中无法读取b中的m

function b(s) {
  var m = s;
  return function a(x) {
    console.log(m+x);
  };
};
b(1)(2);  // 3。闭包
</pre>

## 4.11 回调 callback

这里回调指异步请求的回调。

## 4.12 模块 module

使用函数和闭包来构建模块。项目模块化，可重构，复用，类似接口似的封装。

## 4.13 级联

一些函数无返回值。如果设置函数返回值是this，而不是undefined，那么就可以形成级联。例如jquery的方法。

这在ES6的class构造器中，封装多个方法，非常有用。

## 4.14 套用

套用是指将函数与传递给它的参数相结合去产生一个新的函数。(不理解,几乎没怎么用)

## 4.15 记忆

<pre>
var fibonacci = function (x) {
  return x < 2 ? x : fibonacci(x-1) + fibonacci(x-2);
}
for (var i = 0; i <= 10; i++) {
  console.log(i + ':' + fibonacci(i));
}
// for循环是11次，但是函数fibonacci被调用了453次，很多次是计算过的、重复的计算。
</pre>

使用数组进行记忆暂存。

<pre>
var fibonacci = function () {
  var memo = [0, 1];
  var fib = function (n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n-1) + fib(n-2);
      memo[n] = result;
    };
    return result;
  }
  return fib;
}();

for (var i = 0; i <= 10; i++) {
  console.log(i + ':' + fibonacci(i));
}
// for循环是11次，函数fibonacci被调用了29次，大大优化了。
</pre>

我们把这种方法格式化

<pre>
var memoizer = function (memo, fundamental) {
  var shell = function (n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fundamental(shell, n);
      memo[n] = result;
    };
    return result;
  }
  return shell;
};
</pre>

现在来使用memoizer来定义fibonacci函数

<pre>
var fibonacci = memoizer([0, 1], function(shell, n) {
  return shell(n-1) + shell(n-2);
});
console.log(fibonacci(10))

// 具体fundamental函数返回什么，其实就是算法了。例如阶乘：

var fibonacci = memoizer([1, 1], function(shell, n) {
  return n * shell(n-1);
});
console.log(fibonacci(10))

</pre>

# 5 继承 extends / inheritance

## 5.1 伪类

看了半天没看懂，所以总结一下,"伪类"不是什么好方法，所以尽可能不用，甚至说new也尽可能不用。那么类的继承要通过什么呢？以后再说。

## 5.2 对象说明符

如果构造器，需要接受大量参数，这是非常可怕的，因为我们很难记住参数的顺序，好的方法是，将所有参数赋给一个对象，将对象作为参数传入。

<pre>
func(a, b, c, d);

// 应该写成：

var conf = {
  first: a,
  second: b,
  third: c,
  fourth: d
}
func(conf);
</pre>

我们可以给构造器定义默认值config，然后入参conf传入后与默认值config进行合并

ES6中写法：var option = { ...config, ...conf }

## 5.3 原型 prototype

原型链。原型。实例。旧对象。新对象。继承。差异化继承。

一个内部作用域会继承它的外部作用域。

不懂。

## 5.4 函数化 functional

函数式模式比伪类模式好，更好的封装和信息隐藏，可以访问父类方法。

## 5.5 部件 parts

不懂。意思好像是形成一个封装方法，一个部件、插件、模块组件，可供外部引用。

# 6 数组

## 6.1 数组字面量

数组字面量：方括号[]中包含0个或多个用逗号分隔的值的表达式。

## 6.2 数组属性

length

## 6.3 删除

delete 运算符可以从数组中删除元素

<pre>
var a = [0, 1, 2];
delete a[1];
// true;如果a[1]存在，则可以delete,返回true;否则返回fasle
// a变为[0, undefined × 1, 2],这里a[1]元素的值被清除，但位置还在
</pre>

splice(index, num) 方法：index表示索引，从哪个元素开始，num表示数量；从哪个元素开始进行删除几个元素

<pre>
var a = [0, 1, 2];
a.splice(1, 2);
// [1, 2];返回的是删除的元素数组；如果没有元素被删除，则返回空数组[]
// a变为删除后的元素[0]
</pre>

## 6.4 枚举

for in 语句可以遍历，但是不保证顺序

常规的for可以避免这一问题

## 6.5 混淆

数组和对象的区别,判断

## 6.6 方法

Array.prototype

自定义加法、乘法

<pre>
var add = function (a, b) {
  return a + b
}
</pre>

## 6.7 维度

二维数组与一维数组的互化

<pre>
var a = [[1], [2], [3]];
console.log(a[1][0]);  // 2
</pre>

# 7 正则表达式

以方法的形式，处理字符串

常用的方法有：regexp.exec、regexp.test、string.match、string.replace、string.search、string.split

这个详细见<a href="https://github.com/zhouyu1993/web-books/blob/master/js/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.md">正则表达式.md</a>

# 8 方法

## Array

### Array.prototype.concat 返回新数组，自身不变

<pre>
var a = [0];
var b = [1, 2];
var c = a.concat(b); // b是数组，将数组的每个元素都加都a中
console.log(c); // [0, 1, 2]

var d = a.concat(1, '2', [3, 4], {a:1}); // 每个参数作为元素，当然数组仍然将其元素分开
console.log(d); // [0, 1, "2", 3, 4, {'a': 1}]
</pre>

## Array.prototype.join(string) 将数组元素排列成字符串并按某string分隔，自身不变

<pre>
var a = [0, 1, 2];
var b = a.join(' '); // 按空格分隔
console.log(b); // 0 1 2
</pre>

通常可以配合&用来拼接url.search

## Array.prototype.pop 删除数组最后一个元素，并返回删除后的数组长度，即原数组长度减一，自身改变

<pre>
var a = [0, 1, 2];
var b = a.pop();
console.log(a, b); // [0, 1] 2
</pre>

## Array.prototype.push 数组尾端增加元素，返回增加后数组的长度，自身改变

<pre>
var a = [0];
var b = a.push(1, 2, [1]); // 数组不会解构成元素插入，而是整体被作为元素
console.log(a, b); // [0, 1, 2, Array[1]] 4
</pre>

## Array.prototype.reverse 反转数组元素顺序，返回反转后的数组，自身改变

<pre>
var a = [0, 1];
a.reverse();
console.log(a); // [1, 0]
</pre>

## Array.prototype.shift 移除数组第一个元素，并返回移除的第一个元素值，自身改变

<pre>
var a = [0, 1];
var b = a.shift();
console.log(a, b); // [1] 0
</pre>

## Array.prototype.slice(start, end) [start, end) 去复制数组并返回新数组，自身不变

<pre>
var a = [0, 1, 2];
var b = a.slice(1); // 从1开始，end未定义则默认一直到结尾
var c = a.slice(1, 2); // 从1开始，[1, 2) 前闭后开，不包括2
console.log(b, c); // [1, 2] [1]
</pre>

## Array.prototype.sort(function () {}) 安装function逻辑进行数组排序。返回

<pre>
var arr = [0, 1, 2];
arr.sort(function (a, b) {
    console.log(arr, a, b)
    return b - a;  // 将元素两两进行比较，b - a 为true,则返回元素交换位置
});
</pre>

sort方法不稳定，一般不适应

## Array.prototype.splice(start, deleteCount, item...) 从start位置开始移除deleteCount个元素，并用新的若干item去替换它们。返回移除的元素形成的数组。自身改变

<pre>
var a = [0, 1, 2, 3];
var b = a.splice(1, 1, 'a', 'b');
console.log(a, b); // [0, "a", "b", 2, 3] [1]
</pre>

注意：splice和slice不同

## Array.prototype.unshift(item...) 数组顶端增加元素，返回增加后的数组长度，自身改变

<pre>
var a = [0, 1, 2, 3];
var b = a.unshift(4, 5);
console.log(a, b); // [4, 5, 0, 1, 2, 3] 6
</pre>

# Function

## Function.prototype.apply 在指定 this 值和参数（参数以数组或类数组对象的形式存在）的前提下，调用某个函数或方法

接受的是数组或类数组对象：apply(thisArg[, argsArray])

用于传递一个将被绑定到this上的对象和一个可选的参数数组

如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。

> thisArg

在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象。

> argsArray

一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。如果该参数的值为null 或 undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。由此可以想到浏览器兼容性上，apply没有call好。

<pre>
var nodeList = document.getElementsByTagName("*") // 返回NodeList节点列表类数组，不具有数组方法
var nodeArr = Array.prototype.slice.call(nodeList);
var nodeArr = Array.prototype.slice.call(nodeList, [start, end]); // 这里[start, end]这是slice方法的参数,必须写成数组形式传入
</pre>

## Function.prototype.call 在指定 this 值和若干个指定的参数值的前提下，调用某个函数或方法

接受的是若干个参数的列表：call(thisArg[, arg1[, arg2[, ...]]])

> thisArg

在函数运行时指定的this值。需要注意的是，指定的this值并不一定是该函数执行时真正的this值，如果这个函数处于非严格模式下，则指定为null和undefined的this值会自动指向全局对象(浏览器中就是window对象)，同时值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象。

> arg1, arg2, ...

指定的参数列表。

<pre>
var nodeList = document.getElementsByTagName("*") // 返回NodeList节点列表类数组，不具有数组方法
var nodeArr = Array.prototype.slice.call(nodeList);
var nodeArr = Array.prototype.slice.call(nodeList, [start], [end]); // 这里[start], [end]这是slice方法的参数
</pre>

# Number

## Number.prototype.toExponential(fractionDigits)

Exponential 指数，fractionDigits 分位数；将数值转化为几位小数的指数形式的字符串

fractionDigits [0, 20]

<pre>
Math.PI // 3.141592653589793
Math.PI.toExponential(4) // 3.1416e+0
</pre>

## Number.prototype.toFixed(fractionDigits)

将数值强制转化为几位小数的十进制形式的字符串

fractionDigits [0, 20]

<pre>
Math.PI // 3.141592653589793
Math.PI.toFixed(4) // 3.1416 四舍五入
</pre>

## Number.prototype.toPrecision(precision)

将数值强制转化为几位有效数字的十进制形式的字符串

precision 这个指有效数字的位数 [0, 21]

<pre>
Math.PI.toPrecision(5) // 3.1416 四舍五入
</pre>

## Number.prototype.toString(radix)

将数值转化为字符串

radix 控制基数(进制) [2, 36] 默认值是10

<pre>
Math.PI.toString(2) // 11.001001000011111101101010100010001000010110100011 转化为二进制
Math.PI.toString(8) // 3.1103755242102643 转化为八进制
</pre>

# Object

## Object.prototype.hasOwnProperty(name)

判断一个object中是否包含名为 name 的属性，包含则返回 true, 否则是false

注意原型链中的同名属性不会被检查

# RegExp

## regexp.exec(string)

## regexp.test(string)

# String

## string.charAt(pos) 返回处于pos位置处的字符

## string.charCodeAt(pos) 返回处于pos位置处的字符的字符码位

## string.concat(string...) 将其他字符拼接入字符串尾部，形成新字符串

## string.indexOf(searchSting, pos) 从pos位置开始向后检索指定字符串，找到则返回第一个匹配字符的位置，否则返回-1

## string.lastIndexOf(searchSting, pos) 和 indexOf 类似，只是是从尾部向前检索

## string.match(regexp) string.match(string)

## string.match(regexp) string.match(string) 返回匹配元素组成的数组

## string.replace(searchValue, replaceValue) 替换匹配的字符串或正则表达式

## string.search 和 indexOf 类似

## string.slice(start, end) 复制

## string.split(separator， limit) 将字符串按某个分隔符来分割成limit长度的数组

<pre>
'0123456789'.split('', 5)
</pre>

## string.substring(start, end) 和 slice 类似

## string.toLocaleLowerCase() string.toLocaleUpperCase()

## string.toLowerCase() string.toUpperCase()

## String.fromCharCode(char...) 将字符码转化为字符.这里注意不是原型

<pre>
String.fromCharCode(67, 97, 116) // "Cat"
</pre>

# 9 代码风格

## 2个空格与4个空格的问题；space与tab的问题

## 行注释与块注释的问题

## 分号问题与单行长度问题

# 10 优美的特性

# 11 糟粕

JavaScript 的一些存在问题但却难以避免的功能特性。

## 全局变量

## 作用域

## 自动插入分号

## 保留字

## Unicode

## typeof

typeof null // 'object'

## parseInt

## + 加法运算或字符串拼接

## 浮点数 不能正确处理十进制的小数

0.1 + 0.2 // 0.30000000000000004

0.3 - 0.2 // 0.09999999999999998

## NaN

typeof NaN // 'number'

NaN === NaN // false 永远不自等

!NaN === true // 类似于 undefined 可以用于条件判断

isNaN(NaN) // true 可以判断是否是NaN

## 伪数组或者类数组

## 假值，可用于做条件判断的---6个

> false

> 0

> NaN

> undefined

> ''

> null

## hasOwnProperty

## 对象

# 鸡肋

## == 与 ===

## with 语句---应该避免使用

## eval 函数---应该避免使用

## continue 语句---应该避免使用

## switch 贯穿---应该避免使用

## 函数语句对比函数表达式

## 类型的包装对象

new Object 用 {} 代替 new Array 用 [] 代替

# JSLint

http://eslint.org/docs/rules/

# JSON

JavaScript 对象表示法(JavaScript Object Notation , JSON)

## JSON 语法

对象的格式，名/值

## JSON 常用方法

### JSON.parse(stringObject) // 将字符串(对象形式的)，转化为对象(去头尾引号)

<pre>
JSON.parse('{"a":1}') // {"a":1}
</pre>

### JSON.stringify(object) // 将对象，转化为字符串对象(加头尾引号)

<pre>
JSON.stringify({a: 1}) // '{"a":1}'
</pre>
