import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/Home.vue';
import Sort from '../components/sort/Sort.vue';
import Category from '../components/category/Category.vue';

Vue.use(Router)

export default new Router({
  routes: [
  {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/bang',
        component: Sort
    },
    {
        path: '/category',
        component: Category
    }
  ]
})
