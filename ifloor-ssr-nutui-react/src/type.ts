import { IncomingHttpHeaders } from 'http';

export interface Runtime {
  bridge: Promise<object>;
  env: object;
  payload: Payload;
  containerElement: HTMLElement | null;
}
export interface Payload {
  advIds: Array<any>;
  godIds: Array<any>;
  cmpIds: Array<any>;
  props: object;
  materialParams: Record<string, Array<{ godGrpId?: string; advGrpId?: string }>>;
  materialData?: Record<string, any>;
  materialPromiseData?: Promise<Record<string, any>>;
}
export interface PreviewProps {
  payload: {
    //预览自定义配置
    props: object;
    //预览素材id
    previewMaterialIds: Record<string, string>;
  };
  env: {
    //预览素材环境，beta或者production
    materialEnv: 'beta' | 'production';
  };
}
export interface CommonProps {
  env: object;
  payload: Payload;
  bridge: Promise<object>;
  ua: string;
}
export interface IfloorContext {
  ua?: string;
  originalUrl: string;
  headers: IncomingHttpHeaders;
  cookies: {
    get(name: string): string;
  };
  query: Object;
}
