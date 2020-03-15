<template>
  <div>
    <div
      class="home"
      v-if="isAuth"
    >
      <SearchBar
        disabled
        :hotSearch="hotSearch"
      />
      <HomeCard :data="homeCard" />
      <HomeBanner
        :img="banner.img"
        :title="banner.title"
        :subTitle="banner.subTitle"
      />
      <div :style="{marginTop: '23px'}">
        <HomeBook
          title="为你推荐"
          :data="recommend"
          :row="1"
          :col="3"
          mode="col"
        />
      </div>
      <div :style="{marginTop: '23px'}">
        <HomeBook
          title="免费阅读"
          :row="2"
          :col="2"
          :data="freeRead"
          mode="row"
        />
      </div>
      <div :style="{marginTop: '23px'}">
        <HomeBook
          title="免费阅读"
          :row="2"
          :col="2"
          :data="category"
          mode="category"
        />
      </div>

    </div>
    <Login
      @getUserInfo="init"
      v-if="!isAuth"
    />
  </div>
</template>

<script>
import SearchBar from "../../components/home/SearchBar";
import HomeCard from "../../components/home/HomeCard";
import HomeBanner from "../../components/home/HomeBanner";
import HomeBook from "../../components/home/HomeBook";
import Login from "../../components/base/login";
import { getHomeData, register } from "@/api/index";
import {
  getSetting,
  getUserInfo,
  setStorageSync,
  getStorageSync,
  getUserOpenId,
  showLoading,
  hideLoading
} from "@/api/watch";

export default {
  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook,
    Login
  },
  data() {
    return {
      hotSearch: "",
      banner: {},
      recommend: [],
      freeRead: [],
      category: [],
      hotBook: [],
      homeCard: {},
      isAuth: true,
    };
  },
  created() {
    this.init();
  },
  methods: {
    getHomeData(openId, userInfo) {
      getHomeData({ openId })
        .then(response => {
          const {
            hotSearch: { keyword },
            shelf,
            recommend,
            freeRead,
            hotBook,
            category,
            banner,
            shelfCount
          } = response.data;

          this.hotSearch = keyword;
          this.banner = banner;
          this.recommend = recommend;
          this.freeRead = freeRead;
          this.hotBook = hotBook;
          this.category = category;
          this.homeCard = {
            bookList: shelf,
            num: shelfCount,
            userInfo
          };
          hideLoading();
        })
        .catch(err => {
          hideLoading();
          console.log(err);
        });
    },
    getUserInfo() {

      const onOpenIdComplete = (openId, userInfo) => {
        this.getHomeData(openId, userInfo);
        register({
          openId,
          ...userInfo
        })
      }
      getUserInfo(userInfo => {
        setStorageSync('userInfo', userInfo)
        // 通过openId 是否登录
        const openId = getStorageSync('openId')
        if (!openId || openId.length === 0) {
          getUserOpenId(
            openId => {
              onOpenIdComplete(openId, userInfo)
            })
        } else {
          onOpenIdComplete(openId, userInfo)
        }
      }, () => {
        console.log('获取用户信息失败')
      });
    },

    getSetting() {
      getSetting('userInfo', () => {
        this.isAuth = true
        showLoading();
        this.getUserInfo()
      }, () => {
        this.isAuth = false
      });
    },
    init() {
      // 判断用户是否获取到权限-》获取用户信息 -》获取openid
      // -->获取到openId登录成功 -》 调用接口获取数据
      this.getSetting();
    }
  }
};
</script>

<style scoped>
</style>
