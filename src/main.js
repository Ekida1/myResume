// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui';
import {
  Button,
  Progress
} from 'element-ui';
import animate from 'animate.css';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'swiper/dist/css/swiper.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(animate);
Vue.use(Button);
Vue.use(Progress);
// Vue.use(BootstrapVue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
