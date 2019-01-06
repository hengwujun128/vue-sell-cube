<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <!-- 所有的内容都是在tab-wrapper 中实现 -->
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
// 设置了alias,可以使用相对路径
import VHeader from 'components/v-header/v-header'

import Tab from 'components/tab/tab'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'

import { getSeller } from 'api'

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    VHeader,
    Tab
  },
  computed: {
    tabs () {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评论',
          component: Ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
  created () {
    getSeller().then(seller => {
      this.seller = seller
    })
  }
}
</script>
<style lang="stylus" scoped>
// 在 scope 中修改 第三方组件
#app {
  .tab-wrapper {
    position: fixed;
    top: 136px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
