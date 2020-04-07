# [File](https://developer.mozilla.org/zh-CN/docs/Web/API/File)
# [1](https://developer.mozilla.org/zh-CN/docs/%E6%89%A9%E5%B1%95/Using_the_DOM_File_API_in_chrome_code)

File 接口提供了文件信息、文件内容的存取方法

## File 对象

* 来自用户在一个 [input](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input) 元素上选择文件后返回的 [FileList 对象](https://developer.mozilla.org/zh-CN/docs/Web/API/FileList)

* 来自 [Drag and Drop](https://developer.mozilla.org/zh-CN/docs/DragDrop/Drag_and_Drop) 拖拽操作生成的 [DataTransfer](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer) 对象

### 通过 input

```
// HTML
    // 单选
<input type='file' id='a'>
    // 多选
<input type='file' multiple id='b'>

// JS
const fileChange = (e) => {
    try {
        console.log(e)
        const files = e.target.files
        const filesArray = Array.prototype.slice.call(files)
        if (filesArray.length) {
            if (typeof FileReader === 'undefined') {
                console.log('您的浏览器不支持文件上传，请升级您的浏览器')
            } else {
                filesArray.forEach((v, i) => {
                    console.log(v)
                })
            }
        }
    } catch(e) {
        console.log(e)
    }
}
// document.querySelector('#a').addEventListener('change', fileChange)
document.querySelector('#b').addEventListener('change', fileChange)
```
