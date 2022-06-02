import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductListView',
    component: ProductListView
  },
  {
    path: '/productDetails',
    name: 'ProductDetailsView',
    component: ProductDetailsView
  }
]

const router = new VueRouter({
  routes
})

export default router
