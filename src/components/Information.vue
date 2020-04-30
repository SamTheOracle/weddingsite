<template>
  <v-container fluid class="mt-5">
    <p class="nicetitle text-center">Gli sposi annunciano con gioia il loro matrimonio</p>
    <v-row align="center" justify="center">
      <v-col :cols="$vuetify.breakpoint.smAndUp?6:12">
        <Celebration :type="'Celebrazione'" :icon="'church.svg'" :title="'Cripta \n Sant\' Afra'" :place="'Corso Magenta, 68'" :timeSentence="'Sabato 10 Ottobre 2020'" :timeSecondSentence="'ore 11:00'" :placeSecondSentence="'Brescia (BS)'"/>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.smAndUp?6:12">
        <Celebration :type="'Ricevimento'" :icon="'wedding-cake.svg'" :title="'Agriturismo Roccolo'" :place="'Via F.lli Venturoli'" :placeSecondSentence="'Bedizzole (BS)'"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SaveTheDate from './SaveTheDate'
import Celebration from './Celebration'
export default {
  name: 'Information',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SaveTheDate,
    Celebration
  }
}
</script>

<style>
.nicetitle {
  font-family: "Satisfy", cursive;
  font-size: 50px;
  font-weight: 200;
}
@media only screen and (max-width: 600px) {
  .nicetitle {
    font-size: 30px;
  }
}
</style>
