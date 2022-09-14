import React, { useEffect } from "react";
import { getQueryString } from "../../utils/utils";
import components from "./importList";

const Single = (props: any) => {
  const idx = Number(getQueryString(props.tid, "id"));
  useEffect(() => {
    console.log(props);
  }, []);
  const Item = components[idx] || null;
  return <Item />;
};
export default Single;
