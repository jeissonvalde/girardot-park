'use strict'

import yo from 'yo-yo'
import carouselTemp from './carousel'


export default function sectOne (opts) {

  return yo`
      <div class="row section-one">
        <div class="main-image box-image">
          <div class="col s12 l12 m12">
            ${carouselTemp()}
          </div>
        </div>
      </div>
  `
}
