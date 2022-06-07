/*
 * @Author: your name
 * @Date: 2022-04-23 13:27:27
 * @LastEditTime: 2022-04-23 13:30:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \后台管理\vue-admin-template-master\src\api\index.js
 */

//将四个模块接口统一暴露
import * as trademark from './product/tradeMark'
import * as attr from './product/attr'
import * as spu from './product/spu'
import * as sku from './product/sku'
//对外暴露
export default {
    trademark,
    attr,
    spu,
    sku
}