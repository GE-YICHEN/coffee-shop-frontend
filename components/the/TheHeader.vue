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
            class="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
          >
            <nuxt-link to="/"> Home </nuxt-link>
          </li>
          <li
            class="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
          >
            <nuxt-link to="/products"> Product </nuxt-link>
          </li>
          <li
            class="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
          >
            <nuxt-link to="/faq"> FAQ </nuxt-link>
          </li>
          <li
            class="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
          >
            <nuxt-link to="/about_us"> About Us </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-4 text-lg">
        <div>
          <Icon name="simple-line-icons:magnifier" class="cursor-pointer" />
        </div>
        <div>
          <Icon name="humbleicons:user" class="cursor-pointer" />
        </div>
        <div>
          <Icon name="clarity:shopping-cart-line" class="cursor-pointer" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
