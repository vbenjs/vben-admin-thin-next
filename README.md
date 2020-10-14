<p align="center">
  <a href="https://github.com/anncwb/vue-vben-admin" target="_blank">
    <img alt="VbenAdmin Logo" width="200" src="./.github/res/imgs/logo.png">
  </a>
</p>
<h2 align="center">Vben Admin Thin Next</h2>

**中文**

- [介绍](#介绍)
- [预览地址](#预览地址)
- [修改清单](#修改清单)
- [注意](#注意)
  - [开发环境](#开发环境)
  - [打包](#打包)
  - [格式化](#格式化)
  - [其他](#其他)
- [Git 提交规范](#git-提交规范)

## 介绍

该项目为 [vue-vben-admin2.0](https://github.com/anncwb/vue-vben-admin)的精简版本。

## 预览地址

- [2.0 精简版 在线预览](https://vvbin.cn/thin/next/)

- [2.0 在线预览](https://vvbin.cn/next/)

测试账号: vben/123456

## 修改清单

当你开始使用是，请按下面列表先行修改项目

- [ ] 重命名 `package.json` 中的 `name` 字段
- [ ] 在`LICENSE`中更改作者姓名
- [ ] 在`public`中修改 `favicon.ico`
- [ ] 在`public/resource/`和`/src/assets/images/logo.png`中修改 `logo.png`
- [ ] 在`.env[xxx]`文件中修改相关项目配置
- [ ] 在`src/settings/projectSetting.ts`内调整适合自己的项目风格
- [ ] 项目默认启用角色来控制菜单，且后台请求菜单已被注释，如果需要使用后台动态生成路由。请将`/src/store/modules/permission.ts`内的关于动态请求菜单的注释放开

## 注意

依赖删除了`echarts`,`apexcharts`,`zxcvbn`,`qrcode`四个模块。但是组件及代码未删除。在你未引用到相关组件的时候，不会发出错误。当你需要使用的时候，只需要执行相应的命令安装对应模块即可

需要用到哪个则执行对应命令

```js
// echarts 需要单独在 vite.config.ts内加上
// optimizeDeps: {
//     include: [
//       'echarts',
//     ],
//   },
yarn add echarts

yarn add apexcharts

yarn add zxcvbn

yarn add qrcode

```

### 开发环境

```bash
yarn serve
```

### 打包

```bash

yarn build # 打包

yarn build:no-cache # 打包，执行之前会先删除缓存

yarn report # 生成构建包报表预览
```

### 格式化

```bash
yarn lint:stylelint # 样式格式化

yarn lint:prettier # js/ts代码格式化
```

### 其他

```bash
yarn reinstall # 删除依赖重新装，兼容window

yarn preview # 本地进行打包预览

yarn log # 生成CHANGELOG

yarn clean:cache # 删除缓存

yarn clean:lib # 删除node_modules，兼容window系统
```

## Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
