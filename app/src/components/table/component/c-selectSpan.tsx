import React, { useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

import CBase from './base.tsx';

class CHtml extends CBase {
  // state = {
  //   isEdit: false,
  // };
  options: SelectProps['options'] = [];
  constructor(prop) {
    super(prop);

    for (let i = 10; i < 36; i++) {
      this.options?.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i,
      });
    }
  }
  // static getDerivedStateFromProps(props, state) {
  //   // 只要 props.email 改变，就改变 state
  //   debugger;
  //   if (props.isEdit !== state.isEdit) {
  //     return {
  //       isEdit: props.isEdit,
  //     };
  //   }
  //   return null;
  // }
  handleChange(value: string[]) {}
  render(text, record, index): React.ReactNode {
    const val = text || '';
    // this.state.isEdit = record.isEdit;

    if (!record.isEdit) {
      return <div>{val}</div>;
    }
    return (
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={this.handleChange}
        options={this.options}
      />
    );
  }
}

export default CHtml;
