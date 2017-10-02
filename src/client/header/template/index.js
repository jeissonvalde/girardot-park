'use strict'

import yo from 'yo-yo'


export default function template (opts) {

  return yo`
    <div>
      <nav class="pushpin-nav pinned target" data-target="blue" style="top: 0px;">
        <div class="nav-wrapper">
          <a href="#!" class="left brand-logo">Inicio</a>
          <ul class="right">
            <li><a href="sass.html">Contenido</a></li>
            <li><a href="badges.html">Contacto</a></li>
            <!-- Dropdown Trigger -->
            <li><a class="dropdown-button" href="#!" data-activates="dropdown1"><i class="ion-person"></i></a></li>
          </ul>
        </div>
      </nav>

      <!-- Dropdown Structure -->
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="#!">Iniciar sesión</a></li>
        <li><a href="#!">Tus publicaciones</a></li>
        <li><a href="#!">Tu cuenta</a></li>
        <li class="divider"></li>
        <li><a href="#!">Algo más</a></li>
      </ul>
    </div>
  `
}
