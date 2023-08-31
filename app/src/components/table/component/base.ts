class CBase {
  HeadItemConf: { [key: string]: string } = {};
  key: string = '';
  constructor(prop) {
    this.HeadItemConf = prop;
    this.key = prop.key;
  }

  getSelectList() {}
}

export default CBase;
