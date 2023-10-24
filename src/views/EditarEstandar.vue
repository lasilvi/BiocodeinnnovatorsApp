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
      <td>{{estandar.description}}</td>
      <td>
          <div class="btn-group" role="group" aria-label="">
              <button type="button" v-on:click="EditarEstandares(estandar)" class="btn btn-danger">Editar estándares</button>
          </div>
      </td>
      </tr>
    </div>

   <form @submit.prevent="submitForm">
   <div class="my-3 p-3 bg-body rounded shadow-sm">
   <h6 class="border-bottom pb-2 mb-0">Editar Servicio</h6>
   <div class="d-flex text-body-secondary pt-3">
     <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
     <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
       <div class="d-flex justify-content-between">
         <strong class="text-gray-dark">Nombre</strong>
       </div>
       <div class="form-group">
         <input type="text" placeholder="Nombre" class="form-control" id="nameStandard" v-model="nameStandard" required>
       </div>
     </div>
   </div>
   <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Descripción</strong>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Descripción" class="form-control" id="descriptionStandard" v-model="descriptionStandard" required>
        </div>
      </div>
    </div>
   <input type="text" class="form-control" id="idStandard" v-model="idStandard" required hidden>
   <input type="text" class="form-control" id="serviceIdStandard" v-model="serviceIdStandard" required hidden>
     <small class="d-block text-end mt-3">
       <button type="submit" class="btn btn-primary">Guardar</button>
     </small>
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
    EditarEstandares(estandar) {
      // Establecer el usuario seleccionado y activar el modo de edición
      this.selectedUser = estandar;
      this.editMode = true;
      // Autocompletar los campos con los datos del usuario seleccionado
      this.nameStandard = estandar.name;
      this.descriptionStandard = estandar.description;
      this.idStandard = estandar.id;
      this.serviceIdStandard = estandar.serviceID;
      
      
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

   submitForm() {

     // Envía los datos a la API utilizando fetch
     const operation = "UpdateStandard";
     const tna = 7;
     const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
     

     fetch(
      
       `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&nameStandard=${this.nameStandard}&descriptionStandard=${this.descriptionStandard}&serviceIdStandard=${this.serviceIdStandard}&idStandard=${this.idStandard}&key=${key}`,
       { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
     )
       .then((respuesta) => respuesta.json())
       .then((datosRespuesta) => {
         console.log(datosRespuesta);
         this.consultarEstandares();
       })
       .catch(console.log);

     // Limpia el formulario después de enviar los datos
     this.nameStandard = ' ';
     this.descriptionStandard = ' ';
     this.descriptionStandard = "";
      this.serviceIdStandard = "";
     
     
   },
 },
};

</script>