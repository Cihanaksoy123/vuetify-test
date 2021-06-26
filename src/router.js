import Vue from 'vue'
import Router from 'vue-router'
import AddProduct from './views/AddProduct.vue'
import Products from './views/Products.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'add product',
      component: AddProduct
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    }
  ]
})
