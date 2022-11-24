import React, {useEffect} from "react";
import {getQueryString} from "../../utils/utils";
import components from "./importList";

const Single = (props: any) => {
    console.log('porps.tid', window.location.hash, props.tid)
    let idx = Number(getQueryString(props.tid, "id"));
    if (!idx && window.location.hash) {
        console.log('xxx')
        idx = Number(getQueryString(window.location.hash, "id"));
    }
    useEffect(() => {
        console.log('props', props);
    }, []);
    console.log('Single', idx)
    const Item = components[idx] || null;
    return <Item/>;
};
export default Single;
