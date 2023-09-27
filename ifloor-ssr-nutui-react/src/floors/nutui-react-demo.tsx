import {
  Button,
  Cell,
  // ConfigProvider,
  // Rate,
  // Image,
  // Overlay,
  // Divider,
  // Grid,
  // Space,
  // Sticky,
  // BackTop,
  // FixedNav,
  // NavBar,
  // Toast,
  // SideNavBar,
  // SubSideNavBar,
  // SideNavBarItem,
  // Tabbar,
  // Tabs,
  // Address,
  // Calendar,
  // Cascader,
  // Checkbox,
  // DatePicker,
  // Form,
  // Input,
  // TextArea,
  // InputNumber,
  // Menu,
  // NumberKeyboard,
  // Picker,
  // Radio,
  // Range,
  // SearchBar,
  // ShortPassword,
  // Signature,
  // Switch,
  // Uploader,
  // ActionSheet,
  // Badge,
  // Avatar,
  // Dialog,
  // Drag,
  // Empty,
  // Loading,
  // NoticeBar,
  // Notify,
  // Popover,
  // Popup,
  // PullToRefresh,
  // Skeleton,
  // Swipe,
  // Animate,
  // AnimatingNumbers,
  // Audio,
  // CircleProgress,
  // Collapse,
  // CountDown,
  // Ellipsis,
  // ImagePreview,
  // Indicator,
  // Pagination,
  // Price,
  // Progress,
  // Steps,
  // Step,
  // Swiper,
  // Table,
  // Tag,
  // Tour,
  // Video,
  // VirtualList,
  // Barrage,
  // Card,
  // TimeSelect,
  // TrendArrow,
  // WaterMark,
} from '@nutui/nutui-react'
import React, { useCallback, useEffect, useState } from 'react'
// import { PickerOption } from '@nutui/nutui-react/dist/types/packages/picker/types'
// const darkTheme = {
//   nutuiBrandColor: 'green',
//   nutuiBrandColorStart: 'green',
//   nutuiBrandColorEnd: 'green',
// }
// const src =
//   '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
// const list = [
//   {
//     id: 1,
//     text: '首页',
//     icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png',
//   },
//   {
//     id: 2,
//     text: '分类',
//     icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
//   },
//   {
//     id: 3,
//     text: '购物车',
//     num: 2,
//     icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png',
//   },
//   {
//     id: 4,
//     text: '我的',
//     icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png',
//   },
// ]
// const state = {
//   src: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
//   title:
//     '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
//   price: '388',
//   vipPrice: '378',
//   shopDescription: '自营',
//   delivery: '厂商配送',
//   shopName: '阳澄湖大闸蟹自营店>',
// }
// interface aaa {
//   visible: boolean;
//   position: any;
// }
export default function Home() {
  // const [overLayVisible, setOverlayVisible] = useState(false)
  // const [navBarState, setNavBarState] = useState<aaa>({
  //   visible: false,
  //   position: 'left',
  // })
  // const changeNarBar = (visible: any, position = navBarState.position) => {
  //   setNavBarState({
  //     visible,
  //     position,
  //   })
  // }
  // const [addressText, setAddressText] = useState<any>('请选择地址')
  // const [addressOptions] = useState([
  //   {
  //     value: '浙江',
  //     text: '浙江',
  //     children: [
  //       {
  //         value: '杭州',
  //         text: '杭州',
  //         disabled: true,
  //         children: [
  //           { value: '西湖区', text: '西湖区', disabled: true },
  //           { value: '余杭区', text: '余杭区' },
  //         ],
  //       },
  //       {
  //         value: '温州',
  //         text: '温州',
  //         children: [
  //           { value: '鹿城区', text: '鹿城区' },
  //           { value: '瓯海区', text: '瓯海区' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     value: '湖南',
  //     text: '湖南',
  //     disabled: true,
  //     children: [
  //       {
  //         value: '长沙',
  //         text: '长沙',
  //         disabled: true,
  //         children: [
  //           { value: '西湖区', text: '西湖区' },
  //           { value: '余杭区', text: '余杭区' },
  //         ],
  //       },
  //       {
  //         value: '温州',
  //         text: '温州',
  //         children: [
  //           { value: '鹿城区', text: '鹿城区' },
  //           { value: '瓯海区', text: '瓯海区' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     value: '福建',
  //     text: '福建',
  //     children: [
  //       {
  //         value: '福州',
  //         text: '福州',
  //         children: [
  //           { value: '鼓楼区', text: '鼓楼区' },
  //           { value: '台江区', text: '台江区' },
  //         ],
  //       },
  //     ],
  //   },
  // ])
  // const [addressV, setAddressV] = useState(false)
  // const [date, setDate] = useState('')
  // const [isVisible, setIsVisible] = useState(false)
  // const [dateWeek, setDateWeek] = useState('')
  //
  // const openSwitch = () => {
  //   setIsVisible(true)
  // }
  //
  // const closeSwitch = () => {
  //   setIsVisible(false)
  // }
  //
  // const setChooseValue = (param: string) => {
  //   setDate(param[3])
  //   setDateWeek(param[4])
  // }
  // const [isVisibleDemo1, setIsVisibleDemo1] = useState(false)
  // const [value1, setValue1] = useState([])
  // const [optionsDemo1, setOptionsDemo1] = useState([
  //   {
  //     value: '浙江',
  //     text: '浙江',
  //     children: [
  //       {
  //         value: '杭州',
  //         text: '杭州',
  //         disabled: true,
  //         children: [
  //           { value: '西湖区', text: '西湖区', disabled: true },
  //           { value: '余杭区', text: '余杭区' },
  //         ],
  //       },
  //       {
  //         value: '温州',
  //         text: '温州',
  //         children: [
  //           { value: '鹿城区', text: '鹿城区' },
  //           { value: '瓯海区', text: '瓯海区' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     value: '湖南',
  //     text: '湖南',
  //     disabled: true,
  //     children: [
  //       {
  //         value: '长沙',
  //         text: '长沙',
  //         disabled: true,
  //         children: [
  //           { value: '西湖区', text: '西湖区' },
  //           { value: '余杭区', text: '余杭区' },
  //         ],
  //       },
  //       {
  //         value: '温州',
  //         text: '温州',
  //         children: [
  //           { value: '鹿城区', text: '鹿城区' },
  //           { value: '瓯海区', text: '瓯海区' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     value: '福建',
  //     text: '福建',
  //     children: [
  //       {
  //         value: '福州',
  //         text: '福州',
  //         children: [
  //           { value: '鼓楼区', text: '鼓楼区' },
  //           { value: '台江区', text: '台江区' },
  //         ],
  //       },
  //     ],
  //   },
  // ])
  // const change1 = (value: any, path: any) => {
  //   console.log('onChange', value, path)
  //   setValue1(value)
  // }
  // const onPathChange = (value: any, path: any) => {
  //   console.log('onPathChange', value, path)
  // }
  // const [show1, setShow1] = useState(false)
  // const [desc1, setDesc1] = useState('2012年 01月 01日')
  // const confirm1 = (values: (string | number)[], options: PickerOption[]) => {
  //   setDesc1(options.map((option) => option.text).join(' '))
  // }
  // const [numberKeyboardV, setNumberKeyboardV] = useState(false)
  // const changePicker = (list: any[], option: any, columnIndex: number) => {
  //   console.log(columnIndex, option)
  // }
  // const [isVisible1, setIsVisible1] = useState(false)
  // const [baseDesc, setBaseDesc] = useState('')
  // const confirmPicker = (
  //   options: PickerOption[],
  //   values: (string | number)[]
  // ) => {
  //   let description = ''
  //   options.forEach((option: any) => {
  //     description += option.text
  //   })
  //   setBaseDesc(description)
  // }
  // const [visible12, setVisible12] = useState(false)
  // const [visible11, setVisible11] = useState(false)
  // const [value11, setValue11] = useState('')
  // const onChange = (v: string) => {
  //   setValue11((value) => value + v)
  // }
  // const onDelete = () => {
  //   setValue11((value) => value.slice(0, -1))
  // }
  // const [val1, setVal1] = useState('')
  // const [actionSheetV, setActionSheetV] = useState(false)
  // const chooseSheetItem = (item: any) => {
  //   setVal1(item.name)
  //   setActionSheetV(false)
  // }
  // const baseNotify = (message: string) => {
  //   Notify.text(message, {
  //     onClose: () => {
  //       console.log('close')
  //     },
  //     onClick: () => {
  //       console.log('click')
  //     },
  //   })
  // }
  // const [basic, setBasic] = useState(false)
  // const [showBasic, setShowBasic] = useState(false)
  // const images = [
  //   {
  //     src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
  //   },
  //   {
  //     src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
  //   },
  //   {
  //     src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
  //   },
  //   {
  //     src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
  //   },
  // ]
  // const [showPreview1, setShowPreview1] = useState(false)
  // const showFn1 = () => {
  //   setShowPreview1(true)
  // }
  //
  // const hideFn1 = () => {
  //   setShowPreview1(false)
  // }
  // const [columns1, setColumns1] = useState<any>([
  //   {
  //     title: '姓名',
  //     key: 'name',
  //   },
  //   {
  //     title: '性别',
  //     key: 'sex',
  //     render: (record: any) => {
  //       return (
  //         <span style={{ color: record.sex === '女' ? 'blue' : 'green' }}>
  //           {record.sex}
  //         </span>
  //       )
  //     },
  //   },
  //   {
  //     title: '学历',
  //     key: 'record',
  //   },
  // ])
  //
  // const [data1, setData1] = useState([
  //   {
  //     name: 'Tom',
  //     sex: '男',
  //     record: '小学',
  //   },
  //   {
  //     name: 'Lucy',
  //     sex: '女',
  //     record: '本科',
  //   },
  //   {
  //     name: 'Jack',
  //     sex: '男',
  //     record: '高中',
  //   },
  // ])
  // const [showTour, setShowTour] = useState(false)
  //
  // const closeTour = () => {
  //   setShowTour(false)
  // }
  //
  // const steps = [
  //   {
  //     content: '70+ 高质量组件，覆盖移动端主流场景',
  //     target: 'target',
  //   },
  // ]
  // const [list, setsourceData] = useState<any>([])
  //
  // const getData = useCallback(() => {
  //   const datas: any = []
  //   const pageSize = 1
  //   for (let i = 10; i < pageSize; i++) {
  //     datas.push(`${i} Item`)
  //   }
  //   setsourceData((list: any[]) => {
  //     return [...list, ...datas]
  //   })
  // }, [])
  // useEffect(() => {
  //   getData()
  // }, [getData])
  // const itemRender = (data: any, dataIndex: any) => {
  //   return (
  //     <p>
  //       自定义-{data}-{dataIndex}
  //     </p>
  //   )
  // }
  // const [visible, setVisible] = useState(false)
  // const options = [
  //   {
  //     value: '20230520',
  //     text: '5月20日(今天)',
  //     children: [
  //       { value: '09', text: '09:00-10:00' },
  //       { value: '10', text: '10:00-11:00' },
  //       { value: '11', text: '11:00-12:00' },
  //     ],
  //   },
  //   {
  //     value: '20230521',
  //     text: '5月21日(星期三)',
  //     children: [
  //       { value: '09', text: '09:00-10:00' },
  //       { value: '10', text: '10:00-11:00' },
  //     ],
  //   },
  // ]
  // const handleClick = () => {
  //   setVisible(true)
  // }
  // const handleSelect = (value: any) => {
  //   setVisible(false)
  //   console.log(`您选择了: ${JSON.stringify(value)}`)
  // }
  // const handleDateChange = (date: any, value: any) => {
  //   console.log(date, value)
  // }
  // const handleTimeChange = (time: any, value: any) => {
  //   console.log(time, value)
  // }
  return (
    <>
      <Button type="primary">test</Button>
      {/*<Cell title="我是标题" extra="描述文字" />*/}
      {/*<ConfigProvider theme={darkTheme}>*/}
      {/*  <Cell.Group>*/}
      {/*    <Cell>*/}
      {/*      <Rate defaultValue={3} />*/}
      {/*    </Cell>*/}
      {/*    <Cell>*/}
      {/*      <Button type="primary" size="large">*/}
      {/*        提交*/}
      {/*      </Button>*/}
      {/*    </Cell>*/}
      {/*  </Cell.Group>*/}
      {/*</ConfigProvider>*/}
      {/*<Image src={src} width="100" height="100" alt="" />*/}

      {/*<Button type="primary" onClick={() => setOverlayVisible(true)}>*/}
      {/*  显示遮罩层*/}
      {/*</Button>*/}
      {/*<Overlay*/}
      {/*  visible={overLayVisible}*/}
      {/*  onClick={() => setOverlayVisible(false)}*/}
      {/*  afterShow={() => {*/}
      {/*    console.log('afterShow')*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Divider />*/}
      {/*<Grid>*/}
      {/*  <Grid.Item text="文字">x</Grid.Item>*/}
      {/*</Grid>*/}
      {/*<Space>*/}
      {/*  <Button>按钮1</Button>*/}
      {/*  <Button>按钮1</Button>*/}
      {/*</Space>*/}
      {/*<Cell style={{ height: '300px' }}>*/}
      {/*  <Sticky threshold={57}>*/}
      {/*    <Button type="primary">吸顶</Button>*/}
      {/*  </Sticky>*/}
      {/*</Cell>*/}
      {/*<div id="target" style={{ height: '100vh' }}>*/}
      {/*  {new Array(4).fill(0).map((_, index) => {*/}
      {/*    return <Cell key={index}>我是测试数据{index}</Cell>*/}
      {/*  })}*/}
      {/*  <BackTop target="target" />*/}
      {/*</div>*/}
      {/*<FixedNav*/}
      {/*  list={list}*/}
      {/*  activeText="基础用法"*/}
      {/*  overlay*/}
      {/*  position={{ top: '70px' }}*/}
      {/*  visible={false}*/}
      {/*  onChange={() => {}}*/}
      {/*/>*/}
      {/*<NavBar*/}
      {/*  right={<span onClick={(e) => Toast.show('清空')}>清空</span>}*/}
      {/*  back={'<'}*/}
      {/*  onBackClick={(e) => Toast.show('返回')}*/}
      {/*>*/}
      {/*  <span onClick={(e) => Toast.show('标题')}>浏览记录</span>*/}
      {/*</NavBar>*/}
      {/*<Cell*/}
      {/*  title="左侧弹出"*/}
      {/*  onClick={() => {*/}
      {/*    changeNarBar(true, 'left')*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Cell*/}
      {/*  title="右侧弹出"*/}
      {/*  onClick={() => {*/}
      {/*    changeNarBar(true, 'right')*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<SideNavBar*/}
      {/*  title="首页"*/}
      {/*  visible={navBarState.visible}*/}
      {/*  position={navBarState.position}*/}
      {/*  onClose={() => {}}*/}
      {/*>*/}
      {/*  <SubSideNavBar title="一级标题" value="1-0">*/}
      {/*    <SideNavBarItem title="一级内容1" value="1-01" />*/}
      {/*    <SideNavBarItem title="一级内容2" value="1-02" />*/}
      {/*    <SubSideNavBar title="二级标题" value="2-0">*/}
      {/*      <SideNavBarItem title="二级内容1" value="2-01" />*/}
      {/*      <SideNavBarItem title="二级内容2" value="2-02" />*/}
      {/*    </SubSideNavBar>*/}
      {/*  </SubSideNavBar>*/}
      {/*</SideNavBar>*/}
      {/*<Tabbar*/}
      {/*  onSwitch={(value) => {*/}
      {/*    console.log(value)*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Tabbar.Item title="首页" value={9} />*/}
      {/*  <Tabbar.Item title="分类" />*/}
      {/*  <Tabbar.Item title="发现" />*/}
      {/*  <Tabbar.Item title="购物车" />*/}
      {/*  <Tabbar.Item title="我的" />*/}
      {/*</Tabbar>*/}
      {/*<Tabs value={1} onChange={(value) => {}}>*/}
      {/*  <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>*/}
      {/*  <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>*/}
      {/*  <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>*/}
      {/*</Tabs>*/}
      {/*<Cell*/}
      {/*  title="选择地址"*/}
      {/*  description={addressText}*/}
      {/*  onClick={() => setAddressV(true)}*/}
      {/*/>*/}
      {/*<Address*/}
      {/*  visible={addressV}*/}
      {/*  options={addressOptions}*/}
      {/*  title="选择地址"*/}
      {/*  onChange={(value, params) => {*/}
      {/*    setAddressText(value)*/}
      {/*  }}*/}
      {/*  onClose={() => setAddressV(false)}*/}
      {/*/>*/}
      {/*<Cell*/}
      {/*  title="选择单个日期"*/}
      {/*  description={date ? `${date} ${dateWeek}` : '请选择'}*/}
      {/*  onClick={openSwitch}*/}
      {/*/>*/}
      {/*<Calendar*/}
      {/*  visible={isVisible}*/}
      {/*  defaultValue={date}*/}
      {/*  startDate="2022-01-11"*/}
      {/*  endDate="2029-11-30"*/}
      {/*  onClose={closeSwitch}*/}
      {/*  onConfirm={setChooseValue}*/}
      {/*/>*/}

      {/*<Cell*/}
      {/*  title="选择地址"*/}
      {/*  description={value1 || '请选择地址'}*/}
      {/*  onClick={() => {*/}
      {/*    setIsVisibleDemo1(true)*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Cascader*/}
      {/*  visible={isVisibleDemo1}*/}
      {/*  value={value1}*/}
      {/*  title="地址选择"*/}
      {/*  options={optionsDemo1}*/}
      {/*  closeable*/}
      {/*  onClose={() => {*/}
      {/*    setIsVisibleDemo1(false)*/}
      {/*  }}*/}
      {/*  onChange={change1}*/}
      {/*  onPathChange={onPathChange}*/}
      {/*/>*/}
      {/*<Checkbox className="test" label="复选框" defaultChecked={false} />*/}
      {/*<Cell*/}
      {/*  title="显示中文"*/}
      {/*  description={desc1}*/}
      {/*  onClick={() => setShow1(true)}*/}
      {/*/>*/}
      {/*<DatePicker*/}
      {/*  title="日期选择"*/}
      {/*  visible={show1}*/}
      {/*  showChinese*/}
      {/*  onClose={() => setShow1(false)}*/}
      {/*  onConfirm={(options, values) => confirm1(values, options)}*/}
      {/*/>*/}
      {/*<Form*/}
      {/*  labelPosition="right"*/}
      {/*  footer={*/}
      {/*    <>*/}
      {/*      <Button nativeType="submit" block type="primary">*/}
      {/*        提交*/}
      {/*      </Button>*/}
      {/*    </>*/}
      {/*  }*/}
      {/*>*/}
      {/*  <Form.Item required label="姓名" name="username">*/}
      {/*    <Input*/}
      {/*      className="nut-input-text"*/}
      {/*      placeholder="请输入姓名"*/}
      {/*      type="text"*/}
      {/*    />*/}
      {/*  </Form.Item>*/}
      {/*  <Form.Item label="地址" name="address">*/}
      {/*    <TextArea placeholder="请输入地址" maxLength={100} />*/}
      {/*  </Form.Item>*/}
      {/*  <Form.Item*/}
      {/*    label="数量"*/}
      {/*    name="num"*/}
      {/*    getValueFromEvent={(...args) => args[0]}*/}
      {/*  >*/}
      {/*    <InputNumber />*/}
      {/*  </Form.Item>*/}
      {/*</Form>*/}
      {/*<Menu>*/}
      {/*  <Menu.Item*/}
      {/*    options={[*/}
      {/*      { text: '全部商品', value: 0 },*/}
      {/*      { text: '新款商品', value: 1 },*/}
      {/*      { text: '活动商品', value: 2 },*/}
      {/*    ]}*/}
      {/*    value={0}*/}
      {/*  />*/}
      {/*  <Menu.Item*/}
      {/*    options={[*/}
      {/*      { text: '全部商品', value: 0 },*/}
      {/*      { text: '新款商品', value: 1 },*/}
      {/*      { text: '活动商品', value: 2 },*/}
      {/*    ]}*/}
      {/*    value="a"*/}
      {/*  />*/}
      {/*</Menu>*/}
      {/*<Cell title="基础用法" onClick={() => setNumberKeyboardV(true)} />*/}
      {/*<NumberKeyboard*/}
      {/*  visible={numberKeyboardV}*/}
      {/*  onClose={() => setNumberKeyboardV(false)}*/}
      {/*/>*/}
      {/*<Cell*/}
      {/*  title="请选择城市"*/}
      {/*  description={baseDesc}*/}
      {/*  onClick={() => setIsVisible1(!isVisible1)}*/}
      {/*/>*/}
      {/*<Picker*/}
      {/*  options={[*/}
      {/*    [*/}
      {/*      { value: 1, text: '南京市' },*/}
      {/*      { value: 2, text: '无锡市' },*/}
      {/*      { value: 3, text: '海北藏族自治区' },*/}
      {/*      { value: 4, text: '北京市' },*/}
      {/*      { value: 5, text: '连云港市' },*/}
      {/*      { value: 8, text: '大庆市' },*/}
      {/*      { value: 9, text: '绥化市' },*/}
      {/*      { value: 10, text: '潍坊市' },*/}
      {/*      { value: 12, text: '乌鲁木齐市' },*/}
      {/*    ],*/}
      {/*  ]}*/}
      {/*  visible={isVisible1}*/}
      {/*  onConfirm={(list, values) => confirmPicker(list, values)}*/}
      {/*  onClose={() => setIsVisible1(false)}*/}
      {/*  onChange={changePicker}*/}
      {/*/>*/}
      {/*<Radio.Group disabled defaultValue="1">*/}
      {/*  <Radio value="1">选项1</Radio>*/}
      {/*  <Radio value="2">选项2</Radio>*/}
      {/*  <Radio value="3">选项3</Radio>*/}
      {/*</Radio.Group>*/}
      {/*<Cell*/}
      {/*  style={{*/}
      {/*    padding: '40px 18px',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Range defaultValue={40} onEnd={(val) => Toast.show(`${val}`)} />*/}
      {/*</Cell>*/}
      {/*<Rate defaultValue={3} />*/}
      {/*<SearchBar placeholder="上京东，购好物" />*/}
      {/*<Cell title="段密码基础用法" onClick={() => setVisible12(true)} />*/}
      {/*<ShortPassword*/}
      {/*  visible={visible12}*/}
      {/*  value={value11}*/}
      {/*  onFocus={() => setVisible12(true)}*/}
      {/*  onClose={() => {*/}
      {/*    setVisible12(false)*/}
      {/*    setValue11('')*/}
      {/*  }}*/}
      {/*  onChange={(value: any) => setValue11(value)}*/}
      {/*/>*/}
      {/*<NumberKeyboard*/}
      {/*  visible={visible11}*/}
      {/*  onClose={() => setVisible11(false)}*/}
      {/*  onChange={onChange}*/}
      {/*  onDelete={onDelete}*/}
      {/*/>*/}
      {/*<Switch defaultChecked />*/}
      {/*<Uploader*/}
      {/*  url={'https://my-json-server.typicode.com/linrufeng/demo/posts'}*/}
      {/*  style={{ marginRight: '10px' }}*/}
      {/*/>*/}
      {/*<Cell onClick={() => setActionSheetV(!actionSheetV)}>*/}
      {/*  <span>基础用法</span>*/}
      {/*  <div style={{ marginLeft: '10px' }}>{val1}</div>*/}
      {/*</Cell>*/}
      {/*<ActionSheet*/}
      {/*  visible={actionSheetV}*/}
      {/*  options={[*/}
      {/*    {*/}
      {/*      name: '权限设置',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      name: '重命名',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      name: '删除',*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*  onSelect={(item) => {*/}
      {/*    chooseSheetItem(item)*/}
      {/*  }}*/}
      {/*  onCancel={() => setActionSheetV(false)}*/}
      {/*/>*/}
      {/*<Badge value={8}>*/}
      {/*  <Avatar shape="square" />*/}
      {/*</Badge>*/}
      {/*<Cell*/}
      {/*  title="基础弹框"*/}
      {/*  onClick={() => {*/}
      {/*    Dialog.alert({*/}
      {/*      title: '基础弹框',*/}
      {/*      content: '支持函数调用和组件调用两种方式。',*/}
      {/*    })*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Drag>*/}
      {/*  <div*/}
      {/*    className="touch-dom"*/}
      {/*    style={{*/}
      {/*      borderRadius: '25px',*/}
      {/*      padding: '0 18px',*/}
      {/*      fontSize: '14px',*/}
      {/*      color: '#fff',*/}
      {/*      display: 'inline-block',*/}
      {/*      lineHeight: '36px',*/}
      {/*      background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    触摸移动*/}
      {/*  </div>*/}
      {/*</Drag>*/}
      {/*<Empty description="无数据" />*/}
      {/*<Loading type="circular" />*/}
      {/*<NoticeBar content="NutUI 是京东风格的移动端组件库" scrollable />*/}
      {/*<Cell*/}
      {/*  title="基础用法"*/}
      {/*  onClick={(event: React.MouseEvent) => {*/}
      {/*    baseNotify('基础用法')*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Popover*/}
      {/*  visible={basic}*/}
      {/*  list={[*/}
      {/*    {*/}
      {/*      key: 'key1',*/}
      {/*      name: 'option1',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      key: 'key2',*/}
      {/*      name: 'option2',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      key: 'key3',*/}
      {/*      name: 'option3',*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*  location="bottom-start"*/}
      {/*  style={{ marginRight: '30px' }}*/}
      {/*  onClick={() => {*/}
      {/*    basic ? setBasic(false) : setBasic(true)*/}
      {/*  }}*/}
      {/*  onOpen={() => {*/}
      {/*    console.log('打开菜单时触发')*/}
      {/*  }}*/}
      {/*  onClose={() => {*/}
      {/*    console.log('关闭菜单时触发')*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Button type="primary" shape="square">*/}
      {/*    基础用法*/}
      {/*  </Button>*/}
      {/*</Popover>*/}
      {/*<Cell*/}
      {/*  title="展示弹出层"*/}
      {/*  onClick={() => {*/}
      {/*    setShowBasic(true)*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Popup*/}
      {/*  visible={showBasic}*/}
      {/*  style={{ padding: '30px 50px' }}*/}
      {/*  onClose={() => {*/}
      {/*    setShowBasic(false)*/}
      {/*  }}*/}
      {/*>*/}
      {/*  正文*/}
      {/*</Popup>*/}
      {/*<PullToRefresh>*/}
      {/*  {[1, 2, 3, 4, 5, 6, 7].map((item) => (*/}
      {/*    <Cell key={item}>{item}</Cell>*/}
      {/*  ))}*/}
      {/*</PullToRefresh>*/}
      {/*<Skeleton animated />*/}
      {/*<Swipe*/}
      {/*  rightAction={*/}
      {/*    <Button type="primary" shape="square">*/}
      {/*      删除*/}
      {/*    </Button>*/}
      {/*  }*/}
      {/*>*/}
      {/*  <Cell title="左滑删除" radius={0} />*/}
      {/*</Swipe>*/}
      {/*<Cell*/}
      {/*  title="Text文字提示"*/}
      {/*  onClick={(*/}
      {/*    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>*/}
      {/*  ) => Toast.show('网络失败，请稍后再试~')}*/}
      {/*/>*/}
      {/*<Animate type="slide-right" action="click">*/}
      {/*  <Button type="primary">由右向左划入</Button>*/}
      {/*</Animate>*/}
      {/*<Cell title={<AnimatingNumbers.CountUp value="678.94" />} />*/}
      {/*<Audio*/}
      {/*  autoPlay={false}*/}
      {/*  src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"*/}
      {/*  type="icon"*/}
      {/*  loop={false}*/}
      {/*  preload="auto"*/}
      {/*  muted={false}*/}
      {/*  onEnd={() => alert('ended!')}*/}
      {/*/>*/}
      {/*<Avatar*/}
      {/*  size="large"*/}
      {/*  src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"*/}
      {/*/>*/}
      {/*<CircleProgress percent={20} />*/}
      {/*<Collapse defaultActiveName={['1', '2']} expandIcon={'I'}>*/}
      {/*  <Collapse.Item title="标题1" name="1">*/}
      {/*    京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府*/}
      {/*  </Collapse.Item>*/}
      {/*  <Collapse.Item title="标题2" name="2">*/}
      {/*    京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府*/}
      {/*  </Collapse.Item>*/}
      {/*  <Collapse.Item title="标题3" name="3" disabled>*/}
      {/*    京东“厂直优品计划”首推“政府优品馆”*/}
      {/*  </Collapse.Item>*/}
      {/*</Collapse>*/}
      {/*<CountDown endTime={Date.now() + 60 * 1000} />*/}
      {/*/!* <Ellipsis*/}
      {/*  content={*/}
      {/*    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'*/}
      {/*  }*/}
      {/*  direction="start"*/}
      {/*/> *!/*/}
      {/*<ImagePreview images={images} visible={showPreview1} onClose={hideFn1} />*/}
      {/*<Cell title="展示图片预览" onClick={showFn1} />*/}
      {/*<Indicator total={3} current={2} />*/}
      {/*<Pagination defaultValue={1} total={25} pageSize={5} />*/}
      {/*<Price price={0} size="small" thousands />*/}
      {/*<Progress percent={30} />*/}
      {/*<Steps value={1}>*/}
      {/*  <Step value={1} title="步骤一">*/}
      {/*    1*/}
      {/*  </Step>*/}
      {/*  <Step value={2} title="步骤二">*/}
      {/*    2*/}
      {/*  </Step>*/}
      {/*  <Step value={3} title="步骤三">*/}
      {/*    3*/}
      {/*  </Step>*/}
      {/*</Steps>*/}
      {/*<Swiper height={150} autoPlay="3000" defaultValue={0} indicator>*/}
      {/*  <Swiper.Item>*/}
      {/*    <img*/}
      {/*      src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"*/}
      {/*      alt=""*/}
      {/*    />*/}
      {/*  </Swiper.Item>*/}
      {/*  <Swiper.Item>*/}
      {/*    <img*/}
      {/*      src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg"*/}
      {/*      alt=""*/}
      {/*    />*/}
      {/*  </Swiper.Item>*/}
      {/*  <Swiper.Item>*/}
      {/*    <img*/}
      {/*      src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg"*/}
      {/*      alt=""*/}
      {/*    />*/}
      {/*  </Swiper.Item>*/}
      {/*  <Swiper.Item>*/}
      {/*    <img*/}
      {/*      src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg"*/}
      {/*      alt=""*/}
      {/*    />*/}
      {/*  </Swiper.Item>*/}
      {/*</Swiper>*/}
      {/*<Table columns={columns1} data={data1} />*/}
      {/*<Tag type="primary">标签</Tag>*/}
      {/*<Cell*/}
      {/*  title="点击试试"*/}
      {/*  extra={*/}
      {/*    <Switch*/}
      {/*      id="target"*/}
      {/*      onChange={() => {*/}
      {/*        setShowTour(true)*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  }*/}
      {/*/>*/}
      {/*<Tour*/}
      {/*  className="nut-custom-tour nut-customword-tour"*/}
      {/*  visible={showTour}*/}
      {/*  onClose={closeTour}*/}
      {/*  list={steps}*/}
      {/*  type="tile"*/}
      {/*  location="bottom-end"*/}
      {/*/>*/}
      {/*<Video*/}
      {/*  source={{*/}
      {/*    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',*/}
      {/*    type: 'video/mp4',*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<VirtualList itemHeight={66} list={list} itemRender={itemRender} />*/}
      {/*<Barrage*/}
      {/*  className="barrage-demo"*/}
      {/*  list={[*/}
      {/*    '画美不看',*/}
      {/*    '不明觉厉',*/}
      {/*    '喜大普奔',*/}
      {/*    '男默女泪',*/}
      {/*    '累觉不爱',*/}
      {/*    '爷青结-',*/}
      {/*  ]}*/}
      {/*  style={{*/}
      {/*    padding: '20px 0',*/}
      {/*    height: '150px',*/}
      {/*    boxSizing: 'border-box',*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Card*/}
      {/*  src={state.src}*/}
      {/*  title={state.title}*/}
      {/*  price={state.price}*/}
      {/*  vipPrice={state.vipPrice}*/}
      {/*  shopDescription={state.shopDescription}*/}
      {/*  delivery={state.delivery}*/}
      {/*  shopName={state.shopName}*/}
      {/*/>*/}
      {/*<Cell title="请选择配送时间" onClick={handleClick} />*/}
      {/*<TimeSelect*/}
      {/*  visible={visible}*/}
      {/*  options={options}*/}
      {/*  style={{*/}
      {/*    height: '30%',*/}
      {/*  }}*/}
      {/*  onSelect={handleSelect}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*/>*/}
      {/*<TrendArrow sync={false} value={1} />*/}
      {/*<TrendArrow sync={false} value={-0.2535} />*/}
      {/*/!* <WaterMark*/}
      {/*  zIndex={200}*/}
      {/*  content="NutUI-WaterMark"*/}
      {/*  rotate={22}*/}
      {/*  imageWidth={60}*/}
      {/*  imageHeight={23}*/}
      {/*  image={*/}
      {/*    '//m.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'*/}
      {/*  }*/}
      {/*/> *!/*/}
      {/*<Signature />*/}
    </>
  )
}
