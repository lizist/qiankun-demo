# 记录乾坤项目内容

### 问题：create-react-app脚手架建立的项目，主应用是main-app，子应用是my-app。子应用是单页面多应用，通过react-router-dom的MemoryRouter来处理路由跳转，然后发现主应用在打开第一个子应用后卸载，然后去打开第二个子应用的时候资源就请求到主应用去了，导致页面资源报错，崩溃。
为什么第一个字应用资源能正常请求，第二个子应用就报错了呢？猜测是缓存了html文件，导致资源请求的时候是/static/js/****.js,所以是直接拿到了主应用的域名了。这个问题要怎么解决呢？

- 最小可复现仓库：https://github.com/lizist/qiankun-demo
- qiankun 版本：2.5.1
- 浏览器版本：chrome 95.0.4638.69
- NodeJs 版本：v14.17.3
- 操作系统：mac
