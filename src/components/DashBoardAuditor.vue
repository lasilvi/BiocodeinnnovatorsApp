<template>
  <!-- <div>
    <label for="usuarios">Seleccionar Usuario:</label>
    <select v-model="usuarioSeleccionado" @change="cargarInformacionUsuario">
      <option v-for="usuario in listaUsuarios" :key="usuario.id" :value="usuario.id">
        {{ usuario.nombre }}
      </option>
    </select>
  </div> -->
  <!-- 
  <div v-if="usuarioSeleccionado"> -->
  <div class="container" style="background-color: white !important; margin-bottom: 15vh;">
    <header data-bs-theme="dark" class="fixed-top mb-4 border-bottom ">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
   <div class="navbar navbar-dark bg-dark shadow-sm">
     <div class="container">
       <a href="#" class="navbar-brand d-flex align-items-center">
        <div><img  src="../assets/img1.png" alt="Card image cap" class="img-fluid" style="max-height: 50px;"></div>
        <div><strong>BioCodeInnovators</strong></div>
       </a>
       <div class="d-flex align-items-center">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse"
              aria-expanded="true" style="color: white;">
              <span style="font-weight: bold; font-size: larger;">Auditor</span>
            </button>
            <div class="collapse" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <span style="font-size: medium; color: white;">{{dataUser['name']}}</span>
                </li>
                <li>
                  <a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded" v-on:click="sessionClose()">Cerrar sesión</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        </div>
       
     </div>
   </div>
  </header> 
   
  </div>
  
      <div class="container-fluid" style="background-color: #003e4b; width: 100%; height: 30vh;" data-aos="zoom-in">
        <img src="../assets/auditor.png" style="height:20vh; margin-left: 30%;">
        <div style="text-align: center; flex: 1; position: absolute; top: 30px; left: 100px; right: 0; ">
          <h1 style="text-align: center; color: #F0F0F0;">Bienvenido auditor</h1>
        </div>
      </div>
      <div class="container" style="background-color: #F0F0F0; margin-top: -10vh; border-radius: 1rem;" data-aos="zoom-in">
        <h1 style="text-align: center; margin-top: 10px;"> No olvides lo que caracteriza a los auditores</h1>
          <div class="wrapper">
              <div class="row justify-content-center">
                  <div class="col-12 col-md-5 col-lg-3">
                    
                      <div class="card card-1" style="margin-top: 10%;">
                          <div class="card-body">
                              
                              <h3 class="mbr-section-subtitle mb-2 display-7 text-center"><strong>Conocimientos</strong></h3>
                              <p class="mbr-text mbr-fonts-style display-7" style="text-align: justify;">
                                Los auditores en salud deben tener un conocimiento sólido de los sistemas de salud, 
                                terminología médica, regulaciones y estándares de la industria.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-5 col-lg-3">
                      <div class="card card-2" style="margin-top: 10%;">
                          <div class="card-body">
                              
                              <h3 class="mbr-section-subtitle mb-2 display-7 text-center"><strong>Técnica y ética profesional</strong></h3>
                              <p class="mbr-text mbr-fonts-style display-7" style="text-align: justify;">
                                Habilidades técnicas en auditoría y contabilidad son esenciales, 
                                junto con altos estándares éticos para garantizar la integridad y confidencialidad de la información.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-5 col-lg-3">
                      <div class="card card-3" style="margin-top: 10%; margin-bottom: 10%;">
                          <div class="card-body">
                              
                              <h3 class="mbr-section-subtitle mb-2 display-7 text-center"><strong>Habilidades analíticas y comunicativas</strong></h3>
                              <p class="mbr-text mbr-fonts-style display-7" style="text-align: justify;">
                                Los auditores deben ser capaces de analizar datos complejos, 
                                identificar problemas y comunicar hallazgos de manera efectiva a diversas partes interesadas.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-5 col-lg-3">
                      <div class="card card-4" style="margin-top: 10%;">
                          <div class="card-body">
                              
                              <h3 class="mbr-section-subtitle mb-2 display-7 text-center"><strong>Adaptabilidad y mejora continua</strong></h3>
                              <p class="mbr-text mbr-fonts-style display-7" style="text-align: justify;">
                                La capacidad para adaptarse a cambios en el entorno de la salud, mantenerse 
                                actualizado en regulaciones y buscar constantemente mejoras en eficiencia y calidad son aspectos clave.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container" style="background-color: white !important; " data-aos="zoom-in">
      <div class="p-5 mb-4 rounded-3">
        <div class="container-fluid py-5">
          <div style="display: flex;">
            <!-- Tabla de servicios -->
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
                <td style="text-align: justify;">{{ servicio.description }}</td>
                <td>
                  <button type="button" v-on:click="consultarEstandares(servicio.id)" class="btn btn" style="background-color: 
                      #003e4b; color: #F0F0F0;" @click="selectedServiceName = servicio.name">Ver estándares</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Tabla de estándares -->
        <div v-if="mostrarEstandares">
          <div v-if="estandares.length > 0">
            <h2>Estandares ({{ selectedServiceName }})</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="estandar in estandares" :key="estandar.id">
                <td>{{ estandar.name }}</td>
                <td>
                  <div class="btn-group" role="group" aria-label="">
                    <button type="button" v-on:click="mostrar(estandar.id)" class="btn btn" style="background-color: #003e4b; color: #F0F0F0; border-top-right-radius: .3rem; border-bottom-right-radius: .3rem;"
                    @click=" selectedStandardName = estandar.name"> Ver criterios </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                  <button type="button" @click="cancelarEstandar" class="btn btn" style="background-color: #811111; color: #F0F0F0; margin-right: 130px;">Cancelar</button>
          </div>
        </div>
      </div>
        
          <!-- Formulario de criterios -->
          <form @submit.prevent="submitForm" v-if="mostrarEstandaresCriterios">
            <div v-if="mostrarEstandaresCriterios">
              <h2>Criterios ({{ selectedStandardName }})</h2> 
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" style="width: 20%;">Descripción</th>
                    <th scope="col" style="width: 20%;">Observación del usuario</th>
                    <th scope="col" style="width: 5%;">Respuesta</th>
                    <th scope="col" style="width: 30%;">Observación auditor</th>
                    <th scope="col" style="width: 5%;">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="criterio in criterios" :key="criterio.id">
                    <td>{{ criterio.description }}</td>
                    <td>{{ criterio.observation }}</td>
                    <td>{{ criterio.answer }}</td>
                    <td><input type="text" v-model="criterio.observationCriteriaAuditor" placeholder="Escriba aqui su observación" style="width: 100%; height: 100%;"></td>
                    <td>
                      <div class="btn-group" role="group" aria-label="">
                        <button type="submit" v-on:click="agregarcomentario(criterio)" class="btn btn" style="background-color: #20c2b4; color: #F0F0F0; border-top-right-radius: .3rem; border-bottom-right-radius: .3rem;">Agregar observación</button>
                        &nbsp;
                        <button type="submit" v-on:click="consultarArchivos(criterio.id)" class="btn btn" style="background-color: #003e4b; color: #F0F0F0; border-top-right-radius: .3rem; border-bottom-right-radius: .3rem; border-top-left-radius: .3rem; border-bottom-left-radius: .3rem;">Ver anexos</button>
                      </div>
                    </td>
                  </tr> 
                </tbody>
              </table>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <small class="d-flex justify-content-end mt-3">
                  <button type="submit" class="btn btn me-md-2" style="background-color: #117981; color: #F0F0F0">Guardar</button>
                  &nbsp;
                  <button type="button" @click="cancelarFormulario" class="btn btn" style="background-color: #811111; color: #F0F0F0">Cancelar</button>
                </small>
              </div>
            </div>
          </form>
          </div>
        <div>
          
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
  </div>
  
    <!-- </div> -->
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
  import AOS from 'aos';
  import 'aos/dist/aos.css';
    export default {
      data() {
        return {
          listaUsuarios: [],
          usuarioSeleccionado: null,
          selectedServiceName: null,
          selectedStandardName:null,
          dataUser:{},
          servicios: [],
          archivos: [],
          estandares : [],
          criterios : {},
          mostrarEstandaresCriterios: false,
          mostrarEstandares: false,
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
  
        cargarInformacionUsuario() {
      // Verifica que se haya seleccionado un usuario
      if (!this.usuarioSeleccionado) {
        return;
      }
  
      // Llama a los métodos existentes para cargar la información relacionada con el usuario seleccionado
      this.consultarServicios(); // Ajusta según tu lógica existente
      this.consultarEstandares(this.usuarioSeleccionado); // Ajusta según tu lógica existente
      // ... otros métodos necesarios ...
    },
        mostrarCuadroFlotante() {
        this.mostrarurl = true;
      },
      ocultarCuadroFlotante() {
        this.mostrarurl = false;
      },
      cancelarFormulario() {
        this.mostrarEstandaresCriterios = false;
      },
      cancelarEstandar() {
        this.mostrarEstandares= false;
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
          this.selectedStandardName = estandar.name;
          this.mostrarEstandares=true;
          this.mostrarEstandaresCriterios = true;
      },
  
      obtenerListaUsuarios() {
          // Envía los datos a la API utilizando fetch
          const operation = "queryUserByEntity";
          const tna = 7;
          const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
          const userEntityId = 89;
          fetch(
            `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&userEntityId=${userEntityId}&key=${key}`,
            
            { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
          )
          .then(respuesta=>respuesta.json())
          .then((datosRespuesta)=>{
            const usuarios = datosRespuesta.arrayUser;
            console.log(usuarios); 
            this.usuarios = datosRespuesta.arrayUser;
          })
          .catch(console.log)
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
          this.mostrarEstandares=true;
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
              this.mensaje = "Comentario registrado";
              
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
      mounted() {
      AOS.init();
    }
    };
    </script>