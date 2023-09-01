import React from 'react';
import { Image } from 'antd';
import CBase from './base.ts';

class CImage extends CBase {
  render(text, record, index): React.ReactNode {
    const val =
      text ||
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
    return (
      <>
        <Image width={this.width} src={val} />
      </>
    );
  }
}

export default CImage;
