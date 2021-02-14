import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Meetings from '../views/Meetings.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import CheckIn from '../views/CheckIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/meetings',
    name: 'Meetings',
    component: Meetings
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/checkin/:userID/:meetingID',
    name: 'CheckIn',
    component: CheckIn
  }
]

const router = new VueRouter({
  routes
})

export default router
