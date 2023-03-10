<template>
  <div class="flex h-[250px] w-full shadow-md rounded-lg overflow-hidden">
    <img class="h-full w-1/3 object-cover" :src="props.blog.pic" alt="Blog 圖" />
    <div class="flex-1 p-6 flex flex-col justify-center items-start gap-5">
      <h2 class="font-bold lg:text-lg">{{ props.blog.title }}</h2>
      <p
        class="text-sm lg:text-base text-gray-500 text-ellipsis overflow-hidden"
        style="
          display: -webkit-box;

          -webkit-box-orient: vertical;

          -webkit-line-clamp: 3;
        "
      >
        {{ props.blog.text }}
      </p>
      <button class="text-sm lg:text-base text-red-500" @click="handleSeeMoreClick(props.blog.id)">
        See More
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blog: {
    type: Object,
    required: true
  }
})

const handleSeeMoreClick = (blogId) => {
  navigateTo(`/blog/${blogId}`)
}
</script>

<style lang="scss" scoped></style>
