<template>
  <div class="title-bar">
    <div class="title-bar-dragger"></div>
    <ul class="title-action-list">
      <li class="action-item" @click="minimize"><i-c-minimize /></li>
      <li class="action-item" @click="maximize"><i-c-maximize /></li>
      <li class="action-item" @click="close"><i-c-close /></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { minimize, maximize, close } = window.api
</script>

<style lang="less" scoped>
.title-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5001;
  box-shadow: 1px 0 2px #aaaaaa50;
  display: flex;

  .title-bar-dragger {
    flex: 1;
    user-select: none;
    -webkit-app-region: drag;
    -webkit-user-select: none;
  }
  .title-action-list {
    display: flex;
    height: 28px;
    line-height: 28px;
    font-weight: bolder;
    .action-item {
      transition: all 300ms ease;
      color: #ddd;
      padding: 0 8px;
      &:hover {
        color: #fff;
      }
      &:last-child:hover {
        color: #fff;
        background-color: #fd0007;
      }
    }
  }
}
</style>
