<template>
  <div id="listfield2" class="grid lg:grid-cols-3 lg:gap-10">
    <div class="lg:col-span-1 px-8 lg:mt-36">
      <p class="text-indigoDye font-bold text-5xl mb-12">
        {{ headLine }}
      </p>
      <ul
        class="px-6 mb-8 list-disc list-outside text-indigoDye text-2xl lg:leading-10 lg:tracking-wider"
      >
        <li v-for="item in items" :key="item.message">
          {{ item }}
        </li>
      </ul>
      <ul></ul>

      <a data-scroll href="#thankyou">
        <div class="flex justify-center lg:visible invisible xm:h-0 lg:my-12">
          <img class="lg:h-9" src="~assets/image/Polygon3.png" alt="" />
        </div>
      </a>
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
        'Private gated community',
        'Modern 1- & 2-bedroom residences',
        'Den & private outdoor space available',
        'Clubhouse with bar & resident lounge',
        'Fitness center & yoga studio',
        'Fitness center & yoga studio',
        'Library & coffee bar',
        'Poker & card rooms',
        'Shuffleboard',
        'Outdoor swimming pool',
        'Firepit',
        'Private BBQ & dining areas',
        'Pickleball court',
        'Dog run',
        'Amazon package lockers',
        '24-hour onsite maintenance',
      ],
    }
  },
}
</script>
