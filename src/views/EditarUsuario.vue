<template>
    <DashBoardAdmin />
   <div class="main-content" style="margin-left: 300px;"> 
    <div class="my-3 p-3 bg-body rounded shadow-sm"><button type="button" v-on:click="mostrarFormularioDecreacion" class="btn btn-primary">Crear Usuario</button></div>
    
    <div class="my-3 p-3 bg-body rounded shadow-sm">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Documento</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.document }}</td>
          <td>
            <div class="btn-group" role="group" aria-label="">
              <button type="button" v-on:click="mostrarFormularioDeEdicion(usuario)" class="btn btn-primary">Editar</button>
              <button type="button" v-on:click="borrarUsuario(usuario.id)" class="btn btn-danger">Borrar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-success fixed-bottom mx-auto" v-if="mostrarMensaje">
      {{ mensaje }}
    </div>
   </div>
   <form @submit.prevent="submitForm" v-if="mostrarFormulario">
   <div class="my-3 p-3 bg-body rounded shadow-sm">
   <h6 class="border-bottom pb-2 mb-0">Editar Usuario</h6>
   <div class="d-flex text-body-secondary pt-3">
     <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
     <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
       <div class="d-flex justify-content-between">
         <strong class="text-gray-dark">Nombre</strong>
       </div>
       <div class="form-group">
         <input type="text" placeholder="Nombre" class="form-control" id="nameEntity" v-model="nameUser" required>
       </div>
     </div>
   </div>
   <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Nombre de usuario</strong>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Nombre de usuario" class="form-control" id="nickname" v-model="nickname" required>
        </div>
      </div>
    </div>
   <div class="d-flex text-body-secondary pt-3">
     <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
     <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
       <div class="d-flex justify-content-between">
         <strong class="text-gray-dark">Contraseña</strong>
       </div>
       <div class="form-group">
         <input type="password" placeholder="Contraseña" class="form-control" id="phoneEntity" v-model="passwordUser" required>
       </div>
     </div>
   </div>
   <div class="d-flex text-body-secondary pt-3">
     <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
     <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
       <div class="d-flex justify-content-between">
         <strong class="text-gray-dark">Documento</strong>
       </div>
       <div class="form-group">
           <input type="text" placeholder="Documento" class="form-control" id="phoneEntity" v-model="documentUser" required>
       </div>
     </div>
   </div>
   <div class="d-flex text-body-secondary pt-3">
     <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
     <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
       <div class="d-flex justify-content-between">
         <strong class="text-gray-dark">Posición</strong>
       </div>
       <div class="form-group">
           <input type="text" placeholder="Posición" class="form-control" id="phoneEntity" v-model="positionUser" required>
       </div>
     </div>
   </div>
   <div class="d-flex text-body-secondary pt-3">
     <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
     <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
       <div class="d-flex justify-content-between">
         <strong class="text-gray-dark">Telefono</strong>
       </div>
       <div class="form-group">
           <input type="text" placeholder="Telefono" class="form-control" id="phoneEntity" v-model="phoneUser" required>
       </div>
     </div>
   </div>
   <input type="text" class="form-control" id="userId" v-model="userId" required hidden>
   <input type="text" class="form-control" id="userType " v-model="userType" required hidden>
   
     <small class="d-block text-end mt-3">
       <button type="submit" class="btn btn-primary">Guardar</button>
     </small>
   </div>
 </form>

 <form @submit.prevent="submitFormUsuario" v-if="mostrarFormulariocreacion">
    <div class="my-3 p-3 bg-body rounded shadow-sm">
    <h6 class="border-bottom pb-2 mb-0">Crear Usuario</h6>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Nombre</strong>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Nombre" class="form-control" id="nameEntity" v-model="nameUser" required>
        </div>
      </div>
    </div>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Nombre de usuario</strong>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Nombre de usuario" class="form-control" id="nickname" v-model="nickname" required>
        </div>
      </div>
    </div>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Contraseña</strong>
        </div>
        <div class="form-group">
          <input type="password" placeholder="Contraseña" class="form-control" id="passwordUser" v-model="passwordUser" required>
        </div>
      </div>
    </div>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Documento</strong>
        </div>
        <div class="form-group">
            <input type="text" placeholder="Documento" class="form-control" id="documentUser" v-model="documentUser" required>
        </div>
      </div>
    </div>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Posición</strong>
        </div>
        <div class="form-group">
            <input type="text" placeholder="Posición" class="form-control" id="positionUser" v-model="positionUser" required>
        </div>
      </div>
    </div>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Telefono</strong>
        </div>
        <div class="form-group">
            <input type="text" placeholder="Telefono" class="form-control" id="phoneUser" v-model="phoneUser" required>
        </div>
      </div>
    </div>
    <div class="d-flex text-body-secondary pt-3">
      <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Tipo de usuario</strong>
        </div>
        <div class="form-group">
          <select v-model="userType" class="form-select" required>
            <option value="1">Administrador</option>
            <option value="2">Usuario</option>
            <option value="3">Editor</option>
          </select>
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
    mensaje: "",
    mostrarMensaje: false ,
    //mostrar fomulario editar
    mostrarFormulario: false,
    mostrarFormulariocreacion:false,
    usuarios: [],
    // Nuevas variables de datos
    selectedUser: null,
    editMode: false,
    // Otros campos del formulario
    nameUser: "",
    nickname: "",
    phoneUser: "",
    passwordUser: "",
    documentUser: "",
    positionUser: "",
    userId: "",
    userType: "",
   };
 },
 created:function(){
        this.consultarUsuarios();
    },
 methods: {
  mostrarFormularioDeEdicion(usuario) {
    // Otras lógicas si las hay
    this.EditarUsuario(usuario)
    this.mostrarFormulario = true;
    this.mostrarFormulariocreacion = false;
  },
  mostrarFormularioDecreacion() {
    // Otras lógicas si las hay
    this.mostrarFormulariocreacion = true;
    this.mostrarFormulario = false;
  },
  consultarUsuarios(){
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
    EditarUsuario(usuario) {
      // Establecer el usuario seleccionado y activar el modo de edición
      this.selectedUser = usuario;
      this.editMode = true;
      // Autocompletar los campos con los datos del usuario seleccionado
      this.nameUser = usuario.name;
      this.nickname = usuario.nickname;
      this.phoneUser = usuario.phone;
      this.passwordUser = usuario.password;
      this.documentUser = usuario.document;
      this.positionUser = usuario.position;
      this.userId = usuario.id;
      this.userType = usuario.userType;
    },
   submitForm() {
     // Obtén los valores del formulario
     const nameUser= this.nameUser;
     const nickname= this.nickname;
     const phoneUser = this.phoneUser;
     const passwordUser = this.passwordUser;
     const documentUser= this.documentUser;
     const positionUser = this.positionUser;
     const userType = this.userType;
     const userEntityId = 89;
     const userId = this.userId;

     // Envía los datos a la API utilizando fetch
     const operation = "UpdateUser";
     const tna = 7;
     const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";

     fetch(
       `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&key=${key}&nameUser=${nameUser}&nickname=${nickname}&phoneUser=${phoneUser}&passwordUser=${passwordUser}&documentUser=${documentUser}&positionUser=${positionUser}&userType=${userType}&userEntityId=${userEntityId}&userId=${userId}`,
       { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
     )
       .then((respuesta) => respuesta.json())
       .then((datosRespuesta) => {
         console.log(datosRespuesta);
         this.mensaje = datosRespuesta.message;
         this.consultarUsuarios();
         setTimeout(() => {
              this.mostrarMensaje = false; // Ocultar el mensaje
              this.mensaje = ""; // Limpiar el mensaje
          }, 5000);
        
       })
       .catch(console.log);

     // Limpia el formulario después de enviar los datos
     this.nameUser = ' ';
     this.nickname = ' ';
     this.phoneUser = ' ';
     this.passwordUser = ' ';
     this.documentUser = ' ';
     this.positionUser = ' ';
     this.mostrarFormulario = false;
   },
   borrarUsuario(id) {
        // Envía los datos a la API utilizando fetch
        const operation = "DeleteUser";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
  
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&userId=${id}&key=${key}`,
          { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
        )
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
            this.mensaje = datosRespuesta.message;
            this.mostrarMensaje = true;
            setTimeout(() => {
              this.mostrarMensaje = false; // Ocultar el mensaje
              this.mensaje = ""; // Limpiar el mensaje
            }, 5000);
        
            this.consultarUsuarios();
          })
          .catch(console.log);
  
        // Limpia el formulario después de enviar los datos
        this.userId = '';
      },
   submitFormUsuario() {
      // Obtén los valores del formulario
      const nameUser= this.nameUser;
      const nickname= this.nickname;
      const phoneUser = this.phoneUser;
      const passwordUser = this.passwordUser;
      const documentUser= this.documentUser;
      const positionUser = this.positionUser;
      const userType = this.userType;
      const userEntityId = 89;

      // Envía los datos a la API utilizando fetch
      const operation = "SaveUser";
      const tna = 7;
      const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";

      fetch(
        `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&key=${key}&nameUser=${nameUser}&nickname=${nickname}&phoneUser=${phoneUser}&passwordUser=${passwordUser}&documentUser=${documentUser}&positionUser=${positionUser}&userType=${userType}&userEntityId=${userEntityId}`,
        { method: "POST" } // Puedes ajustar el método HTTP según sea necesario
      )
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          if (datosRespuesta.userVO) {
            this.mensaje = "Usuario registrado exitosamente";
            this.consultarUsuarios();
            this.mostrarMensaje = true;
            
            setTimeout(() => {
              this.mostrarMensaje = false;
              this.mensaje = "";
            }, 5000);
          } else {
            // Si no se encuentra la clave userVO en la respuesta, muestra un mensaje de error
            this.mensaje = "Hubo un error al guardar el usuario.";
            this.mostrarMensaje = true;
            
            setTimeout(() => {
              this.mostrarMensaje = false;
              this.mensaje = "";
            }, 5000);
          }
          this.mostrarFormulariocreacion = false;
        })
        .catch(console.log);

      // Limpia el formulario después de enviar los datos
      this.nameUser = ' ';
      this.nickname = ' ';
      this.phoneUser = ' ';
      this.passwordUser = ' ';
      this.documentUser = ' ';
      this.positionUser = ' ';
      this.userType = ' ';
    },
 },
};

</script>