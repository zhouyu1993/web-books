JS 状态管理框架

@dan_abramov

react redux 现在远远超过 react flux

React 组件的工作模式就是把 state 转化为 DOM

Redux 其实就是把这个工作模式移出组件，放到 Store 内

Redux 中 Store 也是 Tree 的模式

Redux 让组件通信更加容易

![Redux 让组件通信更加容易](https://pic1.zhimg.com/80/v2-ff8c0d3feb23dd731d7cd7604708bcb1_1440w.png)

没有 Redux 的话只能通过一层层通信传递 props + emit，有 Redux 则统一由 Store 进行处理

![传统 MVC](https://pic1.zhimg.com/80/v2-e4447c7d2513aa087662c9b69ad1b40a_1440w.png)

View 和 Model 互相依赖，错综复杂

Redux 3 个特性：

![Redux 特性：Single Source of Truth](https://pic2.zhimg.com/80/v2-5fa41058249b5d0492adfe16702af5a7_1440w.png)

所有的 View 由一个 Store 管理

![Redux 特性：可预测性](https://pic1.zhimg.com/80/v2-b3bb4f74f4704de8dd2b8e86f0d6d773_1440w.png)

不可变数据

![Redux 特性：纯函数更新 Store](https://pic4.zhimg.com/80/v2-add95116451fcfb2d2a1ea1f6e8bd9be_1440w.png)

说上去是更新 Store，但本质上是创建新的 Store

纯函数，输出结果完全取决输入参数，函数的内部不依赖任何外部参数和资源，整个函数是非常容易预测的
