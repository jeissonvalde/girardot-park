'use strict'


export default function sendChgs (data) {

  $
    .ajax({
      method: 'PUT',
      url: '/api/paper/edit/',
      data: data
    })
    .done(function (res) {
      console.log(`%c ${res.message}.`, 'color: #3c86e6; font-size: 10px')
      Materialize.toast(res.message, 3000)
    })
    .fail(function (err) {
      console.error(err)
      Materialize.toast('Error en el servidor', 3000)
    })
}
