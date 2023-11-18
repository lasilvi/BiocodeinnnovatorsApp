<template>
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <span style="font-weight: bold; font-size: larger;">Usuario</span>
            <!-- Close the first li before opening the nested one -->
            </li>
            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded" v-on:click="sessionClose()">Cerrar sesión</a></li>
            <br>
            <span style="font-size: medium;">{{dataUser['name']}}</span>
        </ul>
      </header>
    </div>

  </template>

  <script>
  export default {
    data() {
      return {
        Entidades:[],
        dataUser:{}
      };
    },
    created:function(){
          this.submitForm();
          this.queryLocalStorage(); 
          this.checkSessionAndFetchData();
  
      },
    methods: {
      queryLocalStorage(){
            this.dataUser['name'] = localStorage.getItem('name')
            this.dataUser['userid'] = localStorage.getItem('userid')
            console.log(this.dataUser['name'])
            
    },
    checkSessionAndFetchData() {
    this.queryLocalStorage();

    // Verifica si hay datos de sesión
    if (!this.dataUser.name || !this.dataUser.userid) {
      // Si no hay datos de sesión, muestra un mensaje y redirige a la página de inicio de sesión
      alert('Por favor, inicia sesión.');
      this.$router.push({name:'Login'});
      return; // Detiene la ejecución del método
    }},
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
    }
    },
  };
  </script>
