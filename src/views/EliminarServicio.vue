<template>
    <DashBoardAdmin />
    <div class="main-content" style="margin-left: 300px; " > 
    <div class="my-3 p-3 bg-body rounded shadow-sm">
     <tr v-for="servicio in servicios" :key="servicio.id">
      <td scope="row">{{servicio.id}}</td>
      <td>{{servicio.name}}</td>
      
      <td>
          <div class="btn-group" role="group" aria-label="">
              <button type="button" v-on:click="borrarServicio(servicio.id)" class="btn btn-danger">Borrar</button>
          </div>
      </td>
   
        </tr>

   </div>
   <div class="alert alert-success fixed-bottom mx-auto" v-if="mostrarMensaje">
      {{ mensaje }}
    </div>
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
        mensaje: "",
        userId: '',
        servicios: [],
        mostrarMensaje: false,
      };
    },
    created:function(){
        this.consultarUsuarios();
    },
    methods: {
      consultarUsuarios(){
                // Envía los datos a la API utilizando fetch
        const operation = "queryServiceByEntity";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
        const entityIdService = 89;
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&entityIdService=${entityIdService}&key=${key}`,
          
          { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
        )
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          const servicios = datosRespuesta.arrayService;
          console.log(servicios); 
          this.servicios = datosRespuesta.arrayService;
        })
        .catch(console.log)
    },

    borrarServicio(id) {
        // Envía los datos a la API utilizando fetch
        const operation = "DeleteService";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
  
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&idService=${id}&key=${key}`,
          { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
        )
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            this.mensaje = datosRespuesta.message;
            this.mostrarMensaje = true;
            console.log(datosRespuesta);
            setTimeout(() => {
              this.mostrarMensaje = false; // Ocultar el mensaje
              this.mensaje = ""; // Limpiar el mensaje
            }, 5000);
   
            this.consultarUsuarios();
          })
          .catch(console.log);
  
        // Limpia el formulario después de enviar los datos
        this.userId = '';
      },
   },
  };
  </script>