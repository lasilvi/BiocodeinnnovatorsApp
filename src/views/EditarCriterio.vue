<template>
    <DashBoardAdmin />
    <div class="main-content" style="margin-left: 300px;"> 
      <div class="my-3 p-3 bg-body rounded shadow-sm">
        <div class="d-flex">
          <button type="button" class="btn btn" @click="volverAPaginaAnterior" style="background-color: #6c757d; color: white; margin-left: auto; margin-right: 50px;">Volver</button>
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
      <h6 class="border-bottom pb-2 mb-0">Criterios</h6>
  <table class="table mx-auto">
    <thead>
      <tr>
        <th scope="col" style="width: 20%;">Acciones</th>
        <th scope="col" style="width: 23%;">Descripción</th>
      </tr>
    </thead>

    <!-- Fila para el nuevo criterio -->
    <tr>
      <td>
        <div class="btn-group" role="group" aria-label="">
          <button type="button" class="btn btn-success" v-on:click="guardarNuevoCriterio">Nuevo Criterio</button>
        </div>
      </td>
      <td><input type="text" v-model="nuevoCriterio.description" class="descripcion-input" style="border-radius: .3rem;"></td>
    </tr>

    <!-- Fila para los criterios existentes -->
    <tr v-for="criterio in criterios" :key="criterio.id">
      <td>
        <div class="btn-group" role="group" aria-label="">
          &nbsp;
          <button type="submit" v-on:click="submitForm(criterio)" class="btn btn" style="background-color: #117981; color: #F0F0F0; border-top-right-radius:.3rem; border-bottom-right-radius: .3rem;border-top-left-radius:.3rem; border-bottom-left-radius: .3rem;">Editar</button>
          &nbsp;
          <button @click="borrarCriterio(criterio.id)" class="btn btn" style="background-color: #811111; color: #F0F0F0; border-top-right-radius: .3rem; border-bottom-right-radius: .3rem; border-top-left-radius: .3rem; border-bottom-left-radius: .3rem;">
            Borrar
          </button>
        </div>
      </td>
      <td><input type="text" v-model="criterio.description" class="descripcion-input" style="border-radius: .3rem;"></td>
      <td>
      </td>
    </tr>
  </table>
</form>

    </div >
    <div class="alert alert-success fixed-bottom mx-auto" v-if="mostrarMensaje || mensajeEditado">{{ mostrarMensaje ? mensaje : mensajeEditado }}</div>
   </div>
 </template>
 
 <style scoped>
 .descripcion-input {
   width: 300%; /* o el porcentaje que desees */
   max-width: 500px; /* o el valor absoluto que desees */
 }
</style>

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
      mensajeEditado: "",
    },
  
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

  borrarCriterio(criterioID) {
      const operation = "DeleteCriteria";
      const tna = 7;
      const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
      fetch(
        `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&idCriteria=${criterioID}&key=${key}`,
        { method: "POST" }
      )
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.consultarCriterio(this.selectedestandar);
        })
        .catch(console.log);
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

    this.mensajeEditado = "Editado correctamente";
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

        this.archivo= ""
    }
 },
};
</script>