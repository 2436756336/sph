/*
 * @Author: your name
 * @Date: 2022-04-23 13:20:01
 * @LastEditTime: 2022-05-01 09:20:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \后台管理\vue-admin-template-master\src\api\product\tradeMark copy 3.js
 */
//
import request from '@/utils/request'
//sku列表
export const reqSkuList =(page,limit) =>request({url:`/admin/product/list/${page}/${limit}`,method:'get'})
//上架sku
export const reqSale =(skuId) =>request({url:`/admin/product/onSale/${skuId}`,method:'get'})
//下架
export const reqCancel = (skuId) =>request({url:`/admin/product/cancelSale/${skuId}`,method:'get'})
//获取详情sku
export const reqSkuById = (skuId)=>request({url:`/admin/product/getSkuById/${skuId}`,method:'get'})