/*
 * @Author: your name
 * @Date: 2022-01-21 15:46:47
 * @LastEditTime: 2022-01-21 15:58:44
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /nutui-demo/taro/src/app.ts
 */
import { createApp } from 'vue';
import './app.scss';
import {   Avatar,Button,Cell,CellGroup,Icon,Price,OverLay,Divider,Layout,Col,Row,Swipe,ActionSheet,BackTop,Collapse,CollapseItem,Drag,Dialog,InfiniteLoading,Notify,Range,Popup,Steps,Step,Swiper,SwiperItem,Switch,Toast,Progress,CircleProgress,NoticeBar,SearchBar,Empty,Navbar,FixedNav,Menu,MenuItem,Tabbar,TabbarItem,Elevator,Pagination,Tabs,TabPane,Indicator,Grid,GridItem,Calendar,Checkbox,CheckboxGroup,DatePicker,InputNumber,Input,Radio,RadioGroup,Rate,Picker,ShortPassword,TextArea,Uploader,CountUp,NumberKeyboard,CountDown,Badge,Tag,Popover,Form,FormItem,Skeleton,Cascader,Address,Barrage,Signature,TimeSelect,TimePannel,TimeDetail,Sku,Card,Table, SideNavBar, SideNavBarItem, SubSideNavBar } from '@nutui/nutui-taro';


//这里添加用到的 nutui 组件
const nutuiComponents = [
  Avatar,Button,Cell,CellGroup,Icon,Price,OverLay,Divider,Layout,Col,Row,Swipe,ActionSheet,BackTop,Collapse,CollapseItem,Drag,Dialog,InfiniteLoading,Notify,Range,Popup,Steps,Step,Swiper,SwiperItem,Switch,Toast,Progress,CircleProgress,NoticeBar,SearchBar,Empty,Navbar,FixedNav,Menu,MenuItem,Tabbar,TabbarItem,Elevator,Pagination,Tabs,TabPane,Indicator,Grid,GridItem,Calendar,Checkbox,CheckboxGroup,DatePicker,InputNumber,Input,Radio,RadioGroup,Rate,Picker,ShortPassword,TextArea,Uploader,CountUp,NumberKeyboard,CountDown,Badge,Tag,Popover,Form,FormItem,Skeleton,Cascader,Address,Barrage,Signature,TimeSelect,TimePannel,TimeDetail,Sku,Card,Table,SideNavBar, SubSideNavBar, SideNavBarItem
];

const App = createApp({
  onShow(options) { }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})


nutuiComponents.forEach(item => {
  App.use(item);
})


export default App;
