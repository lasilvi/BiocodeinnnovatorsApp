<template>
 <DashBoardAdmin />
   <div class="main-content" style="margin-left: 300px;"> 
    <div class="my-3 p-3 bg-body rounded shadow-sm">
    <div class="d-flex justify-content-between">
        <button type="button" v-on:click="mostrarFormularioDeCreacion()" class="btn btn-success">Nuevo estándar</button>
        <button type="button" class="btn btn" v-on:click="volverAPaginaAnterior()" style="background-color: #6c757d; color: white;">Volver</button>
    </div>
    <br>
    <div class="row">
      <div v-for="servicio in servicios" :key="servicio.id" class="col-md-4 mb-4">  
        <div><p style="font-size: 18px;  font-weight: bold;">{{ servicio.name }}</p></div>
            
      </div>
    </div>
  <h6 class="border-bottom pb-2 mb-0">Estándares</h6>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Descripción</th>
        <th scope="col">Acciones</th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="estandar in estandares" :key="estandar.id">
        <td>{{ estandar.name }}</td>
        <td>{{ estandar.description }}</td>
        <td>
          <div class="btn-group" role="group" aria-label="">
            <a :href="'/EditarCriterio/' + estandar.id + '/' + servicioId" style="background-color: #003e4b; color: #F0F0F0; padding: 10px 20px; text-decoration: none; border: none; border-radius: 5px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></a>
            &nbsp;
            <button type="button" v-on:click="mostrarFormularioDeEdicion(estandar)" class="btn btn" style="background-color: #117981; color: #F0F0F0; border-top-right-radius:.3rem; border-bottom-right-radius: .3rem;border-top-left-radius:.3rem; border-bottom-left-radius: .3rem;">Editar</button>
            &nbsp;
            <button type="button" v-on:click="borrarEstandar(estandar.id)" class="btn btn" style="background-color: #811111; color: #F0F0F0; border-top-right-radius:.3rem; border-bottom-right-radius: .3rem; border-top-left-radius:.3rem; border-bottom-left-radius: .3rem;">Borrar</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
   </div>


      <form @submit.prevent="submitForm" v-if="mostrarFormulario">
      <div class="my-3 p-3 bg-body rounded shadow-sm">
      <h6 class="border-bottom pb-2 mb-0">Editar estándar</h6>
      <div class="d-flex text-body-secondary pt-3">
          <div class="contenedor-icono" style="margin-right: 1%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
              <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </div>
          <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
            <div class="d-flex justify-content-between">
              <strong class="text-gray-dark">Nombre estándar</strong>
            </div>
            <div class="form-group">
              <input type="text" placeholder="Nombre" class="form-control" id="nameStandard" v-model="nameStandard" required>
            </div>
          </div>
      </div>
      <div class="d-flex text-body-secondary pt-3">
        <div class="contenedor-icono" style="margin-right: 1%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
              <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </div>
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
          <button type="submit" class="btn btn" style="background-color: #117981; color: #F0F0F0">Guardar</button>
          &nbsp;
          <button type="button" @click="cancelarFormularioEditarEstandar" class="btn btn" style="background-color: #811111; color: #F0F0F0">Cancelar</button>
        </small>
      </div>
    </form>

    <form @submit.prevent="submitFormestandar" v-if="mostrarFormulariocreacion">
        <div class="my-3 p-3 bg-body rounded shadow-sm">
        <h6 class="border-bottom pb-2 mb-0">Crear Estándar</h6>
        <div class="d-flex text-body-secondary pt-3">
          <div class="contenedor-icono" style="margin-right: 1%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
              <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
            </svg>
          </div>
          <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
            <div class="d-flex justify-content-between">
              <strong class="text-gray-dark">Nombre de estándar</strong>
            </div>
            <div class="form-group">
              <input type="text" placeholder="Nombre del estándar" class="form-control" id="nameStandard" v-model="nameStandard" required>
            </div>
          </div>
        </div>
        <div class="d-flex text-body-secondary pt-3">
          <div class="contenedor-icono" style="margin-right: 1%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
              <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </div>
          <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
            <div class="d-flex justify-content-between">
              <strong class="text-gray-dark">Descripción</strong>
            </div>
            <div class="form-group">
              <input type="text" placeholder="Descripción" class="form-control" id="descriptionStandard" v-model="descriptionStandard" required>
            </div>
          </div>
        </div>
      
          <small class="d-block text-end mt-3">
            <button type="submit" class="btn btnbtn" style="background-color: #117981; color: #F0F0F0">Guardar</button>
            &nbsp;
            <button type="button" @click="cancelarFormularioCrearEstandar" class="btn btn" style="background-color: #811111; color: #F0F0F0">Cancelar</button>
          </small>
        </div>
      </form>
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
    //mensaje
    mensaje: "",
    mostrarMensaje: false ,

    mostrarFormulario: false,
    mostrarFormulariocreacion: false,
    servicioId: null, // Inicializa la propiedad con un valor nulo
    servicios: [],
    estandares: [],
    // Nuevas variables de datos
    selectedservicio: null,
    editMode: false,
    // Otros campos del formulario
    nameStandard: "",
    descriptionStandard: "",
    serviceIdStandard: "",
    idStandard: "",
    archivo: ''
   
   };
 },
 created:function(){
        this.servicioId = this.$route.params.id;
        this.consultarEstandares(this.servicioId),
        this.consultarServicio(this.servicioId)
    },
 methods: {
  // Método para ocultar el formulario de edición
  cancelarFormularioCrearEstandar() {
    this.mostrarFormulariocreacion = false;
    },
  // Método para ocultar el formulario de creación
  cancelarFormularioEditarEstandar() {
    this.mostrarFormulario = false;
    },

  volverAPaginaAnterior() {
    this.$router.go(-1); // Navegar hacia atrás en el historial
  },
  mostrarFormularioDeEdicion(estandar) {
    // Otras lógicas si las hay
    this.EditarEstandares(estandar);
    this.mostrarFormulario = true;
  },
  mostrarFormularioDeCreacion() {
    // Otras lógicas si las hay
    this.mostrarFormulariocreacion = true;
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
     this.consultarEstandares(this.serviceIdStandard)
     this.nameStandard = ' ';
     this.descriptionStandard = ' ';
     this.descriptionStandard = "";
     this.serviceIdStandard = "";
     this.mostrarFormulario = false;
     
   },
   submitFormestandar() {
      // Obtén los valores del formulario
      const nameStandard= this.nameStandard;
      const descriptionStandard= this.descriptionStandard;
      const serviceIdStandard =this.servicioId;

      
      // Envía los datos a la API utilizando fetch
      const operation = "SaveStandard";
      const tna = 7;
      const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";

      fetch(
        `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&key=${key}&nameStandard=${nameStandard}&descriptionStandard=${descriptionStandard}&serviceIdStandard=${serviceIdStandard}`,
        { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
      )
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.consultarEstandares(this.servicioId)
        })
        .catch(console.log);

      // Limpia el formulario después de enviar los datos
      this.nameStandard = ' ';
      this.serviceIdStandard = ' ';
      this.descriptionStandard = ' ';
      this.mostrarFormulariocreacion = false;
     
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
            this.mostrarMensaje = true;
            this.consultarEstandares(this.servicioId)
            this.mensaje = datosRespuesta.message;
            setTimeout(() => {
              this.mostrarMensaje = false;
              this.mensaje = "";
            }, 5000);
            
          })
          .catch(console.log);
  
        // Limpia el formulario después de enviar los datos
        
        this.userId = '';
      },

    
    subirArchivo(event,estandarID) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('urlFile', event.target.elements.archivo.files[0]);

        console.log(formData.get('urlFile'));
        formData.append('fileIdStandard', estandarID);
        // Puedes agregar otros datos al formulario si es necesario
        formData.append('descriptionFile', 'nombre-del-archivo');
        formData.append('nameFile', 'nombre-del-archivo');
        formData.append('fileIdCriteria', '');
        //
        formData.append('operation', 'SaveFile');
        formData.append('tna', 7);
        formData.append('key', 'c94ad623-f583-46ed-b5e0-54f402e83ad0');

        console.log('Datos del formulario:', formData);

        fetch('https://redb.qsystems.co/QS3100/QServlet', {
            method: 'POST',
            body: formData
        })
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          
        })
        .catch(console.log);
    }


 },
};

</script>
<style>
.contenedor-icono svg {
  width: 30px;
  height: 30px;
  color:white;
  background-color: #117981;
  border-top-right-radius: .3rem;
  border-top-left-radius: .3rem;
  border-bottom-right-radius: .3rem;
  border-bottom-left-radius: .3rem;
}
</style>