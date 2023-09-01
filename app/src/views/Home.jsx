import React, { useState } from 'react';
import Table from '_com/table/index.tsx';
import Drawer from '_com/drawer/index.tsx';
import { HeadConf } from '@/config/head.conf';

const Home = function Home() {
  // drawer
  const [openDrawer, setDrawerOpen] = useState(false);

  const [curData, setCurData] = useState({});
  const handleOperateFn = (head, data) => {
    const { record = {}, btn } = data;
    switch (btn.operateType) {
      case 'edit':
        console.log(record, '=111');
        setCurData(record);
        setDrawerOpen(true);
        break;

      default:
        break;
    }
  };
  const handleEmitEvent = function handleEmitEvent(data) {
    const { emitType, HeadItemConf } = this;
    switch (emitType) {
      case 'operateTable':
        handleOperateFn(HeadItemConf, data);
        break;

      default:
        break;
    }
  };
  return (
    <>
      {/* <div style={{ padding: '0 20px' }}> */}
      <Table head={HeadConf} emitEvent={handleEmitEvent}></Table>
      {/* </div> */}
      <Drawer
        conf={HeadConf}
        open={openDrawer}
        data={curData}
        close={() => setDrawerOpen(false)}
      ></Drawer>
    </>
  );
};

export default Home;
