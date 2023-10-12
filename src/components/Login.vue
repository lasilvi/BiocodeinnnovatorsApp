<template>
    <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
          <div class="authentication-inner">
            <!-- Register -->
            <div class="card">
              <div class="card-body">
  
                <h4 class="mb-2">BIENVENIDO 👋</h4>
                <p class="mb-4">Porfavor ingrese su cuenta</p>
  
                <form @submit.prevent="submitLogin">
                  <div class="mb-3">
                    <label for="email" class="form-label">Nombre de ususario</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Usuario" 
                      v-model="nameUser" 
                      placeholder="Enter your email or username"
                      autofocus
                    />
                  </div>
                  <div class="mb-3 form-password-toggle">
                    <div class="d-flex justify-content-between">
                      <label class="form-label" for="password">Contraseña</label>
                      <a href="auth-forgot-password-basic.html">
                        <small>Olvido su contraseña?</small>
                      </a>
                    </div>
                    <div class="input-group input-group-merge">
                      <input
                        type="password"
                        id="passwordUser"
                        v-model="passwordUser"
                        class="form-control"
                        name="Contraseña"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                      />
                      <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="remember-me" />
                      <label class="form-check-label" for="remember-me"> Recuerdame </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <button class="btn btn-primary d-grid w-100" type="submit">Ingresar</button>
                  </div>
                </form>
  
                <p class="text-center">
                  <span>Nuevo Usuario?</span>
                  <a href="auth-register-basic.html">
                    <span>Crear cuenta</span>
                  </a>
                </p>
              </div>
            </div>
            <!-- /Register -->
          </div>
        </div>
    
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nameUser: '',
        passwordUser: '',
      };
    },
    methods: {
      submitLogin() {
        // Obtén los valores del formulario
        const nameUser = this.nameUser;
        const passwordUser = this.passwordUser;
  
        // Envía los datos a la API utilizando fetch
        const operation = "queryLogin";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
  
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&nameUser=${nameUser}&passwordUser=${passwordUser}&key=${key}`,
          { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
        )
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
          
          if (datosRespuesta.userVO) {
            const userType = datosRespuesta.userVO.userType;
  
            if (userType === 1) {
              this.$router.push('/DashBoardAdmin');
            } else if (userType === 2) {
              this.$router.push('/');
            } else if (userType === 3) {
              this.$router.push('/');
            } else {
            }
          }
          })
          .catch(console.error);
  
        // Limpia el formulario después de enviar los datos
        this.passwordUser = '';
        this.nameUser = '';
      },
    },
  };
  </script>  