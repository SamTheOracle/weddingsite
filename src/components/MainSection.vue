<template>
  <div style="height:100vh;background-color:#F7F9E4">
    <v-container fluid class="pa-0">
      <v-row align="start" justify="center" no-gutters>
        <v-col :cols="$vuetify.breakpoint.smAndUp?10:12" contain>
          <v-img src="@/assets/gg.png"  :style="$vuetify.breakpoint.smAndUp?'height:98vh':''" :contain="$vuetify.breakpoint.smAndUp"/>
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
</style>
