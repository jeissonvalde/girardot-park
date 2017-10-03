'use strict'


import formAdd from '../template/form-add'
import list from '../template/list'


export default function tabs () {
  
  $('.tab.col.s3').on('click', function (ev) {
    let to = $(this).find('a').attr('href')
    let $content = $('#folder-content')
    let $list = $('#listArtsContent')
    let $mainDesign = $('#mainDesign')

    if (to == '#listArts') {
      $content.empty().append($list)
    }

    if (to == '#addArt') {
      $content.empty().append($mainDesign)
    }
  })
}
