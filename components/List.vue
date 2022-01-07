<template>
  <div class="grid lg:grid-cols-3 lg:gap-10">
    <div class="lg:col-span-1 px-8 lg:mt-36">
      <p class="text-indigoDye font-bold text-5xl mb-12">
        {{ headLine }}
      </p>
      <ul
        class="px-6 mb-8 list-disc list-outside text-indigoDye text-2xl lg:leading-10 lg:tracking-wider"
      >
        <li v-for="item in items" :key="item.message">
          {{ item.message }}
        </li>
      </ul>
      <ul></ul>
      <div class="flex justify-center lg:visible invisible xm:h-0 lg:my-12">
        <img class="lg:h-9" src="~assets/image/Polygon3.png" alt="" />
      </div>
    </div>
    <div class="lg:col-span-2 lg:order-first lg:mt-28">
      <img class="lg:w-full lg:h-full" src="~assets/image/Group67.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
li {
  padding-left: 30px;
}
</style>
<script>
export default {
  data() {
    return {
      headLine: 'IT’S YOUR TIME TO EMBRACE THE GOOD LIFE',
      items: [
        { message: 'Private gated community' },
        { message: 'Modern 1- & 2-bedroom residences' },
        { message: 'Den & private outdoor space available' },
        { message: 'Clubhouse with bar & resident lounge' },
        { message: 'Fitness center & yoga studio' },
        { message: 'Fitness center & yoga studio' },
        { message: 'Library & coffee bar' },
        { message: 'Poker & card rooms' },
        { message: 'Shuffleboard' },
        { message: 'Outdoor swimming pool' },
        { message: 'Firepit' },
        { message: 'Private BBQ & dining areas' },
        { message: 'Pickleball court' },
        { message: 'Dog run' },
        { message: 'Amazon package lockers' },
        { message: '24-hour onsite maintenance' },
      ],
    }
  },
}
</script>
