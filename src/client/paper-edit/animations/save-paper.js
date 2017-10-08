'use strict'

import sendChgs from '../data-comm/send-chgs'


export default function saveChanges (exposedId) {
  // Animations to save a paper changes
  
  $('#editArtContent #inForm').on('click', '.save-btn', function (ev) {
    ev.preventDefault()
    let $form = $(this).closest('#inForm')

    let title = $form.find('#title').val()
    let ref = $form.find('#ref').val()
    let video = $form.find('#video').val()
    let description = $form.find('#description').val()
    let user = $form.find('#user').val()

    let data = {
      title,
      face_link: ref,
      video,
      description,
      user,
      exposedId
    }

    sendChgs(data)
  })
}
