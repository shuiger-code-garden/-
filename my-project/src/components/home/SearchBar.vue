
<template>
  <div class="search-bar">
    <div class="search-bar-wrapper" @click="onSearchBarClick">
      <div class="search">
        <van-icon name="search" color="#858C96" size="15px" />
      </div>
      <input
        :focus="focus"
        :disabled="disabled"
        :maxlength="limit"
        :placeholder="hotSearch"
        confirm-type="search"
        v-model="searchWord"
        type="text"
        class="search-bar-input"
        placeholder-style="color:#ADB4BE"
        @input="onChange"
        @confirm="onConfirm"
      />
      <div class="clear" @click="onClearClick">
        <van-icon name="clear" color="#858C96" size="15px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    hotSearch: {
      tyep: String,
      default: "搜索"
    }
  },
  data() {
    return {
      searchWord: ""
    };
  },
  methods: {
    onSearchBarClick(){
       this.$emit('onClick')
    },
    onClearClick(){
       this.$emit('onClear')
    },
    onChange(e){
       let {value} = e.mp.detail;
       this.$emit('onChange', value);
    },
    onConfirm(e){

    },
    setValue(val){
       this.searchWord = val;
    },
    getValue(val){
       return this.searchWord;
    },

  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  height: 40px;
  padding: 15px 15.5px;
  .search-bar-wrapper {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 2px 15px;
    background: #f5f7f9;
    border-radius: 40px;
    .search {
      display: flex;
      height: 100%;
      align-items: center;
    }
    .search-bar-input {
      flex: 1;
      height: 100%;
      color: "#333";
      font-size: 14px;
      margin-left: 5px;
      background: transparent;
    }
    .clear {
      display: flex;
      height: 100%;
      align-items: center;
    }
  }
}
</style>
