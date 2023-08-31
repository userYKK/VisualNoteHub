import { lazy } from "react";
// import { Home } from "@/views/Home";
const routes = [{
    path: '/test',
    component: lazy(() => import('@/views/Home')),
    meta: {
        title: '列表'
    },
},
{
    path: '/cs',
    component: lazy(() => import('@/views/Cs')),
    meta: {
        title: '测试'
    }
},
{
    path: '/',
    component: lazy(() => import('@/views/Cs')),
    meta: {
        title: '测试'
    }
}
]
export default routes