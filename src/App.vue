<template>
  <v-app>
    <v-app-bar color="#EBF0BA" app inverted-scroll max-width="100vw" v-if="mainLoaded">
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

      <Information :language="language" />

      <Partecipation
        v-on:partecipationclicked="dialog = true"
        id="partecipation"
        :language="language"
      />

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
    <v-divider />
    <v-lazy
      :options="{
          threshold: .2
        }"
      v-model="footerLazy"
      transition="fade-transition"
      min-height="200"
    >
      <v-footer v-if="mainLoaded" color="white">
        <v-row>
          <v-col cols="6">
            <v-row align="end" justify="end" no-gutters>
              <v-col v-for="(link,i) in links.filter(f=>f.button!=='Contatti')" :key="i">
                <v-btn
                  text
                  :small="$vuetify.breakpoint.xsOnly"
                  @click="doAction(link.button)"
                >{{link.button}}</v-btn>
              </v-col>
              <v-col>
                <v-btn
                  text
                  :small="$vuetify.breakpoint.xsOnly"
                  @click="language == 'English'?language = 'Italiano':language='English'"
                >{{language}}</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" class="text-center">
            <v-img src="@/assets/github-logo.svg" height="70" width="70" class="mx-auto" />
            <p class="text-center mt-2 mb-0" style="white-spaces:pre-line;">
              Fatto con
              <span>
                <v-icon color="red">mdi-heart</v-icon>
              </span>
              da
            </p>
            <v-btn
              :small="$vuetify.breakpoint.xsOnly"
              depressed
              @click="onOracleClick()"
              color="#607D8B"
              dark
            >SamTheOracle</v-btn>
          </v-col>
        </v-row>
      </v-footer>
    </v-lazy>
  </v-app>
</template>

<script>
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
    swapLanguage: false,
    language: 'English',
    drawer: false,
    overlay: false,
    dialog: false,
    mainLoaded: false,
    footerLazy: false,
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
        text: 'La nostra casa',
        button: 'Aiutaci',
        image: 'house.svg'
      },
      {
        button: 'Commenti',
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
      // if (action === 'La nostra casa') {
      if (action === 'Aiutaci') {
        this.$vuetify.goTo('#help', { duration: 1000, offset: -100 })

        /*  this.dialog = true */
      }
      if (action === 'Noi') {
        this.$vuetify.goTo('#us', { duration: 1000, offset: 100 })
      }
      if (action === 'Contatti') {
        this.$vuetify.goTo('#contacts', { duration: 1000, offset: 100 })
      }
      /*       if (action === 'Uno spazio per voi') {

 */

      if (action === 'Aiutaci') {
        this.$vuetify.goTo('#comments', { duration: 1000, offset: 100 })
      }
      if (window.innerWidth <= 800) {
        this.drawer = false
      }
    },
    computedLinks: function () {
      const width = window.innerWidth
      if (width < 360) {
        return this.links.filter(link => link.button !== 'Informazioni')
      } else {
        return this.links
      }
    },
    onOracleClick () {
      window.location.href = 'https://github.com/SamTheOracle/weddingsite'
    }
  }
}
</script>
<style>
/* @import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Coming+Soon&family=Patrick+Hand+SC&family=Pompiere&display=swap"); */
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
.footertext {
  font-family: "Exo", sans-serif;
  font-size: 34px !important;
}
.subtitle {
  font-family: "Patrick Hand SC", cursive;
  font-size: 28px;
  font-weight: 400;
  font-style: italic;
  white-space: pre-line;
  margin: 10px 0 0 0;
}
.presentation {
  /*   font-family: "Open Sans", cursive;
 */
  font-family: "Pompiere", cursive;
  font-style: italic;
  font-weight: 300;
  font-size: 23px;
}
#main-container {
  background-color: #f7f9e4;
  min-height: 100vh;
}
.nicemain {
  font-family: "Satisfy", cursive;
  color: #431008;
  font-size: 45px !important;
  transform: rotate(-10deg);
}
.contacttitle {
  font-family: "Satisfy", cursive;
  font-size: 45px !important;
  font-weight: 400;
  font-style: italic;
  white-space: pre-line;
}
.name {
  font-family: "Patrick Hand SC", cursive;
  font-size: 28px !important;
  font-weight: 300;
  white-space: pre-line;
  text-overflow: unset !important;
}
.comment {
  font-family: "Pompiere", cursive !important;
  font-size: 24px !important;
  font-weight: bold !important;
  line-height: 1.6 !important;
  overflow: hidden !important;
  max-width: 250px !important;
  white-space: normal !important;
}
.commentsubtitle {
  font-family: "Patrick Hand SC", cursive;
  font-size: 18px !important;
  font-weight: 300;
}
.cardtitle {
  font-family: "Patrick Hand SC", cursive;
  font-size: 45px !important;
  font-weight: 400;
  font-style: italic;
  white-space: pre-line;
}
.descr {
  /*   font-family: "Open Sans", cursive;
 */
  font-family: "Pompiere", cursive;
  font-style: italic;
  font-weight: 300;
  font-size: 28px !important;
}
.caption {
  font-weight: 300;
}
.nicetitle {
  font-family: "Satisfy", cursive;
  font-size: 50px !important;
  font-weight: 200;
}

@media only screen and (max-width: 600px) {
  .contacttitle {
    font-size: 35px !important;
  }
  .cardtitle {
    font-size: 35px !important;
  }
  .nicetitle {
    font-size: 30px !important;
  }
}
@media only screen and (max-width: 425px) {
  .footertext {
    font-size: 20px !important;
  }
}
@media only screen and (max-width: 340px) {
  .nice {
    font-size: 30px !important;
  }
}
</style>
