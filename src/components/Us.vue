<template>
  <v-container fluid>
    <p class="nicetitle text-center">Presentiamoci un po'</p>
    <p class="presentation text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum euismod turpis, vel molestie lacus rutrum in. Sed sagittis purus ut ex consequat, lacinia mattis libero eleifend. Nullam non leo congue tortor gravida lobortis. Curabitur et orci eleifend, elementum arcu in, aliquet sem. Aliquam elementum varius nisl, pellentesque ultrices odio lacinia sed. Curabitur elementum malesuada volutpat. Morbi viverra fringilla nisi, sed sagittis enim ultricies eu. </p>
    <v-slide-group class="pa-4" style="max-width:100%">
      <v-slide-item v-for="(image,i) in images" :key="i" class="ma-2">
        <PersonalPresentation :image="image.path"/>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import PersonalPresentation from './PersonalPresentaton'
export default {
  components: {
    PersonalPresentation
  },
  data: () => {
    return {
      images: [
        { path: 'giovibella.jpg' },
        { path: 'agordino.jpg' },
        { path: 'roma.jpg' }

      ]
    }
  }
}
</script>

<style>
</style>
