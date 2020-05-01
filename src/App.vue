<template>
  <v-app>
    <v-app-bar color="#EBF0BA" app inverted-scroll>
      <v-app-bar-nav-icon @click.stop="drawer=true" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
      <v-spacer v-if="$vuetify.breakpoint.smAndDown" />
      <v-toolbar-title class="nice">Giovanna e Giacomo</v-toolbar-title>
      <v-spacer />
      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          text
          color="#431008"
          v-for="(button,i) in buttons"
          :key="i"
          @click="doAction(button.text)"
        >{{button.text}}</v-btn>
      </div>
    </v-app-bar>
    <Front v-on:imageloaded="mainLoaded=true" />

    <div v-if="mainLoaded">
      <v-navigation-drawer
        app
        clipped
        v-model="drawer"
        v-if="$vuetify.breakpoint.smAndDown"
        style="height:100vh"
      >
        <v-list-item two-line style="background-color:#EBF0BA">
          <v-list-item-avatar tile width="80" height="80">
            <v-img src="@/assets/ioegiovi.svg" contain />
          </v-list-item-avatar>
          <v-list-item-content>
            <p class="drawertitle mb-1">Giovanna e Giacomo</p>
          </v-list-item-content>
        </v-list-item>

        <v-list nav flat>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(element,i) in computedLinks()"
              :key="i"
              @click="doAction(element.button)"
              v-resize="computedLinks"
              two-line
            >
              <v-list-item-avatar tile>
                <v-img :src="require('@/assets/'+element.image)" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  :class="$vuetify.breakpoint.smAndUp?'subtitle-1':''"
                  v-text="element.button"
                ></v-list-item-title>
                <v-list-item-subtitle v-text="element.text"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <Information />

      <Partecipation v-on:partecipationclicked="dialog = true" id="partecipation" />

      <Us id="us" />

      <HelpUs id="help" />

      <SliderComments id="comments" />

      <UsefulInformation id="information" />

      <Contacts id="contacts" />

      <v-dialog
        v-model="dialog"
        :fullscreen="$vuetify.breakpoint.smAndDown"
        :hide-overlay="$vuetify.breakpoint.smAndDown"
        transition="dialog-bottom-transition"
        max-width="800"
        scrollable
      >
        <SaveTheDate v-on:close="dialog = false" />
      </v-dialog>
    </div>
    <v-footer color="#EBF0BA" v-if="mainLoaded">
      <p class="nice text-center mx-auto">
        Fatto con
        <v-icon color="red">mdi-heart</v-icon>da Oracolo Solutions s.r.l.
      </p>
    </v-footer>
  </v-app>
</template>

<script>
/* const Information = () => import('./components/Information')
const Timeline = () => import('./components/Timeline')
const SaveTheDate = () => import('./components/SaveTheDate')
const Partecipation = () => import('./components/Partecipation')
const SliderComments = () => import('./components/SliderComments')
const Us = () => import('./components/Us')
const Front = () => import('./components/Front') */

export default {
  name: 'App',

  components: {
    Front: () => import('./components/Front'),
    Information: () => import('./components/Information'),
    SaveTheDate: () => import('./components/SaveTheDate'),
    Partecipation: () => import('./components/Partecipation'),
    SliderComments: () => import('./components/SliderComments'),
    Us: () => import('./components/Us'),
    HelpUs: () => import('./components/HelpUs'),
    UsefulInformation: () => import('./components/UsefulInformation'),
    Contacts: () => import('./components/Contacts')
  },

  data: () => ({
    drawer: false,
    overlay: false,
    dialog: false,
    mainLoaded: false,
    buttons: [
      {
        text: 'Informazioni'
      },
      {
        text: 'Conferma'
      },
      {
        text: 'Aiutaci'
      }
    ],
    links: [
      {
        text: 'Verrai?',
        button: 'Conferma',
        image: 'confirmationblack.svg'
      },
      {
        button: 'Noi',
        text: 'La nostra storia',
        image: 'couple.svg'
      },
      {
        text: 'Siamo nelle vostre mani',
        button: 'La nostra casa',
        image: 'house.svg'
      },
      {
        button: 'Uno spazio per voi',
        text: 'Un pensiero per gli sposi',
        image: 'comment.svg'
      },
      {
        button: 'Informazioni',
        text: 'Come raggiungere il luogo',
        image: 'information.svg'
      },
      {
        button: 'Contatti',
        text: 'Contatta gli sposi',
        image: 'contacts.svg'
      }
    ]
  }),
  methods: {
    doAction (action) {
      if (action === 'Informazioni') {
        this.$vuetify.goTo('#information', { duration: 1000, offset: 100 })
      }
      if (action === 'Conferma') {
        this.$vuetify.goTo('#partecipation', { duration: 1000, offset: 100 })
      }
      if (action === 'La nostra casa') {
        this.$vuetify.goTo('#help', { duration: 1000, offset: -100 })

        /*  this.dialog = true */
      }
      if (action === 'Noi') {
        this.$vuetify.goTo('#us', { duration: 1000, offset: 100 })
      }
      if (action === 'Contatti') {
        this.$vuetify.goTo('#contacts', { duration: 1000, offset: 100 })
      }
      if (action === 'Uno spazio per voi') {
        this.$vuetify.goTo('#comments', { duration: 1000, offset: 100 })
      }
      if (window.innerWidth <= 800) {
        this.drawer = false
      }
    },
    computedLinks: function () {
      const width = window.innerWidth
      if (width < 360) {
        console.log(this.links.filter(link => link.button !== 'Informazioni'))
        return this.links.filter(link => link.button !== 'Informazioni')
      } else {
        return this.links
      }
    }
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Parisienne&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Coming+Soon&family=Patrick+Hand+SC&family=Pompiere&display=swap");
.nice {
  font-family: "Satisfy", cursive;
  color: #431008;
  font-size: 34px !important;
}
.drawertitle {
  font-family: "Satisfy", cursive;
  color: #431008;
  font-size: 30px !important;
}
@media only screen and (max-width: 340px) {
  .nice {
    font-size: 30px !important;
  }
}
/* #withbg {
  background: url("~@/assets/test.jpg");
  background-size: cover;
  background-repeat: no-repeat;
} */
</style>
