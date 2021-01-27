import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from  "../views/Mine.vue";
import Place from "../views/place.vue"
import City from "../views/City.vue"
import Movie from "../views/Movie.vue"
import search from "../views/search.vue"
import login from "../components/mine/login.vue"
import Register from "../components/mine/Register.vue"
import Loginin from "../components/mine/Loginin.vue"
import setup from "../components/mine/setup.vue"
import newmovies from "../components/Home/newmovies"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie',
    name: 'Movie',
   component:Movie
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
  }, 
  {
    path:"/search",
    name:"search",
    component:search
  },
  {
    path:"/login",
    name:"login",
    component:login
  }, {
    path:"/Register",
    name:"Register",
    component:Register
  }, {
    path:"/Loginin",
    name:"Loginin",
    component:Loginin
  },{
    path:"/setup",
    name:"setup",
    component:setup
  },
  {
    path:"/newmovies",
    name:"newmovies",
    component:newmovies
  },

]

const router = new VueRouter({
  routes
})

export default router
