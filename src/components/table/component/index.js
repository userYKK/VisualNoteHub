/*
 * @Author: your name
 * @Date: 2021-11-27 17:34:07
 * @LastEditTime: 2021-11-27 17:38:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /nanxianweb/src/view/v-components/index.js
 */
const files = require.context('./', false, /\.vue$/)
const modules = {}
files.keys().forEach(filePath => {
  const file = files(filePath)
  const componentName = file.default.name
  modules[componentName] = file.default || file
})
export default modules
