/* eslint-disable camelcase */

declare class ApiModel {}
declare enum Device {
  isMobile = 0,
  isPc = 1,
}

interface Window {
  WebViewJavascriptBridge: any;
  WVJBCallbacks: Array<Function>;
  CustomEvent: Function;
  jssdk: any;
  user: any;
  __counter: any;
  device: Device;
  __POWERED_BY_QIANKUN__: any;
}

interface Config {
  model?: typeof ApiModel | null;
  method?: string;
  throttle?: boolean;
  completeResponse?: boolean;
  log?: boolean;
  mainField?: string;
}
interface ApiFunction {
  (data?: Record<string, any>, config?: Config): Promise<{
    res: any;
    rawRes?: any;
    _status?: string;
    _error?: string;
  }>;
}
interface Api {
  [propName: string]: ApiFunction;
}
declare let $cloudac: Api;

declare module '*.svga' {
  const content: string;
  export default content;
}

type AsyncReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any;
