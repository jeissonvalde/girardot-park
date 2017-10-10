'use strict'

import yo from 'yo-yo'
import modal from './modal'
import template from './template'
import animations from './animations'


export default function header (ctx, next) {

  $('#header-container').empty().append(template({ user: ctx.auth }))

  $('.pushpin-nav.pinned.target').pushpin({
    top: 0,
    bottom: 1350,
    offset: 0
  })

  animations.init()
  animations.anim()
  animations.boxInfo()

  $('#modals-container').empty().append(modal.login())

  $('.modal').modal()

  $('.scrollspy').scrollSpy()

  next()
}
