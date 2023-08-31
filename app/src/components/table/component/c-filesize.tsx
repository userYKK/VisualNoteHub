import React from 'react';
import { converFileSize } from '@/assets/utils.js';
import CBase from './base.ts';

class CFileSize extends CBase {
  render(text, record, index): React.ReactNode {
    const val = converFileSize(record[this.key] || '');
    return (
      <>
        <div>{val}</div>
      </>
    );
  }
}
export default CFileSize;
