<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card color="#f7f9e4" light :max-width="$vuetify.breakpoint.xsOnly?250:350">
        <v-list-item>
            <v-list-item-avatar tile width=50 height=50>
                <v-img contain src="@/assets/church.svg"/>
            </v-list-item-avatar>
            <v-list-item-title>
                {{fullName}}
            </v-list-item-title>
        </v-list-item>

        <v-card-text
          class="headline font-weight-bold"
        >{{comment.comment}}</v-card-text>

        <v-card-actions>
          <v-rating color="orange" background-color="orange" :value="3"></v-rating>
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
  },
  computed: {
    fullName: function () {
      return `${this.comment.firstName} ${this.comment.lastName}`
    }
  }
}
</script>

<style>
</style>
