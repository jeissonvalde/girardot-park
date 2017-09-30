'use strict'

import yo from 'yo-yo'
import sectOne from './sect-1'
import sectTwo from './sect-2'
import sectThree from './sect-3'


export default function template () {

  return yo`
    <div class="home-container">
       ${sectOne()}
      <div class="divider home-divider"></div>
       ${sectTwo()}
      <div class="divider home-divider"></div>
       ${sectThree()}
    </div>
  `
}
