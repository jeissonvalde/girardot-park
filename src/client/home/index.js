'use strict'

import page from 'page'
import title from 'title'
import empty from 'empty-element'
import template from './template'
import animation from './animations'
import header from '../header'
import data from '../utils/data-center'


page('/',
      data.load.auth,
      header,
      (ctx, next) => {

  $(document).ready(function(){

    let $main = $('#main-container')
    title('Parques Girardot')
    empty($main).append(template())

    // Materialize components
    $('.materialboxed').materialbox()
    $('.carousel').carousel()
    animation.aparitionToCenter()
  })
})
