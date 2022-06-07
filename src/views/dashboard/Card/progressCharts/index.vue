<!--
 * @Author: your name
 * @Date: 2022-05-02 10:02:01
 * @LastEditTime: 2022-05-02 11:44:24
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
          //最小值和最大值
          min:0,
          max:100,
      },
      yAxis: {
          //隐藏y轴
          show:false,
          //均分
          type:'category'
      },
      //系列
      series: [
        {
        //柱状图图
          type: "bar",
          data:[78],
          color:"yellowgreen",
          //柱状图宽度
          barWidth:10,
          //背景颜色
          showBackground:true,
          backgroundStyle:{
              color:"#eee"
          },
          //文本效果
          label:{
              show:true,
              //文本内容
              formatter:'|',
              //文本位置
              position:'right'
          }
        },
      ],
      grid:{
          left:0,
          top:0,
          right:0,
          bottom:0
      },
    });
  },
};
</script>

<style  scoped>


</style>