'use strict'

import yo from 'yo-yo'


export default function sendArt (data, user) {

  $
    .ajax({
      method: 'POST',
      url: '/user/folder/add-paper',
      data: data
    })
    .done(function (data) {
      console.log(`%c Almacenado`, 'color: #3c86e6; font-size: 10px')
      console.log(`%c ${data}`, 'color: green; font-size: 10px')

      let newId = 'li_' + Math.floor((Math.random() * 20) + 6)
      let $form = $('#addArtContent')
      $('ul.tabs').tabs('select_tab', 'listArts')

      let temp = yo`
        <li id="${newId}" class="collection-item avatar" style="background-color: #EF6C35; transition: all .8s ease;">
          <img src="${user.profile_image}" alt="imagen de perfil" class="circle">
          <span class="title">${data.title.substr(0, 38)}</span>
          <p>Autor: ${user.name}<br>
            <a href="${data.face_link}">Publicación en facebook</a>
          </p>
          <a href="#!" class="secondary-content seeit"><span>Ver</span><i class="ion-ios-paper-outline"></i></a>
          <a href="#!" class="secondary-content editit"><span>Editar</span><i class="ion-edit"></i></a>
        </li>
      `

      $('#list_for_arts').prepend(temp)
      $form.find('#title').val('')
      $form.find('#ref').val('')
      $form.find('#video').val('')
      $form.find('#description').val('')

      if ($form.find('#msg').val() == 'delete') {
        $form.find('#title').val('')
        $('#list_for_arts #msg_empty').remove()
      }

      setTimeout(function () {
        $(`#${newId}`).css({'background-color': '#ffffff'})
      }, 800)
    })
    .fail(function (err) {
      console.error(err)
    })
}
