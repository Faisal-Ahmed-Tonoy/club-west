<template>
  <footer>
    <div
      class="grid lg:grid-cols-8 gap-10 px-8"
      style="background-image: url('/image/banner.png');"
    >
      <div class="grid lg:col-span-2 xl:ml-28 mx-auto my-8 lg:mt-28 lg:mb-14">
        <img class=" " src="~assets/image/footerText.png" alt="" />
      </div>
      <div class="grid lg:col-span-4">
        <p
          class="lg:mt-12 lg:border-solid mb-8 font-bold md:text-3xl text-2xl text-white text-center leading-normal tracking-wide"
        >
          {{ phone }}
        </p>
        <p
          class="lg:mb-10 border-solid mx-auto md:text-2xl text-xl text-white leading-normal tracking-wide"
        >
          {{ address }}
        </p>
      </div>
      <div class="grid lg:col-span-2">
        <div class="flex items-center justify-center my-8 lg:mt-28">
          <div>
            <img src="~assets/image/houselogo.png" class=" " alt="" />
          </div>
          <div class="px-10">
            <img src="~assets/image/chairlogo.png" class="   " alt="" />
          </div>
          <p class="text-sm text-white">Site by: paceadv.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      phone: '845-735-3155',
      address:
        '1000 Murray Court (Located off West Blue Hill Road) | Pearl River, NY10965',
    }
  },
}
</script>
