<template>
    <DashBoardAdmin />
    <div class="main-content" style="margin-left: 300px;"> 
      <div class="my-3 p-3 bg-body rounded shadow-sm">
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-primary" v-on:click="volverAPaginaAnterior()">Volver</button>
        </div>

        <div class="row">
      <div v-for="servicio in servicios" :key="servicio.id" class="col-md-4 mb-4">
        <div><p style="font-size: 18px;  font-weight: bold;">{{ servicio.name }}</p></div>
            
      </div>
    </div>
      <form @submit.prevent="submitForm">
      <table class="table">
          <thead>
            <tr>
              <th scope="col" style="width: 25%;">Estándares</th>
              <th scope="col" style="width: 75%;">Criterios</th>
            </tr>
          </thead>
          <tbody> 
          <td>
            {{ this.selectedestandar }}
          </td>
          <table class="table">
            <thead>
            <tr>
              <th scope="col" style="width: 50%;">Descripción</th>
              <th scope="col" style="width: 25%;">Observación</th>
              <th scope="col" style="width: 25%;">Respuesta</th>
            </tr>
          </thead>

          <tr>
      <td><input type="text" v-model="nuevoCriterio.description"></td>
      <td><input type="text" v-model="nuevoCriterio.observation"></td>
      <td>
        <select v-model="nuevoCriterio.answer">
          <option value="C">C</option>
          <option value="NC">NC</option>
          <option value="NA">NA</option>
        </select>
      </td>
      <td>
        <button  v-on:click="guardarNuevoCriterio" class="btn btn-primary">Nuevo Criterio</button>
      </td>
    </tr>
            <tr v-for="criterio in criterios" :key="criterio.id">
              <td><input type="text" v-model="criterio.description"></td>
              <td><input type="text" v-model="criterio.observation"></td>
              <td><select v-model="criterio.answer">
                <option value="C">C</option>
                <option value="NC">NC</option>
                <option value="NA">NA</option>
              </select></td>
              <td>
                  <div class="btn-group" role="group" aria-label="">
                    <button type="submit" v-on:click="submitForm(criterio)" class="btn btn-danger">Editar</button>
                  </div>
              </td>
              </tr>
          </table>
      </tbody>
    </table>
  </form>
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
    nuevoCriterio: {
      description: "",
      observation: "",
      answer: "C", // Valor por defecto
    },
    mostrarFormulariocreacion: false,
    selectedestandar: null,
    selectedservicio: null,
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
        this.selectedestandar = this.$route.params.ide;
        this.selectedservicio = this.$route.params.ids;
        this.consultarCriterio(this.selectedestandar);
        this.consultarServicio(this.selectedservicio)
        this.consultarEstandar(this.selectedestandar)
    },
 methods: {
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
          this.servicios= datosRespuesta;
          console.log(this.servicios); 
        })
        .catch(console.log)
    },
 },
};

</script>