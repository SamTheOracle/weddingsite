<template>
  <v-container fluid class="pa-0" style="background-color:#F7F9E4">
    <v-row no-gutters align="start" justify="center">
      <v-col cols="6" v-if="$vuetify.breakpoint.smAndUp">
        <v-img src="@/assets/description.png" style="height:98vh"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SecondSection',
  components: {}
}
</script>

<style>
</style>
