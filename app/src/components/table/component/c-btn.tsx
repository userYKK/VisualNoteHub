import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd/es/button';
import CBase from './base.tsx';

class CBtn extends CBase {
  render(text, record, index): React.ReactNode {
    const type: ButtonProps['type'] = this.HeadItemConf
      .btnType as ButtonProps['type'];

    return (
      <>
        <Button type={type}>Text</Button>
      </>
    );
  }
}

export default CBtn;
