export interface appPropsType {
    container: HTMLDivElement | HTMLElement; // 页面挂载容器，乾坤微应用为传入节点，web、hybrid为document.documentElement
    userInfo: any; // 存储用户信息
    appPath?: string; // 乾坤环境下的路由地址
    pageOption?: any; // 页面props传参
    darkTheme?: boolean;
    initContainerWidth?: number;
    [key: string]: any;
  }
  