<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card color="#f7f9e4" light max-width="300">
        <v-card-title>
          <v-icon large left>mdi-twitter</v-icon>
          <span class="title font-weight-light">Twitter</span>
        </v-card-title>

        <v-card-text
          class="headline font-weight-bold"
        >"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>

        <v-card-actions>
          <v-rating color="orange" background-color="orange" value="3"></v-rating>
        </v-card-actions>
        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#EBF0BA">
            <v-btn @click="onRateClick">Premia il commento</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: {
    comment: Object
  }
}
</script>

<style>
</style>
