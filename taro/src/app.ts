import { createApp } from 'vue';
import './app.scss';
import {   Avatar,Button,Cell,CellGroup,Icon,Price,OverLay,Divider,Layout,Col,Row,ImagePreview,Swipe,ActionSheet,BackTop,Collapse,CollapseItem,Drag,Dialog,InfiniteLoading,Notify,Range,Popup,Steps,Step,Swiper,SwiperItem,Switch,Toast,Progress,CircleProgress,NoticeBar,SearchBar,Navbar,FixedNav,Menu,MenuItem,Tabbar,TabbarItem,Elevator,Pagination,Tabs,TabPane,Calendar,Checkbox,CheckboxGroup,DatePicker,InputNumber,Input,Radio,RadioGroup,Rate,Picker,ShortPassword,TextArea,Uploader,CountUp,NumberKeyboard,CountDown,Badge,Tag,Popover,Form,FormItem,Address,Barrage,Signature,TimeSelect,TimePannel,TimeDetail,Sku } from '@nutui/nutui-taro';
// import '@nutui/nutui-taro/dist/style.css';

// import '@nutui/nutui-taro/dist/styles/themes/default.scss';
import '@nutui/nutui-taro/dist/style.css';

//这里添加用到的 nutui 组件
const nutuiComponents = [
  Avatar,Button,Cell,CellGroup,Icon,Price,OverLay,Divider,Layout,Col,Row,ImagePreview,Swipe,ActionSheet,BackTop,Collapse,CollapseItem,Drag,Dialog,InfiniteLoading,Notify,Range,Popup,Steps,Step,Swiper,SwiperItem,Switch,Toast,Progress,CircleProgress,NoticeBar,SearchBar,Navbar,FixedNav,Menu,MenuItem,Tabbar,TabbarItem,Elevator,Pagination,Tabs,TabPane,Calendar,Checkbox,CheckboxGroup,DatePicker,InputNumber,Input,Radio,RadioGroup,Rate,Picker,ShortPassword,TextArea,Uploader,CountUp,NumberKeyboard,CountDown,Badge,Tag,Popover,Form,FormItem,Address,Barrage,Signature,TimeSelect,TimePannel,TimeDetail,Sku 
];

const App = createApp({
  onShow(options) { }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})


nutuiComponents.forEach(item => {
  App.use(item);
})


export default App;
