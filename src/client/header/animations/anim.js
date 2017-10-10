'use strict'



export default function anim () {

  // Variables

  $('.modal-close').on('click', function (ev) {
    ev.preventDefault()

    $(this).closest('.modal').modal('close')
  })

  $(document).on('scroll', function (ev) {

    // Night and day transition
    if ($(document).scrollTop() > 1350) {
      $('body').css('background-color', '#161C2E')
      $('p').css('color', 'white')
    }

    if ($(document).scrollTop() < 1351) {
      $('body').css('background-color', '#FFF5F5')
      $('p').css('color', 'black')
    }

    // brand-logo change icon
    if ($(document).scrollTop() < 100) {
      $('.brand-logo i.hello-world').removeClass('ion-ios-home').addClass('ion-code-working faa-tada animated')
      $('body').find('.btn-up').addClass('moveRight')
      $('.brand-logo').attr({ id: '#btn-info-dev', href: '#info-dev' })
    } else {
      $('.brand-logo i.hello-world').removeClass('ion-code-working faa-tada animated').addClass('ion-ios-home')
      $('body').find('.btn-up').removeClass('moveRight')
      $('.brand-logo').attr({ id: '', href: '/' })
    }
  })


  // User menu
  $('.dropdown-button.profile-img').on('click', function (ev) {
    ev.preventDefault()
    let $umenu = $('#userOptions')

    if ($umenu.hasClass('active')) {
      $umenu.css({
        'transform': 'translateX(150px)'
      })
    } else {
      $umenu.css({
        'transform': 'translateX(0px)'
      })
    }

    $umenu.toggleClass('active')

    $(this).blur(function () {
      $umenu.css({
        'transform': 'translateX(150px)'
      })
      $umenu.removeClass('active')
    })
  })
}
