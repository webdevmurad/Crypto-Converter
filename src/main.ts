import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main'
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
