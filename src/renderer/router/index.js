import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/view/home.vue'
import login from '../components/view/login.vue'
import singn from '../components/view/singin.vue'
import main from '../components/content/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path: '/',
          name: 'login',
          component: login
        },{
          path: 'singn',
          name: 'singn',
          component: singn
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})
