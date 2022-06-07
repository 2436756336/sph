<!--
 * @Author: your name
 * @Date: 2022-04-22 15:32:58
 * @LastEditTime: 2022-04-29 14:25:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \后台管理\vue-admin-template-master\src\views\product\Attr\index.vue
-->
<template>
  <div>
    <el-card style="margin: 20px 0px">
      <CategorySelect @getCategoryId="getCategoryId" :show="!isShowTable"></CategorySelect>
    </el-card>

    <el-card>
      <div v-show="isShowTable">
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!category3Id"
          @click="addAttr"
          >添加属性</el-button
        >
        <el-table style="width: 100%" border :data="attrList">
          <el-table-column
            type="index"
            label="序号"
            width="80px"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="attrName" label="属性名称" width="150px">
          </el-table-column>
          <el-table-column prop="prop" label="属性值列表" width="width">
            <template slot-scope="{ row, $index }">
              <el-tag
                type="success"
                v-for="(attrValue, index) in row.attrValueList"
                :key="attrValue.id"
                style="margin: 0px 20px"
                >{{ attrValue.valueName }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="150px">
            <template slot-scope="{ row, $index }">
              <el-button
                type="warning"
                icon="el-icon-edit"
                size="mini"
                @click="updateAttr(row)"
              ></el-button>
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 添加属性 -->
      <div v-show="!isShowTable">
        <el-form :inline="true" ref="form" label-width="80px" :model="attrInfo">
          <el-form-item label="属性名">
            <el-input
              placeholder="请输入属性名"
              v-model="attrInfo.attrName"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          icon="el-icon-plus"
          @click="addAttrValue"
          :disabled="!attrInfo.attrName"
          >添加属性</el-button
        >
        <el-button @click="isShowTable = true">取消</el-button>
        <el-table
          style="width: 100%"
          margin="20px 0px"
          border
          :data="attrInfo.attrValueList"
        >
          <el-table-column
            align="center"
            type="index"
            label="序号"
            width="80px"
          >
          </el-table-column>
          <el-table-column label="属性值名称" width="width">
            <template slot-scope="{ row, $index }">
              <el-input
                v-model="row.valueName"
                placeholder="请输入属性值名称"
                size="mini"
                v-if="row.flag"
                @blur="toLook(row)"
                @keyup.native.enter="toLook(row)"
                :ref="$index"
              ></el-input>
              <span
                v-else
                @click="toEdit(row, $index)"
                style="display: block"
                >{{ row.valueName }}</span
              >
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="width">
            <template slot-scope="{ row, $index }">
              <el-button type="danger" icon="el-icon-delete" size="mini" slot="reference">
              </el-button>
              <el-popconfirm :title="`确定删除${row.valueName}？`" @onConfirm="deleteAttrValue($index)">
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="addOrUpdateAttr"  :disabled="attrInfo.attrValueList.length<1">保存</el-button>
        <el-button @click="isShowTable = true">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
//引入lodash中的深拷贝
import cloneDeep from "lodash/cloneDeep";
export default {
  name: "Attr",
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      flag: true,
      attrList: [],
      isShowTable: true,
      attrInfo: {
        attrName: "",
        attrValueList: [
          //属性值,每一个属性值都是一个对象
        ],
        categoryId: 0, //三级分类id
        categoryLevel: 3,
      },
    };
  },
  methods: {
    getCategoryId({ categoryId, level }) {
      if (level == 1) {
        this.category1Id = categoryId;
        this.category2Id = "";
        this.category3Id = "";
      } else if (level == 2) {
        this.category2Id = categoryId;
        this.category3Id = "";
      } else {
        this.category3Id = categoryId;
        //发请求获取品牌属性
        this.getAttrList();
      }
    },
    //获取平台属性
    async getAttrList() {
      const { category1Id, category2Id, category3Id } = this;
      let result = await this.$API.attr.reqAttrList(
        category1Id,
        category2Id,
        category3Id
      );
      if (result.code == 200) {
        this.attrList = result.data;
      }
    },
    //添加属性值回调
    addAttrValue() {
      this.attrInfo.attrValueList.push({
        attrId: this.attrInfo.id,
        valueName: "",
        flag: true,
      });
      this.$nextTick(() => {
        this.$refs[this.attrInfo.attrValueList.length - 1].focus();
      });
    },
    //添加属性按钮回调
    addAttr() {
      (this.isShowTable = false),
        (this.attrInfo = {
          attrName: "",
          attrValueList: [
            //属性值,每一个属性值都是一个对象
          ],
          categoryId: this.category3Id, //三级分类id
          categoryLevel: 3,
        });
    },
    //修改某一个属性
    updateAttr(row) {
      this.isShowTable = false;
      //数据结构中存在数据里面套数组
      this.attrInfo = cloneDeep(row);
      this.attrInfo.attrValueList.forEach((item) => {
        this.$set(item, "flag", false);
      });
    },
    //失去焦点，变为查看模式
    toLook(row) {
      if (row.valueName.trim() == "") {
        this.$message("请你输入一个正常的属性值");
        return;
      }
      let isRepat = this.attrInfo.attrValueList.some((item) => {
        if (row !== item) {
          return row.valueName == item.valueName;
        }
      });
      if (isRepat) return;
      row.flag = false;
    },
    //点击span的回调，变为编辑模式
    toEdit(row, index) {
      row.flag = true;
      this.$nextTick(() => {
        this.$refs[index].focus();
      });
    },
    //气泡确认框按钮回调
    deleteAttrValue(index){
      this.attrInfo.attrValueList.splice(index,1)
    },
    //保存按钮
    async addOrUpdateAttr(){
      //整理参数1.用户添加属性值为空，不提交服务器
      //        2.属性值不出现flag
       this.attrInfo.attrValueList =this.attrInfo.attrValueList.filter(item=>{
        if(item.valueName!=''){
          delete item.flag
          return true
        }
      })
      try {
        //发请求
        await this.$API.attr.reqAddOrUpdateAttr(this.attrInfo)
        this.isShowTable=true
        this.$message({type:'success',message:'保存成功'})
        //保存成功以后再次1获取平台属性展示
        this.getAttrList()
      } catch (error) {
        
      }
    }
    
  },
};
</script>

<style  scoped>
</style>