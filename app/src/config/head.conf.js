export const HeadConf = [
  {
    title: '插件编号',
    dataIndex: 'plId',
    width: 100,
    showPos: 'table',
    tableSlot: 'c-html',
    fixed: 'left',
    // render: (data, head, index, a, b, c) => {
    //     return <Image
    //         width={200}
    //         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    //     />
    // }
  },
  {
    title: '插件序号',
    dataIndex: 'plNo',
    width: 100,
    showPos: 'table',
    tableSlot: 'c-html',
  },
  {
    title: '插件类型',
    dataIndex: 'typeId',
    width: 100,
    showPos: 'table;drawer;search;dialog',
    tableDisabled: true,
    tableSlot: 'c-selectSpan',
    defaultSlot: 'c-selectSpan',
    optiondataIndex: 'typeId',
    optionTitle: 'typeName',
    optionsApi: '/protype/pager',
    optionsParams: {
      start: 0,
      length: 10000,
      type: '1',
    },
  },
  {
    title: '插件版块',
    dataIndex: 'blockId',
    width: 100,
    showPos: 'table;drawer;search;dialog',
    optiondataIndex: 'typeId',
    tableDisabled: true,
    optionTitle: 'typeName',
    optionsApi: '/protype/pager',
    optionsParams: {
      start: 0,
      length: 10000,
      type: '2',
    },
    tableSlot: 'c-selectSpan',
    defaultSlot: 'c-selectSpan',
  },
  {
    title: '首图',
    dataIndex: 'plImg',
    apidataIndex: 'img',
    width: 100,
    showPos: 'table;drawer;dialog',
    tableSlot: 'c-image',
    defaultSlot: 'c-image',
  },
  {
    title: '插件',
    dataIndex: 'plUpload',
    onlyEdit: true,
    apidataIndex: 'zip',
    showPos: '',
    width: 100,
    defaultSlot: 'c-uploadFile',
  },
  {
    title: '热词',
    dataIndex: 'pldataIndex',
    width: 100,
    showPos: 'table;drawer;dialog',
    tableSlot: 'c-tags',
    defaultSlot: 'c-tags',
  },
  // {
  //     title: "内容详情",
  //     btnTitle: '查看详情',
  //     dataIndex: "plDetail",
  //     width: 100,
  //     showPos: 'table;drawer;dialog',
  //     tableSlot: "c-rich",
  //     defaultSlot: "c-rich",
  // },
  {
    title: '排序',
    dataIndex: 'plOrder',
    width: 100,
    showPos: 'table;drawer;dialog',
    tableSlot: 'c-html',
    defaultSlot: 'c-inputNumber',
  },
  {
    title: '下载次数',
    dataIndex: 'plCount',
    width: 100,
    showPos: 'table;drawer;dialog',
    tableSlot: 'c-html',
    defaultSlot: 'c-inputNumber',
  },
  {
    title: '热度数',
    dataIndex: 'plHot',
    width: 100,
    showPos: 'table;drawer;dialog',
    tableSlot: 'c-html',
    defaultSlot: 'c-inputNumber',
  },
  {
    title: '评论数',
    dataIndex: 'plComment',
    width: 100,
    showPos: 'table;drawer;dialog',
    tableSlot: 'c-html',
    defaultSlot: 'c-inputNumber',
  },
  {
    title: '评分',
    dataIndex: 'plVal',
    showPos: 'table;drawer;dialog',
    tableDisabled: true,
    maxRate: 150,
    minRate: 0,
    tableSlot: 'c-rate',
    defaultSlot: 'c-rate',
    width: 150,
  },
  {
    title: '文件名称',
    dataIndex: 'plFileName',
    width: 100,
    showPos: 'table;drawer',
    tableSlot: 'c-html',
    defaultSlot: 'c-html',
  },
  {
    title: '文件目录',
    dataIndex: 'plFilePath',
    width: 100,
    showPos: 'table;drawer',
    tableSlot: 'c-html',
    defaultSlot: 'c-html',
  },
  {
    title: '文件大小',
    dataIndex: 'plFileSize',
    width: 100,
    showPos: 'table;drawer',
    tableSlot: 'c-filesize',
    defaultSlot: 'c-filesize',
  },
  {
    title: '文件hash',
    dataIndex: 'plFileHash',
    width: 100,
    showPos: 'table;drawer',
    tableSlot: 'c-html',
    defaultSlot: 'c-html',
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    width: 100,
    showPos: 'table;drawer',
    tableSlot: 'c-html',
    defaultSlot: 'c-html',
  },
  {
    title: '创建时间',
    dataIndex: 'createDate',
    width: 100,
    showPos: 'table;drawer',
    tableSlot: 'c-dateSpan',
    defaultSlot: 'c-dateSpan',
  },
  {
    title: '更新时间',
    dataIndex: 'updateDate',
    width: 100,
    showPos: 'table;drawer',
    tableSlot: 'c-dateSpan',
    defaultSlot: 'c-dateSpan',
  },
  {
    title: '备注',
    dataIndex: 'info',
    width: 100,
    inputRows: 4,
    showPos: 'table;drawer;dialog',
    tableSlot: 'c-html',
    defaultSlot: 'c-input',
  },
  {
    title: '新增',
    btnTitle: '新增',
    dataIndex: 'createDialog',
    width: 50,
    showPos: 'search',
    cla: 'pos-right',
    defaultSlot: 'c-btn',
  },
  {
    title: '',
    width: 150,
    tableSlot: 'c-operates',
    defaultSlot: 'c-btn',
    showPos: 'table',
    tableHeadeSlot: 'c-search',
    fixed: 'right',
    operateList: [
      {
        type: 'text',
        color: '',
        title: '删除',
        danger: true,
        operateType: 'del',
      },
      {
        type: 'text',
        color: '',
        title: '编辑',
        operateType: 'edit',
      },
    ],
  },
];

export function getHeadItem(idx) {
  return HeadConf[idx] || {};
}
