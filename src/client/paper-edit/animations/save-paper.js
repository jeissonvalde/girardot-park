'use strict'

import sendChgs from '../data-comm/send-chgs'


export default function saveChanges () {
  // Animations to save a paper changes
  
  $('#editArtContent form').on('click', '.save-btn', function (ev) {
    ev.preventDefault()
    let $form = $(this).closest('form')

    let title = $form.find('#title').val()
    let ref = $form.find('#ref').val()
    let video = $form.find('#video').val()
    let desc = $form.find('#description').val()
    let user = $form.find('#user').val()

    let data = {
      title: title,
      face_link: ref,
      video: video,
      description: desc,
      user: user
    }

    sendChgs(data)
  })
}
