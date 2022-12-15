<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Looking back at grammar tenses</em> (Recordando los tiempos gramaticales)
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/1.png", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
    
    .bg_grad-04
      .row.mb-5
        .col-lg-8.mb-3.mb-lg-0
          TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
        .col-lg-4(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/2.svg", alt="alt")
      
      .row.mb-5
        .col-lg-3.mb-3.mb-lg-0.d-flex.align-items-center
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/3.svg", alt="alt")
        .col-lg-9
          .tarjeta.bgr.p-4
            SlyderA(tipo="b")
              div
                p.text-center.text-bold <em>Dynamic (action) verbs</em> / Verbos dinámicos (de acción)
                Audio.color-acento-botones.mx-3.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/1.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .row
                  .col-md-6.mb-4.mb-md-0
                    p.colr <em>They are those actions that are seen, it means, they are external. For instance: swim, play, work, speak. They are not feelings because the way of feeling is not seen, it is shown through an action, that would be the dynamic verb.</em>
                    p.colr.text-bold <em>For example:</em>
                    p.colr.mb-0 <em><b>I feel angry</b> (that is not external)</em>
                    p.colr.mb-0 <em><b>I start arguing</b> (that is external, “argue” is a dynamic verb)</em>
                  .col-md-6
                    p.colr_1 Son aquellas acciones que se ven, quiere decir que son externas, por ejemplo: nadar, jugar, trabajar, hablar. No son sentimientos porque no se ve la forma de sentir, se muestra a través de una acción, ese sería el verbo dinámico.
                    p.colr_1.text-bold Ejemplo:
                    p.colr_1.mb-0 Me siento enojado (eso no es externo)
                    p.colr_1.mb-0 Empiezo a discutir (eso es externo, argumentar es un verbo dinámico
              div
                p.text-center.text-bold <em>Stative (state-of-being) verbs</em> / Verbos estativos (estado de ser)
                Audio.color-acento-botones.mx-3.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/2.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .row
                  .col-md-6.mb-4.mb-md-0
                    p.colr <em>Stative verbs describe a subject’s state or feeling, including things they like and don’t like. Some verbs would be: want, need, prefer, love, hate, like, dislike, seem, understand, know, believe, involve, realize.</em>
                    p.colr <em>Stative verbs cannot be used in continuous tenses because they imply a feeling, a perception, a matter of likes and/or dislikes.</em>
                    p.colr.text-bold <em>For example:</em>
                    p.colr <em>She wants to study more.</em>
                    p.colr.mb-0 <em><b>Note:</b> I can't say: She is wanting to study more, even if she has that feeling now.</em>
                  .col-md-6
                    p.colr_1 Los verbos estativos describen el estado o sentimiento de un sujeto, incluidas las cosas que les gustan y las que no. Algunos verbos serían: querer, necesitar, preferir, amar, odiar, gustar, disgustar, parecer, entender, saber, creer, involucrar, darse cuenta.
                    p.colr_1 Los verbos estativos no se pueden usar en tiempos continuos porque implican un sentimiento, una percepción, una cuestión de gustos y/o disgustos.
                    p.colr_1.text-bold Ejemplo:
                    p.colr_1 Ella quiere estudiar más.
                    p.colr_1.mb-0 <b>Nota:</b> No puedo decir: Ella esta queriendo estudiar más, incluso si ahora tiene ese sentimiento.
              div
                p.text-center.text-bold <em>Auxiliary (helping) verbs</em> / Tipos de verbos - Verbos auxiliares (de ayuda)
                Audio.color-acento-botones.mx-3.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/3.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .row
                  .col-md-6.mb-4.mb-md-0
                    p.colr <em>Auxiliary verbs, or “helping verbs,” are used in English to change another verb’s tense, voice, or mood. For example, the verbs “have” and “do”. In the following sentences, they work as auxiliaries:</em>
                    p.colr.text-bold <em>For example:</em>
                    p.colr.mb-0 <em>I have eaten bread many times before. (tense)</em>
                    p.colr.mb-0 <em>That piece of bread was eaten by me. (voice)</em>
                    p.colr.mb-0 <em>Did you eat my bread? (mood)</em>
                  .col-md-6
                    p.colr_1 Los verbos auxiliares, o "verbos de ayuda", se usan en inglés para cambiar el tiempo, la voz o el modo de otro verbo. Por ejemplo, los verbos have y do. En las siguientes oraciones funcionan como auxiliares:
                    p.colr_1.text-bold Ejemplo:
                    p.colr_1.mb-0 He comido pan muchas veces antes. (tiempo)
                    p.colr_1.mb-0 Ese trozo de pan me lo comí. (voz)
                    p.colr_1.mb-0 ¿Te comiste mi pan? (estado anímico)
              div
                p.text-center.text-bold <em>Modal auxiliary verbs</em> / Verbos auxiliares modales
                Audio.color-acento-botones.mx-3.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/4.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .row
                  .col-md-6.mb-4.mb-md-0
                    p.colr <em>Modal verbs usually behave differently to normal verbs; for example, they do not have the chance to participate in all tenses, they do not need conjugation and they do not require auxiliary either. Therefore, they are selected according to the purpose of the speaker who elaborates the sentence. Some of them are:  can, may, could, should, would, must, ought, and might.</em>
                    p.colr <em>I could swim in the Olympics, but should I do it?</em>
                  .col-md-6
                    p.colr_1 Los verbos modales suelen comportarse de manera diferente a los verbos normales, por ejemplo, no tienen la oportunidad de participar en todos los tiempos, no necesitan conjugación y tampoco requieren auxiliares, por lo que se seleccionan de acuerdo con el propósito del hablante que elabora la frase. Algunos de ellos son: <em>can, may, could, should, would, must, ought y might.</em>
                    p Podría nadar en los Juegos Olímpicos, pero ¿debería hacerlo?
              div
                p.text-center.text-bold <em>Phrasal verbs</em> / Phrasal verbs
                Audio.color-acento-botones.mx-3.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/5.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .row
                  .col-md-6.mb-4.mb-md-0
                    p.colr <em>Phrasal verbs are verbs that can change meaning depending on the preposition or particle that is added. For example, the verb “get” means, in Spanish, “obtener”, but when the particle “by” is added, it means “vivir de”. Here we have the example:</em>
                    p.colr <em>After losing his job, he’s getting by on savings.</em>
                  .col-md-6
                    p.colr_1 Los phrasal verbs son verbos que pueden cambiar de significado dependiendo de la preposición o partícula que se le agregue por ejemplo el verbo get significa en español obtener, pero cuando se le agrega la partícula by que significa vivir de o arreglárselas, aquí tenemos el ejemplo: 
                    p Después de perder su trabajo, se las arregla con sus ahorros.
    .bg_grad-06
      .bg_grad-05
        .row.mb-5.justify-content-center
          .col-lg-7.d-flex.align-items-center
            div
              p.text-white Si es de su interés ampliar la información sobre ejemplos de <em>dynamic or stative verbs</em>, puede descargar el documento PDF.
              a.anexo.mb-4(:href="obtenerLink('downloads/anexo3.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <b>Anexo.</b> <em>Types of verbs that can be dynamic or stative</em>
          .col-lg-3
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/4.png", alt="alt") 

    
      .row.mb-5
        .col-lg-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/5.svg", alt="alt") 
        .col-lg-9
          TraduccionT.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up")
          .row.justify-content-center
            .col-lg-9
              .tarjeta.bgr.p-4
                .row
                  .col-lg-6.d-flex.align-items-center.justify-content-center
                    p.mb-0 <em>Let’s see the example:</em>
                  .col-lg-6
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/6.svg", alt="alt") 
      
      p.mb-5.colr <em>Now we can see the different categories that are presented in the verbs according to the function of the direct and indirect object. We can see some examples: </em>
        span.colr_1 / Ahora podemos ver las diferentes categorías que se presentan en los verbos según la función del objeto directo e indirecto. Veamos algunos ejemplos:
    
    .bg_grad-07
      .row
        .col-lg-4
          .tarjeta.bgr_1.p-4.h-100
            .tarjeta.bgr.p-3.h-100
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema1/6.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-bold.text-center <em>Transitive verbs</em>
              TraduccionT.color-acento-botones(:dialogo="dialogo4")(data-aos="flip-up")
        .col-lg-4
          .tarjeta.bgr_1.p-4.h-100
            .tarjeta.bgr.p-3.h-100
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema1/7.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-bold.text-center <em>Intransitive verbs</em>
              TraduccionT.color-acento-botones(:dialogo="dialogo5")(data-aos="flip-up")
        .col-lg-4
          .tarjeta.bgr_1.p-4.h-100
            .tarjeta.bgr.p-3.h-100
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema1/8.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-bold.text-center <em>Ditransitive verbs</em>
              TraduccionT.color-acento-botones(:dialogo="dialogo6")(data-aos="flip-up")
    
    separador

    #t_1_1.titulo-segundo.color-primario
      h2 1.1 <em>Simple tenses</em> (Tiempos simples)

    .row.mb-5
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo7")(data-aos="flip-up")
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/7.svg", alt="alt")
    
    .row.mb-5
      .col-lg-4
        TraduccionT.color-acento-botones(:dialogo="dialogo8")(data-aos="flip-up")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/8.svg", alt="alt")
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta bgr_2")
          .row(titulo="<em>Present tense</em>").bgr.tarjeta.p-4
            .col-md-4.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema1/9.svg", alt="alt")
            .col-md-8
              TraduccionAudio.color-acento-botones(:dialogo="dialogo9")(data-aos="flip-up")
          div(titulo="<em>Past tense</em>").bgr.tarjeta.p-4
            TraduccionAudio.color-acento-botones(:dialogo="dialogo10")(data-aos="flip-up")
          div(titulo="<em>Future tense</em>").bgr.tarjeta.p-4
            TraduccionAudio.color-acento-botones(:dialogo="dialogo11")(data-aos="flip-up")

    
    .bg_grad-08
      p.text-center <em>Now it's your turn to see the thematic dialogue where we will find two characters talking about the things they did yesterday. Use the past tense.</em>
    
      .row.justify-content-center.mb-3
        .col-lg-3.pe-0
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/10.svg", alt="alt")
        .col-lg-6.bgr
          p.mt-3.text-bold.text-center <em>What did you do?</em>
          SlyderA(tipo="b")
            div
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat")(data-aos="flip-up")
            div
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat1")(data-aos="flip-up")
    
    separador

    #t_1_2.titulo-segundo.color-primario
      h2 1.2 <em>Continuous tenses</em> (Tiempos continuos)
    
    .bg_grad-09
      .row.mb-5
        .col-lg-4
          TraduccionT.color-acento-botones(:dialogo="dialogo12")(data-aos="flip-up")
        .col-lg-8
          .tarjeta.bgr_2.p-4
            p.text-bold.text-center <em>Continuous tenses</em>
            SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
              .tarjeta.bgr.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5
                    img(src="@/assets/curso/tema1/11.svg" alt='AvatarTop')
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/18.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold <em>Present continuous</em>
                TraduccionT.color-acento-botones(:dialogo="dialogo13")(data-aos="flip-up")
              .tarjeta.bgr.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5
                    img(src="@/assets/curso/tema1/12.svg" alt='AvatarTop')
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/19.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold <em>Present perfect continuous</em>
                TraduccionT.color-acento-botones(:dialogo="dialogo14")(data-aos="flip-up")
              .tarjeta.bgr.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5
                    img(src="@/assets/curso/tema1/13.svg" alt='AvatarTop')
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/20.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold <em>Future continuous</em>
                TraduccionT.color-acento-botones(:dialogo="dialogo15")(data-aos="flip-up")
              .tarjeta.bgr.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5
                    img(src="@/assets/curso/tema1/14.svg" alt='AvatarTop')
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/21.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold <em>Future perfect continuous</em>
                TraduccionT.color-acento-botones(:dialogo="dialogo16")(data-aos="flip-up")
      .bg_grad-10
        .row.justify-content-center
          .col-lg-2
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/15.png", alt="alt")
          .col-lg-8
            div.text-white
              p Si es de su interés, puede practicar las formas simples y continuas en el siguiente enlace.
              p Palabras a practicar:
              p <em>Verbs of emotion (love, hope), possession (have, contain), mental states (know, forget), perception (hear, taste), and others (seem, matter).</em>
            .row
              .col-lg-4
                a.anexo.mb-4.mb-lg-0(href="https://agendaweb.org/verbs/present-continuous-present-simple.html" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <b>Enlace <em>web</em>.</b> <em>Present continuous</em>
    
    separador

    #t_1_3.titulo-segundo.color-primario
      h2 1.3 <em>Perfect tenses</em> (Tiempos perfectos)
          
    .row.mb-5
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo17")(data-aos="flip-up")
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/16.png", alt="alt")
    
    p.text-bold.colr <em>Simple present perfect</em> / Presente perfecto simple

    .row.mb-5
      .col-lg-6
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/17.svg", alt="alt")
      .col-lg-6
        TraduccionT.color-acento-botones(:dialogo="dialogo18")(data-aos="flip-up")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/18.svg", alt="alt")
    
    TraduccionT.color-acento-botones(:dialogo="dialogo19")(data-aos="flip-up")

    .row.justify-content-center
      .col-lg-9
        .titulo-sexto.color-primario
          h5 Table 1
          span <em>Grammatical structure of the present perfec</em>
        
        table.mb-5
          thead
            tr
              th.bgr_3(style='width:11%') <em>Subject</em> /Sujeto
              th.bgr_4(style='width:3%') +
              th.bgr_3(style='width:21%') <em>Auxiliary verb</em> /Verbo auxiliar “to have”
              th.bgr_4(style='width:3%') +
              th.bgr_3(style='width:21%') <em>Past participle of main verb</em> / Participio pasado
              th.bgr_4(style='width:3%') +
              th.bgr_3(style='width:21%') <em>Complement</em> / Complemento
          tbody
            tr.bgr_5
              td.bgr_4.text-center <em>I</em> 
                p.text-center (Yo)
              td.bgr_4 +
              td.bgr_4.text-center <em>have</em> 
                p.text-center (he)
              td.bgr_4 +
              td.bgr_4.text-center <em>worked</em> 
                p.text-center (trabajado)
              td.bgr_4 +
              td.bgr_4
                .row
                  .col-lg-8
                    p.text-center <em>very hard.</em>
                    p.mb-0.text-center (muy duro.)
                  .col-lg-4
                    Audio.color-acento-botones.mt-2(
                      :audio="require('@/assets/componentes/audios/tema1/28.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
            tr.bgr_6
              td.bgr_4.text-center <em>Mary</em> 
                p.text-center (Ella)
              td.bgr_4 +
              td.bgr_4.text-center <em>has</em> 
                p.text-center (ha)
              td.bgr_4 +
              td.bgr_4.text-center <em>listened</em> 
                p.text-center (escuchado)
              td.bgr_4 +
              td.bgr_4
                .row
                  .col-lg-8
                    p.text-center <em>to the radio.</em>
                    p.mb-0.text-center (la radio.)
                  .col-lg-4
                    Audio.color-acento-botones.mt-2(
                      :audio="require('@/assets/componentes/audios/tema1/29.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
            tr.bgr_5
              td.bgr_4.text-center <em>George</em> 
                p.text-center (Él)
              td.bgr_4 +
              td.bgr_4.text-center <em>has</em> 
                p.text-center  (ha)
              td.bgr_4 +
              td.bgr_4.text-center <em>bought</em> 
                p.text-center (comprado)
              td.bgr_4 +
              td.bgr_4
                .row
                  .col-lg-8
                    p.text-center <em>a new house.</em>
                    p.mb-0.text-center (una nueva casa.)
                  .col-lg-4
                    Audio.color-acento-botones.mt-2(
                      :audio="require('@/assets/componentes/audios/tema1/30.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
            tr.bgr_6
              td.bgr_4.text-center <em>Ida and Susy</em> 
                p.text-center (Ellas)
              td.bgr_4 +
              td.bgr_4.text-center <em>have</em> 
                p.text-center (han)
              td.bgr_4 +
              td.bgr_4.text-center <em>traveled</em> 
                p.text-center (viajado)
              td.bgr_4 +
              td.bgr_4
                .row
                  .col-lg-8
                    p.text-center <em>abroad.</em>
                    p.mb-0.text-center (al extranjero.)
                  .col-lg-4
                    Audio.color-acento-botones.mt-2(
                      :audio="require('@/assets/componentes/audios/tema1/31.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")    

    .bg_grad-11
      p.mb-5.colr <em>In this compound verb tense (present perfect), affirmative, negative and interrogative structures are also handled, as can be seen in the following video: </em>
        span.colr_1 / En este tiempo verbal compuesto (presente perfecto), también se manejan las estructuras afirmativas, negativas e interrogativas, como se puede observar en el siguiente video:  
      
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
      .row.justify-content-center
        .col-lg-10
          .tarjeta.bgr_7.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/tema1/19.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col-lg-8.mb-3.mb-sm-0
                    p.mb-0.text-white Si es de su interés, puede consultar mas información acerca de los tiempos perfectos en el siguiente enlace del British Council.  
                  .col-lg-4.col-sm-auto
                    a.anexo.mb-4.mb-lg-0(href="https://www.britishcouncil.es/blog/tiempos-perfectos-ingles" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p <b>Enlace <em>web</em>.</b> tiempos perfectos inglés.
    
    p.colr <em>Once studied the grammatical tenses, we invite you to practice with the following dialogue. </em>
      span.colr_1 / Una vez estudiados los tiempos gramaticales, lo invitamos a practicar con el siguiente diálogo.
       
    Dialogo.pst_2.color-acento-contenido.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Dialogue what happened?</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

          

</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema1',
  components: {
    TraduccionT,
    TraduccionAudio,
    TraduccionChat,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>As we all know, verbs are actions that can help to describe the activity the subject is doing, they must be conjugated and they must work with a tense, they can be involved in negative, positive and interrogative sentences, but there is no sentence without a subject and a verb.</em>',
        textoEsp:
          'Como todos sabemos, los verbos son acciones que pueden ayudar a describir la actividad que realiza el sujeto, deben ser conjugados y deben trabajar con un tiempo verbal, pueden estar involucrados en oraciones negativas, positivas e interrogativas, pero no hay oración sin un sujeto y un verbo.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>In the following paragraphs, the function of the verbs will be considered. In the examples, there will be sentences in simple, continuous, and perfect tenses, so you will be able to remember how the verbs are conjugated and how the tenses are structured. First of all, we are going to see the types of verbs like dynamic (action) verbs, stative (state-of-being) verbs, auxiliary (helping) verbs, modal auxiliary verbs, and phrasal verbs, and also the verb categories, as transitive, intransitive, and ditransitive.<br><br>Let’s see some examples:</em>',
        textoEsp:
          'En los siguientes párrafos, se considerará la función de los verbos. En los ejemplos, habrá oraciones en tiempos simples, continuos y perfectos, para que pueda recordar cómo se conjugan los verbos y cómo se estructuran los tiempos. En primer lugar, vamos a ver los tipos de verbos: dinámicos, estativos, auxiliares, modales y frasales, y también las categorías de verbos, como transitivo, intransitivo y ditransitivo.  Veamos algunos ejemplos:',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>The classification of verbs depends on the kinds of objects and predicates they have. Thus, intransitive ones have no objects, <i>transitive</i> don’t always need a direct object, and <i>ditransitive</i> have direct and indirect objects.<br><br><b>Verb categories: transitive, intransitive, and ditransitive:</b><br><br><i>Transitive, intransitive, and ditransitive</i> refer to how a verb can work with direct and indirect objects. To know what the direct object is, you need to see who does the action; for example, in the following sentence:  <i>“John bought his son a present”.</i> John is the subject, the indirect object is <i>his son,</i> and the direct object is <i>a present.</i></em>',
        textoEsp:
          'La clasificación de los verbos depende de los tipos de objetos y predicados que tengan. Así, los intransitivos no tienen objeto, los transitivos no siempre necesitan un objeto, y los ditransitivos tienen objeto directo e indirecto.<br><br>Categorías de verbos: transitivos, intransitivos y ditransitivos<br><br>Transitivo, intransitivo y ditransitivo se refieren a cómo un verbo puede funcionar con objetos directos e indirectos. Para saber cuál es el objeto directo, necesita ver quién hace la acción; por ejemplo, en la oración, “John compró a su hijo un regalo”, John es el sujeto, el objeto indirecto es su hijo y el objeto directo es un regalo.',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>Verbs that use a direct object, but not an indirect object, are called <i>transitive.</i> They don’t always need a direct object. The examples are: <br><br><b>I clean that, we like it, I hate this, I learnt that, we did not say it.</b></em>',
        textoEsp:
          'Los verbos que usan un objeto directo, pero no un objeto indirecto, se llaman transitivos. No siempre necesitan un objeto directo. Los ejemplos son:<br><br>Yo  limpio eso, nos gusta, odio esto, aprendí eso, no lo dijimos.',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em>Verbs that do not  use either a direct or indirect object are called <i>intransitive.</i> They are ok just by themselves. Example: <br><br><b>On Sundays I go there, I walk on weekdays, I talk loudly, I sit on the couch, I sleep 8 hours, I work until 12.</b></em>',
        textoEsp:
          'Los verbos que no usan un objeto directo o indirecto se llaman intransitivos. Están bien solos. Ejemplo: <br><br>los domingos voy allí, camino entre semana, hablo alto, me siento en el sofá, duermo 8 horas, trabajo hasta las 12.',
      },
    ],
    dialogo6: [
      {
        textoIng:
          '<em>Verbs that use both direct and indirect objects are called <i>ditransitive.</i> They do not always need an indirect object, but they have the option. <br><br>Examples: <br><br><b>I throw you the ball, I make you listen to the song, I buy my son a toy.</b></em>',
        textoEsp:
          'Los verbos que usan complementos directos e indirectos se llaman ditransitivos. No siempre necesitan un objeto indirecto, pero tienen la opción.<br><br>Ejemplos:<br><br>Le tiro la pelota, le hago escuchar la canción, le compro un juguete a mi hijo.',
      },
    ],
    dialogo7: [
      {
        textoIng:
          '<em>The simple sentences are in <i>present, past, and future,</i> they all need auxiliaries to be said in negative and interrogative tenses; these simple tenses show actions or states of being at a point in time, but don’t always mention a specific moment. Past, present, and future are quite simple verb forms to use. <br><br>So, at this point, we are going to present the main verb tenses in English and when to use them. An example will make it much clearer:</em>',
        textoEsp:
          'Las oraciones simples están en presente, pasado y futuro, todas necesitan auxiliares para ser dichas en tiempos negativos e interrogativos; estos tiempos simples muestran acciones o estados de ser en un punto en el tiempo, pero no siempre mencionan un momento específico. Pasado, presente y futuro son formas verbales bastante simples de usar. Entonces, en este punto, vamos a presentar los principales tiempos verbales en inglés y cuándo usarlos. Un ejemplo lo hará mucho más claro:',
      },
    ],
    dialogo8: [
      {
        textoIng:
          '<em>So, at this point, we are going to present the main verb tenses in English and when to use them. An example <i>will make it much clearer:</i></em>',
        textoEsp:
          'Entonces, en este punto, vamos a presentar los principales tiempos verbales en inglés y cuándo usarlos. Un ejemplo lo hará mucho más claro:',
      },
    ],
    dialogo9: [
      {
        textoIng:
          '<em>First, <i>present tense</i> tells you what a routine is, for example: <i>I go to work from Monday to Saturday.</i> That sentence means my routine is going to work, if there is an activity that I am doing today and it is not working, I must tell it in present continuous. Let’s guess whether the present should be simple or progressive.<br><br><b>He/go/bus/everyday</b></em>',
        textoEsp:
          'Primero, el tiempo presente dice qué es una rutina, por ejemplo: Voy a trabajar de lunes a sábado. Esa oración significa que mi rutina es ir a trabajar, si hay una actividad que estoy haciendo hoy y no es trabajar, debo decirla en presente continuo. Adivina si el presente debe ser simple o progresivo (continuo).<br><br><em><b>He/go/bus/everyday</b></em>',
        audio: require('@/assets/componentes/audios/tema1/9.mp3'),
      },
    ],
    dialogo10: [
      {
        textoIng:
          '<em><i>Past tense</i> tells you what happened before the present time, the activity is done or finished, and It may not be repeated with the same characteristics. For example:<br><br>We graduated in November, We had a great bachelor party, We got drunk in first grade, I got my first kiss in high school. (Those activities had a time and they cannot be done again under controlled circumstances). Let’s try to describe these activities in past simple considering the girl’s day is over. </em>',
        textoEsp:
          'El tiempo pasado dice lo que pasó antes del tiempo presente, la actividad está hecha o terminada y no puede repetirse con las mismas características. Por ejemplo:<br><br>Nos graduamos en noviembre, Tuvimos una gran despedida de soltero, Nos emborrachamos en primer grado, Obtuve mi primer beso en la escuela secundaria. (Esas actividades tuvieron un tiempo y no se pueden volver a hacer bajo circunstancias controladas). Tratemos de describir estas actividades en pasado simple considerando que el día de la niña ha terminado.</em>',
        audio: require('@/assets/componentes/audios/tema1/10.mp3'),
      },
    ],
    dialogo11: [
      {
        textoIng:
          '<em><i>Future tense</i> talks about what has not happened yet. That can be a plan, something that can be done in the future, a desire, a prediction; for instance, talking about the weather: It <i>will rain, We will fly to Houston in November, I will go on foot today, I will help you.</i> Let’s see this image and describe the activities that people plan to do next week. Example: <i>She will walk the dog!</i></em>',
        textoEsp:
          'El tiempo futuro habla de lo que aún no ha sucedido. Puede ser un plan, algo que se puede hacer en el futuro, un deseo, una predicción; por ejemplo, hablar sobre el clima: Lloverá, Volaremos a Houston en noviembre, Iré a pie hoy, Yo te ayudaré. Veamos esta imagen y describamos las actividades que la gente planea hacer la próxima semana. Ejemplo: ¡Ella paseará al perro!</em>',
        audio: require('@/assets/componentes/audios/tema1/11.mp3'),
      },
    ],
    dialogo12: [
      {
        textoIng:
          '<em>In English, there is a difference between the activities we do every day, in which we use present simple, and the ones we are doing just at a specific time, these last ones would be present continuous. For example:  <i>I work every day (present simple), but today I am visiting the doctor.</i><br><br>Verb tenses are grammatical norms of verbal conjugation that express the moment in which the action is carried out. With the verb tenses, it is possible to express if the action belongs to the past, to the present or if it is yet to be carried out. In this unit, we will mention some of the continuous tenses used in English. Let’s see the following table.</em>',
        textoEsp:
          'En inglés, se hace una diferencia entre las actividades que hacemos todos los días, en las que usamos el presente simple, y las que estamos haciendo justo en un momento específico, estas últimas serían en presente continuo. Por ejemplo. Yo trabajo todos los días, pero ahora, estoy visitando al doctor<br><br>Los tiempos verbales son normas gramaticales de conjugación verbal que expresan el momento en que se lleva a cabo la acción. Con los tiempos verbales, se puede expresar si la acción pertenece al pasado, al presente o si está aún por realizar. En esta unidad, mencionaremos algunos de los tiempos continuos que se utilizan en inglés. Veamos la siguiente tabla.',
      },
    ],
    dialogo13: [
      {
        textoIng:
          '<em>Shows that the action is in progress at the present.<br><br>Is he speaking?<br><br>Yes, he is speaking.</em>',
        textoEsp:
          'Muestra que la acción está en progreso en el presente<br><br>¿Él está hablando?<br><br>Sí, él está hablando.',
      },
    ],
    dialogo14: [
      {
        textoIng:
          '<em>Shows that the action started in the past and continues to the present.<br><br>Has he been speaking?<br><br>Yes, he has.</em>',
        textoEsp:
          'Muestra que la acción empezó en el pasado y continúa hasta el presente.<br><br>¿Él ha estado hablando?<br><br>Sí, él ha estado.',
      },
    ],
    dialogo15: [
      {
        textoIng:
          '<em>Shows that the action will be in progress at some point in the future.<br><br>Will he be speaking?<br><br>Yes, he will be speaking.</em>',
        textoEsp:
          'Muestra que la acción estará en progreso en algún momento en el futuro.<br><br>¿(él)Estará hablando?<br><br>Sí, él estará hablando.',
      },
    ],
    dialogo16: [
      {
        textoIng:
          '<em>Shows that the action will occur in the future (with greater certainty).<br><br>Is he going to speak?<br><br>Yes, he is going to speak.</em>',
        textoEsp:
          'Muestra que la acción ocurrirá en el futuro (con mayor certeza).<br><br>¿Va a hablar?<br><br>Sí, él estará hablando.',
      },
    ],
    dialogo17: [
      {
        textoIng:
          '<em>When we speak of a perfect tense, we are referring to an action that has finished, whether in the past, the present, or the future. This means that the verb tenses are doubled, and we don’t only have a past, present and future, but also past perfect, present perfect, and future perfect.<br><br>This is important because when talking about perfect tenses, then we are left with 6 different grammatical constructions: <i>Present Perfect Simple, Past Perfect Simple, Past Perfect Continuous, Present Perfect Continuous, Future Perfect Simple, and Future Perfect Continuous.</i><br><br>Next, we recommend you study the simple present perfect tense:</em>',
        textoEsp:
          'Cuando hablamos de un tiempo perfecto, nos estamos refiriendo a una acción que ha finalizado, ya sea en el pasado, el presente o el futuro. Esto significa que los tiempos verbales se duplican y no solo contamos con pasado, presente y futuro, sino también con pasado perfecto, presente perfecto y futuro perfecto.<br><br>Esto es importante porque al hablar de tiempos perfectos, entonces nos quedan 6 construcciones gramaticales diferentes: Presente Perfecto Simple, Pasado Perfecto Simple, Pasado Perfecto Continuo, Presente Perfecto Continuo, Futuro Perfecto Simple y Futuro Perfecto Continuo.<br><br>A continuación, lo invitamos a estudiar el tiempo presente perfecto simple:',
      },
    ],
    dialogo18: [
      {
        textoIng:
          '<em>The present perfect tense is a compound verb tense and is used to talk about something that happened in the past and is relevant in the present, because it happened recently or because it is an action that has not yet finished. It is also used to indicate a repeated action in a non-specific period of time located between the past and the present, or when an action is mentioned for which the precise moment in which it happened is not important. It is quite useful when you want to tell an anecdote that has happened to you, or describe the trips made, as well as to express experiences or memories.</em>',
        textoEsp:
          'El tiempo presente perfecto es un tiempo verbal compuesto y se usa para hablar de algo que sucedió en el pasado y tiene relevancia en el presente, debido a que ocurrió hace poco tiempo o debido a que es una acción que aún no ha finalizado. También se emplea al señalar una acción repetida en un periodo temporal inespecífico situado entre el pasado y el presente, o cuando se menciona una acción para la cual no es importante el momento preciso en que aconteció. Resulta bastante útil cuando se quiere contar una anécdota que ha ocurrido, o describir los viajes realizados, así como para expresar experiencias o recuerdos.',
      },
    ],
    dialogo19: [
      {
        textoIng:
          '<em>As can be seen in the previous examples, the present perfect tense is formed using the auxiliary verb "to have" conjugated in the corresponding grammatical person in the present tense, plus the past participle of the main verb of the sentence, according to the following structure:</em>',
        textoEsp:
          'Como puede observarse en los ejemplos anteriores, el tiempo presente perfecto se forma utilizando el verbo auxiliar “<em>to have</em>” conjugado en la persona gramatical correspondiente en tiempo presente, más el participio pasado del verbo principal de la oración, de acuerdo con la siguiente estructura:',
      },
    ],
    traduccionChat: {
      personajes: [
        {
          nombre: 'Cesar:',
        },
        {
          nombre: 'Edith',
        },
      ],
      dialogo: [
        {
          personaje: 'Cesar:',
          textoIng: '<em>What did you do yesterday?</em>',
          textoEsp: '¿Qué hiciste ayer?',
          audio: require('@/assets/componentes/audios/tema1/12.mp3'),
        },
        {
          personaje: 'Edith',
          textoIng: '<em>I stayed at home and cleaned the house.</em>',
          textoEsp: 'Yo me quedé en casa y limpié la casa.',
          audio: require('@/assets/componentes/audios/tema1/13.mp3'),
        },
        {
          personaje: 'Cesar:',
          textoIng: '<em>How boring!</em>',
          textoEsp: '¡Qué aburridor!',
          audio: require('@/assets/componentes/audios/tema1/14.mp3'),
        },
      ],
    },
    traduccionChat1: {
      personajes: [
        {
          nombre: 'Cesar:',
        },
        {
          nombre: 'Edith',
        },
      ],
      dialogo: [
        {
          personaje: 'Edith',
          textoIng:
            '<em>Not really, I love cleaning! And you? What did you do?</em>',
          textoEsp: 'No realmente, ¡me encanta limpiar! ¿Y tú? ¿Qué hiciste?',
          audio: require('@/assets/componentes/audios/tema1/15.mp3'),
        },
        {
          personaje: 'Cesar:',
          textoIng: '<em>I drove to the mountains and went hiking.</em>',
          textoEsp: 'Yo conduje a las montañas y fui de excursión.',
          audio: require('@/assets/componentes/audios/tema1/16.mp3'),
        },
        {
          personaje: 'Edith',
          textoIng: '<em>That sounds fun!</em>',
          textoEsp: '¡Suena divertido!',
          audio: require('@/assets/componentes/audios/tema1/17.mp3'),
        },
      ],
    },
    dialogo: {
      personajes: [
        {
          nombre: 'Pablo',
          img: require('@/assets/curso/tema1/20.svg'),
        },
        {
          nombre: 'Maria',
          img: require('@/assets/curso/tema1/21.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Pablo',
          textoIng: '*** <em>you talk to Lina?</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema1/22.mp3'),
          palabra: '<em>Did</em>',
        },
        {
          personaje: 'Maria',
          textoIng: '<em>Yes, I did. She</em> *** <em>she was sorry.</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema1/23.mp3'),
          palabra: '<em>said</em>',
        },
        {
          personaje: 'Pablo',
          textoIng:
            '<em>I saw how she</em> *** <em>our daughter in the match!</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema1/24.mp3'),
          palabra: '<em>pushed</em>',
        },
        {
          personaje: 'Maria',
          textoIng:
            '<em>I know but she said she</em> *** <em>sorry, she was really sad to see the scratch in the knee.</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema1/25.mp3'),
          palabra: '<em>was</em>',
        },
        {
          personaje: 'Pablo',
          textoIng: '<em>I hope It</em> *** <em>not happen again!</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema1/26.mp3'),
          palabra: '<em>does</em>',
        },
        {
          personaje: 'Maria',
          textoIng: '<em>Ahh…neither,</em> *** <em>I.</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/tema1/27.mp3'),
          palabra: '<em>do</em>',
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
