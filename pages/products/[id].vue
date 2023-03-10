<template>
  <div class="max-w-7xl mx-auto py-8 px-5">
    <div class="max-w-4xl mx-auto flex gap-8 flex-col items-center sm:items-stretch sm:flex-row">
      <div class="w-[25rem] h-96 flex gap-2">
        <div class="w-16 flex flex-col gap-2">
          <img
            v-for="(pic, index) in product.pic"
            :key="pic"
            class="w-full h-20 overflow-scroll object-cover cursor-pointer"
            :class="[index === selectedPicIndex ? 'outline outline-black' : '']"
            :src="pic"
            alt="商品圖"
            @click="chageSelectedPicIndex(index)"
          />
        </div>
        <div class="flex-1">
          <img class="w-full h-full" :src="product.pic[selectedPicIndex]" alt="商品圖" />
        </div>
      </div>
      <div class="flex-1 flex flex-col gap-6">
        <h1 class="text-xl font-bold">{{ product.name }}</h1>
        <div class="flex justify-between items-center">
          <FeedbackStar :feedback-score="product.score"></FeedbackStar>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#888888"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0Z"
            />
          </svg>
        </div>
        <div class="flex gap-3 text-xl font-bold">
          <div :class="[product.onSalePrice ? ' text-gray-400 line-through' : '']">
            $ {{ product.originPrice }}
          </div>
          <span v-if="product.onSalePrice">$ {{ product.onSalePrice }}</span>
        </div>
        <div class="mt-auto">
          數量:<el-input-number
            v-model="quantity"
            class="ml-3"
            :min="1"
            :max="10"
            @change="changeQuantity()"
          />
        </div>
        <div>
          <button class="py-2 w-52 bg-black text-white rounded overflow-hidden">
            新增至購物車
          </button>
        </div>
      </div>
    </div>
    <section class="pt-20">
      <h2 class="text-2xl font-bold">商品描述</h2>
      <p class="mt-8">{{ product.description }}</p>
    </section>
    <section class="pt-20">
      <h2 class="text-2xl font-bold">其他人也喜歡</h2>
      <div class="mt-8 grid grid-cols-1 gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard
          v-for="product in alsoLikeProducts"
          :key="product.id"
          class="max-w-[17rem]"
          :product="product"
        ></ProductCard>
      </div>
    </section>
  </div>
</template>

<script setup>
const product = {
  id: 123,
  name: '【快速出貨】中深焙｜黃金曼巴_浸泡咖啡包 12包 (盒裝)',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates soluta delectus, ullam necessitatibus quos nam! Id saepe nostrum esse maiores pariatur eum, rerum deserunt facilis! Qui totam hic dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates soluta delectus, ullam necessitatibus quos nam! Id saepe nostrum esse maiores pariatur eum, rerum deserunt facilis! Qui totam hic dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates soluta delectus, ullam necessitatibus quos nam! Id saepe nostrum esse maiores pariatur eum, rerum deserunt facilis! Qui totam hic dolor.',
  originPrice: 100,
  onSalePrice: 50,
  pic: [
    'https://shoplineimg.com/589406e472fdc0fc4b027e01/63d929dc62463845ca2e9487/800x.webp?source_format=png',
    'https://shoplineimg.com/589406e472fdc0fc4b027e01/634687203b4ad3001314d4d5/800x.webp?source_format=jpg'
  ],
  score: 4.5
}

const selectedPicIndex = ref(0)

const chageSelectedPicIndex = (index) => {
  selectedPicIndex.value = index
}

const quantity = ref(1)

const changeQuantity = (num) => {
  quantity.value = num
}

const alsoLikeProducts = [
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
  }
  // {
  //   id: 5675,
  //   name: 'EEEEEEEEEEEEEE',
  //   originPrice: 777,
  //   onSalePrice: null,
  //   pic: [
  //     'https://shoplineimg.com/589406e472fdc0fc4b027e01/63d929dc62463845ca2e9487/800x.webp?source_format=png',
  //     'https://shoplineimg.com/589406e472fdc0fc4b027e01/634687203b4ad3001314d4d5/800x.webp?source_format=jpg'
  //   ]
  // }
]

definePageMeta({
  layout: 'default'
})
</script>

<style lang="scss" scoped></style>
