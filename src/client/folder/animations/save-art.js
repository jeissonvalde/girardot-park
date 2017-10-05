'use strict'

import sendArt from '../data-comm/send-art'


export default function saveArt (ev) {


  $('#addArtContent form').on('click', '.save-btn', function (ev) {
    ev.preventDefault()
    let $form = $(this).closest('form.col.s12')
    let valid = 'Todo bien'

    let title = $form.find('#title').val()
    let ref = $form.find('#ref').val()
    let desc = $form.find('#description').val()

    if (title == '') {
      $form.find('#title').addClass('invalid')
      valid = 'Mal'
    }

    if (ref == '') {
      $form.find('#ref').addClass('invalid')
      valid = 'Mal'
    }

    if (desc == '') {
      $form.find('#description').addClass('invalid')
      valid = 'Mal'
    }

    if (valid == 'Todo bien') {
      let data = {
        title: $form.find('#title').val(),
        face_link: $form.find('#ref').val(),
        video: $form.find('#video').val(),
        description: $form.find('#description').val()
      }

      let user = {
        name: $form.find('#user').val(),
        profile_image: $('.dropdown-button.profile-img img').attr('src')
      }

      sendArt(data, user)
    }
  })
}
