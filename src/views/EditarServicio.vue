<template>
    <DashBoardAdmin />
   <div class="main-content" style="margin-left: 300px;"> 
    <div class="my-3 p-3 bg-body rounded shadow-sm" style="height: 80px;">
      <button type="button" v-on:click="mostrarFormularioDecreacion" class="btn btn-success">Nuevo servicio</button>
    </div>
    
    <div class="my-3 p-3 bg-body rounded shadow-sm">
    <table class="table">
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
            <button type="button" v-on:click="mostrarFormularioDeEdicion(servicio)" class="btn btn" style="background-color: #117981; color: #F0F0F0">Editar</button>
            &nbsp;
            <button type="button" v-on:click="borrarServicio(servicio.id)" class="btn btn" style="background-color: #811111; color: #F0F0F0">Borrar</button>
            &nbsp;
            <a :href="'/EditarEstandar/' + servicio.id" style="background-color: #CBDC3A; color: black; padding: 9px 24px; text-decoration: none; border: none; border-radius: 5px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
   <form @submit.prevent="submitForm" v-if="mostrarFormulario">
   <div class="my-3 p-3 bg-body rounded shadow-sm">
   <h6 class="border-bottom pb-2 mb-0">Editar Servicio</h6>
   <div class="d-flex text-body-secondary pt-3">
    <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
          <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
          <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
        </svg>
      </div>
     <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
       <div class="d-flex justify-content-between">
         <strong class="text-gray-dark">Nombre del servicio</strong>
       </div>
       <div class="form-group">
         <input type="text" placeholder="Nombre" class="form-control" id="nameService" v-model="nameService" required>
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
          <input type="text" placeholder="Descripción" class="form-control" id="descriptionService" v-model="descriptionService" required>
        </div>
      </div>
    </div>
   <input type="text" class="form-control" id="idService" v-model="idService" required hidden>
     <small class="d-block text-end mt-3">
       <button type="submit" class="btn btn" style="background-color: #117981; color: #F0F0F0">Guardar</button>
        &nbsp;
        <button type="button"  class="btn btn" style="background-color: #811111; color: #F0F0F0" >Cancelar</button>
     </small>
   </div>
 </form>

 <form @submit.prevent="submitFormCreacion" v-if="mostrarFormulariocreacion">
    <div class="my-3 p-3 bg-body rounded shadow-sm">
    <h6 class="border-bottom pb-2 mb-0">Crear Servicio</h6>
    <div class="d-flex text-body-secondary pt-3">
      <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
          <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
          <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
        </svg>
      </div>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Nombre del servicio</strong>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Nombre del servicio" class="form-control" id="nameService" v-model="nameService" required>
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
          <input type="text" placeholder="Descripción" class="form-control" id="descriptionService" v-model="descriptionService" required>
        </div>
      </div>
    </div>
      <small class="d-block text-end mt-3">
        <button type="submit" class="btn btn" style="background-color: #117981; color: #F0F0F0" >Guardar</button>
        &nbsp;
        <button type="button"  class="btn btn" style="background-color: #811111; color: #F0F0F0" >Cancelar</button>
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
    mostrarFormulario: false,
    mostrarFormulariocreacion: false,
    servicios: [],
    // Nuevas variables de datos
    selectedservicio: null,
    editMode: false,
    // Otros campos del formulario
    nameService: "",
    descriptionService: "",
    idService: "",
   };
 },
 created:function(){
        this.consultarServicios();
    },
 methods: {
  EditarServicio(servicio) {
      // Establecer el usuario seleccionado y activar el modo de edición
      this.selectedUser = servicio;
      this.editMode = true;
      // Autocompletar los campos con los datos del usuario seleccionado
      this.nameService = servicio.name;
      this.descriptionService = servicio.description;
      this.idService = servicio.id;
      
    },
  mostrarFormularioDeEdicion(servicio) {
    this.EditarServicio(servicio);
    // Otras lógicas si las hay
    this.mostrarFormulario = true;
    this.mostrarFormulariocreacion = false;
    },
    mostrarFormularioDecreacion() {
    // Otras lógicas si las hay
    this.mostrarFormulariocreacion = true;
    this.mostrarFormulario = false;
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
   
   submitForm() {
     // Obtén los valores del formulario
     const nameService = this.nameService;
     const descriptionService= this.descriptionService;
     const idService = this.idService;
    
     // Envía los datos a la API utilizando fetch
     const operation = "UpdateService";
     const tna = 7;
     const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
     const entityIdService = 89;

     fetch(
       `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&key=${key}&nameService=${nameService}&descriptionService=${descriptionService}&idService=${idService}&entityIdService=${entityIdService}`,
       { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
     )
       .then((respuesta) => respuesta.json())
       .then((datosRespuesta) => {
         console.log(datosRespuesta);
         this.consultarServicios();
       })
       .catch(console.log);

     // Limpia el formulario después de enviar los datos
     this.nameService = ' ';
     this.descriptionService = ' ';
     this.mostrarFormulario = false;
     
     
   },
   borrarServicio(id) {
        // Envía los datos a la API utilizando fetch
        const operation = "DeleteService";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
  
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&idService=${id}&key=${key}`,
          { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
        )
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            this.mensaje = datosRespuesta.message;
            this.mostrarMensaje = true;
            console.log(datosRespuesta);
            setTimeout(() => {
              this.mostrarMensaje = false; // Ocultar el mensaje
              this.mensaje = ""; // Limpiar el mensaje
            }, 5000);
   
            this.consultarServicios();
          })
          .catch(console.log);
  
        // Limpia el formulario después de enviar los datos
        this.userId = '';
      },

      submitFormCreacion() {
      // Obtén los valores del formulario
      const nameService= this.nameService;
      const descriptionService= this.descriptionService;
      const entityIdService = 89;
      
      // Envía los datos a la API utilizando fetch
      const operation = "SaveService";
      const tna = 7;
      const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";

      fetch(
        `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&key=${key}&nameService=${nameService}&descriptionService=${descriptionService}&entityIdService=${entityIdService}`,
        { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
      )
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.consultarServicios();
          if (datosRespuesta.arrayEntity) {
            this.mensaje = "servicio registrado exitosamente";
            this.consultarUsuarios();
            this.mostrarMensaje = true;
            
            setTimeout(() => {
              this.mostrarMensaje = false;
              this.mensaje = "";
            }, 5000);
          } 
        })
        .catch(console.log);

      // Limpia el formulario después de enviar los datos
      this.descriptionService = ' ';
      this.nameService = ' ';
      this.mostrarFormulariocreacion = false;
     
    },
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