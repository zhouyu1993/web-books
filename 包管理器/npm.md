# npm

依赖／包的管理器

[npm](https://www.npmjs.com/)

[doc](https://docs.npmjs.com/)

## 安装 node.js 并升级 npm

在 [nodejs](https://nodejs.org/) [nodejs中文网](http://nodejs.cn/) 下载 node.js

查看版本

``` bash
node -v
npm -v
```

更新 npm 至最新版本

``` bash
npm install -g npm

npm -v
```

## 用 n 管理或升级 nodejs

## 在 Mac OS 上使用 Homebrew 来安装/升级 nodejs

``` bash
brew install node

brew upgrade node
```

## 初始化

初始化项目创建 packages.json

``` bash
npm init
```

## 安装包

### 整体安装

存在 packages.json 时

全部安装

``` bash
npm I/install
```

只安装 dependencies

``` bash
npm I -P/--prod
```

### 单独安装

"dependencies"：您的应用程序在生产中需要这些软件包

``` bash
npm I -S/--save [package]
```

"devDependencies"：这些软件包仅用于开发和测试

``` bash
npm I -D/--save-dev [package]
```

## 查看并修改配置

``` bash
cat ~/.npmrc

vi ~/.npmrc
```

## 更新与卸载依赖

``` bash
# 查看全局所有可升级的包
npm outdated -g

# 查看当前所有可升级的包
npm outdated

# 升级全局所有可升级的包
npm update -g

# 升级全局某个包
npm update -g [package]

# 升级当前所有可升级的包
npm update

# 升级当前某个包
npm update [package]
```

``` bash
# 卸载全局所有包
npm uninstall -g

# 卸载全局某个包
npm uninstall -g [package]

# 卸载当前所有包
npm uninstall

# 卸载当前某个包
npm uninstall [package]
```

## 如何发布自己的 package

[publishing-npm-packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

``` bash
# 发布
npm publish

# 删除
npm unpublish <pkg>[@<version>]

# 作废
npm deprecate <pkg>[@<version>] <message>
```

注意每次 publish 的版本号必须大于之前的！

npm unpublish 只能删除 24 小时内的，而且即使删除后也不允许发布同版本！

## 清除缓存

``` bash
npm cache clean
```

## 列出 packages

``` bash
# 列出全局包
npm ls -g

# 列出当前包
npm ls
```

# 什么是 package

1. a folder containing a program described by a package.json file
2. a gzipped tarball containing 1.
3. a url that resolves to 2.
4. a <name>@<version> that is published on the registry with 3.
5. a <name>@<tag> that points to 4.
6. a <name> that has a latest tag satisfying 5.
7. a git url that, when cloned, results in 1.

# 什么是 module

1. a folder with a package.json file containing a main field.
2. a folder with an index.js file in it.
3. a JavaScript file.

Most npm packages are modules.

# 什么是 cli

command line interface

# 什么是 node_modules

The package.json file defines the package.

The node_modules folder is the place Node.js looks for modules.

# 什么是 package.json

``` json
{
  "name": "project",
  "version": "1.0.0",
  "description": "project",
  "keywords": "project",
  "homepage": "",
  "bugs": {
    "url": "https://github.com/zhouyu1993/project/issues",
    "email": "project@hostname.com"
  },
  "author": "RainJoy <1490079545@qq.com>",
  "private": true,
  "repository": {
    "type": "git",
    "url": "git@github.com:zhouyu1993/project.git"
  },
  "scripts": {},
  "dependencies": {},
  "devDependencies": {},
  "engines": {
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 3 versions",
    "ios >= 8",
    "android >= 4",
    "ie > 8"
  ]
}
```

# npm 走[taobao镜像](http://npm.taobao.org/)

``` bash
npm install --registry=https://registry.npm.taobao.org
```

# 镜像设置

``` bash
npm config set registry https://registry.npmjs.org

npm config set registry https://registry.npm.taobao.org
```
