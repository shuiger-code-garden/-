<template>
  <div class="tag-grou-wrapper">
      <div class="">
        <div></div>
        <div></div>
      </div>
  </div>
</template>

<script>
export default {
   props: {
      text: {
        type: String,
        default: ''
      }
   },
   methods: {
      onClick(){
          this.$emite('onClick')
      }
   },
}
</script>

<style lang="scss" scoped>
.tag-wrapper{
   width: 100%;
   display: flex;
   justify-content: center;
   background:#F7F7F9;
   border-radius: 16px;
   .tag{
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
      color: #272E37;
   }
}
</style>
