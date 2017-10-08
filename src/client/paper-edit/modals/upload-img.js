'use strict'

import yo from 'yo-yo'
import imgForm from '../template/form-add-img'


export default function uploadImg (id) {

  return yo`
    <div id="modal_upimg" name="modal_upimg" class="modal modal-fixed-footer">
    <!-- Modal Structure -->
      <div class="modal-content">

        ${imgForm(id)}

      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
      </div>
    </div>
  `
}
