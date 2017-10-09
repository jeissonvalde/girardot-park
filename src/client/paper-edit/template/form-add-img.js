'use strict'

import yo from 'yo-yo'
import onsubmit from '../data-comm/add-img'


export default function formAddImg (exId) {

  let temp = yo`
      <form id="imgForm" enctype="multipart/form-data" class="col s12" onsubmit=${onsubmit}>

        <div class="row">
          <div class="file-field input-field">
            <div class="waves-effect waves-light btn edit-btn">
              <span>Escoger imagen</span>
              <input type="file" id="file" name="picture">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
              <input value="${exId}" id="exposedId" name="exposedId" type="hidden">
              <input value="" id="lastImg" name="lastImg" type="hidden">
            </div>
          </div>
          <div class="input-field col s12">
            <select id="position" name="position">
              <option value="0">Introducción (principal)</option>
              <option value="1">Conclusión (penúltima)</option>
              <option value="2">Conclusión (última)</option>
            </select>
            <label>Ubicación en el artículo</label>
          </div>
        </div>

        <div class="row">
          <button id="btnUpload" type="submit" class="waves-effect waves-teal btn-flat right upimg-btn blue white-text">Agregar</button>
        </div>
      </form>
  `

  return temp
}
