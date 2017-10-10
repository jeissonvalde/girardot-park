'use strict'


export default function aparitionToCenter () {
  // This element should be a jquery object
  let $two = $('.section-two .box-image')
  let $three = $('.section-three .box-image')
  $two.addClass('moveLeft')
  $three.addClass('moveRight')

  $(document).on('scroll', function (ev) {

    // Night and day transition
    if ($(document).scrollTop() > 300) {
      $two.removeClass('moveLeft')
    } else {
      $two.addClass('moveLeft')
    }

    if ($(document).scrollTop() > 620) {
      $three.removeClass('moveRight')
    } else {
      $three.addClass('moveRight')
    }
  })
}
