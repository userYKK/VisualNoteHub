import React from 'react';
import { Tooltip } from 'antd';
import CBase from './base.ts';

class CHtml extends CBase {
  render(text, record, index): React.ReactNode {
    console.log(this);

    const val = record[this.key] || '';
    if (val.length > 20) {
      return (
        <Tooltip title={val} trigger="hover">
          <div dangerouslySetInnerHTML={{ __html: val }}></div>
        </Tooltip>
      );
    }
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: val }}></div>
      </>
    );
  }
}

// const Html = function Html(text, record, index){
//     if(record.type === 'init'){
//         HeadItemConf = record;
//         console.log(count);
//         count++

//    }
//    if(!HeadItemConf.key) return <></>;
//     const key = HeadItemConf.key;
//     const val = record[key] || '';
//     console.log(key);

//     return (<>
//             <div dangerouslySetInnerHTML={{ __html: val }}></div>
//         </>
//     )
// }

export default CHtml;
