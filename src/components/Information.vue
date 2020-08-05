<template>
  <v-container fluid class="mt-5">
    <p class="nicetitle text-center" v-if="!swapLanguage">Gli sposi annunciano con gioia il loro matrimonio</p>
    <p class="nicetitle text-center" v-else>Joyfully invite you to their wedding</p>
    <v-row align="center" justify="center" v-if="!swapLanguage">
      <v-col :cols="$vuetify.breakpoint.smAndUp?6:12">
        <Celebration :type="'Celebrazione'" :icon="'church.svg'" :title="'Basilica Santa Maria delle Grazie'" :place="'Via delle Grazie, 13, 25122 Brescia BS'" :timeSentence="'Sabato 10 Ottobre 2020'" :timeSecondSentence="'ore 11:30'" :placeSecondSentence="'Brescia (BS)'"/>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.smAndUp?6:12">
        <Celebration :type="'Ricevimento'" :icon="'wedding-cake.svg'" :title="'Agriturismo Roccolo'" :place="'Via F.lli Venturoli'" :placeSecondSentence="'Bedizzole (BS)'" :timeSentence="'Sabato 10 Ottobre 2020'" />
      </v-col>
    </v-row>
    <v-row align="center" justify="center"  v-else>
      <v-col :cols="$vuetify.breakpoint.smAndUp?6:12">
        <Celebration :type="'Mess'" :icon="'church.svg'" :title="'Basilica Santa Maria delle Grazie'" :place="'Via delle Grazie, 13, 25122 Brescia BS'" :timeSentence="'Saturday 10 October 2020'" :timeSecondSentence="'at 11:00'" :placeSecondSentence="'Brescia (BS)'"/>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.smAndUp?6:12">
        <Celebration :type="'Reception to follow'" :icon="'wedding-cake.svg'" :title="'Agriturismo Roccolo'" :place="'Via F.lli Venturoli'" :placeSecondSentence="'Bedizzole (BS)'" :timeSentence="'Saturday 10 October 2020'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const SaveTheDate = () => import('./SaveTheDate')
const Celebration = () => import('./Celebration')
export default {
  name: 'Information',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SaveTheDate,
    Celebration
  },
  data: () => {
    return {
      swapLanguage: false
    }
  },
  props: {
    language: String
  },
  watch: {
    language: function () {
      this.swapLanguage = !this.swapLanguage
    }
  }
}
</script>

<style>

</style>
