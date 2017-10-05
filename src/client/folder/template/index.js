'use strict'

import yo from 'yo-yo'
import list from './list'
import formNewArt from './form-add'

// El tab se mueve con las propiedades TranslateX() y z-index

export default function template (data) {

  return yo`
    <div class="folder-container row">
      <ul id="tabs-swipe-demo" class="tabs">
        <li class="tab col s6"><a class="active" href="#listArts">Artículos</a></li>
        <li class="tab col s6"><a href="#formAdd">Publicar</a></li>
      </ul>
      <div id="listArts" class="col s12">${list(data.arts)}</div>
      <div id="formAdd" class="col s12">${formNewArt(data.user)}</div>
    </div>
  `
}
