<template>
  <Field as="div" :name="props.name" class="relative" v-slot="{ field, errors }">
    <input :type="props.type" :id="props.name" v-bind="field" class="px-1 peer w-full border-0 outline-0 bg-transparent" placeholder=" ">
    <label :for="props.name" class="absolute top-0 left-0 transition-all cursor-text peer-focus:-translate-y-[calc(100%+8px)] peer-focus:cursor-default peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:cursor-default peer-focus:text-[12px] peer-[:not(:placeholder-shown)]:text-[12px]">{{ props.label }}</label>
    <div class="mt-1 h-[2px] bg-[#dadada]"></div>
    <transition name="slide-fade">
      <div class="mt-1 text-xs text-red-600" v-if="errors.length > 0">{{ errors.join(' ') }}</div>
    </transition>
  </Field>
</template>

<script setup>
import { Field } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.slide-fade-enter-active,
.silde-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>