import loadable from 'react-loadable';
import { ROOT_PATH } from './route_path';
import RouteLoader from './route_loader';

const routeList = {
  [ROOT_PATH.testPage1]: loadable({
    loader: () =>
      import(/* webpackChunkName: "test_page1" */ '../pages/test_page1'),
    timeout: 10000,
    delay: 300,
    loading: RouteLoader,
  }),
  [ROOT_PATH.testPage2]: loadable({
    loader: () =>
      import(/* webpackChunkName: "test_page2" */ '../pages/test_page2'),
    timeout: 10000,
    delay: 300,
    loading: RouteLoader,
  }),
};

export default routeList;
