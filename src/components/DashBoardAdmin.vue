<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h4>Biocodeinnovators</h4>
    </div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/CrearUsuario" class="nav-link">
          <i class="fas fa-plus"></i> Crear Usuario
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/EditarUsuario" class="nav-link">
          <i class="fas fa-edit"></i> Editar Usuarios
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/EliminarUsuario" class="nav-link">
          <i class="fas fa-trash"></i> Eliminar Usuarios
        </router-link>
      </li>
    </ul>
  </div>
 

</template>
<script>
export default {
  data() {
    return {
      Entidades:[]
    };
  },
  created:function(){
        this.submitForm();
        

    },
  methods: {
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

