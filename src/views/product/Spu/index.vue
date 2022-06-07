<!--
 * @Author: your name
 * @Date: 2022-04-22 15:32:59
 * @LastEditTime: 2022-04-30 17:17:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \后台管理\vue-admin-template-master\src\views\product\Spu\index.vue
-->
<template>
  <div>
    <el-card style="margin: 20px 0">
      <CategorySelect
        @getCategoryId="getCategoryId"
        :show="scene != 0"
      ></CategorySelect>
    </el-card>
    <el-card>
      <div v-show="scene == 0">
        <!-- 展示spu列表 -->
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!category3Id"
          @click="addSpu"
          >添加SPU</el-button
        >
        <el-table style="width: 100%" border :data="records">
          <el-table-column
            type="index"
            label="序号"
            width="80px"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="spuName" label="spu名称" width="width">
          </el-table-column>
          <el-table-column prop="description" label="spu描述" width="width">
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="width">
            <template slot-scope="{ row, $index }">
              <hint-button
                type="success"
                icon="el-icon-plus"
                size="mini"
                title="添加sku"
                @click="addSku(row)"
              ></hint-button>
              <hint-button
                type="warning"
                icon="el-icon-edit"
                size="mini"
                title="修改spu"
                @click="updateSpu(row)"
              ></hint-button>
              <hint-button
                type="info"
                icon="el-icon-info"
                size="mini"
                title="查看当前spu所有sku列表"
                @click="handler(row)"
              ></hint-button>
              <el-popconfirm
                title="这是一段内容确定删除吗？"
                @onConfirm="deleteSpu(row)"
              >
                <hint-button
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  title="删除spu"
                  slot="reference"
                ></hint-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          style="text-algin: center"
          @current-change="getSpuList"
          @size-change="handleSizeChange"
          :current-page="page"
          :page-sizes="[3, 5, 10]"
          :page-size="limit"
          layout="prev, pager, next, jumper,->,sizes,total"
          :total="total"
        >
        </el-pagination>
      </div>
      <SpuForm v-show="scene == 1" @changeScene="changeScene" ref="spu"
        >添加、、修改</SpuForm
      >
      <SkuForm v-show="scene == 2" ref="sku" @changescenes="changescenes"
        >添加</SkuForm
      >
    </el-card>
    <el-dialog :title="`${spu.spuName}的sku列表`" :visible.sync="dialogTableVisible" :before-close="close">
        <el-table :data="skuList" style="width:100%" border v-loading="loading">  
            <el-table-column   prop="skuName" label="名称" >
            </el-table-column>
            <el-table-column  prop="price"  label="价格" >
            </el-table-column>
            <el-table-column  prop="weight" label="重量" >
            </el-table-column>
            <el-table-column  label="默认图片" >
             <template slot-scope="{row,$idnex}">
                 <img :src="row.skuDefaultImg" style="width:100px;height:100px">
             </template>
            </el-table-column>
        </el-table>
    </el-dialog>
  </div>
</template>

<script>
import SpuForm from "./SpuForm";
import SkuForm from "./SkuForm";
export default {
  name: "Spu",
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",

      page: 1,
      limit: 3,
      records: [],
      total: 0,
      scene: 0, //默认为0
      //控制对话框的显示和隐藏
      dialogTableVisible:false,
      spu:{},
      skuList:[],
      loading:true
    };
  },
  components: {
    SpuForm,
    SkuForm,
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
        this.getSpuList();
      }
    },
    //获取spu列表数据方法
    async getSpuList(pages = 1) {
      this.page = pages;
      const { page, limit, category3Id } = this;
      let result = await this.$API.spu.reqSpuList(page, limit, category3Id);
      if (result.code == 200) {
        this.total = result.data.total;
        this.records = result.data.records;
      }
    },
    handleSizeChange(limit) {
      this.limit = limit;
      this.getSpuList();
    },
    //添加spu按钮
    addSpu() {
      this.scene = 1;
      this.$refs.spu.addSpuData(this.category3Id);
    },
    updateSpu(row) {
      this.scene = 1;
      this.$refs.spu.initSpuData(row);
    },
    changeScene({ scene, flag }) {
      this.scene = scene;
      if (flag == "修改") {
        this.getSpuList(this.page);
      } else {
        this.getSpuList();
      }
    },
    //删除按钮
    async deleteSpu(row) {
      let result = await this.$API.spu.reqDeleteSpu(row.id);
      if (result.code == 200) {
        this.$message({ type: "success", message: "删除成功" });
        //spu个数大于1的时候删除之后停留当前页，个数小于1，删除之后回到上一页
        this.getSpuList(this.records.length > 1 ? this.page : this.page - 1);
      }
    },
    //添加sku按钮
    addSku(row) {
      this.scene = 2;
      this.$refs.sku.getData(this.category1Id, this.category2Id, row);
    },
    //修改场景
    changescenes(scene) {
      this.scene = scene;
    },
    //查看sku列表按钮
    async handler(spu){
        //点击按钮，显示对话框
        this.dialogTableVisible=true
        //保存spu信息
        this.spu = spu
        //获取sku列表的数据进行展示
        let result = await this.$API.spu.reqSkuList(spu.id)
        if(result.code==200){
            this.skuList = result.data
            //loading隐藏
            this.loading = false
        }
    },
    close(done){
        this.loading = true
        this.skuList = []
        done()
    }
  },
};
</script>

<style  scoped>
</style>