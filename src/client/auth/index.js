'use strict'

import page from 'page'
import title from 'title'
import landing from './template'


page('/welcome/:string',
      (ctx, next) => {

  $(document).ready(function(){

    let email = ctx.params.string
    let $main = $('#main-container')
    title('Parques Girardot')
    $main.empty().append(landing())

  })
})
