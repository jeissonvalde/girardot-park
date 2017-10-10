'use strict'

import yo from 'yo-yo'


export default function template (opts) {

  let user = opts.user

  let btnLogin
  if (user.profile_image) {
    btnLogin = yo`<a class="dropdown-button profile-img" href="#"><img src="${user.profile_image}" alt="profile image"></a>`
  } else {
    btnLogin = yo`<a class="waves-effect btn-floating btn-flat" href="#modal_login"><i class="ion-person"></i></a>`
  }

  return yo`
    <div>

      <nav class="pushpin-nav pinned target" data-target="blue" style="top: 0px;">
        <div class="nav-wrapper">
          <a href="/" class="left hide-on-large-only waves-effect btn-floating btn-flat brand-logo"><i class="fa fa-circle-o faa-burst animated"></i><i class="fa ion-ios-home hello-world"></i> </a>
          <a href="/" class="left hide-on-med-and-down waves-effect center btn-floating btn-flat brand-logo"><i class="fa fa-circle-o faa-burst animated"></i><i class="fa ion-ios-home hello-world"></i> </a>
            <!-- Dropdown Structure -->
            <ul id="info-dev" class="dropdown-content info-dev">
              <li>
                <div class="content">
                  <span>Parques Gir 2017 ©</span>
                  <span>Autor: Juan Carlos</span>
                  <span class="author">Desarrollado por: Jeisson Andrés Valderrama</span>
                  <i class="ion-star icon-in  prepare"></i>
                  <i class="ion-earth icon-in  prepare"></i>
                  <i class="ion-social-nodejs icon-in prepare"></i>
                  <i class="ion-social-nodejs icon-in prepare"></i>
                  <i class="ion-social-python icon-in prepare"></i>
                </div>
              </li>
            </ul>
            <i class="ion-android-laptop icon-out prepare"></i>
            <i class="ion-pull-request icon-out prepare"></i>
            <i class="ion-social-github icon-out prepare"></i>
            <i class="ion-social-html5 icon-out prepare"></i>
          <ul class="right">
            <li><a href="sass.html">Contenido</a></li>
            <li><a href="badges.html">Contacto</a></li>
            <!-- Dropdown Trigger -->
            <li>${btnLogin}
              <!-- Dropdown Structure -->
              <ul id="userOptions" class="dropdown-content ready">
                <li><a href="/user/folder">Portafolio</a></li>
                <li class="divider"></li>
                <li><a href="/logout">Cerrar sesión</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  `
}
