<template>
  <v-container fluid class="mt-5">
    <p class="nicetitle text-center">Uno spazio per voi</p>
    <p class="descr text-center">Un pensiero per gli sposi</p>
    <div class="text-center">
      <v-btn color="#EBF0BA" :large="$vuetify.breakpoint.mdAndUp" @click="dialog = true" rounded>
        Aggiungi
        <v-icon small class="ml-2">mdi-send</v-icon>
      </v-btn>
    </div>
    <v-slide-group class="pa-4" style="max-width:100%" :show-arrows="$vuetify.breakpoint.mdAndUp">
      <v-slide-item class="ma-1" v-for="(fake,i) in fakeComments " :key="i">
        <Comment :comment="fake" />
      </v-slide-item>
      <v-slide-item v-for="(comment,i) in values" :key="i" class="ma-2">
        <Comment :comment="comment" />
      </v-slide-item>
    </v-slide-group>
    <v-dialog
      v-model="dialog"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      :hide-overlay="$vuetify.breakpoint.xsOnly"
      transition="dialog-bottom-transition"
      max-height="500"
      max-width="500"
    >
      <CommentForm v-on:dialogcommentclose="dialog = false" v-on:validcomment="postComment" />
    </v-dialog>
  </v-container>
</template>

<script>
import Comment from './Comment'
import CommentForm from './CommentForm'
export default {
  name: 'SliderComments',
  components: {
    Comment,
    CommentForm
  },
  data: () => {
    return {
      model: null,
      dialog: false,
      values: [],
      fakeComments: [
        {
          lastName: 'Gates',
          firstName: 'Bill',
          comment:
            'Un grande uomo si sposa con una gran donna. Una bella lezione di amore e di umiltà, complimenti. ',
          date: '15 Maggio 2020'
        },
        {
          lastName: 'Mattarella',
          firstName: 'Sergio',
          comment:
            'Care italiane, Cari italiani. Il matrimonio di Giacomo e Giovanna dà speranza per il futuro, un esempio di unità in questi tempi bui',
          date: '2 Settembre 2020'
        },
        {
          lastName: 'Musk',
          firstName: 'Elon',
          comment:
            "È stato lo sposo a suggerirmi la fantastica idea di terraformare Marte, bombardando il pianeta con l'arsenale atomico mondiale",
          date: '18 Luglio 2020'
        }
      ],
      icons: [
        { path: 'music.svg' },
        { path: 'mountain.svg' },
        { path: 'kite.svg' },
        { path: 'hot-air-balloon.svg' },
        { path: 'dove.svg' },
        { path: 'churchcomment.svg' },
        { path: 'bells.svg' },
        { path: 'angel.svg' }
      ],
      variabaleIcons: []
    }
  },
  created () {
    this.fakeComments.forEach(fc => (fc.icon = this.getIcon()))
  },
  mounted () {
    console.log('fetching...')
    const vm = this

    // eslint-disable-next-line no-return-assign
    fetch('https://www.giovannaegiacomo.app/comments/all')
      .then(response => response.json())
      .then(data => {
        vm.values = data
        vm.values.forEach(v => {
          v.icon = vm.getIcon()
        })
      })
      .catch(err => console.log(err))
    navigator.serviceWorker.addEventListener('message', function (event) {
      console.log('Received a message from service worker: ', event.data)
      const newComment = event.data.comment
      newComment.icon = vm.getIcon()
      vm.values.unshift(newComment)
    })
  },
  methods: {
    async postComment (newComment) {
      const vm = this
      const objectComment = JSON.parse(newComment)
      objectComment.subscription = JSON.parse(sessionStorage.getItem('sub'))
      try {
        const response = await fetch(
          'https://www.giovannaegiacomo.app/comments',
          {
            method: 'post',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(objectComment)
          }
        )
        console.log('object comment', response)
        response.json().then(data => {
          if (data.comment) {
            data.icon = this.getIcon()
            vm.values.unshift(data)
          }
        })
      } catch (err) {
        console.log(err)
      } finally {
        this.dialog = false
      }
    },
    getIcon () {
      const iconCount = this.icons.length >= 2
      const index = iconCount
        ? Math.floor(Math.random() * (this.icons.length - 1))
        : 0
      var icon = this.icons[index]
      this.variabaleIcons.push(icon)
      this.icons.splice(index, 1)
      if (!iconCount) {
        this.icons = this.variabaleIcons
        this.variabaleIcons = []
      }
      return icon.path
    }
  }
}
</script>

<style>
</style>
