<template>
  <div ref="searchRef" class="flex items-center gap-4 text-white" @click="changeIsFocus(true)">
    <input
      class="bg-transparent border-b outline-none border-white transition-all duration-300 origin-right"
      :class="[isFocus ? 'scale-x-100' : 'scale-x-0']"
      type="text"
      size="10"
      placeholder="search"
    />
    <Icon name="simple-line-icons:magnifier" class="cursor-pointer" />
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'

const searchRef = ref(null)

const isFocus = ref(false)

const changeIsFocus = (status) => {
  isFocus.value = status
}

onClickOutside(searchRef, () => {
  changeIsFocus(false)
})
</script>

<style lang="scss" scoped></style>
