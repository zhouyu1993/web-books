# 2016.12.14

# 寻找 (css) filter 属性在 IE 10+ 后的替代

* 需求：（国家公祭日）给网页加上灰色蒙层
* 实现方式：
<pre>
html {
	filter: grayscale(100%);
	-o-filter:	grayscale(100%); /* presto opera */
	-moz-filter: grayscale(100%); /* gecko firefox */
	-webkit-filter: grayscale(100%); /* webKit chrome/ios */
}
html *{
	filter:	gray; /* trident IE 9- */
}
</pre>

* IE 10 以后废弃了 filter，所以只能兼容 IE 9-
