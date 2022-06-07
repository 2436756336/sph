<!--
 * @Author: your name
 * @Date: 2022-04-26 14:49:04
 * @LastEditTime: 2022-04-29 16:14:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \后台管理\vue-admin-template-master\src\views\product\Spu\SpuForm\index.vue
-->
<template>
  <div>
    <el-form ref="form" label-width="80px" :model="spu">
      <el-form-item label="SPU名称">
        <el-input placeholder="SPU名称" v-model="spu.spuName"></el-input>
      </el-form-item>
      <el-form-item label="品牌">
        <el-select placeholder="请选择品牌" v-model="spu.tmId">
          <el-option
            :label="tm.tmName"
            :value="tm.id"
            v-for="(tm, index) in tradeMarkList"
            :key="tm.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="SPU描述">
        <el-input
          type="textarea"
          rows="4"
          placeholder="描述"
          v-model="spu.description"
        ></el-input>
      </el-form-item>
      <el-form-item label="SPU图片">
        <el-upload
          action="/dev-api/admin/product/fileUpload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handlerSuccess"
          :file-list="spuImageList"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <el-form-item label="销售属性">
        <el-select :placeholder="`还有${unSelectSaleAttr.length}未选择`" v-model="attrIdAndAttrName">
          <el-option :label="unselect.name" :value="`${unselect.id}:${unselect.name}`" v-for="(unselect,index) in unSelectSaleAttr" :key="unselect.id"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-plus" :disabled="!attrIdAndAttrName" @click="addSaleAttr">添加销售属性</el-button>
        <el-table style="width: 100%" border :data="spu.spuSaleAttrList">
          <el-table-column
            type="index"
            label="序号"
            width="80px"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="saleAttrName" label="属性名" width="width">
          </el-table-column>
          <el-table-column prop="prop" label="属性值名称列表" width="width">
            <template slot-scope="{ row, $index }">
              <el-tag :key="tag.id"  v-for="(tag,index) in row.spuSaleAttrValueList" closable :disable-transitions="false"  @close="row.spuSaleAttrValueList.splice(index,1)"> {{ tag.saleAttrValueName }} </el-tag>
              <!-- @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm" -->
              <el-input class="input-new-tag" v-if="row.inputVisible"  v-model="row.inputValue"  ref="saveTagInput" size="small" @blur="handlerInputConfirm(row)">
              </el-input>
              <!-- @click="showInput" -->
              <el-button v-else class="button-new-tag"  size="small" @click="addSaleAttrValue(row)">添加</el-button >
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="width">
            <template slot-scope="{row,$index}">
              <el-button type="danger" icon="el-icon-delete" size="mini" @click="spu.spuSaleAttrList.splice($index,1)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addOrUpdateSpu">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SpuForm",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      //spu信息属性数据
      spu: {
        //三级分类id
        category3Id: 0,
        //描述
        description: "",
        //spu名称
        spuName: "",
        //平台id
        tmId: "",
        //收集spu图片信息
        spuImageList: [
          // {
          //   id:0,
          //   imaName:"string",
          //   imgUrl:"string",
          //   spuId:0,
          // },
        ],
        spuSaleAttrList: [
          // {
          //   baseSaleAttrId:0,
          //   id:0,
          //   saleAttrName:"string",
          //   skuId:0,
          //   spuSaleAttrValueList:[
          //     {
          //       baseSaleAttrId:0,
          //       id:0,
          //       isChecked:"string",
          //       saleAttrName:"string",
          //       saleAttrValueName:"string",
          //       spuId:0,
          //     },
          //   ],
          // }
        ],
      },
      tradeMarkList: [], //存储品牌信息
      spuImageList: [], //存储spu图片数据
      saleAttrList: [], //销售属性数据
      attrIdAndAttrName:''//收集未选择属性的id
    };
  },
  methods: {
    //照片墙上传某一个图片的时候会触发
    handleRemove(file, fileList) {
      this.spuImageList = fileList
    },
    //照片墙图片预览的回调
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //初始化spuform数据
    async initSpuData(spu) {
      //获取spu信息
      let spuResult = await this.$API.spu.reqSpu(spu.id);
      if (spuResult.code === 200) {
        this.spu = spuResult.data;
      }
      //获取品牌信息
      let tradeMarkResult = await this.$API.spu.reqTradeMarkList();
      if (tradeMarkResult.code == 200) {
        this.tradeMarkList = tradeMarkResult.data;
      }
      //获取spu图片
      let spuImageResult = await this.$API.spu.reqSpuImageList(spu.id);
      if (spuImageResult.code == 200) {
        let listArr = spuImageResult.data;
        listArr.forEach((item) => {
          item.name = item.imgName;
          item.url = item.imageUrl;
          //将整理好的数据赋值给
          this.spuImageList = listArr;
        });
      }
      //获取平台全部的销售属性
      let saleResult = await this.$API.spu.reqBaseSaleAttrList();
      if (saleResult.code == 200) {
        this.saleAttrList = saleResult.data;
      }
    },
    //照片墙上传成功的回调
    handlerSuccess(response,file,fileList){
      this.spuImageList = fileList
    },
    //添加新的销售属性
    addSaleAttr(){
      //把已经收集到的数据进行分割
      const [baseSaleAttrId,saleAttrName] = this.attrIdAndAttrName.split(':')
      //向spu对象的spuSaleAttrList属性里面添加新的销售属性
      let newSaleAttr = {baseSaleAttrId,saleAttrName,spuSaleAttrValueList:[]}
      //添加新的属性
      this.spu.spuSaleAttrList.push(newSaleAttr)
      this.attrIdAndAttrName = ''
    },
    //添加按钮的回调
    addSaleAttrValue(row){
      //点击添加按钮，按钮变输入
      this.$set(row,'inputVisible',true)
      //通过响应式数据，收集新增加的销售属性
      this.$set(row,'inputValue','')
    },
    //el-input失去焦点事件
    handlerInputConfirm(row){
      //解构出销售属性当中收集数据
      const {baseSaleAttrId,inputValue} = row
      //新增属性值为空的情况
      if(inputValue.trim()==''){
        this.$message('属性值不能为空')
        return
      }
      //属性值重复的情况
      let result = row.spuSaleAttrValueList.every(item=>item.saleAttrValueName!=inputValue)
      if(!result) return
      //新增的销售属性值
      let newSaleAttrValue = {baseSaleAttrId,saleAttrValueName:inputValue}
      //显示button
      row.spuSaleAttrValueList.push(newSaleAttrValue)
      row.inputVisible = false
    },
    //保存按钮回调
    async addOrUpdateSpu(){
      //整理参数
      this.spu.spuImageList = this.spuImageList.map(item=>{
        return{
          imageName:item.name,
          imageUrl:(item.response&&item.response.data)||item.url
        }
      })
      //发请求
      let result = await this.$API.spu.reqAddOrUpdateSpu(this.spu)
      if(result.code==200){
        //提示
        this.$message({type:'success',message:'保存成功'})
        //通知父组件回到场景0
        this.$emit('changeScene',{scene:0,flag:this.spu.id?'修改':'添加'})
      }
      //清除数据
      Object.assign(this._data,this.$options.data())
    },
    async addSpuData(category3Id){
      //添加spu的时候收集三级分类的id
      this.spu.category3Id = category3Id
      //获取品牌信息
      let tradeMarkResult = await this.$API.spu.reqTradeMarkList();
      if (tradeMarkResult.code == 200) {
        this.tradeMarkList = tradeMarkResult.data;
      }
      //获取平台全部的销售属性
      let saleResult = await this.$API.spu.reqBaseSaleAttrList();
      if (saleResult.code == 200) {
        this.saleAttrList = saleResult.data;
      }
    },
    //取消按钮
    cancel(){
      //取消按钮回调，恢复场景为0
      this.$emit('changeScene', {scene:0,flag:''})
      //清除数据
      //Obiect.assign:es6中可以合并对象的方法
      //this._data,可以操作data当中响应式数据
      //this.$options可以获取配置对象，配置对象的data函数执行，返回的响应式数据为空
      Object.assign(this._data,this.$options.data())
    }
  },
  computed:{
    //计算出为选择的销售属性
    unSelectSaleAttr(){
      let result =this.saleAttrList.filter((item)=>{
        return this.spu.spuSaleAttrList.every((item1)=>{
          return item.name !=item1.saleAttrName
        })
      })
      return result
    }
  }
};
</script>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>