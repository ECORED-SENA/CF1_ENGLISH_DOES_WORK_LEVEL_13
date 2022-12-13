<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Subordinating conjunctions of time</em> (Conjunciones subordinadas de tiempo)
    
    .bg_grad-12
      .row.mb-5
        .col-lg-5
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/1.svg", alt="alt")
        .col-lg-7
          TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
      
      p.text-center <em>Let’s see the following dialogue where subordinating conjunctions are used:</em>

      .row.justify-content-center.mb-5
        .col-lg-3.pe-0
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/2.svg", alt="alt")
        .col-lg-6.bgr
          p.mt-3.text-bold.text-center <em>A terrible day!</em>
          SlyderA(tipo="b")
            div
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat")(data-aos="flip-up")
            div
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat1")(data-aos="flip-up")
    
    .bg_grad-13
      p.text-center <em>After seeing the dialogue, we invite you to explore some examples of subordinating conjunctions of time, opposition, cause and effect or condition:</em>

      .row.mb-5
        .col-lg-4.d-flex.align-items-center
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/3.png", alt="alt")
        .col-lg-8
          .tarjeta.bgr_2.p-4
            SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema2/4.png')})`}" style='height: 500px').pst_3
                .tarjeta.bgr.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema2/7.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.colr.text-bold.text-center <em>Conjunctions of time</em>
                  TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema2/5.png')})`}" style='height: 500px').pst_3
                .tarjeta.bgr.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema2/8.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.colr.text-bold.text-center <em>Conjunctions of time</em>
                  TraduccionT.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up")
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema2/6.png')})`}" style='height: 500px').pst_3
                .tarjeta.bgr.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema2/9.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.colr.text-bold.text-center <em>Conjunctions of opposition</em>
                  TraduccionT.color-acento-botones(:dialogo="dialogo4")(data-aos="flip-up")
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema2/7.png')})`}" style='height: 500px').pst_3
                .tarjeta.bgr.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema2/10.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.colr.text-bold.text-center <em>Conjunctions of opposition</em>
                  TraduccionT.color-acento-botones(:dialogo="dialogo5")(data-aos="flip-up")
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema2/8.png')})`}" style='height: 500px').pst_3
                .tarjeta.bgr.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema2/11.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.colr.text-bold.text-center <em>Conjunctions of cause and effect</em>
                  TraduccionT.color-acento-botones(:dialogo="dialogo6")(data-aos="flip-up")
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema2/9.png')})`}" style='height: 500px').pst_3
                .tarjeta.bgr.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema2/12.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  p.colr.text-bold.text-center <em>Conjunctions of cause and effect</em>
                  TraduccionT.color-acento-botones(:dialogo="dialogo7")(data-aos="flip-up")
    
    p.colr <em>Now it's your turn to use the subordinating conjunctions of time. Complete the following dialogue. </em>
      span.colr_1 / Ahora es su turno de usar las conjunciones subordinadas. Complete el siguiente diálogo.  
    
    Dialogo.pst_2.color-acento-contenido.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Dialogue: Friend’s talk</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema2',
  components: {
    TraduccionT,
    TraduccionChat,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>Subordinating conjunctions join phrases that are not of the same grammatical or syntactic category. These conjunctions are used to join a <i>main clause</i> with a <i>subordinate clause,</i> since the one that comes later does not make sense on its own.<br><br><b>They can be of different types: <i>time, opposition, cause</i> and <i>effect</i> or <i>condition.</i><br>Time: <i>after, before, when, while.</i></b></em>',
        textoEsp:
          'Las conjunciones subordinantes unen frases que no son de la misma categoría gramatical o sintáctica. Estas conjunciones se usan para unir una oración principal con una subordinada, puesto que esta última no tendría sentido por sí sola.<br><br>Pueden ser de distinto tipo: tiempo, oposición, causa y efecto o condición.<br>De tiempo: <em>after, before, when, while, since, until.</em>',
      },
    ],
    dialogo2: [
      {
        textoIng: '<em>After crying a lot, she calmed down.</em>',
        textoEsp: 'Después de (ella) llorar mucho, se tranquilizó.',
      },
    ],
    dialogo3: [
      {
        textoIng: '<em>I learnt to study while I was working hard.</em>',
        textoEsp: 'Aprendí a estudiar mientras trabajaba duro.',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>Although he did not speak French, he could handle the visit to France.</em>',
        textoEsp: 'Aunque no hablaba francés, pudo con la visita a Francia.',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em>Even though I had the flu, I managed to cook my dinner.</em>',
        textoEsp: 'A pesar de que tenía gripe, logré cocinar mi cena.',
      },
    ],
    dialogo6: [
      {
        textoIng: '<em>I like school because I can learn things.</em>',
        textoEsp: 'Me gusta la escuela porque puedo aprender cosas.',
      },
    ],
    dialogo7: [
      {
        textoIng:
          '<em>Now that I know about you, I want to help your family.</em>',
        textoEsp: 'Ahora que sé de ti, quiero ayudar a tu familia.',
      },
    ],
    traduccionChat: {
      personajes: [
        {
          nombre: 'Sergio:',
        },
        {
          nombre: 'Camila',
        },
      ],
      dialogo: [
        {
          personaje: 'Sergio:',
          textoIng: '<em>What did you do in thanksgiving?</em>',
          textoEsp: '¿Qué hiciste en acción de gracias?',
          audio: require('@/assets/componentes/audios/tema2/1.mp3'),
        },
        {
          personaje: 'Camila',
          textoIng:
            '<em>I planned dinner with my family. I started to cook when they came, I was really late.</em>',
          textoEsp:
            'Yo planeé una cena familiar. Empecé a cocinar cuando ellos llegaron, se me hizo súper tarde.',
          audio: require('@/assets/componentes/audios/tema2/2.mp3'),
        },
        {
          personaje: 'Sergio:',
          textoIng: '<em>Oh, really? Were they hungry?</em>',
          textoEsp: '¡Oh! ¿De verdad? ¿Tenían hambre?',
          audio: require('@/assets/componentes/audios/tema2/3.mp3'),
        },
      ],
    },
    traduccionChat1: {
      personajes: [
        {
          nombre: 'Sergio:',
        },
        {
          nombre: 'Camila',
        },
      ],
      dialogo: [
        {
          personaje: 'Camila',
          textoIng:
            '<em>Yes, they were really hungry, so I tried to hurry up and I cut my finger!</em>',
          textoEsp:
            'Sí, ellos tenían mucha hambre, así que me apresuré y me corté un dedo.',
          audio: require('@/assets/componentes/audios/tema2/4.mp3'),
        },
        {
          personaje: 'Sergio:',
          textoIng: '<em>I cannot imagine how hard it was!</em>',
          textoEsp: 'No puedo imaginar lo difícil que fue.',
          audio: require('@/assets/componentes/audios/tema2/5.mp3'),
        },
        {
          personaje: 'Camila',
          textoIng: '<em>After crying a lot, I calmed down.</em>',
          textoEsp: 'Después de mucho llorar, me tranquilicé.',
          audio: require('@/assets/componentes/audios/tema2/6.mp3'),
        },
      ],
    },
    dialogo: {
      personajes: [
        {
          nombre: 'Peter',
          img: require('@/assets/curso/tema2/10.svg'),
        },
        {
          nombre: 'Gyna',
          img: require('@/assets/curso/tema2/11.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Peter',
          textoIng: 'What *** to your colleague? Did you invite her for lunch?',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema2/13.mp3'),
          palabra: 'happened',
        },
        {
          personaje: 'Gyna',
          textoIng:
            'Yes, I did. I *** to cook when she came. I was in such a hurry that I accepted her help. As she does not cook very often, she cut her finger!',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema2/14.mp3'),
          palabra: 'started',
        },
        {
          personaje: 'Peter',
          textoIng: 'Oh, really? *** did you do?',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema2/15.mp3'),
          palabra: 'What',
        },
        {
          personaje: 'Gyna',
          textoIng: 'I *** 911',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema2/16.mp3'),
          palabra: 'called',
        },
        {
          personaje: 'Peter',
          textoIng: 'I cannot imagine how hard it ***!',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema2/17.mp3'),
          palabra: 'was',
        },
        {
          personaje: 'Gyna',
          textoIng: 'After crying a lot, she *** down. ',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema2/18.mp3'),
          palabra: 'calmed',
        },
      ],
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
