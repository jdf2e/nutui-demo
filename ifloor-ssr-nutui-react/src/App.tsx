import React from 'react';
import Context from '@/store';
import NutuiReactDemo from '@/floors';
import { CommonProps } from '@/type';

/**
 * 渲染到ipaas-floor-app结点中的组件
 */

const App: React.FunctionComponent<any> = (props: CommonProps) => {
  const { bridge, payload, env, ua } = props;
  if (typeof window !== 'undefined') {
    console.log('bridge', bridge);
    console.log('payload', payload);
    console.log('env', env);
  }
  return (
    <Context.Provider
      value={{
        ...payload,
        env,
        ua,
      }}
    >
      {JSON.stringify(props)}
      <NutuiReactDemo></NutuiReactDemo>
    </Context.Provider>
  );
};

// 导出App组件
export default App;
