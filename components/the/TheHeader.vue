<template>
  <header class="fixed top-0 left-0 right-0 shadow-md bg-[#483519] text-white z-[100]">
    <div class="flex justify-between items-center h-20 py-4 px-6 max-w-7xl mx-auto">
      <div class="mr-4 w-[18px] flex flex-col gap-1 md:hidden">
        <div class="w-full h-[2px] bg-white"></div>
        <div class="w-full h-[2px] bg-white"></div>
        <div class="w-full h-[2px] bg-white"></div>
      </div>
      <nuxt-link to="/" class="flex-1 md:flex-none flex items-center gap-2 h-full">
        <img src="@/assets/coffee_icon.png" class="h-full w-auto" />LIN COFFEE
      </nuxt-link>
      <nav class="hidden md:block">
        <ul class="flex gap-9 items-center">
          <li
            v-for="link in linkList"
            :key="link.link"
            class="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
          >
            <nuxt-link :to="link.link"> {{ link.label }} </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-4 text-lg">
        <NavSearch />
        <div class="flex items-center">
          <Icon name="humbleicons:user" class="cursor-pointer" />
        </div>
        <div class="flex items-center">
          <Icon name="clarity:shopping-cart-line" class="cursor-pointer" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const linkList = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Product',
    link: '/products'
  },
  {
    label: 'FAQ',
    link: '/faq'
  },
  {
    label: 'About Us',
    link: '/about_us'
  },
  {
    label: 'Blog',
    link: '/blog'
  }
]
</script>

<style lang="scss" scoped></style>
