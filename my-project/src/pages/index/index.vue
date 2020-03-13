<template>
  <div class="home">
    <SearchBar disabled :hotSearch="hotSearch" />
    <HomeCard :data="homeCard" />
    <HomeBanner :img="banner.img" :title="banner.title" :subTitle="banner.subTitle" />
    <HomeBook title="为你推荐" :data="recommend" :row="1" :col="3" mode="col" />
    <HomeBook title="免费阅读" :row="2" :col="2" :data="freeRead" mode="row" />
    <HomeBook title="免费阅读" :row="2" :col="2" :data="category" mode="category" />
  </div>
</template>

<script>
import SearchBar from "../../components/home/SearchBar";
import HomeCard from "../../components/home/HomeCard";
import HomeBanner from "../../components/home/HomeBanner";
import HomeBook from "../../components/home/HomeBook";
import { getHomeData } from "@/api/index";
export default {
  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook
  },
  data() {
    return {
      hotSearch: "",
      banner: {},
      recommend: [],
      freeRead: [],
      category: [],
      hotBook: [],
      homeCard: {}
    };
  },
  mounted() {
    this.getHomeData("1234");
  },
  methods: {
    getHomeData(openId) {
      getHomeData({ openId })
        .then(response => {
          console.log(response);
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
            num: shelfCount
          };
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>
