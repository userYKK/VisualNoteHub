import axios from 'axios'
import { setToken, getToken } from './util.js'


class HttpRequest {
    // eslint-disable-next-line no-use-before-define
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }

    getInsideConfig() {
        const _t = getToken()
        const config = {
            baseURL: this.baseUrl,
        }
        if (_t) {
            config.headers = {}
            config.headers['x-validate-token'] = _t
        }
        return config
    }

    destroy(url) {
        delete this.queue[url]
    }

    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(
            config => {
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )
        // 响应拦截
        instance.interceptors.response.use(
            res => {

                const _t = res.headers['x-validate-token']

                if (_t) {
                    setToken(_t)
                }
                const { data, status } = res
                setTimeout(() => {
                    this.destroy(url)
                }, 200)
                if (data.resCode !== undefined) {
                    if (data.code === data.resCode) {
                        return {
                            data,
                            status,
                        }
                    }
                    return Promise.reject(data.resMsg)
                }
                return {
                    data,
                    status,
                }
            },
            error => {
                this.destroy(url)
                let errorInfo = error.response
                if (!errorInfo) {
                    const {
                        request: { statusText, status },
                        config
                    } = JSON.parse(JSON.stringify(error))
                    errorInfo = {
                        statusText,
                        status,
                        request: {
                            responseURL: config.url
                        }
                    }
                }
                return Promise.reject(error)
            }
        )
    }

    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
export default HttpRequest
