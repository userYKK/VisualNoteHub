import React, { useState } from 'react';
import * as Icon from '@ant-design/icons';
import { Button, Menu } from 'antd';
import MenuData from '@/config/menu.conf';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import { Link } from 'react-router-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
    type,
  } as MenuItem;
}

function getIcon(iconName: string) {
  if (!iconName) return '';
  return React.createElement(Icon[iconName]);
}

function getItems(list) {
  if (!list?.length) {
    return;
  }
  return list.map((item) => {
    if (item.category) {
      const categoryList = item.category.map((category) => {
        return getItem(
          category.title,
          category.idx,
          null,
          getItems(category.children),
          'group'
        );
      });
      return getItem(item.title, item.idx, getIcon(item.icon), categoryList);
    }

    if (item.children) {
      return getItem(
        <Link to={item.jump}>{item.title}</Link>,
        item.idx,
        getIcon(item.icon),
        getItems(item.children)
      );
    }

    return getItem(
      <Link to={item.jump}>{item.title}</Link>,
      item.idx,
      getIcon(item.icon)
    );
  });
}

const items = getItems(MenuData);

const SideBar = function SideBar(props) {
  let collapsed = false;

  let selectMenuItem = ({ item, key, keyPath, selectedKeys, domEvent }) => {};
  return (
    <div style={{ height: '100%', background: '#001529' }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={props.collapsed}
        items={items}
        onSelect={selectMenuItem}
      />
    </div>
  );
};

export default SideBar;
