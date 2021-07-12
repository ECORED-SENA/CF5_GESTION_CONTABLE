<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img1.svg', alt='Texto que describa la imagen')
      .col-lg-7
        p En este componente formativo se abordan temas relacionados con la fundamentación y aplicación de las matemáticas financieras en el sector productivo, se analiza la clasificación de las tasas de interés, el valor del dinero en el tiempo, equivalencia de tasas, tablas de amortización y alternativas de inversión como lo son el Valor Presente Neto (VPN) y Tasa Interna de Retorno (TIR), así mismo, la Norma Internacional de Información Financiera (NIIF) 13 – Medición del Valor Razonable , teniendo en cuenta la importancia de su análisis y aplicación en el registro de los hechos económicos bajo los estándares internacionales.
        p Se profundiza en la Norma Internacional de Información Financiera (NIIF) 13 – Medición del Valor Razonable, teniendo en cuenta la importancia de su análisis y aplicación en el registro de los hechos económicos bajo los estándares internacionales.
        .cajon.color-primario.p-4
          p Finalmente, el análisis del componente le permite adquirir conocimientos en el manejo de herramientas ofimáticas, contribuyendo en el logro de los objetivos propuestos, fortaleciendo sus competencias y habilidades en el área de ofimática, contable y financiera.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
