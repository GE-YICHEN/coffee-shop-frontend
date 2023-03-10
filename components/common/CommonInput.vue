<template>
  <Field v-slot="{ field, errors }" validate-on-blur="false" as="div" :name="name" class="relative">
    <div class="flex items-center">
      <input
        :id="name"
        v-bind="field"
        :type="type"
        :value="modelValue"
        class="flex-1 px-1 peer w-full border-0 outline-0 bg-transparent"
        placeholder=" "
        @input="(e) => updateValue(e.target.value)"
      />
      <span v-if="props.type === 'password' && props.modelValue !== ''" @click="togglePasswordType">
        <i v-if="type === 'text'" class="fa-solid fa-eye"></i>
        <i v-else class="fa-regular fa-eye-slash"></i>
      </span>
      <label
        :for="name"
        class="absolute top-0 left-0 transition-all cursor-text peer-focus:-translate-y-[calc(100%+8px)] peer-focus:cursor-default peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:cursor-default peer-focus:text-[12px] peer-[:not(:placeholder-shown)]:text-[12px]"
        >{{ label }}</label
      >
    </div>

    <div class="mt-1 h-[2px] bg-[#dadada]"></div>
    <transition name="slide-fade">
      <div v-if="errors.length > 0" class="mt-1 text-xs text-red-600">{{ errors.join(' ') }}</div>
    </transition>
  </Field>
</template>

<script setup>
import { Field } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: 'text'
  },
  type: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number, Boolean],
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const type = ref(unref(props.type))

const updateValue = (value) => {
  emits('update:modelValue', value)
}

const togglePasswordType = () => {
  type.value === 'password' ? (type.value = 'text') : (type.value = 'password')
}
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
