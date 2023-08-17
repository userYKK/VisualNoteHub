/*
 * @Author: kk
 * @Date: 2020-12-06 18:10:01
 * @LastEditTime: 2020-12-22 22:24:19
 * @LastEditors: kk
 * @FilePath: \exam_frontent\src\libs\util.js
 * @signature: talk is cheap,show me the code
 * @Description:
 */
import Cookies from 'js-cookie'
// cookie保存的天数
import config from '@/config'
const { cookieExpires } = config

export const TOKEN_KEY = 'token'

export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) return token
    else return false
}
