export default [
    {
        title: '导航一',
        cla: 'el-icon-location',
        role: '',
        disabled: '',
        jump: '',
        idx: 'menu_1',
        category: [
            {
                title: '分组一',
                children: [
                    {
                        title: '选项1',
                        jump: '',
                        idx: 'menu_1-1',
                        children: [
                            {
                                title: '选项32',
                                jump: '',
                                idx: 'menu_11',
                            }, {
                                title: '选项31',
                                jump: '',
                                idx: 'menu_22',
                            },
                        ],
                    },
                    {
                        title: '选项2',
                        jump: '',
                        idx: 'menu_1-2',
                    },
                ],
            },
            {
                title: '分组二',
                children: [
                    {
                        title: '选项3',
                        jump: '',
                        idx: 'menu_2',
                    },
                    {
                        title: '选项4',
                        jump: '',
                        idx: 'menu_3',
                    },
                ],
            },
        ],
    },
    {
        title: '导航二',
        cla: 'el-icon-menu',
        role: '',
        disabled: '',
        children: [
            {
                title: '选项3',
                jump: '',
                idx: 'menu_4'
            },
            {
                title: '选项4',
                jump: '',
                idx: 'menu_5',
            },
        ],
    },
    {
        title: '导航三',
        cla: 'el-icon-setting',
        role: '',
        disabled: '',
        jump: '',
        idx: 'menu_6',
    },
    {
        title: '导航四',
        cla: 'el-icon-document',
        role: '',
        disabled: '',
        jump: '',
        idx: 'menu_7',
    },
];
