// 整个视图和页面入口
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from '@/router';
import SideBar from './sidebar/index.tsx';
import BreadCrumb from './breadcrumb/index.tsx';
import Head from './head/index.tsx';
import Tabs from './tabs/index.tsx';

import { Layout, Space } from 'antd';
const { Footer, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
  padding: '0 20px',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#0f64b5',
};
const LayoutCom = function LayoutCom() {
  const [openSideBar, setSideBarOpen] = useState(false);
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Sider style={siderStyle} collapsed={openSideBar}>
          <SideBar />
        </Sider>
        <Layout>
          <Space direction="vertical" size={[0, 20]}>
            <Head
              collapsed={openSideBar}
              change={() => setSideBarOpen(!openSideBar)}
            ></Head>
            {/* <Space direction="vertical" size={[0, 20]}> */}
            <Tabs></Tabs>
            <BreadCrumb></BreadCrumb>
            <Content style={contentStyle}>
              <Router>
                <RouterView />
              </Router>
            </Content>
          </Space>
          {/* </Space> */}
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </Space>
  );
};
export default LayoutCom;
