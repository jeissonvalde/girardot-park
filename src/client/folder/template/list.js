'use strict'

import yo from 'yo-yo'


export default function list (arts) {

  return yo`
    <ul class="collection" id="list_for_arts">
      ${makeList(arts)}
    </ul>
  `
}

function makeList (arr) {


  setTimeout(function () {

    if (arr[0] == undefined) {
      $('#list_for_arts').append(yo`<li id="msg_empty" class="collection-item avatar">
        Aún no has subido ningún artículo. Inténtalo en la pestaña PUBLICAR <i class="ion-arrow-up-c"></i>
        </li>`)

      $('#addArtContent #msg').val('delete')
    } else {

      for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        var temp = yo`
          <li class="collection-item avatar">
            <img src="${el.user.profile_image}" alt="imagen de perfil" class="circle">
            <span class="title hide-on-small-only">${el.title.substr(0, 60)}</span>
            <span class="title hide-on-med-and-up">${el.title.substr(0, 23)}...</span>
            <p>Autor: ${el.user.name}<br>
              <a href="${el.face_link}">Publicación en facebook</a>
            </p>
            <a href="/paper/${el.exposedId}" target="_self" class="secondary-content seeit"><span>Ver</span><i class="ion-ios-paper-outline"></i></a>
            <a href="/paper/edit/${el.exposedId}" class="secondary-content editit"><span>Editar</span><i class="ion-edit"></i></a>
          </li>
        `;

        $('#list_for_arts').append(temp);
      }
    }
  }, 1000)
}
