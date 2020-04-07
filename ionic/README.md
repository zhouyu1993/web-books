# 安装 Ionic cli and Cordova

``` bash
npm install -g cordova ionic
```

# 创建 APP

``` bash
ionic start ionic-demo [module]
```

* tabs
* blank
* sidemenu
* super
* conference
* tutorial
* aws

体验一下 tabs

``` bash
ionic start ionic-demo tabs
```

# 启动项目

``` bash
cd ionic-demo
ionic serve
```

# 在 xcode 上体验

``` bash
ionic cordova platform add ios
ionic cordova run ios --livereload
```

# Learn More

## cordova (科多瓦)

[cordova](http://cordova.axuer.com/docs/zh-cn/latest/)

### what

Apache Cordova (阿帕奇·科多瓦) 是一个开源的移动开发框架。允许你用标准的 web 技术【HTML5、CSS3 和 JavaScript】做跨平台开发。应用在每个平台的具体执行被封装了起来，并依靠符合标准的 API 绑定去访问每个设备的功能，比如说：传感器、数据、网络状态等。

Cordova Application

![cordova application](../img/cordova-application.png)

#### WebView

Cordova 启用的 WebView 可以给应用提供完整用户访问界面。

WebView 就是一个浏览器，使用 WebKit 渲染引擎去显示页面，具有向前、向后导航历史，具有放大、缩小、文本输入、搜索等方法。

> WebView uses the WebKit rendering engine to display web pages and includes methods to navigate forward and backward through a history, zoom in and out, perform text searches and more.

#### Web App

应用程序代码。

``` bash
├── src
│   ├── app
│   ├── assets
│   ├── pages
│   ├── plugins
│   ├── theme
│   ├── index.html
│   ├── manifest.json
│   ├── service-worker.js
├──
├── config.xml
```

应用执行在原生应用包装的 WebView 中，这个原生应用需要分发到 app stores 中。

这个容器中包含一个非常重要文件 `config.xml` 文件，提供 App 重要的信息和特定的参数用来影响 App 的工作。

[config.xml](http://cordova.axuer.com/docs/zh-cn/latest/config_ref/index.html)

#### Plugins

提供了 Cordova 和原生组件相互通信的接口并绑定到了标准的设备 API 上。能够通过 JavaScript 调用原生代码。

### why

使用 Cordova 的人群:

* web 开发者，想包装部署自己的 web App 将其分发到各个应用商店门户。
* 移动应用开发者，想扩展一个应用的使用平台，而不通过每个平台的语言和工具集重新实现。
* 移动应用开发者，有兴趣混合原生应用组建和一个 WebView (一个特别的浏览器窗口) 可以接触设备A级PI，或者你想开发一个原生和 WebView 组件之间的插件接口。

---
大致了解了 Cordova。

# ionic (诶里克，离子)

***The top open source framework for building amazing mobile apps.***

Ionic is the beautiful, free and open source mobile SDK for developing native and progressive web apps with ease.

Ionic 的最终目标是使用 HTML5 开发 Native Mobile Apps，也称为 Hybrid Apps（混合型）。简单说就是杂牌子。

[React Native](http://facebook.github.io/react-native/)

> http://facebook.github.io/react-native/
>
> A React Native app is a real mobile app.
>
> With React Native, you don't build a “mobile web app”, an “HTML5 app”, or a “hybrid app”. You build a real mobile app that's indistinguishable from an app built using Objective-C or Java. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.

简单来说，RN 就是对 ionic 打脸地说，“我是纯爷们！”

## ionic 组件的使用

[Ionic](http://ionicframework.com/docs/)

# what is angular

[angular](https://www.angular.cn/guide/quickstart)

* 数据绑定 {{expression}}
* 循环 `*ngFor="let value of array"`
* 判断 `*ngIf=“array.length"`
* 指令
* 过滤器
* 方法
* 生命周期



# what is typescript


## angular + typescript

[templates](https://github.com/ionic-team/ionic/tree/475b722c7dc0b7a8de0f2902db915c42c57b2090/scripts/templates)

## 调用 native 能力

[native](http://ionicframework.com/docs/native/)

ionic cordova plugin add cordova-plugin-camera
