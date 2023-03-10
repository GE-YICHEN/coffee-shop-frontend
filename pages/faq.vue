<template>
  <div class="max-w-7xl mx-auto py-8 px-5">
    <h1 class="text-5xl font-bold text-center">FAQ</h1>
    <el-collapse class="mt-8" accordion>
      <el-collapse-item v-for="faq in faqList" :key="faq.title" :title="faq.title">{{
        faq.text
      }}</el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
const faqList = [
  {
    title: '你們的咖啡豆是從哪裡來的？',
    text: '我們的咖啡豆來自世界各地的咖啡產區，包括南美、中美、非洲和亞洲等地。我們會與可靠的咖啡豆供應商合作，以確保咖啡豆的品質和來源。'
  },
  {
    title: '你們的咖啡豆是什麼等級的？',
    text: '我們的咖啡豆按照 SCA（Specialty Coffee Association）標準進行等級分級，通常是在 80 分或以上。我們會在產品頁面上標示每種咖啡豆的分數和等級，讓您更容易了解咖啡豆的品質。'
  },
  {
    title: '咖啡豆的烘焙方式是怎麼樣的？',
    text: '我們的咖啡豆通常使用特殊的烘焙技術，以保留咖啡豆本身的風味和特點。我們會在產品頁面上標註每種咖啡豆的烘焙程度，例如淺烘、中烘或深烘等。'
  },
  {
    title: '什麼是單品咖啡和混合咖啡？',
    text: '單品咖啡指的是只用一種咖啡豆製成的咖啡，而混合咖啡則是將多種咖啡豆混合在一起製成的咖啡。每種咖啡豆都有其獨特的風味和特點，所以選擇咖啡時可以根據自己的口味喜好進行選擇。'
  },
  {
    title: '咖啡豆的保存方式是什麼？',
    text: '咖啡豆的保存方式非常重要，因為它會直接影響咖啡的風味和口感。最好的保存方式是將咖啡豆存放在密封的容器中，遠離陽光和濕氣。不要將咖啡豆放入冰箱或冷凍庫中，因為這樣會影響咖啡豆的風味。'
  },
  {
    title: '退換貨政策是什麼？',
    text: '我們提供 14 天的退換貨服務，如果您不滿意我們的產品或有任何問題，可以隨時聯繫我們進行退換貨。請注意，退換貨的商品必須是完整的、未開封的狀態，並且需要保留相關的收據和包裝。'
  },
  {
    title: '付款方式有哪些？',
    text: '我們提供各種不同的付款方式，包括信用卡、銀行轉帳和貨到付款等。您可以在結帳時選擇適合自己的付款方式，以便更方便地完成交易。'
  }
]
</script>

<style lang="scss" scoped></style>
