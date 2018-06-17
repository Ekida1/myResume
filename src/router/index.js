import Vue from 'vue'
import Router from 'vue-router'
import HelloResume from '@/pages/HelloResume'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloResume',
    component: HelloResume
  }]
})
