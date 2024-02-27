import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from '../components/PageHome.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
