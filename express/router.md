# 路由

## 分类

1、通过 请求的 方法类型 get/post/put/delete

2、通过 uri 路径

题外话：URI、URL、URN

<https://www.ibm.com/developerworks/cn/xml/x-urlni.html>

## app.all

``` js
app.all('/demo', (req, res) => {})

app.all('*', (req, res) => {})
```

## app.use

使用中间件

也可以使用路由（路由也可以当成是一个中间件），但尽量不要这么使用

``` js
app.use('/demo', (req, res) => {})
```

## 路由拆分

express.Router

``` js
const epxress = require('express')

const app = express()

const router = express.Router()

router.get('/demo', (req, res) => {
  res.json({
    message: 'demo',
  })
})

app.use(router)
```
