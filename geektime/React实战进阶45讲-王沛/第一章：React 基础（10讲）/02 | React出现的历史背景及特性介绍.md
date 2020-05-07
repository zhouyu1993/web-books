facebook 2013年

简单功能一再出现 bug：状态栏的消息条数动态更新，但是有时候没更新。

* 传统 UI 操作关注太多细节
  - DOM API，Jquery，太多了
* 传统 MVC 难以扩展和维护
  - 应用程序状态分散在各处，难以追踪和维护

React: 始终整体“刷新”页面，无需关心细节

新消息来了，传统是把新消息 append 到 UI 上，React 是把整个消息结构展示，只需要关心状态和最终的 UI。

React: 很简单

  * 1 个新概念：组件
  * 4 个必须 API
  * 单向数据流（不再是双向绑定）
  * 完善的错误提示（开发中）

React 解决了 UI 细节问题，数据模型如何解决？

传统 MVC 难以扩展和维护，一个 Controller，对应对个 Model，多个 Model 和 多个 View 之间的关系错综复杂，而且是双向绑定的。出现了很难去追踪，不好判断是 Model 的问题还是 View 的问题。

Flux 架构：单向数据流

![Flux 架构](https://pic4.zhimg.com/80/v2-dfae8e90f36fcdc8f0140325bcb2ce65_1440w.jpeg)

Flux 架构并不是一个完整的技术实现，而是一个设计模式，核心思想就是单向数据流

React Views -> User Interactions -> Actions Creators -> Actions -> Dispatcher -> callbacks -> Store -> Change Events + Store Queries -> React Views

Flux 架构的衍生项目：Redux、MobX

本课程主要学习 Redux

总结：

1. 传统 Web UI 开发的问题
2. React: 始终整体“刷新”页面
3. Flux 架构：单向数据流
