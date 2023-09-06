import React from 'react';
import { Input, Space } from 'antd';
import CBase from './base.tsx';

const { Search } = Input;

class CSearch extends CBase {
  emitType: string = 'searchTable';
  onSearch(val) {
    this.emit(val);
  }
  render(text, record, index): React.ReactNode {
    return (
      <>
        <Search
          placeholder="input search text"
          onSearch={this.onSearch.bind(this)}
          style={{ width: 200 }}
        />
      </>
    );
  }
}

export default CSearch;
