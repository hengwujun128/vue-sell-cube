<template>
  <div class="star" :class="starType">
    <span
      v-for="(itemClass,index) in itemClasses"
      :class="itemClass"
      class="star-item"
      :key="index"
    ></span>
  </div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType () {
      return 'star-' + this.size
    },
    // 星星算法
    itemClasses () {
      let result = []
      //  得分换算,获取整数
      // 4.6,4.3
      // 小于0.5 ,乘以2 ,向下取整得到是整数;大于0.5,乘以2 向下取整得到 .5
      // 此算法 获取整数和.5的数字
      const score = Math.floor(this.score * 2) / 2
      // 取整数部分
      const hasDecimal = score % 1 !== 0
      // 取小数部分
      const integer = Math.floor(score)
      // 整个星,点亮的全星
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }
      // 半个星
      if (hasDecimal) {
        result.push(CLS_HALF)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/mixin.stylus';

.star {
  display: flex;
  align-items: center;
  justify-content: center;

  .star-item {
    background-repeat: no-repeat;
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('star48_on');
      }

      &.half {
        bg-image('star48_half');
      }

      &.off {
        bg-image('star48_off');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('star36_on');
      }

      &.half {
        bg-image('star36_half');
      }

      &.off {
        bg-image('star36_off');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('star24_on');
      }

      &.half {
        bg-image('star24_half');
      }

      &.off {
        bg-image('star24_off');
      }
    }
  }
}
</style>
