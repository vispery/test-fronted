// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import index from "./components/index";


Vue.prototype.$http = axios;
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: "/", component: index},
  ],
  mode: "history"
});

/* eslint-disable no-new */
new Vue({
  router,
  ElementUI,
  axios,
  el: '#app',
  components: {App},
  template: '<App/>'
})
