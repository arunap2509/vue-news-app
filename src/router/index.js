// @ts-nocheck
import Vue from 'vue';
import VueRouter from 'vue-router';
// @ts-ignore
import Home from '../views/Home.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/news/:title',
    name: 'FullNews',
    component: () => import(/* webpackChunkName: "about" */ '../views/FullNews.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  // @ts-ignore
  base: process.env.BASE_URL,
  routes
})

export default router
