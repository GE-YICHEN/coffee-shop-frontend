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
    <!-- <Swiper
      class="w-full h-96"
      :slides-per-view="1"
      :pagination="{ dynamicBullets: true }"
      :modules="modules"
      :autoplay="{ delay: 2500 }"
      :navigation="true"
      :loop="true"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper> -->
    <section>
      <div class="max-w-7xl mx-auto px-5 text-center">
        <h2 class="text-4xl mt-5 font-medium">為甚麼選擇我們 ?</h2>
        <div class="">
          <div>
            <img
              class="w-full h-20 rounded-full shadow-sm"
              src="https://images.unsplash.com/photo-1625863648813-91c92c5ea7ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80"
              alt="咖啡豆"
            />
            <p>高品質</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1609522886437-27a610fbe81d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="快速送貨"
            />
            <p></p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Pagination, Autoplay, Navigation } from 'swiper'
// import 'swiper/css'

// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// const modules = [Autoplay, Pagination, Navigation]
</script>

<style lang="scss" scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
