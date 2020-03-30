// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*import Vue from 'vue'
import App from './App'
import router from './router'
//引入IVIEW组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
//引入vue-easytable
import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

Vue.config.productionTip = false
import HelloWorld from '@/components/HelloWorld'
//定义路由表
const routes = [
  //将根URL加入到路由表并声明对应Hello组件.
  { path: '/', component: HelloWorld },
//对应About组件的路由地址
  { path: '/about', component: About }
]

// 创建路由器实例，并且传入`routes`变量作为路由。
// 你还可以传入别的参数，不过在这里尽量简单化就可以了
const routernew = new router({
  routes,
  mode: 'history'
})
//实例化Vue实例
new Vue({
  //定义Vue绑定的跟元素
  el: '#app',
  //用<App/>代替根元素
  template: '<App/>',
  //声明App组件，这样上面的<App/>元素就可以生效
  components: { App },
  //将上面声明的路由器传递到根Vue实例
  routernew
}).$mount('#app')//将这个实例挂载到id=app的根元素上*/
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
Vue.use(VueResource);
Vue.use(ElementUI);
// 导入vue实例
import Vue from 'vue'
//导入 App 组件
import App from './App'
//导入 vue router
import VueRouter from 'vue-router'
//告诉vue使用vue-router路由组件
Vue.use(VueRouter)
//引入IVIEW组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
//引入vue-easytable
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 组件 和分页组件
import {VTable,VPagination} from 'vue-easytable'

Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
//引入axios
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
//导入Hello组件
import Home from './components/Home'
//导入Aboiut组件
import About from './components/About'
//导入Aboiut组件
import Table from './components/TableMain'
import Texiao from './components/Texiao'
import o2048 from './components/2048'
import echart from './components/echarts01'
import test20200321 from './components/test20200321'
import login from './components/login'
//定义路由表
const routes = [
//对应Hello组件的路由地址
  { path: '/', component: Home },
//对应About组件的路由地址
  { path: '/about', component: About },
//对应About组件的路由地址
  { path: '/table', component: Table },
//对应texiao组件的路由地址
  { path: '/texiao', component: Texiao },
//对应texiao组件的路由地址
  { path: '/o2048', component: o2048 },
//对应texiao组件的路由地址
  { path: '/echart', component: echart },
//对应texiao组件的路由地址
  { path: '/test20200321', component: test20200321 },
//对应texiao组件的路由地址
  { path: '/login', component: login }
]

// 创建路由器实例，并且传入`routes`变量作为路由。
// 你还可以传入别的参数，不过在这里尽量简单化就可以了
const router = new VueRouter({
  routes,
  mode: 'history'
})
const main_path='http://localhost:8081/'
//实例化Vue实例
new Vue({
  //定义Vue绑定的跟元素
  el: '#app',
  //用<App/>代替根元素
  template: '<App/>',
  //声明App组件，这样上面的<App/>元素就可以生效
  components: { App },
  //将上面声明的路由器传递到根Vue实例
  router
}).$mount('#app')//将这个实例挂载到id=app的根元素上
