import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/videoDemo",
    name: "videoDemo",
    component: () => import("@/views/videoDemo.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
