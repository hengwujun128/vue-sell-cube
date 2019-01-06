import {
  createAPI
} from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'components/header-detail/header-detail'
// import ShopCartList from 'components/shop-cart-list/shop-cart-list'
// import ShopCartStikcy from 'components/shop-cart-sticky/shop-cart-sticky'
// import Food from 'components/food/food'

//  可以通过 `createAPI` 创建自己的通过 API 形式实例化的组件
// 把组件实例作为 vue 实例的一个方法,一般通过 plugin 可以做到
createAPI(Vue, HeaderDetail)
// createAPI(Vue, ShopCartList)
// createAPI(Vue, ShopCartStikcy)
// createAPI(Vue, Food)
