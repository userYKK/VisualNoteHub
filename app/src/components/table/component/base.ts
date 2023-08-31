class CBase {
  HeadItemConf: object = {};
  key: string = '';
  constructor(prop) {
    this.HeadItemConf = prop;
    this.key = prop.key;
  }

  getSelectList() {}
}

export default CBase;
