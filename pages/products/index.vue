<template>
  <div class="max-w-7xl mx-auto py-8 px-5 flex">
    <AsideProduct class="max-h-[70rem] w-0 md:w-[25%] mr-5 overflow-y-auto"></AsideProduct>
    <div class="flex-1">
      <div class="flex justify-end">
        <el-select v-model="sortType" class="sort" placeholder="Sort by">
          <el-option
            v-for="option in sortTypes"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          ></el-option>
        </el-select>
      </div>
      <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <ProductCard
          v-for="product in productList"
          :key="product.id"
          class="max-w-[17rem]"
          :product="product"
        ></ProductCard>
      </div>
      <div class="flex justify-center">
        <el-pagination
          class="mt-10"
          pa
          background
          layout="prev, pager, next"
          :total="200"
          :page-size="15"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const productList = [
  {
    id: 123,
    name: 'AAAAAAAAAAAAAAAAA',
    originPrice: 100,
    onSalePrice: 50,
    pic: [
      'https://shoplineimg.com/589406e472fdc0fc4b027e01/63d929dc62463845ca2e9487/800x.webp?source_format=png',
      'https://shoplineimg.com/589406e472fdc0fc4b027e01/634687203b4ad3001314d4d5/800x.webp?source_format=jpg'
    ]
  },
  {
    id: 234,
    name: 'BBBBBBBBBBBBBBBB',
    originPrice: 200,
    onSalePrice: 100,
    pic: [
      'https://shoplineimg.com/589406e472fdc0fc4b027e01/63d929dc62463845ca2e9487/800x.webp?source_format=png',
      'https://shoplineimg.com/589406e472fdc0fc4b027e01/634687203b4ad3001314d4d5/800x.webp?source_format=jpg'
    ]
  },
  {
    id: 345,
    name: 'CCCCCCCCCCCCCCCC',
    originPrice: 300,
    onSalePrice: 200,
    pic: [
      'https://shoplineimg.com/589406e472fdc0fc4b027e01/63d929dc62463845ca2e9487/800x.webp?source_format=png',
      'https://shoplineimg.com/589406e472fdc0fc4b027e01/634687203b4ad3001314d4d5/800x.webp?source_format=jpg'
    ]
  },
  {
    id: 456,
    name: 'DDDDDDDDDDDDDDDD',
    originPrice: 999,
    onSalePrice: 500,
    pic: [
      'https://shoplineimg.com/589406e472fdc0fc4b027e01/63d929dc62463845ca2e9487/800x.webp?source_format=png',
      'https://shoplineimg.com/589406e472fdc0fc4b027e01/634687203b4ad3001314d4d5/800x.webp?source_format=jpg'
    ]
  },
  {
    id: 5675,
    name: 'EEEEEEEEEEEEEE',
    originPrice: 777,
    onSalePrice: null,
    pic: [
      'https://shoplineimg.com/589406e472fdc0fc4b027e01/63d929dc62463845ca2e9487/800x.webp?source_format=png',
      'https://shoplineimg.com/589406e472fdc0fc4b027e01/634687203b4ad3001314d4d5/800x.webp?source_format=jpg'
    ]
  }
]

const sortTypes = [
  {
    value: 'timeNewToOld',
    label: '上架時間: 由新到舊'
  },
  {
    value: 'timeOldToNew',
    label: '上架時間: 由舊到新'
  },
  {
    value: 'priceHighToLow',
    label: '價格: 由高至低'
  },
  {
    value: 'priceLowToHigh',
    label: '價格: 由低至高'
  },
  {
    value: 'salesHighToLow',
    label: '銷量: 由高至低'
  }
]

const sortType = ref('')

definePageMeta({
  layout: 'default'
})
</script>

<style lang="scss">
.sort {
  .el-input__wrapper {
    box-shadow: none;
    &:hover,
    &:active {
      box-shadow: none !important;
    }
  }
}
</style>
