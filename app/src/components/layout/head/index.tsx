import React from 'react';
import {
  Layout,
  Dropdown,
  theme,
  Space,
  Button,
  Divider,
  Badge,
  Avatar,
} from 'antd';
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
const { Header } = Layout;

const { useToken } = theme;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
];
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#0f64b5',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

// const { token } = useToken();

// const contentStyle: React.CSSProperties = {
//   backgroundColor: token.colorBgElevated,
//   borderRadius: token.borderRadiusLG,
//   boxShadow: token.boxShadowSecondary,
// };

const menuStyle: React.CSSProperties = {
  boxShadow: 'none',
};

const Head: React.FC = (props) => (
  <Header style={headerStyle}>
    <Button
      type="primary"
      onClick={() => props.change()}
      style={{ background: '#001529' }}
    >
      {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button>
    <Dropdown
      menu={{ items }}
      dropdownRender={(menu) => (
        <div>
          {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
          <Divider style={{ margin: 0 }} />
          <Space style={{ padding: 8 }}>
            <Button type="primary">Click me!</Button>
          </Space>
        </div>
      )}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Badge dot>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
        </Space>
      </a>
    </Dropdown>
  </Header>
);

export default Head;
