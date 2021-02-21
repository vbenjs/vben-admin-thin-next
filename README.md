<p align="center">
  <a href="https://github.com/anncwb/vue-vben-admin" target="_blank">
    <img alt="VbenAdmin Logo" width="200" src="/anncwb/vue-vben-admin/raw/main/.github/res/imgs/logo.png">
  </a>
</p>
<h2 align="center">Vben Admin Thin Next</h2>

- # [2.0 精简版 在线预览](https://vvbin.cn/thin/next/)
- [2.0 preview](https://vvbin.cn/next/)

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

- `Node.js`: - Version > `12.0.0` .
- `yarn` : - Package management tool.

当你开始使用时，请按下面列表先行修改项目

- [ ] 重命名 `package.json` 中的 `name` 字段
- [ ] 在`LICENSE`中更改作者姓名
- [ ] 在`public`中修改 `favicon.ico`
- [ ] 在`public/resource/`和`/src/assets/images/logo.png`中修改 `logo.png`
- [ ] 在`.env[xxx]`文件中修改相关项目配置
- [ ] 在`src/settings/projectSetting.ts`内调整适合自己的项目风格

## 注意

依赖删除了`echarts`,`apexcharts`,`xlsx`,`vditor`。但是组件及代码未删除。在你未引用到相关组件的时候，不会发出错误。当你需要使用的时候，只需要执行相应的命令安装对应模块即可

需要用到哪个则执行对应命令

```js

yarn add echarts

yarn add apexcharts

```
