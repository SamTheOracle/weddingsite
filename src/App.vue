<template>
  <v-app>
    <v-app-bar color="#EBF0BA" app clipped-left inverted-scroll>
      <v-app-bar-nav-icon @click.stop="drawer=!drawer" v-if="$vuetify.breakpoint.smAndUp"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline ml-2">Giovanna e Giacomo</v-toolbar-title>
      <v-spacer />
      <v-btn text>Informazioni</v-btn>
      <v-btn text>Save the date</v-btn>
      <v-btn text>Contributo</v-btn>
    </v-app-bar>

    <MainSection />
    <SecondSection id="second-section"/>
  </v-app>
</template>

<script>
import MainSection from './components/MainSection'
import SecondSection from './components/SecondSection'
export default {
  name: 'App',

  components: {
    MainSection,
    SecondSection
  },

  data: () => ({
    drawer: null
  })
}
</script>
