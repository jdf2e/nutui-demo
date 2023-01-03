import { createApp } from 'vue'
// import NutUI from '@nutui/nutui';
// import '@nutui/nutui/dist/style.css';
import { Locale } from '@nutui/nutui';
import us from "@nutui/nutui/dist/packages/locale/lang/en-US";
import tw from "@nutui/nutui/dist/packages/locale/lang/zh-TW";
Locale.merge('zh-CN', {
    confirm: '关闭',// 将 "确认" 修改为 "关闭"
    // 修改某个组件内部语言
    shortpassword: {
        title: '请输入密码'// 将 "请输入密码" 修改为 "请输入卡密"
    }
});
setTimeout(() => {
    Locale.use('en-US', us);
}, 1000 * 5);
setTimeout(() => {
    Locale.use('zh-CN');
}, 1000 * 10);
setTimeout(() => {
    Locale.use('zh-TW', tw);
}, 1000 * 15);
import App from './App.vue'
createApp(App)
    // .use(NutUI)
    .mount('#app')


// function crecomp() {
//     const create = (obj) => { }
//     return { create }
// }
// const { create } = crecomp();
// create({
//     setup: ['a']
// })
// create({
//     setup: ['d']
// })
// create({
//     setup: ['d']
// })
// create({
//     setup: ['d']
// })
