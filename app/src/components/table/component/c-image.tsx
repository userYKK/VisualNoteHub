import React from "react";
import { Image } from "antd";
class CImage {
    HeadItemConf: object = {};
    key: string = ''
    constructor(prop){
        this.HeadItemConf = prop;
        this.key = prop.key;
    }
    render(text, record, index): React.ReactNode {
        console.log(this);
        const val = record[this.key] || 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
        return (<>
                 <Image
            width={200}
            src=""
        />
         </>
        )
    }
}

export default CImage