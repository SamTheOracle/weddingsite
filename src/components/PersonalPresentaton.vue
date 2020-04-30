<template>
  <v-card shaped outlined :max-width="$vuetify.breakpoint.xsOnly?300:450">
    <v-img :height="$vuetify.breakpoint.xsOnly?300:450" :src="require('@/assets/'+image)"></v-img>

    <v-card-text>
      <h2 class="title primary--text">Giovanna</h2>Leggimi! sono una didascalia
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    image: String
  },
  data: () => {
    return {
      show: false
    }
  }
}
</script>
<style>
.presentation {
  /*   font-family: "Open Sans", cursive;
 */
  font-family: "Pompiere", cursive;
  font-style: italic;
  font-weight: 300;
  font-size: 23px;
}
.caption {
  font-weight: 300;
}
@media only screen and (max-width: 600px) {
  .cardtitle {
    font-size: 35px;
  }
}
</style>
