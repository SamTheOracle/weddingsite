<template>
  <v-container fluid>
    <p class="nicetitle text-center">Presentiamoci un po'</p>
    <p
      class="presentation text-center mt-5"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum euismod turpis, vel molestie lacus rutrum in. Sed sagittis purus ut ex consequat, lacinia mattis libero eleifend. Nullam non leo congue tortor gravida lobortis. Curabitur et orci eleifend, elementum arcu in, aliquet sem. Aliquam elementum varius nisl, pellentesque ultrices odio lacinia sed. Curabitur elementum malesuada volutpat. Morbi viverra fringilla nisi, sed sagittis enim ultricies eu.</p>
    <v-lazy
      :options="{
          threshold: .8
        }"
      v-model="isActive"
      transition="fade-transition"
      min-height="200"
    >
      <!--  <v-slide-group class="pa-4" style="max-width:100%" :show-arrows="$vuetify.breakpoint.mdAndUp">
        <v-slide-item v-for="(image,i) in images" :key="i" class="ma-1">
          <v-card
            shaped
            outlined
            :width="$vuetify.breakpoint.xsOnly?220:450"
            :height="$vuetify.breakpoint.xsOnly?400:450"
          >

           <v-img height="220px" src="https://via.placeholder.com/600" @click="onImageClick(key)"></v-img>
            <v-card-text>
              <h2 class="title primary--text">Magento Forests</h2>Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>-->

      <swiper class="swiper mt-3 mb-3" :options="swiperOption" style="height:100%">
        <swiper-slide v-for="i in 25" :key="i" class="ma-1">
          <v-card
            shaped
            outlined
            :width="$vuetify.breakpoint.xsOnly?300:450"
            :height="$vuetify.breakpoint.xsOnly?480:450"
            class="mx-auto"
          >
          <!-- :src="require('@/assets/us/'+i+'.jpg')" -->
            <v-img
              height="220px"
              src="https://via.placeholder.com/600"
              @click="onImageClick(key)"
            ></v-img>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="name">{{getTitle(i)}}</v-list-item-title>
                <v-list-item-subtitle class="commentsubtitle">{{getSubtitle(i)}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text class="mt-0 pt-0" style=" max-width: 250px;white-space: normal;">{{getDescription(i)}}</v-card-text>
          </v-card>
        </swiper-slide>
      </swiper>
    </v-lazy>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data: () => {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 2,
        centeredSlides: true,
        cssMode: true
      },
      isActive: false,
      imageText: [
        {
          title: 'Primo Appuntamento',
          subtitle: "Montisola, Lago d'Iseo",
          description: '"Andiamo al lago?". Mi aspettavo di passeggiare sulla riva e invece mi ritrovo sudato in cima al santuario di Mont\'isola. Non so cosa aspettarmi per i prossimi apppuntamenti!'
        },
        {
          title: 'Un turista a Brescia',
          subtitle: 'Castello di Brescia',
          description: 'Abituato ai tre castelli di San Marino, per fortuna Brescia ne ha almeno uno'
        },
        {
          title: 'Serata romantica',
          subtitle: 'Tempio Capitolino, Brescia',
          description: 'Jack in camicia...lo avevate mai visto?'
        },
        {
          title: 'Raccolta delle mele',
          subtitle: 'Brez, Val di Non',
          description: 'San Marino - Brez, 5 ore, 4 cambi di treno e un autobus pensando di godermi qualche giorno tranquillo in mezzo alla natura con la mia bella. Di certo non mi aspettavo di conoscere tutti in un colpo: 7 fratelli, 8 cugini, 2 zii e la nonna. E nemmeno di raccogliere le mele tutti i giorni! '
        },
        {
          title: 'Il bosco segreto',
          subtitle: 'Canepa',
          description: 'E così ho capito che basta poco a farla felice: una cascatella e un bosco (e forse io)'
        },
        {
          title: 'Un posto speciale',
          subtitle: 'Assisi',
          description: 'In ascolto di belle parole che ci hanno unito e rafforzato'
        },
        {
          title: 'In montagna',
          subtitle: 'Carpegna, Pesaro Urbino',
          description: 'E così tutto orgoglioso mi dice "Giovi, oggi ti porto in montagna". Arrivati in cima ho capito che aveva bisogno di una spiegazione tra collina romagnola e montagna bresciana.'
        },
        {
          title: 'Il mio capitano Jack',
          subtitle: 'Fiorenzuola, Pesaro',
          description: 'Dritti alla meta e conquista la preda'
        },
        {
          title: 'Uno sguardo d\'intesa',
          subtitle: 'Zone, Lago d\'Iseoo',
          description: 'E così con quel dolce sguardo mi dà forza'
        },
        {
          title: 'Due zaini, due sorrisi',
          subtitle: 'San Miniato, Pisa',
          description: 'Insieme il peso dello zaino si dimezza ("per forza portavo tutto io" Jack)'
        },
        {
          title: '"Gran stile in cucina"',
          subtitle: 'Dalla nonna Gio',
          description: 'Superchef in aiuto della nonna'
        },
        {
          title: 'Lei',
          subtitle: 'Adamello, Brescia',
          description: 'Dolce, seria e romantica ma anche un po\' "rompina"'
        },
        {
          title: 'Un po\' di classe',
          subtitle: 'Brescia',
          description: 'Super festa a casa Mazzacani'
        },
        {
          title: 'Pic-nic, i nostri preferiti',
          subtitle: 'San Mauro Pascoli, Rimini',
          description: 'Mi è andata bene, non la devo neanche portare al ristorante, per lei i pic-nic valgono molto di più.'
        },
        {
          title: '"Aprimi la strada"',
          subtitle: 'Isola d\'Arbia, Siena',
          description: 'Superchef in aiuto della nonna'
        },
        {
          title: 'Allo stesso passo',
          subtitle: 'Montefiascone, Viterbo',
          description: 'Ci vuole impegno e fatica per stare allo stesso passo ma quando ci si riesce è tutto più facile'
        },
        {
          title: 'Arrivo o inzio?',
          subtitle: 'Roma',
          description: 'Dopo 270 km, qualche litigata e tante risate ci facciamo abbracciare da piazza S. Pietro. E ora che abbiamo affrontato questa prova siamo pronti a tutto, a un nuovo inizio.'
        },
        {
          title: '"Jack, non cadere!"',
          subtitle: 'Parco del Mincio, Mantova',
          description: '13 anni che non pedala una bicicletta, per fortuna nonostante la sua goffaggine non è mai caduto!'
        },
        {
          title: 'A un matrimonio importante',
          subtitle: 'Flero, Brescia',
          description: 'Francesca e Faustino sposi nel Signore. Una felicità contagiosa.'
        },
        {
          title: 'Casa, dolce casa',
          subtitle: 'San Marino',
          description: 'Lei e San Marino, che cosa vuoi di più?'
        },
        {
          title: 'Un brindisi...',
          subtitle: 'Verona',
          description: '...a noi sposi. Un annuncio inaspettato e super festeggiato'
        },
        {
          title: 'Lui',
          subtitle: 'Monte Maddalena, Brescia',
          description: 'Onesto, semplice, coraggioso e dall\'animo buono. Appassionato del suo lavoro, dal cuore grande, spontaneo e allegro. Con una birra e un panino alla salsiccia raggiunge la sua estasi. A volte goffo e maldestro riesce sempre a stupirti, questo è Giacomo.'
        },
        {
          title: '#Stayathome',
          subtitle: 'Collina Sant\'Anna, Brescia',
          description: 'Cose che si fanno solo in quarantena!'
        },
        {
          title: 'Serio quando serve',
          subtitle: 'Pasquetta dai Musicco',
          description: 'Ride sempre ma quando si tratta di preparare gli hamburger raggiunge la massima concentrazione '
        },
        {
          title: 'Smartworking',
          subtitle: 'Quarantena felice',
          description: 'Sammarinese bloccato a Brescia, ma tutto sommato non se la passa male'
        }
      ]
    }
  },
  methods: {
    getTitle (index) {
      return this.imageText[index - 1].title
    },
    getDescription (index) {
      return this.imageText[index - 1].description
    },
    getSubtitle (index) {
      return this.imageText[index - 1].subtitle
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
