<!--
 * @Author: your name
 * @Date: 2022-04-22 11:19:00
 * @LastEditTime: 2022-05-09 11:31:40
 * @LastEditors: csj 2436756336@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\views\dashboard\index.vue
-->
<template>
  <div>
    <Card></Card>
    <Sale>></Sale>
    <Observe>></Observe>
    </div>
    
</template>

<script>
import Card from './Card'
import Sale from './Sale'
import Observe from './Observe'
export default {
  name: '',
  components:{
    Card,
    Sale,
    Observe,
  },
  mounted(){
    this.$store.dispatch('getData')
  }
 
}
</script>

<style scoped>

</style>