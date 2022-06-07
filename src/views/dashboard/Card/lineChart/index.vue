<!--
 * @Author: your name
 * @Date: 2022-05-02 10:02:01
 * @LastEditTime: 2022-05-02 11:10:23
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
          type:'category'
      },
      yAxis: {
          //隐藏y轴
          show:false
      },
      //系列
      series: [
        {
        //折线图
          type: "line",
          data:[10,7,33,12,48,9,29,10,44],
          //平滑效果
          smooth:true,
          //拐点样式
          itemStyle:{
              opacity:0
          },
          //折线颜色
          lineStyle:{
              color:"purple"
          },
          //填充颜色
          areaStyle:{
              color:{
                  type:"linear",
                  x:0,
                  y:0,
                  x2:0,
                  y2:1,
                  //渐变
                  colorStops:[
                      {
                          offset:0,
                          color:"purple"
                      },
                      {
                          offset:1,
                          color:"white"
                      }
                  ],
                  global:false
              }
          }
        },
      ],
      grid:{
          left:0,
          top:0,
          right:0,
          bottom:0
      }
    });
  },
};
</script>

<style  scoped>


</style>