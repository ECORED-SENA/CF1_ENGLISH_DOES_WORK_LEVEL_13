export default {
  global: {
    componenteFormativo:
      '<em>Collecting, absorbing, and interpreting information</em><br> Recopilando, absorbiendo e interpretando información',
    descripcionCurso:
      'Este componente tendrá como objetivo extraer ideas principales de textos procedentes de diversas fuentes y medios, identificar la intencionalidad de las ideas extraídas utilizando los marcadores discursivos más recurrentes de los textos presentados, dar información detallada de diversas fuentes usando un rango amplio de vocabulario a partir de textos políticos o económicos; y plantear ideas a partir de problemáticas globales utilizando cláusulas adverbiales. Lo anterior se trabajará en torno a los mismos temas: economía, doctrinas políticas, fuentes y medios de comunicación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flot5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/flot6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/flot7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          '<em>Looking back at grammar tenses</em> (Recordando los tiempos gramaticales)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Simple tenses</em> (Tiempos simples)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Continuous tenses</em> (Tiempos continuos)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<em>Perfect tenses</em> (Tiempos perfectos)',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          '<em>Subordinating conjunctions of time</em> (Conjunciones subordinadas de tiempo)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Relative clauses (Cláusulas relativas)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              '<em>Defining and non-defining</em> (Definidas e indefinidas)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>Nominal and adverbial</em> (Nominales y adverbiales)',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          '<em>Reading techniques: skimming and scanning</em> (Técnicas de lectura: “<em>skimming</em>” y “<em>scanning</em>”)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          '<em>Pronunciation of unstressed vowels and vowel reduction</em> (Pronunciación de vocales no acentuadas y reducción de vocales)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<em>Looking back at grammar tenses</em>',
      referencia:
        '<em>Yaccob, N., y Yunus, M. (2019). Language Games in Teaching and Learning English Grammar: A Literature Review. Arab World English Journal, 10(1), p. 209-217.</em>',
      tipo: 'Artículo',
      link: 'https://eric.ed.gov/?id=EJ1287782',
    },
    {
      tema: '<em>Looking back at grammar tenses</em>',
      referencia:
        '<em>Kusumawardani, S. y Mardiyani, E. (2018). The correlation between English grammar competence and speaking fluency. PROJECT (Professional Journal of English Education), 1(6), p. 724-733.</em>',
      tipo: 'Artículo',
      descarga: '/downloads/anexo1.pdf',
    },
    {
      tema: '<em>Reading techniques: skimming and scanning </em>',
      referencia:
        '<em>Yusuf, Q., Yusuf, Y., Yusuf, B. y Nadya, A. (2017). Skimming and scanning techniques to assist EFL students in understanding English reading texts. Indonesian Research Journal in Education [IRJE], 1(1), p. 43-57.</em>',
      tipo: 'Artículo',
      descarga: '/downloads/anexo2.pdf',
    },
    {
      tema: '<em>Pronunciation of unstressed vowels and vowel reduction</em>',
      referencia:
        '<em>Crosswhite, K. (2004). Vowel reduction. En B. Hayes, R. Kirchner y D. Steriade (Eds.), Phonetically Based Phonology (p. 191-231). Cambridge University Press. </em>',
      tipo: 'Libro',
      link:
        'https://www.cambridge.org/core/books/abs/phonetically-based-phonology/vowel-reduction/6F4FE8CA079429E2B957C88FFB0AA3FE',
    },
  ],
  glosario: [
    {
      termino: '<em>Auxiliary verbs</em>',
      significado:
        'los verbos auxiliares, se usan en inglés para cambiar el tiempo, la voz o el modo de otro verbo. Por ejemplo, los verbos <b><em>have</em></b> y <b><em>do</em></b>. ',
    },
    {
      termino: '<em>Dynamic (action) verbs</em>',
      significado:
        'son aquellas acciones que se ven, es decir, que son externas, por ejemplo: nadar, jugar, trabajar, hablar. No son sentimientos porque no se ve la forma de sentir, se muestra a través de una acción, ese sería el verbo dinámico.',
    },
    {
      termino: '<em>Phrasal verbs</em>',
      significado:
        'son verbos que pueden cambiar de significado dependiendo de la preposición o partícula que se le agregue. Por ejemplo, el verbo <b><em>get</em></b> significa, en español, obtener, pero cuando se le agrega la partícula <b><em>by</em></b> significa vivir de o arreglárselas.',
    },
    {
      termino: '<em>Subordinating conjunctions</em>',
      significado:
        'las <b>conjunciones subordinantes</b> unen frases que no son de la misma categoría gramatical o sintáctica. Estas conjunciones se utilizan para unir una oración principal con una subordinada, ya que esta última no tiene sentido por sí sola.',
    },
    {
      termino: '<em>Verbs</em>',
      significado:
        'acciones que pueden ayudar a describir la actividad que realiza el sujeto, deben ser conjugados y deben trabajar con un tiempo verbal; pueden estar involucrados en oraciones negativas, positivas e interrogativas, pero no hay oración sin un sujeto y un verbo.',
    },
  ],
  referencias: [
    {
      referencia:
        '<em>Fauzi, I. (2018). The effectiveness of skimming and scanning strategies in improving comprehension and reading speed rates for the students of English study program. Register Journal, 11(1), p. 101-120.</em>',
      link: 'http://dx.doi.org/10.18326/rgt.v11i1.101-120',
    },
    {
      referencia:
        '<em>Hashemi, L. y Murphy, R. (2004). English Grammar in Use Supplementary Exercises with Answers. Cambridge University Press.</em>',
    },
    {
      referencia:
        '<em>Hewings, M. (2013). Advanced grammar in use with answers: A self-study reference and practice book for advanced learners of English. Cambridge University Press.</em>',
    },
    {
      referencia:
        '<em>Minh, N. (2015). The essential roles of Skimming and Scanning Techniques in teaching reading comprehension. UEH University</em>',
      link: 'http://nnkt.ueh.edu.vn/wp-content/uploads/2015/07/20.pdf',
    },
    {
      referencia: '<em>Murphy, R. (2008). Grammar in use. Cambridge.</em>',
    },
    {
      referencia:
        '<em>Murphy, R., Viney, B. y Craven, M. (2004). English Grammar In Use with Answers and CD ROM: A Self-study Reference and Practice Book for Intermediate Students of English (Vol. 1). Cambridge University Press.</em>',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edith Grande Triviño',
        cargo: 'Experta temática',
        centro:
          'CENIGRAF - Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez Manchego',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
