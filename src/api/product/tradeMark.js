/*
 * @Author: your name
 * @Date: 2022-04-23 13:19:44
 * @LastEditTime: 2022-04-24 10:06:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \后台管理\vue-admin-template-master\src\api\product\tradeMark.js
 */
import request from '@/utils/request'
//获取品牌管理数据模块,获取品牌列表接口
export const reqTradeMarkList=(page,limit)=>request({url:`/admin/product/baseTrademark/${page}/${limit}`,method:'get'})
//处理添加品牌操作
export const reqAddOrUpdateTradeMark=(tradeMark)=>{
    if(tradeMark.id){
        //修改品牌
        return request({url:'/admin/product/baseTrademark/update',method:'put',data:tradeMark})
    }else{
        //新增品牌
        return request({url:'/admin/product/baseTrademark/save',method:'post',data:tradeMark})
    }
}
//删除品牌
export const reqDeleteTradeMark=(id)=>request({url:`/admin/product/baseTrademark/remove/${id}`,method:'delete'})