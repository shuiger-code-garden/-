<template>
  <div class="image-view" @click="onClick">
    <img
      :src="src"
      :style="{ height }"
      :class="round ? 'round image': 'image'"
      :mode="mode"
      :lazy-load="lazyLoad"
      @load="onLoad"
      @error="onError"
      v-show="!isLoading && !error"
    />
    <!-- 占位符 -->
    <img
       src="https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg"
      :class="round ? 'round image': 'image'"
      :mode="mode"
      :style="{ height }"
      :lazy-load="lazyLoad"
      v-show="isLoading || error"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      error: false
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    },
    onLoad() {
      this.isLoading = false
      this.error = false
    },
    onError() {
      this.error = true
      this.isLoading = false
    }
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'widthFix'
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: false
    },
    height: {
        type: String,
        default: 'auto'
    }
  },
  watch: {
    src(newVal, oldVal) {
      if (newVal.length > 0 && newVal !== oldVal) {
        this.isLoading = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.image-view {
  width: 100%;
  .image {
    width: 100%;
    &.round {
      border-radius: 50%;
    }
  }
}
</style>
