<template>
  <v-container fluid class="fill-height">
    <v-row align="start" justify="center">
      <v-col cols="12">
        <v-btn
          text
          fab
          large
          @click="$emit('close')"
          color="blue-grey lighten-4"
          absolute
          top
          :left="$vuetify.breakpoint.smAndUp"
          class="mx-auto"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-timeline
          :align-top="$vuetify.breakpoint.smAndDown"
          :dense="$vuetify.breakpoint.smAndDown"
          class="ma-5"
        >
          <v-timeline-item v-for="(item,i) in items" :key="i" light small color="red">
            <v-sheet class="elevation-2" max-width="500" max-height="400">
              <v-container fluid>
                <div class="overline" v-if="$vuetify.breakpoint.smAndDown">{{item.sentence}}</div>
                <p class="headline">{{item.description.title}}</p>
                <p>{{item.description.text}}</p>
              </v-container>
            </v-sheet>
            <template v-slot:opposite>
              <p style="color:white">{{item.sentence}}</p>
            </template>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          avatar: 'church.svg',
          sentence: 'Ore 11:00',
          description: {
            title: "Arrivo a Sant' Afra",
            text:
              'Gli invitati possono trovare i parcheggi in via pinco pallo e meridio, vicino al mc donald',
            positionLink: ''
          }
        },
        {
          avatar: 'church.svg',
          sentence: 'Ore 14:00',
          description: {
            title: 'Ricevimento a Bedizzole',
            text:
              'Il ricevimento verrà tenuto al fantastico agriturismo Roccolo. Non c\'è nessun problema per il parcheggio, il ristorante è già provvisto di uno sufficientemente largo per tutti voi morti di fame',
            positionLink: ''
          }
        },
        {
          avatar: 'Taglio della torta',
          sentence: 'Ore 11:00',
          description: {
            title: "Arrivo a Sant' Afra",
            text:
              'Gli invitati possono trovare i parcheggi in via pinco pallo e meridio, vicino al mc donald',
            positionLink: ''
          }
        },
        {
          avatar: 'church.svg',
          sentence: 'Ore 11:00',
          description: {
            title: "Arrivo a Sant' Afra",
            text:
              'Gli invitati possono trovare i parcheggi in via pinco pallo e meridio, vicino al mc donald',
            positionLink: ''
          }
        }
      ]
    }
  }
}
</script>

<style>
</style>
