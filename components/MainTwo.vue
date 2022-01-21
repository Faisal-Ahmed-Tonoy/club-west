<template>
  <!-- <div class="grid grid-cols-3 gap mb-28">
    <div>
      <div>
        <p
          class="ml-30 mb-8 mt-20 text-indigoDye font-bold text-5xl text-center"
        >
          ULTRA-LUXURY <br />
          RENTALS FOR 55+
        </p>
      </div>

      <div class="flex items-center justify-center">
        <img src="~assets/image/Line15.png" alt="" />
      </div>
      <div class="mt-10">
        <p class="ml-30 text-middleBlue font-bold text-5xl text-center"> 
          Opening Spring 2022
        </p>
      </div>
      <div class="mt-8">
        <p class="ml-30 text-center text-indigoDye text-2xl">
          An encore to The Club at Pearl River, <br />
          The Club West will introduce a brand-new <br />
          collection of one and two-bedroom rental <br />
          residences surrounded by a wealth of <br />
          lifestyle amenities in scenic <br />
          Pearl River, New York.
        </p>
        <div class="flex items-center justify-center">
          <img class="mt-5" src="~assets/image/Polygon3.png" alt="" />
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <img class="w-full h-fit" src="~assets/image/maintwo.png" alt="" />
    </div>
  </div> -->
  <div class="grid lg:grid-cols-3 lg:gap-2">
    <div class="lg:col-span-1 lg:mt-24 px-8 my-8">
      <p
        class="lg:text-center leading-normal tracking-wide text-indigoDye font-bold md:text-5xl text-3xl lg:mb-12 mb-8"
      >
        {{ headLine }}
      </p>
      <div class="lg:flex lg:justify-center lg:visible invisible lg:mb-12">
        <img class="" src="~assets/image/Line15.png" alt="" />
      </div>
      <p
        class="lg:text-center leading-normal tracking-wide xl:mb-12 mb-8 text-middleBlue font-bold md:text-5xl text-3xl"
      >
        {{ seconsHeadLine }}
      </p>
      <p
        class="lg:text-center leading-loose tracking-widest text-indigoDye lg:mb-12 md:text-2xxl text-xl"
      >
        {{ description }}
      </p>
      <a
        href="#"
        v-scroll-to="{
          el: '#listfield2',

          duration: 500,
          easing: 'linear',
          offset: 100,
          force: true,
          cancelable: true,
          onStart: onStart,
          onDone: onDone,
          onCancel: onCancel,
          x: false,
          y: true,
        }"
      >
        <div class="flex justify-center lg:visible invisible xm:h-0 lg:mb-12">
          <img class="lg:h-9" src="~assets/image/Polygon3.png" alt="" />
        </div>
      </a>
    </div>
    <div class="lg:col-span-2 mb-8">
      <img class="lg:h-full lg:w-full" src="~assets/image/maintwo.png" alt="" />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(vueSmoothScroll)
export default {
  data() {
    return {
      headLine: ' ULTRA-LUXURY RENTALS FOR 55+',
      seconsHeadLine: 'Opening Spring 2022',
      description:
        'An encore to The Club at Pearl River, The Club West will introduce a brand-new collection of one and two-bedroom rental residences surrounded by a wealth of  lifestyle amenities in scenics lifestyle amenities in scenics Pearl River, New York.',
    }
  },
}
</script>
