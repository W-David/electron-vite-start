<template>
  <svg :class="svgClass" v-bind="$attrs">
    <use :xlink-href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
export interface Props {
  iconClass: string
  className?: string
}
const props = withDefaults(defineProps<Props>(), { className: '' })
const { iconClass, className } = toRefs(props)
const iconName = computed(() => `#icon-${iconClass.value}`)
const svgClass = computed(() => (className.value ? `svg-icon ${className.value}` : 'svg-icon'))
</script>

<style lang="less" scoped>
.svg-icon {
  width: 16px;
  height: 16px;
  vertical-align: -2px;
  fill: currentColor;
}
</style>
