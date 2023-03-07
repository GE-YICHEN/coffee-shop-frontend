<template>
  <div
    class="product w-56 rounded-lg overflow-hidden shadow-xl cursor-pointer"
    @click="handleClickProduct()"
  >
    <Swiper
      :pagination="{
        clickable: true
      }"
      :modules="modules"
      class="w-full h-52"
    >
      <SwiperSlide v-for="pic in props.product.pic" :key="pic" class="flex h-full w-full">
        <img class="block h-full w-full object-cover" :src="pic" alt="示意圖" />
      </SwiperSlide>
    </Swiper>
    <div class="p-4">
      <h5 class="font-semibold">{{ props.product.name }}</h5>
      <div class="mt-3 flex">
        <div class="flex-1">
          <p class="text-sm">
            <span class="text-gray-400 line-through"> ${{ props.product.originPrice }} </span>
            <span class="ml-2 px-1 font-bold bg-yellow-300">{{
              props.product.onSalePrice - props.product.originPrice
            }}</span>
          </p>
          <p class="font-bold">${{ props.product.onSalePrice }}</p>
        </div>
        <div class="flex items-center gap-4">
          <button class="bg-[#483519] rounded-full p-2" @click="handleClickProduct()">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path
                fill="#fff"
                d="m207.8 131.6l12.1-66.9a4.2 4.2 0 0 0-.8-3.3A4.1 4.1 0 0 0 216 60H51.3l-5.4-30.1A12 12 0 0 0 34.1 20H16a4 4 0 0 0 0 8h18.1a4 4 0 0 1 3.9 3.3l27.9 153.3a24 24 0 1 0 32 3.4h68.2a24 24 0 1 0 17.9-8H73.2l-5.9-32h120.8a20 20 0 0 0 19.7-16.4ZM96 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm104 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16ZM52.8 68h158.4l-11.3 62.1a11.9 11.9 0 0 1-11.8 9.9H65.9Z"
              />
            </svg>
          </button>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const modules = [Pagination]

const handleClickProduct = () => {
  navigateTo(`products/${props.product.id}`)
}
</script>

<style lang="scss">
.product {
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet {
    height: 3px;
    width: 20px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    opacity: 0.7;
    &-active {
      background-color: #483519;
    }
  }
}
</style>
