/*
 * @Author: kk
 * @Date: 2020-09-11 23:38:58
 * @LastEditTime: 2021-11-27 16:48:15
 * @LastEditors: Please set LastEditors
 * @FilePath: \exam_frontent\src\config\index.js
 * @signature: talk is cheap,show me the code
 * @Description:
 */
export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'gpt',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'http://gpt-api.jtbjb.com',
    pro: 'http://gpt-api.jtbjb.com'
  },
}
