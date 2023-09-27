// 共建楼层配置文件
module.exports = {
  // 本地预览配置, 传入有效可访问链接后，开启本地开发与线上活动混合预览模式，楼层入参除mock.payload外，其他mock字段均替换为线上数据
  // previewUrl可以设置为任意通天塔可访问链接, 如预览链接、线上活动链接
  // 例如: https://prodev.m.jd.com/mall/active/4Ex9dP31PR6VXEERGxpXevH6xYNa/index.html?_ts=1619766029826&utm_user=plusmember&gx=RnFgkWIMPmXfntRP--tyWWOztpxMhgLlbOeu&ad_od=share&utm_source=androidapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL
  previewUrl: "" /*输入任意有效通天塔活动链接*/,
  plugins: [
    [
      "./ifloor-plugin-log-webpack-config",
      { logDev: true, logText: "正在打印内容:" },
    ],
  ],
  // 默认请求预发环境的复合素材接口，支持‘beta’、‘production’
  actEnv: "production",
};
