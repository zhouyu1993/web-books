在每个 feature 中单独定义自己的路由

react-router 是基于声明式的方式定义，虽然很直观，但是对于大部分的路由而言，其实我们最关心的还是页面级别的路由

换一种 json 形式的路由

                  -> route1.js
                  -> route2.js
routeConfig.js ->
                  -> route3.js
                  -> route4.js

import 各个页面级别的组件，然后定义 path、name、component、childRoutes

如何把 json 形式的路由，转化为 react-router 声明式的语法呢？
