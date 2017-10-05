'use strict'

import yo from 'yo-yo'


export default function formNewArt (user) {

  return yo`
    <div class="row" id="addArtContent">
      <form class="col s12" enctype="multipart/form-data">
        <div class="row">
          <div class="col s12">
            <a href="#header-container" class="waves-effect waves-teal btn-flat right save-btn">Guardar</a>
            <a class="waves-effect waves-teal btn-flat right" href="#modal_help">Ayuda</a>
          </div>
        </div>
        <div class="row">
          <p>
            Publica un nuevo artículo, puedes guiarte con la <a href="#modal_help">ayuda</a> que te ofrecemos. Posteriormente a la
            publicación, puedes editar y rediseñar el artículo.
          </p>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="title" type="text" class="validate">
            <label for="title" data-error="dato necesario">Título</label>
          </div>
          <div class="input-field col s6">
            <input id="video" type="text" class="validate">
            <label for="video">Vídeo (link, es opcional)</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="ref" type="text" class="validate">
            <input id="user" type="hidden" class="validate" value="${user.name}">
            <input id="msg" type="hidden" class="validate" value="">
            <label for="ref" data-error="dato necesario">Link facebook</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="description" class="materialize-textarea validate"></textarea>
            <label for="description" data-error="dato necesario">Descripción</label>
          </div>
        </div>
        <div class="row">
          <a href="#header-container" class="waves-effect waves-teal btn-flat right save-btn">Guardar</a>
        </div>
      </form>
    </div>
  `
}
