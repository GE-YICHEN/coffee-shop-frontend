<template>
  <aside>
    <el-collapse>
      <ProductCategoryList
        v-for="categoryList in categoryListGroup"
        :key="categoryList.id"
        :category-list="categoryList"
      ></ProductCategoryList>
    </el-collapse>
  </aside>
</template>

<script setup>
const categoryListGroup = [
  {
    id: 111,
    name: '咖啡豆',
    childrenCategory: [
      {
        id: 222,
        name: '單品咖啡豆'
      },
      {
        id: 333,
        name: '配方咖啡豆'
      },
      {
        id: 444,
        name: '珍珠圓豆'
      }
    ]
  },
  {
    id: 555,
    name: '風味',
    childrenCategory: [
      {
        id: 666,
        name: '花香'
      },
      {
        id: 777,
        name: '水果味'
      },
      {
        id: 888,
        name: '甜味'
      }
    ]
  }
]
</script>

<style lang="scss" scoped></style>
