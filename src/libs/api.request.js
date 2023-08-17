import HttpRequest from '@/libs/axios'
// import config from '@/config'
const baseUrl = 'http://testapi.teacode.top:80'//process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios
