import React from "react";
import components from "./importList";
import {useRouter} from '@tarojs/taro'

const Single = () => {
    const router = useRouter()
    console.log(router.params.id)
    let idx = Number(router.params.id);

    const Item = components[idx] || null;
    return <Item />;
};
export default Single;
