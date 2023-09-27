import React from 'react';
import App from '@/App';
import { CommonProps } from '@/type';
export default React.memo(function Ifloor(
  {
    env,
    payload,
    bridge,
  }: CommonProps
) {
  return <App env={env} payload={payload} bridge={bridge}></App>
});