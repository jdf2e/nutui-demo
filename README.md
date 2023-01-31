# NutUI 示例

本目录下包含基于 Vue CLI、Vite 搭建 NutUI 2.x、3.x、4.x 的相关示例


## 目录结构

```bash
├── nutui4-vue          # NutUI V4 版本相关示例
│   ├── vite-ts         使用 Vue 3、NutUI 4、Vite、Ts 搭建应用
│   ├── vue-cli         使用 Vue 3、NutUI 4、Vue Cli 搭建应用
│   ├── taro            使用 Vue 3、NutUI 4、Taro、Ts 搭建应用
│   ├── taro-tsx        使用 Vue 3、NutUI 4、Taro、Tsx 搭建应用
│   ├── cdn             通过 CDN 引入 NutUI
│
├── nutui3-vue          # NutUI V3 版本相关示例
│   ├── vite            使用 Vue 3、NutUI 3、Vite 搭建应用
│   ├── vite-ts         使用 Vue 3、NutUI 3、Vite 搭建应用
│   ├── vue-cli         使用 Vue 3、NutUI 3、Vue Cli 搭建应用
│   ├── taro            使用 Vue 3、NutUI 3、Taro、Ts 搭建应用
│   ├── cdn             通过 CDN 引入 NutUI
│
├── nutui2-vue          # NutUI V2 版本相关示例
│   ├── vue-cli         使用 Vue 2、NutUI 2、Vue Cli 搭建应用
│   ├── cdn             通过 CDN 引入 NutUI
│
```























## 目录

### cdn

cdn 目录下包含了通过 CDN 引入 NutUI 的示例，在浏览器内打开 cdn/index.html 即可查看效果。
- index.html 全局引入nutui
- custom.html cnd按需加载
- vite.html vue3使用示例

> 技术栈：Vue、NutUI

### base

base 通过 Npm 引入 NutUI 2.x 的示例，包含如下功能：

- 基于 NutUI 搭建
- 基于 vue-router 的单页面应用
- 组件按需引入
- rem 工程在 base 工程的基础上增加了移动端 rem 适配的配置。
- theme 工程在 base 工程的基础上增加了自定义主题色的配置。

> 技术栈：Vue、Vue CLI、Vue Router、NutUI


### typescript

基于 typescript 的工程，实现组件按需引入。

> 技术栈：Vue、Vue CLI、NutUI 2.x、TypeScript


- 基于 NutUI 搭建
- 基于 vue-router 的单页面应用
- 组件按需引入
- theme 工程在 base 工程的基础上增加了自定义主题色的配置。

### nuxt

基于 nuxt 的示例工程。

> 技术栈：Vue、Nuxt、NutUI 2.x 
- 组件按需引入
- theme 工程在 base 工程的基础上增加了自定义主题色的配置。

### vite、vite-ts

基于 vite vue3 nutui 3.x 的示例工程

> 技术栈：Vue3、NutUI 3.x  JavaScript TypeScript。

### vue3

基于 vuecli vue3 nutui 3.x 的示例工程

### taro

基于 taro 搭建的 nutui-taro 小程序 示例工程


## 预览

## 开发命令

```bash
# 安装依赖
# 注意：请切换到对应的子目录下安装
cd base
npm install

#按照对应package.json script 命令启动预览
```

