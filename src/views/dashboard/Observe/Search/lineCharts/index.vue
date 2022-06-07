<!--
 * @Author: csj 2436756336@qq.com
 * @Date: 2022-05-09 08:28:17
 * @LastEditors: csj 2436756336@qq.com
 * @LastEditTime: 2022-05-09 10:06:58
 * @FilePath: \vue-admin-template-master\src\views\dashboard\Observe\Search\lineCharts\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="header">
      <span class="search-header">搜索用户数</span>
      <svg
        t="1651453937793"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2097"
        width="26"
        height="26"
      >
        <path
          d="M950.381817 509.759983c0-242.11834-196.265012-438.384375-438.382329-438.384375-242.11834 0-438.382329 196.266036-438.382329 438.384375 0 242.12755 196.263989 438.392562 438.382329 438.392562 99.394754 0 190.403514-33.816177 263.941368-89.542362 3.0208-3.427052 5.004991-7.79964 5.004991-12.716626 0-10.729365-8.701173-19.431561-19.431561-19.431561-5.570879 0-10.529821 2.209318-14.068414 5.950526l-0.248663 0c-65.804728 48.423873-146.803507 77.415161-234.767931 77.415161-219.23619 0-396.992663-177.780009-396.992663-397.002896 0-219.260749 177.756473-396.99471 396.992663-396.99471 219.258703 0 396.99164 177.73396 396.99164 396.99471 0 66.952878-15.712867 129.98547-45.01831 185.352475l0 0.326435c-0.541329 1.849114-1.127683 3.65218-1.127683 5.636371 0 10.731412 8.701173 19.431561 19.431561 19.431561 8.363482 0 15.35164-5.363148 18.080797-12.759605l0 0.135076C932.008354 650.610918 950.381817 582.350255 950.381817 509.759983zM539.389302 397.050991c0-12.668531-10.32516-22.981411-23.038716-22.981411-12.670577 0-22.973224 10.31288-22.973224 22.981411l0 328.054571c0 12.670577 10.302647 22.994714 22.995737 22.994714 12.713556 0 23.016203-10.324136 23.016203-22.994714 0-0.044002-0.044002-0.091074-0.044002-0.134053L539.3453 397.209604C539.3453 397.164578 539.389302 397.098064 539.389302 397.050991zM516.395612 276.43082c-12.895705 0-23.333428 10.392698-23.333428 23.299659 0 12.875239 10.437723 23.310915 23.333428 23.310915 12.849656 0 23.309892-10.4367 23.309892-23.310915C539.705504 286.823518 529.244244 276.43082 516.395612 276.43082z"
          p-id="2098"
          fill="#cdcdcd"
        ></path>
      </svg>
    </div>
    <div class="main">
      <span class="main-title">12321</span>
      <span class="main-content">17.1</span>
      <svg
        t="1651455198962"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2059"
        width="16"
        height="16"
      >
        <path
          d="M512 85.333333l249.6 298.666667H262.4z"
          fill="#d81e06"
          p-id="2060"
        ></path>
        <path
          d="M426.666667 320h170.666666v576h-170.666666z"
          fill="#d81e06"
          p-id="2061"
        ></path>
      </svg>
      <svg
        t="1651455235001"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3548"
        width="16"
        height="16"
      >
        <path
          d="M512 938.666667L262.4 640h499.2z"
          fill="#1afa29"
          p-id="3549"
        ></path>
        <path
          d="M426.666667 128h170.666666v576h-170.666666z"
          fill="#1afa29"
          p-id="3550"
        ></path>
      </svg>
    </div>
    <div class="footer">
        <div class="charts" ref="charts"></div>
    </div>
  </div>
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
              color:"blue"
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
                          color:"blue"
                      },
                      {
                          offset:1,
                          color:"#fff"
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

<style scoped>
.header {
  display: flex;
  align-items: center;
}
.search-header {
  margin-right: 20px;
}
.main{
    margin:10px 0px;
}
.main-title{
    margin-right: 30px;
}
.main-content{
    margin-right: 10px;
}
.charts{
    width: 100%;
    height: 50px;
}
</style>