<!--
 * @Author: your name
 * @Date: 2022-05-02 08:57:19
 * @LastEditTime: 2022-05-02 11:33:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\views\dashboard\Card\index.vue
-->
<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail title="总销售额" count="￥ 126560">
              <template slot="charts">
                  <span>周同比&nbsp;&nbsp;56.67%<svg t="1651455198962" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2059" width="16" height="16"><path d="M512 85.333333l249.6 298.666667H262.4z" fill="#d81e06" p-id="2060"></path><path d="M426.666667 320h170.666666v576h-170.666666z" fill="#d81e06" p-id="2061"></path></svg></span>
                  &nbsp;&nbsp;
                  <span>日同比&nbsp;&nbsp;19.96%<svg t="1651455235001" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3548" width="16" height="16"><path d="M512 938.666667L262.4 640h499.2z" fill="#1afa29" p-id="3549"></path><path d="M426.666667 128h170.666666v576h-170.666666z" fill="#1afa29" p-id="3550"></path></svg></span>
              </template>
              <template slot="footer">
                  <span>日销售额￥ 12423</span>
              </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
          <el-card>
          <Detail title="访问量" count="88460">
              <template slot="charts">
                 <lineCharts></lineCharts>
              </template>
              <template slot="footer">
                  <span>日访问量 1234</span>
              </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
          <el-card>
          <Detail title="支付笔数" count="88460">
              <template slot="charts">
                 <barCharts></barCharts>
              </template>
              <template slot="footer">
                  <span>转化率65%</span>
              </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
          <el-card>
          <Detail title="运营活动效果" count="78%">
              <template slot="charts">
                 <progressCharts></progressCharts>
              </template>
              <template slot="footer">
                  <span>周同比&nbsp;&nbsp;56.67%<svg t="1651455198962" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2059" width="16" height="16"><path d="M512 85.333333l249.6 298.666667H262.4z" fill="#d81e06" p-id="2060"></path><path d="M426.666667 320h170.666666v576h-170.666666z" fill="#d81e06" p-id="2061"></path></svg></span>
                  &nbsp;&nbsp;
                  <span>日同比&nbsp;&nbsp;19.96%<svg t="1651455235001" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3548" width="16" height="16"><path d="M512 938.666667L262.4 640h499.2z" fill="#1afa29" p-id="3549"></path><path d="M426.666667 128h170.666666v576h-170.666666z" fill="#1afa29" p-id="3550"></path></svg></span>
              </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "./Detail";
import lineCharts from './lineChart'
import barCharts from './barCharts'
import progressCharts from './progressCharts'
export default {
  name: "",
  components: {
    Detail,
    lineCharts,
    barCharts,
    progressCharts
  },
};
</script>

<style scoped>
</style>