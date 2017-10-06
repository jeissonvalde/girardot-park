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
          <a href="#header-container" class="left hide-on-large-only waves-effect btn-floating btn-flat brand-logo margin-12-12"><i class="fa fa-circle-o faa-burst animated"></i><i class="fa ion-ios-home hello-world"></i> </a>
          <a href="#header-container" class="left hide-on-med-and-down waves-effect center btn-floating btn-flat brand-logo margin-12-12"><i class="fa fa-circle-o faa-burst animated"></i><i class="fa ion-ios-home hello-world"></i> </a>
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
