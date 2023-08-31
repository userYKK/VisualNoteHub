import React from "react";

let HeadItemConf = {key: ''}
const Html = function Html(text, record, index){
    if(record.type === 'init'){
        HeadItemConf = record
   }
    
    const val = record[HeadItemConf.key] || '';
    
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: val }}></div>
        </>
    )
}

export default Html