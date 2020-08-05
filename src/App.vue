<template>
  <v-app>
    <v-app-bar color="#EBF0BA" app inverted-scroll max-width="100vw" v-if="mainLoaded">
      <v-app-bar-nav-icon @click.stop="drawer=true" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
      <v-spacer v-if="$vuetify.breakpoint.smAndDown" />
      <v-toolbar-title class="nice" v-if="!english">Giovanna e Giacomo</v-toolbar-title>
      <v-toolbar-title class="nice" v-else>Giovanna e Giacomo</v-toolbar-title>

      <v-spacer />
      <div v-if="$vuetify.breakpoint.mdAndUp&&!english">
        <v-btn
          text
          color="#431008"
          v-for="(link,i) in links.filter(l=>l.button === 'Aiutaci' || l.button === 'Informazioni' || l.button==='Noi')"
          :key="i"
          @click="doAction(link.button)"
        >{{link.button}}</v-btn>
      </div>
      <div v-else-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          text
          color="#431008"
          v-for="(link,i) in linksEnglish.filter(l=>l.button === 'Help us' || l.button === 'Information' || l.button==='Us')"
          :key="i"
          @click="doAction(link.button)"
        >{{link.button}}</v-btn>
      </div>
    </v-app-bar>
    <Front v-on:imageloaded="mainLoaded=true" />

    <div v-if="mainLoaded">
      <v-alert
        type="info"
        dismissible
        dense
        v-if="showAlert && !appInstalled && beforeInstallEvent"
      >
        <p v-if="!english">Ti piace il sito? puoi anche scaricare l'applicazione per {{device}}</p>

        <div class="text-left mt-2">
          <v-btn @click="onInstallClick()" :small="$vuetify.breakpoint.xsOnly">Scarica</v-btn>
        </div>
      </v-alert>
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
            <p class="drawertitle mb-1" v-if="!english">Giovanna e Giacomo</p>
            <p class="drawertitle mb-1" v-else>Giovanna & Giacomo</p>
          </v-list-item-content>
        </v-list-item>

        <v-list nav flat v-if="!english">
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(element,i) in links"
              :key="i"
              @click="doAction(element.button)"
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
            <v-list-item @click="onChangeLanguageClick()">
              <v-list-item-avatar tile>
                <v-img src="@/assets/english.svg" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{language}}</v-list-item-title>
                <v-list-item-subtitle>Switch to English</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-list nav flat v-else>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(element,i) in linksEnglish"
              :key="i"
              @click="doAction(element.button)"
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
            <v-list-item @click="onChangeLanguageClick()">
              <v-list-item-avatar tile>
                <v-img src="@/assets/italian.svg" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{language}}</v-list-item-title>
                <v-list-item-subtitle>Cambia in italiano</v-list-item-subtitle>
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

      <Us id="us" :language="language" />

      <HelpUs id="help" :language="language" />

      <SliderComments id="comments" :language="language" />

      <UsefulInformation id="information" :language="language" />

      <Contacts id="contacts" :language="language" />

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
          threshold: .6
        }"
      v-model="footerLazy"
      transition="fade-transition"
      min-height="200"
    >
      <v-footer v-if="mainLoaded" color="white">
        <v-row>
          <v-col cols="6">
            <v-row align="end" justify="end" no-gutters v-if="!english">
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
                  @click="onChangeLanguageClick()"
                >{{language}}</v-btn>
              </v-col>
            </v-row>
            <v-row align="end" justify="end" no-gutters v-else>
              <v-col v-for="(link,i) in linksEnglish.filter(f=>f.button!=='Contacts')" :key="i">
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
                  @click="onChangeLanguageClick()"
                >{{language}}</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" class="text-center" v-if="!english">
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
          <v-col cols="6" class="text-center" v-else>
            <v-img src="@/assets/github-logo.svg" height="70" width="70" class="mx-auto" />
            <p class="text-center mt-2 mb-0" style="white-spaces:pre-line;">
              Made with
              <span>
                <v-icon color="red">mdi-heart</v-icon>
              </span>
              by
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
    <v-snackbar
      v-model="showUpdateSnackbar"
      v-if="mainLoaded"
      color="#EBF0BA"
    >
    <p style="color: #431008" class="text-center">Aggiornamento disponibile, ricarca il sito per vedere le ultime modifiche!</p>
    <v-span>
      <v-btn text color="#431008" @click="refresh()"><v-icon>mdi-refresh<v-icon<v-btn>
    </v-span>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="#431008"
          text
          v-bind="attrs"
          @click="showUpdateSnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    Front: () => import("./components/Front"),
    Information: () => import("./components/Information"),
    SaveTheDate: () => import("./components/SaveTheDate"),
    Partecipation: () => import("./components/Partecipation"),
    SliderComments: () => import("./components/SliderComments"),
    Us: () => import("./components/Us"),
    HelpUs: () => import("./components/HelpUs"),
    UsefulInformation: () => import("./components/UsefulInformation"),
    Contacts: () => import("./components/Contacts"),
  },

  data: () => ({
    appInstalled: false,
    showAlert: false,
    english: false,
    language: "English",
    drawer: false,
    overlay: false,
    dialog: false,
    mainLoaded: false,
    footerLazy: false,
    showUpdateSnackbar: false,
    links: [
      {
        text: "Verrai?",
        button: "Conferma",
        image: "confirmationblack.svg",
      },
      {
        button: "Noi",
        text: "La nostra storia",
        image: "couple.svg",
      },
      {
        text: "La nostra casa",
        button: "Aiutaci",
        image: "house.svg",
      },
      {
        button: "Commenti",
        text: "Un pensiero per gli sposi",
        image: "comment.svg",
      },
      {
        button: "Informazioni",
        text: "Come raggiungere il luogo",
        image: "information.svg",
      },
      {
        button: "Contatti",
        text: "Contatta gli sposi",
        image: "contacts.svg",
      },
    ],
    linksEnglish: [
      {
        text: "Are you coming?",
        button: "Confirm",
        image: "confirmationblack.svg",
      },
      {
        button: "Us",
        text: "Our story",
        image: "couple.svg",
      },
      {
        text: "for the house to be",
        button: "Help us",
        image: "house.svg",
      },
      {
        button: "Comments",
        text: "A thought for the spouses",
        image: "comment.svg",
      },
      {
        button: "Information",
        text: "How to get around",
        image: "information.svg",
      },
      {
        button: "Contacts",
        text: "Contact the spouses",
        image: "contacts.svg",
      },
    ],
    beforeInstallEvent: undefined,
  }),
  mounted() {
    const isInstalled = !!localStorage.getItem("weddingsite_installed");
    this.appInstalled = isInstalled;

    window.addEventListener("beforeinstallprompt", (e) => {
      if (e) {
        localStorage.removeItem("weddingsite_installed");
        e.preventDefault();
        this.beforeInstallEvent = e;
      }
    });

    window.addEventListener("appinstalled", (evt) => {
      localStorage.setItem("weddingsite_installed", true);
      this.appInstalled = true;
    });
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
    // show install prompt after a minute of usage
    
    setTimeout(() => {
      this.showAlert = true;
    }, 60 * 1000);
  },
  computed: {
    device: function () {
      const width = window.innerWidth;
      if (width >= 960) {
        return "il laptop";
      } else if (width < 960 && width > 600) {
        return "il tablet";
      } else {
        return "lo smartphone";
      }
    },
  },
  methods: {
    showRefreshUI(e) {
      this.showUpdateSnackbar = true;
    },
    refresh() {
      this.showUpdateSnackbar = false;
      window.location.reload();
    },
    doAction(action) {
      if (action === "Informazioni" || action === "Information") {
        this.$vuetify.goTo("#information", { duration: 1000, offset: 100 });
      }
      if (action === "Conferma" || action === "Confirm") {
        this.$vuetify.goTo("#partecipation", { duration: 1000, offset: 100 });
      }
      // if (action === 'La nostra casa') {
      if (action === "Aiutaci" || action === "Help us") {
        this.$vuetify.goTo("#help", { duration: 1000, offset: 100 });

        /*  this.dialog = true */
      }
      if (action === "Noi" || action === "Us") {
        this.$vuetify.goTo("#us", { duration: 1000, offset: 50 });
      }
      if (action === "Contatti" || action === "Contacts") {
        this.$vuetify.goTo("#contacts", { duration: 1000, offset: 100 });
      }
      /*       if (action === 'Uno spazio per voi') {

 */

      if (action === "Commenti" || action === "Comments") {
        this.$vuetify.goTo("#comments", { duration: 1000, offset: 100 });
      }
      if (window.innerWidth <= 800) {
        this.drawer = false;
      }
    },
    /*  computedLinks: function () {
      const width = window.innerWidth
      if (width < 360) {
        return this.links.filter(link => link.button !== 'Informazioni')
      } else {
        return this.links
      }
    }, */
    onOracleClick() {
      window.location.href = "https://github.com/SamTheOracle/weddingsite";
    },
    onChangeLanguageClick() {
      this.language === "English"
        ? (this.language = "Italiano")
        : (this.language = "English");
      this.english = !this.english;
    },
    onInstallClick() {
      this.beforeInstallEvent.prompt();
      this.beforeInstallEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
      });
    },
  },
};
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
  font-weight: 500 !important;
  line-height: 1.6 !important;
  overflow: hidden !important;
  word-break: normal;
  /*   max-width: 250px !important;
 */
  white-space: normal !important;
  max-width: fit-content !important;
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
.usdescription {
  white-space: normal;
  word-break: normal;
  font-family: "Pompiere", cursive;
  font-weight: 500 !important;
  font-size: 24px !important;
  line-height: 1.2 !important;
  max-width: fit-content !important;
}
.usdescriptionmodified {
  font-family: "Pompiere", cursive;
  font-weight: 500 !important;
  font-size: 26px !important;
}

@media only screen and (min-width: 601px) and (max-width: 768px) {
  .cardtitle {
    font-size: 32px !important;
  }
  .nicetitle {
    font-size: 40px !important;
  }
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
  .usdescription {
    font-size: 20px !important;
  }
  .usdescriptionmodified {
    font-size: 20px !important;
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
