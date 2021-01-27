import React from 'react';
import moment from 'moment';
import ReactDOM from 'react-dom';
import Router from '@/routers';
import { Provider } from 'mobx-react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import './styles/index.less';
import demoStore from '@/stores/demoStore';

moment.locale('zh-cn');

const stores = {
  demoStore,
};

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Provider {...stores}>
        <Router />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
