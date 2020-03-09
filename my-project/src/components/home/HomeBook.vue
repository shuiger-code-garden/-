<template>
  <div class="home-book">
    <div class="home-book-header">{{ title }}</div>
    <div class="home-book-content">
      <div
        class="home-book-row"
        v-for="(book, bookIndex) in bookData"
        :key="bookIndex"
        :style="{flex: '0 0 ' + (100/col) + '%'}"
      >
        <div class="home-book-col">
          <div class="book-wrapper">
            <ImageView :src="book.cover" />
            <div class="book-tittle-wrapper">
              <div class="book-title">{{book.title}}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import ImageView from "../base/ImageView";
export default {
  components: {
    ImageView
  },
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
    row: {
      type: Number,
      default: 0
    },
    col: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: 'row'
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

        const number = row * col; // 总共多少数量
        const _bookData = data.slice(0, number);
        const _bookDataRow = [];
        let _row = 0;
        while (_row < row) {
          _bookDataRow.push(_bookData.slice(_row * col, _row * col + col));
          _row++
          console.log(_bookDataRow)
          return _bookDataRow;
        }

      } else {
        return [];
      }

    }
  }
};
</script>

<style lang="scss" scoped>
.home-book {
  .home-book-header {
    padding: 13px 0 0 20.5px;
  }
  .home-book-content {
    padding: 0 12px;
    margin-top: 10.5px;
    .home-book-row {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 12px;
      .home-book-col {
         padding: 0 8px;
         box-sizing: border-box;
         .book-wrapper{
            display: flex;
         }
      }
    }
  }
}
</style>
