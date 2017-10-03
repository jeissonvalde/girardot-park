'use strict'

import yo from 'yo-yo'


export default function help (opts) {

  return yo`
    <div id="modal_help" name="modal_help" class="modal modal-fixed-footer">
    <!-- Modal Structure -->
      <div class="modal-content">
        <div class="chip">
          <i class="ion-ios-timer-outline"></i>
          Lo lees en 1 minuto
        </div>
        <p>
          La página de inicio está inspirada en el diseño de línea de tiempo,
          cada imagen tendrá un texto de introducción (junto a opiniones de usuarios
          de facebook).
        </p>
        <p>
          Para publicar un artículo, debes llenar el formulario con:<br>
          <span class="blue-text">1. Un título:</span> Que invite a hacer parte del artículo, ej: "Un sitio tranquilo y con estilo moderno, así como te gusta."
          </p>
          <p>
          <span class="brown-text text-darken-1">2. Descripción,</span> <br>
              * primer párrafo: mencionar la funcionalidad y fin, utilizando una comunicación 
              que haga que el leyente imagine que tal fragmento del parque ya existe y lo esté 
              usando ahora mismo.
          </p>
          <p>
              * Segundo parrafo: detallar; aquí se puede escribir lenguaje técnico, explicando la funcionalidad
                de cada elemento y su constitución.
          </p>
          <p>
              * Tercer parrafo: Preguntar al lector, opinión y/o sugerencias.
          </p>
          <p>
            <span class="red-text text-darken-2">3. un video</span> (esto es opcional).
          </p>
          <p>
            <span class="teal-text text-darken-4">4. autor:</span> aparecerá por defecto tu nombre, pero puede ser modificado.
          </p>
          <p>
            <span class="orange-text text-accent-4">5. link de publicación en facebook.</span> Aquí primero publicar la imagen en la página 
            de facebook, y tomar ese link. 
        </p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
      </div>
    </div>
  `
}
