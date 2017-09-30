'use strict'


export default function aparitionToCenter () {
  // This element should be a jquery object
  let $two = $('.section-two .box-image')
  let $three = $('.section-three .box-image')

  var options = [
    {
      selector: '.section-two .box-image', offset: 180, callback: function() {
        $two.css({
          'transform': 'translateX(0%)',
          'opacity': '1'
        })
        console.log($(document).scrollTop())
      }
    },
    {
      selector: '.section-three .box-image', offset: 350, callback: function() {
        $three.css({
          'transform': 'translateX(0%)',
          'opacity': '1'
        })
        console.log($(document).scrollTop())
      }
    },
  ]
  Materialize.scrollFire(options)
}
