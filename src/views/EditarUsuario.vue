<template>
    <DashBoardAdmin />
   <div class="main-content" style="margin-left: 300px;">
    <div class="my-3 p-3 bg-body rounded shadow-sm" style="height: 80px;">
      <button type="button" v-on:click="mostrarFormularioDecreacion" class="btn btn-success">Crear Usuario</button></div>
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
              <button type="button" v-on:click="mostrarFormularioDeEdicion(usuario)" class="btn btn" style="background-color: #117981; color:#F0F0F0">Editar</button>
              &nbsp;
              <button type="button" v-on:click="borrarUsuario(usuario.id)" class="btn btn" style="background-color: #811111; color: #F0F0F0" >Borrar</button>
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
    <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
        </svg>
      </div>
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
    <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
          <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
        </svg>
      </div>
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
    <div class="contenedor-icono" style="margin-right: 1%; height: 5%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
        </svg>
      </div>
     <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
       <div class="d-flex justify-content-between">
         <strong class="text-gray-dark">Contraseña</strong>
       </div>
       <div class="form-group">
         <input type="password" placeholder="Contraseña" class="form-control" id="phoneEntity" v-model="passwordUser" hidden required>
       </div>
     </div>
   </div>
   <div class="d-flex text-body-secondary pt-3">
    <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
          <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
        </svg>
      </div>
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
    <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
        </svg>
      </div>
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
    <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      </div>
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
      <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
        </svg>
      </div>
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
      <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
          <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
        </svg>
      </div>
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
      <div class="contenedor-icono" style="margin-right: 1%; height: 5%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
        </svg>
      </div>
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
      <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
          <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
        </svg>
      </div>
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
      <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
        </svg>
      </div>
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
      <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      </div>
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
      <div class="contenedor-icono" style="margin-right: 1%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
        </svg>
      </div>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">Tipo de usuario</strong>
        </div>
        <div class="form-group">
          <select v-model="userType" class="form-select" required>
            <option value="1">Administrador</option>
            <option value="2">Usuario</option>
            <option value="3">Auditor</option>
          </select>
        </div>
      </div>
    </div>
    
    
      <small class="d-block text-end mt-3">
        <button type="submit" class="btn btn-primary">Guardar</button>
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
  
         if (datosRespuesta.userVO) {
            this.mensaje = "Usuario editado exitosamente";
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
     this.nameUser = '';
     this.nickname = '';
     this.phoneUser = '';
     this.passwordUser = '';
     this.documentUser = '';
     this.positionUser = '';
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
      console.log(userType);

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
      this.nameUser = '';
      this.nickname = '';
      this.phoneUser = '';
      this.passwordUser = '';
      this.documentUser = '';
      this.positionUser = '';
      this.userType = '';
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