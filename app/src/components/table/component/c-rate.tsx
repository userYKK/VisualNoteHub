import React from 'react';
import { Rate } from 'antd';
import CBase from './base.tsx';

class CRate extends CBase {
  render(text, record, index): React.ReactNode {
    const val = text || 0;
    const disabled = false;
    return (
      <>
        <Rate
          allowHalf
          defaultValue={val}
          disabled={disabled}
          style={{
            fontSize: '14px',
          }}
        />
      </>
    );
  }
}

export default CRate;
