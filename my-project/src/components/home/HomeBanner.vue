
<template>
  <div class="banner">
    <div
      class="banner-wrapper"
      :style="{backgroundImage: imgUrl}"
    >
      <div class="banner-text-wrapper">
        <div class="banner-title">{{title}}</div>
        <div class="banner-des">{{subTitle}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    imgUrl () {
      return 'url(' + this.img + ')'
    }
  },
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  margin-top: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  .banner-wrapper {
    display: flex;
    height: 125px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .banner-text-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      .banner-title {
        font-size: 18px;
        font-weight: 500;
        color: #fff;
      }
      .banner-des {
        padding: 5px 15px;
        background: #4585ff;
        border: 1px solid #ccc;
        border-radius: 50px;
        margin-top: 10px;
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
