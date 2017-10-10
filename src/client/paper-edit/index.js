'use strict'

import header from '../header'
import template from './template'
import title from 'title'
import page from 'page'
import data from '../utils/data-center'
import animations from './animations'


page('/paper/edit/:id',
      data.load.auth,
      data.load.paper,
      header,
      (ctx, next) => {

  $(document).ready(function(){

    let $main = $('#main-container')
    title(ctx.paper.title.substr(0, 15))
    $main.empty().append(template(ctx.paper))

    // Animations and functions
    $('.modal').modal()
    $('select').material_select()
    $('.materialboxed').materialbox()
    animations.saveChanges(ctx.paper.exposedId)
  })
})
