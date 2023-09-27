# ipaas共建楼层demo

demo中使用react作为共建楼层, 通天塔系统基于react，因此使用react可以共享系统相关第三方库。

样式内置了`sass`和`styled-components`,无需额外loader配置可直接使用。

注意：使用`sass`需要先安装`node-sass`。
```
npm install node-sass
```

## 可用脚本

### `npm run dev`

### `npm build`

## 屏幕适配方案

1.如果使用rem布局，标准为:

> rem作为全局布局单位，请务必保持统一， 评估是否有必要使用，如无必要，请使用vw替代

2.如果使用vw布局，标准为:

基准屏宽度是`375px`。

文件`src/demo/index.styled.js` 中内置以下方法(参考):

+ px2vw          `375px`
+ doublepx2vw    `750px`
+ triplepx2vw    `1125px`

## css相关

模版提供了`styled-components css in js` 组件用于处理样式, 开发者也可以使用less、scss开发样式。

## 脚手架配置

ipaas脚手架提供了配置扩展能力, 需创建`ifloor.config.js`配置文件。

**`actEnv`**

`string`, 默认`beta`, 可选`beta`或者`production`

配置用于设置本地开发阶段，mock素材查询接口调用环境, 接口查询依赖`config.json/material`、`src/mock.js/payload/materialParams`相关配置项

**`plugins`**

类型: [PluginConfigItem[]](http://unpkg.m.jd.com/browse/@jmfe/ifloor-scripts@1.2.5/lib/config.d.ts)

```js
// 共建楼层配置文件
{
  plugins: [
    ['./ifloor-plugin-log-webpack-config', {logDev: true, logText: '正在打印内容:'}]
  ]
}
```

**`previewUrl`**

`string`, 默认为空，本地预览与线上数据互通(env、bridge)

本地预览配置, 传入有效可访问链接后，开启本地开发与线上活动混合预览模式，previewUrl可以设置为任意通天塔可访问链接, 如预览链接、线上活动链接

> 数据互通只适用mock.js中的env、bridge字段，数据字段如`payload`保持原有逻辑

```js
{
  previewUrl: 'https://prodev.m.jd.com/mall/active/4Ex9dP31PR6VXEERGxpXevH6xYNa/index.html?_ts=1619766029826&utm_user=plusmember&gx=RnFgkWIMPmXfntRP--tyWWOztpxMhgLlbOeu&ad_od=share&utm_source=androidapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL'
}
```

## 开启楼层装修区域(B端)预览

`1.4.0`之后的版本支持运营搭建区域预览, 开启方法如下：

1. 在共建楼层入口`src/index.tsx`中添加以下代码

```js
// 开启B端预览
export const IFLOOR_PREVIEW_ENABLE = true;
```

2. src目录下新建`Preview.js`react组件

示例：

```js
  // src/Preview.js
  import React from 'react';
  export default function ({ payload }) {
    return <div>1111111{JSON.stringify(payload)}</div>;
  }
```

> 1. B端预览只支持React组件
> 2. B端预览组件只会在运营预览区域加载并实例化

3. 注释`ifloor.config.js`中的`previewUrl`配置项

4. 本地调试预览组件

在url后面添加`source=preview` 

## 楼层关联多组件实现

一部分开发者存在使用1个楼层仓库管理多个楼层组件的使用场景， `webpack`内置支持了`dynamic-imports`特性, 具体使用请参考 https://webpack.docschina.org/guides/code-splitting/#dynamic-imports, 一种可能的实现方法为: `动态表单配置组件名称，楼层运行时动态引入楼层代码，并渲染`

## 楼层性能优化建议

单个楼层js资源建议不要超过`300kb`, 资源过大会阻塞其它资源的加载与执行，可以通过以下几个方面减少资源大小

1. 非强依赖模块，可以考虑通过dynamic-imports的方法按需引入

2. 未开启tree-shaking的情况下，可以只引入所依赖的模块，比如lodash模块，只需引入需要的方法，不用全部引入

```js
//推荐的方式
import escape from 'lodash/escape';
import _ from 'lodash';

```
3. 开启`Tree Shaking`

4. 多个楼层如果依赖相同的资源，可以使用ihub sdk，把资源抽离出去, 可以参考 https://cf.jd.com/pages/viewpage.action?pageId=538079561

5. 客户端离线包缓存，资源url后添加`jdhybrid-offline=1`
>1. 构建完成后，找到 **dist/index.html**
>2. 找到外链资源后可以在url后面新增**jdhybrid-offline=1**参数
>3. 修改完成后手动发布当前文件到ihub

示例：
```html
<!-->dist/index.html<-->
<script src="//storage.360buyimg.com/ifloors/00022192/static/js/main.34d5dc5e.js?jdhybrid-offline=1"></script>
```
## 相关文件介绍

**`src/index.tsx`**

ipaas 共建楼层入口js文件, 导出为function类型, 线上运行时入参由系统注入, 本地开发运行是由`src/mock.js`注入

**`src/Preview.js`**

B端预览组件，只有在`src/index.tsx`中开启`IFLOOR_PREVIEW_ENABLE`后才会自动导入

**`src/App.tsx`**

ipaas 共建楼层react渲染组件, 通过render方法挂载到`src/index.html`中`.ipaas-floor-app`元素下, 开发者可以从这个文件开始开发

**`src/index.styled.js`**
ipaas 共建楼层多屏幕适配， 采用`styled-components`组件，内置了px到rem、vw单位的转换(**不要使用rem**)

**`src/mock.js`**

ipaas 共建楼层本地开发阶段自动注入，**无需代码中显式引入**, 线上运行时将由系统注入, 文件只用于本地开发

**`public/index.html`**

ipaas 共建楼层html模版代码, 由通天塔系统加载、解析、渲染

## 遇到哪些问题⚠️

Q: 本地开发mock素材太麻烦，有没有简便一点的方法

leo-builder版本`1.3.1`及以上内置自动注入的功能，除了需要升级builder外, 项目还需要安装`@jmfe/ifloor-scripts`, 版本要与builder相同。

根据mock.js中的`materialParams`、config.json中`material`的字段查询素材并注入到运行时。

Q: 我刚才新建了一个共建楼层，代码类别的楼层。在通天塔项目中引入后不生效

请先检查`package.json`中的楼层ID`ifloorId`是否设置正确, 可以从ihub模版信息中查看

Q: 本地开发环境下，如何重新设置http server端口号

在本地开发dev命令下增加一个环境变量 PORT `cross-env PORT=8888`

Q: 本地开发环境下，如何设置服务proxy

开发套件支持重写webpack配置，代理设置可以参考`webpack-dev-server`

Q: 共建楼层带有tab吸顶功能，如何跟系统交互

请参考https://cf.jd.com/pages/viewpage.action?pageId=589444008

Q: 开启了B端预览，但是本地开发没有渲染Preview.js

第一，请确保url后面是否添加source=preview参数 
第二，请注释`ifloor.config.js`中的`previewUrl`配置项

Q: 旧的模版如何升级`builder`

`1.3.0`之前的版本只需要升级`leorc.js`中的builder版本, 之后的版本，需要同时在当前工作目录安装`@jmfe/ifloor-scripts`, 安装或者升级时需同时更新builder与`@jmfe/ifloor-scripts`版本，请使用相同版本

Q: 如何自定义环境变量

环境变量必须已`REACT_APP_`为前缀，设置环境变量可以使用`cross-env`
例如：

```sh
  cross-env REACT_APP_TEST = 1 leo build
```

设置完成后，代码中可直接使用

```js
  if(process.env.REACT_APP_TEST === '1') {
    // do something here
  }
```

Q: 如何在不修改package.json中前提下修改`ifloorId`(模版id), 可用于同一份代码发布到不同的共建模版

```sh
  cross-env IFLOOR_ID=0000135 leo build
```

Q: 如何进行本地接口的mock:

在http://zero-mock.jd.com 中申请并创建相关接口，将平台生成的接口url直接替换到请求的url中


Q: 如何通过leo cli的方式开启复合接口的mock：

1、是否开启mock时选择 是.
2、请输入复合接口的mock地址时，在 http://zero-mock.jd.com 中创建相关mock接口，输入mock平台生成的url.

Q: 如何在手动开启复合接口mock

修改package.json
useMock设置为true
compositeMaterialMockUrl输入 在 http://zero-mock.jd.com 中创建相关mock接口，由mock平台生成的url
```js
  {
    "zeroMock": {
      "compositeMaterialMockUrl": "",
      "useMock": "true"
  },
```



