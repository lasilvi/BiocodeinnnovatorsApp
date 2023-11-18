<template>
 <DashBoardAdmin />
   <div class="main-content" style="margin-left: 300px;"> 
    <div class="my-3 p-3 bg-body rounded shadow-sm">
    <div class="d-flex justify-content-between">
        <button type="button" v-on:click="mostrarFormularioDeCreacion()" class="btn btn-success">Nuevo</button>
          <button type="button" class="btn btn-primary" v-on:click="volverAPaginaAnterior()">Volver</button>
    </div>
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
        <th scope="col">ID</th>
        <th scope="col">Descripción</th>
        <th scope="col">Acciones</th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="estandar in estandares" :key="estandar.id">
        <td>{{ estandar.name }}</td>
        <td>{{ estandar.id }}</td>
        <td>{{ estandar.description }}</td>
        <td>
          <div class="btn-group" role="group" aria-label="">
            <button type="button" v-on:click="mostrarFormularioDeEdicion(estandar)" class="btn btn-primary">Editar</button>
            <button type="button" v-on:click="borrarEstandar(estandar.id)" class="btn btn-danger">Borrar</button>
            <a :href="'/EditarCriterio/' + estandar.id + '/' + servicioId" style="background-color: yellow; color: black; padding: 10px 20px; text-decoration: none; border: none; border-radius: 5px;">Ver</a>

          </div>
        </td>
      </tr>
    </tbody>
  </table>
   </div>


      <form @submit.prevent="submitForm" v-if="mostrarFormulario">
      <div class="my-3 p-3 bg-body rounded shadow-sm">
      <h6 class="border-bottom pb-2 mb-0">Editar Servicio</h6>
      <div class="d-flex text-body-secondary pt-3">
        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div class="d-flex justify-content-between">
            <strong class="text-gray-dark">Nombre</strong>
          </div>
          <div class="form-group">
            <input type="text" placeholder="Nombre" class="form-control" id="nameStandard" v-model="nameStandard" required>
          </div>
        </div>
      </div>
      <div class="d-flex text-body-secondary pt-3">
          <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
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
          <button type="submit" class="btn btn-primary">Guardar</button>
        </small>
      </div>
    </form>

    <form @submit.prevent="submitFormestandar" v-if="mostrarFormulariocreacion">
        <div class="my-3 p-3 bg-body rounded shadow-sm">
        <h6 class="border-bottom pb-2 mb-0">Crear Estándar</h6>
        <div class="d-flex text-body-secondary pt-3">
          <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
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
          <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
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
            <button type="submit" class="btn btn-primary">Guardar</button>
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