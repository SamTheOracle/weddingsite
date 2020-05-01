<template>
  <v-container fluid>
    <p class="nicetitle text-center">Presentiamoci un po'</p>
    <p
      class="presentation text-center mt-5"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum euismod turpis, vel molestie lacus rutrum in. Sed sagittis purus ut ex consequat, lacinia mattis libero eleifend. Nullam non leo congue tortor gravida lobortis. Curabitur et orci eleifend, elementum arcu in, aliquet sem. Aliquam elementum varius nisl, pellentesque ultrices odio lacinia sed. Curabitur elementum malesuada volutpat. Morbi viverra fringilla nisi, sed sagittis enim ultricies eu.</p>

    <v-slide-group class="pa-4" style="max-width:100%" :show-arrows="$vuetify.breakpoint.mdAndUp">
      <v-slide-item v-for="(image,i) in images" :key="i" class="ma-1">
        <v-card
          outlined
          :width="$vuetify.breakpoint.xsOnly?220:450"
          :height="$vuetify.breakpoint.xsOnly?400:450"
        >
          <v-img height="220px" :src="require('@/assets/'+image.path)" @click="onImageClick(key)"></v-img>
          <v-card-text>
            <h2 class="title primary--text">Magento Forests</h2>Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <!--  <carousel class="pa-4" style="max-width:100%">
      <slide v-for="(image,i) in images" :key="i" class="ma-2">
        <PersonalPresentation :image="image.path" />
      </slide>
    </carousel>-->
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      images: [
        { path: 'giovibella.jpg' },
        { path: 'agordino.jpg' },
        { path: 'roma.jpg' },
        { path: 'ioegiovitorbiere.jpg' },
        { path: 'giovi.jpg' }
      ]
    }
  }
}
</script>

<style>
.presentation {
  /*   font-family: "Open Sans", cursive;
 */
  font-family: "Pompiere", cursive;
  font-style: italic;
  font-weight: 300;
  font-size: 23px;
}
</style>
