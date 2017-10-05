'use strict'

export default function init () {

  // Variables

  $('.modal-close').on('click', function (ev) {
    ev.preventDefault()

    $(this).closest('.modal').modal('close')
  })

  $(document).on('scroll', function (ev) {

    // Night and day transition
    if ($(document).scrollTop() > 1350) {
      $('body').css('background-color', '#161C2E')
    }

    if ($(document).scrollTop() < 1351) {
      $('body').css('background-color', '#FFF5F5')
    }

    // brand-logo change icon
    if ($(document).scrollTop() < 100) {
      $('.brand-logo.margin-12-12 i.hello-world').removeClass('ion-ios-home').addClass('ion-code-working faa-tada animated')
    } else {
      $('.brand-logo.margin-12-12 i.hello-world').removeClass('ion-code-working faa-tada animated').addClass('ion-arrow-up-a')
    }
  })
}
