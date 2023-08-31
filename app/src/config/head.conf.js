/*
 * @Author: your name
 * @Date: 2022-03-06 11:33:09
 * @LastEditTime: 2022-05-10 10:39:05
 * @LastEditors: zhoujifang 1836564213@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /open_resource_web/src/api/header/ProPlugin.js
 */
// import { Image } from 'antd';
export const HeadConf = [
    {
        title: "插件编号",
        key: "plId",
        width: 100,
        showPos: 'table',
        tableSlot: "c-html",
        // render: (data, head, index, a, b, c) => {
        //     console.log(data, head, index, a, b, c, '======111');
        //     return <Image
        //         width={200}
        //         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        //     />
        // }
    },
    {
        title: '插件序号',
        key: 'plNo',
        width: 100,
        showPos: 'table',
        tableSlot: "c-html",
    },
    {
        title: "插件类型",
        key: "typeId",
        width: 100,
        showPos: 'table;drawer;search;dialog',
        tableDisabled: true,
        tableSlot: "c-html",
        defaultSlot: "c-select",
        optionKey: 'typeId',
        optionTitle: 'typeName',
        optionsApi: '/protype/pager',
        optionsParams: {
            start: 0,
            length: 10000,
            type: '1'
        },
    },
    // {
    //     title: "插件版块",
    //     key: "blockId",
    //     width: 100,
    //     showPos: 'table;drawer;search;dialog',
    //     optionKey: 'typeId',
    //     tableDisabled: true,
    //     optionTitle: 'typeName',
    //     optionsApi: '/protype/pager',
    //     optionsParams: {
    //         start: 0,
    //         length: 10000,
    //         type: '2'
    //     },
    //     tableSlot: "c-selectSpan",
    //     defaultSlot: "c-select",
    // },
    // {
    //     title: "首图",
    //     key: "plImg",
    //     apiKey: 'img',
    //     width: 100,
    //     showPos: 'table;drawer;dialog',
    //     tableSlot: "c-img",
    //     defaultSlot: "c-img",
    // },
    // {
    //     title: "插件",
    //     key: "plUpload",
    //     onlyEdit: true,
    //     apiKey: 'zip',
    //     showPos: '',
    //     width: 100,
    //     defaultSlot: "c-uploadFile",
    // },
    // {
    //     title: '热词',
    //     key: 'plKey',
    //     width: 100,
    //     showPos: 'table;drawer;dialog',
    //     tableSlot: "c-tags",
    //     defaultSlot: "c-tags",
    // },
    // {
    //     title: "内容详情",
    //     btnTitle: '查看详情',
    //     key: "plDetail",
    //     width: 100,
    //     showPos: 'table;drawer;dialog',
    //     tableSlot: "c-rich",
    //     defaultSlot: "c-rich",
    // },
    // {
    //     title: "排序",
    //     key: "plOrder",
    //     width: 100,
    //     showPos: 'table;drawer;dialog',
    //     tableSlot: "c-html",
    //     defaultSlot: "c-inputNumber",
    // },
    // {
    //     title: '下载次数',
    //     key: 'plCount',
    //     width: 100,
    //     showPos: 'table;drawer;dialog',
    //     tableSlot: "c-html",
    //     defaultSlot: "c-inputNumber",
    // },
    // {
    //     title: '热度数',
    //     key: 'plHot',
    //     width: 100,
    //     showPos: 'table;drawer;dialog',
    //     tableSlot: "c-html",
    //     defaultSlot: "c-inputNumber",
    // },
    // {
    //     title: '评论数',
    //     key: 'plComment',
    //     width: 100,
    //     showPos: 'table;drawer;dialog',
    //     tableSlot: "c-html",
    //     defaultSlot: "c-inputNumber",
    // },
    // {
    //     title: '评分',
    //     key: 'plVal',
    //     showPos: 'table;drawer;dialog',
    //     tableDisabled: true,
    //     maxRate: 100,
    //     minRate: 0,
    //     tableSlot: "c-rate",
    //     defaultSlot: "c-rate",
    //     width: 150
    // },
    // {
    //     title: '文件名称',
    //     key: 'plFileName',
    //     width: 100,
    //     showPos: 'table;drawer',
    //     tableSlot: "c-html",
    //     defaultSlot: "c-html",
    // },
    // {
    //     title: '文件目录',
    //     key: 'plFilePath',
    //     width: 100,
    //     showPos: 'table;drawer',
    //     tableSlot: "c-html",
    //     defaultSlot: "c-html",
    // },
    // {
    //     title: "文件大小",
    //     key: "plFileSize",
    //     width: 100,
    //     showPos: 'table;drawer',
    //     tableSlot: "c-filesize",
    //     defaultSlot: "c-filesize",
    // },
    // {
    //     title: '文件hash',
    //     key: 'plFileHash',
    //     width: 100,
    //     showPos: 'table;drawer',
    //     tableSlot: "c-html",
    //     defaultSlot: "c-html",
    // },
    // {
    //     title: '创建者',
    //     key: 'creator',
    //     width: 100,
    //     showPos: 'table;drawer',
    //     tableSlot: "c-html",
    //     defaultSlot: "c-html",
    // },
    // {
    //     title: "创建时间",
    //     key: "createDate",
    //     width: 100,
    //     showPos: 'table;drawer',
    //     tableSlot: "c-dateSpan",
    //     defaultSlot: "c-dateSpan",
    // },
    // {
    //     title: "更新时间",
    //     key: "updateDate",
    //     width: 100,
    //     showPos: 'table;drawer',
    //     tableSlot: "c-dateSpan",
    //     defaultSlot: "c-dateSpan",
    // },
    // {
    //     title: "备注",
    //     key: "info",
    //     width: 100,
    //     inputRows: 4,
    //     showPos: 'table;drawer;dialog',
    //     tableSlot: "c-html",
    //     defaultSlot: "c-input",
    // },
    // {
    //     title: "新增",
    //     btnTitle: '新增',
    //     key: "createDialog",
    //     width: 50,
    //     showPos: 'search',
    //     cla: 'pos-right',
    //     defaultSlot: "c-btn",
    // },
]

export function getHeadItem(idx) {
    return HeadConf[idx] || {}
}