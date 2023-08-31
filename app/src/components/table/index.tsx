import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';

interface DataType {
  plId: string;
  [key: string]: string | number | null;
}
const data: DataType[] = [];
for (let i = 0; i < 2; i++) {
  data.push({
    plId: `d8ba58ae0fe811ee8e6c2cf05d888f4${i}`,
    plNo: '111',
    typeId: '176832080dff11eeb08e2cf05d888f4a',
    typeName: 'Chrome生产工具插件',
    blockId: '44533A8A23F24559A69FBEB15C188592',
    blockName: 'Chrome插件',
    plImg:
      '/img/d8ba58ae0fe811ee8e6c2cf05d888f4a/67e0fffc-15ad-46fa-a0d3-d109797d63a3-2022424-144734-thumbnail.png',
    plTitle: '哔哩哔哩bilibili自动网页全屏插件下载',
    plDetail: null,
    plOrder: 0,
    plCount: 7314,
    plHot: null,
    plVal: 20,
    plComment: null,
    plFileName: '哔哩哔哩bilibili自动网页全屏插件下载js',
    plFilePath: 'content/productivity/66329.html/file.js',
    plFileSize: 2688,
    plFileHash: null,
    plKey:
      'chrome插件,Chrome插件,谷歌浏览器插件,AI工具，AI绘图，GhatGPT对话，Mac软件，Windows软件，iOS软件，Android软件,提供Chrome商店中优秀的Chrome插件推荐与下载服务,是谷歌Chrome浏览器的扩展插件，使用Chrome插件可以为Chrome浏览器带来一些功能性的扩展，进而提高Chrome的使用体验。想要获得Chrome插件的方式有许多，用户可以直接在Chrome商店中下载和安装谷歌浏览器插件，也可以通过jtbjb.com来获得更加详细的介绍和优秀Chrome插件的推荐,Chrome生产工具插件,Chrome插件,哔哩哔哩bilibili自动网页全屏插件下载',
    createDate: 1650758400000,
    creator: '不加',
    updateDate: null,
    updator: null,
    info: '有没有B站网页版自动全屏的插件？本文介绍的用户脚本插件帮你解决哔哩哔哩怎么自动全屏的难题',
  });
}
const TableCom = function TableCom(props) {
  const { head } = props;
  const headConf = head.map((item, idx) => {
    if (item.tableSlot) {
      const Render = require(`./component/${item.tableSlot}.tsx`).default;
      const _this = new Render({ type: 'init', ...item });
      item.render = _this.render.bind(_this);
    }
    return item;
  });

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
  return (
    <Table
      scroll={{ x: '100%' }}
      rowSelection={rowSelection}
      rowKey={(record) => record.plId}
      columns={headConf}
      dataSource={data}
    />
  );
};
export default TableCom;
