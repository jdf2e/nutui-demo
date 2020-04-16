# NutUI 示例

本目录下包含基于 Vue CLI 搭建 NutUI 的相关示例，其中 cdn 和 base 目录为基础用法示例，其余目录为进阶配置的示例。

## 目录

### cdn

cdn 目录下包含了通过 CDN 引入 NutUI 的示例，在浏览器内打开 cdn/index.html 即可查看效果。
- index.html 全局引入nutui
- custom.html cnd按需加载

> 技术栈：Vue、NutUI

### base

base 通过 Npm 引入 NutUI 的示例，包含如下功能：

- 基于 NutUI 搭建
- 基于 vue-router 的单页面应用
- 组件按需引入
- rem 工程在 base 工程的基础上增加了移动端 rem 适配的配置。
- theme 工程在 base 工程的基础上增加了自定义主题色的配置。

> 技术栈：Vue、Vue CLI、Vue Router、NutUI


### typescript

基于 typescript 的工程，实现组件按需引入。

> 技术栈：Vue、Vue CLI、NutUI、TypeScript


- 基于 NutUI 搭建
- 基于 vue-router 的单页面应用
- 组件按需引入
- theme 工程在 base 工程的基础上增加了自定义主题色的配置。

### nuxt

基于 nuxt 的示例工程。

> 技术栈：Vue、Nuxt、NutUI 
- 组件按需引入
- theme 工程在 base 工程的基础上增加了自定义主题色的配置。

## 预览

## 开发命令

```bash
# 安装依赖
# 注意：请切换到对应的子目录下安装
cd base
npm install

# 本地开发
# 通过 localhost:8080 访问页面
npm run serve

# 生产环境构建
npm run build

# 代码格式校验
npm run lint
```
