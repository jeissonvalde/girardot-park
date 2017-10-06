'use strict'

import yo from 'yo-yo'


export default function sectThree (opts) {

  return yo`
      <div class="row section-three">
        <div class="row box-image">
          <div class="col s12 l8 m6">
            <img class="materialboxed" src="http://materializecss.com/images/sample-1.jpg">
          </div>
          <div class="col s12 l4 m6">
            <div class="intro-container info-pub">
              <h5>La tranquilidad para una tarde en familia</h5>
              <p>
                Entre las personas que llegan para estar, 
                las familiar son más comunes en este sitio, por ende, la
                iluminación debe ser un factor que de vida aquí en las noches...
                <br>
                <a href="#" class="waves-effect waves-teal btn-flat btn-more-info">Ver completo <i class="ion-ios-paper-outline"></i></a>
              </p>
            </div>
          </div>
        </div>
      </div>
  `
}
