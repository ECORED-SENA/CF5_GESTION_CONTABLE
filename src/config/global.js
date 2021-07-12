export default {
  global: {
    componenteFormativo: 'Fundamentos de matemáticas financieras',
    descripcionCurso:
      'En este componente formativo se abordan temas relacionados con la fundamentación y aplicación de las matemáticas financieras en el sector productivo, se analiza la clasificación de las tasas de interés, el valor del dinero en el tiempo, equivalencia de tasas, tablas de amortización y alternativas de inversión como lo son el Valor Presente Neto (VPN) y Tasa Interna de Retorno (TIR), así mismo, la Norma Internacional de Información Financiera (NIIF) 13 – Medición del Valor Razonable , teniendo en cuenta la importancia de su análisis y aplicación en el registro de los hechos económicos bajo los estándares internacionales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Matemáticas financieras',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tasas de interés',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tasa nominal, periódica y efectiva',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tablas de amortización',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Alternativas de inversión',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Norma internacional de información financiera (NIIF) 13 - medición del valor razonable',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública (CTCP) (s.f). Norma Internacional de Información Financiera 13 Medición del Valor Razonable.',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534363802-6328',
    },
    {
      referencia:
        'Decreto 2420 de diciembre 14 de 2015. Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera.',
    },
    {
      referencia:
        'García, A. (1998). Evaluación de proyectos de inversión. McGraw-Hill.',
    },
    {
      referencia:
        'Kozikowski, Z. (2007). Matemáticas financieras: el valor del dinero en el tiempo. McGraw-Hill Interamericana.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=514',
    },
    {
      referencia:
        'Meza, J. J. (2017). Matemáticas financieras aplicadas (6.a ed.). Ecoe Ediciones.',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2017/06/Matematicas-Financieras-Aplicadas-6ta-Edici%C3%B3n.pdf',
    },
    {
      referencia:
        'Vélez, I. (2003). Decisiones empresariales bajo riesgo e incertidumbre. Grupo Editorial Patria.',
    },
    {
      referencia:
        'Vidaurri, H (2017). Matemáticas Financieras. Cengage Learning.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3788',
    },
    {
      referencia:
        'Tello, L. B. (2019). Herramientas financieras y valoración de activos y pasivos financieros bajo NIIF. Editorial Universidad Icesi.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/130247?page=279',
    },
  ],
  glosario: [
    {
      termino: 'Interés',
      significado:
        'es el valor que se cancela por utilizar un capital durante un periodo determinado, teniendo en cuenta las condiciones acordadas entre deudor y acreedor.',
    },
    {
      termino: 'Interés compuesto',
      significado:
        'es aquel que al final del período capitaliza los intereses causados en el período inmediatamente anterior.',
    },
    {
      termino: 'Interés simple',
      significado:
        'se llama interés simple aquél en el cual los intereses devengados en un período no ganan intereses en los períodos siguientes, independientemente de que se paguen o no. Únicamente sobre el capital principal se liquidan los intereses sin tener en cuenta los intereses precedentes causados.',
    },
    {
      termino: 'Inversión',
      significado:
        'es la asignación de recursos en el presente con el fin de obtener unos beneficios, en el futuro (Vélez, 1998).',
    },
    {
      termino: 'Matemáticas financieras',
      significado:
        'es el campo de las matemáticas que aplica un ente económico para el análisis y valoración de los mercados financieros y el valor del dinero en el tiempo, mediante la aplicación de cálculos aritméticos.',
    },
    {
      termino: 'Tabla de amortización',
      significado:
        'es un cuadro de pagos que refleja la cuota acordada con el pago, que se compone de abono a capital e intereses durante un periodo y tasa determinada.',
    },
    {
      termino: 'Tasa de interés',
      significado:
        'es la proporción dada normalmente en porcentaje, que se usa para determinar el costo del uso del dinero en un tiempo determinado.',
    },
    {
      termino: 'Tasa efectiva',
      significado:
        'se paga o se recibe por un préstamo o un ahorro cuando no se retiran los intereses, se asimila a un interés compuesto. Esta tasa es una medida que permite comparar las tasas de interés nominales anuales bajo diferentes modalidades de pago, ya que generalmente se parte de una tasa efectiva para establecer la tasa nominal que se pagará o recibirá por un préstamo o un ahorro.',
    },
    {
      termino: 'Tasa interna de retorno (TIR)',
      significado:
        'es un indicador de rentabilidad que se utiliza en su mayoría para evaluar proyectos de inversión.',
    },
    {
      termino: 'Tasa nominal',
      significado:
        'es aquella que se paga por un préstamo o una cuenta de ahorros y no se suma al capital, es expresada en términos anuales con una frecuencia de tiempo de pago.',
    },
    {
      termino: 'Valor del dinero en el tiempo',
      significado:
        'el dinero es un bien, cuya principal característica es que se puede intercambiar libre y universalmente por otros bienes o servicios.',
    },
    {
      termino: 'Valor Futuro',
      significado:
        'describe el crecimiento de un capital, o inversión, dada una tasa de interés y un tiempo.',
    },
    {
      termino: 'Valor presente o actual',
      significado:
        'describe los flujos de dinero futuros, que a una tasa de interés de descuento y periodos dados representa valores presentes.',
    },
    {
      termino: 'Valor presente Neto',
      significado:
        'es una cifra monetaria que resulta de comparar el valor presente de los ingresos con el valor presente de los ingresos. El VPN es una alternativa de inversión utilizada frecuentemente para medir el desempeño de la inversión.',
    },
    {
      termino: 'Valor razonable',
      significado: 'el valor razonable es una medición basada en el mercado.',
    },
  ],
  complementario: [
    {
      texto:
        'Meza, J. J. (2017). Matemáticas financieras aplicadas (6.a ed.). Ecoe Ediciones.',
      tipo: 'PDF',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2017/06/Matematicas-Financieras-Aplicadas-6ta-Edici%C3%B3n.pdf',
    },
    {
      texto:
        'Tello, L. B. (2019). Herramientas financieras y valoración de activos y pasivos financieros bajo NIIF. Santiago de Cali: Editorial Universidad Icesi.',
      tipo: 'Biblioteca SENA',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/130247?page=279',
    },
    {
      texto: 'Normas Internacionales de Información Financiera',
      tipo: 'Página web',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534363802-6328',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Maria Carolina Tamayo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Cardenas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jose Tang',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Vasquez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
