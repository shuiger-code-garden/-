<template>
  <div class="home-book">
    <div class="home-book-header">{{ title }}</div>
    <div class="home-book-content">
      <div
        class="home-book-row"
        v-for="(items, index) in bookData"
        :key="index"
      >
        <div
          class="home-book-col"
          v-for="(book, bookIndex) in items"
          :key="bookIndex"
          :style="{flex: '0 0 ' + (100/col) + '%'}"
        >
          <div
            class="book-wrapper"
            :style="{flexDirection: mode === HOME_BOOK_MODE.COL ? 'column' : 'row'}"
          >
            <ImageView :src="book.cover"/>
            <div class="book-tittle-wrapper book-title-col" v-if="mode === HOME_BOOK_MODE.COL">
              <div class="book-title">{{book.text}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ImageView from "../base/ImageView"
import { HOME_BOOK_MODE, CATEGORY } from "@/utils/const"

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
    HOME_BOOK_MODE() {
      return HOME_BOOK_MODE;
    },
    bookData() {
      const { data, row, col } = this;
      if (data && data.length > 0) {
        data.forEach(book => {
          book.text = CATEGORY[book.categoryText.toLowerCase()]
        })
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
    font-size: 21px;
    font-weight: 500;
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
        .book-wrapper {
          display: flex;
          .book-title-col {
            .book-title {
              color: #212731;
              font-size: 12px;
              line-height: 16.5px;
              max-height: 35.5px;
              font-weight: 500;
              overflow: hidden;
              word-break: break-word;
            }
          }
        }
      }
    }
  }
}
</style>
