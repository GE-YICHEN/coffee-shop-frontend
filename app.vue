<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
if (process.client) {
  window.addEventListener('scroll', () => {
    document.body.toggleAttribute('scroll', true)
    if (window.timer) clearTimeout(window.timer)
    window.timer = setTimeout(() => {
      document.body.toggleAttribute('scroll')
    }, 500)
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap');
:root {
  --el-color-primary: #362711 !important;
}

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
}

body {
  overflow: overlay;
}

* {
  scroll-margin-top: 5rem;
}

::-webkit-scrollbar {
  width: 8px;
  background: transparent;
}
/* ::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  margin: 0 2px 0;
} */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  border: 5px solid transparent;
  background-clip: content-box;
  background: transparent;
}

::-webkit-scrollbar-thumb:hover,
body[scroll]::-webkit-scrollbar-thumb {
  background: rgb(189, 188, 188);
}
</style>
