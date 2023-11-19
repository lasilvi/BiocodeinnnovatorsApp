<template>
  <section class="h-200 gradient-form" style="background-color: #eeeeee;">
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <div class="container py-5 h-100" data-aos="flip-down" >
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
                        <button type="submit" class="btn btn-success" style="background-color: #20c2b4;">Ingresar</button>
                        &nbsp;
                          <button type="submit" class="btn btn-success" style="background-color: #003e4b;" v-on:click="sessionClose()" >Cancelar</button>
                    </div>
                </form>


                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center" style="background-color: #003e4b; border-top-right-radius: .3rem; border-bottom-right-radius: .3rem;">
                <div class="text-white px-3 py-5 p-md-5 mx-md-4" style="text-align: justify;">
                  <img  src="../assets/img1.png" alt="Card image cap" class="rounded mx-auto d-block" style="max-height: 200px;">
                  <p class="small mb-0" style="margin-top: 5%;">En BioCodeInnovators, el objetivo principal es ofrecer a los usuarios una experiencia de acreditación eficiente y sin complicaciones, siguiendo la Resolución 3100 del 2019.</p>
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
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  data() {
      return {
          
            nickname: "",
            PasswordUser: "",
            usuario:{

          }
          
      };
  },
  methods: {
        iniciarSesion() {

          let dataUser = {
                userid:this.usuario.userid,
                name:this.usuario.name,
      
            }


          const nickname = this.nickname;
          const PasswordUser = this.PasswordUser;
          console.log(nickname)
          console.log(PasswordUser)
          
          fetch(
            `https://redb.qsystems.co/QS3100/QServlet?key=c94ad623-f583-46ed-b5e0-54f402e83ad0&passwordUser=${PasswordUser}&operation=queryLogin&tna=7&nickname=${nickname}`,
            { method: "POST" ,
            body:JSON.stringify(dataUser)} // Puedes ajustar el método HTTP según sea necesario
          )
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
              this.datos_Respuesta=datosRespuesta["userVO"];
              this.estado=datosRespuesta["valid"]
              console.log("datos_Respuesta: ", this.datos_Respuesta);
              console.log("id: ", this.datos_Respuesta.id);
              console.log("Estado:",this.estado);
              
              if (this.estado){

                  localStorage.setItem('userid', this.datos_Respuesta.id);
                  localStorage.setItem('name', this.datos_Respuesta.nickname);

                console.log("Tipo usu: ",this.datos_Respuesta.userType );
                

              if(this.datos_Respuesta.userType==1){
           
            
                this.$router.push({name:'DashBoardAdmin2'});
             
              }
              if(this.datos_Respuesta.userType==2){
           
                  this.$router.push({name:'DashBoardUser'});
                
              }
              if(this.datos_Respuesta.userType==3){
           
                  this.$router.push({name:'DashBoardAuditor'});
                
              }
              
            } else {
              // Maneja el caso de credenciales incorrectas o muestra un mensaje de error
              alert(datosRespuesta["error"]);
            }

            })
            .catch(console.log);
          // Comprueba las credenciales (por ejemplo, username === "Entidad" y password === "contraseña")


          },
    sessionClose(){
      localStorage.clear(),
      this.$router.push({name:'home'});
    },
    },
    mounted() {
      AOS.init();
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
  margin:0;
  padding: 0%;
  }
  }
</style>
