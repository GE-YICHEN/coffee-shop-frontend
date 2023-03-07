<template>
  <div>{{ IdleDeadline }}</div>
</template>

<script setup>
const route = useRoute()

const { id } = route.params

definePageMeta({
  layout: 'default'
})
</script>

<style lang="scss" scoped></style>
