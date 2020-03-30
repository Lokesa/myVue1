<template>
  <div id="vue_det">
      <h1>site:{{site}}</h1>
    <h1>url:{{url}}</h1>
    <h1>details:{{details}}</h1>
  </div>
</template>

<script>
    export default {
        name: "test20200321",
        data(){
            return{
                site:'菜鸟',
            url:'www.baidu.com',
                details:'测试'
            }
        }
    }
</script>

<style scoped>

</style>
