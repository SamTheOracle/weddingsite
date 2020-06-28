<template>
  <v-container fluid style="background-color:#f7f9e4">
    <v-row align="center" justify="center"  v-if="!swapLanguage">
      <v-col  class="text-center">
        <p class="nicetitle text-center">Un aiuto per il nostro futuro</p>
        <p class="descr text-center">Tanti, piccoli sogni nel cassetto da realizzare</p>
        <p class="overline mt-8" style="font-size:15px!important">DE42100110012626903491</p>
        <p class="text-caption">Giacomo Zanotti</p>
        <p class="descr text-center mt-8">Grazie</p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" v-else>
      <v-col  class="text-center">
        <p class="nicetitle text-center">Some help for our future</p>
        <p class="descr text-center">Many, small dreams to be realized</p>
        <p class="overline mt-8" style="font-size:15px!important">DE42100110012626903491</p>
        <p class="text-caption">Giacomo Zanotti</p>
        <p class="descr text-center mt-8">Thank you</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      swapLanguage: false
    }
  },
  props: {
    language: String
  },
  watch: {
    language: function () {
      this.swapLanguage = !this.swapLanguage
    }
  }

}
</script>
