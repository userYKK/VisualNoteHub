import React from 'react';
import { Button, Drawer, Space } from 'antd';
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
  const size = 'large';
  return (
    <Drawer
      title={`${size} Drawer`}
      placement="right"
      size={size}
      onClose={onClose}
      open={props.open}
      extra={<Space></Space>}
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
        list?.map((item) => {
          return (
            <div>
              <div className="eidt-title">{item.title}</div>
              {item.render(props.data[item.dataIndex], props.data)}
            </div>
          );
        })
      }
    </Drawer>
  );
};

export default DrawerCom;
