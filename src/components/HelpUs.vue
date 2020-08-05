<template>
  <v-container fluid style="background-color:#f7f9e4">
    <v-row align="center" justify="center" v-if="!swapLanguage">
      <p class="nicetitle text-center">Un aiuto per il nostro futuro</p>
    </v-row>
    <v-row align="center" justify="center" v-else>
      <p class="nicetitle text-center">Some help for our future</p>
    </v-row>
    <v-row align="center" justify="center" v-if="!swapLanguage">
      <v-col class="text-center">
        <p class="descr text-center">Tanti, piccoli sogni nel cassetto da realizzare</p>
        <p class="overline mt-8" style="font-size:15px!important">DE42100110012626903491</p>
        <p class="text-caption">Giacomo Zanotti</p>
      </v-col>
      <v-col class="text-center">
        <p class="descr text-center">Per la nostra casa</p>
        <v-btn class="mt-6" color="#EBF0BA" rounded @click="openList()">Lista Nozze</v-btn>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" v-else>
      <v-col class="text-center">
        <p class="descr text-center">Many, small dreams to be realized</p>
        <p class="overline mt-8" style="font-size:15px!important">DE42100110012626903491</p>
        <p class="text-caption">Giacomo Zanotti</p>
      </v-col>
      <v-col class="text-center">
        <p class="descr text-center">For our home</p>
        <v-btn class="mt-6" color="#EBF0BA" rounded @click="openList()">Wedding List</v-btn>
      </v-col>
    </v-row>
    <p class="descr text-center mt-8" v-if="!swapLanguage">Grazie</p>
    <p class="descr text-center mt-8" v-else>Thank You</p>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      swapLanguage: false,
    };
  },
  props: {
    language: String,
  },
  watch: {
    language: function () {
      this.swapLanguage = !this.swapLanguage;
    },
  },
  methods: {
    openList() {
      window.open("https://www.amazon.it/wedding/share/giovannaegiacomo");
    },
  },
};
</script>
