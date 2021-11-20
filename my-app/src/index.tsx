import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { appPropsType } from '@/type/app_type';
import App from './App';

// @ts-ignore
if (window.__POWERED_BY_QIANKUN__) {
  // 处理乾坤环境
  // @ts-ignore
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render(
      <BrowserRouter>
        <App
          pageData={{
            container: document.documentElement,
            userInfo: {
              user_id: localStorage.getItem('USER_ID') || 0,
            },
          }}
        />
      </BrowserRouter>
  ,
    document.getElementById('root'),
  );
}


// 处理乾坤钩子 pc parasite_loader组件、hybrid parasite_loader组件都会挂载在这边
export async function bootstrap() {
  console.log('mildom-parasite:: bootstrap');
}

export async function mount(props: appPropsType) {
  return new Promise((resolve, reject) => {
    // Always reject with an Error.
    console.log('mildom-parasite:: mount with props', props);
    try {
      const { container } = props;
      render(
          <MemoryRouter>
            <App pageData={props} />
          </MemoryRouter>,
        container.querySelector('#root'),
      );
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
}

export async function update(props: appPropsType) {
  const { container } = props;
  console.log('mildom-parasite:: update with props', props);
  render(
      <MemoryRouter>
        <App pageData={props} />
      </MemoryRouter>,
    container.querySelector('#root'),
  );
}

export async function unmount(props: appPropsType) {
  const { container } = props;
  console.log('mildom-parasite:: unmount', props);
  unmountComponentAtNode(container.querySelector('#root')!);
}
