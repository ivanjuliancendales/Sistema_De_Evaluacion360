<template>
  <div>
    <!-- Nav bar -->
    <nav
      class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        
        <h2 class="text-white">Sistema de Evaluación 360º</h2>

        <!-- Componente Bootstrap "List group"-->
        <ul class="nav navbar-nav flex-row justify-content-sm-end">

          <li class= "nav-item col-md-10">
            <router-link class="nav-link pr-3" to="/"
              >¿Qué es la Evaluación 360º?</router-link>
          </li>

          <li class="nav-item col-md-10">
            <router-link class="nav-link pr-3" to="/create"
              >Ingrese Evaluación</router-link>
          </li>

          <li class="nav-item col-md-10">
            <router-link class="nav-link" to="/view"
              >Visualice Evaluaciones</router-link>
          </li>

          <li class="nav-item col-md-10">
            <router-link class="nav-link" to="/report"
              >Reporte de Evaluación</router-link>
          </li>

        </ul>
        <!-- Fin Componente Bootstrap "List group"-->

        <!-- Botón de Contacto. href es un comando que busca el id bottom que esta ubicado en la línea 59.
        Lo que esta entre comillas después de class crea el botón y su color -->
        <!-- <button class="btn btn-success navbar-btn">Contacto</button> -->
        <a class="btn btn-success navbar-btn" href="#bottom">Contacto</a>

      </div>
    </nav>
    <!-- fin pie de la barra para navegación -->

    <!-- Router view --> <!-- Sirve para insertar las vistas que genera cada componente -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>

    <br><br><br><br><br>

    <div>
      <!-- Inicio pie del sitio -->
      <!-- <footer class="container-lg footer-section"> -->
      <footer class="bg-dark ">
        <div class="row justify-content-space-evenly">
              <article class="text-white col-12 offset-md-1 col-md-5">
                  <h2>Contacto</h2>

                  <p>© Iván Julián Cendales Montenegro, 2021</p>
                  <p>Mision TIC 2022 / UTP / Ciclo 3 / Ruta 2 / Grupo 60</p>
              </article>
              <article class="text-white col-12 offset-md-1 col-md-5">
                  <h2>Correo</h2>
                  
                  <p>ivanjuliancendales@hotmail.com</p>
              </article>

              <div id="bottom"></div>

          </div>
      </footer>
      <!-- fin pie del sitio -->
    </div>

  </div>

</template>
