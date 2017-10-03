'use strict'

import yo from 'yo-yo'


export default function formNewArt (opts) {

  return yo`
    <div class="row" id="addArtContent">
      <form class="col s12">
        <div class="row">
          <div class="col s12">
            <a class="waves-effect waves-teal btn-flat right">Guardar</a>
            <a class="waves-effect waves-teal btn-flat right" href="#modal_help">Ayuda</a>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="title" type="text" class="validate">
            <label for="title">Título</label>
          </div>
          <div class="input-field col s6">
            <input id="user" type="text" class="validate">
            <input id="userId" type="hidden" class="validate">
            <label for="user">Autor</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="video" type="text" class="validate">
            <label for="video">Vídeo (link de cualquier plataforma)</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="ref" type="text" class="validate">
            <label for="ref">Link facebook</label>
          </div>
          <div class="input-field col s12">
            <input id="description" type="text" class="validate">
            <label for="description">Descripción</label>
          </div>
        </div>
        <div class="row">
          <a class="waves-effect waves-teal btn-flat right">Guardar</a>
        </div>
      </form>
    </div>
  `
}
