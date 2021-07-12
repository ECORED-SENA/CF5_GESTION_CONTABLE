<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Matemáticas financieras
    p El objetivo del presente componente es el análisis de la fundamentación y aplicación de las matemáticas financieras; para lo cual se fortalecerán las habilidades y competencias en el manejo y aplicación de tasas de interés, tablas de amortización, herramientas de Excel y criterios del valor razonable. Logrando de esta manera adquirir destrezas en el área contable y financiera para su desempeño en el ámbito empresarial.
    separador.mb-5
    #t_1_1
    .titulo-segundo
      h2 1.1 Concepto
    .row.align-items-end
      .col-lg-7.mb-4.mb-lg-0
        p Es el campo de las matemáticas que aplica un ente económico para el análisis, la valoración de los mercados financieros y el valor del dinero en el tiempo, mediante la aplicación de cálculos aritméticos. 
        p Es una herramienta muy importante en el ámbito empresarial, la cual ha tomado fuerza con la implementación de las Normas Internacionales de Información Financiera. Su finalidad es contribuir en la toma de decisiones de forma útil, transparente y confiable sobre los proyectos, inversiones, rentabilidad y amortización de deudas.
        .cajon.color-primario.p-4
          p.mb-0 De acuerdo con la convergencia de Normas Internacionales de Información Financiera, mediante la expedición de la Ley 1314 de 2009, se presentan cambios en la valoración de los instrumentos financieros, donde se tiene en cuenta los criterios de medición de costo amortizado y valor razonable, utilizando el método de interés efectivo.
      .col-lg-5
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img2.svg', alt='Texto que describa la imagen')
    separador.mb-5
    #t_1_2
    .titulo-segundo
      h2 1.2 Tasas de interés
    p.mb-5 Antes de abordar el tipo de tasas de interés, los invito a analizar los conceptos básicos con el fin de avanzar significativamente en las temáticas que le permitan desarrollar esta unidad.
    figure.mb-5(data-aos="fade-up-right")
      img(src='@/assets/curso/img3.svg', style="width: 1100px").m-auto
    .h3 Interés simple
    p Es el interés que se genera en un periodo determinado. Se calcula sobre el capital inicial y no es capitalizable; es decir, no se acumula con el capital para originar nuevos intereses.
    .row.p-4.mx-0.align-items-center(style="background-color: #FAF4EE")
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img4.svg')
      .col-lg-7
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img5.svg', style="width:100px")
          .col
            p.mb-0 #[b Ejemplo 1:] Carolina invierte hoy $12.000.000 en una cuenta que paga el 9% simple anual, ¿qué cantidad podrá retirar dentro de 3 años?
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Para desarrollar el ejercicio, es importante tener en cuenta los datos suministrados; por ello, no olvide analizar la información y observar que se tiene la necesidad de hallar el valor futuro, mediante el interés simple. Recordemos que este no capitaliza como sucede en el interés compuesto.
        p La fórmula que debe usarse es:
        figure.mb-4
          img(src='@/assets/curso/img6.svg', style="width:500px").m-auto
        .cajon.color-primario.p-4.mb-4
          p.mb-0 #[b Respuesta:] Carolina con una inversión inicial de $12.000.000 recibirá $15.240.000, dentro de tres años aplicando interés simple.
    .row.p-4.mx-0.align-items-center(style="background-color: #EDEDF0").mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img7.svg')
      .col-lg-7
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img5.svg', style="width:100px")
          .col
            p.mb-0 #[b Ejemplo 2:] Andrés recibirá en 10 meses $35.000.000, correspondientes a una inversión realizada. Si la tasa de interés que le están pagando es del 2,5% mensual, ¿Cuál es el valor inicial de la inversión, aplicando el tipo de interés simple?
        .cajon.color-primario.p-4.mb-4
          p.mb-0 De acuerdo con el análisis, se observa que se debe determinar el valor presente o actual de la inversión realizada, utilizando el tipo de interés compuesto; por lo tanto, se usará la siguiente fórmula: 
        p La fórmula que debe usarse es:
        figure.mb-4
          img(src='@/assets/curso/img8.svg', style="width:500px").m-auto
        .cajon.color-primario.p-4.mb-4
          p.mb-0 #[b Respuesta:] Para obtener un monto de $35.000.000 durante 10 meses a la tasa del 2,5% de invertir $28.000.000.
    .h3 Interés compuesto
    p Interés generado en un periodo de tiempo, con la característica especial de ser capitalizable; es decir, se acumula, con el capital, presentando un interés mayor al final del periodo.
    .row.mx-0.p-4.align-items-center(style="background-color: #EAF1F7")
      .col-lg-7.mb-4.mb-lg-0
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img5.svg', style="width:100px")
          .col
            p.mb-0 #[b Ejemplo 1:] Carolina invierte hoy $12.000.000 en una cuenta que paga el 9% compuesto anual, ¿qué cantidad podrá retirar dentro de 3 años?
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 El enunciado anterior refleja la necesidad de hallar el valor futuro, teniendo en cuenta que se conoce el valor inicial de la inversión y se desea saber el valor final dentro de 3 años. Recuerde que la tasa de interés se manejará en decimales para efectos de su cálculo.
        p La fórmula que debe usarse es:
        figure.mb-4
          img(src='@/assets/curso/img10.svg', style="width:500px").m-auto
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 #[b Respuesta:] Carolina con una inversión inicial de $12.000.000 recibirá $15.540.348, dentro de tres años aplicando interés compuesto.
      .col-lg-5
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img9.svg')
      p Así mismo se puede obtener el Valor Futuro (VF), utilizando la fórmula financiera de Excel llamada VF, la cual se presenta a continuación:
      .row.align-items-start
        .col-lg-6.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img11.svg')
        .col-lg-6
          p #[b VF(tasa;nper;pago;(va);tipo)], teniendo en cuenta que:
          ul.lista-ul
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Tasa]: es la tasa de interés del período acordado.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Nper]: es el número total de períodos.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Pago]: es el pago efectuado en cada período.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Va]: es el valor actual o suma total del valor de una serie de pagos.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Tipo]: es un valor lógico. Se registra “0” para una tasa vencida y “1” para tasa anticipada.
          .cajon.color-acento-contenido.p-4
            p.mb-0 Es importante señalar que, para realizar los cálculos en Excel, debe estar registrada información, con el fin de ser tomada de cada una de las celdas y de esta manera refleje la formulación para su respectiva interpretación.
    .row.mx-0.p-4.align-items-center(style="background-color: #FFFFFF")
      .col-lg-7.mb-4.mb-lg-0
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img5.svg', style="width:100px")
          .col
            p.mb-0 #[b Ejemplo 2:] Andrés recibirá en 10 meses $35.000.000, correspondientes a una inversión realizada. Si la tasa de interés que le están pagando es del 2,5% mensual, ¿Cuál es el valor inicial de la inversión, aplicando el tipo de interés compuesto? 
        .cajon.color-primario.p-4.mb-4
          p.mb-0 De acuerdo con el análisis, se observa que se debe determinar el valor presente o actual de la inversión realizada, utilizando el tipo de interés compuesto; por lo tanto, se usará la siguiente fórmula:
        figure.mb-4
          img(src='@/assets/curso/img13.svg', style="width:500px").m-auto
        .cajon.color-primario.p-4.mb-4
          p.mb-0 #[b Respuesta:] para obtener un monto de $35.000.000 durante 10 meses, a la tasa del 2,5%, debe invertir $27.341.944,06.
      .col-lg-5
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img12.svg')
      p También se puede obtener el Valor Actual (VA), utilizando la fórmula financiera de Excel llamada VA, la cual se presenta a continuación:
      .row.align-items-start
        .col-lg-6.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img14.svg')
        .col-lg-6
          p #[b VA(tasa;nper;pago;(vf);tipo)], teniendo en cuenta que:
          ul.lista-ul
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Tasa]: es la tasa de interés del período acordado.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Nper]: es el número total de períodos.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Pago]: es el pago efectuado en cada período.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Vf]: Valor futuro o suma total de lo que se desea obtener después de efectuar el último pago.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Tipo]: es un valor lógico. Se registra “0” para una tasa vencida y “1” para tasa anticipada.
    .row.mx-0.p-4.align-items-center(style="background-color: #EDEDF0")
      .col-lg-7.mb-4.mb-lg-0
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img5.svg', style="width:100px")
          .col
            p #[b Ejemplo 3:] María realiza una inversión por valor de $ 750.000, por un periodo de 3 años. Al finalizar el tiempo le entregan $ 868.219. ¿Cuál es la tasa de interés compuesto aplicada? Una vez despejada la fórmula principal, se utilizará la siguiente:
        figure.mb-4
          img(src='@/assets/curso/img15.svg', style="width:500px").m-auto
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 #[b Respuesta:] la tasa aplicada en la inversión es del 5% anual.
        p Para hallar el interés (i), en Excel se utiliza la fórmula financiera llamada Tasa, la cual se presenta a continuación:
      .col-lg-5
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img16.svg')
      .row.align-items-start
        .col-lg-6.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img17.svg')
        .col-lg-6
          p #[b tasa(nper;pago;va;(vf);tipo)], teniendo en cuenta que:
          ul.lista-ul
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Nper]: es el número total de períodos.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Pago]: es el pago efectuado en cada período.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Va]: es el valor actual o suma total del valor de una serie de pagos.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Vf]: Valor futuro o suma total de lo que se desea obtener después de efectuar el último pago.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Tipo]: es un valor lógico. Se registra “0” para una tasa vencida y “1” para tasa anticipada.
    .row.mx-0.p-4.align-items-center(style="background-color: #FBF5EF")
      .col-lg-7.mb-4.mb-lg-0
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img5.svg', style="width:100px")
          .col
            p #[b Ejemplo 4:] Sofía realiza un préstamo de $2.000.000, Al final del período paga $3.443.143, la tasa cobrada es del 2,5% mensual. Hallar el tiempo del préstamo.  Teniendo en cuenta la fórmula principal, se realiza el proceso para despejarla; por ende, se utilizará la siguiente:
        figure.mb-4
          img(src='@/assets/curso/img18.svg', style="width:500px").m-auto
        .cajon.color-primario.p-4.mb-4
          p.mb-0 #[b Respuesta:] El tiempo del préstamo es de 22 meses.
        p Para hallar el periodo (n), en Excel se utiliza la fórmula financiera llamada Nper, la cual se presenta a continuación:
      .col-lg-5
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img19.svg')
      .row.align-items-start
        .col-lg-6.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img20.svg')
        .col-lg-6
          p #[b Nper(nper;pago;va;(vf);tipo)], teniendo en cuenta que:
          ul.lista-ul
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Tasa]: es la tasa de interés del período acordado.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Pago]: es el pago efectuado en cada período.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Va]: es el valor actual o suma total del valor de una serie de pagos.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Vf]: Valor futuro o suma total de lo que se desea obtener después de efectuar el último pago.
            li 
              i.far.fa-folder-open(style="color: #A66D58")
              | #[b Tipo]: es un valor lógico. Se registra “0” para una tasa vencida y “1” para tasa anticipada.
    separador.mb-5
    #t_1_3
    .titulo-segundo
      h2 1.3 Tasa nominal, periódica y efectiva
    p.mb-5 Para aplicar adecuadamente las matemáticas financieras en los diferentes hechos económicos que se presentan en una empresa, surge la necesidad de identificar los conceptos y políticas para realizar los cálculos aritméticos. En el desarrollo de este proceso, es importante diferenciar las tasas de interés nominal, efectiva y periódica, las cuales pueden presentarse de forma anticipada o vencida; por lo tanto, a continuación, se relacionan las siguientes definiciones:
    .row.align-items-end.mb-4
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Tasa nominal")
            .col-12
              p Tasa que se genera en un periodo de tiempo y que no capitaliza; por lo tanto, se dice que se asemeja al interés simple. (Vidaurri, 2017).
          div(titulo="Tasa efectiva")
            .row
              .col-12
                p Tasa que efectivamente se reconoce en la transacción financiera. Es capitalizable en el periodo de tiempo, haciendo referencia al interés compuesto. (Vidaurri, 2017).
          div(titulo="Tasa periódica")
            .row
              .col-12
                p Hace referencia al periodo de capitalización en el cual se realiza la operación financiera, la cual puede ser: diaria, mensual, bimestral, trimestral, cuatrimestral, semestral, anual, etc. (Vidaurri, 2017).
          div(titulo="Tasa periódica")
            .row
              .col-12
                p Como se había mencionado, las tasas de interés se presentan de forma anticipada o vencida. A continuación se relaciona el significado de cada una:
                p #[b Anticipada (A)]: se calcula el interés de forma anticipada en el respectivo periodo. (Vidaurri, 2017).
                p #[b Vencida (V)]: se calcula el interés de forma vencida en el periodo. (Vidaurri, 2017).
      .col-lg-5
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img21.svg')
    p.mb-5 Para aplicar los tipos de tasas de interés es importante conocer los periodos de capitalización, que se reconocen de la siguiente manera:
    .row.justify-content-center.mb-5
      .col-lg-7
        .tabla-b.color-acento-contenido
          table
            thead(style="background-color: #D9A171")
              tr
                th.text-center(style="color: #FFFFFF") Frecuencia de capitalización
                th.text-center(style="color: #FFFFFF") Abreviatura
                th.text-center(style="color: #FFFFFF") Capitalización anual
            tbody
              tr
                th.text-center 1
                th.text-center A
                th.text-center Anual
              tr
                th.text-center 12
                th.text-center M
                th.text-center Mensual
              tr
                th.text-center 6
                th.text-center B
                th.text-center Bimestral
              tr
                th.text-center 4
                th.text-center T
                th.text-center Trimestral
              tr
                th.text-center 3
                th.text-center C
                th.text-center Cuatrimestral
              tr
                th.text-center 2
                th.text-center S
                th.text-center Semestral
              tr
                th.text-center 24
                th.text-center Q
                th.text-center Quincenal
              tr
                th.text-center 365
                th.text-center D
                th.text-center Diaria
    .row.mb-5.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img22.svg')
      .col-lg-8
        .h3 Equivalencia de tasas
        p Hace referencia a la igualdad que debe existir entre el periodo de capitalización y el periodo de tiempo; para ejemplarizar, si la tasa se presenta de forma trimestral, el periodo debe darse de igual manera. Por lo tanto, de acuerdo con la operación se realizará la conversión de tasas con el fin de lograr su equivalencia (Vidaurri, 2017).
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Para profundizar en la temática, recuerde explorar en la biblioteca del Servicio Nacional de Aprendizaje (SENA), donde encuentra libros de apoyo. A continuación se relaciona el libro Matemáticas Financieras, que fue utilizado para la definición de los conceptos anteriormente expuestos, para su revisión:
        a.anexo.mb-4.mb-lg-0(href="http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3788" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web]. Vidaurri, Hector. (2017). Matemáticas Financieras. Cengage Learning.
    .h3 Fórmulas
    .row.align-items-start
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Conversión de tasa efectiva a tasa efectiva en periodos diferentes")
            .col-12
              figure.my-4
                img(src='@/assets/curso/img24.svg', style="width:550px").m-auto
              p #[b Ejemplo]: convertir el 8% Efectivo Mensual (EF) a Efectivo Semestral (ES).
              p i
                sub e 
                | = ((1+0,08) (
                sup 12/2 
                | )) – 1
              p i
                sub e 
                | = 58, 69% Efectivo semestral (ES)
          .row(numero="2" titulo="Conversión de tasa efectiva a nominal")
            .col-12
              figure.my-4
                img(src='@/assets/curso/img25.svg', style="width:550px").m-auto
              p #[b Ejemplo]: se tiene una tasa del 24% Efectiva Anual (EA), realizar la conversión a nominal mensual equivalente.
              p j = ((1+ 0,24 ) (
                sup 12/2 
                | ) -1 ) * 12
              p j = 21,71% Nominal Mensual (NM)
          .row(numero="3" titulo="Conversión de tasa nominal vencida a efectiva")
            .col-12
              figure.my-4
                img(src='@/assets/curso/img26.svg', style="width:550px").m-auto
              p #[b Ejemplo]: Se tiene una tasa del 24% nominal anual mes vencido, hallar la tasa efectiva anual.
              p i
                sub e 
                | = (1+ 0,24/12 ) (
                sup 12/1
                |)  -1 
              p i
                sub e 
                | = 26,82% Efectiva Anual (EA)
          .row(numero="4" titulo="Conversión de tasa nominal anticipada a efectiva")
            .col-12
              figure.my-4
                img(src='@/assets/curso/img27.svg', style="width:550px").m-auto
              p #[b Ejemplo]: convertir el 23% Nominal anual trimestral anticipada (NATA) a efectiva anual.
              p i
                sub e 
                | = (1-( 0,23/4 ) )
                sup (- 4/1) 
                | -1 
              p i
                sub e 
                | =  26,72% Efectiva Anual (EA)
          .row(numero="5" titulo="Conversión de tasa nominal a otra tasa nominal")
            .col-12
              p Para convertir una tasa nominal a otra nominal, simplemente se multiplica o divide dependiendo de las condiciones. Una forma de realizar la conversión es, primero, hallar la Nominal anual, y después, dividir en el periodo al cual se quiere llegar.
              p Pasos:
              ol.lista-ol--cuadro.mb-4
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Hallar la tasa anual.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Luego, hallar el periodo buscado.
              p #[b Ejemplo]: se tiene una tasa 12% Nominal Trimestral (NT), se solicita hallar la tasa Nominal Anual (NA).
              p n = 12 * 4
              p n = 48% Nominal Anual (NA)
              p Se multiplica por cuatro (4), teniendo en cuenta que son los trimestres de un año.
      .col-lg-5
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img23.svg')
    separador.mb-5
    #t_1_4
    .titulo-segundo
      h2 1.4 Tablas de amortización
    .row.align-items-center.mb-4
      .col-lg-7
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Es una matriz que presenta las cuotas periódicas de un préstamo, teniendo en cuenta el capital inicial, los intereses generados y el abono que se realiza, conforme al acuerdo entre deudor y acreedor.
            i.fas.fa-quote-right.d-flex.justify-content-end
            span.d-flex.justify-content-end (Meza, 2017).
      .col-lg-5
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img28.svg')
    p.mb-4 Para elaborar la tabla de amortización, es importante analizar los siguientes conceptos:
    .row.justify-content-center.mx-0.mb-5
      .col-lg-7.p-4.rounded.bg-color1.mb-2
        .row.align-items-center
          .col-auto.d-inline
            figure
              img(src='@/assets/curso/img29.svg')
          .col
            p.mb-0 #[b Tasa (i)]: porcentaje que se aplica al valor de la deuda, teniendo en cuenta la igualdad entre el periodo de capitalización y periodo de tiempo.
      .col-lg-7.p-4.rounded.bg-color1.mb-2
        .row.align-items-center
          .col-auto.d-inline
            figure
              img(src='@/assets/curso/img30.svg')
          .col
            p.mb-0 #[b Capital prestado (C#[sub 0])]: valor del préstamo, este se tiene en cuenta para determinar la cuota junto con las condiciones pactadas.
      .col-lg-7.p-4.rounded.bg-color1.mb-2
        .row.align-items-center
          .col-auto.d-inline
            figure
              img(src='@/assets/curso/img31.svg')
          .col
            p.mb-0 #[b Periodicidad (n)]: tiempo acordado para cancelar la deuda, se define en número de cuotas.
      .col-lg-7.p-4.rounded.bg-color1
        .row.align-items-center
          .col-auto.d-inline
            figure
              img(src='@/assets/curso/img32.svg')
          .col
            p.mb-0 #[b Cuota periódica constante (a)]: corresponde al valor de la cuota fija.
    .row.align-items-center.mb-4
      .col-lg-4
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img33.svg')
      .col-lg-8
        .row.align-items-center.mb-4
          .col-auto.d-inline
            figure
              img(src='@/assets/curso/img5.svg')
          .col
            p.mb-0 #[b Ejemplo 1]: la siguiente tabla de amortización presenta el método francés, donde se establece la cuota fija en el periodo de pago acordado.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La empresa Supercueros SAS, realiza un préstamo por valor de $ 12.000.000, a una tasa del 1,7% EM, por un periodo de tiempo de 6 meses.
        .row.justify-content-center
          .col-lg-8.mb-4
            .tabla-b.color-acento-contenido
              table
                thead(style="background-color: #D9A171")
                  tr
                    th.text-center(style="color: #FFFFFF") PRÉSTAMO
                    th.text-center(style="color: #FFFFFF") $12.000.000
                    th.text-center(style="color: #FFFFFF")
                tbody
                  tr
                    td.text-center TASA
                    td.text-center 1,70%
                    td.text-center MENSUAL
                  tr
                    td.text-center PERIODO
                    td.text-center 6
                    td.text-center 
          .col-12.mb-4
            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #D9A171")
                  tr
                    th.text-center(style="color: #FFFFFF") No
                    th.text-center(style="color: #FFFFFF") CUOTA
                    th.text-center(style="color: #FFFFFF") INTERÉS
                    th.text-center(style="color: #FFFFFF") AMORTIZACIÓN
                    th.text-center(style="color: #FFFFFF") SALDO
                tbody
                  tr
                    td.text-center 0
                    td.text-center 
                    td.text-center 
                    td.text-center 
                    td.text-center $ 12.000.000
                  tr
                    td.text-center 1
                    td.text-center $ 2.120.671,37
                    td.text-center $ 204.000 
                    td.text-center $ 1.916.671,37
                    td.text-center $ 10.083.329
                  tr
                    td.text-center 2
                    td.text-center $ 2.120.671,37
                    td.text-center $ 171.417
                    td.text-center $ 1.949.254,78
                    td.text-center $ 8.134.074
                  tr
                    td.text-center 3
                    td.text-center $ 2.120.671,37
                    td.text-center $ 138.279
                    td.text-center $ 1.982.392,12
                    td.text-center $ 6.151.682
                  tr
                    td.text-center 4
                    td.text-center $ 2.120.671,37
                    td.text-center $ 104.579
                    td.text-center $ 2.016.092,78
                    td.text-center $ 4.135.589
                  tr
                    td.text-center 5
                    td.text-center $ 2.120.671,37
                    td.text-center $ 70.305
                    td.text-center $ 2.050.366,36
                    td.text-center $ 2.085.223
                  tr
                    td.text-center 6
                    td.text-center $ 2.120.671,37
                    td.text-center $ 35.449
                    td.text-center $ 2.085.222,59
                    td.text-center $ -
                  tr
                    td.text-center 
                    td.text-center $ 12.724.028,23
                    td.text-center $ 724.028,23
                    td.text-center $ 12.000.000,00
                    td.text-center
    .row.mx-0.mb-5
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img34.svg')
      .col-lg-6
        .h3 Procedimiento
        ol.lista-ol--cuadro.mb-4
          li 
            .lista-ol--cuadro__vineta
              span 1
            | El valor de la cuota fija se calcula aplicando la siguiente fórmula:
        figure.mb-4
          img(src='@/assets/curso/img36.svg', style="width:250px").m-auto
        ol.lista-ol--cuadro.mb-4
          li 
            .lista-ol--cuadro__vineta
              span 2
            | El interés se calcula multiplicando el saldo anterior del préstamo por la tasa acordada.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | La amortización se determina restando el valor de la cuota, menos el interés.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | El saldo se obtiene restando el saldo anterior, menos el valor de la amortización.
      p.mb-4 Así mismo, se puede obtener el valor de la cuota fija, utilizando la fórmula financiera de Excel llamada PAGO, la cual se presenta a continuación:
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/img35.svg')
      .col-lg-6
        p #[b PAGO(tasa;nper;va;vf,tipo)], teniendo en cuenta que:
        ul.lista-ul
          li 
            i.far.fa-folder-open(style="color: #A66D58")
            | #[b Tasa]: es la tasa acordada al adquirir la obligación.
          li 
            i.far.fa-folder-open(style="color: #A66D58")
            | #[b Nper]: es el número de períodos.
          li 
            i.far.fa-folder-open(style="color: #A66D58")
            | #[b Va]: Valor actual( valor del préstamo).
          li 
            i.far.fa-folder-open(style="color: #A66D58")
            | #[b Vf]: Valor futuro.
          li 
            i.far.fa-folder-open(style="color: #A66D58")
            | #[b Tipo]: es un valor lógico. Se registra “0” para una tasa vencida y “1” para tasa anticipada.
    .row.mx-0.mb-4.p-2.align-items-center(style="background-color: #EAEAED")
      .col-lg-8
        .row.align-items-center.mb-4
          .col-auto.d-inline
            figure
              img(src='@/assets/curso/img5.svg')
          .col
            p.mb-0 #[b Ejemplo 2]: Teniendo en cuenta la información del ejercicio anterior, se supone un periodo de gracia de 2 meses.
        .row.justify-content-center
          .col-lg-8.mb-4
            .tabla-b.color-acento-contenido
              table
                thead(style="background-color: #D9A171")
                  tr
                    th.text-center(style="color: #FFFFFF") PRÉSTAMO
                    th.text-center(style="color: #FFFFFF") $12.000.000
                    th.text-center(style="color: #FFFFFF")
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-center TASA
                    td.text-center 1,70%
                    td.text-center MENSUAL
                  tr(style="background-color: #FFFFFF")
                    td.text-center PERIODO
                    td.text-center 6
                    td.text-center
                  tr(style="background-color: #F6F6F6")
                    td.text-center PER GRACIA
                    td.text-center 2
                    td.text-center MESES
          .col-12.mb-4
            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #D9A171")
                  tr
                    th.text-center(style="color: #FFFFFF") No
                    th.text-center(style="color: #FFFFFF") CUOTA
                    th.text-center(style="color: #FFFFFF") INTERÉS
                    th.text-center(style="color: #FFFFFF") AMORTIZACIÓN
                    th.text-center(style="color: #FFFFFF") SALDO
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-center 0
                    td.text-center 
                    td.text-center 
                    td.text-center 
                    td.text-center $ 12.000.000
                  tr(style="background-color: #FFFFFF")
                    td.text-center 1
                    td.text-center $ 0,00
                    td.text-center $ 204.000
                    td.text-center(style="color: #E61010") -$ 204.000,00
                    td.text-center $ 12.204.000 
                  tr(style="background-color: #F6F6F6")
                    td.text-center 2
                    td.text-center $ 0,00
                    td.text-center $ 207.468
                    td.text-center(style="color: #E61010") -$ 207.468,00
                    td.text-center $ 12.411.468
                  tr(style="background-color: #FFFFFF")
                    td.text-center 3
                    td.text-center $ 3.235.850,25
                    td.text-center $ 210.995
                    td.text-center $ 3.024.855,29
                    td.text-center $ 9.386.613
                  tr(style="background-color: #F6F6F6")
                    td.text-center 4
                    td.text-center $ 3.235.850,25
                    td.text-center $ 159.572
                    td.text-center $ 3.076.277,83
                    td.text-center $ 6.310.335
                  tr(style="background-color: #FFFFFF")
                    td.text-center 5
                    td.text-center $ 3.235.850,25
                    td.text-center $ 107.276 
                    td.text-center $ 3.128.574,55
                    td.text-center $ 3.181.760
                  tr(style="background-color: #F6F6F6")
                    td.text-center 6
                    td.text-center $ 3.235.850,25
                    td.text-center $ 54.090
                    td.text-center $ 3.181.760,32
                    td.text-center $ 0
                  tr(style="background-color: #FFFFFF")
                    td.text-center #[b TOTAL]
                    td.text-center $ 12.943.400,99
                    td.text-center $ 943.401
                    td.text-center $ 12.000.000,00
                    td.text-center
      .col-lg-4
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img37.svg')
      .col-12
        .row.align-items-center
          .col-lg-8.mt-4.mt-lg-0
            .h3 Procedimiento
            ol.lista-ol--cuadro.mb-4
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Teniendo en cuenta que no hay cuota, se calculan los intereses, incrementando el saldo final.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Se calcula la cuota a partir del tercer mes, utilizando la fórmula de cuota fija, analizada en el ejercicio anterior. Se tiene en cuenta el número de periodos faltantes y el último saldo, con el fin de que coincida con el tiempo del préstamo.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Finalmente, se procede a elaborar la tabla, teniendo en cuenta el procedimiento realizado en la tabla de amortización de cuota fija.
          .col-lg-4
            figure(data-aos="flip-right")
              img(src='@/assets/curso/img38.svg')
    .row.align-items-center
      .col-lg-4
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img39.svg')
      .col-lg-8
        .row.align-items-center.mb-4
          .col-auto.d-inline
            figure
              img(src='@/assets/curso/img5.svg')
          .col
            p.mb-0 #[b Ejemplo 3]: continuamos con el ejercicio anterior, se presenta un abono a capital.
        .row.justify-content-center
          .col-lg-8.mb-4
            .tabla-b.color-acento-contenido
              table
                thead(style="background-color: #D9A171")
                  tr
                    th.text-center(style="color: #FFFFFF") PRÉSTAMO
                    th.text-center(style="color: #FFFFFF") $12.000.000
                    th.text-center(style="color: #FFFFFF")
                tbody
                  tr
                    td.text-center TASA
                    td.text-center 1,70%
                    td.text-center MENSUAL
                  tr
                    td.text-center PERIODO
                    td.text-center 6
                    td.text-center
                  tr
                    td.text-center ABONO
                    td.text-center 3
                    td.text-center MESES
                  tr
                    td.text-center VAL ABONO
                    td.text-center $ 2.000.000
                    td.text-center 
          .col-12.mb-4
            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #D9A171")
                  tr
                    th.text-center(style="color: #FFFFFF") No
                    th.text-center(style="color: #FFFFFF") CUOTA
                    th.text-center(style="color: #FFFFFF") INTERÉS
                    th.text-center(style="color: #FFFFFF") AMORTIZACIÓN
                    th.text-center(style="color: #FFFFFF") SALDO
                tbody
                  tr
                    td.text-center 0
                    td.text-center 
                    td.text-center 
                    td.text-center 
                    td.text-center $ 12.000.000
                  tr
                    td.text-center 1
                    td.text-center $ 2.120.671,37
                    td.text-center $ 204.000 
                    td.text-center $ 1.916.671,37
                    td.text-center $ 10.083.329
                  tr
                    td.text-center 2
                    td.text-center $ 2.120.671,37
                    td.text-center $ 171.417
                    td.text-center $ 1.949.254,78
                    td.text-center $ 8.134.074
                  tr
                    td.text-center 3
                    td.text-center $ 4.120.671,37
                    td.text-center $ 138.279
                    td.text-center $ 3.982.392,12
                    td.text-center $ 4.151.682
                  tr
                    td.text-center 4
                    td.text-center $ 1.431.210,68
                    td.text-center $ 70.579
                    td.text-center $ 1.360.632,09
                    td.text-center $ 2.791.050
                  tr
                    td.text-center 5
                    td.text-center $ 1.431.210,68
                    td.text-center $ 47.448
                    td.text-center $ 1.383.762,84
                    td.text-center $ 1.407.287
                  tr
                    td.text-center 6
                    td.text-center $ 1.431.210,68
                    td.text-center $ 23.924
                    td.text-center $ 1.407.286,80
                    td.text-center $ -
                  tr
                    td.text-center #[b TOTAL]
                    td.text-center $ 12.655.646,15
                    td.text-center $ 655.646
                    td.text-center $ 12.000.000,00
                    td.text-center
    .row.mx-0.align-items-center
      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img40.svg')
      .col-lg-8.mt-4.mt-lg-0
        .h3 Procedimiento
        ol.lista-ol--cuadro.mb-4
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Se calcula la cuota de igual forma como en el ejemplo 1, mediante cuota fija o pagos iguales.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | De acuerdo con el mes y valor del abono, se suma el valor del abono a la cuota.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Se calcula nuevamente la cuota, teniendo en cuenta los periodos faltantes y el último saldo del préstamo.
    separador.mb-5
    #t_1_5
    .titulo-segundo
      h2 1.5. Alternativas de inversión
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.align-items-center.mb-4
      .col-lg-7
        .h4 Valor presente neto (VPN)
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 El valor presente neto es una cifra monetaria que resulta de comparar el valor presente de los ingresos con el valor presente de los ingresos.
            i.fas.fa-quote-right.d-flex.justify-content-end
            span.d-flex.justify-content-end (Meza, 2017).
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 El VPN es una alternativa de inversión utilizada frecuentemente para medir el desempeño de la inversión. Para su aplicación se tiene en cuenta la siguiente fórmula:
        figure.mb-4
          img(src='@/assets/curso/img41.svg', style="width:550px").m-auto
        p.mb-0 #[b P]: Inversión inicial
        p.mb-0 #[b FNE]: Flujos netos de efectivo
        p #[b TO]: Tasa de oportunidad del inversionista.
        p #[b Interpretación]:
        p VPN < cero “0” = No es viable (pérdida)
        p VPN > cero “0”  = Es viable (Ganancia)
        p VPN = cero “0”  = Indiferente 
      .col-lg-5
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img42.svg')
    .row.p-4.mx-0.mb-5.align-items-end(style="background-color: #FAF4EE")
      .col-lg-7
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img5.svg', style="width:100px")
          .col
            p.mb-0 #[b Ejemplo]: Se desea realizar una inversión de $12.000.000, durante 4 años, a una tasa de descuento del 15% anual. Los beneficios (flujos) recibidos por cada año son los siguientes:
        .row.justify-content-center
          .col-lg-8.mb-4
            .tabla-d.color-acento-contenido
              table
                tbody
                  tr(style="background-color: #D9A171")
                    th.text-center Inversión
                    td.text-center $ 12.000.000
                  tr(style="background-color: #FDFAF7")
                    th.text-center Flujo Año 1
                    td.text-center $ 2.500.000
                  tr(style="background-color: #D9A171")
                    th.text-center Flujo Año 2
                    td.text-center $ 3.600.000
                  tr(style="background-color: #FDFAF7")
                    th.text-center Flujo Año 3
                    td.text-center $ 4.200.000
                  tr(style="background-color: #D9A171")
                    th.text-center Flujo Año 4
                    td.text-center $ 5.000.000
          .cajon.color-primario.p-4.mb-4
            p.mb-0 #[b NOTA]: Determinar la viabilidad del proyecto, aplicando la fórmula de VPN o VNA.
          p.mb-4 La fórmula que debe usarse es:
          figure.mb-4
            img(src='@/assets/curso/img43.svg', style="width:650px").m-auto
          p #[b VPN= -$ 1.483.635,35]
      .col-lg-5
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img44.svg')
      .col-12
        p.mt-5 De acuerdo con la información suministrada, se observa que el proyecto no es viable, teniendo en cuenta que se genera una pérdida, sin recuperar el dinero invertido.
        p.mb-4 Así mismo se puede obtener el valor presente neto, utilizando la fórmula financiera de Excel llamada VNA, la cual se presenta a continuación:
      .row.align-items-center
        .col-lg-6
          figure.mb-4.mb-lg-0
            img(src='@/assets/curso/img45.svg').m-auto
        .col-lg-6
          .row
            .col-12.bg-color2.p-4
              p #[b VNA(tasa;valor1;valor2;…)], teniendo en cuenta que:
              ul.lista-ul
                li 
                  i.far.fa-folder-open(style="color: #A66D58")
                  | #[b Tasa]: es la tasa de descuento.
                li 
                  i.far.fa-folder-open(style="color: #A66D58")
                  | #[b Valor1]: corresponde a los pagos e ingresos, los cuales se presentan entre 1 y 254.
    .h3 Tasa Interna de Retorno (TIR)
    p La tasa interna de retorno TIR, es un indicador de rentabilidad que se utiliza en su mayoría para evaluar proyectos de inversión. Su cálculo se basa en los flujos de caja esperados del proyecto en determinados tiempos.
    .row.mb-5.align-items-center
      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img46.svg').m-auto
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Podemos definir, entonces, la TIR como aquella que es la máxima tasa de interés a la que un inversionista estaría dispuesto a pedir prestado dinero para financiar la totalidad del proyecto, pagando con los beneficios (flujos de efectivo) la totalidad del capital y de sus intereses, sin perder un solo centavo.
            i.fas.fa-quote-right.d-flex.justify-content-end
            span.d-flex.justify-content-end (Meza, 2017).
        p La fórmula aplicable en este caso es:
        figure.mb-4
          img(src='@/assets/curso/img47.svg', style="width:550px").m-auto
        p #[b Interpretación]:
        p Tasa de descuento > TIR = No es viable (pérdida)
        p Tasa de descuento < TIR = Es viable (Ganancia)
        p.mb-0 Tasa de descuento = TIR = Indiferente
    .row.p-4(style="background-color: #EAEAED")
      .col-12
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img5.svg', style="width:100px")
          .col
            p.mb-0 #[b Ejemplo]: Iván Méndez desea realizar una inversión de $20.000.000, el proyecto le ofrece los siguientes beneficios durante 6 años, de igual forma genera los presentes gastos:
        .row.justify-content-start.mb-4
          .col-12.col-lg-11.mb-4
            .tabla-e.color-acento-contenido
              table
                thead(style="background-color: #D9A171")
                  tr
                    th.text-center(style="color: #000000") TIO
                    td(colspan="7").text-center(style="color: #000000") #[b 14%]
                tbody
                  tr(style="background-color: #FFFFFF")
                    th.text-center INVERSION
                    th.text-center 0
                    td.text-center 1
                    td.text-center 2
                    td.text-center 3
                    td.text-center 4
                    td.text-center 5
                    td.text-center 6
                  tr(style="background-color: #F6F6F6")
                    th.text-center 20.000.000
                    th.text-center 
                    td.text-center $ 4.000.000
                    td.text-center $ 6.000.000
                    td.text-center $ 7.200.000
                    td.text-center $ 8.000.000
                    td.text-center $ 9.200.000
                    td.text-center $ 13.000.000
                  tr(style="background-color: #FFFFFF")
                    th.text-center COSTOS
                    th.text-center 
                    td.text-center $ 800.000
                    td.text-center $ 1.200.000
                    td.text-center $ 1.440.000
                    td.text-center $ 1.600.000
                    td.text-center $ 1.840.000
                    td.text-center $ 2.600.000
                  tr(style="background-color: #F6F6F6")
                    th.text-center FLUJO
                    th.text-center -$20.000.000
                    td.text-center $ 3.200.000
                    td.text-center $ 4.800.000
                    td.text-center $ 5.760.000
                    td.text-center $ 6.400.000
                    td.text-center $ 7.360.000
                    td.text-center $ 10.400.000
          .col-6.col-lg-3
            .tabla-f.color-acento-contenido
              table
                thead(style="background-color: #D9A171")
                  tr
                    th.text-center(style="color: #000000") VAN
                    td.text-center(style="color: #000000") #[b $ 2.738.265]
                tbody
                  tr(style="background-color: #FFFFFF")
                    th.text-center TIR
                    th.text-center #[b 18%]
        p Para hallar el Valor Presente Neto (VPN o VNA) y la Tasa Interna de Retorno (TIR) se realizará a través de Microsoft Excel, para ello es importante relacionar la información con el fin de desarrollar las fórmulas básicas:
        .row.align-items-top.mb-4
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/img48.svg').m-auto
          .col-lg-6
            .row
              .col-12.p-4(Style="background-color: #FFFFFF")
                p #[b VNA(tasa;valor1;valor2;…)], teniendo en cuenta que:
                ul.lista-ul
                  li 
                    i.far.fa-folder-open(style="color: #A66D58")
                    | #[b Tasa]: es la tasa de descuento.
                  li 
                    i.far.fa-folder-open(style="color: #A66D58")
                    | #[b Valor1]: corresponde a los pagos e ingresos, los cuales se presentan entre 1 y 254.
        .row.align-items-top.mb-4
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/img49.svg').m-auto
          .col-lg-6
            .row
              .col-12.p-4(Style="background-color: #FFFFFF")
                p #[b TIR (valores;estimar)], teniendo en cuenta que:
                ul.lista-ul
                  li 
                    i.far.fa-folder-open(style="color: #A66D58")
                    | #[b Valores]: corresponde a los números que se desea calcular la TIR.
                  li 
                    i.far.fa-folder-open(style="color: #A66D58")
                    | #[b Valor1]: es el número que el usuario estima se aproximará a la TIR.
        .row.align-items-top.mb-4
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/img50.svg').m-auto
          .col-lg-6
            .h3 Respuesta:
            .row.mb-4
              .col-8.col-lg-6
                .tabla-f.color-acento-contenido
                  table
                    thead(style="background-color: #D9A171")
                      tr
                        th.text-center(style="color: #000000") VAN
                        td.text-center(style="color: #000000") #[b $ 2.738.264,85]
                    tbody
                      tr(style="background-color: #FFFFFF")
                        th.text-center TIR
                        th.text-center #[b 18%]
            p De acuerdo con lo anterior, se observa que el proyecto es viable, teniendo en cuenta que se recupera la inversión, además de generar una ganancia.  La TIR (184%) es mayor que la tasa de descuento (14%).
            p Para ampliar esta información, usted deberá ingresar a la biblioteca del Servicio Nacional de Aprendizaje (SENA), donde encuentra libros de apoyo.  A continuación se relaciona el enlace sugerido para fortalecer la temática propuesta:
            a.anexo(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/130247?page=279" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web]. Tello, L. B. (2019). Herramientas financieras y valoración de activos y pasivos financieros bajo NIIF. Santiago de Cali: Editorial Universidad Icesi.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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

<style lang="sass" scoped></style>
