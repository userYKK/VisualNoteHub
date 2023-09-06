import React from 'react';
import { Button, Drawer, Space, Descriptions } from 'antd';
import { EditOutlined } from '@ant-design/icons';
// import DynamicComponent from '../table/component/DynamicComponent.tsx';

const DrawerCom = function DrawerCom(props) {
  const { conf, emitEvent } = props;
  console.log(props.data, '===我来了');

  const list = conf
    .filter((item) => item.showPos?.includes?.('drawer'))
    .map((item, idx) => {
      if (item.defaultSlot) {
        const params = {
          ...item,
          emitEvent,
        };
        const Render =
          require(`../table/component/${item.defaultSlot}.tsx`).default;
        const _this = new Render({ type: 'init', ...params });
        item.render = _this.render.bind(_this);
      }
      return item;
    });
  const onClose = () => {
    props.close();
  };
  const size = 'small';
  return (
    <Drawer
      title={`${size} Drawer`}
      placement="right"
      size={size}
      onClose={onClose}
      open={props.open}
      extra={
        <Space>
          <Button type="primary" onClick={() => props.edit()}>
            <EditOutlined />
          </Button>
        </Space>
      }
      footer={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            OK
          </Button>
        </Space>
      }
    >
      {
        // list?.map((item) => {
        //   return (
        //     <DynamicComponent
        //       is={item.defaultSlot}
        //       conf={item}
        //       data={props.data}
        //     />
        //   );
        // })
        list?.map((item, index) => {
          return (
            <div key={index}>
              <div className="eidt-title">{item.title}</div>
              {item.render(props.data[item.dataIndex], {
                ...props.data,
                isEdit: props.isEdit,
              })}
            </div>
          );
        })
      }
    </Drawer>
  );
};

export default DrawerCom;
