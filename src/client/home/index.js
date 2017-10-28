'use strict'

import template from './template'
import animation from './animations'
// import header from '../header'
// import data from '../utils/data-center'


page('/',
      // data.load.auth,
      // header,
      (ctx, next) => {

  $(document).ready(function(){

    console.log('Home page, with page.js and require.js')
    let $main = $('#main-container')
    document.title = 'Parques Girardot'
    $main.empty().append(template())

    // Materialize components
    $('.materialboxed').materialbox()
    $('.carousel').carousel()
    animation.aparitionToCenter()
  })
})
