<template>
  <v-container fluid class="pa-0" id="main-container">
    <v-row align="center" justify="center" no-gutters style="height:100vh">
      <v-col>

        <v-img
          src="@/assets/ggconnome.jpg"
          contain
          style="max-height:100vh"
          v-on:load="onImageLoaded()"
          v-if="$vuetify.breakpoint.smAndUp"
        />

        <div v-else>
          <div v-if="showText" style="overflow:hidden">
            <p class="nicemain text-center pa-0 ma-0">Giovanna</p>
            <p class="nicemain text-center pa-0 ma-0">e Giacomo</p>
          </div>
          <v-img
            src="@/assets/gg.jpg"
            v-on:load="onImageLoaded()"
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
  },
  methods: {
    onImageLoaded () {
      this.showText = true
      this.$emit('imageloaded')
    }
  }

}
</script>

<style>

</style>
