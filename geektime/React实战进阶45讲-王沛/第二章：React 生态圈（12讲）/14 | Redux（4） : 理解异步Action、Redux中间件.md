之前介绍的都是同步 Action

异步 Action，比如发起一个 Ajax 请求

![Redux 异步请求](https://pic3.zhimg.com/80/v2-2101cc797c28236967b58bf51dd5bac9_1440w.png)

多了一个 Middlewares，Actions -> Middlewares -> API -> Dispatcher

需要强调的是，所谓的异步 Action，不是 Redux 自由的概念，而是 Actions 的一种设计模式

Redux 中间件（Middleware）的作用：

1. 截获 action
2. 发出 action

典型场景：logger，打印请求详情

![标准形式 Redux Action 的问题](https://pic2.zhimg.com/80/v2-615efc0f801492a35a8015fd4425e04d_1440w.png)

![新的方式：单个 action 和 reducer 放在同一个文件](https://pic1.zhimg.com/80/v2-02d8e850d07addeaca31dd55a3bccd96_1440w.png)

![新的方式：每一个文件一个 Action](https://pic4.zhimg.com/80/v2-99da1b33048a2b9271f8d3f78cb472a6_1440w.png)
