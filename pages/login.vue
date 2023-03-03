<template>
  <div class="h-full max-w-[1400px] mx-auto sm:rounded-[30px] overflow-hidden flex relative">
    <img src="@/assets/coffee_icon.png" class=" absolute left-3 top-3 w-16 h-auto">
    <div class="w-full lg:w-2/3 bg-[#D8BB92] px-10 sm:px-20">
      <transition name="fade">
        <div v-if="pageType === 'login'" class=" h-full mx-auto lg:ml-10 lg:mr-auto max-w-sm flex flex-col justify-center relative z-50">
          <h1 class=" text-4xl font-black">Login</h1>
          <Form class="mt-[60px] px-7 flex flex-col gap-8" @submit="handleSignIn" :validation-schema="signInSchema">
            <CommonInput name="email" type="email" label="Email Address"></CommonInput>
            <div>
              <CommonInput name="password" type="password" label="Password"></CommonInput>
              <div class="mt-1 text-xs text-blue-500 cursor-pointer" @click="handleForgotPassword">Forgot Password?</div>
            </div>
            <button class=" text-xl py-3 bg-[#84754e] rounded-[40px] transition-all hover:bg-[#a1936e]">
              Sign in
            </button>
          </Form>
          <div class=" mt-8 text-center text-sm text-slate-600">or continue with</div>
          <div class="mt-4 px-5 flex">
            <button class="flex-1 border-2 border-slate-600 rounded-md py-2 hover:opacity-70">
              <Icon name="logos:google-icon" size="24px"></Icon>
            </button>
          </div>
          <p class=" mt-5 text-center text-sm text-slate-600">
            Don't have an account yet?&ensp;
            <span class=" text-blue-600 cursor-pointer hover:opacity-70" @click="chagePageType('register')">Register</span>
          </p>
        </div>
        <div v-else class=" h-full mx-auto lg:ml-10 lg:mr-auto max-w-sm flex flex-col justify-center relative z-50">
          <h1 class=" text-4xl font-black">Register</h1>
          <Form class="mt-[60px] px-7 flex flex-col gap-8" @submit="handleRegister" :validation-schema="registerSchema">
            <CommonInput name="email" type="email" label="Email Address"></CommonInput>
            <CommonInput name="password" type="password" label="Password"></CommonInput>
            <CommonInput name="confirm" type="password" label="Confirm Password"></CommonInput>
            <button class=" text-xl py-3 bg-[#84754e] rounded-[40px] transition-all hover:bg-[#a1936e]">
              Register
            </button>
          </Form>
          <p class=" mt-5 text-center text-sm text-slate-600">
            Already have an account?&ensp;
            <span class=" text-blue-600 cursor-pointer hover:opacity-70" @click="chagePageType('login')">Sign in</span>
          </p>
        </div>
      </transition>
    </div>
    <div class="bg-[#040404] w-0 lg:w-1/3 ">
    </div>
    <img class="absolute h-auto bottom-0 translate-y-[40%] right-0 translate-x-[40%] w-[1000px] scale-125 opacity-80 lg:scale-100 lg:opacity-100 lg:left-2/3 lg:-translate-x-1/2 lg:top-[50%] lg:-translate-y-1/2 lg:w-[500px] xl:w-[600px]" src="@/assets/coffee_bg.png" />
  </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import { object, string, ref as YRef } from 'yup'

const pageType = ref('login')

const chagePageType = (type) => {
  pageType.value = type;
}

const signInSchema = object({
  email: string().email().required(),
  password: string().required().min(8)
})

const handleSignIn = (values) => {
  console.log('login', values);
}

const handleForgotPassword = () => {
  console.log('forgot password');
}

const registerSchema = object({
  email: string().email().required(),
  password: string().required().min(8),
  confirm: string().required('confirm password is a required field').oneOf([YRef('password', 'Password must match')])
})

const handleRegister = (values) => {
  console.log('register', values);
}

definePageMeta({
  layout: "none"
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>