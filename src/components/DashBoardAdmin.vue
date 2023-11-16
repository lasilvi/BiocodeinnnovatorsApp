<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <span style="font-weight: bold; font-size: larger;">Administrador</span>
          <br>
          <span style="font-size: medium;">{{dataUser['name']}}</span>
        </li>
      </ul>
    </header>
  </div>
  <div class="sidebar" style="background-color: #add8e6;">
    <div class="sidebar-header">
      <h4 style="color: #0000FF;">Biocodeinnovators</h4>
    </div>
    <li class="border-top my-3"></li>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse"
        aria-expanded="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
        </svg>
          Usuarios
        </button>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <ul class="nav flex-column">
              <li>
                <router-link to="/EditarUsuario" class="nav-link">
                  <i class="fas fa-edit"></i> Usuarios
                </router-link>
              </li>
            </ul>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hospital" viewBox="0 0 16 16">
            <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"/>
            <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"/>
          </svg>
           Servicios
        </button>
        <div class="collapse" id="dashboard-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <ul class="nav flex-column">
              <li>
                <router-link to="/EditarServicio" class="nav-link">
                  <i class="fas fa-edit"></i>Servicios
                </router-link>
              </li>
            </ul>
          </ul>
        </div>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
          Cuenta
        </button>
        <div class="collapse" id="account-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded" v-on:click="sessionClose()">Cerrar sesión</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

console.log(localStorage.getItem('name'))
export default {
  data() {
    return {
      Entidades:[],
      dataUser:{}
    };
  },
  created:function(){
    this.queryLocalStorage(); 
        this.submitForm();
        

    },
  methods: {
    queryLocalStorage(){
            this.dataUser['name'] = localStorage.getItem('name')
            this.dataUser['userid'] = localStorage.getItem('userid')
            console.log(this.dataUser['name'])
            
    },
    submitForm() {
    fetch(
      `https://redb.qsystems.co/QS3100/QServlet?operation=queryEntityByTenancy&tna=7&key=c94ad623-f583-46ed-b5e0-54f402e83ad0`,
      { method: "GET" }
    )
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('La solicitud no pudo ser completada correctamente.');
        }
        return respuesta.json(); // Parsea la respuesta JSON
      })
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.Entidades = [];

        if (datosRespuesta && datosRespuesta.valid && Array.isArray(datosRespuesta.arrayEntity)) {
          // Asigna el array de entidades a this.Entidades
          this.Entidades = datosRespuesta.arrayEntity;
        }
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
        // Puedes manejar el error aquí, mostrar un mensaje de error, etc.
      });
  },

  sessionClose(){
      localStorage.clear(),
      this.$router.push({name:'home'});
    },
  },
};
</script>
<style scoped>
.sidebar {
  width: 300px;
  background-color: #333;
  color: white;
  padding: 20px;
}
.sidebar {
  position: fixed;
  left: 0; /* Fija el sidebar al lado izquierdo */
  top: 0;
  height: 100%; /* Haz que el sidebar ocupe toda la altura de la pantalla */
  /* Resto de los estilos... */
}


.sidebar-header {
  margin-bottom: 20px;
  text-align: center;
}

.sidebar h4 {
  margin: 0;
}

.input-group {
  margin-top: 10px;
}
</style>



