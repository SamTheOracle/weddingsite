<template>
  <v-card height="700" style="width:100%;overflow:hidden">
    <v-toolbar color="#EBF0BA">
      <v-btn text fab :large="$vuetify.breakpoint.mdAndUp" light @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer v-if="$vuetify.breakpoint.smAndUp" />
      <v-toolbar-title class="text-center cardtitle">Qualche dettaglio</v-toolbar-title>
      <v-spacer v-if="$vuetify.breakpoint.smAndUp" />
    </v-toolbar>
    <!--     <p class="text-center niceparagraph">Per confermare clicca il bottone</p>
    -->
    <v-row align="start" justify="center">
      <!-- <v-btn color="success" class="mx-auto" :small="$vuetify.breakpoint.xsOnly" @click="onPartecipationClicked()">
        Parteciperò!
        <v-icon right color="red" :small="$vuetify.breakpoint.xsOnly">mdi-heart</v-icon>
      </v-btn>-->
      <v-col>
        <div class="text-center">
          <v-progress-circular color="red" indeterminate v-if="spinner" />
        </div>
        <v-container fluid class="text-center fill-height">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd71mswKRJUgsO_bdybbwCJyfEXHMjQK685keIucqYW0TRBig/viewform?embedded=true"
            width="100%"
            height="600px"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            class="mx-auto"
            :onload="spinner = false"
          >
            <v-progress-circular color="red" indeterminate class="mx-auto" />
          </iframe>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'SaveTheDate',
  data: () => {
    return {
      width: null,
      height: 700,
      spinner: true
    }
  },
  mounted () {
    this.resize()
  },
  methods: {
    resize () {
      const width = window.innerWidth
      if (width < 450) {
        this.width = 320
      } else if ((width >= 450) & (width < 600)) {
        this.width = 400
      } else if ((width >= 600) & (width < 768)) {
        this.width = 550
      } else {
        this.width = 700
      }
    }
  }
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
