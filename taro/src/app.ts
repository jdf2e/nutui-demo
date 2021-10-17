import { createApp } from 'vue';
import './app.scss';
import { Avatar, Button, Cell, CellGroup, Icon, Price, OverLay, Divider, Layout, Col, Row, ImagePreview, Swipe, ActionSheet, BackTop, Collapse, CollapseItem, Drag, Dialog, InfiniteLoading, Notify, Range, Popup, Steps, Step, Swiper, SwiperItem, Switch, Toast, Progress, CircleProgress, NoticeBar, Navbar, FixedNav, MenuItem, Tabbar, TabbarItem, Elevator, Pagination, Tabs, TabPane, Calendar, Checkbox, CheckboxGroup, DatePicker, InputNumber, Input, Radio, RadioGroup, Rate, Picker, ShortPassword, TextArea, Uploader, CountUp, NumberKeyboard, CountDown, Badge, Tag, Popover, Address, Barrage, Signature, TimeSelect, TimePannel, TimeDetail } from '@nutui/nutui-taro';
// import '@nutui/nutui-taro/dist/style.css';

import '@nutui/nutui-taro/dist/styles/themes/default.scss';

const App = createApp({
  onShow(options) { }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
}).use(Avatar).use(Button).use(Cell).use(CellGroup).use(Icon).use(Price).use(OverLay).use(Divider).use(Layout).use(Col).use(Row).use(ImagePreview).use(Swipe).use(ActionSheet).use(BackTop).use(Collapse).use(CollapseItem).use(Drag).use(Dialog).use(InfiniteLoading).use(Notify).use(Range).use(Popup).use(Steps).use(Step).use(Swiper).use(SwiperItem).use(Switch).use(Toast).use(Progress).use(CircleProgress).use(NoticeBar).use(Navbar).use(FixedNav).use(MenuItem).use(Tabbar).use(TabbarItem).use(Elevator).use(Pagination).use(Tabs).use(TabPane).use(Calendar).use(Checkbox).use(CheckboxGroup).use(DatePicker).use(InputNumber).use(Input).use(Radio).use(RadioGroup).use(Rate).use(Picker).use(ShortPassword).use(TextArea).use(Uploader).use(CountUp).use(NumberKeyboard).use(CountDown).use(Badge).use(Tag).use(Popover).use(Address).use(Barrage).use(Signature).use(TimeSelect).use(TimePannel).use(TimeDetail);

export default App;
