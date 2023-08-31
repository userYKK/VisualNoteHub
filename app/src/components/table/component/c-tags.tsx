import React from 'react';
import { Tag, Tooltip } from 'antd';
import CBase from './base.ts';

const tagStyle: React.CSSProperties = {
  maxWidth: 80,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

class CTags extends CBase {
  render(text, record, index): React.ReactNode {
    console.log(this);

    const val = record[this.key] || '';
    const tags = val.split(',');
    return tags.map((tag) => {
      if (tag.length > 5) {
        return (
          <Tooltip title={tag} trigger="hover">
            <Tag style={tagStyle} color={this.HeadItemConf.color}>
              {tag}
            </Tag>
          </Tooltip>
        );
      }
      return (
        <Tag style={tagStyle} color={this.HeadItemConf.color}>
          {tag}
        </Tag>
      );
    });
  }
}

export default CTags;
