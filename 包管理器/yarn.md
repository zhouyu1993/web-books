# yarn

依赖／包的管理器，一个用于替代 NPM 的 CLI 工具，具有快速、可信赖、安全等特点


[yarn](https://yarnpkg.com/zh-Hans/)
[yarn-github](https://github.com/yarnpkg/yarn)

## 安装 yarn

``` bash
# brew 安装
brew install yarn

# npm 安装
npm install -g yarn
```

## 升级 yarn

``` bash
# brew 安装
brew upgrade yarn

# npm 安装
npm update -g yarn
```

## 使用 yarn

``` bash
# 查看版本
yarn --version

# 初始化。等同于 npm init
yarn init

# 添加依赖到 dependencies。等同于 npm install -save [name]
yarn add [package]

# 添加依赖到 devDependencies、peerDependencies 和 optionalDependencies
yarn add --dev [package]
yarn add --peer [package]
yarn add --optional [package]

# 查看当前所有可升级的依赖
yarn outdated

# 升级依赖。等同于 npm update [package]
yarn upgrade [package]

# 卸载依赖。等同于 npm uninstall [package]
yarn remove [package]

# 安装 package.json 中所有依赖。等同于 npm install
yarn

# 只安装 dependencies（--save 生产阶段的依赖）的包。等同于 npm install --production
yarn --production

# 清除缓存。等同于 npm cache clean
yarn cache clean
```
