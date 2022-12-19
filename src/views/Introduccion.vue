<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg_grad-02
      .bg_grad-03
        .row.mb-5.position-relative
          .col-lg-4.mb-3.mb-lg-0
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/introduccion/1.svg", alt="alt")
          .col-lg-8
            TraduccionAudio.color-acento-botones.mt-lg-5(:dialogo="dialogo1")(data-aos="flip-up")
          img.pst(src="@/assets/curso/introduccion/2.svg", alt="alt")
          img.pst_1(src="@/assets/curso/introduccion/3.svg", alt="alt")
      
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    
</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
export default {
  name: 'Introduccion',
  components: {
    TraduccionAudio,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>To talk about situations that have already happened, it is important to use <i>past simple;</i> to talk about situations that have started and have not finished, it is important to use <i>past perfect;</i> and to talk about the activities that were happening when there is another one going on, it is a great idea to use <i>continuous tenses.</i> Tenses are needed to express situations and show the level of the language. In this component, you will see <i>clauses</i> and their right creation, as well as <i>techniques to read faster,</i> and ways to pronounce some words and vowels.<br><br>Building on the above, we welcome you to the study of this training component and, to begin, you are invited to explore the video presented below:</em>',
        textoEsp:
          'Para hablar de situaciones que ya pasaron, es importante usar el pasado simple; para hablar de situaciones que han comenzado y no han terminado, es importante usar el pretérito perfecto; y para hablar de actividades que estaban pasando cuando hay otra en marcha, es una gran idea usar tiempos continuos. Los tiempos son necesarios para expresar situaciones y mostrar el nivel del idioma. En este componente, verá cláusulas y su correcta creación, así como técnicas para leer más rápido, y formas de pronunciar algunas palabras y vocales. <br><br>Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se le invita a explorar el video que se presenta a continuación:',
        audio: require('@/assets/componentes/audios/introduccion.mp3'),
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
