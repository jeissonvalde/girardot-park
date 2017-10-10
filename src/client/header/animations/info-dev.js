'use strict'


export default function boxInfo (ev) {

  $('.brand-logo').on('click', function (ev) {
    if ($(this).attr('href') == '#info-dev') {
      ev.preventDefault()

      let $infoDev = $('#info-dev')
      let arrIn = $infoDev.find('.content .icon-in')
      let arrOut = $infoDev.closest('.nav-wrapper').find('.icon-out')

      if ($infoDev.hasClass('show')) {
        // Tiene show class, entonces ocultar
        $infoDev.removeClass('show')
        for (var i = 0; i < arrIn.length; i++) {
          var el = arrIn[i]

          $(el).addClass(`i${i}`).addClass('prepare')
        }

        for (var i = 0; i < arrOut.length; i++) {
          var el = arrOut[i]

          $(el).addClass(`j${i}`).addClass('prepare')
        }
      } else {
        // Si no está mostrando la caja de información
        $infoDev.addClass('show')
        for (var i = 0; i < arrIn.length; i++) {
          var el = arrIn[i]
          $(el).addClass(`i${i}`).removeClass('prepare')
        }

        for (var i = 0; i < arrOut.length; i++) {
          var el = arrOut[i]
          $(el).addClass(`j${i}`).removeClass('prepare')
        }
      }
    }


    $(this).blur(function () {
      // Ocultar por desenfocar
      $infoDev.removeClass('show')
      for (var i = 0; i < arrIn.length; i++) {
        var el = arrIn[i]

        $(el).addClass(`i${i}`).addClass('prepare')
      }

      for (var i = 0; i < arrOut.length; i++) {
        var el = arrOut[i]

        $(el).addClass(`j${i}`).addClass('prepare')
      }
    })
  })



}
