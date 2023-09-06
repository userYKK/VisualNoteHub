import React from 'react';
import { Tag, Tooltip } from 'antd';
import CBase from './base.tsx';

const tagStyle: React.CSSProperties = {
  maxWidth: 80,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

class CTags extends CBase {
  render(text, record, index): React.ReactNode {
    const val = text || '';
    const tags = val?.split?.(',');
    return (
      <>
        {tags?.map((tag, index) => {
          if (tag.length > 5) {
            return (
              <Tooltip title={tag} trigger="hover">
                <Tag
                  key={index}
                  style={tagStyle}
                  color={this.HeadItemConf.color}
                >
                  {tag}
                </Tag>
              </Tooltip>
            );
          }
          return (
            <Tag key={index} style={tagStyle} color={this.HeadItemConf.color}>
              {tag}
            </Tag>
          );
        })}
      </>
    );
  }
}

export default CTags;
