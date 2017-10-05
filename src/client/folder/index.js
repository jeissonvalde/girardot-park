'use strict'

import page from 'page'
import title from 'title'
import template from './template'
import modal from './modals'
import animation from './animations'
import header from '../header'
import data from '../utils/data-center'


page('/user/folder',
      data.load.auth,
      data.load.myfolder,
      header,
      (ctx, next) => {

  $(document).ready(function(){

    let data = {
      user: ctx.auth,
      arts: ctx.auth.folder
    }
    let $main = $('#main-container')
    title('Portafolio')
    $main.empty().append(template(data))

    // Materialize components
    $('ul.tabs').tabs()

    // modals init
    $('#modals-container').empty().append(modal.help())
    $('.modal').modal()

    // animations
    animation.saveArt()
  })
})
