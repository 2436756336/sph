<!--
 * @Author: your name
 * @Date: 2022-04-26 14:00:21
 * @LastEditTime: 2022-04-26 14:05:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \后台管理\vue-admin-template-master\src\components\HintButton\index.vue
-->
<template>
    <a :title="title" style="margin:10px">
        <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    </a>
</template>

<script>
export default {
    name: 'HintButton',
    props:["title"]

};
</script>

<style scoped>

</style>