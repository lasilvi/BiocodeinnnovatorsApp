<template>
        <!-- Agrega una nueva sección para la ventana flotante -->
        <div v-if="mostrarVentanaFlotanteArchivos" class="ventana-flotante">
        <h3>Archivos</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Seleccionar</th>
              <th scope="col">Nombre del Archivo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="archivo in archivos" :key="archivo.id">
              <td>
                <input type="checkbox" v-model="archivo.seleccionado" />
              </td>
              <td>{{ archivo.name }}</td>
            </tr>
          </tbody>
        </table>
        <button @click="borrarArchivos" class="btn btn-danger">Borrar Archivos Seleccionados</button>
      </div>
  <div class="background-container" style="background-color: white !important; ">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <span style="font-weight: bold; font-size: larger;">Usuario</span>
          <br>
          <span style="font-size: medium;"><strong>{{dataUser['name']}}</strong></span>
          <br>
          <a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded" v-on:click="sessionClose()">Cerrar sesión</a>
        </li>
      </ul>
    </header>
    <h1 style="text-align: center;">Bienvenido usuario</h1>
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
              <td style="text-align: justify;">{{ servicio.description }}</td>
              <td>
                <button type="button" v-on:click="consultarEstandares(servicio.id)" class="btn btn" style="background-color: 
                    #003e4b; color: #F0F0F0;">Ver estandares</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>

        <!-- Nueva sección para mostrar los estándares -->
        <div v-if="estandares.length > 0">
        <h2>Estandares</h2>
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
                  <button type="button" v-on:click="mostrarCriterios(estandar.id)" class="btn btn" style="background-color: #003e4b; color: #F0F0F0; border-top-right-radius: .3rem; border-bottom-right-radius: .3rem;"> Ver criterios </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Fin de la nueva sección -->

        <form @submit.prevent="submitForm" v-if="mostrarEstandaresCriterios">
          <div v-if="mostrarEstandaresCriterios">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" style="width: 20%;">Descripción</th>
                  <th scope="col" style="width: 5%;">Respuesta</th>
                  <th scope="col" style="width: 30%;">Observación usuario</th>
                  <th scope="col" style="width: 5%;">Archivos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="criterio in criterios" :key="criterio.id">
                  <td>{{ criterio.description }}</td>
                  <td>
                    <!-- Utiliza una lista desplegable para la respuesta -->
                    <select v-model="criterio.respuestaSeleccionada">
                      <option value="C">C</option>
                      <option value="NC">NC</option>
                      <option value="NA">NA</option>
                    </select>
                </td>
                  <td><input type="text" v-model="criterio.observationCriteriaAuditor" placeholder="Escriba aquí su observación" style="width: 100%; height: 100%;"></td>
                  <td>
                  <div class="btn-group" role="group" aria-label="">
                    <button @click="mostrarFormularioarchivo(criterio.id)" class="btn btn" style="background-color: #003e4b; color: #F0F0F0;border-top-right-radius:.3rem; border-bottom-right-radius: .3rem;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                        <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                      </svg>
                    </button>
                    <td>
                      <button @click="mostrarArchivos(criterio.id)" class="btn btn" style="background-color: #003e4b; color: #F0F0F0;">
                        Ver Archivos
                      </button>
                    </td>
                </div>
              </td>
              <td>
                <form  v-if="mostrarFormulario">
                        <input type="text" class="form-control" v-model="criterio.archivo" name="archivo">
                        <button type="submit" v-on:click="subirArchivo(criterio.id,criterio.archivo) " class="btn btn-secondary">Cargar archivo</button>
                </form>
              </td>
              </tr> 
              </tbody>
            </table>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <small class="d-flex justify-content-end mt-3">
                <button type="submit" class="btn btn me-md-2" style="background-color: #117981; color: #F0F0F0">Guardar</button>
                &nbsp;
                <button type="button" @click="cerrarFormulario" class="btn btn" style="background-color: #811111; color: #F0F0F0">Cancelar</button>
              </small>
            </div>
          </div>
        </form>
        </div>
    </div>
    <!-- Agrega una nueva sección para la ventana flotante -->
    <div v-if="mostrarVentanaFlotanteArchivos" class="ventana-flotante">
      <button @click="cerrarVentanaFlotante" class="cerrar-btn" style="position: absolute; top: 10px; right: 10px;">×</button>
      <h3>Archivos</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Seleccionar</th>
            <th scope="col">Nombre del Archivo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="archivo in archivos" :key="archivo.id">
            <td>
              <input type="checkbox" v-model="archivo.seleccionado" />
            </td>
            <td>{{ archivo.name }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="borrarArchivos" class="btn btn-danger">Borrar archivos</button>
    </div>
  </div>
  <div class="alert alert-success fixed-bottom mx-auto" v-if="mostrarMensaje">{{ mensaje }}</div>
</template>


<style scoped>
.ventana-flotante {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  z-index: 1000;
  border: 1px solid #ccc;
}
.cerrar-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #555;
  background-color: transparent;
  border: none;
}

.background-container {
    background-image: url('@/assets/usuario-removebg-preview.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw; /* 100% del ancho de la ventana */
    height: 100vh;
    position:  absolute;
    top: 0;
    left: 0;
    z-index:-1;
  }
</style>

  <script>
  export default {
    data() {
      return {
        mostrarVentanaFlotanteArchivos: false,
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
       mostrarFormulario: false,
       seleccionarTodos: false,
       
      };
    },
    created:function(){
      this.queryLocalStorage(); 
        this.consultarServicios();
        this.checkSessionAndFetchData();
    },

    methods: {
      cerrarFormulario() {
        // Cierra el formulario estableciendo la variable en false
        this.mostrarEstandaresCriterios = false;
      },
      cerrarVentanaFlotante() {
        // Aquí puedes realizar cualquier lógica adicional antes de cerrar la ventana flotante
        // Por ejemplo, limpiar datos o realizar alguna acción específica

        // Luego, simplemente establece la variable mostrarVentanaFlotanteArchivos en falso para ocultar la ventana flotante
        this.mostrarVentanaFlotanteArchivos = false;
      },
      mostrarArchivos(criterioId) {
        this.consultarArchivos(criterioId);
        this.mostrarVentanaFlotanteArchivos = true;
      },
      seleccionarTodosArchivos() {
        this.archivos.forEach((archivo) => (archivo.seleccionado = this.seleccionarTodos));
      },

      borrarArchivos() {
        const archivosSeleccionados = this.archivos.filter((archivo) => archivo.seleccionado);

        if (archivosSeleccionados.length === 0) {
          alert("Selecciona al menos un archivo para borrar.");
          return;
        }

        const operation = "DeleteFile";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";

        archivosSeleccionados.forEach((archivo) => {
          const fileId = archivo.id;
          fetch(
            `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&idFile=${fileId}&key=${key}`,
            { method: "POST" }
          )
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
              console.log(datosRespuesta);
              // Actualiza la lista de archivos después de borrar
              this.archivos = this.archivos.filter((a) => a.id !== fileId);
            })
            .catch(console.log);
        });

        // Cierra la ventana flotante después de borrar los archivos
        this.mostrarVentanaFlotanteArchivos = false;
      },
      submitForm(criterio) {
      // Envía los datos a la API utilizando fetch
      const operation = "UpdateCriteria";
      const tna = 7;
      const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";

      const observationCriteria = criterio.observation;
      const descriptionCriteria = criterio.description;
      const answerCriteria = criterio.answer;
      const serviceIdCriteria = this.selectedservicio;
      const standardIdCriteria = this.selectedestandar;
      const idCriteria = criterio.id;
      fetch(
        `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&standardIdCriteria=${standardIdCriteria}&serviceIdCriteria=${serviceIdCriteria}&idCriteria=${idCriteria}&observationCriteria=${observationCriteria}&descriptionCriteria=${descriptionCriteria}&answerCriteria=${answerCriteria}&key=${key}`,
        { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
      )
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.consultarCriterio(this.selectedestandar);
        })
        .catch(console.log);
      // Limpia el formulario después de enviar los datos
      this.descriptionCriteria = '',
      this.answerCriteria = '',
      this.observationCriteria = '',
      this.standardIdCriteria =  '',
      this.serviceIdCriteria = '',
      this.idCriteria = ''
      this.mostrarFormulario = true;
      },
      mostrarFormularioarchivo(criterioid) {
        // Otras lógicas si las hay
        this.mostrarFormulario = true;
        this.criterioIdMostrado = criterioid; 
      },
      mostrarCriterios(estandar) {
        // Otras lógicas si las hay
        this.consultarCriterio(estandar);
        this.mostrarEstandaresCriterios = true;
      },
      sessionClose(){
        localStorage.clear(),
        this.$router.push({name:'home'});
      },
      guardarNuevoCriterio() {
        // Obtén los valores del formulario
        const descriptionCriteria = this.nuevoCriterio.description;
        const answerCriteria = this.nuevoCriterio.answer;
        const observationCriteria = this.nuevoCriterio.observation;
        // Otras propiedades necesarias
        const standardIdCriteria = this.selectedestandar; // Asegúrate de que esta propiedad esté definida y tenga el valor correcto.
        const serviceIdCriteria = this.selectedservicio; // Asegúrate de que esta propiedad esté definida y tenga el valor correcto.
        // Envía los datos a la API utilizando fetch
        const operation = "SaveCriteria";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&descriptionCriteria=${descriptionCriteria}&answerCriteria=${answerCriteria}&observationCriteria=${observationCriteria}&standardIdCriteria=${standardIdCriteria}&serviceIdCriteria=${serviceIdCriteria}&key=${key}`,
          { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
        )
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
            this.consultarCriterio(this.selectedestandar)
            if (datosRespuesta && datosRespuesta.criteriaVO) {
              this.mensaje = "Criterio registrado exitosamente";
            } else {
              this.mensaje = "Criterio no registrado";
            }
            this.mostrarMensaje = true;
            setTimeout(() => {
              this.mostrarMensaje = false; // Ocultar el mensaje
              this.mensaje = ""; // Limpiar el mensaje
            }, 5000);

            // Limpia el formulario de creación
            this.nuevoCriterio.description = "";
            this.nuevoCriterio.answer = "C";
            this.nuevoCriterio.observation = "";
          },
          )
          .catch(console.log);
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
    consultarServicio(servicioId){
      const operation = "queryServiceById";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
        const idService = servicioId;
        
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&idService=${idService}&key=${key}`,
          
          { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
        )
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          this.servicios= datosRespuesta.arrayService;
          console.log(this.servicios); 
        })
        .catch(console.log)
    },
  consultarEstandar(estandarId){
      const operation = "queryStandardById"; 
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
        const idStandard = estandarId;
        
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&idStandard=${idStandard}&key=${key}`,
          
          { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
        )
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          this.estandares= datosRespuesta.arrayStandard;
          console.log(this.estandares); 
        })
        .catch(console.log)
    },
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
    consultarArchivos(criterioId) {
      const operation = "queryFileByCriteria";
      const tna = 7;
      const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
      const fileIdCriteria = criterioId;

      fetch(
        `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&fileIdCriteria=${fileIdCriteria}&key=${key}`,
        { method: "GET" }
      )
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          const archivos = datosRespuesta.arrayFiles;
          console.log(archivos);
          // Actualiza la lista de archivos en la propiedad archivos
          this.archivos = archivos;
          // Muestra la ventana flotante o modal con los archivos
          // Puedes agregar aquí la lógica para mostrar la ventana flotante
          // o un componente modal con los archivos.
          // También puedes utilizar una biblioteca como BootstrapVue para modales.
          // Ejemplo: this.mostrarVentanaFlotanteArchivos = true;
        })
        .catch((error) => {
          console.error("Error al procesar la respuesta:", error);
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
          { method: "GET" }
        )

        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
        const criterios = datosRespuesta.arrayCriteria.map((criterio) => ({
          id: criterio.id,
          description: criterio.description,
          answer: criterio.answer,
          observationCriteriaAuditor: criterio.observationCriteriaAuditor,
          // Agrega una propiedad para manejar la respuesta seleccionada
          respuestaSeleccionada: "",
        }));
          this.criterios = criterios;
          console.log(criterios); 
          
        })
        .catch(console.log)
    },

    agregarcomentario(criterio) {

      // Envía los datos a la API utilizando fetch
      const operation = "UpdateCriteria";
      const tna = 7;
      const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";

      const observationCriteriaAuditor = criterio.observationCriteriaAuditor;
      const descriptionCriteria = criterio.description;
      const answerCriteria = criterio.answer;
      const serviceIdCriteria = criterio.serviceID;
      const standardIdCriteria = criterio.standardID;
      const idCriteria = criterio.id;

      console.log(observationCriteriaAuditor);
      console.log(descriptionCriteria);
      console.log(idCriteria);
      console.log(standardIdCriteria);
      console.log(answerCriteria);
      console.log(idCriteria);
      

      fetch(
      
        `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&observationCriteriaAuditor=${observationCriteriaAuditor}&standardIdCriteria=${standardIdCriteria}&serviceIdCriteria=${serviceIdCriteria}&idCriteria=${idCriteria}&descriptionCriteria=${descriptionCriteria}&answerCriteria=${answerCriteria}&key=${key}`,
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
      subirArchivo(criterioID,archivo) {
        const operation = "SaveFile";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
        const nameFile = 'nombre-del-archivo';
        const urlFile = archivo;
        const descriptionFile = "descripcion"
        const fileIdCriteria =  criterioID      
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&nameFile=${nameFile}&key=${key}&urlFile=${urlFile}&descriptionFile=${descriptionFile}&fileIdCriteria=${fileIdCriteria}`,
          
          { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
        )
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);

          this.mensaje = "Archivo cargado correctamente";
          this.mostrarMensaje = true;
            setTimeout(() => {
              this.mostrarMensaje = false;
              this.mensaje = "";
            }, 5000);
          
        })
        .catch((error) => {
        console.error('Error al procesar la respuesta:', error);
      });

        this.mostrarFormulario = false;
        this.archivo= ""
      }
    },
  };
  </script>