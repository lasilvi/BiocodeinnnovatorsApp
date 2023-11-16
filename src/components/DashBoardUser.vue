<template>
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">{{dataUser['name']}}</li>
          <li class="nav-item">Usuario</li>

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
    },
  };
  </script>
