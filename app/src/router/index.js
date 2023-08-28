import React, { Suspense } from "react";
import { Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from "react-router-dom";
import routes from "./routes";
import { Mask } from "antd";
const Element = function Element(props) {
    let { component: Component, meta } = props;
    let { title } = meta | {};
    document.title = title
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams;
    const [usp] = useSearchParams();
    return <Component navigate={navigate} location={location} params={params} usp={usp} meta={meta} />
}

export default function RouterView() {
    return <Suspense fallback={<></>}>
        <Routes>
            {
                routes.map((item, index) => {
                    let { path } = item;
                    return <Route key={index} path={path} element={<Element {...item} />} />
                })
            }
        </Routes>
    </Suspense>
}