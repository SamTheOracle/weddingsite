<template>
  <v-container fluid class="mt-5">
    <p class="nicetitle text-center">Uno spazio per voi</p>
    <p class="descr text-center">Un pensiero per gli sposi</p>
    <div class="text-center">
      <v-btn fab color="#EBF0BA" :large="$vuetify.breakpoint.mdAndUp" @click="dialog = true">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <v-slide-group class="pa-4" style="max-width:100%">
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
      values: []
    }
  },
  mounted () {
    console.log('fetching...')
    // eslint-disable-next-line no-return-assign
    fetch('https://www.giovannaegiacomo.app/comments/all')
      .then(response => response.json())
      .then(data => (this.values = data))
      .catch(err => console.log(err))
    const vm = this
    navigator.serviceWorker.addEventListener('message', function (event) {
      console.log('Received a message from service worker: ', event.data)
      const newComment = event.data.comment
      vm.values.unshift(newComment)
    })
  },
  methods: {
    async postComment (newComment) {
      const objectComment = JSON.parse(newComment)
      objectComment.subscription = JSON.parse(sessionStorage.getItem('sub'))
      try {
        const response = await fetch('https://www.giovannaegiacomo.app/comments', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(objectComment)
        })
        console.log('object comment', response)
        response.json().then(data => {
          console.log('data', data)
          if (data.comment) {
            this.values.unshift(data)
          }
        })
      } catch (err) {
        console.log(err)
      } finally {
        this.dialog = false
      }
    }
  }
}
</script>

<style>
</style>
