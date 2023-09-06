import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

// antd
// import { ConfigProvider } from "antd-mobile";
// import  zhCN from "antd-mobile/es/locales/zh-className";
// 样式

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </>
);
