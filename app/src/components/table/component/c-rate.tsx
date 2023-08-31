import React from 'react';
import { Rate } from 'antd';
import CBase from './base.ts';

class CRate extends CBase {
  render(text, record, index): React.ReactNode {
    console.log(this);

    const val = record[this.key] || 0;
    const disabled = false;
    return (
      <>
        <Rate allowHalf defaultValue={val} disabled={disabled} />
      </>
    );
  }
}

export default CRate;
