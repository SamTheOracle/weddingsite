<template>
  <v-container fluid style="background-color:#f7f9e4">
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <p class="nicetitle text-center">Conferma la tua partecipazione</p>
        <p
          class="descr text-center"
        >Dicci se verrai al nostro matrimonio! Casoncelli e ciccia a volontà!</p>
        <v-btn
          rounded
          color="#EBF0BA"
          :large="$vuetify.breakpoint.mdAndUp"
          @click="$emit('partecipationclicked')"
        >
          Parteciperò
          <!-- <v-icon color="red">mdi-heart</v-icon> -->
        </v-btn>
          <p class="overline mt-8" style="font-size:12px!important">È gradita la conferma entro il 30 Agosto</p>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
</style>
