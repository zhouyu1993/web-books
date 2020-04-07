# 创建模块

``` js
const add = () => {}
```
# 导出模块

``` js
exports.add = add
```

或者

``` js
module.exports = {
  add
}
```

exports 和 module.exports 的区别

在文件或者说在模块内部，有私有变量 `module` 和 `exports`，

``` js
module = {
  exports,
  ...
}
```

而

``` js
exports = module.exports
```

- module.exports 初始值为一个空对象 {}
- exports 是指向的 module.exports 的引用。exports.add 相当于向 module.exports 返回的对象中添加一个 add 属性
- require() 返回的是 module.exports 而不是 exports

我们经常看到这样的写法：

``` js
exports = module.exports = somethings
```

上面的代码等价于:

``` js
module.exports = somethings
exports = module.exports
```

# 加载模块

require

# 使用模块
