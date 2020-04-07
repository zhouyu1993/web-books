# 1

``` js
function test () {
  var a = 1
  while (a > 0) {
    a ++
  }
  console.log('ready1')
  var id = setTimeout(() => {
  	console.log('ok', new Date().getTime())
  }, 0)
  console.log(id, 'ready2', new Date().getTime())
  return false
}
test()
```

console.log('ready1')、setTimeout 和 console.log(id, 'ready2', new Date().getTime()) 永远不会执行，因为 while 是死循环，while 永远结束不了，而 js 是单线程的，while 没执行完，就不会往下走

# 2

``` js
function test () {
  var a = 1
  while (a < 1000000000) {
    a ++
  }
  console.log('ready1')
  var id = setTimeout(() => {
  	console.log('ok', new Date().getTime())
  }, 0)
  console.log(id, 'ready2', new Date().getTime())
  return false
}
test()
```

执行结果

``` bash
ready1
setTimeout的id, ready2, 1509298188728
false

ok, 1509298188729
```

当 while 不是死循环，执行到 setTimeout，是先挂起的，等下面同步走完再走

# 3

``` js
for (var i = 0; i < 3; i++) {
  var id = setTimeout(function() {
    console.log(i, 'setTimeout')
  }, 0);
  console.log(i, id, 'for')
}
```

执行结果

``` bash
1 setTimeout的id 'for'
2 setTimeout的id 'for'
3 setTimeout的id 'for'

3 'setTimeout'
3 'setTimeout'
3 'setTimeout'
```

等 for 循环结束，才会执行 setTimeout

# 4

``` js
var a = () => {
	console.log(1)
}

var b = () => {
	setTimeout(() => {
		console.log(2)
	}, 0)
	a()
}
```

``` bash
1
2
```


``` js
function sleep (a) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(a)
    }, a)
  })
}

const x = async () => {
  setTimeout(() => {
    console.log('0')
  }, 0)
  await sleep(1000)
  setTimeout(() => {
    console.log('2000')
  }, 2000)
}

x()
```
