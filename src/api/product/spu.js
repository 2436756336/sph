/*
 * @Author: your name
 * @Date: 2022-04-23 13:19:57
 * @LastEditTime: 2022-04-30 11:16:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \后台管理\vue-admin-template-master\src\api\product\tradeMark copy.js
 */
import request from '@/utils/request'
//获取spu列表数据的接口
export const reqSpuList = (page, limit, category3Id) => request({ url: `/admin/product/${page}/${limit}`, method: 'get', params: { category3Id } })
//获取spu信息
export const reqSpu = (spuId) => request({ url: `/admin/product/getSpuById/${spuId}`, method: 'get' })
//获取品牌信息
export const reqTradeMarkList = () => request({ url: '/admin/product/baseTrademark/getTrademarkList', method: 'get' })
//获取spu图片
export const reqSpuImageList = (spuId) => request({ url: `/admin/product/spuImageList/${spuId}`, method: 'get' })
//获取销售属性
export const reqBaseSaleAttrList = () => request({ url: '/admin/product/baseSaleAttrList', method: 'get' })
//修改spu或者添加spu
export const reqAddOrUpdateSpu = (spuInfo) => {
    if (spuInfo.id) {
        return request({ url: '/admin/product/updateSpuInfo', method: 'post', data: spuInfo })
    } else {
        return request({ url: '/admin/product/saveSpuInfo', method: 'post', data: spuInfo })
    }
}
//删除spu接口
export const reqDeleteSpu=(spuId)=>request({url:`/admin/product/deleteSpu/${spuId}`,method:'delete'})

//获取图片的数据
export const reqSpuImageLIst = (spuId)=>request({url:`/admin/product/spuImageList/${spuId}`,method:'get'})
//获取销售属性的数据
export const reqSpuSaleAttrList = (spuId)=>request({url:`/admin/product/spuSaleAttrList/${spuId}`,method:'get'})
//获取平台属性的数据
export const reqAttrInfoList =(category1Id,category2Id,category3Id) =>request({url:`/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,method:'get'})
//添加sku
export const reqAddSku =(skuInfo)=>request({url:`/admin/product/saveSkuInfo`,method:'post',data:skuInfo})
//获取sku列表数据的接口
export const  reqSkuList=(spuId)=>request({url:`/admin/product/findBySpuId/${spuId}`,method:'get'})
