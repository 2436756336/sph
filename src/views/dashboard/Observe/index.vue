<!--
 * @Author: csj 2436756336@qq.com
 * @Date: 2022-05-09 08:05:59
 * @LastEditors: csj 2436756336@qq.com
 * @LastEditTime: 2022-05-09 09:05:11
 * @FilePath: \vue-admin-template-master\src\views\dashboard\Observe\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-card>
      <el-row :gutter="10">
        <el-col :span="12">
          <Search></Search>
        </el-col>
        <el-col :span="12">
          <Category></Category>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Search from "./Search";
import Category from "./Category";
export default {
  name: "",
  components: {
    Search,
    Category,
  },
};
</script>

<style  scoped>
</style>