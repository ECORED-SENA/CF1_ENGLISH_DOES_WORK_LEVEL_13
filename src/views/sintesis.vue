<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg_grad-01
      .row.mb-5
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/sintesis/1.png", alt="alt")
        .col-lg-9
          TraduccionAudio.color-acento-botones.mt-lg-5(:dialogo="dialogo1")(data-aos="flip-up")

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo5.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
export default {
  name: 'Sintesis',
  components: {
    TraduccionAudio,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>In this component, we were able to practice grammar tenses such as: <i>simple, continuous and perfect</i>, looking at their structure and examples in negative, positive and interrogative sentences. We also saw how to articulate <i>subordinating conjunctions of time, relative clauses, defining and non-defining, and nominal and adverbial.</i> In terms of strategies to read faster, we learnt reading techniques such as <i>skimming and scanning.</i> And just at the end, we learnt the  pronunciation of <i>unstressed vowels</i> and <i>vowel reduction</i> as strategies to sound like native speakers.</em>',
        textoEsp:
          'En este componente, pudimos practicar tiempos gramaticales como: <b>simple, continuo y perfecto,</b> viendo su estructura y ejemplos en oraciones negativas, positivas e interrogativas. También vimos cómo articular las conjunciones <b>subordinadas de tiempo, las oraciones relativas, definidas y no definidas, las nominales y adverbiales.</b> En cuanto a estrategias para leer más rápido, aprendimos técnicas de lectura como skimming y scanning. Y justo al final, aprendimos la pronunciación de las <b>vocales átonas</b> y la <b>reducción de vocales,</b> como estrategias para sonar como hablantes nativos.',
        audio: require('@/assets/componentes/audios/sintesis.mp3'),
      },
    ],
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
