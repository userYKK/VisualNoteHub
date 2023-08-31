import React from 'react';
import CBase from './base.js';

class CFileSize extends CBase {
  render(text, record, index): React.ReactNode {
    console.log(this);

    const val = record[this.key] || '';
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: val }}></div>
      </>
    );
  }
}

export default CFileSize;
