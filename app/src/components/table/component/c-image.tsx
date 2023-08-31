import React from "react";
import { Image } from "antd";
import CBase from "./base.ts";

class CImage extends CBase{
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