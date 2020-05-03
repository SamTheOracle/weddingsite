<template>
  <v-card shaped color="#f7f9e4" light :width="$vuetify.breakpoint.xsOnly?280:350" :height="380" class="mx-auto ma-sm-2 ma-md-2 ma-lg-4">

    <v-list-item>
      <v-list-item-avatar tile width="50" height="50">
        <v-img contain :src="require('@/assets/'+ comment.icon)" />
      </v-list-item-avatar>
      <v-list-item-content>
      <v-list-item-title class="name">{{fullName}}</v-list-item-title>
      <v-list-item-subtitle class="commentsubtitle">{{comment.date}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text  class="comment mx-auto">{{comment.comment}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    comment: Object
  },
  data: function () {
    return {

    }
  },
  computed: {
    fullName: function () {
      return `${this.comment.firstName}  ${this.comment.lastName}`
    }
  },
  methods: {
  }
}
</script>

<style>
.name{
  font-family: 'Patrick Hand SC', cursive;
  font-size: 28px;
  font-weight: 300;
  white-space: pre-line;
  text-overflow: unset!important;
}
.comment{
  font-family: 'Pompiere', cursive!important;
  font-size: 24px!important;
  font-weight: bold!important;
  line-height: 1.6!important;
  overflow: hidden!important;
  max-width: 250px!important;
  white-space: normal!important;
}
.commentsubtitle{
  font-family: 'Patrick Hand SC', cursive;
  font-size: 18px;
  font-weight: 300;
}
</style>
