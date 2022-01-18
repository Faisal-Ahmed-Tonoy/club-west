 

<template>
  <div id="submit" class="grid lg:grid-cols-12 lg:gap-4 xl:mt-28 mt-8 lg:mb-24">
    <form class="lg:col-span-7 xm:px-6 xl:ml-20">
      <p class="text-middleBlue font-bold text-5xl xm:mb-8">
        JOIN THE WAITLIST
      </p>
      <p class="xm:mb-8 text-indigoDye text-2xl xm:w-560 lg:w-512">
        Register below to be among the first to learn about leasing
        opportunities once we open.
      </p>
      <div
        class="py-2 xm:my-10"
        :class="{ error: validation.hasError('firstName') }"
      >
        <div class="font-bold text-middleBlue text-3xl"></div>
        <div
          class="star font-bold text-middleBlue text-3xl border-b border-middleBlue"
        >
          <input
            class="pl-8 font-bold text-middleBlue placeholder-middleBlue text-3xl w-5/6 focus:outline-none"
            type="text"
            v-model="firstName"
            placeholder="FIRST NAME"
          />
        </div>
        <div class="text-red-600 message">
          {{ validation.firstError('firstName') }}
        </div>
      </div>
      <div
        class="py-2 xm:my-10"
        :class="{ error: validation.hasError('lastName') }"
      >
        <div class="font-bold text-middleBlue text-3xl"></div>
        <div
          class="star font-bold text-middleBlue text-3xl border-b border-middleBlue"
        >
          <input
            class="pl-8 font-bold text-indigoDye placeholder-indigoDye text-3xl w-5/6 focus:outline-none"
            type="text"
            v-model="lastName"
            placeholder="LAST NAME"
          />
        </div>
        <div class="text-red-600 message">
          {{ validation.firstError('lastName') }}
        </div>
      </div>
      <div
        class="py-2 xm:my-10"
        :class="{ error: validation.hasError('email') }"
      >
        <div class="font-bold text-middleBlue text-3xl"></div>
        <div
          class="star font-bold text-middleBlue text-3xl border-b border-middleBlue"
        >
          <input
            class="pl-8 font-bold text-indigoDye placeholder-indigoDye text-3xl w-5/6 focus:outline-none"
            type="text"
            v-model="email"
            placeholder="EMAIL"
          />
        </div>
        <div class="text-red-600 message">
          {{ validation.firstError('email') }}
        </div>
      </div>
      <div
        class="py-2 xm:my-10"
        :class="{ error: validation.hasError('phone') }"
      >
        <div class="font-bold text-middleBlue text-3xl"></div>
        <div
          class="star font-bold text-middleBlue text-3xl border-b border-middleBlue"
        >
          <input
            class="pl-8 font-bold text-indigoDye placeholder-indigoDye text-3xl w-5/6 focus:outline-none"
            type="text"
            v-model="phone"
            placeholder="PHONE"
          />
        </div>
        <div class="text-red-600 message">
          {{ validation.firstError('phone') }}
        </div>
      </div>
      <div class="" :class="{ error: validation.hasError('comment') }">
        <div class="font-bold text-middleBlue text-3xl"></div>
        <div
          class="star font-bold text-middleBlue text-3xl border-b border-middleBlue"
        >
          <input
            class="pl-8 font-bold text-indigoDye placeholder-indigoDye text-3xl w-5/6 focus:outline-none"
            type="text"
            v-model="comment"
            placeholder="COMMENT"
          />
        </div>
        <div class="text-red-600 message">
          {{ validation.firstError('comment') }}
        </div>
      </div>

      <button
        type="button"
        class="bg-treasuredTeal text-white font-bold py-2 lg:w-2/4 w-full h-16 xm:w-full xm:my-8"
        @click="submit"
      >
        Submit
      </button>
    </form>
    <div class="lg:col-span-5 lg:mr-32 lg:my-auto mb-8">
      <img class="w-full xl:my-24" src="~assets/image/submit.png" alt="" />
    </div>
  </div>
</template>
<style>
.star::before {
  content: '*';
}
</style>

<script>
import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator'
const Validator = SimpleVueValidation.Validator
Vue.use(SimpleVueValidation)
export default {
  data: function () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comment: '',
    }
  },
  validators: {
    firstName: function (value) {
      return Validator.value(value)
        .required()
        .regex('^[A-Za-z]*$', 'Must only contain alphabetic characters.')
    },
    lastName: function (value) {
      return Validator.value(value)
        .required()
        .regex('^[A-Za-z]*$', 'Must only contain alphabetic characters.')
    },
    phone: function (value) {
      return Validator.value(value).digit().required().length(10)
    },
    email: function (value) {
      return Validator.value(value).required().email()
    },
    comment: function (value) {
      return Validator.value(value).required()
    },
  },
  methods: {
    submit: function () {
      this.$validate().then(function (success) {
        if (success) {
          console.log('success')
          $nuxt.$router.push('/secondpage')
        }
      })
    },
    reset: function () {
      this.firstName = ''
      this.LastName = ''
      this.gender = ''
      this.phone = ''
      this.comment = ''
      this.validation.reset()
    },
  },
}
</script>
