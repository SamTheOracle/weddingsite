<template>
  <v-container fluid class="pa-0" id="main-container">
    <v-row align="center" justify="center" no-gutters style="height:100vh">
      <v-col>
        <!--           <v-img :src="$vuetify.breakpoint.xsOnly?require('@/assets/ggconnome.png'):require('@/assets/ggconnome.png')" contain style="max-height:100vh"/>
        -->
        <!-- <p class="nice pa-0 text-center ma-0">Giovanna e Giacomo</p> -->
        <!--           <p class="nice pa-0 text-center mt-0">e Giacomo</p>

        -->
        <v-img
          src="@/assets/ggconnome.png"
          contain
          style="max-height:100vh"
          v-if="$vuetify.breakpoint.smAndUp"
        />

        <div v-else>
          <!-- <v-img src="@/assets/names.png" height="80" width="300" /> -->
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

      <!--  <v-col :cols="$vuetify.breakpoint.smAndUp?6:12">
        <v-img src="@/assets/description.png" v-if="$vuetify.breakpoint.smAndUp"/>

      </v-col>-->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MainSection',
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
