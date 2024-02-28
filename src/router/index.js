import Vue from 'vue'
import VueRouter from 'vue-router'
import PageBlog from '../components/PageBlog.vue'
import PageDetails from '../components/PageDetails.vue'
import PageHome from '../components/PageHome.vue'
import PageNotFound from '../components/PageNotFound.vue'
import PageProject from '../components/PageProject.vue'
import PageProjectDetails from '../components/PageProjectDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome
  },
  {
    path: '/blog',
    name: 'blog',
    component: PageBlog
  },
  {
    path: '/details',
    name: 'details',
    component: PageDetails
  },
  {
    path: '/project',
    name: 'project',
    component: PageProject
  },
  {
    path: '/projectdetails',
    name: 'projectdetails',
    component: PageProjectDetails
  },
  {
    path: '*',
    name: '404',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
