import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from  "../views/Mine.vue";
import Place from "../views/place.vue"
import City from "../views/City.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path:"/city",
    name:"City",
    component:City
  }, 
  {
    path:"/place",
    name:"Place",
    component:Place
  },
  {
    path:"/mine",
    name:"mine",
    component:Mine
  }

]

const router = new VueRouter({
  routes
})

export default router
