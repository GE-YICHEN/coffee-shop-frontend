<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
if (process.client) {
  window.addEventListener('scroll', () => {
    document.body.toggleAttribute('scroll', true)
    if (this.timer) clearTimeout(this.timer)

    this.timer = setTimeout(() => {
      document.body.toggleAttribute('scroll')
      console.log(this.timer)
    }, 500)
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap');

html {
  width: 100%;
  /* width: 100vw; */
  font-family: 'Noto Sans TC', sans-serif;
}

#__nuxt,
html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: overlay;
  scroll-behavior: smooth;
}

* {
  scroll-margin-top: 5rem;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  margin: 0 2px 0;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background: transparent;
  transition: all 0.3s;
}

::-webkit-scrollbar-thumb:hover,
body[scroll] ::-webkit-scrollbar-thumb {
  background: rgb(189, 188, 188);
}
</style>
