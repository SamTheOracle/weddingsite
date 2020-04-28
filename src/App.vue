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
          v-for="(link,i) in links"
          :key="i"
          @click="doAction(link.text)"
        >{{link.text}}</v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer app clipped v-model="drawer" v-if="$vuetify.breakpoint.smAndDown">
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
          <v-list-item v-for="(element,i) in links" :key="i" @click="doAction(element.text)">
            <v-list-item-avatar tile>
              <v-img :src="require('@/assets/'+element.image)" />
            </v-list-item-avatar>
            <v-list-item-title
              :class="$vuetify.breakpoint.smAndUp?'subtitle-1':''"
              v-text="element.text"
            ></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <MainSection />
    <SecondSection />
    <ThirdSection />
<div style="max-height:100vh">
    <v-overlay :value="overlay" absolute>

          <Timeline v-on:close="overlay = false"/>

    </v-overlay>
</div>

    <v-footer color="#EBF0BA">
      <p class="nice text-center mx-auto">
        Fatto con
        <v-icon color="red">mdi-heart</v-icon>da Oracolo Solutions s.r.l.
      </p>
    </v-footer>
  </v-app>
</template>

<script>
import MainSection from './components/MainSection'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import Timeline from './components/Timeline'
export default {
  name: 'App',

  components: {
    MainSection,
    SecondSection,
    ThirdSection,
    Timeline
  },

  data: () => ({
    drawer: false,
    overlay: false,
    links: [
      {
        text: 'Informazioni',
        image: 'timeline.svg'
      },
      {
        text: 'Conferma',
        image: 'confirm.svg'
      },
      {
        text: 'Aiutaci',
        image: 'help.svg'
      },
      {
        text: 'Noi',
        image: 'couple.svg'
      },
      {
        text: 'Contatti',
        image: 'contact.svg'
      }
    ]
  }),
  methods: {
    doAction (action) {
      if (action === 'Informazioni') {
        this.overlay = true
      }
      if (window.innerWidth <= 600) {
        this.drawer = false
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
