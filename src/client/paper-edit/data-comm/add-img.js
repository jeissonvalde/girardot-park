'use strict'

import axios from 'axios'
import yo from 'yo-yo'


export default function onsubmit(ev) {
  ev.preventDefault()

  // let data = new FormData(this)
  // axios
  //   .post('/upload-image', data)
  //   .then(function (res) {
  //     console.log(res.data)
  //   })
  //   .catch(function (err) {
  //     console.log(err)
  //   })

  let $modal = $(this).closest('#modal_upimg')

  let $btnAdd = $modal.find('#btnUpload')
  let $btnClose = $modal.find('.modal-close')
  let loading = 'Subiendo... <i class="fa ion-paper-airplane faa-passing animated"></i>'

  $btnAdd.addClass('disabled')
  $btnAdd.html(loading)

  setInterval(function () {}, 2000)
}
