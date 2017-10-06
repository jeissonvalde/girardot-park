'use strict'

import yo from 'yo-yo'
import sectOne from './sect-1'
import sectTwo from './sect-2'
import sectThree from './sect-3'


export default function template () {

  return yo`
    <div class="home-container">
      <nav class="breadcrumb-box">
        <div class="nav-wrapper">
          <div class="col s12">
            <a class="breadcrumb-ref blue-text text-lighten-3">Principal</a>
          </div>
        </div>
      </nav>
       ${sectOne()}
      <div class="divider home-divider"></div>
       ${sectTwo()}
      <div class="divider home-divider"></div>
       ${sectThree()}
    </div>
  `
}
