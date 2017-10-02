'use strict'

import yo from 'yo-yo'
import template from './template'


export default function header (ctx, next) {

  $('#header-container').empty().append(template())

  let user = ctx.user
  let pubs = ctx.pubs

  $('.pushpin-nav.pinned.target').pushpin({
    top: 0,
    bottom: 1500,
    offset: 0
  })

  $(".dropdown-button").dropdown({
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    })
    
    $(".dropdown-button").on('click', function (ev) {
      ev.preventDefault()
    })


  next()
}
