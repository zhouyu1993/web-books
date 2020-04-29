# 异常处理

express 本身是进行异常捕获的。

错误处理中间件函数的定义方式与其他中间件函数基本相同，差别在于错误处理函数有四个自变量而不是三个：(err, req, res, next)。

请在其他 app.use() 和路由调用之后，最后定义错误处理中间件。

``` js
function errorHandler (err, req, res, next) {
  if (!err) {
    next()
  } else {
    console.error(err)

    res.status(500).json({
      code: 500,
      message: err.message,
    })
  }
}
```

业务逻辑，使用 try...catch 然后 throw new Error(e)
