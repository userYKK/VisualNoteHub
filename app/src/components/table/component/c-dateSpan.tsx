import React from 'react';
import { filterDate } from '@/assets/utils.js';
import CBase from './base.ts';

class CDateSpan extends CBase {
  render(text, record, index): React.ReactNode {
    console.log(text, record, index, '===111222');

    const { width } = this.HeadItemConf;

    const val = filterDate(text, 'year');
    return (
      <>
        <div style={{ width: `${this.width}px` }}>{val}</div>
      </>
    );
  }
}
export default CDateSpan;
