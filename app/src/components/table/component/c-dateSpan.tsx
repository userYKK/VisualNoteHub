import React from 'react';
import { filterDate } from '@/assets/utils.js';
import CBase from './base.ts';

class CDateSpan extends CBase {
  render(text, record, index): React.ReactNode {
    console.log(this);

    const val = filterDate(record[this.key] || '');
    return (
      <>
        <div>{val}</div>
      </>
    );
  }
}
export default CDateSpan;
