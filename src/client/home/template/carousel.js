'use strict'

import yo from 'yo-yo'


export default function carouselTemp (opts) {

  return yo`
    <div class="carousel">
      <a class="carousel-item" href=""><img src="https://lorempixel.com/250/250/nature/1"></a>
      <a class="carousel-item" href=""><img src="https://lorempixel.com/250/250/nature/2"></a>
      <a class="carousel-item" href=""><img src="https://lorempixel.com/250/250/nature/3"></a>
      <a class="carousel-item" href=""><img src="https://lorempixel.com/250/250/nature/4"></a>
      <a class="carousel-item" href=""><img src="https://lorempixel.com/250/250/nature/5"></a>
    </div>
  `
}
