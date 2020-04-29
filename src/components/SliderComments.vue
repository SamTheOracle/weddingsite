<template>
  <v-container fluid class="mt-5">
    <p class="nicetitle text-center">I commenti degli invitati</p>
    <p
      class="descr text-center"
    >Aggiungi un commento personale per gli sposi!</p>
    <div class="text-center">
        <v-btn fab color="#EBF0BA" :large="$vuetify.breakpoint.mdAndUp"><v-icon>mdi-plus</v-icon></v-btn>
    </div>
    <v-slide-group class="pa-4" style="max-width:100%" v-model="model">
      <v-slide-item v-for="n in 15" :key="n" class="ma-4">
        <Comment />
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import Comment from './Comment'
export default {
  name: 'SliderComments',
  props: {
    comments: Array
  },
  components: {
    Comment
  },
  data: () => {
    return {
      model: null,
      newComment: {
        lastName: '',
        firstName: '',
        comment: '',
        subscription: {},
        rate: 0
      },
      values: [
        {
          text: 'ciao'
        },
        {
          text: 'ciao'
        },
        {
          text: 'ciao'
        }
      ]
    }
  },
  mounted () {
    Object.assign(this.values, this.comments)
  },
  methods: {
    async postComment () {
      try {
        const response = await fetch('http://localhost:5000/comments', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(this.newComment)
        })
        this.values.unshift(JSON.parse(response.body))
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
</style>
