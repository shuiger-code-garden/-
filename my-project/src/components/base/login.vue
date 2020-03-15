
<template>
  <div class="login-wrapper">
    <div class="login">
      <div class="login-info">
        <div class="login-img">
          <ImageView
            mode="scaleToFill"
            round
            height="100%"
            src="https://www.youbaobao.xyz/mpvue-res/logo.jpg"
          />
        </div>
        <div class="sub-title">登录小慕读书</div>
        <div class="title">全球好书免费读</div>
      </div>
      <button
        class="login-btn"
        open-type="getUserInfo"
        lang="zh_CN"
        @getuserinfo="onGotUserInfo"
      >授权登录</button>
    </div>
  </div>
</template>

<script>
import ImageView from './ImageView'
export default {
  components: {
    ImageView
  },
  methods: {
    onGotUserInfo() {
       this.$emit('getUserInfo')
    }
  },
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #999;
  z-index: 1000;
  .login {
    position: relative;
    width: 270px;
    height: 248px;
    background: #f5f5f5;
    border-radius: 18px;
    .login-info {
      margin-top: 22.5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .login-img {
        width: 74px;
        height: 74px;
      }
      .sub-title {
        font-size: 13px;
        color: #999;
        line-height: 18.5px;
        margin-top: 18px;
      }
      .title {
        font-size: 16px;
        color: #333;
        font-weight: 400;
        line-height: 22.5px;
        margin-top: 3.5px;
      }
    }
    .login-btn {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 49px;
      line-height: 49px;
      font-size: 15px;
      background-image: linear-gradient(90deg, #1ea3f5 0%, #0f87fc 100%);
      border-radius: 0 0 18px 18px;
      color: #ffffff;
    }
  }
}
</style>
