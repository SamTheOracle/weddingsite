<template>
  <v-card :min-height="$vuetify.breakpoint.xsOnly?300:400" shaped outlined max-width="500px" class="mx-auto">
    <v-container fluid>
      <v-list-item two-line>
        <v-list-item-content>
          <div class="overline mb-1">{{type}}</div>
          <p class="cardtitle mb-1">{{title}}</p>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          :width="$vuetify.breakpoint.smAndUp?100:70"
          :height="$vuetify.breakpoint.smAndUp?100:70"
        >
          <v-img :src="require('@/assets/'+icon)" contain />
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item two-line v-if="timeSentence">
        <v-list-item-content>
          <p class="descr mb-1">{{timeSentence}}</p>
          <p class="descr mb-1" v-if="timeSecondSentence">{{timeSecondSentence}}</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line v-if="place">
        <v-list-item-content>
          <p class="descr mb-1">{{place}}</p>
          <p class="descr mb-1" v-if="placeSecondSentence">{{placeSecondSentence}}</p>
        </v-list-item-content>
      </v-list-item>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Celebration',
  props: {
    type: String,
    title: String,
    icon: String,
    timeSentence: String,
    timeSecondSentence: String,
    place: String,
    placeSecondSentence: String
  }
}
</script>

<style>
.cardtitle {
  font-family: "Patrick Hand SC", cursive;
  font-size: 45px;
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
  font-size: 28px;
}
.caption{
  font-weight: 300;

}
@media only screen and (max-width: 600px) {
  .cardtitle {
    font-size: 35px;
  }
}
</style>
