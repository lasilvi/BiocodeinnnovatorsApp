<template>
    <DashBoardAdmin />
    <div class="main-content" style="margin-left: 300px;"> 
      <div class="my-3 p-3 bg-body rounded shadow-sm">
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn" v-on:click="volverAPaginaAnterior()" style="background-color: #6c757d; color: white;">Volver</button>
        </div>

        <div class="row">
          <tr>
            <div v-for="servicio in servicios" :key="servicio.id" class="col-md-4 mb-4">
        <div><p style="font-size: 18px;  font-weight: bold;">{{ servicio.name }}</p></div>
      </div>
          </tr>

      <div v-for="estandar in estandares" :key="estandar.id" class="col-md-4 mb-4">
        <div><p style="font-size: 18px;  font-weight: bold;">{{ estandar.name }}</p></div>
            
      </div>
    </div>
      <form @submit.prevent="submitForm">
     
          <table class="table">
            <thead>
            <tr>
              <th scope="col" style="width: 23%;">Descripción</th>
              <th scope="col" style="width: 23%;">Observación</th>
              <th scope="col" style="width: 10%;">Respuesta</th>
              <th scope="col" style="width: 20%;">Observación auditor</th>
              <th scope="col" style="width: 20%;">Acciones</th>
            </tr>
          </thead>

          <tr>
      <td><input type="text" v-model="nuevoCriterio.description" style="border-radius: .3rem;"></td>
      <td><input type="text" v-model="nuevoCriterio.observation" style="border-radius: .3rem;"></td>
      <td>
        <select v-model="nuevoCriterio.answer" style="border-radius: .3rem;">
          <option value="C">C</option>
          <option value="NC">NC</option>
          <option value="NA">NA</option>
        </select>
      </td>
    
      <td>
          <div class="btn-group" role="group" aria-label="">
               <button type="button" class="btn btn-success" v-on:click="guardarNuevoCriterio">Nuevo Criterio</button>
          </div>
      </td>
    </tr>
            <tr v-for="criterio in criterios" :key="criterio.id">
              <td><input type="text" v-model="criterio.description" style="border-radius: .3rem;"></td>
              <td><input type="text" v-model="criterio.observation" style="border-radius: .3rem;"></td>
              <td><select v-model="criterio.answer" style="border-radius: .3rem; text-align: center;">
                <option value="C">C</option>
                <option value="NC">NC</option>
                <option value="NA">NA</option>
              </select></td>
              <td><input type="text" v-model="criterio.observationAuditor" style="border-radius: .3rem;"></td>
            
           
              <td>
                  <div class="btn-group" role="group" aria-label="">
                    <button @click="mostrarFormularioarchivo(criterio.id)" class="btn btn" style="background-color: #003e4b; color: #F0F0F0;border-top-right-radius:.3rem; border-bottom-right-radius: .3rem;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                        <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                      </svg>
                    </button>
                    &nbsp;
                    <button type="submit" v-on:click="submitForm(criterio)" class="btn btn" style="background-color: #117981; color: #F0F0F0; border-top-right-radius:.3rem; border-bottom-right-radius: .3rem;border-top-left-radius:.3rem; border-bottom-left-radius: .3rem;">Editar</button>
                    &nbsp;
                    <button type="submit" v-on:click="submitForm(criterio)" class="btn btn" style="background-color: #811111; color: #F0F0F0; border-top-right-radius:.3rem; border-bottom-right-radius: .3rem; border-top-left-radius:.3rem; border-bottom-left-radius: .3rem;">Borrar</button>
                </div>
              </td>
              <td>
            
            <form  v-if="mostrarFormulario">
                    <input type="text" class="form-control" v-model="criterio.archivo" name="archivo">
                    <button type="submit" v-on:click="subirArchivo(criterio.id,criterio.archivo) " class="btn btn-secondary">Cargar archivo</button>
            </form>

         </td>
              </tr>
          </table>
          
  </form>
  
    </div >
    <div class="alert alert-success fixed-bottom mx-auto" v-if="mostrarMensaje">{{ mensaje }}</div>

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
    nuevoCriterio: {
      description: "",
      observation: "",
      answer: " ", // Valor por defecto
    },
    mostrarFormulario: false,
    mostrarFormulariocreacion: false,
    selectedestandar: null,
    selectedservicio: null,
    criterioIdMostrado: null,
    criterioid: null,
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
    idCriteria : '',
    archivo: "",
   
   };
 },
 created:function(){
        this.selectedestandar = this.$route.params.ide;
        this.selectedservicio = this.$route.params.ids;
        this.consultarCriterio(this.selectedestandar);
        this.consultarServicio(this.selectedservicio)
        this.consultarEstandar(this.selectedestandar)
        console.log(this.estandares); 

    },
 methods: {
  mostrarFormularioarchivo(criterioid) {
    // Otras lógicas si las hay
    this.mostrarFormulario = true;
    this.criterioIdMostrado = criterioid; 
  },
  volverAPaginaAnterior() {
    this.$router.go(-1); // Navegar hacia atrás en el historial
  },
  mostrarFormularioDeCreacion() {
    // Otras lógicas si las hay
    this.mostrarFormulariocreacion = true;
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