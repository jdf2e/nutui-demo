import React from 'react';
import { PreviewProps } from '@/type';

export default ({ payload: { props, previewMaterialIds }, env: { materialEnv } }: PreviewProps) => {
  return <div>我是预览组件</div>;
};