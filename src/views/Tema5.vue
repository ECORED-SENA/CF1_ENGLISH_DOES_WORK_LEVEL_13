<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 <em>Pronunciation of unstressed vowels and vowel reduction</em> (Pronunciación de vocales no acentuadas y reducción de vocales)
    
    .bg_grad-15
      .row.mb-5
        .col-lg-9
          TraduccionAudio.color-acento-botones(:dialogo="dialogo")(data-aos="flip-up")
        .col-lg-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema5/1.svg", alt="alt")
    
    .bg_grad-16
      .row.mb-5.justify-content-center
        .col-lg-4.pe-0.mb-3.mb-lg-0
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema5/2.svg", alt="alt")
        .col-lg-6.bgr.p-4
          SlyderE(indicadores="derecha")
            div
              p.text-bold <em>Learn to catch unstressed vowels</em>
              p <em>The unstressed vowel can be heard as the little ‘uh’ sound found in some words like the:</em>
              p <em>‘a’ in asthma</em>
              p <em>‘er’ in water,</em>
              p <em>‘ar’ in liar,</em>
              p <em>‘or’ in factor,</em>
              p.mb-0 <em>Those previous sounds can be read in a dictionary like ǝ- a little upside down e. Any written vowel can be spoken as an ‘ah’ sound.</em>
            div
              p.text-bold Aprenda a atrapar las vocales átonas
              p La vocal átona se puede escuchar como el pequeño sonido 'uh' que se encuentra en algunas palabras como:
              p <em>'a' en asthma</em>
              p <em>'er' en water,</em>
              p <em>'ar' en liar,</em>
              p <em> 'or' en factor,</em>
              p.mb-0 Esos sonidos anteriores se pueden leer en un diccionario como ǝ-, una pequeña e al revés. Cualquier vocal escrita se puede pronunciar como un sonido 'ah'.
    
    .row.mb-5.justify-content-center
      .col-lg-8.position-relative
        .tarjeta.bgr_9.p-4
          p.mb-5.colr <em>In the following dialogue, you will have the chance to review the pronunciation of unstressed vowels: </em>
            span.colr_1 / En el siguiente diálogo, tendrá la oportunidad de repasar la  pronunciación de las vocales átonas:
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema5/3.svg", alt="alt")
          .row.justify-content-center
            .col-lg-10
              .tarjeta.bgr.p-4
                TraduccionChat.color-acento-botones(:dialogo="traduccionChat")(data-aos="flip-up") 
          img.pst_4(src="@/assets/curso/tema5/4.svg", alt="alt")
          img.pst_5(src="@/assets/curso/tema5/5.svg", alt="alt")
    
    p.colr.text-center <em>Listen to this dialogue and identify unstressed vowels in sentences in which the vowels are pronounced.</em>

    Dialogo.color-acento-contenido.mb-5.mt-5(:dialogo="dialogo1")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Dialogue: Short and long vowels</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
    
    .row.mb-5
      .col-lg-7.d-flex.align-items-end
        div
          .row.mb-3.tarjeta.bgr_10.p-4
            .col-auto 
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema5/14.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
            .col-lg-10
              p.mb-0.colr <em><b>Fun Fact:</b> The schwa is known as murmur, indeterminate, neutral, an obscure or natural vowel.</em>
          .row.tarjeta.bgr_10.p-4
            .col-auto 
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema5/15.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
            .col-lg-10
              p.mb-0.colr <em>The unstressed vowel is one of the easiest sounds, it can be articulated moving the vocal cords. As it is easy to do that sound, babies do the ‘uh’ sound  easily</em>
      .col-lg-5
        figure.d-flex.justify-content-center
          img.w-auto.d-none.d-lg-flex(src="@/assets/curso/tema5/8.svg", alt="alt")
    
    .row
      .col-lg-5.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema5/9.png", alt="alt")
      .col-lg-7
        TraduccionAudio.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
        .tarjeta.bgr_2.p-4
          .row
            .col-lg-6.mb-3.mb-lg-0
              p.mb-0 Si es de su interés ampliar la información sobre reducción de vocales, puede descargar el documento PDF y realizar dos ejercicios propuestos para llevar a la práctica.
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('downloads/anexo4.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <b>Anexo.</b> Ejercicios reduccion de vocales para practicar pronunciación.





</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema5',
  components: {
    TraduccionAudio,
    TraduccionChat,
  },
  data: () => ({
    dialogo: [
      {
        textoIng:
          '<em>Unstressed vowels are vowel sounds that are hard to hear when a word is said and the reason is because they are not stressed. For instance, when the word “dictionary” is said, the pronunciation is ‘dictionree’. The ’a’ is an unstressed vowel.<br><br>There is an exercise to gather the idea: copy out the word list below in a piece of paper and underline the unstressed vowel in each word</em>',
        textoEsp:
          'Las vocales átonas son sonidos de vocales que son difíciles de escuchar cuando se dice una palabra y la razón es que no están acentuadas. Por ejemplo, cuando se dice la palabra dictionary, la pronunciación es "<em>dictionree</em>". La "a" es una vocal átona.<br><br>Hay un ejercicio para recoger la idea: copie la lista de palabras a continuación en una hoja de papel y subraye la vocal átona en cada palabra.',
        audio: require('@/assets/componentes/audios/tema5/1.mp3'),
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>To review whether that is ok or not, use the speaker in the google translator and listen to the word being pronounced in English. <br><br><b>Vowel reduction:</b><br><br>It refers to a reduction of the number of distinct vowels. For example, when vowels are <i>phonetically reduced in English, there is also a reduction in the number of vowel contrasts.</i> A well-researched type of reduction is that of the neutralization of acoustic distinctions in unstressed vowels, which occurs in many languages. The most common reduced vowel is the <i>schwa.</i> Sound duration is a common factor in reduction: in fast speech, for example, vowels are reduced due to physical limitations of the articulatory organs, the tongue cannot move to a prototypical position fast or completely enough to produce a full-quality vowel.</em>',
        textoEsp:
          'Reducción de vocales:<br><br>Se refiere a una reducción del número de vocales distintas. Por ejemplo, cuando las vocales se reducen fonéticamente en inglés, también se reduce el número de contrastes de vocales. Un tipo de reducción bien investigado es el de la neutralización de distinciones acústicas en vocales átonas, que ocurre en muchos idiomas. La vocal reducida más común es schwa. La duración del sonido es un factor común en la reducción: en el habla rápida, por ejemplo, las vocales se reducen debido a las limitaciones físicas de los órganos articulatorios, la lengua no puede moverse a una posición prototípica lo suficientemente rápido o completamente para producir una vocal de calidad completa.<br><br>Para revisar si eso está bien o no, use el altavoz en el traductor de Google y escuche la palabra que se pronuncia en inglés.',
        audio: require('@/assets/componentes/audios/tema5/16.mp3'),
      },
    ],
    traduccionChat: {
      personajes: [
        {
          nombre: 'Lucas:',
        },
        {
          nombre: 'Sophie',
        },
      ],
      dialogo: [
        {
          personaje: 'Lucas:',
          textoIng: '<em>How did you learn to pronounce English well?</em>',
          textoEsp: '¿Cómo aprendiste a pronunciar inglés bien?',
          audio: require('@/assets/componentes/audios/tema5/2.mp3'),
        },
        {
          personaje: 'Sophie',
          textoIng:
            '<em>Well, I had to practice a lot, I had to learn about the short and long vowels.</em>',
          textoEsp:
            'Bueno, tuve que practicar mucho, tuve que aprender las vocales cortas y largas.',
          audio: require('@/assets/componentes/audios/tema5/3.mp3'),
        },
        {
          personaje: 'Lucas:',
          textoIng:
            '<em>Oh, I did not know that in English there are two kinds of vowels.</em>',
          textoEsp: '¡Oh! No sabía que en inglés hay dos tipos de vocales.',
          audio: require('@/assets/componentes/audios/tema5/4.mp3'),
        },
        {
          personaje: 'Sophie',
          textoIng:
            '<em>Yes, the short vowels are /a,(æ)/ in cat, /e,(e)/ in peg, /i,(I)/ in pin, /o,(ɒ)/ in hot, /u,(ʌ)/in bus; and the long vowels are a, e, i, o, u.</em>',
          textoEsp: 'Si, las vocales cortas son …; y las largas son …',
          audio: require('@/assets/componentes/audios/tema5/5.mp3'),
        },
        {
          personaje: 'Lucas:',
          textoIng:
            '<em>I see. Then they are the same, but they sound differently.</em>',
          textoEsp: 'Ya veo. Son las mismas, pero suenan diferente.',
          audio: require('@/assets/componentes/audios/tema5/6.mp3'),
        },
        {
          personaje: 'Sophie',
          textoIng: '<em>Yes.</em>',
          textoEsp: 'Si.',
          audio: require('@/assets/componentes/audios/tema5/7.mp3'),
        },
      ],
    },
    dialogo1: {
      personajes: [
        {
          nombre: 'Jackson',
          img: require('@/assets/curso/tema5/7.svg'),
        },
        {
          nombre: 'Emma',
          img: require('@/assets/curso/tema5/6.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Jackson',
          textoIng:
            '<em>How did you learn to pronounce the short and long</em> *** <em>well?</em>',
          textoEsp:
            '¿Cómo aprendiste a pronunciar las vocales largas y cortas bien?',
          audio: require('@/assets/componentes/audios/tema5/8.mp3'),
          palabra: '<em>vowels</em>',
        },
        {
          personaje: 'Emma',
          textoIng:
            '<em>Well, I had to practice a lot, I had to make a difference between the name and how they</em> ***.',
          textoEsp:
            'Bien, pues yo tuve que practicar mucho, tuve que aprender a diferenciar entre el nombre y cómo suenan.',
          audio: require('@/assets/componentes/audios/tema5/9.mp3'),
          palabra: '<em>sound</em>',
        },
        {
          personaje: 'Jackson',
          textoIng:
            '<em>Oh, can you</em> *** <em>me an example? Why the a is named a and it sounds A</em>',
          textoEsp:
            '¡Oh! ¿Me das un ejemplo? ¿Por qué se llama ei pero suena a?',
          audio: require('@/assets/componentes/audios/tema5/10.mp3'),
          palabra: '<em>give</em>',
        },
        {
          personaje: 'Emma',
          textoIng:
            '<em>Because there is something called</em> *** <em>silent e, that’s when there are 2 syllables in a word and it ends in e. For example: name, fake, rake, same.</em>',
          textoEsp:
            'Porque hay algo llamado e silenciosa y esto es cuando hay dos sílabas en un palabra que termina en e. Por ejemplo: name, fake, rake, same.',
          audio: require('@/assets/componentes/audios/tema5/11.mp3'),
          palabra: '<em>the</em>',
        },
        {
          personaje: 'Jackson',
          textoIng: '<em>I</em> ***. ',
          textoEsp: 'Ya veo.',
          audio: require('@/assets/componentes/audios/tema5/12.mp3'),
          palabra: '<em>see</em>',
        },
        {
          personaje: 'Emma',
          textoIng: '<em>Yes</em>.',
          textoEsp: 'Si.',
          audio: require('@/assets/componentes/audios/tema5/13.mp3'),
          palabra: '<em>rapidly</em>',
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
