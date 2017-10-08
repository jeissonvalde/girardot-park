'use strict'

import yo from 'yo-yo'


export default function formEdit (p) {

  let temp = yo`
    <div class="row" id="editArtContent">
      <form id="inForm" enctype="multipart/form-data" class="col s12">
        <div class="row">
          <div class="col s12">
            <a href="#header-container" class="waves-effect waves-teal btn-flat right save-btn">Guardar</a>
            <a href="#modal_help" class="waves-effect waves-teal btn-flat right">Ayuda</a>
          </div>
        </div>
        <div class="row">
          <p>
            Edita cualquier campo del artículo. Tienes una <a href="#modal_help">ayuda</a> en caso de necesitar.
            Al subir fotos tienes un límite de max 3 imágenes por artículo.
            <a href="#">Sugierenos</a> tus ideas o necesidades para este editor

          </p>
        </div>
        <div class="row">
          <div class="col s12">
            <a href="#modal_upimg" class="waves-effect waves-light btn edit-btn"><i class="ion-image right"></i> Subir imagen</a>
          </div>
          <div class="col s4 img-main">
            <img src="../../images/1507412589534.png" alt="">
          </div>
          <div class="col s4 img-secon">
            <img src="../../../images/1507412589534.png" alt="">
          </div>
          <div class="col s4 img-final">
            <img src="../../../../images/1507412589534.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="title" type="text" class="validate" value="${p.title}">
            <label class="active" data-error="dato necesario" for="title">Título</label>
          </div>
          <div class="input-field col s6">
            <input id="video" type="text" class="validate" value="${p.video}">
            <label class="active" for="video">Vídeo (link, es opcional)</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="ref" type="text" class="validate" value="${p.face_link}">
            <input id="user" type="hidden" value="${p.userId}">
            <label class="active" data-error="dato necesario" for="ref">Link facebook</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="description" class="materialize-textarea validate">${p.description}</textarea>
            <label class="active" data-error="dato necesario" for="description">Descripción</label>
          </div>
        </div>
        <div class="row">
          <a href="#header-container" class="waves-effect waves-teal btn-flat right save-btn">Guardar</a>
        </div>
      </form>
    </div>
  `


  return temp
}
