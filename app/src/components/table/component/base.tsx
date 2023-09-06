import type { ButtonProps } from 'antd/es/button';
import React from 'react';
interface Btn {
  type: ButtonProps['type'];
  danger: Boolean;
  color?: string;
  title: string;
  operateType: string;
}
interface HeadItem {
  dataIndex: string;
  btnType: ButtonProps['type'];
  width: number;
  operateList: Btn[];
  emitEvent: Function;
}
class CBase extends React.PureComponent {
  HeadItemConf: HeadItem;
  key: string = '';
  width: number = 100;
  emit: Function = () => {};
  constructor(prop: HeadItem) {
    super(prop);
    const { dataIndex: key, width, emitEvent } = prop;
    this.HeadItemConf = prop;
    this.key = key;
    this.width = width;
    this.emit = emitEvent;
  }
  clickFn(data) {
    this.emit(data);
  }

  getSelectList() {}
  render(): React.ReactNode {
    const [text, record, index] = arguments;
    return <div>{text}</div>;
  }
}

export default CBase;
