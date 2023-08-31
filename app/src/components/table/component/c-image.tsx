import React from "react";

import { Image } from 'antd';
let HeadItemConf = {key: ''}
const Html = function Html(text, record, index){
    if(record.type === 'init'){
        HeadItemConf = record
   }
    const val = record[HeadItemConf.key] || '';
    
    return (
        <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
    )
}

export default Html