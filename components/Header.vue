<template>
  
    <div class=" " style="background-image: url('/image/banner.png');"  >  
   <div class="     lg:flex lg:justify-center  xl:pl-36 xl:pr-44  lg:pl-28 lg:pr-28  xm:py-6  px-6  ">   

     <div class="lg:flex-1 lg:justify-center    my-10    ">
       <img class="md:h-28  md:w-96  lg:m-0 mx-auto       " src="~assets/image/logo.png" alt=""> 
     </div>
     <div class="lg:flex-1 lg:flex justify-end items-center     lg:mt-20 lg:mb-16 mt-8  "> 
              <a href="#" v-scroll-to="{
     el: '#submitfield',
     
     duration: 500,
     easing: 'linear',
     offset: -100,
     force: true,
     cancelable: true,
     onStart: onStart,
     onDone: onDone,
     onCancel: onCancel,
     x: false,
     y: true
 }">
              <button class="bg-treasuredTeal   xl:w-72 lg:w-1/2 w-full h-16  text-white  leading-normal tracking-wide  font-bold ">     Register
              
              </button>
           </a>
     </div>
   </div>
    
  </div>     
</template>
<script>

import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(vueSmoothScroll )
export default{

}

</script>

