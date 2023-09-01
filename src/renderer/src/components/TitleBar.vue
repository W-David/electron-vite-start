<template>
  <div class="title-bar">
    <div class="title-bar-dragger"></div>
    <ul class="title-action-list">
      <li class="action-item" @click="minimize">-</li>
      <li class="action-item" @click="maximize">▢</li>
      <li class="action-item" @click="close">x</li>
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
  height: 36px;
  z-index: 5001;
  display: flex;

  .title-bar-dragger {
    flex: 1;
    user-select: none;
    -webkit-app-region: drag;
    -webkit-user-select: none;
  }
  .title-action-list {
    display: flex;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    font-weight: bolder;
    color: #eee;
    background-color: #1f1f1f;
    .action-item {
      transition: all 300ms ease;
      opacity: 0.4;
      &:last-child:hover {
        background-color: #fd0007;
      }
    }
  }
  &:hover {
    .action-item {
      opacity: 1;
    }
  }
}
</style>
