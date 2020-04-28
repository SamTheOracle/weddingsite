<template>
  <v-card>
    <v-list-item two-line>
      <v-list-item-content>
        <p class="cardtitle mb-1">Cripta di Sant'Afra</p>
      </v-list-item-content>

      <v-list-item-avatar tile :width="$vuetify.breakpoint.smAndUp?100:70" :height="$vuetify.breakpoint.smAndUp?100:70">
        <v-img src="@/assets/criss-cross.svg" contain />
      </v-list-item-avatar>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-avatar tile width="80">
        <v-img src="@/assets/calendar.svg" contain />
      </v-list-item-avatar>
      <v-list-item-content>
        <p class="descr mb-1">Sabato 10 Ottobre 2020, alle ore 11:00</p>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-avatar tile width="80">
        <v-img src="@/assets/google-maps.svg" contain />
      </v-list-item-avatar>
      <v-list-item-content>
        <p class="descr mb-1">Corso Magenta 68, Brescia (BS)</p>
      </v-list-item-content>
    </v-list-item>
   <!--  <v-row align="center" justify="end">
        <v-col cols="10">
        </v-col>
    </v-row> -->
  </v-card>
</template>

<script>
export default {
  name: 'CelebrationComponent'
}
</script>

<style>
.cardtitle {
  font-family: "Open Sans", cursive;
  font-size: 35px;
  font-weight: 600;
  font-style: italic;
}
.descr {
  font-family: "Open Sans", cursive;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
}
@media only screen and (max-width: 600px) {
  .cardtitle {
    font-size: 30px;
  }
}
</style>
