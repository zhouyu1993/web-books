# 参考
[Headers](https://developer.mozilla.org/zh-CN/docs/Web/API/Headers)

# 详解
Fetch API 的 Headers 类允许你去对 HTTP request 和 response 的 headers 执行各种操作。这些操作包括：检索, 设置, 添加和删除。

#@ Constructor
Headers.Headers()

创建一个新的Headers对象

```
const headers = new Headers()
```

## Methods
* headers.append()
> 给现有的 header 添加一个值, 或者新建一个未存在的 header 并赋值

* headers.delete()
> 从 headers 对象中删除指定 header

* headers.entries()
> 以 迭代器 的形式返回 headers 对象中所有的键值对

* headers.get()
> 从 headers 对象中返回指定 header的第一个值

* headers.getAll()
> 以数组的形式从 headers 对象中返回指定 header 的全部值

* headers.has()
> 以布尔值的形式从 headers 对象中返回是否存在指定的 header

* headers.keys()
> 以 迭代器 的形式返回 headers 对象中所有存在的 header 名

* headers.set()
> 替换现有的 header 的值, 或者添加一个未存在的 header 并赋值

* headers.values()
> 以 迭代器 的形式返回 headers 对象中所有存在的 header 的值

```
const headers = new Headers()
headers.has('Content-Type') // false
headers.get('Content-Type') // null
headers.append('Content-Type', '1')
headers.has('Content-Type') // true
headers.get('Content-Type') // "1"
headers.append('Content-Type', '2')
headers.get('Content-Type') // "1,2"
headers.getAll('Content-Type') // ["1", "2"]
headers.set('Content-Type', 3)
headers.get('Content-Type') // "3"
headers.delete('Content-Type')
headers.has('Content-Type') // false
headers.get('Content-Type') // null
```
