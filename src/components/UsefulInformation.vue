<template>
  <v-container fluid style="background-color:#f7f9e4">
    <p class="nicetitle text-center" v-if="!english">Informazioni</p>
    <p class="nicetitle text-center" v-else>Information</p>

    <v-expansion-panels style="max-width:900px" class="mx-auto" v-if="!english">
      <v-expansion-panel>
        <v-expansion-panel-header class="descr">Come raggiungere la chiesa</v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <p class="subtitle">Entrata in cripta</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <v-divider />
          <p class="subtitle">Parcheggi</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item
                class="pa-0"
                v-for="(parking,i) in parkings"
                :key="i"
                @click="onParkingClick(parking)"
              >
                <v-list-item-avatar>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    style="white-space:pre-line!important"
                  >{{parking.coordinates.label}} - {{parking.name}} ({{parking.type}})</v-list-item-title>
                  <v-list-item-subtitle style="white-space:pre-line!important">{{parking.address}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn
              rounded
              :small="$vuetify.breakpoint.xsOnly"
              color="#EBF0BA"
              @click="onParkingMapClick()"
            >
              mappa
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="descr">Come raggiungere l' agriturismo</v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <p class="subtitle">Uscita Bedizzole</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <v-divider />
          <p class="subtitle">Parcheggi</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item class="pa-0" @click="onRestaurantClick()">
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
            <v-btn
              rounded
              :small="$vuetify.breakpoint.xsOnly"
              color="#EBF0BA"
              @click="onRestaurantClick()"
            >
              mappa
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="descr">Consigli per il dormire</v-expansion-panel-header>
        <v-expansion-panel-content eager>
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

    <v-expansion-panels style="max-width:900px" class="mx-auto" v-else>
      <v-expansion-panel>
        <v-expansion-panel-header class="descr" >How to reach the church</v-expansion-panel-header>

        <v-expansion-panel-content eager>
          <p class="subtitle">Entering in the crypt</p>
          <p>This is a sentence in english explaing how to get into the church</p>
          <v-divider />
          <p class="subtitle">Parking areas</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item
                class="pa-0"
                v-for="(parking,i) in parkingsEnglish"
                :key="i"
                @click="onParkingClick(parking)"
              >
                <v-list-item-avatar>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    style="white-space:pre-line!important"
                  >{{parking.coordinates.label}} - {{parking.name}} ({{parking.type}})</v-list-item-title>
                  <v-list-item-subtitle style="white-space:pre-line!important">{{parking.address}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn
              rounded
              :small="$vuetify.breakpoint.xsOnly"
              color="#EBF0BA"
              @click="onParkingMapClick()"
            >
              map
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="descr">How to reach the agriturismo</v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <p class="subtitle">Bedizzole exit</p>
          <p>This is a sentence in english that briefly explains how to get there</p>
          <v-divider />
          <p class="subtitle">Parcheggi</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item class="pa-0" @click="onRestaurantClick()">
                <v-list-item-avatar>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Restaurant parking area</v-list-item-title>
                  <v-list-item-subtitle>Via F.lli Venturoli, Bedizzole (Bs)</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn
              rounded
              :small="$vuetify.breakpoint.xsOnly"
              color="#EBF0BA"
              @click="onRestaurantClick()"
            >
              amp
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="descr">Advices for accomodation</v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <p class="subtitle">Bed & Breakfast</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item class="pa-0" v-for="(sleep,i) in sleepingsEnglish" :key="i">
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
              map
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-dialog
      v-model="dialog"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      :hide-overlay="$vuetify.breakpoint.xsOnly"
      transition="dialog-bottom-transition"
    >
      <MapComponent
        :coordinates="coordinates"
        :center="center"
        v-on:mapdialogclosed="dialog=false"
        :title="title"
      />
      <!-- <v-snackbar v-model="snackbar" :timeout="2000">
        Ingradisci la mappa per vedere gli altri parcheggi
        <v-btn text @click="snackbar = false">close</v-btn>
      </v-snackbar>-->
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  components: {
    MapComponent: () => import('./MapComponent')
  },
  props: {
    language: String
  },
  data: () => {
    return {
      english: false,
      dialog: false,
      center: {},
      title: '',
      church: {
        lat: 45.5358,
        lng: 10.2296
      },
      restaurant: {
        lat: 45.517735,
        lng: 10.41357
      },
      parkings: [
        {
          type: 'Pagamento',
          name: 'Parcheggio Goito Brescia',
          address: 'Via Spalto S. Marco, 8, \n 25121  Brescia BS',
          coordinates: {
            lat: 45.5349,
            lng: 10.2301,
            label: 'P1'
          }
        },
        {
          type: 'Pagamento',
          name: 'Piazzale Arnaldo',
          address: 'Piazzale Arnaldo, \n 25121 Brescia BS ',
          coordinates: {
            lat: 45.5363,
            lng: 10.2307,
            label: 'P2'
          }
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
      ],
      parkingsEnglish: [
        {
          type: 'Toll',
          name: 'Parking area Goito Brescia',
          address: 'Via Spalto S. Marco, 8, \n 25121  Brescia BS',
          coordinates: {
            lat: 45.5349,
            lng: 10.2301,
            label: 'P1'
          }
        },
        {
          type: 'Toll',
          name: 'Piazzale Arnaldo',
          address: 'Piazzale Arnaldo, \n 25121 Brescia BS ',
          coordinates: {
            lat: 45.5363,
            lng: 10.2307,
            label: 'P2'
          }
        }
      ],
      sleepingsEnglish: [
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
      ],
      coordinates: []
    }
  },
  methods: {
    onClickSleep (link) {
      window.location.href = link
    },
    onParkingClick (parking) {
      this.coordinates = []
      this.coordinates.push(parking.coordinates)
      this.center = this.church
      this.title = parking.name
      this.dialog = true
    },
    onParkingMapClick () {
      this.coordinates = this.parkings.map(parking => parking.coordinates)
      this.center = this.church
      this.title = 'Parcheggi per la chiesa'
      this.dialog = true
    },
    onRestaurantClick () {
      this.coordinates = []
      this.center = this.restaurant
      this.title = 'Agriturismo Roccolo'
      this.dialog = true
    }
  },
  watch: {
    language: function () {
      this.english = !this.english
    }
  }
}
</script>

<style>
</style>
