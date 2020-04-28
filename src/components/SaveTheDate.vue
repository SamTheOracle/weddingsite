<template>
  <v-sheet style="min-height:inherit">
<!--     <p class="text-center niceparagraph">Per confermare clicca il bottone</p>
 -->    <v-row align="center" justify="center">
      <v-btn color="success" class="mx-auto" :small="$vuetify.breakpoint.xsOnly">
        Parteciperò!
        <v-icon right color="red" :small="$vuetify.breakpoint.xsOnly">mdi-heart</v-icon>
      </v-btn>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'SaveTheDate'
}
</script>
<style>
.niceparagraph {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-style: italic;
  font-size: 20px;
}
@media only screen and (max-width: 600px) {
  .niceparagraph {
    font-size: 18px;
  }
}
</style>
