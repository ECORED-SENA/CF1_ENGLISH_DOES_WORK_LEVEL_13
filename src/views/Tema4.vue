<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Reading techniques: skimming and scanning</em> (Técnicas de lectura: “<em>skimming</em>” y “<em>scanning</em>”)
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema4/1.png", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
    
    .bg_grad-14
      p.colr.text-bold <em>How are the skimming and scanning techniques?</em>
      p.colr.mb-5 <em>Skimming is reading rapidly in order to get a general overview of the material. Scanning is reading rapidly in order to find specific facts. Let’s see some examples:</em>
        span.colr_1 <em>Skimming</em> es leer rápidamente para obtener una visión general del material. <em>Scanning</em> es leer rápidamente para encontrar hechos específicos. Veamos algunos ejemplos:
      
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Qs2MLi-RVSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
      p.colr.text-center <em>Let’s see this dialogue and practice:</em>

      .row.justify-content-center.mb-5
        .col-lg-4.pe-0
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema4/2.png", alt="alt")
        .col-lg-6.bgr
          p.mt-3.text-bold.text-center <em>Let’s use a reading technique</em>
          SlyderA(tipo="b")
            div
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat")(data-aos="flip-up")
            div
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat1")(data-aos="flip-up")
    
    p.colr <em>Now it's your turn to review the reading techniques. Complete the following dialogue. </em>
      span.colr_1 Ahora es su turno de repasar las técnicas de lectura. Complete el siguiente diálogo. 
    
    .bgr_8.p-4
      Dialogo.color-acento-contenido.mb-5.mt-5(:dialogo="dialogo")
        template(#nombre-actividad) Arrastrar y Soltar
        template(#titulo-actividad) <em>Dialogue: Skimming technique</em> - Completa la conversación.
        template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
       



</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema4',
  components: {
    TraduccionT,
    TraduccionChat,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>Skimming and scanning are reading techniques that allow the reader to go through a text for different purposes. Skimming is reading rapidly to get a general overview of the material. Scanning is reading rapidly to find specific facts. While skimming tells us what general information is within a section, scanning helps us to locate a fact. <br><br>Use skimming to overview your text chapters or to review for a test. <br>Use skimming to decide if you need to read something at all, for example, during the preliminary research for a paper.</em>',
        textoEsp:
          'El <em>skimming</em> y el <em>scanning</em> son técnicas de lectura que permiten al lector recorrer un texto con diferentes propósitos. <em>Skimming</em> es leer rápidamente para obtener una visión general del material. <em>Scanning</em> es leer rápidamente para encontrar hechos específicos. Mientras skimming nos dice qué información general hay dentro de una sección, scanning nos ayuda a localizar un hecho.<br><br>Use <em>skimming</em> para revisar los capítulos de un libro de texto o para repasar para un examen.<br>Use <em>skimming</em> para decidir si necesita leer algo, por ejemplo, durante la investigación preliminar para un artículo.</em>',
      },
    ],
    traduccionChat: {
      personajes: [
        {
          nombre: 'James:',
        },
        {
          nombre: 'Emily',
        },
      ],
      dialogo: [
        {
          personaje: 'James:',
          textoIng: '<em>Hello, dear. What are you doing?</em>',
          textoEsp: 'Hola, querida. ¿Qué estás haciendo?',
          audio: require('@/assets/componentes/audios/tema4/1.mp3'),
        },
        {
          personaje: 'Emily',
          textoIng:
            '<em>I am doing my homework. I must read three articles before starting my essay.</em>',
          textoEsp:
            'Estoy haciendo mi tarea. Yo tengo que leer tres artículos antes de empezar mi ensayo.',
          audio: require('@/assets/componentes/audios/tema4/2.mp3'),
        },
        {
          personaje: 'James:',
          textoIng:
            '<em>Oh, really? What are you going to do to reach that goal?</em>',
          textoEsp: '¿En serio? ¿Qué vas a hacer para alcanzar ese objetivo?',
          audio: require('@/assets/componentes/audios/tema4/3.mp3'),
        },
        {
          personaje: 'Emily',
          textoIng:
            '<em> I’m  going to use the reading techniques I learned.</em>',
          textoEsp: 'Voy a usar las técnicas de lectura que aprendí.',
          audio: require('@/assets/componentes/audios/tema4/4.mp3'),
        },
      ],
    },
    traduccionChat1: {
      personajes: [
        {
          nombre: 'James:',
        },
        {
          nombre: 'Emily',
        },
      ],
      dialogo: [
        {
          personaje: 'James:',
          textoIng: '<em>Which ones are those?</em>',
          textoEsp: '¿Cuáles son esas?',
          audio: require('@/assets/componentes/audios/tema4/5.mp3'),
        },
        {
          personaje: 'Emily',
          textoIng: '<em>Skimming and scanning</em>',
          textoEsp: 'Skimming y scanning.',
          audio: require('@/assets/componentes/audios/tema4/6.mp3'),
        },
        {
          personaje: 'James:',
          textoIng:
            '<em>I see. I have read about those, they are great ways to read faster and better.</em>',
          textoEsp:
            'Ya veo. He leído acerca de ellas, son buenas maneras de leer rápido y mejor.',
          audio: require('@/assets/componentes/audios/tema4/7.mp3'),
        },
      ],
    },
    dialogo: {
      personajes: [
        {
          nombre: 'Eliana',
          img: require('@/assets/curso/tema4/3.svg'),
        },
        {
          nombre: 'Peter',
          img: require('@/assets/curso/tema4/4.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Eliana',
          textoIng:
            '<em>Peter, you told me about some reading</em> *** <em>you are using.</em>',
          textoEsp:
            'Peter, me dijiste acerca de algunas técnicas de lectura que estás usando.',
          audio: require('@/assets/componentes/audios/tema4/8.mp3'),
          palabra: '<em>techniques</em>',
        },
        {
          personaje: 'Peter',
          textoIng:
            '<em>Yes, I learned them in my English course, they are</em> *** <em>and scanning.</em>',
          textoEsp:
            'Sí, las aprendí en mi curso de inglés, ellas son skimming y scanning.',
          audio: require('@/assets/componentes/audios/tema4/9.mp3'),
          palabra: '<em>skimming</em>',
        },
        {
          personaje: 'Eliana',
          textoIng: '<em>What is skimming</em> ***?',
          textoEsp: '¿De qué se trata el <em>skimming</em>?',
          audio: require('@/assets/componentes/audios/tema4/10.mp3'),
          palabra: '<em>about</em>',
        },
        {
          personaje: 'Peter',
          textoIng:
            '<em>Skimming is reading</em> *** <em>in order to get a general overview of the material.</em>',
          textoEsp:
            '<em>Skimming</em> es leer rápidamente para obtener una visión general del material.',
          audio: require('@/assets/componentes/audios/tema4/11.mp3'),
          palabra: '<em>rapidly</em>',
        },
        {
          personaje: 'Eliana',
          textoIng:
            '<em>Oh, I may try that skimming technique in my</em> *** <em>assignment.</em>',
          textoEsp:
            'Oh, puedo intentar esta técnica de <em>skimming</em> en mi próxima tarea.',
          audio: require('@/assets/componentes/audios/tema4/12.mp3'),
          palabra: '<em>next</em>',
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
