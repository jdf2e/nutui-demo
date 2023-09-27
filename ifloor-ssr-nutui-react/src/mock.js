/**
 * 详情请参考ipaas楼层共建标准
 * @seee http:// ipaas.jd.com/wiki/docs/layer-standard/%E6%A5%BC%E5%B1%82%E6%A0%87%E5%87%86#44-%E5%85%B1%E5%BB%BA%E6%A5%BC%E5%B1%82%E6%95%B0%E6%8D%AE%E5%8F%8Aapi%E6%A0%87%E5%87%86
 * @description
 * 下面的数据一部分用于C端共建楼层、一部分用于B端预览组件
 *
 * 其中, C端指的是src/index.js, B端指的是CMS预览区域
 * 每一个字段注释的最后都标注了是C端还是B端使用, 例如：
 * [C]:   C端组件使用
 * [B]:   B端组件使用
 * [C&B:  C端与B端组件使用
 */
const mock = {
  // 楼层关联数据， [C&B]
  payload: {
    // 广告组, [C]
    advIds: [
      {
        advGrpName: 'D11第二波',
        advGrpId: '05084738',
      },
    ],
    // 组件, [C]
    cmpIds: [
      {
        cmpGrpId: '04788746',
        cmpGrpName: '国家地理',
        type: '11',
      },
    ],
    // 返回Object表示用户所配置的自定义表单的值, [C&B]
    props: {},
    //素材配置面板数据, 对象字段来源: config.json/material.name, [C]
    materialParams: {
      productId2: [{ godGrpId: '06840739' }],
      advId1: [{ advGrpId: '01240803' }],
      productId1: [{ godGrpId: '06839600' }],
    },
    //只适用于src/Preview.js组件, 素材配置面板数据, 对象字段来源: config.json/material.name, [B]
    previewMaterialIds: {
      advId1: '01240803',
    },
    // 商品组, [C]
    godIds: [{ godGrpName: '超值爆品', godGrpId: '14613855' }],
  },
  // 页面容器环境信息
  env: {
    moduleId: 52248822, // 返回string表示当前楼层id。[C]
    activityId: '00892104', // 返回string表示当前活动id。[C]
    pageId: '2449245', // 返回string表示当前页面id。[C]
    ofn: '2', // 返回number表示当前楼层在搭建系统中的原始序号，通常用于埋点上报信息中的楼层序号。[C]
    materialEnv: 'beta' //只适用于src/Preview.js组件, 标识素材环境变量, [B]
  },
  //只适用于C端楼层组件(src/index.js)，B端预览组件(src/Preview.js)中不适用, [C]
  bridge: Promise.resolve({
    // 跳登陆方法
    goLogin() {
      window.location.href = `// passport.m.jd.com/user/login.action?returnurl=${encodeURIComponent(
        window.location.href,
      )}`;
    },
    // 导航到楼层
    jumpToTargetFloor() {
      alert('我是mock的数据');
    },
    // mock 埋点方法, 本地开发生效，楼层发布后线上注入真实的方法， 使用请参考App.js
    tracking: {
      // 监听用户点击事件后，调用后即可上报
      tracking(param) {
        // 只打印，不做真实上报
        console.log(param);
      },
    },
  }),
};

module.exports = mock;