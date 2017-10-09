'use strict'

import axios from 'axios'
import yo from 'yo-yo'


export default function onsubmit(ev) {
  ev.preventDefault()

  let $form = $(this)
  let $modal = $form.closest('#modal_upimg')
  let $btnAdd = $modal.find('#btnUpload')
  let loading = 'Subiendo... <i class="fa ion-paper-airplane faa-passing animated"></i>'
  let $formEdit = $('#inForm') // Formulario de edición de información
  let place = $form.find('#position').val() // Lugar a reemplazar
  const lastImg = $formEdit.find('.row .col.s4 img')[place].src // obtener imagen anterior para eliminar
  $form.find('#lastImg').val(lastImg)

  let data = new FormData(this)
  $btnAdd.addClass('disabled').html(loading)

  axios
    .post('/upload-image', data)
    .then(function (res) {
      let img = res.data.img
      img.position = place
      console.log(res.data.message)
      $modal.modal('close')
      $btnAdd.removeClass('disabled').html('Agregar')

      if (img.position == 0) {
        let $img = $formEdit.find('.img-main img')
        $img.addClass('quit')

        setTimeout(function () {
          $img.attr('src', img.img[0])
          $img.removeClass('quit')
        }, 1000)
      }

      if (img.position == 1) {
        let $img = $formEdit.find('.img-secon img')
        $img.addClass('quit')

        setTimeout(function () {
          $img.attr('src', img.img[1])
          $img.removeClass('quit')
        }, 1000)
      }

      if (img.position == 2) {
        let $img = $formEdit.find('.img-final img')
        $img.addClass('quit')

        setTimeout(function () {
          $img.attr('src', img.img[2])
          $img.removeClass('quit')
        }, 1000)
      }
    })
    .catch(function (err) {
      console.log(err)
    })
}
