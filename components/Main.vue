 <template>
   
   <div class="grid lg:grid-cols-3 lg:gap-2  ">
     <div class="lg:col-span-1 lg:mt-24 px-8 my-8  "> 
         <p  class="lg:text-center  leading-normal tracking-wide   text-indigoDye font-bold md:text-5xl text-3xl  lg:mb-12 mb-8  "> 
         {{headLine}}
       </p>
       
       <div class="lg:flex  lg:justify-center lg:visible invisible    lg:mb-12">
  <img class="" src="~assets/image/Line15.png" alt="" />
       </div>
        <p class=" lg:text-center   leading-normal tracking-wide    xl:mb-12 mb-8 text-middleBlue font-bold md:text-5xl text-3xl   "> 
          {{seconsHeadLine}}
       </p>
       <p class="lg:text-center leading-loose tracking-widest   text-indigoDye lg:mb-12   md:text-2xxl text-xl" > 
             
            {{description}}
       </p>
      <a href="#" v-scroll-to="{
     el: '#listfield',
     
     duration: 500,
     easing: 'linear',
     offset: 100,
     force: true,
     cancelable: true,
     onStart: onStart,
     onDone: onDone,
     onCancel: onCancel,
     x: false,
     y: true
 }">
           <div class="flex  justify-center   lg:visible invisible  xm:h-0  lg:mb-12">
        <img class=" lg:h-9 " src="~assets/image/Polygon3.png" alt="" />
        </div>
       </a>
       
       
      
     </div>
     <div class="lg:col-span-2   mb-8 ">
        <img class="lg:h-full lg:w-full   " src="~assets/image/kitchen.png" alt="" />
     </div>
     

   </div>
  
</template>
<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'
 Vue.use(vueSmoothScroll)
export default{
   data() {
      return {
         headLine:' ULTRA-LUXURY RENTALS FOR 55+',
         seconsHeadLine:'Opening Spring 2022',
         description:'An encore to The Club at Pearl River, The Club West will introduce a brand-new collection of one and two-bedroom rental residences surrounded by a wealth of  lifestyle amenities in scenics lifestyle amenities in scenics Pearl River, New York.',
        
         
      }
   },
}
</script>