![为什么需要路由](https://pic3.zhimg.com/80/v2-746357a5229b5e04ece93c34d1a47bdd_1440w.png)

![路由实现的基本架构](https://pic2.zhimg.com/80/v2-c707cd40a5d5320d210cc980dde2db52_1440w.png)

在组件容器中根据 url 显示不同的组件

![React Router 的实现](https://pic2.zhimg.com/80/v2-c5a1059f655350a894efbf57ee7cb327_1440w.png)

![React Router 的特性](https://pic3.zhimg.com/80/v2-eb996c879935c3a1d3c084dfe7c22ab8_1440w.png)

![三种路由实现方式](https://pic1.zhimg.com/80/v2-963c6de699168722b063c7ff29f70b4e_1440w.png)

1. BrowserRouter
2. HashRouter
3. MemoryRouter

``` js
import {
  BrowserRouter as Router,
} from 'react-router-dom'
```

``` js
import {
  HashRouter as Router,
} from 'react-router-dom'
```

``` js
import { MemoryRouter } from 'react-router'
```

`MemoryRouter` 时，url 不会变化

![基于路由配置进行资源组织](https://pic2.zhimg.com/80/v2-7d5c3d9c9a24a8272d80e3dee0b8f937_1440w.png)

![React Router API](https://pic3.zhimg.com/80/v2-bd13f43aeb97abd1cb36ab8c67753fc2_1440w.png)

![Link](https://pic1.zhimg.com/80/v2-ef8203f3ed9fbf28d91e69d21910361a_1440w.png)

![NavLink](https://pic1.zhimg.com/80/v2-5eb61f821efc90f439b01c140ffdd6ae_1440w.png)

![Prompt](https://pic4.zhimg.com/80/v2-3ab7d9ba317206ced0db91c80b2af032_1440w.png)

![Redirect](https://pic4.zhimg.com/80/v2-3a118cd42fd59649a20ff13496a8938d_1440w.png)

![Route](https://pic4.zhimg.com/80/v2-f027ca7f5a68a440b080f0659bbaecc5_1440w.png)

1. exact
2. static

并不是排它的

![Switch](https://pic1.zhimg.com/80/v2-6e2da5f19b65b47b56ea140a80f5023f_1440w.png)
