import { createApp } from 'vue'
// import NutUI from '@nutui/nutui';
// import '@nutui/nutui/dist/style.css';
import NutUI from '@nutui/nutui';
import us from "@nutui/nutui/dist/packages/locale/lang/en-US";
import tw from "@nutui/nutui/dist/packages/locale/lang/zh-TW";
setTimeout(() => {
    NutUI.Locale.use('en-US', us);
}, 1000 * 5);
setTimeout(() => {
    NutUI.Locale.use('zh-CN');
}, 1000 * 10);
setTimeout(() => {
    NutUI.Locale.use('zh-TW', tw);
}, 1000 * 15);
console.log(NutUI);
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
