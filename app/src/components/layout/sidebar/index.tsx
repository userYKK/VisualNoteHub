

import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import MenuData from "../../../config/menu.conf";

import type { MenuProps, MenuTheme } from 'antd/es/menu';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}
function getItems(list) {
    return list.map(item=>{
        if(item.category){
            const categoryList =  item.category.map(category=>{
                return getItem(category.title, category.idx, null, getItems(category.children), 'group')
            })
            return  getItem(item.title, item.idx, <MailOutlined />,categoryList); 
        }
    
        if(item.children){
            return getItem(item.title, item.idx, <MailOutlined />, getItems(item.children));
        }
    
        return getItem(item.title, item.idx, <PieChartOutlined />, item.children)
      })
}

const items = getItems(MenuData);

const SideBar = function SideBar() {
   
    let collapsed = false
  
    let selectMenuItem = ({ item, key, keyPath, selectedKeys, domEvent }) => {
      console.log({ item, key, keyPath, selectedKeys, domEvent }, '===');
      
    };
    return (
      <div style={{ height: '100%' }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onSelect={selectMenuItem}
        />
      </div>
    );
  };
  
  export default SideBar;