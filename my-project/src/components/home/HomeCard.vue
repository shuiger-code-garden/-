<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <ImageView :src="userInfo.avatarUrl" round />
        </div>
        <div class="nickname">{{ userInfo.nickName }}</div>
        <div class="shelf-text">书架共有 {{ data.num }} 本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wrapper">
          <div class="book-img-wrapper" v-for="(bookList, index) in bookList" :key="index">
            <ImageView :src="bookList.cover" />
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon class="arrow" name="arrow" size="11px" color="#828489"></van-icon>
        </div>
      </div>
      <div class="feedback-wrapper"></div>
      <div class="feedback-text" @click="onFeedback">反馈</div>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import ImageView from "../base/ImageView";
import Dialog from "vant-weapp/dist/dialog/dialog";

export default {
  components: {
    ImageView
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    bookList() {
      return this.data.bookList
    },
    userInfo() {
       return this.data.userInfo
    }
  },
  data() {
    return {
      // data: {
      //   userInfo: {},
      //   bookList: [],
      //   num: 0
      // },
      hasSign: false,
      signDay: 0
    };
  },
  methods: {
    onFeedback() {
      // eslint-disable-next-line no-undef
      Dialog.confirm({
        title: "反馈",
        message: "您是否确认提交反馈信息？",
        confirmButtonText: "是",
        cancelButtonText: "否"
      })
        .then(() => {
          console.log("点击是之后的事件");
        })
        .catch(() => {
          console.log("点击否之后的事件");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-card {
  margin: 22px 20px 0;
  background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
  border-radius: 30px;

  .home-card-inner {
    position: relative;
    padding: 21.5px 17px 20px 0px;
    box-sizing: border-box;

    .user-info {
      padding-left: 20px;
      display: inline-flex;
      align-items: center;

      .avatar-wrapper {
        width: 20px;
        height: 20px;
      }

      .nickname,
      .shelf-text {
        color: #ffffff;
        font-size: 12px;
      }

      .nickname {
        margin: 0 8.5px;
      }

      .shelf-text {
        opacity: 0.7;
      }

      .round-item {
        width: 4px;
        height: 4px;
        background: #a2a2a2;
        border-radius: 50%;
        margin: 0 8px;
      }
    }

    .book-info {
      display: flex;
      margin-top: 16.5px;

      .book-wrapper {
        flex: 1;
        display: flex;
        justify-content: space-around;
        .book-img-wrapper {
          width: 72px;
          height: 101px;
        }
      }

      .shelf-wrapper {
        display: flex;
        align-items: center;

        .shelf {
          width: 11px;
          font-size: 11px;
          word-break: break-word;
          color: #fff;
          opacity: 0.8;
        }
      }
    }

    .feedback-text {
      position: absolute;
      right: 0;
      top: 19.6px;
      width: 44.5px;
      height: 23.5px;
      line-height: 23.5px;
      text-align: center;
      font-size: 12px;
      color: #fff;
    }

    .feedback-wrapper {
      position: absolute;
      right: 0;
      top: 19.6px;
      width: 44.5px;
      height: 23.5px;
      opacity: 0.3;
      background: #d8d8d8;
      border-radius: 200px 0 0 200px;
    }
  }
}
</style>
