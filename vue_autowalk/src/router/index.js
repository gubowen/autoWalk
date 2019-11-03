import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index.vue'
import Tortoise from '@/components/Tortoise/Tortoise.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tortoise',
      name: 'Tortoise',
      component: Tortoise
    }
  ]
})
