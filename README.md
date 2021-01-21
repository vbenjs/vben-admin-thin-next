<p align="center">
  <a href="https://github.com/anncwb/vue-vben-admin" target="_blank">
    <img alt="VbenAdmin Logo" width="200" src="/anncwb/vue-vben-admin/raw/main/.github/res/imgs/logo.png">
  </a>
</p>
<h2 align="center">Vben Admin Thin Next</h2>

<<<<<<< HEAD **中文** | [English](./README.en-US.md)

- [介绍](#介绍)
- [gitHub 地址](#github-地址)
  - [精简版地址](#精简版地址)
- [预览地址](#预览地址)
- [文档](#文档)
- [预安装](#预安装)
  - [环境要求](#环境要求)
  - [UI 框架](#ui-框架)
- [修改清单](#修改清单)
- [注意](#注意)
  - [开发环境](#开发环境)
  - [打包](#打包)
  - [格式化](#格式化)
  - [其他](#其他)
- [Git 提交规范](#git-提交规范)
- [浏览器支持](#浏览器支持)
- [插件](#插件)
- [加入我们](#加入我们)

## 介绍

项目基于`ant-design-vue`,`typescript`,`vue3.0`,`vite`,`tsx`实现的 vue3 风格的后台管理系统，

## gitHub 地址

[vue-vben-admin2.0](https://github.com/anncwb/vue-vben-admin) - `main` 分支

### 精简版地址

======= [Chinese](./README.zh-CN.md) | **English**

[CHANGELOG](CHANGELOG.en_US.md)

- [Introduction](#introduction)
- [GitHub](#github)
  - [Thin](#thin)
- [Preview](#preview)
- [Documentation](#documentation)
- [Preinstallation](#preinstallation)
  - [Environmental requirements](#environmental-requirements)
  - [UI framework](#ui-framework)
  - [Icon](#icon)
  - [Plugin](#plugin)
  - [Suggested development environment](#suggested-development-environment)
- [Install](#install)
- [Usage](#usage)
  - [Development environment](#development-environment)
  - [Build](#build)
  - [Format](#format)
  - [Other](#other)
- [Git submit specifications](#git-submit-specifications)
- [Code contribution](#code-contribution)
- [Finished features](#finished-features)
- [Developing features](#developing-features)
- [Browser support](#browser-support)
- [Plugins](#plugins)

## Introduction

The project is based on the vue3 style background management system implemented by ʻant-design-vue`, `typescript`,`vue3.0`,`vite`,`tsx`,

## GitHub

[vue-vben-admin2.0](https://github.com/anncwb/vue-vben-admin) - `main` branch

### Thin

> > > > > > > 1fac4b4ba76d432b9a56e142a8d56571e825950f

[vue-vben-admin-thin-next](https://github.com/anncwb/vben-admin-thin-next)

## Preview

<<<<<<< HEAD

- # [2.0 精简版 在线预览](https://vvbin.cn/thin/next/)
- [2.0 preview](https://vvbin.cn/next/)

- [2.0 Thin Preview](https://vvbin.cn/thin/next/)
  > > > > > > > 1fac4b4ba76d432b9a56e142a8d56571e825950f

Account for test: vben/123456

<p align="center">
    <img alt="VbenAdmin Logo" width="100%" src="./.github/res/imgs/preview1.png">
    <img alt="VbenAdmin Logo" width="100%" src="./.github/res/imgs/preview2.png">
    <img alt="VbenAdmin Logo" width="100%" src="./.github/res/imgs/preview3.png">
</p>

## Documentation

The documentation for 2.0 hasn't started yet, it will be provided later.

## Preinstallation

### Environmental requirements

<<<<<<< HEAD

- `Node.js`: - 版本最好大于 `12.0.0`
- # `yarn` > `npm` > `cnpm`: - 包管理工具.
- `Node.js`: - Version>`12.0.0` is better.
- `yarn` > `npm` > `cnpm`: - Package management tool.
  > > > > > > > 1fac4b4ba76d432b9a56e142a8d56571e825950f

### UI framework

- [Tailwind CSS](https://tailwindcss.com/) - 2.0.0-beta.5 has deleted.
- [Ant Design Vue 2.0](https://2x.antdv.com/docs/vue/introduce-cn/)

<<<<<<< HEAD 测试账号: vben/123456

## 修改清单

当你开始使用时，请按下面列表先行修改项目

- [ ] 重命名 `package.json` 中的 `name` 字段
- [ ] 在`LICENSE`中更改作者姓名
- [ ] 在`public`中修改 `favicon.ico`
- [ ] 在`public/resource/`和`/src/assets/images/logo.png`中修改 `logo.png`
- [ ] 在`.env[xxx]`文件中修改相关项目配置
- [ ] 在`src/settings/projectSetting.ts`内调整适合自己的项目风格
- [ ] 项目默认启用角色来控制菜单，且后台请求菜单已被注释，如果需要使用后台动态生成路由。
  - 请将`/src/store/modules/permission.ts`内的关于动态请求菜单的注释放开
  - 请将`/src/utils/helper/routeHelper.ts`内的关于动态请求菜单的注释放开

## 注意

依赖删除了`echarts`,`apexcharts`,`zxcvbn`,`qrcode`,`xlsx`,`vditor`。但是组件及代码未删除。在你未引用到相关组件的时候，不会发出错误。当你需要使用的时候，只需要执行相应的命令安装对应模块即可

需要用到哪个则执行对应命令

````js

yarn add echarts

yarn add apexcharts
=======
### Icon

- [Ant Design Vue Icon Component](https://2x.antdv.com/components/icon-cn/) - Icon which is imported on demand.
- [Iconify](https://iconify.design) - Icon can be used [Icônes](https://icones.netlify.app/)
- [PurgeIcons](https://github.com/antfu/purge-icons) - Icon which is used by build.

### Plugin

- [Vue Router Next](https://github.com/vuejs/vue-router-next)
- [Vuex Next](https://github.com/vuejs/vuex)
- [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators) - vuex modular
- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) - Mock plugin base on vite
- [vue-i18n](https://github.com/intlify/vue-i18n-next) - Internationalization
- [lodash-es](https://github.com/lodash/lodash) - JavaScript utility library
- [axios](https://github.com/axios/axios) - Http data interaction
- [TypeScript](https://www.typescriptlang.org/)

### Suggested development environment

- `Git`: - Tool of version management
- `Visual Studio Code` - (VSCode): Latest version
  - [VS Code Extensions](./.vscode/extensions.json)
    - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
    - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind css style association
    - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - Essential for vue development
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Checking script code
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatting
    - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - Css formatting

## Install

```bash
#  Make git case sensitive to file names
git config core.ignorecase false

# Pull code of the project
git clone https://github.com/anncwb/vue-vben-admin.git vue-vben-admin-2.0
>>>>>>> 1fac4b4ba76d432b9a56e142a8d56571e825950f

yarn add zxcvbn

<<<<<<< HEAD
yarn add qrcode
=======
# If you use other package management tool, you can install it by yourself
#  if you hasn't install yarn, please run: npm install -g yarn
yarn install
>>>>>>> 1fac4b4ba76d432b9a56e142a8d56571e825950f

yarn add vditor

<<<<<<< HEAD
yarn add xlsx

````

=======

## Usage

> > > > > > > 1fac4b4ba76d432b9a56e142a8d56571e825950f

### Development environment

```bash
yarn serve
```

### Build

```bash

yarn build # build

yarn build:no-cache # build, cache will be removed before build

yarn report # Generate build package report preview
```

### Format

```bash
yarn lint:stylelint # css formatting

yarn lint:prettier # js/ts code formatting
```

### Other

```bash
yarn reinstall # Remove dependencies and reinstall, supported window

yarn preview # Build and preview in local

yarn log # Generate CHANGELOG

yarn clean:cache # Delete cache

yarn clean:lib # Delete node_modules, supported window
```

<<<<<<< HEAD

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

## 浏览器支持

本地开发推荐使用`Chrome`浏览器,在火狐浏览器进行开发相对卡顿。

# 支持现代浏览器, IE 暂不支持，后续考虑支持 ie11

## Git submit specifications

- Refer to [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) specifications ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` Add new features
  - `fix` Fix problem/BUG
  - `style` Code style related and doesn't affect the running result
  - `perf` Optimization/performance improvement
  - `refactor` Refactor
  - `revert` Undo edit
  - `test` Test related
  - `docs` Documentation/notes
  - `chore` Dependent update/scaffolding configuration modification etc
  - `workflow` Workflow improvements
  - `ci` Continuous integration
  - `types` Update file of type definition
  - `wip` Developing

## Code contribution

1. Fork code!
2. Create your own branch: `git checkout -b feat/xxxx`
3. Submit your changes: `git commit -am 'feat(function): add xxxxx'`
4. Push your branch: `git push origin feat/xxxx`
5. submit`pull request`

## Finished features

- [x] Project construction (based on vite）)
- [x] Login and exit
- [x] Menu (can search, drag and drop and menu layout)
- [x] Multiple tabs/breadcrumbs
- [x] Permission management base on role
- [x] Permission management base on background
- [x] The separation of routing and menu settings
- [x] Collapsible sidebar
- [x] Draggable sidebar
- [x] Multi-tab mode/global control
- [x] Menu search
- [x] Page loading
- [x] Scroll bar component
- [x] Pop-up window expansion (dragable, full screen, adaptive height)
- [x] Mock data
- [x] hook Package
- [x] Form component
- [x] Right-click menu
- [x] Watermark plugin
- [x] Animation component
- [x] QR code plugin
- [x] Internationalization plugin
- [x] Details component
- [x] Validation component
- [x] Tree component
- [x] Picture preview component
- [x] Table component
- [x] Chart library
- [x] Digital animation
- [x] First screen loading waiting animation
- [x] Extract the production environment profile
- [x] Build Gzip
- [x] System performance optimization
- [x] Data import and export
- [x] Global error handling
- [x] Rich text component
- [x] Upload component

## Developing features

- [ ] Theme configuration
- [ ] Dark theme
- [ ] Build CDN

If you have more components/functions/suggestions/bugs/, welcome to submit pr or issue.

## Browser support

It is recommended to use the `Chrome` browser for local development. Development in the Firefox browser is relatively slow.

Support modern browsers, Not currently supported ie11，Follow-up consideration support ie11

> > > > > > > 1fac4b4ba76d432b9a56e142a8d56571e825950f

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

More browsers can view [Can I Use Es Module](https://caniuse.com/?search=ES%20Module)

## Plugins

If these plugins are helpful to you, you can give a star

- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock)
- [vite-plugin-html](https://github.com/anncwb/vite-plugin-html)
- [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import)
