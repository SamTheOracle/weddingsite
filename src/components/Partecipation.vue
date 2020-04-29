<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col  class="text-center">
        <p class="nicetitle text-center">Conferma la tua partecipazione</p>
        <p class="descr text-center">Dicci se verrai al nostro matrimonio! Casoncelli e ciccia a volontà!</p>
        <v-btn color="success" :large="$vuetify.breakpoint.mdAndUp" @click="$emit('partecipationclicked')">
          Parteciperò
          <v-icon color="red">mdi-heart</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
</style>
