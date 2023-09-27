import React from 'react';
import ReactDOM from 'react-dom';
// demo/app.demo.js为示例代码，可注释后使用App.js开始开发
// import App from '@/demo/App.demo';
import App from '@/App';
import { Runtime } from '@/type';

/**
 * ipass 共建楼层入口文件, 本地开发阶段可以使用 src/mock.js 中导出的模块
 * 上线后 mock.js内容系统自动注入
 */

export default function({ bridge, env, payload, containerElement }: Runtime) {
  return new Promise((resolve: any) => {
    ReactDOM.render(
      <React.StrictMode>
        <App bridge={bridge} payload={payload} env={env} />
      </React.StrictMode>,
      containerElement,
      resolve,
    );
  });
};

// 开启B端预览, 开启后自动导入src/Preview.js组件，请确保文件的存在
export const IFLOOR_PREVIEW_ENABLE = false;