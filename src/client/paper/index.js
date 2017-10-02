'use strict'

import header from '../header'


page('/paper/:',
      header,
      (ctx, next) => {

  $(document).ready(function(){

    let $main = $('#main-container')
    title('Parques Girardot')
    $main.empty().append(template())

    // Materialize components
    $('.materialboxed').materialbox()
    $('.carousel').carousel()
    animation.aparitionToCenter()
  })
})
