<template>
    <DashBoardAdmin />
    <div class="main-content" style="margin-left: 300px;"> 
      <div class="my-3 p-3 bg-body rounded shadow-sm">
     <tr v-for="servicio in servicios" :key="servicio.id">
      <td scope="row">{{servicio.id}}</td>
      <td>{{servicio.name}}</td>
      <td>
          <div class="btn-group" role="group" aria-label="">
              <button type="button" v-on:click="consultarEstandares(servicio.id)" class="btn btn-danger">Consultar estándares</button>
          </div>
      </td>
      </tr>
   </div>
   <div class="my-3 p-3 bg-body rounded shadow-sm">
      <h6 class="border-bottom pb-2 mb-0">Estándares</h6>
      <tr v-for="estandar in estandares" :key="estandar.id">
      <td scope="row">{{ estandar.name }}</td>
      <td>{{estandar.id}}</td>
      <td>
        <div class="btn-group" role="group" aria-label="">
              <button type="button" v-on:click="borrarEstandar(estandar.id)" class="btn btn-danger">Borrar</button>
          </div>
      </td>
      </tr>
   </div>
   <div class="mensaje">{{ mensaje }}</div>
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
    servicios: [],
    estandares: [],
    // Nuevas variables de datos
    selectedservicio: null,
    editMode: false,
    // Otros campos del formulario
    nameStandard: "",
    descriptionStandard: "",
    serviceIdStandard: "",
    idStandard: ""
   
   };
 },
 created:function(){
        this.consultarServicios();
    },
 methods: {
  consultarServicios(){
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
    consultarEstandares(serviceId){
            // Envía los datos a la API utilizando fetch
        const operation = "queryStandardByService";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
        const serviceIdStandard = serviceId;
        
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&serviceIdStandard=${serviceIdStandard}&key=${key}`,
          
          { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
        )
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          const estandares = datosRespuesta.arrayStandard;
          console.log(estandares); 
          this.estandares = datosRespuesta.arrayStandard;
        })
        .catch(console.log)
    },
    borrarEstandar(id) {
        // Envía los datos a la API utilizando fetch
        const operation = "DeleteStandard";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
  
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&idStandard=${id}&key=${key}`,
          { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
        )
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
            
            this.consultarServicios();
            this.mensaje = datosRespuesta.message;
          })
          .catch(console.log);
  
        // Limpia el formulario después de enviar los datos
        this.userId = '';
      },
   },
  };
  </script>