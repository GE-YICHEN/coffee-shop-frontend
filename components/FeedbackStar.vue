<template>
  <div>
    <i v-for="i in 5" :key="i" class="ml-1" :class="[calcFeedbackStar(props.feedbackScore, i)]"></i>
  </div>
</template>

<script setup>
const props = defineProps({
  feedbackScore: {
    type: Number,
    required: true
  }
})

const calcFeedbackStar = (score, index) => {
  const STAR = 'fa-solid fa-star'
  const HALF_STAR = 'fa-regular fa-star-half-stroke'
  const HOLLOW_STAR = 'fa-regular fa-star'

  const differenceBetweenScore = score - index

  if (differenceBetweenScore >= 0) {
    return STAR
  } else if (differenceBetweenScore > -1 && differenceBetweenScore < 0) {
    return HALF_STAR
  } else {
    return HOLLOW_STAR
  }
}
</script>

<style lang="scss" scoped></style>
