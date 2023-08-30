// 整个视图和页面入口
import React from "react";
import { HashRouter } from "react-router-dom";
import RouterView from "./router";
const App = function App(){
    return <HashRouter>
                <RouterView/>
            </HashRouter>
}
export default App;