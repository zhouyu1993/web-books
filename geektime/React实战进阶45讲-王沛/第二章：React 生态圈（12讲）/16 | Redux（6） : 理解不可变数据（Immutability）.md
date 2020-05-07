![不可变数据](https://pic1.zhimg.com/80/v2-fb8a38ea34226ec636ed26e59d8b82b0_1440w.png)

![为何需要不可变数据](https://pic2.zhimg.com/80/v2-e97c5581d0d99aeb90b64fe6da5ebb07_1440w.png)

store 是新的，不需要与旧的 store 进行值的比较

![如何操作不可变数据](https://pic2.zhimg.com/80/v2-e16498c11d65f75b50b47679e7fa52f1_1440w.png)

![原生写法](https://pic2.zhimg.com/80/v2-d6cb4cd4c3dcebec4fbb6472384c05bc_1440w.png)

ES6 原生写法，性能最好

![immutability-helper](https://pic1.zhimg.com/80/v2-2278fd9d985de2b20a4be7023646eb25_1440w.png)

语法更简洁，主要用于层次比较深的节点更新

![immer](https://pic4.zhimg.com/80/v2-c323929e0fdf8c0d99127a6c2494e2c4_1440w.png)

在性能上表现得稍微差一点

draftState 是代理 state，操作它，从而生成一个 newState
