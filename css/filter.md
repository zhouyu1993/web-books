# [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)
CSS滤镜（filter）属提供的图形特效，像模糊，锐化或元素变色。过滤器通常被用于调整图片，背景和边界的渲染。

# 它的值是函数

### url()

接受一个XML文件，该文件设置了 一个SVG滤镜，且可以包含一个锚点来指定一个具体的滤镜元素

``` css
filter: url(resources.svg#c1)
```

``` css
filter: url("data:image/svg+xml;utf8,&lt;svg xmlns=\'http://www.w3.org/2000/svg\'>&lt;filter id=\'grayscale\'>&lt;feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/>&lt;/filter>&lt;/svg>#grayscale")
```

### blur()

<b>高斯模糊</b>。“radius”一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置为css的长度值(px em rem)，但不接受百分比值。

``` css
filter: blur(radius)
```

radius >= 0 (px em rem)

默认 0

### brightness()

<b>亮度</b>给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。

``` css
filter: brightness(0.5)
```

0 <= brightness <= 1

默认 1

### contrast()

<b>对比度</b>。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。

``` css
filter: contrast(200%)
```

contrast >= 0

默认 1

### drop-shadow()

<b>阴影</b>。阴影是合成在图像下面，可以有模糊度的，可以以特定颜色画出的遮罩图的偏移版本。 函数接受<shadow>（在CSS3背景中定义）类型的值，除了“inset”关键字是不允许的。该函数与已有的box-shadow box-shadow属性很相似；不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速。

``` css
filter: drop-shadow(offset-x, offset-y, blur-radius, color)
```

* offset-x, offset-y (必须)

>这是设置阴影偏移量的两个length值

>offset-x 设定水平方向距离. 负值会使阴影出现在元素左边. offset-y 设定垂直距离. 负值会使阴影出现在元素上方

* blur-radius 可选

>length值. 值越大，越模糊，则阴影会变得更大更淡.不允许负值 若未设定，默认是0 (则阴影的边界很锐利).

* spread-radius 可选(尽量不用)

>length值. 正值会使阴影扩张和变大，负值会是阴影缩小.若未设定，默认是0 (阴影会与元素一样大小).

>webkit 以及一些其他浏览器不支持第四个长度，如果加了也不会渲染

* color 可选

>color值. 若未设定，颜色值基于浏览器。

### grayscale()

<b>灰度</b>。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0。

``` css
filter: grayscale(1)
```

0 <= grayscale <= 1

默认 0

### hue-rotate()

<b>色相旋转</b>。“angle”一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。

``` css
filter: hue-rotate(90deg)
```

rotate >= 0deg

默认 0deg

大于 360deg 等于又绕了一圈，相当于 0deg
