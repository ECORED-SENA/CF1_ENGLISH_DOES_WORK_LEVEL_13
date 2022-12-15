<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Relative clauses</em> (Cláusulas relativas)
    
    .row
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/1.svg", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo")(data-aos="flip-up")
        TraduccionAudio.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
    
    separador

    #t_3_1.titulo-segundo.color-primario
      h2 3.1 <em>Defining and non-defining</em> (Definidas e indefinidas)
    
    .row.mb-5
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/2.svg", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")

    .bgr_11.p-5.mb-5
      .row
        .col-lg-5.d-flex.align-items-end
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema3/3.svg", alt="alt")
        .col-lg-7
          .tarjeta.bgr.p-4
            SlyderA(tipo="b")
              div
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/2.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.colr.text-bold.text-center <em>BBC Learning English</em>
                TarjetaAudio.color-acento-contenido.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/3.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                div.px-4
                  p.mb-0.text-bold.colr_2 <em>Callum</em>
                  p <em>Hello. Welcome to 6 Minute Grammar with me, Callum.</em>
                  p.mb-0.text-bold.colr_2 <em>Catherine</em>        
                  p <em>And me, Catherine. Hello.</em>
                  p.mb-0.text-bold.colr_2 <em>Callum</em>         
                  p <em>In this programme, we’re talking about relative clauses.</em>
                  p.mb-0.text-bold.colr_2 <em>Catherine</em>  
                  p <em>Yes, relative clauses add information about the person or thing that you’re talking about. There are two kinds of relative clauses: defining and non-defining.</em>
              div
                TarjetaAudio.color-acento-contenido.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/4.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                div.px-4
                  p.mb-0.text-bold.colr_2 <em>Callum</em>
                  p <em>Let’s begin with defining relative clauses. Here’s Finn with an example:</em>
                  p.mb-0.text-bold.colr_2 <em>Finn</em>        
                  p <em>The man <b>whose phone I found</b> gave me a reward.</em>
                  p.mb-0.text-bold.colr_2 <em>Callum</em>         
                  p <em>Thanks, Finn. The clause <b>whose phone I found</b> is a defining relative clause because it identifies which man Finn is talking about. If I ask the question ‘which man’ - the relative clause answers it: the man <b>whose phone I found.</b></em>
                  p.mb-0.text-bold.colr_2 <em>Catherine</em>  
                  p <em>That’s right. And relative clauses usually start with a relative pronoun. We use <b>who</b> for people, <b>which</b> for things, <b>that</b> for both people and things and whose where a possessive is needed. Let’s hear another defining relative clause:</em>
              div
                TarjetaAudio.color-acento-contenido.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/5.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                div.px-4
                  p.mb-0.text-bold.colr_2 <em>Finn</em>        
                  p <em>I’ve lost the t-shirt <b>that my mother gave me.</b></em>
                  p.mb-0.text-bold.colr_2 <em>Callum</em>         
                  p <em>How careless of you, Finn! Here, the relative clause <b>that my mother gave me</b> tells us which t-shirt Finn is talking about.</em>
                  p.mb-0.text-bold.colr_2 <em>Finn</em>  
                  p <em>I’ve lost the t-shirt that my mother gave me.</em>
              div
                TarjetaAudio.color-acento-contenido.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/6.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                div.px-4
                  p.mb-0.text-bold.colr_2 <em>Callum</em>        
                  p <em>Let’s move on to non-defining relative clauses. Here’s an example:</em>
                  p.mb-0.text-bold.colr_2 <em>Finn</em>         
                  p <em>David’s mother, <b>who was born in Mexico</b>, is my sister’s Spanish teacher.</em>
                  p.mb-0.text-bold.colr_2 <em>Catherine</em>  
                  p <em>OK. The phrase <b>who was born in Mexico</b> is a non-defining relative clause. It doesn't answer the question ‘which mother?’ because David only has one mother! Instead, the relative clause gives us extra information about David’s mother: she was born in Mexico.</em>
              div
                TarjetaAudio.color-acento-contenido.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/7.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                div.px-4
                  p.mb-0.text-bold.colr_2 <em>Callum</em>        
                  p <em>For non-defining clauses, you can’t leave out the pronoun. Also, non-defining relative clauses can't begin with the word <b>that</b>. Use <b>which</b> instead, like this:</em>
                  p.mb-0.text-bold.colr_2 <em>Finn</em>         
                  p <em>Last year, I went to Paris, <b>which</b> is the capital of France.</em>
                  p.mb-0.text-bold.colr_2 <em>Callum</em>  
                  p <em>The clause <b>which is the capital of France</b> - is giving us extra information. We can leave it out and still understand the sentence:</em>
                  p.mb-0.text-bold.colr_2 <em>Finn</em>         
                  p <em>Last year, I went to Paris.</em>
              div
                TarjetaAudio.color-acento-contenido.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/8.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                div.px-4
                  p.mb-0.text-bold.colr_2 <em>Callum</em>        
                  p <em>Thanks, Finn. So that’s defining and non-defining relative clauses. They start with a relative pronoun and give additional information about the person or thing that you’re talking about.</em>
                  p.mb-0.text-bold.colr_2 <em>Catherine</em>         
                  p <em>There’s more about this on our website at bbclearningenglish.com. Join us again for more 6 Minute Grammar.</em>
                  p.mb-0.text-bold.colr_2 <em>All</em>  
                  p <em>Bye.</em>
                  
    .row.mb-5
      .col-lg-4
        TraduccionT.color-acento-botones.pst_8(:dialogo="dialogo3")(data-aos="flip-up")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/4.svg", alt="alt")
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta bgr_2")
          .row(titulo="<em>Who</em>").bgr.tarjeta.p-4
            .col-md-4.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/5.png", alt="alt")
            .col-md-8
              TraduccionAudio.color-acento-botones(:dialogo="dialogo4")(data-aos="flip-up")
          .row(titulo="<em>Which</em>").bgr.tarjeta.p-4
            .col-md-4.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/6.png", alt="alt")
            .col-md-8
              TraduccionAudio.color-acento-botones(:dialogo="dialogo5")(data-aos="flip-up")
          .row(titulo="<em>That</em>").bgr.tarjeta.p-4
            .col-md-4.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/7.png", alt="alt")
            .col-md-8
              TraduccionAudio.color-acento-botones(:dialogo="dialogo6")(data-aos="flip-up")
          .row(titulo="<em>Whose</em>").bgr.tarjeta.p-4
            .col-md-4.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/8.png", alt="alt")
            .col-md-8
              TraduccionAudio.color-acento-botones(:dialogo="dialogo7")(data-aos="flip-up")
          .row(titulo="<em>Whom</em>").bgr.tarjeta.p-4
            .col-md-4.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/9.png", alt="alt")
            .col-md-8
              TraduccionAudio.color-acento-botones(:dialogo="dialogo8")(data-aos="flip-up")
          
    .bgr_12.p-5.mb-5
      .row.justify-content-center
        .col-lg-7.position-relative
          p.mb-5.colr.text-center <em>Next, a dialogue between people that use relative clauses is presented.</em>
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema3/10.svg", alt="alt")
          .bgr_13.px-5.pb-5
            .bgr_14.p-4
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat")(data-aos="flip-up") 
          img.pst_6(src="@/assets/curso/tema3/11.svg", alt="alt")
          img.pst_7(src="@/assets/curso/tema3/12.svg", alt="alt")
    
    p.colr.text-center.mb-5 <em>Now it's your turn to use the relative clauses. Complete the following dialogue. </em>
      span.colr_1 / Ahora es su turno de usar las cláusulas relativas. Complete el siguiente diálogo.  

    Dialogo.color-acento-contenido.mb-5.mt-5(:dialogo="dialogo9")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Dialogue: I was mad </em>/ Diálogo “Yo estaba bravo” - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
       
    separador

    #t_3_2.titulo-segundo.color-primario
      h2 3.2 <em>Nominal and adverbia</em> (Nominales y adverbiales)

    TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo10")(data-aos="flip-up")

    .row.mb-5
      .col-lg-4
        TraduccionAudio.color-acento-botones.pst_8(:dialogo="dialogo11")(data-aos="flip-up")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/15.png", alt="alt")
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta bgr_2")
          .row(titulo="<em>Nominal clauses may begin with interrogatives</em>").bgr.tarjeta.p-4
            .col-md-4.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/16.png", alt="alt")
            .col-md-8
              .row.mb-3
                .col-lg-2
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema3/25.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-10
                  p.colr_2 <em>Who, whom, what, which, whoever, whomever, whatever, when, where, how, why</em>
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/20.svg", alt="alt")
          .row(titulo="<em>Nominal clause as direct object in the sentence</em>").bgr.tarjeta.p-4
            .col-md-4.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/17.png", alt="alt")
            .col-md-8
              .row.mb-3
                .col-lg-2
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema3/26.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-10
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/21.svg", alt="alt")
          .row(titulo="<em>Nominal clause as indirect object in the sentence</em>").bgr.tarjeta.p-4
            .col-md-4.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/18.png", alt="alt")
            .col-md-8
              .row.mb-3
                .col-lg-2
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema3/27.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-10
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/22.svg", alt="alt")
          .row(titulo="<em>Nominal clause as retained object in sentence</em>").bgr.tarjeta.p-4
            .col-md-4.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/19.png", alt="alt")
            .col-md-8
              .row.mb-3
                .col-lg-2
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema3/28.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-10
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/23.svg", alt="alt")
    
    .row.mb-5
      .col-lg-8
        TraduccionAudio.color-acento-botones(:dialogo="dialogo12")(data-aos="flip-up")
        TraduccionAudio.color-acento-botones(:dialogo="dialogo13")(data-aos="flip-up")
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/24.svg", alt="alt")
    
    p.mb-5.text-center <em>Some examples of adverbial clauses:</em>

    .row
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/25.png", alt="alt")
      .col-lg-8
        LineaTiempoD.color-secundario
          div(numero="1" titulo="<em>Adverbial clause of manner</em>") 
            div.tarjeta.bgr_15.p-4
              p.colr <em>It describes how the action described in the sentence’s main clause takes place:</em>
              p.colr <em>She started to walk <b>as she had practiced in the mirror.</b></em>
              TarjetaAudio.color-acento-contenido(
                :audio="require('@/assets/componentes/audios/tema3/31.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          div(numero="2" titulo="<em>Adverbial clause of place</em>") 
            div.tarjeta.bgr_15.p-4
              p.colr <em>It describes where the action in a sentence’s main clause is done. See the example:</em>
              p.colr <em>My neighbor told me another fight broke out <b>where he jogs every morning.</b></em>
              TarjetaAudio.color-acento-contenido(
                :audio="require('@/assets/componentes/audios/tema3/32.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          div(numero="3" titulo="<em>Adverbial clause of condition</em>") 
            div.tarjeta.bgr_15.p-4
              p.colr <em>It talks about the conditions related to the verb, adverb, or adjective in the sentence’s main clause. See the following example: </em>
              p.colr <em>We’ll be sitting in class <b>until the teacher tells us to leave.</b></em>
              TarjetaAudio.color-acento-contenido(
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          div(numero="4" titulo="<em>Adverbial clause of reason</em>") 
            div.tarjeta.bgr_15.p-4
              p.colr <em>It tells us the reason for the action in the sentence, there could be words such as because, since, etc.</em>
              p.colr <em>We adopted these two cats <b>because</b> they are brothers.</em>
              TarjetaAudio.color-acento-contenido(
                :audio="require('@/assets/componentes/audios/tema3/33.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          div(numero="5" titulo="<em>Adverbial clause of time</em>") 
            div.tarjeta.bgr_15.p-4
              p.colr <em>It communicates when the action in a sentence takes place:</em>
              p.colr <em><b>Before</b> she got home, she ordered a pizza.</em>
              TarjetaAudio.color-acento-contenido(
                :audio="require('@/assets/componentes/audios/tema3/34.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          div(numero="6" titulo="<em>Adverbial clauses of comparison</em>") 
            div.tarjeta.bgr_15.p-4
              p.colr <em>They are clauses that communicate how the subject of the dependent clause compares to the subject in the main clause. Here is the example:</em>
              p.colr <em>My wedding vows <b>went as well as</b> I’d hoped.</em>
              TarjetaAudio.color-acento-contenido(
                :audio="require('@/assets/componentes/audios/tema3/35.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


    
      

                


</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema3',
  components: {
    TraduccionT,
    TraduccionAudio,
    TraduccionChat,
  },
  data: () => ({
    dialogo: [
      {
        textoIng:
          '<em>Relative clauses in English are those phrases that allow us to join two sentences or add more information about something we are talking about. In most cases, they are used to define, identify or classify an object or a person; and in order to use them, we must know the relative pronouns. Relative clauses belong to one of two types: <b>defining relative clauses</b> and <b>non-defining relative clauses.</b></em>',
        textoEsp:
          'Las cláusulas relativas en inglés son aquellas frases que nos permiten unir dos oraciones o añadir más información sobre algo de lo que estamos hablando. En la mayoría de los casos, se utilizan para definir, identificar o clasificar un objeto o una persona; y para poder usarlas, debemos conocer los pronombres relativos. Las cláusulas relativas pertenecen a uno de estos dos tipos: cláusulas relativas definidas y cláusulas relativas no definidas.',
      },
    ],
    dialogo1: [
      {
        textoIng:
          '<em><b>The defined and the indefinite,</b> in the first ones, the complement is necessary, the second phrase that is articulated, or the explanation.<br><br><b>Definition of relative clause (specific subordinate clause):</b> this type of sentences gives necessary information to understand what we are referring to and does not have commas. </em>',
        textoEsp:
          'Las definidas y las indefinidas: en las primeras, es necesario el complemento, la segunda frase que se articula o la explicación.<br><br>Defining relative clause (oración subordinada especificativa):  este tipo de oraciones dan información necesaria para entender a qué nos estamos refiriendo y no llevan comas.',
        audio: require('@/assets/componentes/audios/tema3/1.mp3'),
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>A <i>defining relative clause</i> usually comes immediately after the noun it describes. We usually use a relative pronoun (<b>who, that, which, whose, and whom</b>) to introduce a defining relative clause; and we use <i>non-defining relative clauses</i> to give extra information about the person or thing, it isn’t necessary information, we don’t need it to understand who or what is being referred to. We always use a <i>relative pronoun</i> (<b>who, which, whose, or whom</b>) to introduce a non-defining relative clause.<br><br>Now, you are invited to listen to the following <b>BBC Learning English</b> Podcast where the grammatical concepts of <i>defining and non-defining relative clauses</i> that are used to give information about something or someone will be explained.</em>',
        textoEsp:
          'Una cláusula relativa definitoria generalmente viene inmediatamente después del sustantivo que describe. Por lo general, usamos un pronombre relativo (who, that, which, whose y whom) para introducir una cláusula relativa definitoria; y usamos cláusulas relativas no definitorias para brindar información adicional sobre la persona o cosa, no es información necesaria, no la necesitamos para entender a quién o a qué se refiere. Siempre usamos un pronombre relativo (who, which, whose o whom) para introducir una cláusula relativa no definitoria.<br><br>Ahora, le invitamos a escuchar el podcast de la BBC Learning English, donde se explicarán los conceptos gramaticales de las cláusulas relativas definidas y no definidas, que son utilizadas para dar información de algo o de alguien. ',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>The relative pronoun is the subject/object of the relative clause, so we do not repeat the subject/object. Thus, we use relative pronouns to introduce relative clauses. Relative clauses tell us more about people and things. Let’s see some examples:</em>',
        textoEsp: '',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>This pronoun is used only to refer to people. It can act as the subject or the object of the sentence.<br><br>Example:<br><br><i>The woman who works at the store is very efficient.</i></em>',
        textoEsp:
          'Este pronombre se usa únicamente para referirse a personas. Puede ejercer la función de sujeto o de objeto de la oración.<br><br>Ejemplo:<br><br>La mujer que trabaja en mi oficina es muy eficiente.',
        audio: require('@/assets/componentes/audios/tema3/9.mp3'),
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em>Contrary to who, this pronoun only works for things and animals. It can also be the subject or the object of the sentence.<br><br>Example:<br><br><i>The book which I read last week is very interesting.</i></em>',
        textoEsp:
          'Al contrario de who, este pronombre solo sirve para cosas y animales. También puede ser el sujeto o el objeto de la oración.<br><br>Ejemplo:<br><br>El libro que leí la semana pasada es muy interesante.',
        audio: require('@/assets/componentes/audios/tema3/10.mp3'),
      },
    ],
    dialogo6: [
      {
        textoIng:
          '<em>This is a pronoun that can be applied both to refer to people and things. Therefore, you can use it to replace both who and which if the context allows it.<br><br>Example:<br><br><i>The woman that works in the supermarket is very efficient.</i></em>',
        textoEsp:
          'Este es un pronombre que puede aplicarse tanto para referirse a personas como a cosas. Por lo tanto, podrá usarlo para sustituir tanto who como which si el contexto lo permite.<br><br>Ejemplo:<br><br>La mujer que trabaja en el supermercado es muy eficiente.',
        audio: require('@/assets/componentes/audios/tema3/11.mp3'),
      },
    ],
    dialogo7: [
      {
        textoIng:
          '<em>It refers to possession, it means something belongs to someone.<br><br>Example:<br><br><i>Yesterday, I met the girl whose sister is a teacher.</i></em>',
        textoEsp:
          'Se refiere a posesión, significa que algo le pertenece a alguien.<br><br>Ejemplo:<br><br>Ayer, conocí a una chica cuya hermana es profesora.',
        audio: require('@/assets/componentes/audios/tema3/12.mp3'),
      },
    ],
    dialogo8: [
      {
        textoIng:
          '<em>The pronoun whom replaces people when they are not the subject of the sentence but are the ones who receive it.<br><br>Example:<br><br><i>To whom it may concern.</i></em>',
        textoEsp:
          'El pronombre <em>whom</em> sustituye a personas cuando no son sujeto de la oración sino que son las que la reciben. Es decir:<br><br>Ejemplo:<br><br>A quién corresponda.',
        audio: require('@/assets/componentes/audios/tema3/13.mp3'),
      },
    ],
    traduccionChat: {
      personajes: [
        {
          nombre: 'Eliana:',
        },
        {
          nombre: 'Tory',
        },
      ],
      dialogo: [
        {
          personaje: 'Eliana:',
          textoIng:
            '<em>Peter told me that he loves you. Do you think it’s true?</em>',
          textoEsp: 'Peter me dijo que te ama. ¿Crees que es verdad?',
          audio: require('@/assets/componentes/audios/tema3/14.mp3'),
        },
        {
          personaje: 'Tory',
          textoIng: '<em>I don’t believe it. What he said was a lie.</em>',
          textoEsp: 'No creo eso, creo que lo que dijo fue una mentira.',
          audio: require('@/assets/componentes/audios/tema3/15.mp3'),
        },
        {
          personaje: 'Eliana:',
          textoIng: '<em>How can you say that?</em>',
          textoEsp: '¿Cómo puedes decir eso?',
          audio: require('@/assets/componentes/audios/tema3/16.mp3'),
        },
        {
          personaje: 'Tory',
          textoIng:
            '<em>Because he never admits it to me. Who he loves remains a secret.</em>',
          textoEsp:
            'Porque nunca me lo admite. A quien ama sigue siendo un secreto.',
          audio: require('@/assets/componentes/audios/tema3/17.mp3'),
        },
        {
          personaje: 'Eliana:',
          textoIng: '<em>He must be crazy.</em>',
          textoEsp: 'Debe estar loco.',
          audio: require('@/assets/componentes/audios/tema3/18.mp3'),
        },
      ],
    },
    dialogo9: {
      personajes: [
        {
          nombre: 'Linn',
          img: require('@/assets/curso/tema3/13.svg'),
        },
        {
          nombre: 'Jack',
          img: require('@/assets/curso/tema3/14.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Linn',
          textoIng: '<em>Jack! Welcome back!</em> *** <em>was the trip?</em>',
          textoEsp: '¡Jack! ¡Bienvenido! ¿Cómo estuvo el viaje?',
          audio: require('@/assets/componentes/audios/tema3/19.mp3'),
          palabra: '<em>How</em>',
        },
        {
          personaje: 'Jack',
          textoIng:
            ' <em>I am angry and tired. I was mad at the man</em> *** <em>sat next to me on the plane! He talked during the whole trip!</em>',
          textoEsp:
            'Estoy enojado y cansado. ¡Estaba enojado con el hombre que se sentó a mi lado en el avión! ¡Habló durante todo el viaje!',
          audio: require('@/assets/componentes/audios/tema3/20.mp3'),
          palabra: '<em>who</em>',
        },
        {
          personaje: 'Linn',
          textoIng: '<em>Oh, really?</em> *** <em>did he talk about?</em>',
          textoEsp: '¿En serio?¿De qué hablaba?',
          audio: require('@/assets/componentes/audios/tema3/21.mp3'),
          palabra: '<em>What</em>',
        },
        {
          personaje: 'Jack',
          textoIng:
            '<em>It was unbelievable! He was talking about my friend Eliana the whole time. He was in love with my friend</em> *** <em>he met last year, but they broke up a few months ago.</em>',
          textoEsp:
            '¡Fue increíble! Estuvo hablando de mi amiga Eliana todo el tiempo. Él estaba enamorado de mi amiga, a quien conoció el año pasado, pero se separaron hace unos meses.',
          audio: require('@/assets/componentes/audios/tema3/22.mp3'),
          palabra: '<em>whom</em>',
        },
        {
          personaje: 'Linn',
          textoIng: '<em>Oh!</em> *** <em>a small world.</em>',
          textoEsp: '¡Qué pequeño es el mundo!',
          audio: require('@/assets/componentes/audios/tema3/23.mp3'),
          palabra: '<em>What</em>',
        },
      ],
    },
    dialogo10: [
      {
        textoIng:
          '<em>Nominal clauses can look very similar to relative clauses, but they are different and can be easy to identify. We must remember that <i>a nominal clause</i> is <b>the noun of the sentence,</b> while a <i>relative clause</i> will <b>depend on the noun of the sentence.</b> The grammatical structure of each of them is presented below.</em>',
        textoEsp:
          'Las cláusulas nominales pueden parecer muy similares a las cláusulas relativas, pero son diferentes y pueden ser fáciles de identificar. Debemos recordar que una cláusula nominal es el sustantivo de la oración, mientras que una cláusula relativa dependerá del sustantivo de la oración. A continuación, se presenta la estructura gramatical de cada una de ellas.',
      },
    ],
    dialogo11: [
      {
        textoIng:
          '<em><b>Nominal clauses:</b> a nominal clause names a person, place, thing, or idea.  A nominal clause may function in a sentence as any of the following : subject, preposition, subjective complement, direct object, appositive, indirect object, object of, retained object.<br><br>Some examples for nominal clauses:</em>',
        textoEsp: '',
        audio: require('@/assets/componentes/audios/tema3/24.mp3'),
      },
    ],
    dialogo12: [
      {
        textoIng:
          '<em><b>An adverbial clause:</b> it is a dependent clause that modifies a verb, adjective, or adverb in its sentence. In other words, an adverbial clause is a clause that does the same thing as an adverb. It is used to give more information and/or context to a sentence. <br><br>Examples:<br><br><i>●	She cleans the house weekly.<br>●	She cleans the house before she goes to work every Sunday.</i></em>',
        textoEsp:
          'Una cláusula adverbial: es una cláusula dependiente que modifica un verbo, adjetivo o adverbio en su oración. En otras palabras, una cláusula adverbial es una cláusula que hace lo mismo que un adverbio. Se utiliza para dar más información y/o contexto a una oración.<br><br>Ejemplos:<br><br>●	Ella limpia la casa semanalmente.<br>●	Ella limpia la casa antes de ir a trabajar todos los domingos.',
        audio: require('@/assets/componentes/audios/tema3/29.mp3'),
      },
    ],
    dialogo13: [
      {
        textoIng:
          '<em>As it was seen in these examples, adverbial clauses can appear at any place in a sentence. Every part of speech, as well as every kind of phrase and clause, has a specific purpose. When you need to write a succinct sentence, use an adverb; when you need more information, use an adverbial clause. </em>',
        textoEsp:
          'Como se vio en estos ejemplos, las cláusulas adverbiales pueden aparecer en cualquier lugar de una oración. Cada parte del discurso, así como cada tipo de frase y cláusula, tiene un propósito específico. Cuando necesite escribir una oración breve, use un adverbio; cuando necesite más información, use una cláusula adverbial.',
        audio: require('@/assets/componentes/audios/tema3/30.mp3'),
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
