<template>
    <!-- Tu código de plantilla aquí -->
    <div>
        <h2>HOLA MUNDO </h2>
      <!-- Más código de plantilla si es necesario -->
      <form @submit.prevent="submitForm" v-if="mostrarEstandaresCriterios">
          <div v-if="mostrarEstandaresCriterios">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" style="width: 20%;">Descripción</th>
                  <th scope="col" style="width: 5%;">Respuesta</th>
                  <th scope="col" style="width: 30%;">Observación usuarios</th>
                  <th scope="col" style="width: 5%;">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="criterio in criterios" :key="criterio.id">
                  <td>{{ criterio.description }}</td>
                  <td>
                    <select v-model="nuevoCriterio.answer" style="border-radius: .3rem;">
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                    </select>
                </td>
                  <td><input type="text" v-model="criterio.observationCriteriaAuditor" placeholder="Escriba aqui su observación" style="width: 100%; height: 100%;"></td>
                  <td>
                    <div class="btn-group" role="group" aria-label="">
                      <button type="submit" v-on:click="agregarcomentario(criterio.id)" class="btn btn" style="background-color: #20c2b4; color: #F0F0F0; border-top-right-radius: .3rem; border-bottom-right-radius: .3rem;">Agregar Observación</button>
                      &nbsp;
                    </div>
                  </td>
                </tr> 
              </tbody>
            </table>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <small class="d-flex justify-content-end mt-3">
                <button type="submit" class="btn btn me-md-2" style="background-color: #117981; color: #F0F0F0">Guardar</button>
                &nbsp;
                <button type="button" class="btn btn" style="background-color: #811111; color: #F0F0F0">Cancelar</button>
              </small>
            </div>
          </div>
        </form>
    </div>
  </template>

<script>
export default {
  // Tu código JavaScript aquí
  data() {
    return {
      // Datos del componente
      mostrarEstandaresCriterios: false,
    };
  },
  methods: {
    // Métodos del componente
    
    mostrarCriterios(estandar) {
    // Otras lógicas si las hay
    this.consultarCriterio(estandar);
    this.mostrarEstandaresCriterios = true;

    // Redirige al usuario a la vista CriteriosUser
    this.$router.push({ name: 'CriteriosUser' });
  },
  mostrar(estandar) {
        // Otras lógicas si las hay
        this.consultarCriterio(estandar);
        this.mostrarEstandaresCriterios = true;
    },


    consultarEstandares(serviceId){
            // Envía los datos a la API utilizando fetch
        this.mostrarEstandaresCriterios = false;
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

  },
};
</script>
