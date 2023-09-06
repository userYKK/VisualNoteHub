import React from 'react';
import { Tooltip } from 'antd';
import CBase from './base.tsx';

class CHtml extends CBase {
  render(text, record, index): React.ReactNode {
    if (text?.length > 20) {
      return (
        <Tooltip title={text} trigger="hover">
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </Tooltip>
      );
    }
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </>
    );
  }
}

// const Html = function Html(text, record, index){
//     if(record.type === 'init'){
//         HeadItemConf = record;
//         count++

//    }
//    if(!HeadItemConf.key) return <></>;
//     const key = HeadItemConf.key;
//     const val = record[key] || '';

//     return (<>
//             <div dangerouslySetInnerHTML={{ __html: val }}></div>
//         </>
//     )
// }

export default CHtml;
