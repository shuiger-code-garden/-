<template>
  <div class="home-book">
    <div class="home-book-header">{{ title }}</div>
    <div class="home-book-content">
      <div class="home-book-row" v-for="(item, index) in bookData" :key="index">
        <div
          class="home-book-col"
          v-for="(book, bookIndex) in item"
          :key="bookIndex"
          :style="{flex: '0 0 ' + (100/col) + '%'}"
        >
          <div
            class="book-wrapper"
            :style="{flexDirection: mode === HOME_BOOK_MODE.COL ? 'column' : 'row'}"
            v-if="mode === HOME_BOOK_MODE.COL || mode === HOME_BOOK_MODE.ROW"
          >
            <ImageView :src="book.cover" />
            <div class="book-tittle-wrapper book-title-col" v-if="mode === HOME_BOOK_MODE.COL">
              <div class="book-title">{{book.text}}</div>
            </div>
            <div class="book-title-freed" v-else>
              <div class="boot-title">{{book.text}}</div>
              <div class="book-author-category">
                <div class="boot-author">{{book.author}}</div>
                <div class="boot-category">{{book.categoryText}}</div>
              </div>
            </div>
          </div>
          <div class="category-wrapper" v-else>
            <div class="category-text">生物医学</div>
            <div class="category-num">14本书</div>
            <div class="category-img-wrapper">
              <div class="category-img1">
                <ImageView :src="book.cover" />
              </div>
              <div class="category-img2">
                <ImageView :src="book.cover2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageView from "../base/ImageView";
import { HOME_BOOK_MODE, CATEGORY } from "@/utils/const";

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
      default: "row"
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
          book.text = CATEGORY[book.categoryText.toLowerCase()];
        });
        const number = row * col;
        const _bookData = data.slice(0, number);
        const _bookDataRow = [];
        let _row = 0;
        while (_row < row) {
          _bookDataRow.push(_bookData.slice(_row * col, _row * col + col));
          _row++;
        }
        return _bookDataRow;
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
          .book-title-freed {
            flex: 0 0 50%;
            display: felx;
            flex-direction: column;
            padding: 10px;
            justify-content: space-between;
            .boot-title {
              width: 79px;
              font-size: 14px;
              color: #1f1f1f;
              font-weight: 500;
              overflow: hidden;
              word-break: break-word;
            }
            .book-author-category {
              font-size: 14px;
              color: #868686;
              overflow: hidden;
              word-break: break-word;
            }
          }
        }
        .category-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #f8f9fb;
          border-radius: 10px;
          height: 96px;
          padding: 13px 0 14.5px 0;
          box-sizing: border-box;
          .category-text {
            width: 150px;
            overflow: hidden;
            font-size: 16px;
            color: #212832;
            font-weight: 500;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 22.5px;
          }
          .category-num {
            font-size: 12px;
            color: #868686;
            line-height: 16.5px;
          }
          .category-img-wrapper {
            position: absolute;
            right: 0;
            bottom: 0;
            .category-img1 {
              position: absolute;
              right: 0;
              bottom: -5px;
              width: 48px;
              border-radius: 0 0 10px 0;
            }
            .category-img2 {
              position: absolute;
              right: 30px;
              width: 36px;
              z-index: 90;
              bottom: -5px;
            }
          }
        }
      }
    }
  }
}
</style>
