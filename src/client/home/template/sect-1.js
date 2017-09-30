'use strict'

import yo from 'yo-yo'


export default function sectOne (opts) {

  return yo`
      <div class="row section-one">
        <div class="main-image box-image">
          <div class="col s12 l8 m6">
            <img class="materialboxed" src="http://materializecss.com/images/sample-1.jpg">
          </div>
          <div class="col l4 m6 hide-on-small-only comments-container"></div>
        </div>
      </div>
  `
}
