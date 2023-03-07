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
    name: 'AAAAAAAA',
    childrenCategory: [
      {
        id: 222,
        name: 'aaaa'
      },
      {
        id: 333,
        name: 'bbbb'
      },
      {
        id: 444,
        name: 'ccccc'
      }
    ]
  },
  {
    id: 555,
    name: 'BBBBBBB',
    childrenCategory: [
      {
        id: 666,
        name: 'ddd'
      },
      {
        id: 777,
        name: 'eeeee'
      },
      {
        id: 888,
        name: 'fffff'
      }
    ]
  }
]
</script>

<style lang="scss" scoped></style>
