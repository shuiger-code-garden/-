<template>
  <div class="home-book">
    <div class="home-book-header">{{ title }}</div>
    <div class="home-book-content">
      <!-- <div class="home-book-row" v-for="(item, index) in"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: []
    },
    btnText: {
      type: String,
      default: ""
    },
    col: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: row
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    linearBg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bookData() {
      const { data, row, col } = this;
      if (data && data.length > 0) {
      }
      const number = row * col; // 总共多少数量
      const _bookData = data.slice(0, number);
      const _bookDataRow = [];
      let _row = 0;
      while (_row < row) {
        _bookDataRow;
      }
    }
  }
};
</script>

<style></style>
