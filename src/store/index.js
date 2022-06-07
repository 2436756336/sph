/*
 * @Author: csj 2436756336@qq.com
 * @Date: 2022-04-22 11:19:00
 * @LastEditors: csj 2436756336@qq.com
 * @LastEditTime: 2022-05-09 11:25:36
 * @FilePath: \vue-admin-template-master\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    home
  },
  getters
})

export default store
