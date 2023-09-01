import React from 'react';
import { Breadcrumb } from 'antd';

const padding20: React.CSSProperties = {
  padding: '0 20px',
};
const items = [
  {
    title: 'Home',
  },
  {
    title: <a href="">Application Center</a>,
  },
  {
    title: <a href="">Application List</a>,
  },
  {
    title: 'An Application',
  },
];
const BreadCrumb: React.FC = () => (
  <Breadcrumb style={padding20} items={items} />
);

export default BreadCrumb;
