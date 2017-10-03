'use strict'

import header from '../header'


page('/paper/:id',
      header,
      (ctx, next) => {

  $(document).ready(function(){

    let $main = $('#main-container')
    title('#####  Título del artículo ####')
    $main.empty().append(template())

    // Materialize components
    $('.materialboxed').materialbox()
    $('.carousel').carousel()
    animation.aparitionToCenter()
  })
})
