import React from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import { Cell } from "@nutui/nutui-react-taro";
import {list} from '../../../componentsNameList'
const { navigateTo } = Taro;


const nutuiTaro: React.FunctionComponent = () => {
  const gotoSingleComponent = (index?: number) => {
    navigateTo({
      url: `/pages/single/index?id=${index}`,
    });
  };

  const renderCellGroup = () => {
    if (list?.length) {
      return list.map((i: string, index: number) => {
        console.log('list', index)
        return <Cell onClick={() => gotoSingleComponent(index)}>{i}</Cell>;
      });
    }
    return null;
  };
  return (
    <View>
      <View className="title">
        <Text className='nihao'>NutUI-React-Taro!</Text>
      </View>
      <View className="name">{renderCellGroup()}</View>
    </View>
  );
};
export default nutuiTaro;
