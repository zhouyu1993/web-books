# 参考
[Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
[Using_Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
[fetch 常见问题](http://www.aichengxu.com/php/24640778.htm)

# 详解

```
const myHeaders = new Headers()
myHeaders.append('Content-Type', 'image/jpeg')

reqOptions = {
    method: 'GET', // 或者 'POST'
    headers: myHeaders, // 请求头, 一般不设置取默认
    body: '', // Blob, BufferSource, FormData, URLSearchParams, USVString. 只有 POST 有!
    mode: 'cors', // cors, no-cors, same-origin, navigate
    credentials: 'omit', //  omit, same-origin, include
    cache: 'no-store', // no-store, reload, no-cache, force-cache 目前 Chrome 暂时不支持
    redirect: 'follow', // follow, error, manual
    referrer: 'about:client', // no-referrer, client
    integrity: ''
}

const request = new Request(reqUrl, reqOptions)
fetch(request)

fetch(reqUrl, reqOptions)
```
## new Request
```
const request = new Request('http://cms.cekid.com/publish/994/config/tool/detail/config.json', reqOptions)

fetch(request)
```

## fetch(reqUrl, reqOptions)

```
fetch('//cms.cekid.com/publish/994/config/tool/detail/config.json', reqOptions)
```

```
fetch('//cms.cekid.com/publish/994/config/tool/detail/config.json').then((response) => {
    console.log(response)
    console.log(response.body)
    console.log(response.bodyUsed)
    console.log(response.headers)
    console.log(response.ok)
    console.log(response.redirected)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.type)
    console.log(response.url)

    /*
    console.log(response.arrayBuffer())
    console.log(response.blob())
    console.log(response.clone())
    console.log(response.json())
    console.log(response.text())
    */
})
```

# fetch 接口 返回json
详见[fetch](https://github.com/zhouyu1993/web-books/tree/master/js/fetch)

```
fetch('//cms.cekid.com/publish/994/config/tool/detail/config.json').then((response) => {
    return response.json()
}).then(function(json) {
    console.log(json)
}).catch(function(e) {
    console.log(e)
})
```
# fetch 图片 返回 blob

```
fetch('//cmspic-10004025.image.myqcloud.com/7909d5ba-f041-4202-aecd-94c17a79dac4?imageMogr2/quality/80/format/webp')
.then((response) => {
  return response.blob()
}).then(function(blob) {
  console.log(blob, 1)
  let objectURL = URL.createObjectURL(blob)
  console.log(objectURL, 2)
  document.querySelector('img').src = objectURL
})
```

# fetch HTML 返回源码

```
fetch('//w.cekid.com/')
.then((response) => {
  return response.text()
}).then(function(text) {
  console.log(text, 1)
  document.body.innerHTML = text
})
```

# fetch 提交

## 提交表单

```
const form = document.querySelector('form')
const data = new FormData(form)

fetch('/users', {
  method: 'POST',
  body: data
})
```

## 上传文件（包括图片）

```
const input = document.querySelector('input[type=file]')
const files = Array.prototype.slice.call(input.files)

if (files.length) {
    files.forEach((v, i) => {
        const data = new FormData()
        data.append('file', v, 'name.jpg')
        fetch('/img-server', {
          method: 'POST',
          body: data
        })
    })
}
```

## 上传数据
```
const data = JSON.stringify({
  name: 'Hubot',
  login: 'hubot',
})

fetch('/users', {
  method: 'POST',
  body: data
})
```

## fetch 跨域问题，fetch 不支持JSONP

所以尽量不使用 JSOP, 如果要用, 引入 fetch-jsonp

## fetch 请求对某些错误http状态不会reject

400、500等不会reject，相反它会被resolve；只有网络错误会导致请求不能完成时，fetch 才会被 reject；所以一般会对fetch请求做一层封装

# fetch 不支持超时 timeout 处理

# fetch 不支持 progress 事件
