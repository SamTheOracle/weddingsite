<template>
  <v-container fluid class="pa-0" id="main-container">
    <v-row align="center" justify="center" no-gutters style="height:100vh">
      <v-col>
        <!--           <v-img :src="$vuetify.breakpoint.xsOnly?require('@/assets/ggconnome.png'):require('@/assets/ggconnome.png')" contain style="max-height:100vh"/>
        -->
        <!-- <p class="nice pa-0 text-center ma-0">Giovanna e Giacomo</p> -->
        <!--           <p class="nice pa-0 text-center mt-0">e Giacomo</p>

        -->
         <v-img src="@/assets/ggconnome.png" contain style="max-height:100vh" v-if="$vuetify.breakpoint.smAndUp"/>

        <div v-else>
          <v-img src="@/assets/names.png" height="60" width="300" />
          <v-img src="@/assets/ioegiovi.png" contain style="max-height:100vh" />
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
  name: 'MainSection'
}
</script>

<style>
#main-container {
  background-color: #f7f9e4;
  min-height: 100vh;
}
.nice {
  font-family: "Satisfy", cursive;
  color: #431008;
  font-size: 34px !important;
}
/* @media only screen and (max-width: 600px){

} */
</style>
