'use strict'


export default function aparitionToCenter () {
  // This element should be a jquery object
  let $two = $('.section-two .box-image')
  let $three = $('.section-three .box-image')
  $two.addClass('moveLeft')
  $three.addClass('moveRight')

  var options = [
    {
      selector: '.section-two .box-image', offset: 180, callback: function() {
        $two.removeClass('moveLeft')
      }
    },
    {
      selector: '.section-three .box-image', offset: 350, callback: function() {
        $three.removeClass('moveRight')
      }
    },
  ]

  Materialize.scrollFire(options)
}
