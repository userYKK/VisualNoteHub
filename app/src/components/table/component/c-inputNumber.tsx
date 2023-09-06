import React from 'react';
import { InputNumber } from 'antd';
import CBase from './base.tsx';

class CSearch extends CBase {
  emitType: string = 'searchTable';
  onChange(val) {
    this.emit(val);
  }
  render(text, record, index): React.ReactNode {
    if (!record.isEdit) {
      return <div>{text}</div>;
    }
    return (
      <>
        <InputNumber
          min={1}
          max={10}
          defaultValue={text}
          onChange={this.onChange}
        />
      </>
    );
  }
}

export default CSearch;
