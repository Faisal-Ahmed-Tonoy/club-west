<template>
  
  <div class="grid lg:grid-cols-12 lg:gap-4 mt-28  ">
    <form
      action=""
      class="lg:col-span-7    xm:px-6 lg:ml-20"
    >
      <p class="text-middleBlue font-bold text-5xl xm:mb-8">
        JOIN THE WAITLIST
      </p>
      <p class="xm:my-8 text-indigoDye  text-2xl  xm:w-560 lg:w-512">
        Register below to be among the first to learn about leasing
        opportunities once we open.
      </p>
       <div class="star font-bold text-middleBlue text-3xl py-2 xm:my-10    border-b border-middleBlue  ">
    <label class="md:ml-12 "> </label> 
    <input class="font-bold text-middleBlue placeholder-middleBlue text-3xl  w-5/6 uppercase focus:outline-none  " type="text"  placeholder="First Name" required>
    
</div>
  <div class="star font-bold text-middleBlue text-3xl py-2  xm:my-10  placeholder-middleBlue  border-b border-middleBlue  ">
    <label class="md:ml-12 "> </label> 
    <input class="font-bold text-indigoDye placeholder-indigoDye  text-3xl w-5/6 uppercase  focus:outline-none  " type="text"  placeholder="Last Name" required>
    
</div>
  <div class="star font-bold text-middleBlue text-3xl py-2  xm:my-10  placeholder-middleBlue  border-b border-middleBlue  ">
    <label class="md:ml-12 "> </label> 
    <input class="font-bold text-indigoDye placeholder-indigoDye  text-3xl  w-5/6 uppercase focus:outline-none  " type="text"  placeholder="Email" required>
    
</div>
  <div class="star font-bold text-middleBlue text-3xl py-2 xm:my-10   border-b border-middleBlue  ">
    <label class="md:ml-12 "> </label> 
    <input class="font-bold text-indigoDye placeholder-indigoDye  text-3xl  w-5/6 uppercase focus:outline-none  " type="text"  placeholder="Phone" required>
    
</div>
<div class=" font-bold text-middleBlue text-3xl py-2  xm:my-10   border-b border-middleBlue  ">
    <label class="md:ml-8 "> </label> 
    <input class="font-bold text-indigoDye placeholder-indigoDye  text-3xl  w-5/6 uppercase focus:outline-none  " type="text"  placeholder="Comment" required> 
    
</div>
<div class="star  text-middleBlue xm:my-8">
    <p class="text-indigoDye  inline pl-5"> Required Field </p>
    
</div>
<div class="xm:w-full   xm:my-8  ">
     <button class="bg-treasuredTeal py-2 lg:w-2/4 w-full    h-16 ">  
                <h1 class="text-white font-bold">Submit</h1>
              </button>
</div>
    </form>

     <div class="   lg:col-span-5  lg:mr-32 lg:my-auto ">
      <img class="w-full  xl:my-24 "  src="~assets/image/submit.png" alt="" /> 
    </div>
  </div>
</template>
 <style>
    .star::before { 
      content:"*";

}
</style>