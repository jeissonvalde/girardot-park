'use strict'

import yo from 'yo-yo'


export default function login (opts) {

  return yo`
    <div id="modal_login" name="modal_login" class="modal modal-fixed-footer">
    <!-- Modal Structure -->
      <div class="modal-content">
        <div class="row">
          <h4>Comparte tus opiniones</h4>
          <span>Solo necesitas iniciar sesión en facebook y refrescar la página, para comentar.<br>
                Si lo que deseas es publicar en nuestra plataforma, registrate (únicamente con facebook)
                luego escribenos tu idea y cómo te gustaría que la reflejaramos.</span>
        </div>
        <div class="row valign-wrapper center-align">
          <a href="/auth/facebook" class="waves-effect waves-teal btn-floating btn-flat blue">
            <i class="ion-social-facebook"></i>
            <span>Ingresar</span>
          </a>
        </div>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
      </div>
    </div>
  `
}
