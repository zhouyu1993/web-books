> 第一部分 作用域与闭包

# 第一章 作用域是什么

当编程语言能够存储变量当中的值，并且能在之后对这个值进行访问或修改，这个功能叫做作用域。当在作用域内，就可以对作用域内的变量进行访问或修改。

## 1.1 编程原理

一段源代码在执行之前会经历三个步骤，统称为“编译”。

分词/词法分析(Tokenizing/Lexing) -> 解析/语法分析(Parsing) -> 代码生成

* 分词/词法分析(Tokenizing/Lexing)
将由字符组成的字符串分解成若干代码块，这些代码块被称为词法单元(token)。
var a = 2; 被分解为：var、a、=、2、; 空格是否被作为词法单元，取决于空格是否有意义。
如果报 token 错，说明词法有问题。

* 解析/语法分析(Parsing)
将词法单元流(数组)转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。
这个树被称为"抽象语法树" (Abstract Syntax Tree， AST)。
var a = 2; 的抽象语法树中可能会有一个叫作"变量申明" (VariableDeclaration) 的顶级节点。
接下来是一个叫作"标识符" Identifier (它的值是 a)的子节点，以及一个叫作"赋值表达式" AssignmentExpression 的子节点。
AssignmentExpression 节点有一个叫作"数字" NumericLiteral (它的值是 2)的子节点。

* 代码生成
将"抽象语法树" AST 转换为可执行代码的过程。
这个过程与语言、 目标平台等息息相关。
抛开具体细节，简单来说就是有某种方法可以将 var a = 2; 的 AST 转化为一组机器指令，用来创建一个叫作 a 的变量(包括分配内存等)，并将一个值储存在 a 中。

## 1.2 理解作用域
访问权限

* 引擎：负责编译和执行
* 编译器：负责语法分析和代码生成
* 作用域：负责收集并维护由所有声明的标识符(变量)组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限

## 1.3 作用域嵌套

编译器分解词法单元，解析成树结构，处理。遇到 var a, 编译器开始判断，在同一作用域下是否存在这个变量了呢。如果存在，就忽略该声明，继续编译。如果不存在，就进行声明。

LHS 和 RHS

当变量出现在赋值操作的左侧时进行 LHS 查询，出现在右侧时进行 RHS 查询。

RHS 查询与简单地查找某个变量的值别无二致，而 LHS 查询则是试图找到变量的容器本身，从而可以对其赋值。从这个角度说，RHS 并不是真正意义上的“赋值操作的右侧”，更准确地说是“ 非左侧”。

层层向上。电梯建筑模型。

## 1.4 异常

ReferenceError 未定义或者作用域下不存在

TypeError 对变量进行不合理操作

# 第二章 词法作用域

词法作用域就是定义词法阶段的作用域，由变量和块作用域的位置决定。

欺骗词法作用域，会导致性能下降。所以尽量不用使用。

eval(...)

new Function(...)

with

词法作用域不等于运行时候的动态作用域。

# 第三章 函数作用域和块作用域

## 函数作用域

属于这个函数的全部变量都可以在整个函数范围内使用及复用(事实上在嵌套的作用域中也可以使用)

## 最小授权或最小暴露原则

将来将复用的代码用函数进行封装，包裹，形成一个个函数作用域，将内容隐藏起来，形成类似api。

这样减少全局变量，规避变量名冲突，形成模块化管理，复用。

## 立即执行函数表达式 Immediately Invoked Function Expression

(function(){})()

(function(){}())

对于立即执行函数的内部，都是局部作用域，外部不可访问。

```
  (function foo(){
    alert(1)
  })()
  foo(); // foo is not defined
```

```
  (function foo(){
    alert(1)
  }())
  foo(); // foo is not defined
```

## 匿名和具名

匿名函数简单快捷，推荐使用，但是也有缺点。

* 匿名函数在栈追踪中不会显示出有意义的函数名，调试困难。
* 没有函数名，所以当函数要引用自身进行递归，只能使用已经过期的arguments.callee引用。
* 缺乏可读性、理解性，或者说语义化。

## 块作用域

ES6 深入

## with

放弃使用

## try/catch

ES 3

```
  try {
    undefined(); // 执行一个非法操作来强制制造一个异常
  }
  catch (err) {
    console.log(err); // 能够正常执行！
  }
```

## let

ES 6 中，let 真正做到了块作用域的变量定义

```
for (var i = 0;i < 2;i++) {
  console.log(i);
}
console.log(i); // 2

for (let i = 0;i < 2;i++) {
  console.log(i);
}
console.log(i); // ReferenceError

```

## const

ES 6 同样创建块作用域变量，但值是固定的常量，定义赋值之后不可再修改。

# 第四章 提升；变量提升

直观地认为，js代码在执行时是由上到下，一行一行执行的，但实际上并不完全正确。

```
a = 2;
var a;
console.log( a ); // 2
```
这里会将 var a; 提前

```
console.log( a ); // undefined
var a = 2;
```
这里会将 var a; 提前，但是赋值 a = 2 不会提前，所以报 undefined

先有蛋（ 声明） 后有鸡（ 赋值）。

变量声明与函数声明都会被提升，但是函数优先级永远最高！

```
foo(); // 1
var foo;
function foo() {
  console.log( 1 );
}
foo = function() {
  console.log( 2 );
};
```

# 第五章 作用域闭包

## 闭包，一个非常重要但又难以掌握，近乎神话的概念。

当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

```
function foo(x) {
  console.log(x)
}

function bar(y) {
  y += 1
  return foo(y)
}
bar(0)
```

## 模块化，两个特征：
* 为创建内部作用域而调用了一个包装函数
* 包装函数的返回值必须至少包括一个对内部函数的引用，这样就会创建涵盖整个包装函数内部作用域的闭包。

### 现代的模块化机制
require.js  common.js

```
var myModule = (function() {
  var x = function() {
    console.log(1)
  }
  var y = function() {
    console.log(2)
  }
  return {
    x: x,
    y: y
  }
}())

myModule.x()
myModule.y()
```
### 未来的模块化机制

import export

# 动态作用域

动态作用域是 JS 另一个重要机制 this 的表亲。

动态作用域并不关心函数和作用域是如何声明以及在何处声明的，只关心它们从何处调
用。换句话说，作用域链是基于调用栈的，而不是代码中的作用域嵌套。

事实上 JavaScript 并不具有动态作用域，它只有词法作用域。

但是 this 机制某种程度上很像动态作用域。

主要区别： 词法作用域是在写代码或者说定义时确定的，而动态作用域是在运行时确定的（ this 也是！ ）。

词法作用域关注函数在何处声明， 而动态作用域关注函数从何处调用。

# this 词法

ES6 添加了一个特殊的语法形式用于函数声明， 叫作箭头函数。

```
var obj = {
  id: "awesome",
  cool: function coolFn() {
    console.log( this.id );
  }
};
var id = "not awesome"
obj.cool(); // awesome
setTimeout( obj.cool, 100 ); // not awesome
```

```
var obj = {
  count: 0,
  cool: function coolFn() {
    var self = this;
    if (self.count < 1) {
      setTimeout( function timer(){
        self.count++;
        console.log( "awesome?" );
      }, 100 );
    }
  }
};
obj.cool();
```

```
var obj = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout( () => {
        this.count++;
        console.log( "awesome?" );
      }, 100 );
    }
  }
};
obj.cool()
```

箭头函数放弃了所有普通 this 绑定的规则，取而代之的是用当前的词法作用域覆盖了 this 本来的值。混淆了 this 绑定规则和词法作用域规则。

> 第二部分 this 与对象原型

# 第一章 关于 this

this 关键字是 JavaScript 中最复杂的机制之一。 它是一个很特别的关键字，被自动定义在所有函数的作用域中。

## 为什么使用 this

this 提供了一种更优雅的方式来隐式“传递” 一个对象引用，可以将 API 设计得更加简洁并且易于复用。

```
function identify() {
  return this.name.toUpperCase();
}

var me = {
  name: 'a'
};

var name = 'b';

identify(); // B
identify.call(me); // A
```

通过.call()可以将this指向所需要绑定的对象，这样就不需要去传递参数：

```
function identify(conf) {
  return conf.name.toUpperCase();
}

var me = {
  name: 'a'
};

identify(me); // A
```

## 对this的误解

* 容易把 this 理解成指向函数自身

```
function foo(num) {
  console.log("foo: " + num);
  // 记录 foo 被调用的次数
  this.count++;
}
foo.count = 0;

for (var i = 0;i < 10;i++) {
  if (i > 5) {
    foo(i);
  }
}

// foo: 6
// foo: 7
// foo: 8
// foo: 9

// foo 被调用了多少次？
console.log(foo.count); // 0 -- WTF?
```

原因：函数内部代码 this.count 中的 this 并不是指向那个函数对象。

一：改为 foo.count 。然而，这种方法同样回避了 this 的问题，并且完全依赖于变量 foo 的词法作用域。

二：foo.call(foo, i); 调用时强制 this 指向 foo 函数对象。

* 认为 this 指向函数的作用域。在某种情况下它是正确的， 但是在其他情况下它却是错误的。

this 在任何情况下都不指向函数的词法作用域。在 JavaScript 内部，作用域确实和对象类似， 可见的标识符都是它的属性。但是作用域“对象” 无法通过 JavaScript 代码访问，它存在于 JavaScript 引擎内部。

```
function foo() {
  var a = 2;
  this.bar();
}
function bar() {
  console.log( this.a );
}
foo(); // ReferenceError: a is not defined
```

试图使用 this 联通 foo() 和 bar() 的词法作用域，从而让bar() 可以访问 foo() 作用域里的变量 a。这是不可能实现的，你不能使用 this 来引用一个词法作用域内部的东西。

## this 到底是什么？

它的上下文取决于函数调用时的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this 就是记录的其中一个属性，会在函数执行的过程中用到。

# 第二章 this 全面解析

## 调用位置

调用位置就是函数在代码中被调用的位置（ 而不是声明的位置）。

调用栈与调用位置。

## 绑定规则

严格模式与非严格模式。

* 默认绑定
* 隐式绑定
```
// 对象属性引用链中只有最顶层或者说最后一层会影响调用位置
function foo() {
  console.log(this.a);
}
var obj2 = {
  a: 42,
  foo: foo
};
var obj1 = {
  a: 2,
  obj2: obj2
};
obj1.obj2.foo(); // 42
```
* 显式绑定
> 调用回调函数的函数可能会修改 this。使用 call() 和 apply() 进行修改。
> 硬绑定
  ES5 内置方法：Function.prototype.bind，会返回一个硬绑定的新函数，它会把参数设置为 this 的上下文并调用原始函数。
> API调用的“上下文。arr.forEach(callback[, thisArg])
  ```
    var obj = {
      id: "awesome"
    };
    // 调用 foo(..) 时把 this 绑定到 obj
    [1, 2, 3].forEach(function(value, index) {
      console.log(value, index, this.id);
    }, obj);
  ```

* new 绑定
> new 操作符。构造函数。
> 实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用
> 1. 创建（或者说构造）一个全新的对象。
> 2. 这个新对象会被执行 [[ 原型 ]] 连接。
> 3. 这个新对象会绑定到函数调用的 this。
> 4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。
```
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log( bar.a ); // 2
// 使用 new 来调用 foo(..) 时，会构造一个新对象并把它绑定到 foo(..) 调用中的 this
上。
```

## 优先级

* new 绑定最高。var bar = new foo()
* call/apply (显式绑定)或者硬绑定。var bar = foo.call(obj2)
* 对象调用隐式绑定。var bar = obj1.foo()
* 默认绑定。注意严格模式与非严格模式。

## 绑定例外

* 如果将 null 或者 undefined 作为 this 的绑定对象传入 call/apply/bind，这些值会被忽略，采取默认绑定规则。这种做法，可能导致副作用。

* 更安全的做法，是传入一个空对象：Object.create(null)

Object.create(null) 和 {} 很 像，但是不会创建 Object.prototype 这个委托，所以它比 {} “更空” 。

```
function foo(a, b) {
  console.log( "a:" + a + ", b:" + b );
}
// 我们的 DMZ 空对象
var ø = Object.create(null);
// 把数组展开成参数
foo.apply(ø, [2, 3]); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind(ø, 2);
bar(3); // a:2, b:3
```

* 存在间接引用，将应用默认绑定规则。
```
function foo() {
  console.log( this.a );
}
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo(); // 3 这里是隐式绑定
(p.foo = o.foo)(); // 2 这里赋值时的返回值，是函数，进行直接调用，采用默认绑定规则。
```

* 软绑定

硬绑定可以把 this 强制绑定到指定对象，但是这样会降低函数的灵活性，使用硬绑定后，就无法使用隐式绑定或者显示绑定来修改 this。

而软绑定 softbind 就可以避免。

```
// 创建软绑定 softbind 方法
if (!Function.prototype.softBind) {
  Function.prototype.softBind = function(obj) {
    var fn = this;
    // 捕获所有 curried 参数
    var curried = [].slice.call(arguments, 1);
    var bound = function() {
      return fn.apply(
        (!this || this === (window || global)) ? obj : this,
        curried.concat.apply(curried, arguments)
      );
    };
    bound.prototype = Object.create(fn.prototype);
    return bound;
  };
}

function foo() {
  console.log("name: " + this.name);
}
var obj = { name: "obj" },
obj2 = { name: "obj2" },
obj3 = { name: "obj3" };
var fooOBJ = foo.softBind(obj);
fooOBJ(); // name: obj
obj2.foo = foo.softBind(obj);
obj2.foo(); // name: obj2
fooOBJ.call(obj3); // name: obj3
setTimeout(obj2.foo, 10);
// name: obj

// 软绑定版本的 foo() 可以手动将 this 绑定到 obj2 或者 obj3 上，但如果应用默认绑定，则会将 this 绑定到 obj。
```

## ES 6 中箭头函数 =>，this 不遵循四种标准规则，而是根据外出(函数或全局)作用域决定。

```
function foo() {
  console.log(this);
  // 返回一个箭头函数
  return (a) => {
    //  this 继承自 foo()
    console.log(this.a);
  };
}
var obj1 = {
  a: 2
};
var obj2 = {
  a: 3
};
var bar = foo.call(obj1); // 返回一个箭头函数
bar.call(obj2); // 试图将箭头函数 this 指向 obj2，但是不行。返回 2，不是 3 ！
```

var self = this

var that = this

# 第三章 对象

## 对象可以通过两种形式定义：声明（文字）形式和构造形式。

* var o = { key: value }; o.key = value
* var o = new Object(); o.key = value

## “JavaScript 中万物皆是对象”，这显然是错误的。

JS 有六种数据类型。其他数据类型本身不是对象，但是可以当作一种对象类型。

内置对象：
• String
• Number
• Boolean
• Object
• Function
• Array
• Date
• RegExp
• Error

## 对象的内容是由一些存储在特定命名位置的（任意类型的）值组成的，我们称之为属性。

访问对象中某位置上的值，我们需要使用 . 操作符（属性访问）或者 [] 操作符（键访问）。

这两种语法的主要区别在于 . 操作符要求属性名满足标识符的命名规范，而 [".."] 语法可以接受任意 UTF-8/Unicode 字符串作为属性名。

举例来说，如果要引用名称为 "SuperFun!" 的属性，那就必须使用 ["Super-Fun!"] 语法访问，因为 Super-Fun! 并不是一个有效的标识符属性名。

在对象中，属性名永远都是字符串。ES6 增加了可计算属性名，可以在文字形式中使用 [] 包裹一个表达式来当作属性名。

属性与方法。当函数作为对象的一个属性时，其实就是方法了。

<strong>对象的复制。浅复制与深复制。</strong>

对于浅复制来说，复制出的新对象中 a 的值会复制旧对象中 a 的值，新对象中 b、 c、 d 三个属性其实只是三个引用，它们和旧对象中 b、 c、 d 引用的对象是一样的。对其中任何一个对象的改动都会影响另外一个对象。

对于深复制来说，除了复制 myObject 以外还会复制 anotherObject 和 anotherArray。源对象与拷贝对象互相独立，其中任何一个对象的改动都不会对另外一个对象造成影响。

属性描述符。
```
var myObject = {
  a:2
};
Object.getOwnPropertyDescriptor(myObject, "a");
// {
//  value: 2,
//  writable: true,
//  enumerable: true,
//  confgurable: true
// }
// writable（ 可写）、enumerable（可枚举）和 configurable（可配置）。
```

## 遍历
标准原始：for
ES5：forEach(..)、every(..)、some(..)
for..in 对象

ES6：for..of 数组

# 第四章 混合对象“类”

面向类的设计模式：实例化（instantiation）、继承（inheritance）和（相对）多态（polymorphism）。

混入 mixin。

## 类理论

面向对象编程强调的是数据和操作数据的行为本质上是互相关联的（当然，不同的数据有不同的行为），因此好的设计就是把数据以及和它相关的行为打包（或者说封装）起来。这在正式的计算机科学中有时被称为数据结构。

我们往往关心的不是数据本身，而是可以对数据做什么。

定义一个 Vehicle 类和一个 Car 类。Vehicle 类包含了所有交通工具共有的东西，例如引擎、载人能力；而 Car 类也包括这些东西，但是具体有所不同。是一般与特殊的关系。这就是类、继承和实例化。Car 类是 Vehicle 类的一个实例，继承了它的东西，但是又产生了新的变化。

类理论强烈建议父类和子类使用相同的方法名来表示特定的行为， 从而让子类重写父类。

### “类”设计模式

### JS中的“类”，不存在，只是语法糖，设计模式。

## 类的机制

类实例是由一个特殊的类方法构造的，这个方法名通常和类名相同，被称为构造函数。

ES6 中 class

## 类的继承

多态，虚拟多态，相对多态

## 混入

JS 本身不提供“多重”继承功能。混入 mixin(..)。显式和隐式。

### 显式混入

```
function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {
    // 只会在不存在的情况下复制
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}

var Vehicle = {
  engines: 1,
  ignition: function() {
    console.log("Turning on my engine.");
  },
  drive: function() {
    this.ignition();
    console.log("Steering and moving forward!");
  }
};
var Car = mixin(Vehicle, {
  wheels: 4,
  drive: function() {
    Vehicle.drive.call(this);
    console.log("Rolling on all " + this.wheels + " wheels!");
  }
});
```

### 隐式混入
```
var Something = {
  cool: function() {
    this.greeting = "Hello World";
    this.count = this.count ? this.count + 1 : 1;
  }
};
Something.cool();
Something.greeting; // "Hello World"
Something.count; // 1

var Another = {
  cool: function() {
    // 隐式把 Something 混入 Another
    Something.cool.call(this);
  }
};
Another.cool();
Another.greeting; // "Hello World"
Another.count; // 1（count 不是共享状态）
```

# 第五章 原型

## JavaScript 中的对象有一个特殊的 [[Prototype]] 内置属性，其实就是对于其他对象的引用。

几乎所有的对象在创建时 [[Prototype]] 属性都会被赋予一个非空的值。

Object.prototype

属性设置和屏蔽

## 类

原型；原型继承；

构成函数。 constructor

实际上 a 本身并没有 .constructor 属性。而且，虽然 a.constructor 确实指向 Foo 函数，但是这个属性并不是表示 a 由 Foo“构造”。

当且仅当使用 new 时，函数调用会变成“构造函数调用”。

```
// 类
function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function() {
  return this.name;
};

// 创建实例
var a = new Foo( "a" );
var b = new Foo( "b" );

// 使用实例方法
a.myName(); // "a
b.myName(); // "b"
```

## （原型）继承

如果没有“继承”机制的话，JavaScript 中的类就只是一个空架子。

```
// 创建Foo
function Foo(name) {
  this.name = name;
}
// 创建方法
Foo.prototype.myName = function() {
  return this.name;
};
var a = new Foo('a');

// 创建Bar
function Bar(name, label) {
  // 类似Foo的name属性
  Foo.call(this, name);
  this.label = label;
}

var b = new Bar('b', 'c');

// ES5 创建一个新的 Bar.prototype 对象并关联到 Foo.prototype
Bar.prototype = Object.create(Foo.prototype);

// ES6 开始可以直接修改现有的 Bar.prototype
Object.setPrototypeOf(Bar.prototype, Foo.prototype);


b = new Bar('b', 'c');
// 注意！现在没有 Bar.prototype.constructor 了
// 如果你需要这个属性的话可能需要手动修复一下它

// 创建方法
Bar.prototype.myLabel = function() {
  return this.label;
};
b = new Bar('b', 'c');

// 从而 b 就具有 a 的方法，而且具有自己的新方法。
b.myName();
b.myLabel();
```

## 对象关联

“原型链”

如果在对象上没有找到需要的属性或者方法引用，引擎就会继续在 [[Prototype]] 关联的对象上进行查找。同理，如果在后者中也没有找到需要的引用就会继续查找它的 [[Prototype]]。

### 创建关联

```
var foo = {
  something: function() {
    console.log( "Tell me something good..." );
  }
};
var bar = Object.create( foo );
bar.something(); // Tell me something good...
```

Object.create(..) 会创建一个新对象（bar） 并把它关联到我们指定的对象（foo），这样我们就可以充分发挥 [[Prototype]] 机制的威力（委托） 并且避免不必要的麻烦（比如使用 new 的构造函数调用会生成 .prototype 和 .constructor 引用）。

不需要类来创建两个对象之间的关系，只需要通过委托来关联对象就足够了。而 Object.create(..) 不包含任何“ 类的诡计”，所以它可以完美地创建我们想要的关联关系。

Object.create()的polyfill代码:

```
if (!Object.create) {
  Object.create = function(o) {
    function F(){};
    F.prototype = o;
    return new F();
  };
}
```

# 第六章 行为委托

[[Prototype]] 机制就是指对象中的一个内部链接引用另一个对象。

委托行为意味着某些对象（XYZ） 在找不到属性或者方法引用时会把这个请求委托给另一个对象（Task）。

``` js
let food1 = 'a' // 不会挂载到 window，window.food1 是 undefined

var food2 = 'c' // 会挂载到 window

const p1 = {
  eat () {
    console.log(this, this.food1, this.food2)
  },
  food1: 'b',
  food2: 'd'
}

const p2 = {
  eat: () => {
    console.log(this, this.food1, this.food2)
  },
  food1: 'b',
  food2: 'd'
}

p1.eat() // eat 的 调用者是 p1，this 指向 p1

p2.eat() // // eat 的 调用者是 p1，但箭头函数没有 this，this 指向 window

let f1 = p1.eat // f1 不会挂载到 window，window.f1 是 undefined，那谁在调用 p1 ？不清楚啊？this 指向 window

f1()

var f2 = p2.eat // f2 挂载到 window，this 指向 window

f2()
```
