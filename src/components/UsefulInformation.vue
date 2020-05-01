<template>
  <v-container fluid style="background-color:#f7f9e4">
    <p class="nicetitle text-center">Informazioni</p>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="descr">Come raggiungere la chiesa</v-expansion-panel-header>
        <v-expansion-panel-content eager >
          <p class="subtitle">Entrata in cripta</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <v-divider />
          <p class="subtitle">Parcheggi</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item class="pa-0" v-for="(parking,i) in parkings" :key="i">
                <v-list-item-avatar>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>P{{i + 1}} - {{parking.name}} ({{parking.type}})</v-list-item-title>
                  <v-list-item-subtitle>{{parking.address}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn rounded :small="$vuetify.breakpoint.xsOnly" color="#EBF0BA">
              mappa
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="descr">Come raggiungere l' agriturismo</v-expansion-panel-header>
        <v-expansion-panel-content>
          <p class="subtitle">Uscita Bedizzole</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <v-divider />
          <p class="subtitle">Parcheggi</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item class="pa-0">
                <v-list-item-avatar>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Parcheggio del ristorante</v-list-item-title>
                  <v-list-item-subtitle>Via F.lli Venturoli, Bedizzole (Bs)</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn rounded :small="$vuetify.breakpoint.xsOnly" color="#EBF0BA">
              mappa
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="descr">Consigli per il dormire</v-expansion-panel-header>
        <v-expansion-panel-content>
          <p class="subtitle">Bed & Breakfast</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item class="pa-0" v-for="(sleep,i) in sleepings" :key="i">
                <v-list-item-avatar>
                  <v-icon>mdi-bed</v-icon>
                </v-list-item-avatar>
                <v-list-item-content @click="onClickSleep(sleep.link)">
                  <v-list-item-title>{{sleep.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{sleep.address}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn rounded :small="$vuetify.breakpoint.xsOnly" color="#EBF0BA">
              mappa
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      parkings: [
        {
          type: 'Gratuito',
          name: 'Bel Parcheggio',
          address: 'Via Arimanno 9, Brescia (BS)'
        },
        {
          type: 'Gratuito',
          name: 'Bel Parcheggio',
          address: 'Via Arimanno 9, Brescia (BS)'
        },
        {
          type: 'Pagamento',
          name: 'Bel Parcheggio',
          address: 'Via Arimanno 9, Brescia (BS)'
        },
        {
          type: 'Pagamento',
          name: 'Bel Parcheggio',
          address: 'Via Arimanno 9, Brescia (BS)'
        }
      ],
      sleepings: [
        {
          name: 'Agriturismo Roccolo',
          address: 'Via F.lli Venturoli',
          link: 'http://www.agriturismoroccolo.com/'
        },
        {
          name: 'Agriturismo Roccolo',
          address: 'Via F.lli Venturoli',
          link: 'http://www.agriturismoroccolo.com/'
        },
        {
          name: 'Agriturismo Roccolo',
          address: 'Via F.lli Venturoli',
          link: 'http://www.agriturismoroccolo.com/'
        }
      ]
    }
  },
  methods: {
    onClickSleep (link) {
      window.location.href = link
    }
  }
}
</script>

<style scoped>
.subtitle {
  font-family: "Patrick Hand SC", cursive;
  font-size: 28px;
  font-weight: 400;
  font-style: italic;
  white-space: pre-line;
  margin: 10px 0 0 0;
}
</style>
