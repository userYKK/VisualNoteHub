import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import reducer from "./reducer";

// 根据不同环境 使用不同中间件
let middleware = [reduxThunk, reduxPromise];
let env = process.env.NODE_ENV; //环境变量
if (env === 'development') {
    middleware.push(reduxLogger)
}

// 创建 store 容器
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);
export default store