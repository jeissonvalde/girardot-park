'use strict'

import page from 'page'
import title from 'title'
import template from './template'
import animation from './animations'


page('/',
      (ctx, next) => {

  $(document).ready(function(){

    let $main = $('#main-container')
    title('Parques Girardot')
    $main.empty().append(template())

    // Materialize components
    $('.materialboxed').materialbox()
    animation.aparitionToCenter()
  })
})
