import axios from 'axios'
import store from '@/store'

import router from '@/route'

const addErrorLog = errorInfo => {
  const {
    statusText,
    status,
    request: { responseURL }
  } = errorInfo
  const info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) {
    store.dispatch('addErrorLog', info)
  }
}

class HttpRequest {
  // eslint-disable-next-line no-use-before-define
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig() {
    const _t = '111' //getToken()
    const config = {
      baseURL: this.baseUrl
      // headers: {
      //   'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      // }
    }
    if (_t) {
      config.headers = {}
      config.headers['X-Auth-Token'] = _t
    } else {
      // router.push({
      //   name: 'login'
      // })
    }
    return config
  }

  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
    }
  }

  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        // 添加全局的loading...
        if (
          url.indexOf('/admin/login/code') < 0 &&
          !Object.keys(this.queue).length
        ) {
        }
        if (url.indexOf('/admin/login/code') < 0) {
          this.queue[url] = true
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        const _t = res.headers['x-auth-token']

        if (_t) {
          // setToken(_t)
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
              _t
            }
          }
          if (data.resMsg === '登录超时' || data.resCode === 10) {
            // setToken('')
            // router.push({
            //   name: 'login'
            // })
            return Promise.reject(data.resMsg)
          }
          return Promise.reject(data.resMsg)
        }
        return {
          data,
          status,
          _t
        }
      },
      error => {
        this.destroy(url)
        let errorInfo = error.response
        if (!errorInfo) {
          const {
            request: { statusText, status } = {},
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
        addErrorLog(errorInfo)
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
