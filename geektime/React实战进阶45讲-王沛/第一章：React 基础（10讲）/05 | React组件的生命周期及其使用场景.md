React组件的生命周期及其使用场景

![React组件的生命周期](https://pic2.zhimg.com/80/v2-db4e1e3b63bddded4924fc67735b3c13_1440w.png)

<http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>

Render阶段、Pre-commit阶段、Commit阶段

创建时、更新时、卸载时

创建时：

* constructor 构造器
* getDerivedStateFromProps 是 React v16.3 新引入的，从外部的属性去初始化一些内部的状态
* render 描述 UI 的 DOM 结构的，唯一必须定义的生命周期
* componentDidMount 发起 ajax 请求，定义一些外部资源

更新时：new Props、setState()、forceUpdate()

* getDerivedStateFromProps 是 React v16.3 新引入的
* shouldComponentUpdate
* render
* getSnapshotBeforeUpdate 是 React v16.3 新引入的
* react 更新 DOM 和 refs
* componentDidUpdate

卸载时:

* componentWillUnmount

constructor

1. 用于初始化内部状态，很少使用
2. 唯一可以直接修改 state 的地方，不需要用 setState

getDerivedStateFromProps

1. 当 state 需要从 props 初始化时使用
2. 之所以名字这么长，就是让大家尽量不要使用：维护两者状态一致性会增加复杂度
3. 每次 render 都会调用，取代原先 componentWillReceiveProps
4. 典型场景：表单控件获取默认值

componentDidMount

1. UI 渲染完成后调用
2. 只执行一次
3. 典型场景：获取外部资源

componentWillUnmount

1. 组件移除时被调用
2. 典型场景：资源释放


getSnapshotBeforeUpdate

1. 在页面 render 之前调用，state 已更新
2. 典型场景：获取 render 之前的 DOM 状态

componentDidUpdate

1. 每次 UI 更新时被调用
2. 典型场景：页面需要根据 props 变化重新获取数据

shouldComponentUpdate

1. 决定 Virtual DOM 是否要重绘
2. 一般可以由 PureComponent 自动实现
3. 典型场景：性能优化
