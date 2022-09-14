import React, { Component, useState, useEffect, useRef } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import { Cell } from "@nutui/nutui-react-taro";
import{list} from '../../../componentsNameList'
const { navigateTo } = Taro;


const nutuiTaro: React.FunctionComponent = () => {
  const gotoSingleComponent = (index?: number) => {
    navigateTo({
      url: `/pages/single/index?id=${index}`,
    });
  };
  useEffect(() => {
  console.log('=>>>>>>',list)
  }, []);
  const renderCellGroup = () => {
    if (list?.length) {
      return list.map((i: string, index: number) => {
        return <Cell click={() => gotoSingleComponent(index)}>{i}</Cell>;
      });
    }
    return null;
  };
  return (
    <View>
      <View className="title">
        <Text>NutUI-React-Taro!</Text>
      </View>
      <View className="name">{renderCellGroup()}</View>
    </View>
  );
};
export default nutuiTaro;
