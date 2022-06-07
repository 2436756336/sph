<!--
 * @Author: your name
 * @Date: 2022-05-02 10:02:01
 * @LastEditTime: 2022-05-02 11:29:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\views\dashboard\Card\lineChart\index.vue
-->
<template>
  <div  ref="charts"  style="width:100%;height:100%"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  mounted() {
    //初始化echarts
    let lineCharts = echarts.init(this.$refs.charts);
    lineCharts.setOption({
      xAxis: {
          //隐藏x轴
          show:false,
          //均分
          type:'category'
      },
      yAxis: {
          //隐藏y轴
          show:false
      },
      //系列
      series: [
        {
        //柱状图图
          type: "bar",
          data:[10,7,33,12,48,9,29,10,44,33,22,8],
          color:"cyan",
        },
      ],
      grid:{
          left:0,
          top:0,
          right:0,
          bottom:0
      },
      tooltip:{}
    });
  },
};
</script>

<style  scoped>


</style>