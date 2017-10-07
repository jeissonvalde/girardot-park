'use strict'

import yo from 'yo-yo'
import formEdit from './form-edit'


export default function template (paper) {

  let temp = yo`
    <div class="paper-content">
      <nav class="breadcrumb-box">
        <div class="nav-wrapper">
          <div class="col s12">
            <a href="/" class="breadcrumb-ref">Principal <i class="ion-ios-arrow-right"></i></a>
            <a href="/user/folder" class="breadcrumb-ref">Tus publicaciones <i class="ion-ios-arrow-right"></i></a>
            <a href="/paper/edit/${paper.exposedId}" target="_self" class="breadcrumb-ref blue-text text-lighten-3">Edición de artículo</a>
          </div>
        </div>
      </nav>


      <div class="row">
        ${formEdit(paper)}
      </div>
    </div>
  `

  return temp
}
