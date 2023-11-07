<template>
  <section class="h-100 gradient-form" style="background-color: #eee;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">

                  <div class="text-center">
                    <h4 class="mt-1 mb-5 pb-1">BIENVENIDOS</h4>
                    <p>Ingrese sus datos a BiocodeInnovators: Innovación y Experiencias Excepcionales</p>
                  </div>

                  <form @submit.prevent="iniciarSesion()" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="nickname">Usuario</label>
                        <input type="text" class="form-control" name="nickname" v-model="nickname" id="nickname" placeholder="">
                    </div>

                    <div class="form-group">
                        <label for="PasswordUser">Contraseña</label>
                        <input type="password" class="form-control" name="PasswordUser" v-model="PasswordUser" id="PasswordUser" placeholder="">
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                        <button type="submit" class="btn btn-success">Ingresar</button>
                    </div>
                </form>


                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center bg-blue">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4" style="text-align: justify;">
                  <img  src="../assets/img1.png" alt="Card image cap" class="rounded mx-auto d-block" style="max-height: 180px;">
                  <p class="small mb-0">En BioCodeInnovators, nuestro objetivo fundamental es proporcionar a 
                    todos nuestros usuarios una experiencia de acreditación óptima y sin complicaciones. 
                    Nos esforzamos por hacer que el proceso de verificación sea eficiente y transparente, 
                    beneficiando tanto a nuestros usuarios como a los auditores de acuerdo con la Resolución 3100 del 2019. 
                    Nuestra promesa incluye la garantía de mantenernos actualizados con cualquier cambio en la Resolución, 
                    asegurando que nuestros servicios se mantengan alineados con los últimos requisitos, brindando así la 
                    tranquilidad de que nuestros usuarios pueden confiar en nuestro compromiso constante con la excelencia 
                    y la eficacia en todo momento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
      return {
          
            nickname: "",
            PasswordUser: ""
          
      };
  },
  methods: {
        iniciarSesion() {

          const nickname = this.nickname;
          const PasswordUser = this.PasswordUser;
          console.log(nickname)
          console.log(PasswordUser)
          
          fetch(
            `https://redb.qsystems.co/QS3100/QServlet?key=c94ad623-f583-46ed-b5e0-54f402e83ad0&passwordUser=${PasswordUser}&operation=queryLogin&tna=7&nickname=${nickname}`,
            { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
          )
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
              this.datos_Respuesta=datosRespuesta["userVO"];
              this.estado=datosRespuesta["valid"]
              console.log("datos_Respuesta: ", this.datos_Respuesta);
              console.log("Estado:",this.estado);
              console.log("Comparación True",this.estado==true);
              console.log("Estado:",this.password);

              if (this.estado){

              console.log("Tipo usu: ",this.datos_Respuesta.userType );
              console.log("Id ENT: ",this.datos_Respuesta.entityID );
              if(this.datos_Respuesta.userType==1){
           
            
                this.$router.push({name:'DashBoardAdmin'});
             
              }
              else {
              
            //if (this.username === 'Entidad' && this.password === 'contraseña') {
              // Redirige al usuario a la ventana principal (por ejemplo, '/dashboard')
              this.$router.push({name:'DashBoardAdmin'});
              }
            } else {
              // Maneja el caso de credenciales incorrectas o muestra un mensaje de error
              alert(datosRespuesta["error"]);
            }

            })
            .catch(console.log);
          // Comprueba las credenciales (por ejemplo, username === "Entidad" y password === "contraseña")


          },
    }

  }
</script>
<style>
  .bg-blue {
    background-color: #274e59;
}

  @media (min-width: 769px) {
  .gradient-custom-2 {
  border-top-right-radius: .3rem;
  border-bottom-right-radius: .3rem;
  }
  }
  @media (min-width: 768px) {
  .gradient-form {
  height: 100vh !important;
  }
  }
</style>
