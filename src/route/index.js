import VueRouter from 'vue-router';
import Vue from "vue";
import Layout from "@/components/layout"
Vue.use(VueRouter);

let routes = [];

const files = require.context('../pages', true, /.vue/)
const fileConfs = require.context('../pages', true, /.conf.js/)
const pages = {};
const pageConfs = {};
files.keys().forEach(key => {
    pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
})
fileConfs.keys().forEach(key => {
    pageConfs[key.replace(/(\.\/|\.conf.js)/g, '')] = fileConfs(key).default;
})

//生成路由规则
let generator = [];
//生成所有路由
Object.keys(pages).forEach(item => {
    console.log(item)
    if (item !== 'App') {
        let file_name = item.split('/')[0];
        generator.push({
            path: '',
            component: Layout,
            meta: {
                activeMenu: '0',
            },
            children: [{
                path: file_name == 'home' ? '/' : '/' + file_name,
                name: file_name,
                meta: {
                    active: item,
                    ...pageConfs[`${file_name}/page`]
                },
                component: pages[item]
            }]
        })
    }
});

routes = [
    ...generator,
    {
        path: '*',
        redirect: '/',
        meta: {
            hideMenu: true,
        }
    },
    {
        path: '',
        redirect: '/',
        meta: {
            hideMenu: true,
        }
    },
];
const router = new VueRouter({
    mode: 'history', routes
})
export default router
