<template>
     <DashBoardAdmin />
    <div class="main-content" style="margin-left: 300px;"> 
        <form @submit.prevent="submitForm">
        <div class="my-3 p-3 bg-body rounded shadow-sm"></div>
            <h6 class="border-bottom pb-2 mb-0">Eliminar Usuario</h6>
            <div class="d-flex text-body-secondary pt-3">
                <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div class="d-flex justify-content-between">
                        <strong class="text-gray-dark">Id del usuario</strong>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="userId" v-model="userId" required>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-success">Eliminar</button>
                        <button type="reset" class="btn btn-warning">Borrar</button>
                    </div>              
            </div>
        </div>
    </form>
    </div>
  </template>
  <script>
  import DashBoardAdmin from '@/components/DashBoardAdmin.vue';

  export default {
    components: {
    DashBoardAdmin, // Agrega el componente DashBoardAdmin aquí
  },
    data() {
      return {
        userId: '',
  
      };
    },
    methods: {
      submitForm() {
        // Obtén los valores del formulario
        const userId = this.userId;
        
  
        // Envía los datos a la API utilizando fetch
        const operation = "DeleteUser";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
  
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&userId=${userId}&key=${key}`,
          { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
        )
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
          })
          .catch(console.log);
  
        // Limpia el formulario después de enviar los datos
        this.userId = '';
  
  
       
      },
   },
  };
  </script>