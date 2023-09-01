import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

import CBase from './base.ts';

class CHtml extends CBase {
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
  handleChange(value: string[]) {}
  render(text, record, index): React.ReactNode {
    const val = text || '';
    return (
      <>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={this.handleChange}
          options={this.options}
        />
      </>
    );
  }
}

export default CHtml;
