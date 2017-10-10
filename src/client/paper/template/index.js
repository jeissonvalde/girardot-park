'use strict'

import yo from 'yo-yo'


export default function template (paper, user) {

  let auth = ''
  let an = ''
  let main, prefinal, final

  if (user == paper.userId) {
    auth = yo`
      <div class="col s12 m3 center">
        <a href="/paper/edit/${paper.exposedId}" class="btn edit-btn">Editar artículo</a>
      </div>`
    an = 'm9'
  }

  for (var i = 0; i < paper.img.length; i++) {
    var el = paper.img[i]

    if (i == 0 && el != 0) {
      main = yo`<div class="col s12 center"><img src="${el}" width="500" alt="Imagen principal"></div>`
    }

    if (i == 1 && el != 1) {
      prefinal = yo`<div class="col s12 center"><img src="${el}" width="500" alt="Concluision"></div>`
    }

    if (i == 2 && el != 2) {
      final = yo`<div class="col s12 center"><img src="${el}" width="500" alt="Concluision"></div>`
    }
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
      <div class="row row-title">
          <h4>${paper.title}</h4>
      </div>
      <div class="row">
        ${auth}
        <div class="col s12 ${an}">
          <div class="fb-like" data-href="https://www.facebook.com/Parques-Gir-987208671421660/" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
        </div>
      </div>
      <div class="row">
        ${main}
        <div class="col s12" id="paragraph"><p>${paper.description}</p></div>
        ${prefinal}
        ${final}
        <div class="col s12 box-comments"><div data-width="100%" class="fb-comments" data-href="${paper.face_link}" data-numposts="7"></div></div>
      </div>
    </div>
  `

  return temp
}
