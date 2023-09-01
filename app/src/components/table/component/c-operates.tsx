import React from 'react';
import { Button, Popconfirm, message } from 'antd';
import CBase from './base.ts';

class CBtn extends CBase {
  emitType: string = 'operateTable';
  render(text, record, index): React.ReactNode {
    const confirm = (e: React.MouseEvent<HTMLElement>) => {
      console.log(e);
      message.success('Click on Yes');
    };

    const cancel = (e: React.MouseEvent<HTMLElement>) => {
      console.log(e);
      message.error('Click on No');
    };

    const btns = this.HeadItemConf.operateList;
    return (
      <>
        {btns?.length &&
          btns.map((btn) => {
            if (btn.operateType === 'del') {
              return (
                <Popconfirm
                  title="删除"
                  description="确定删除该条数据吗？"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="确定"
                  cancelText="取消"
                >
                  <Button
                    type={btn.type}
                    danger={btn.danger}
                    onClick={this.clickFn.bind(this, { record, index, btn })}
                  >
                    {btn.title}
                  </Button>
                </Popconfirm>
              );
            }
            return (
              <Button
                type={btn.type}
                danger={btn.danger}
                onClick={this.clickFn.bind(this, { record, index, btn })}
              >
                {btn.title}
              </Button>
            );
          })}
      </>
    );
  }
}

export default CBtn;
