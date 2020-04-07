# 父传子 props

## parend.vue

``` html
<template>
    <div>
        <child static="0" :dynamic="num" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 1
        }
    }
}
</script>
```

## child.vue

``` html
<template>
    <div>
        <span>{{static}}</span>
        <span>{{dynamic}}</span>
    </div>
</template>

<script>
export default {
    props: {
        static: {
            type: String,
            default: '0'
        },
        dynamic: {
            type: Number,
            default: 1
        }
    }
}
</script>
```

## props 验证

``` js
props: {
    // 数字
    propA: Number,
    // 必传且是字符串
    propB: {
        type: String,
        required: true
    },
    // 字符串或数字
    propC: [String, Number],
    propD: {
        type: Number,
        default: 100
    },
    // 对象
    propE: {
        type: Object,
        default() {
            return { message: 'hello' }
        }
    },
    // 数组
    propF: {
        type: Array,
        default() {
            return []
        }
    },
    // 验证
    propG: {
        type: Number,
        validator(value) {
            return value > 10
        }
    },
    // 函数
    propH: {
        type: Function,
        default(parame) {
            console.log(parame)
        }
    },
    // 布尔
    propH: {
        type: Boolean,
        default: true
    }
}
```

## 单向数据流

prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。

这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。

另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。

这意味着你不应该在子组件内部改变 prop 。如果你这么做了，Vue 会在控制台给出警告。

为什么我们会有修改prop中数据的冲动呢？通常是这两种原因：
* prop 作为初始值传入后，子组件想把它当作局部数据来用；
* prop 作为初始值传入，由子组件处理成其它数据输出。

对这两种原因，正确的应对方式是：
* 定义一个局部变量，并用 prop 的值初始化它：

``` js
props: ['initialCounter'],
data() {
    return { counter: this.initialCounter }
}
```

* 定义一个计算属性，处理 prop 的值并返回。

``` js
props: ['size'],
computed: {
    normalizedSize() {
        return this.size.trim().toLowerCase()
    }
}
```

## 子组件如何向父组件返回

### 使用 v-on 绑定自定义事件，使用 $emit 来触发

* 使用 $on(eventName) 监听事件
* 使用 $emit(eventName) 触发事件

#### parend.vue

``` html
<template>
    <div>
        <child static="0" :dynamic="num" v-on:event="console" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'parend',
            num: 1
        }
    },
    methods: {
        console(value) {
            console.log(value, this.title)
        }
    }
}
</script>
```

#### child.vue

``` html
<template>
    <div>
        <span>{{static}}</span>
        <span>{{dynamic}}</span>
    </div>
</template>

<script>
export default {
    props: {
        static: {
            type: String,
            default: '0'
        },
        dynamic: {
            type: Number,
            default: 1
        }
    },
    created() {
        this.$emit('event')
    }
}
</script>
```

### 使用 v-model 进行数据双向绑定，使用 $emit 来触发 input 事件

v-model="value"

相当于

v-bind:value="value" v-on:input="value = arguments[0]"

但是 model 值不一定在子组件进行接收，如果子组件不使用仅仅是改变的话。

父组件可以通过 watch 来监控 model 值的变化。

#### parend.vue

``` html
<template>
    <div>
        <child static="0" :dynamic="num" v-model="value" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'parend',
            num: 1,
            value: 'old'
        }
    },
    watch: {
        value (value) {
            this.console(value)
        }
    },
    methods: {
        console(value) {
            console.log(value, this.title)
        }
    }
}
</script>
```

#### child.vue

``` html
<template>
    <div>
        <span>{{static}}</span>
        <span>{{dynamic}}</span>
    </div>
</template>

<script>
export default {
    props: {
        static: {
            type: String,
            default: '0'
        },
        dynamic: {
            type: Number,
            default: 1
        }
    },
    created() {
        this.$emit('input', 'new')
    }
}
</script>
```

### 使用 v-bind 进行数据【函数】单向绑定

父组件传递一个函数给子组件，子组件进行调用该函数，从而父组件可以接收到回调

#### parend.vue

``` html
<template>
    <div>
        <child static="0" :dynamic="num" :func="console" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'parend',
            num: 1,
            value: 'old'
        }
    },
    methods: {
        console(value) {
            console.log(value, this.title)
        }
    }
}
</script>
```

#### child.vue

``` html
<template>
    <div>
        <span>{{static}}</span>
        <span>{{dynamic}}</span>
    </div>
</template>

<script>
export default {
    props: {
        static: {
            type: String,
            default: '0'
        },
        dynamic: {
            type: Number,
            default: 1
        },
        console: Function
    },
    created() {
        this.console('new')
    }
}
</script>
```
