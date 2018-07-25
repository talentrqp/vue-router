//引入vue模块
import Vue from 'vue'
//引入路由模块
import VueRouter from 'vue-router'
//引入 app组件 根节点
import App from './App.vue'


//引入路由
import rqp from './components/rqp.vue';
import sdb from './components/sdb.vue'
// Vue.config.productionTip = false

//路由中间件
Vue.use(VueRouter)

//定义路由规则
const router = new VueRouter({
  routes: [{
      path: '/rqp',
      component: rqp
    },
    {
      path: '/sdb',
      component: sdb
    }
  ]
})
new Vue({
  render: h => h(App),
  //挂在路由规则
  router,
}).$mount('#app')