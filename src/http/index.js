import axios from "./api.request.js";
const root = "http://gpt-api.jtbjb.com/u";
// const root = "http://testapi.teacode.top:80/";
export function httpGetValidatecode(data) {
    return axios.request({
        url: `${root}/loadCode`,
        method: 'post',
        data
    })
}
export function httpRegister(data) {
    return axios.request({
        url: `${root}/loadR`,
        method: 'post',
        data
    })
}