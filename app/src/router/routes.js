import { lazy } from "react";
// import { Home } from "../views/Home";
const routes = [{
    path: '/',
    components: lazy(() => import('../views/Home')),
    meta: {
        title: '列表'
    }
}]
export default routes