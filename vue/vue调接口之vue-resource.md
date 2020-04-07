# [vue-resource](https://github.com/pagekit/vue-resource)

# 注册

``` js
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
```

# 使用

``` js
this.$http.get('/someUrl', {
  'parame1': 'bar',
  'parame1': 'foo'
}).then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})

this.$http.post('/someUrl', {
  'parame1': 'bar',
  'parame1': 'foo'
}).then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})

this.$http.jsonp(api.searchlist, {
	params: {
    'parame1': 'bar',
    'parame1': 'foo'
	},
	jsonp: 'jsonpCallback'
}).then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})
```
