<template>
  <el-collapse-item :title="props.categoryList.name">
    <el-checkbox-group v-model="checkedItem" :max="1">
      <el-checkbox
        v-for="item in props.categoryList.childrenCategory"
        :key="item.id"
        class="w-full"
        :label="item.id"
        >{{ item.name }}</el-checkbox
      >
    </el-checkbox-group>
  </el-collapse-item>
  <!-- <div class="w-full">
    <div class="py-2 flex items-center cursor-pointer" @click="toggleIsExpand()">
      <div class="flex-1">
        {{ props.categoryList.name }}
      </div>
      <i class="fa-solid fa-angle-down transition-all" :class="[isExpand ? 'rotate-180' : '']"></i>
    </div>
    <ul
      class="transition-[max-height] duration-200 overflow-hidden"
      :class="[isExpand ? 'max-h-64' : 'max-h-0']"
    >
      <li
        v-for="item in props.categoryList.childrenCategory"
        :key="item.id"
        class="py-1 px-1 flex items-center gap-2"
      >
        <div class="w-5 h-5 border-2 rounded-full flex justify-center items-center">
          <i class="fa-solid fa-check"></i>
        </div>
        <p class="flex-1">{{ item.name }}</p>
      </li>
    </ul>
  </div> -->
</template>

<script setup>
const props = defineProps({
  categoryList: {
    type: Object,
    required: true
  }
})

const checkedItem = ref([])
</script>

<style lang="scss">
.el-collapse-item__header {
  font-size: 1.1rem !important;
}
.el-checkbox {
  &__inner {
    border-radius: 999px;
    width: 1rem;
    height: 1rem;
    &::after {
      height: 0.5rem;
      width: 0.3rem;
    }
  }
  &__label {
    font-size: 1rem;
  }
}
</style>
