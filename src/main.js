import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import VueRouter from 'vue-router';
import "@/assets/style/reset.scss";
Vue.use(VueRouter);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
