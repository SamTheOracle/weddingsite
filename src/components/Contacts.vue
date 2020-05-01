<template>
  <v-container fluid>
    <p class="nicetitle text-center">Contatti</p>

    <v-row align="center" justify="center">
      <v-col :cols="$vuetify.breakpoint.xsOnly?12:6" v-for="(contact,i) in contacts" :key="i">
        <ContactCard :contact="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    ContactCard: () => import('./ContactCard')
  },
  data: () => {
    return {
      contacts: [
        {
          name: 'Giovanna',
          type: 'La sposa',
          image: 'giovibella.jpg',
          contacts: [
            {
              icon: 'phone',
              value: '+39 3394453815',
              sub: 'Telefono'

            },
            {
              icon: 'email',
              value: 'musicco.giovanna@gmail.com',
              sub: 'E-mail'

            },
            {
              icon: 'home',
              value: 'Via Arimanno, 9 Brescia (BS)',
              sub: 'Indirizzo'
            }
          ]
        },
        {
          name: 'Giacomo',
          type: 'Lo sposo',
          image: 'ioegiovitorbiere.jpg',
          contacts: [
            {
              icon: 'phone',
              value: '+39 3398485788',
              sub: 'Telefono'
            },
            {
              icon: 'email',
              value: 'gzano93@gmail.com',
              sub: 'E-mail'
            },
            {
              icon: 'home',
              value: 'Via Cella del Poggiolo, n. 5 Domagnano (RSM)',
              sub: 'Indirizzo'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>
