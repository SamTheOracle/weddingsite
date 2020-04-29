<template>
  <v-container fluid class="mt-5">
    <p class="nicetitle text-center">I commenti degli invitati</p>
    <p class="descr text-center">Aggiungi un commento per gli sposi!</p>
    <div class="text-center">
      <v-btn fab color="#EBF0BA" :large="$vuetify.breakpoint.mdAndUp" @click="dialog = true">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <v-slide-group class="pa-4" style="max-width:100%">
      <v-slide-item v-for="(comment,i) in values" :key="i" class="ma-2">
        <Comment :comment="comment"/>
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
  props: {
    comments: Array
  },
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
    Object.assign(this.values, this.comments)
    console.log(this.values)
  },
  methods: {
    async postComment (newComment) {
      console.log(newComment)
      try {
        const response = await fetch('http://localhost:5000/comments', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(newComment)
        })
        this.values.unshift(JSON.parse(response.body))
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
