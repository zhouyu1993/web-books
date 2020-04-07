# 字体重置

[一丝：Mac 网页字体优化小议](http://www.iyunlu.com/view/css-xhtml/67.html)

``` css
html {
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
```

-webkit-font-smoothing (webkit 私有)

* none  禁用抗齿锯
* subpixel-antialiased  次像素抗锯齿(默认值)
* antialiased 启用抗锯齿(效果更明显)

# font-size 与 line-height

[字号与行高](http://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651226696&idx=1&sn=14c0245f79ad6b25c1d7ee245d74d884&chksm=bd495bcc8a3ed2da6ba1a024ed9950b417157b36f9aabbc709b2510232efb0fd41e34ab4f9b8&mpshare=1&scene=23&srcid=0717mCC6nFGnsXfQXx7nPotC#rd)

font-size 字号，字体的高度

line-height 行高

![example](/img/css-1.png)

半行距 = (行距 - 字高) / 2

## 行内元素底部有空白的问题

![example](/img/css-2.png)

设置父元素 line-height: 0; 或者 设置行内元素 vertical-align: top

``` html
<style>
.wrapper {
  line-height: 0;
}

.vertical {
  vertical-align: middle;
}
</style>

<div class="wrapper">
  <img src="x.jpg">
</div>
<div>
  <img src="x.jpg" class="vertical">
</div>
```

## 因行内元素导致父元素高度异常

[example1](https://segmentfault.com/q/1010000010067429)

[example2](https://segmentfault.com/q/1010000010207212)
