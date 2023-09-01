import React from 'react';
import { converFileSize } from '@/assets/utils.js';
import CBase from './base.ts';

class CFileSize extends CBase {
  render(text, record, index): React.ReactNode {
    const val = converFileSize(text);
    return (
      <>
        <div>{val}</div>
      </>
    );
  }
}
export default CFileSize;
