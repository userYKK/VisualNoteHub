import type { ButtonProps } from 'antd/es/button';
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
class CBase {
  HeadItemConf: HeadItem;
  key: string = '';
  width: number = 100;
  emit: Function = () => {};
  constructor(prop: HeadItem) {
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
}

export default CBase;
