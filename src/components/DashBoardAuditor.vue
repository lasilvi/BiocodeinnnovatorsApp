<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <ul class="nav nav-pills">
        <li class="nav-item">Auditor</li>
      </ul>
    </header>

    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">

        <table class="table table-no-background">
          <thead>
            <tr>
              <th scope="col" style="width: 25%;">Nombre</th>
              <th scope="col" style="width: 50%;">Descripción</th>
              <th scope="col" style="width: 25%;">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="servicio in servicios" :key="servicio.id">
              <td >{{ servicio.name }}</td>
              <td>{{ servicio.description }}</td>
              <td>
                <button type="button" v-on:click="mostrar(servicio.id)" class="btn btn-success">Ver</button>
              </td>
            </tr>
          </tbody>
        </table>

        <form @submit.prevent="submitForm" v-if="mostrarEstandaresCriterios">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" style="width: 20%;">Nombre del estandar</th>
                  <th scope="col" style="width: 30%;">Descripción</th>
                  <th scope="col" style="width: 20%;">Observación</th>
                  <th scope="col" style="width: 5%;">Respuesta</th>
                  <th scope="col" style="width: 20%;">Observación auditores</th>
                  <th scope="col" style="width: 5%;">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(criteriosEstandar, estandarId) in criterios" :key="estandarId">
              <tr v-for="criterio in criteriosEstandar" :key="criterio.id">
              <td>{{ criterio.standardName}}</td>
              <td>{{criterio.description}}</td>
              <td>{{ criterio.observation }}</td>
              <td>
                {{ criterio.answer }}
              </td>
              <td><input type="text" v-model="criterio.observationCriteriaAuditor"></td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                  <button type="submit" v-on:click="submitForm(criterio)" class="btn btn-danger">Agregar Obsevración</button>
                </div>
              </td>
            </tr>
          </template>
                  
                  
               
              </tbody>
            </table>
   

          </form>
          
        </div>
    </div>
    </div>
  </template>


  <script>
  export default {
    data() {
      return {
        servicios: [],
        estandares : [],
        criterios : {},
        mostrarEstandaresCriterios: false,
      };
    },
    created:function(){
        this.consultarServicios();
    },
    methods: {
    mostrar(servicio) {
        // Otras lógicas si las hay
        this.consultarEstandares(servicio);
        this.mostrarEstandaresCriterios = true;
    },
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

          // Inicializa la variable de criterios
        this.criterios = [];

          // Itera sobre los estándares y consulta los criterios asociados
          estandares.forEach((estandar) => {
            this.consultarCriterio(estandar.id);
          });
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
          
          this.criterios[estandaId] = criterios;
          console.log(criterios); 
        })
        .catch(console.log)
    },
    agregarcomentario(criterio) {

      // Envía los datos a la API utilizando fetch
      const operation = "UpdateCriteria";
      const tna = 7;
      const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";

      const observationCriteria = criterio.observation;
      const observationCriteriaAuditor = criterio.observationCriteriaAuditor;
      const descriptionCriteria = criterio.description;
      const answerCriteria = criterio.answer;
      const serviceIdCriteria = this.selectedservicio;
      const standardIdCriteria = this.selectedestandar;
      const idCriteria = criterio.id;


      fetch(
      
        `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&observationCriteriaAuditor=${observationCriteriaAuditor}&standardIdCriteria=${standardIdCriteria}&serviceIdCriteria=${serviceIdCriteria}&idCriteria=${idCriteria}&observationCriteria=${observationCriteria}&descriptionCriteria=${descriptionCriteria}&answerCriteria=${answerCriteria}&key=${key}`,
        { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
      )
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.consultarCriterio(this.selectedestandar);
        })
        .catch(console.log);


      },
    },
  };
  </script>