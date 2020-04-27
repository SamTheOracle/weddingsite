<template>
  <div >
    <v-container fluid class="pa-0"  id="main-container">
      <v-row align="start" justify="center" no-gutters>
        <v-col>
          <v-img src="@/assets/gg.png" contain style="max-height:100vh"/>
        </v-col>
        <!--  <v-col :cols="$vuetify.breakpoint.smAndUp?6:12">
        <v-img src="@/assets/description.png" v-if="$vuetify.breakpoint.smAndUp"/>

        </v-col>-->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MainSection'
}
</script>

<style>
#main-container{
background-color:#F7F9E4;
max-height: 100vh;
}
/* @media only screen and (max-width: 600px){

} */
</style>
