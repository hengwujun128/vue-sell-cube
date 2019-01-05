<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
// 设置了alias,可以使用相对路径
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api'

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    VHeader
  },
  created () {
    getSeller().then(seller => {
      this.seller = seller
    })
  }
}
</script>
<style lang="stylus">
#app {
}
</style>
