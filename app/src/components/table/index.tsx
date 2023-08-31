import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  plImg: string;
  plId: string;
}
const data: DataType[] = [];
for (let i = 0; i < 2; i++) {
  data.push({
    key: i,
    plImg: '',
    plId: '<span style="color: red">q3qerse</span>',
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const TableCom = function TableCom(props) {
  const {head} = props;
  const headConf = head.map((item, idx)=>{
    
   if(item.tableSlot){
    const render = require(`./component/${item.tableSlot}.tsx`).default;
    render(null, {type: 'init', ...item})
    item.render = render;
    }
    return item;
  })
  
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
    return <Table rowSelection={rowSelection} columns={headConf} dataSource={data} />;
};
export default TableCom;
