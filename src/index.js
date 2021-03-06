import React from 'react';
import ReactDOM from 'react-dom';
import './style/base.less';
import 'lib-flexible';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
// import vconsole from 'vconsole'
// new vconsole()

function render(props = {}) {
  const {container} = props

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container ? container.querySelector('#root') : document.querySelector('#root')
  );
}

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
