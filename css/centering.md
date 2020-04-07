# [居中问题](https://css-tricks.com/centering-css-complete-guide/)

## 水平 parent

### 子元素是行内或行内块 inline or inlie-* 如何相对于父元素水平居中

父元素 text-align 控制，子元素宽度无需固定

``` html
<style>
.parent {
  text-align: center;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">1</div>
<div class="parent"><span class="decorate">1</span></div>
<div class="parent"><div class="decorate">1</div></div>
<div class="parent"><span style="display: inline-block" class="decorate">1</span></div>
<div class="parent"><div style="display: inline-block" class="decorate">1</div></div>
```

### 子元素是块级 block 如何相对于父元素水平居中

#### 子元素 width + margin 控制

子元素宽度固定

``` html
<style>
.parent {
  text-align: center;
}

.child {
  width: 300px;
  margin: 0 auto;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">
  <div class="child decorate">1</div>
</div>
<div class="parent">
  <span style="display: block" class="child decorate">1</span>
</div>
```

#### 子元素 margin-left + transform 控制

子元素宽度无需固定

``` html
<style>
.child {
  margin-left: 50%;
  transform: translate(-50%, 0);
}

.decorate {
  color: #fff;
  background-color: #000;
}

.w {
  width: 100px;
}
</style>

<div>
  <div class="child decorate w">1</div>
</div>
<div>
  <div class="child decorate">1</div>
</div>
```

#### 利用 position + left + transform

子元素宽度无需固定

``` html
<style>
.parent {
  position: relative;
  z-index: 1;
  height: 100px;
}

.child {
  position: absolute;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, 0);
}

.decorate {
  color: #fff;
  background-color: #000;
}

.w {
  width: 100px;
}
</style>

<div class="parent">
  <div class="child decorate w">1</div>
</div>
<div class="parent">
  <div class="child decorate">1</div>
</div>
```

#### 利用 position + left + width + margin-left

子元素宽度固定

``` html
<style>
.parent {
  position: relative;
  z-index: 1;
  height: 100px;
}

.child {
  position: absolute;
  left: 50%;
  z-index: 2;
  width: 100px;
  margin-left: -50px;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">
  <div class="child decorate">1</div>
</div>
```

### 多个子元素，且存在子元素是块级 block 如何相对于父元素水平居中

#### 父元素 display: flex; + justify-content: center; 控制

``` html
<style>
.parent {
  display: flex;
  justify-content: center;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">
  <div class="decorate">1</div>
  <span class="decorate">1</span>
  <div class="decorate">1</div>
</div>
```

此时子元素相当于变成了具有伸展性的行内块元素。

justify-content: center;使得子元素挤在中间

如何使子元素等比铺开：

* 子元素 margin: 0 auto;

``` html
<style>
.parent {
  display: flex;
  justify-content: center;
}

.child {
  margin: 0 auto;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">
    <div class="child decorate">1</div>
    <span class="child decorate">1</span>
    <div class="child decorate">1</div>
</div>
```

* 父元素改为 justify-content: space-around;

``` html
<style>
.parent {
  display: flex;
  justify-content: space-around;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">
  <div class="decorate">1</div>
  <span class="decorate">1</span>
  <div class="decorate">1</div>
</div>
```

#### 子元素 display: inline-block; 控制

``` html
<style>
.parent {
  text-align: center;
}

.child {
  display: inline-block;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">
  <div class="child decorate">1</div>
  <span class="child decorate">1</span>
  <div class="child decorate">1</div>
</div>
<div class="parent">
  <div class="child decorate">1</div><span class="child decorate">1</span><div class="child decorate">1</div>
</div>
```

这时候注意了，行内块元素之间由于换行会产生间距。[去除inline-block元素间间距的N种方法](http://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)

给父元素设置 font-size: 0;

``` html
<style>
.parent {
  font-size: 0;
  text-align: center;
}

.child {
  font-size: 12px;
  display: inline-block;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">
  <div class="child decorate">1</div>
  <span class="child decorate">1</span>
  <div class="child decorate">1</div>
</div>
<div class="parent">
  <div class="child decorate">1</div><span class="child decorate">1</span><div class="child decorate">1</div>
</div>
```

## 水平 vartically

### 子元素是行内或行内块 inline or inlie-* 如何相对于父元素垂直居中

#### 父元素设置 padding: 30px 0;

``` html
<style>
.parent {
  padding: 30px 0;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">0</div>
<div class="parent">
  <span class="decorate">1</span><span class="decorate">1</span>
</div>
<div class="parent">
  <div style="display: inline-block;" class="decorate">1</span><div style="display: inline-block;" class="decorate">1</span>
</div>
```

#### 父元素设置 height: 100px; line-height: 100px;

注意：line-height: 100px; 会被行内块或者块级子元素继承

``` html
<style>
.parent {
  height: 100px;
  line-height: 100px;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">0</div>
<div class="parent">
  <span class="decorate">1</span>
  <span class="decorate">1</span>
</div>
<div class="parent">
  <span style="display: inline-block;" class="decorate">1</span>
  <div style="display: inline-block;" class="decorate">1</div>
</div>
```

### 多个子元素，且存在子元素是块级 block 如何相对于父元素垂直居中

#### 父元素 display: flex; align-items: center;

此时子元素变为可伸展的行内块元素，撑开到父元素的高度，一般会给子元素设置高度

``` html
<style>
.parent {
  display: flex;
  align-items: center;
  height: 200px;
  background-color: #f00;
}

.child {
  height: 50px;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">
  <span style="display: inline-block;" class="child decorate">1</span>
  <div style="display: inline-block;" class="child decorate">1</div>
  <div class="child decorate">1</div>
</div>
```

#### 父元素 display: flex; flex-direction: column; justify-content: center;

``` html
<style>
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  background-color: #f00;
}

.child {
  width: 50px;
  height: 50px;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">
  <span style="display: inline-block;" class="child decorate">1</span>
  <div style="display: inline-block;" class="child decorate">1</div>
  <div class="child decorate">1</div>
</div>
```

#### 子元素 margin-left + transform 控制

子元素宽度无需固定

``` html
<style>
.child {
  margin-left: 50%;
  transform: translate(-50%, 0);
}

.decorate {
  color: #fff;
  background-color: #000;
}

.w {
  width: 100px;
}
</style>

<div>
  <div class="child decorate w">1</div>
</div>
<div>
  <div class="child decorate">1</div>
</div>
```

#### 利用 position + top + transform

子元素高度无需固定

``` html
<style>
.parent {
  position: relative;
  z-index: 1;
  height: 100px;
}

.child {
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translate(0, -50%);
}

.decorate {
  color: #fff;
  background-color: #000;
}

.w {
  height: 50px;
}
</style>

<div class="parent">
  <div class="child decorate w">1</div>
</div>
<div class="parent">
  <div class="child decorate">1</div>
</div>
```

#### 利用 position + top + height + margin-top

子元素高度固定

``` html
<style>
.parent {
  position: relative;
  z-index: 1;
  height: 100px;
}

.child {
  position: absolute;
  top: 50%;
  z-index: 2;
  height: 50px;
  margin-top: -25px;
}

.decorate {
  color: #fff;
  background-color: #000;
}
</style>

<div class="parent">
  <div class="child decorate">1</div>
</div>
```

## 水平竖直都要居中

flex

``` css
/*父元素*/
display: flex;
justify-content: center;
align-items: center
```

position 宽高不固定

``` css
/*父元素*/
position: relative;
z-index: 1;

/*子元素*/
position: absolute;
z-index: 2;
top: 50%;
left: 50%
transform: translate(50%, -50%);
```

position 宽高固定

``` css
/*父元素*/
position: relative;
z-index: 1;

/*子元素*/
position: absolute;
top: 50%;
left: 50%
z-index: 2;
width: 100px;
height: 100%;
margin-top: -50px;
margin-left: -50px;
```
