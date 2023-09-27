import React from 'react';
import App from '@/App';
import { CommonProps, IfloorContext } from '@/type';

// render 入口
export async function render(
  { env, payload }: CommonProps,
  ctx: IfloorContext,
): Promise<JSX.Element> {
  return <App env={env} payload={payload} ua={ctx.ua} />;
}

// 楼层渲染高度估算
export function getFloorHeight(
  { minDeviceWidth = 375, maxDeviceHeight = 667, env = {}, payload = {} },
  ctx: IfloorContext,
): number {
  return 0;
}
