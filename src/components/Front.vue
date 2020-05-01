<template>
  <v-container fluid class="pa-0" id="main-container">
    <v-row align="center" justify="center" no-gutters style="height:100vh">
      <v-col>

        <v-img
          src="@/assets/ggconnome.png"
          contain
          style="max-height:100vh"
          v-if="$vuetify.breakpoint.smAndUp"
        />

        <div v-else>
          <div v-if="showText">
            <p class="nicemain text-center pa-0 ma-0">Giovanna</p>
            <p class="nicemain text-center pa-0 ma-0">e Giacomo</p>
          </div>
          <v-img
            src="@/assets/ioegiovi.png"
            v-on:load="showText=true"
            contain
            style="max-height:100vh;"
          ></v-img>
        </div>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Front',
  data: () => {
    return {
      showText: false
    }
  }
}
</script>

<style>
#main-container {
  background-color: #f7f9e4;
  min-height: 100vh;
}
.nicemain {
  font-family: "Satisfy", cursive;
  color: #431008;
  font-size: 45px !important;
  transform: rotate(-10deg);
}
/* @media only screen and (max-width: 600px){

} */
</style>
