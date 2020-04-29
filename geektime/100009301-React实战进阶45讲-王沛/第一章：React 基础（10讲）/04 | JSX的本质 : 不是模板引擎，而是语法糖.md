JSX 不是模板语言/引擎，而是语法糖，本质是动态创建组件的语法糖

``` jsx
const element = <h1>hello, {name}</h1>
```

``` js
const element = React.createElement(
  'h1', // tag，标记
  null, // 属性
  'hello, ', // children
  name, // children
)
```

``` jsx
const element = <div className="comments">
  <h1>Comments ({this.state.items.length})</h1>
  <CommentList data={this.state.items} />
  <CommentForm />
</div>
```

``` js
const element = React.createElement(
  'div', // tag，标记
  { className: 'comments' }, // 属性
  React.createElement(
    h1, // tag，标记
    null, // 属性
    'Comments (', // children
    this.state.items.length, // children
    ')', // children
  ), // children
  React.createElement(
    CommentList, // tag，标记
    { data: this.state.items }, // 属性
  ), // children
  React.createElement(
    CommentForm, // tag，标记
    null, // 属性
  ), // children
)
```

不需要学习模版语言，只是纯粹的 JavaScript

![在 JSX 中使用表达式](https://pic3.zhimg.com/80/v2-062d100f18f7b374ac34dac57f9d1af5_1440w.png)

对比其它模版语言，比如 angular/vue 中有一些指令，是需要学习的

JSX 优点：

1. 声明式创建界面的直观
2. 代码动态创建界面的灵活
3. 无需学习新的模板语言

约定：自定义组件以大写字母开头

1. React 认为小写的 tag 是原生 DOM 节点，如 div
2. 大写字母开头为自定义组件
3. JSX 标记可以直接使用属性语法，例如 `<menu.item />`
