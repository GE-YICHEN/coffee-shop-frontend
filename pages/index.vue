<template>
  <div class="h-full">
    <div
      class="flex items-center justify-center lg:justify-start w-full h-[calc(100vh-5rem)] bg-[url(https://images.unsplash.com/photo-1561986810-4f3ba2f46ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center"
    >
      <div class="max-w-xl text-white text-center lg:text-left lg:ml-36">
        <h1 class="text-5xl font-bold">精緻咖啡 奢華生活</h1>
        <p class="mt-5 text-lg font-semibold">我們的咖啡不只是一杯飲料，更是一種生活方式</p>
        <nuxt-link
          to="/products"
          class="inline-block py-3 px-4 text-lg mt-8 bg-[#C59B59] rounded-2xl hover:opacity-90"
          >Go Shop</nuxt-link
        >
      </div>
    </div>
    <section>
      <div class="max-w-7xl py-8 mx-auto px-5">
        <h2 id="bestSellers" class="text-4xl font-medium flex justify-center items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <path
              fill="#FF8F1F"
              d="M266.91 500.44c-168.738 0-213.822-175.898-193.443-291.147c.887-5.016 7.462-6.461 10.327-2.249c8.872 13.04 16.767 31.875 29.848 30.24c19.661-2.458 33.282-175.946 149.807-224.761c3.698-1.549 7.567 1.39 7.161 5.378c-5.762 56.533 28.181 137.468 88.316 137.468c34.472 0 58.058-27.512 69.844-55.142c3.58-8.393 15.843-7.335 17.896 1.556c21.031 91.082 77.25 398.657-179.756 398.657z"
            />
            <path
              fill="#FFB636"
              d="M207.756 330.827c3.968-3.334 9.992-1.046 10.893 4.058c2.108 11.943 9.04 32.468 31.778 32.468c27.352 0 45.914-75.264 50.782-97.399c.801-3.642 4.35-6.115 8.004-5.372c68.355 13.898 101.59 235.858-48.703 235.858c-109.412 0-84.625-142.839-52.754-169.613zM394.537 90.454c2.409-18.842-31.987 32.693-31.987 32.693s26.223 12.386 31.987-32.693zM47.963 371.456c.725-8.021-9.594-29.497-11.421-20.994c-4.373 20.344 10.696 29.016 11.421 20.994z"
            />
            <path
              fill="#FFD469"
              d="M323.176 348.596c-2.563-10.69-11.755 14.14-10.6 24.254c1.155 10.113 16.731 1.322 10.6-24.254z"
            />
          </svg>
          熱銷商品
        </h2>
        <div class="mt-8 grid grid-cols-1 gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            v-for="product in bestSellers"
            :key="product.id"
            class="max-w-[17rem]"
            :product="product"
          ></ProductCard>
        </div>
      </div>
    </section>
    <section
      class="bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')] bg-fixed bg-center bg-cover"
    >
      <div class="max-w-7xl py-8 mx-auto px-5 text-center text-white">
        <h2 class="text-4xl font-medium">為甚麼選擇我們 ?</h2>
        <div class="mt-8 flex justify-between flex-wrap">
          <div
            v-for="item in whyChooseUsList"
            :key="item.pic"
            class="basis-full mt-8 flex flex-col items-center gap-8 sm:basis-1/2 lg:basis-auto"
          >
            <img
              class="w-60 h-60 object-cover rounded-full shadow-2xl"
              :src="item.pic"
              loading="lazy"
              :alt="item.alt"
            />
            <p class="text-3xl font-medium">{{ item.intro }}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-7xl py-8 mx-auto px-5">
        <h2 id="blog" class="text-4xl font-medium text-center">Blog</h2>
        <div class="mt-8 flex flex-col md:flex-row gap-8">
          <div class="flex-1 md:flex-none md:w-3/5 flex flex-col gap-8">
            <BlogCard :blog="blogList[0]"></BlogCard>
            <BlogCard :blog="blogList[1]"></BlogCard>
          </div>
          <div
            class="h-80 md:flex-1 md:h-auto relative rounded-lg overflow-hidden bg-gradient-to-t from-gray-900 to-transparent"
          >
            <img
              class="absolute -z-10 top-0 bottom-0 left-0 right-0 h-full object-cover"
              :src="blogList[2].pic"
              alt="Blog 圖"
            />
            <div
              class="relative z-50 p-6 h-full flex flex-col justify-end items-start gap-5 text-white"
            >
              <h2 class="font-bold lg:text-lg">{{ blogList[2].title }}</h2>
              <p
                class="text-sm lg:text-base text-ellipsis overflow-auto"
                style="
                  display: -webkit-box;

                  -webkit-box-orient: vertical;

                  -webkit-line-clamp: 3;
                "
              >
                {{ blogList[2].text }}
              </p>
              <button
                class="text-sm lg:text-base text-red-500"
                @click="handleSeeMoreClick(blogList[2].id)"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg-[url('https://images.unsplash.com/photo-1513211888420-0a4531c612b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center bg-fixed"
    >
      <div class="max-w-7xl py-8 mx-auto px-5">
        <h2 id="feedback" class="text-4xl font-medium text-center text-white">顧客回饋</h2>
        <div class="mt-8 md:px-20">
          <Swiper
            class="feedback w-full h-64 rounded-lg"
            :pagination="{
              clickable: true
            }"
            :navigation="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: true
            }"
            :loop="true"
            :modules="modules"
          >
            <SwiperSlide v-for="item in feedbackList" :key="item.id" class="cursor-grab">
              <img class="w-50 sm:w-60 h-full object-cover" :src="item.pic" alt="顧客回饋照片" />
              <div class="flex-1 p-6 bg-[#ececec] flex flex-col justify-center gap-4">
                <p
                  class="overflow-hidden text-ellipsis"
                  style="
                    display: -webkit-box;

                    -webkit-box-orient: vertical;

                    -webkit-line-clamp: 5;
                  "
                >
                  {{ item.description }}
                </p>
                <div class="text-base flex">
                  <FeedbackStar :feedback-score="item.score"></FeedbackStar>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

const bestSellers = [
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
]

const whyChooseUsList = [
  {
    pic: 'https://images.unsplash.com/photo-1625863648813-91c92c5ea7ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80',
    alt: '咖啡豆',
    intro: '品質保證'
  },
  {
    pic: 'https://images.unsplash.com/photo-1609522886437-27a610fbe81d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    alt: '配送',
    intro: '快速配送'
  },
  {
    pic: 'https://plus.unsplash.com/premium_photo-1671028545792-f3a4c084f807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    alt: '好評',
    intro: '用戶口碑'
  },
  {
    pic: 'https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    alt: '團隊',
    intro: '專業團隊'
  }
]

const feedbackList = [
  {
    id: 111,
    pic: 'https://plus.unsplash.com/premium_photo-1669687924853-7fad4dd6cf63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum blanditiis nam libero ipsum, adipisci impedit vel fuga perspiciatis porro voluptatem doLorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum blanditiis nam libero ipsum.',
    score: 5
  },
  {
    id: 222,
    pic: 'https://plus.unsplash.com/premium_photo-1669687924712-0021dc371c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum blanditiis nam libero ipsum, adipisci impedit vel fuga perspiciatis porro voluptatem doLorem ipsum dolor sit amet consectetur.',
    score: 4.5
  }
]

const modules = [Autoplay, Pagination, Navigation]

const blogList = [
  {
    id: 777,
    title: '咖啡豆的產地與口味：一文了解全球咖啡豆的不同口感',
    text: '本文將介紹世界各地咖啡豆的產地及不同口味，幫助大家更好地了解咖啡豆，選擇適合自己口味的咖啡豆。我們將深入探討咖啡豆的特點、產地以及烘焙方式，介紹各類咖啡豆的口感特點，從而幫助大家在購買咖啡豆時作出更好的選擇。',
    pic: 'https://images.unsplash.com/photo-1611410255266-a1eaa3768021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=838&q=80'
  },
  {
    id: 888,
    title: '如何辨別咖啡豆的品質？',
    text: '本文將介紹如何辨別咖啡豆的品質。我們將從咖啡豆的外觀、氣味、口感和產地等方面詳細介紹如何辨別咖啡豆的優劣。同時，我們也會介紹如何儲存和烘焙咖啡豆，讓大家在選購咖啡豆時能夠更加理性和專業。',
    pic: 'https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    id: 999,
    title: '咖啡豆的烘焙過程：如何調配不同口感的咖啡？',
    text: '本文將介紹咖啡豆的烘焙過程，以及如何調配不同口感的咖啡。我們將從咖啡豆的種類、烘焙溫度、時間等方面深入探討咖啡豆的烘焙工藝，介紹不同烘焙程度對咖啡口感的影響。同時，我們還會介紹如何調配不同比例的咖啡豆，以獲得不同口感的咖啡。',
    pic: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
]

const handleSeeMoreClick = (blogId) => {
  navigateTo(`/blog/${blogId}`)
}
</script>

<style lang="scss">
.feedback {
  .swiper-slide {
    display: flex;
  }
  .swiper-pagination-bullet {
    height: 3px;
    width: 30px;
    border-radius: 10px;
    background-color: rgb(177, 175, 175);
    opacity: 0.7;
    &-active {
      background-color: #000;
      opacity: 1;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    width: 40px;
    height: 30px;
    top: 50%;
    z-index: 100;
    background-image: url('https://api.iconify.design/mdi-light:arrow-right.svg?color=%23000000');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    visibility: hidden;
    &::after {
    }
    @media screen and (min-width: 640px) {
      visibility: visible;
    }
  }
  .swiper-button-prev {
    transform: rotate(180deg);
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
}
</style>
