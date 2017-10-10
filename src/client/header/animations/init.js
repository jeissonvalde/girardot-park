'use strict'

import yo from 'yo-yo'


export default function init () {

  // Variables
  let btnUp = yo`<a href="#header-container" class="btn-up btn moveRight"><i class="fa hello-world ion-arrow-up-a faa-vertical animated"></i></a>`

  $('body').append(btnUp)
}
