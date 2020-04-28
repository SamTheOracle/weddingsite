<template>
  <v-card outlined min-height="400" >
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
      <v-list-item two-line>
        <v-list-item-content>
          <p class="descr mb-1">{{timeSentence}}</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <p class="descr mb-1">{{place}}</p>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item two-line>
        <v-list-item-content>
          <p class="descr mb-1">Informazioni</p>
        </v-list-item-content>
      </v-list-item>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'CelebrationComponent',
  props: {
    type: String,
    title: String,
    icon: String,
    timeSentence: String,
    place: String
  }
}
</script>

<style>
.cardtitle {
  font-family: "Open Sans", cursive;
  font-size: 35px;
  font-weight: 600;
  font-style: italic;
}
.descr {
  font-family: "Open Sans", cursive;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
}
@media only screen and (max-width: 600px) {
  .cardtitle {
    font-size: 30px;
  }
}
</style>
