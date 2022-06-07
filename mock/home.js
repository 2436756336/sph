/*
 * @Author: csj 2436756336@qq.com
 * @Date: 2022-05-09 11:08:19
 * @LastEditors: csj 2436756336@qq.com
 * @LastEditTime: 2022-05-09 11:10:41
 * @FilePath: \vue-admin-template-master\mock\home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const data = require('./data.json')
module.exports = [
  {
    url: '/home/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data
      }
    }
  }
]
