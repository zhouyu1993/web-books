# [Retiring vue-resource from official recommendation status.](https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4)
将 vue-resource 从标配中移除

## Reason

* vue 2.0 不再需要所谓的官方ajax库，用户可以自己选择第三方库，更多样性
* 第三方库很多，推动改进与维护，universal/isomorphic (works in both Node and Browsers) 同构的库，适用于服务端和客户端
* 所以说不必要再弄个官方ajax库出来，又要维护，还让用户受限制

## Does this mean vue-resource is deprecated ? Should I Stop Using It ? 意味着用户该停止使用 vue-resource 吗？

不，不是被舍弃，只是不作为官方ajax库进行维护了。觉得 vue-resource 不错，乐意高兴任性，就用，怎么滴？

当然，如果要追求[maintenance, universal/isomorphic support and more advanced features]同构的库，就换个更好的吧。

## What Should I Use Then ?

随意。推荐 axios、fetch。

# [axios](https://github.com/mzabriskie/axios)

axio 是最流行的的HTTP客户端库，涵盖 vue-resource 所有的方法。

In addition, it is universal, supports cancellation, and has TypeScript definitions. 而且是同构的。

``` js
import axios from 'axios'
```

``` js
// get 请求地址是/user/12345，用params

axios.get('/user', {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
```

``` js
// post 请求地址是/user?firstName=Fred&lastName=Flintstone，用 {}

axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
```

``` js
// Performing multiple concurrent requests
// 多个请求同时
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
.then(axios.spread(function (acct, perms) {
  // Both requests are now complete
}));
```

``` js
// like $.ajax

axios({
  // default get
  method: 'post',
  url: '/user/12345',
  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {
    ID: 12345
  },
  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  },
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  // default false
  withCredentials: true
});
```

``` js
// response 回调格式

{
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` the headers that the server responded with
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {}
}
```

``` js
// 如果在 vue 中使用，要提供Promise polyfill。
require('es6-promise').polyfill();
import Vue from 'vue'
import axios from 'axios'
// Vue.use(axios)
// 如果希望像 vue-resource 一样，使用 this.$http，这样设置
Vue.prototype.$http = axios
```

# [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

This is an experimental technology.

试验中，有兼容性问题。所以应该使用自定义封装的。

## [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)

``` js
require('es6-promise').polyfill()

import fetch from 'isomorphic-fetch'

fetch('//offline-news-api.herokuapp.com/stories')
.then((response) => {
  if (response.status >= 400) {
    throw new Error("Bad response from server")
  }
  return response.json()
})
.then(function (stories) {
  console.log(stories)
})

const api = async () => {
    try {
        const res = await fetch('/api')
        const json = await res.json
        console.log(json)
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
}
```

## [fetch-jsonp](https://github.com/camsong/fetch-jsonp)

``` js
require('es6-promise').polyfill()
import fetchJsonp from 'fetch-jsonp'

fetchJsonp('/users.jsonp', {
  jsonpCallback: 'custom_callback'
})
.then(function (response) {
  return response.json()
}).then(function (json) {
  console.log('parsed json', json)
}).catch(function (ex) {
  console.log('parsing failed', ex)
})
```

## 利用 isomorphic-fetch and fetch-jsonp 整合封装的，详见[fetch](https://github.com/zhouyu1993/web-books/tree/master/js/fetch)
