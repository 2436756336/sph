/*
 * @Author: your name
 * @Date: 2022-04-23 13:20:00
 * @LastEditTime: 2022-04-26 09:06:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \后台管理\vue-admin-template-master\src\api\product\tradeMark copy 2.js
 */
import request from '@/utils/request'
//获取一级分类数据
export const reqCategory1List =()=>request({url:'/admin/product/getCategory1',method:'get'})
//获取二级分类数据
export const reqCategory2List =(category1Id)=>request({url:`/admin/product/getCategory2/${category1Id}`,method:'get'})
//获取三级分类数据
export const reqCategory3List =(category2Id)=>request({url:`/admin/product/getCategory3/${category2Id}`,method:'get'})
//获取商品基础属性
export const reqAttrList=(category1Id,category2Id,category3Id)=>request({url:`/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,method:'get'})
//添加属性与属性值接口
export const reqAddOrUpdateAttr=(data)=>request({url:'/admin/product/saveAttrInfo',method:'post',data})