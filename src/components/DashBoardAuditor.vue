<template>
  <div class="container" style="background-color: white !important; ">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <span style="font-weight: bold; font-size: larger;">Usuario Auditor</span>
          <br>
          <span style="font-size: medium;"><strong>{{dataUser['name']}}</strong></span>
          <br>
          <a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded" v-on:click="sessionClose()">Cerrar sesión</a>
        </li>
      </ul>
    </header>

    <div class="p-5 mb-4 rounded-3">
      <div class="container-fluid py-5">
        <div style="display: flex;">
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
                <button type="button" v-on:click="consultarEstandares(servicio.id)" class="btn btn" style="background-color: 
#003e4b; color: #F0F0F0;">Ver estandares</button>
              </td>
            </tr>
          </tbody>
        </table>
        <td>
          <tr v-for="estandar in estandares" :key="estandar.id">
            <td >{{ estandar.name }}</td> 
            <td>  
              <div class="btn-group" role="group" aria-label="">
                <button type="button" v-on:click="mostrar(estandar.id)" class="btn btn" style="background-color: #003e4b; color: #F0F0F0; border-top-right-radius: .3rem; border-bottom-right-radius: .3rem;"> criterios </button>
              </div>
            </td>
          </tr>
        </td>
      </div>

        <form @submit.prevent="submitForm" v-if="mostrarEstandaresCriterios">
          <div v-if="mostrarEstandaresCriterios">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" style="width: 20%;">Descripción</th>
                  <th scope="col" style="width: 20%;">Observación</th>
                  <th scope="col" style="width: 5%;">Respuesta</th>
                  <th scope="col" style="width: 30%;">Observación auditores</th>
                  <th scope="col" style="width: 5%;">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="criterio in criterios" :key="criterio.id">
                  <td>{{ criterio.description }}</td>
                  <td>{{ criterio.observation }}</td>
                  <td>{{ criterio.answer }}</td>
                  <td><input type="text" v-model="criterio.observationCriteriaAuditor" placeholder="Escriba aqui su observación" style="width: 300px; height: 100px;"></td>
                  <td>
                    <div class="btn-group" role="group" aria-label="">
                      <button type="submit" v-on:click="agregarcomentario(criterio.id)" class="btn btn" style="background-color: #20c2b4; color: #F0F0F0; border-top-right-radius: .3rem; border-bottom-right-radius: .3rem;">Agregar Observación</button>
                      &nbsp;
                      <button type="submit" v-on:click="consultarArchivos(criterio.id)" class="btn btn" style="background-color: #003e4b; color: #F0F0F0; border-top-right-radius: .3rem; border-bottom-right-radius: .3rem; border-top-left-radius: .3rem; border-bottom-left-radius: .3rem;">Ver anexos</button>
                    </div>
                  </td>
                </tr> 
                <small class="d-flex justify-content-end mt-3">
                  <button type="submit" class="btn btn" style="background-color: #117981; color: #F0F0F0">Guardar</button>
                  &nbsp;
                  <button type="button" class="btn btn" style="background-color: #811111; color: #F0F0F0">Cancelar</button>
                </small>
              </tbody>
            </table>
          </div>
   

        </form>
          
        </div>
    </div>
    
    <div>
    <button @click="mostrarCuadroFlotante">Mostrar Información</button>
    <div v-if="mostrarurl">
      <!-- Contenido del cuadro flotante -->
      <div class="cuadro-flotante">
        <p>Los enlaces de los archivos</p>
        <tr v-for="link in archivos" :key="link.id">
            <td>{{ link.link }}</td>
        </tr>
        <button @click="ocultarCuadroFlotante">Cerrar</button>
      </div>
      <!-- Fondo oscuro para el cuadro flotante -->
      <div class="fondo-cuadro-flotante" @click="ocultarCuadroFlotante"></div>
    </div>
    </div>

  </div>
    <div class="alert alert-success fixed-bottom mx-auto" v-if="mostrarMensaje">{{ mensaje }}</div>
  </template>
<style scoped>
.cuadro-flotante {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(214, 64, 64);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.fondo-cuadro-flotante {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.my-container {
  background-color: white !important;
}
</style>

  <script>
  export default {
    data() {
      return {
        dataUser:{},
        servicios: [],
        archivos: [],
        estandares : [],
        criterios : {},
        mostrarEstandaresCriterios: false,
        descriptionCriteria: '',
        answerCriteria: '',
        observationCriteria: '',
        standardIdCriteria: '',
        serviceIdCriteria: '',
        idCriteria : '',
        mensaje: "",
       mostrarMensaje: false ,
       mostrarurl: false,
       
      };
    },
    created:function(){
      this.queryLocalStorage(); 
        this.consultarServicios();
        this.checkSessionAndFetchData();
    },

    methods: {
      mostrarCuadroFlotante() {
      this.mostrarurl = true;
    },
    ocultarCuadroFlotante() {
      this.mostrarurl = false;
    },
      sessionClose(){
      localStorage.clear(),
      this.$router.push({name:'home'});
    },
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
    mostrar(estandar) {
        // Otras lógicas si las hay
        this.consultarCriterio(estandar);
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
        this.mostrarEstandaresCriterios = false;
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
    consultarArchivos(criterioId){
            // Envía los datos a la API utilizando fetch
        const operation = "queryFileByCriteria";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
        const fileIdCriteria = criterioId;
        
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&fileIdCriteria=${fileIdCriteria}&key=${key}`,
          
          { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
        )
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          const archivos = datosRespuesta.arrayFiles;
          console.log(archivos); 
          this.archivos = datosRespuesta.arrayFiles;
          this.mostrarurl = true;
        })
        .catch((error) => {
        console.error('Error al procesar la respuesta:', error);
      });
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
    agregarcomentario(criterio) {

      // Envía los datos a la API utilizando fetch
      const operation = "UpdateCriteria";
      const tna = 7;
      const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";

      const observationCriteria = criterio.observation;
      const observationCriteriaAuditor = criterio.observationCriteriaAuditor;
      const descriptionCriteria = criterio.description;
      const answerCriteria = criterio.answer;
      const serviceIdCriteria = criterio.serviceID;
      const standardIdCriteria = criterio.standardID;
      const idCriteria = criterio.id;

      console.log(observationCriteria);
      console.log(observationCriteriaAuditor);
      console.log(descriptionCriteria);
      console.log(idCriteria);
      console.log(standardIdCriteria);
      console.log(answerCriteria);
      console.log(idCriteria);
      

      fetch(
      
        `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&observationCriteriaAuditor=${observationCriteriaAuditor}&standardIdCriteria=${standardIdCriteria}&serviceIdCriteria=${serviceIdCriteria}&idCriteria=${idCriteria}&observationCriteria=${observationCriteria}&descriptionCriteria=${descriptionCriteria}&answerCriteria=${answerCriteria}&key=${key}`,
        { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
      )
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          if (datosRespuesta.criteriaVO) {
            this.mensaje = "comentario registrado";
            
            this.mostrarMensaje = true;
            
            setTimeout(() => {
              this.mostrarMensaje = false;
              this.mensaje = "";
            }, 5000);
          }
          else {
            // Si no se encuentra la clave userVO en la respuesta, muestra un mensaje de error
            this.mensaje = "Hubo un error al guardar el comentario.";
            this.mostrarMensaje = true;
            
            setTimeout(() => {
              this.mostrarMensaje = false;
              this.mensaje = "";
            }, 5000);
          }
          console.log(datosRespuesta);
          this.consultarCriterio(this.selectedestandar);
        })
        .catch(console.log);

      },
    },
  };
  </script>