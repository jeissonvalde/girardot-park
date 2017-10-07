'use strict'

import header from '../header'
import template from './template'
import title from 'title'
import page from 'page'
import data from '../utils/data-center'


page('/paper/:id',
      data.load.auth,
      data.load.paper,
      header,
      (ctx, next) => {

  $(document).ready(function(){

    let $main = $('#main-container')
    title(ctx.paper.title.substr(0, 15))
    delete ctx.paper.userId
    $main.empty().append(template(ctx.paper, ctx.auth.exposedId))
  })
})
