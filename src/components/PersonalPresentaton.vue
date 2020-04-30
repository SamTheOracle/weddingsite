<template>
 <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
      shaped
        outlined
        :max-width="$vuetify.breakpoint.xsOnly?300:450"
      >
        <v-img :max-height="$vuetify.breakpoint.xsOnly?300:450" src="@/assets/giovibella.jpg"></v-img>

        <v-card-text>
          <h2 class="title primary--text">Giovanna</h2>
Leggimi! sono una didascalia
        </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn>See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  data: () => {
    return {
      show: false
    }
  }
}
</script>
<style>
.presentation {
  /*   font-family: "Open Sans", cursive;
 */
  font-family: "Pompiere", cursive;
  font-style: italic;
  font-weight: 300;
  font-size: 23px;
}
.caption{
  font-weight: 300;

}
@media only screen and (max-width: 600px) {
  .cardtitle {
    font-size: 35px;
  }
}
</style>
