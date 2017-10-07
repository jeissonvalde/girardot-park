'use strict'

import yo from 'yo-yo'


export default function template (paper, user) {

  let auth = ''
  let an = ''

  if (user == paper.userId) {
    auth = yo`
      <div class="col s12 m3 center">
        <a href="/paper/edit/${paper.exposedId}" class="btn edit-btn">Editar artículo</a>
      </div>`
    an = 'm9'
  }

  let temp = yo`
    <div class="paper-content">
      <nav class="breadcrumb-box">
        <div class="nav-wrapper">
          <div class="col s12">
            <a href="/" class="breadcrumb-ref">Principal <i class="ion-ios-arrow-right"></i></a>
            <a href="/paper/${paper.exposedId}" target="_self" class="breadcrumb-ref blue-text text-lighten-3">Artículo</a>
          </div>
        </div>
      </nav>
      <div class="row">
          <h4>${paper.title}</h4>
      </div>
      <div class="row">
        ${auth}
        <div class="col s12 ${an}">
          <div class="fb-like" data-href="https://www.facebook.com/Parques-Gir-987208671421660/" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
        </div>
      </div>
      <div class="row">
        <div class="col s12"><img src="" width="400" alt="Imagen principal"></div>
        <div class="col s12" id="paragraph"><p>${paper.description}</p></div>
        <div class="col s12">Fotos adicionales</div>
        <div class="col s12 box-comments"><div data-width="100%" class="fb-comments" data-href="${paper.face_link}" data-numposts="7"></div></div>
      </div>
    </div>
  `

  return temp
}
