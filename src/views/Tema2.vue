<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Norma internacional de información financiera (NIIF) 13 - medición del valor razonable
    
    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col-12
          .titulo-quinto.color-acento-contenido
            h4 OBJETIVO
          p Esta NIIF: (a) define valor razonable; (b) establece en una sola NIIF un marco para la medición del valor razonable; y (c) requiere información a revelar sobre las mediciones del valor razonable.
      .row
        .col-12
          p El valor razonable es una medición basada en el mercado, no una medición específica de la entidad. Para algunos activos y pasivos, pueden estar disponibles transacciones de mercado observables o información de mercado. Para otros activos y pasivos, pueden no estar disponibles transacciones de mercado observables e información de mercado. Sin embargo, el objetivo de una medición del valor razonable en ambos casos es el mismo: estimar el precio al que tendría lugar una transacción ordenada para vender el activo o transferir el pasivo entre participantes del mercado en la fecha de la medición en condiciones de mercado presentes (es decir, un precio de salida en la fecha de la medición desde la perspectiva de un participante de mercado que mantiene el activo o debe el pasivo).
      .row
        .col-12
          p Cuando un precio para un activo o pasivo idéntico es no observable, una entidad medirá el valor razonable utilizando otra técnica de valoración que maximice el uso de datos de entrada observables relevantes y minimice el uso de datos de entrada no observables. Puesto que el valor razonable es una medición basada en el mercado, se mide utilizando los supuestos que los participantes del mercado utilizarían al fijar el precio del activo o pasivo, incluyendo los supuestos sobre riesgo. En consecuencia, la intención de una entidad de mantener un activo o liquidar o satisfacer de otra forma un pasivo no es relevante al medir el valor razonable.
      .row
        .col-12
          p La definición de valor razonable se centra en los activos y pasivos porque son un objeto principal de la medición en contabilidad. Además, esta NIIF se aplicará a instrumentos de patrimonio propios de una entidad, medidos a valor razonable.  (Consejo Técnico de la Contaduría Pública (CTCP) (2020, 5 de noviembre). Norma Internacional de Información Financiera 13 Medición del Valor Razonable.)
      .row
        .col-12
          .titulo-quinto.color-acento-contenido
            h4 ALCANCE
          p Esta NIIF se aplicará cuando otra NIIF requiera o permita mediciones a valor razonable o información a revelar sobre mediciones a valor razonable (y mediciones, tales como valor razonable menos costos de venta, basadas en el valor razonable, o información a revelar sobre esas mediciones), excepto por lo que se especifica en los párrafos 6 y 7.
      .row
        .col-12
          p Los requerimientos sobre medición e información a revelar de esta NIIF no se aplicarán a los elementos siguientes: (a) transacciones con pagos basados en acciones que queden dentro del alcance de la NIIF 2 Pagos basados en Acciones; (b) transacciones de arrendamiento contabilizados de acuerdo con la NIIF 16 Arrendamientos; y (c) mediciones que tengan alguna similitud con el valor razonable, pero que no sean valor razonable, tales como el valor neto realizable de la NIC 2 Inventarios o el valor en uso de la NIC 36 Deterioro del valor de los Activos.
      .row
        .col-12
          p La información a revelar requerida por esta NIIF no se requiere para los siguientes elementos: (a) activos del plan medidos a valor razonable de acuerdo con la NIC 19 Beneficios a los Empleados; (b) inversiones en un plan de beneficios por retiro medidos a valor razonable de acuerdo con la NIC 26 Contabilización e Información Financiera sobre Planes de beneficio por Retiro; y (c) activos para los que el importe recuperable es el valor razonable menos los costos de disposición de acuerdo con la NIC 36.
      .row
        .col-12
          p Si el valor razonable se requiere o permite por otras NIIF, el marco de medición del valor razonable descrito en esta NIIF se aplicará a la medición inicial y posterior.
          p (Consejo Técnico de la Contaduría Pública (CTCP) (2020, 5 de noviembre). Norma Internacional de Información Financiera 13 Medición del Valor Razonable.)
    .bloque-texto-a.color-secundario.p-4.p-lg-3.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          figure(data-aos="flip-right")
            img(src='@/assets/curso/img51.svg' style='width: 250px').m-auto
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p El valor razonable es una medida basada en el mercado, para registrar su valor es importante indagar en el mercado si el elemento ha presentado cambios que requieran una actualización conforme con las variaciones presentadas. Algunos activos que deben ser medidos a valor razonable son: instrumentos financieros, propiedades, planta y equipo, activos biológicos e inversiones.
    p #[b Ejemplo]: La empresa Supercueros SAS adquiere 1.000 acciones el 11 de noviembre de 2020, a $2.500 cada una. Se cancela comisión por valor de $500.000.
    p A 31 de diciembre de 2020, el valor de la acción disminuye hasta $2.200 por acción.  Realizar la medición inicial y posterior.
    .row.align-items-center.justify-content-center
      .col-lg-7
        p.text-center #[b Medición Inicial: 11 de noviembre de 2020]
        .row.justify-content-center
          .col-lg-8.mb-4
            .tabla-g.color-acento-contenido
              table
                tbody
                  tr(style="background-color: #E8E8E8")
                    td.text-center Inversión en acciones
                    td.text-center $ 2.500.000
                  tr(style="background-color: #FFFFFF")
                    td.text-center Más costo transacción
                    td.text-center $ 500.000
                  tr(style="background-color: #E8E8E8")
                    td.text-center #[b Total Inversión]
                    td.text-center $ 3.000.000
          .tabla-h.color-acento-contenido.mb-4
            table
              thead(style="background-color: #D9A171")
                tr
                  th.text-center(style="color: #FFFFFF") Cuenta
                  th.text-center(style="color: #FFFFFF") Debe
                  th.text-center(style="color: #FFFFFF") Haber
              tbody
                tr(style="background-color: #E8E8E8")
                  th.text-center Activos financieros (acciones)
                  th.text-center $ 3.000.000
                  th.text-center
                tr(style="background-color: #FFFFFF")
                  th.text-center Efectivo
                  th.text-center
                  th.text-center $ 3.000.000
                tr(style="background-color: #E8E8E8")
                  th.text-center Total
                  th.text-center $ 3.000.000
                  th.text-center $ 3.000.000
        p.text-center #[b Medición posterior: 31 de diciembre de 2020]
        .row.justify-content-center
          .col-lg-8.mb-4
            .tabla-g.color-acento-contenido
              table
                tbody
                  tr(style="background-color: #E8E8E8")
                    td.text-center Valor razonable 31/12/2020
                    td.text-center $ 2.200.000
                  tr(style="background-color: #FFFFFF")
                    td.text-center Valor costo de adquisición 11/11/2020
                    td.text-center $ 2.500.000
                  tr(style="background-color: #E8E8E8")
                    td.text-center #[b Valor pérdida de acciones]
                    td.text-center -$ 300.000
          .tabla-h.color-acento-contenido.mb-5
            table
              thead(style="background-color: #D9A171")
                tr
                  th.text-center(style="color: #FFFFFF") Cuenta
                  th.text-center(style="color: #FFFFFF") Debe
                  th.text-center(style="color: #FFFFFF") Haber
              tbody
                tr(style="background-color: #E8E8E8")
                  th.text-center Gasto por pérdida
                  th.text-center $ 300.000
                  th.text-center
                tr(style="background-color: #FFFFFF")
                  th.text-center Activos financieros (acciones)
                  th.text-center
                  th.text-center $ 300.000
                tr(style="background-color: #E8E8E8")
                  th.text-center Total
                  th.text-center $ 300.000
                  th.text-center $ 300.000
      .col-6.col-lg-5
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img52.svg').m-auto
    p.mt-4.mt-lg-0 Esta Norma proporciona los criterios de aplicación del valor razonable que se utilizan en el reconocimiento y medición de hechos económicos.  Los invito a ampliar la información revisando la Norma internacional de Contabilidad número trece (NIIF 13) - “Medición del valor razonable” en el siguiente enlace:
    .row
      .col-8.col-lg-6
        a.anexo(href="https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534363802-6328" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web]. Consejo Técnico de la Contaduría Pública (CTCP) (2020, 5 de noviembre) Norma Internacional de Información Financiera 13 Medición del Valor Razonable.
</template>

<script>
export default {
  name: 'Tema2',
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
