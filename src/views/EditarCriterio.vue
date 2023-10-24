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
              <button type="button" v-on:click="consultarCriterio(estandar.id)" class="btn btn-danger">Consultar Criterios</button>
          </div>
      </td>
      </tr>
    </div>
    <div class="my-3 p-3 bg-body rounded shadow-sm">
      <h6 class="border-bottom pb-2 mb-0">Criterios</h6>
      <tr v-for="criterio in criterios" :key="criterio.id">
      <td scope="row">{{ criterio.description }}</td>
      <td>{{criterio.id}}</td>
      <td>
          <div class="btn-group" role="group" aria-label="">
              <button type="button" v-on:click="EditarCriterio(criterio)" class="btn btn-danger">Editar criterios</button>
          </div>
      </td>
      </tr>
    </div>

    <form @submit.prevent="submitForm">
    <div class="my-3 p-3 bg-body rounded shadow-sm">
    <h6 class="border-bottom pb-2 mb-0">Crear Criterios</h6>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Descripción del criterio</strong>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Descripción del criterio" class="form-control" id="descriptionCriteria" v-model="descriptionCriteria" required>
        </div>
      </div>
    </div>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Respuesta</strong>
        </div>
        <div class="form-group">
          <input type="text"  placeholder="Respuesta" class="form-control" id="answerCriteria" v-model="answerCriteria" required>
        </div>
      </div>
    </div>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Observaciones</strong>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Observaciones" class="form-control" id="observationCriteria" v-model="observationCriteria" required>
        </div>
      </div>
    </div>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Servicio</strong>
        </div>
        <div class="form-group">
          <select class="form-select" v-model="serviceIdCriteria" @change="cargarEstandares" required>
            <option value="" disabled>Selecciona un servicio</option>
            <option v-for="servicio in servicios" :value="servicio.id" :key="servicio.id">{{ servicio.name }}</option>
        </select>
        </div>
      </div>
    </div>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Estandar</strong>
        </div>
        <div class="form-group">
          <select class="form-select" v-model="standardIdCriteria" required>
            <option value="" disabled>Selecciona un estandar</option>
            <option v-for="estandar in estandares" :value="estandar.id" :key="estandar.id">{{ estandar.name }}</option>
        </select>
        </div>
      </div>
    </div>
    <input type="text" class="form-control" id="idCriteria" v-model="idCriteria" hidden required >
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
    mensaje: "",
    mostrarMensaje: false,
    servicios: [],
    estandares : [],
    criterios : [],
    descriptionCriteria: '',
    answerCriteria: '',
    observationCriteria: '',
    standardIdCriteria: '',
    serviceIdCriteria: '',
    idCriteria : ''
   
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
    EditarCriterio(criterio) {
      // Establecer el usuario seleccionado y activar el modo de edición
      this.selectedUser = criterio;
      this.editMode = true;
      // Autocompletar los campos con los datos del usuario seleccionado
      this.observationCriteria = criterio.observation;
      this.descriptionCriteria = criterio.description;
      this.answerCriteria = criterio.answer;
      this.serviceIdCriteria = criterio.serviceID;
      this.standardIdCriteria = criterio.standardID;
      this.idCriteria = criterio.id;

      
      
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
    consultarCriterio(estandaId){
            // Envía los datos a la API utilizando fetch
        const operation = "queryCriteriaByStandard";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
        const standardIdCriteria = estandaId;
        
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&standardIdCriteria=${standardIdCriteria}&key=${key}`,
          
          { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
        )
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          const criterios = datosRespuesta.arrayCriteria;
          console.log(criterios); 
          this.criterios = datosRespuesta.arrayCriteria;
        })
        .catch(console.log)
    },

   submitForm() {

     // Envía los datos a la API utilizando fetch
     const operation = "UpdateCriteria";
     const tna = 7;
     const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";

     const  observationCriteria =  this.observationCriteria ;
      const descriptionCriteria = this.descriptionCriteria ;
      const answerCriteria =  this.answerCriteria;
      const serviceIdCriteria = this.serviceIdCriteria ;
      const standardIdCriteria = this.standardIdCriteria ;
      const idCriteria = this.idCriteria;
    

     fetch(
      
       `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&standardIdCriteria=${standardIdCriteria}&serviceIdCriteria=${serviceIdCriteria}&idCriteria=${idCriteria}&observationCriteria=${observationCriteria}&descriptionCriteria=${descriptionCriteria}&answerCriteria=${answerCriteria}&key=${key}`,
       { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
     )
       .then((respuesta) => respuesta.json())
       .then((datosRespuesta) => {
         console.log(datosRespuesta);
         this.consultarEstandares();
       })
       .catch(console.log);

     // Limpia el formulario después de enviar los datos
    this.descriptionCriteria = '',
    this.answerCriteria = '',
    this.observationCriteria = '',
    this.standardIdCriteria =  '',
    this.serviceIdCriteria = '',
    this.idCriteria = ''
     
     
   },
 },
};

</script>