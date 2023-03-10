<template>
  <div class="max-w-7xl mx-auto py-8 px-5">
    <h1 class="text-5xl font-bold text-center">Blog</h1>
    <div class="mt-8 max-w-3xl mx-auto flex flex-col gap-5">
      <BlogCard v-for="blog in blogList" :key="blog.id" :blog="blog"></BlogCard>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style lang="scss" scoped></style>
