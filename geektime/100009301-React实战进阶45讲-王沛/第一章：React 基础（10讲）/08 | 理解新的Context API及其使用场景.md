Context API 存在已久，React 16.3 重新设计

解决的是组件间通信问题， 之前的版本 Context API 作为内部 API，被 redux、react-router 重度依赖。

![Context API](https://pic4.zhimg.com/80/v2-9d0a4050fda8e99c3e381f3482bea141_1440w.png)

左边是组件树

![Context API](https://pic3.zhimg.com/80/v2-6e9bd5fb296646e6950ece0a85636c00_1440w.png)

Consumer 一定在 Provider 内部

全局性的主题（theme）、全局性的多语言（locale）
