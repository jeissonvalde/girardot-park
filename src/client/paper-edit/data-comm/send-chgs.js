'use strict'


export default function sendChgs (data, user) {

  $
    .ajax({
      method: 'PUT',
      url: '/api/paper/edit/',
      data: data
    })
    .done(function (res) {
      console.log(`%c Guardado.`, 'color: #3c86e6; font-size: 10px')
    })
    .fail(function (err) {
      console.error(err)
    })
}
