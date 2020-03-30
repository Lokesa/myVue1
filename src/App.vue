<template>
  <div id="app"  >
   <!-- <img src="./assets/logo.png" v-if="$route.path=='/table'">-->
    <!--<h1>111</h1>-->
    <Breadcrumb :style="{margin: '20px 0'}" separator="|">
      <BreadcrumbItem> <router-link v-bind:to="'/'">主页</router-link></BreadcrumbItem>
      <BreadcrumbItem><router-link v-bind:to="'/about'">关于</router-link></BreadcrumbItem>
      <BreadcrumbItem> <router-link v-bind:to="'/table'">表格</router-link></BreadcrumbItem>
      <BreadcrumbItem> <router-link v-bind:to="'/texiao'">图片</router-link></BreadcrumbItem>
      <BreadcrumbItem> <router-link v-bind:to="'/o2048'">2048</router-link></BreadcrumbItem>
      <BreadcrumbItem> <router-link v-bind:to="'/echart'">图表</router-link></BreadcrumbItem>
      <BreadcrumbItem> <router-link v-bind:to="'/test20200321'">测试20200321</router-link></BreadcrumbItem>
      <BreadcrumbItem> <router-link v-bind:to="'/login'">登录</router-link></BreadcrumbItem>
    </Breadcrumb>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
