/*
 * @Author: csj 2436756336@qq.com
 * @Date: 2022-05-09 11:24:59
 * @LastEditors: csj 2436756336@qq.com
 * @LastEditTime: 2022-05-09 11:36:48
 * @FilePath: \vue-admin-template-master\src\store\modules\home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import mockRequest from "@/utils/mockRequest";

const state = {
    list:{}
};
const mutations = {
    GETDATA(state,list){
        state.list = list
    }
};
const actions = {
    //发请求获取首页的mock数据
    async getData({commit}){
        let result = await mockRequest.get('/home/list')
        if(result.code==20000){
            commit("GETDATA",result.data)
        }
    }
};
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}