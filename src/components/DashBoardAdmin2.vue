<template>
  <div>
    <div class="sidebar" style="background-color: #003e4b;">
      <div class="sidebar-header">
        <router-link to="/DashBoardAdmin2" class="nav-link" style="color: gray;">
          <h4 style="color: white;">BioCodeInnovators</h4>
        </router-link>
      </div>
      <li class="border-top my-3"></li>
      <ul class="list-unstyled ps-0">
        <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse"
          aria-expanded="true" style="color: white;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16" style="color: white; margin-right: 5px;">
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
          </svg>
            Usuarios
          </button>
          <div class="collapse" id="home-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <ul class="nav flex-column">
                <li>
                  <router-link to="/EditarUsuario" class="nav-link" style="color:gray">
                    <i class="fas fa-edit"></i> Usuarios
                  </router-link>
                </li>
              </ul>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false" style="color: white;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hospital" viewBox="0 0 16 16" style="margin-right: 5px;">
              <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"/>
              <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"/>
            </svg>
            Servicios
          </button>
          <div class="collapse" id="dashboard-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <ul class="nav flex-column">
                <li>
                  <router-link to="/EditarServicio" class="nav-link" style="color: gray;">
                    <i class="fas fa-edit"></i>Servicios
                  </router-link>
                </li>
              </ul>
            </ul>
          </div>
        </li>
        <li class="border-top my-3"></li>
        <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false" style="color: white;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style="margin-right: 5px;">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            Cuenta
          </button>
          <div class="collapse" id="account-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded" v-on:click="sessionClose()" style="color: grey !important;">Cerrar sesión</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <span style="font-weight: bold; font-size: larger;">Administrador</span>
            <br>
            <span style="font-size: medium;">{{dataUser['name']}}</span>
          </li>
        </ul>
      </header>
      <div class="main-content" style="margin-left: 300px;">
        <div class="row">
      <div class="chart-container">
            <canvas id="grafica1"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="grafica2"></canvas>
        </div>
    </div>
    </div> 
    <div class="background-container" style="text-align: justify;">
</div>
</div>
  

  </div>
</template>
<script>
import Chart from 'chart.js/auto';
console.log(localStorage.getItem('name'))
console.log(localStorage.getItem('id'))
export default {
  mounted() {
    
    this.renderChart('grafica1', ['DOTACION', 'TALENTO HUMANO', 'INFRAESTRUCTURA', 'MEDICAMENTOS'], [66.6, 33.3, 66.6, 100], 'SERVICIO DE CIRUGIA');
    this.renderChart('grafica2', ['DOTACION', 'TALENTO HUMANO', 'INFRAESTRUCTURA', 'MEDICAMENTOS'], [100, 33.3, 66.6, 33.3], 'SERVICIO DE CONSULTA EXTERNA GENERAL');
    

  },
  data() {
    return {
      servicios:[],
      dataUser:{}
    };
  },
  created:function(){
    this.queryLocalStorage(); 
    this.checkSessionAndFetchData();
    this.consultarServicios();
  
        

    },
  methods: {
    queryLocalStorage(){
            this.dataUser['name'] = localStorage.getItem('name')
            this.dataUser['userid'] = localStorage.getItem('userid')
            console.log(this.dataUser['name'])
            
    },
    checkSessionAndFetchData() {
    this.queryLocalStorage();

    // Verifica si hay datos de sesión
    if (!this.dataUser.name || !this.dataUser.userid) {
      // Si no hay datos de sesión, muestra un mensaje y redirige a la página de inicio de sesión
      alert('Por favor, inicia sesión.');
      this.$router.push({name:'Login'});
      return; // Detiene la ejecución del método
    }},
    

   sessionClose(){
      localStorage.clear(),
      this.$router.push({name:'home'});
    },
    renderChart(chartId, labels, data1, label) {
      const graph = document.getElementById(chartId);

      const data = {
        labels: labels,
        datasets: [{
          label: label,
          data: data1,
          backgroundColor: 'rgba(9, 129, 176, 0.2)'
        }]
      };

      const config = {
        type: 'bar',
        data: data,
      };

     

      // Ajusta el tamaño del contenedor y del gráfico
      const canvasContainer = graph.parentElement;
      canvasContainer.style.width = "400px"; // Ajusta según tus necesidades
      canvasContainer.style.height = "300px"; // Ajusta según tus necesidades

      graph.width = canvasContainer.clientWidth;
      graph.height = canvasContainer.clientHeight;

    


      this.chartInstance = new Chart(graph, config);
    },
    consultarServicios(){
            // Envía los datos a la API utilizando fetch
        const operation = "queryServiceByEntity";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
        const entityIdService = localStorage.getItem('id');
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&entityIdService=${entityIdService}&key=${key}`,
          
          { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
        )
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta) => {
        const serviciosPromises = datosRespuesta.arrayService.map((servicio) => {
          console.log(`Llamando a consultarCriterios con serviceId: ${servicio.id}`);
          console.log(servicio.id);
          return this.consultarCriterios(servicio.id).then(({ standards, percentages }) => {
            return { serviceId: servicio.id, standards, percentages };
          });
        });

        Promise.all(serviciosPromises)
          .then((serviciosInfo) => {
            // Ahora serviciosInfo contiene la información de estándares y porcentajes de cada servicio
            console.log("aqui");
            console.log(serviciosInfo);
            // Puedes utilizar esta información para renderizar tus gráficas

            serviciosInfo.forEach((info) => {
              info.standards.forEach((standard, index) => {
                // Accede al estándar y porcentaje correspondiente
                const standardId = standard;
                console.log(standardId)
                const percentage = info.percentages[index];
                console.log("aqui")
                // Ahora tienes el serviceId, standardId y percentage que puedes utilizar según tus necesidades
                console.log(`Service ID: ${info.serviceId}, Standard ID: ${standardId}, Percentage: ${percentage}`);
              });

              // Puedes llamar a tu función de renderización aquí, pasando info.serviceId, info.standards y info.percentages
              // this.renderChart(`grafica_${info.serviceId}`, info.standards, info.percentages, `Ejemplo ${info.serviceId}`);
            });
          })
          .catch((error) => {
            console.error('Error al obtener información de servicios:', error);
          });
      })
.catch(console.log);

    },
    consultarCriterios(serviceId){
            // Envía los datos a la API utilizando fetch
        const operation = "queryCriteriaByService";
        const tna = 7;
        const key = "c94ad623-f583-46ed-b5e0-54f402e83ad0";
        const serviceIdCriteria = serviceId;
        fetch(
          `https://redb.qsystems.co/QS3100/QServlet?operation=${operation}&tna=${tna}&serviceIdCriteria=${serviceIdCriteria}&key=${key}`,
          
          { method: "GET" } // Puedes ajustar el método HTTP según sea necesario
        )
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          const servicios = datosRespuesta;
          console.log(servicios); 

          const criteriaByStandard = {};
          datosRespuesta.arrayCriteria.forEach(criterio => {
          const { standardID, description, answer } = criterio;
          if (!criteriaByStandard[standardID]) {
            criteriaByStandard[standardID] = [];
          }
          criteriaByStandard[standardID].push({ description, answer });
        });

        // Calcular el porcentaje de cumplimiento por estándar
        const percentagesByStandard = {};
        Object.keys(criteriaByStandard).forEach(standardID => {
          const criterios = criteriaByStandard[standardID];
          const cumplidos = criterios.filter(criterio => criterio.answer === 'C').length;
          const totalCriterios = criterios.length;
          const porcentaje = (cumplidos / totalCriterios) * 100;
          percentagesByStandard[standardID] = porcentaje;

          console.log(criteriaByStandard); // Criterios agrupados por estándar
        console.log(percentagesByStandard); // Porcentajes de cumplimiento por estándar

        });

        
        return {
          standards: Object.keys(percentagesByStandard),
          percentages: Object.values(percentagesByStandard),
          
        };
        }
        
        )
        .catch(console.log)
    },
  
  },
};
</script>
<style scoped>
.sidebar {
  width: 300px;
  background-color: #333;
  color: white;
  padding: 20px;
}
.sidebar {
  position: fixed;
  left: 0; /* Fija el sidebar al lado izquierdo */
  top: 0;
  height: 100%; /* Haz que el sidebar ocupe toda la altura de la pantalla */
  /* Resto de los estilos... */
}


.sidebar-header {
  margin-bottom: 20px;
  text-align: center;
}

.sidebar h4 {
  margin: 0;
}

.input-group {
  margin-top: 10px;
}
.background-container {
    background-image: url('@/assets/adminFondo3.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw; /* 100% del ancho de la ventana */
    height: 100vh;
    position: fixed;
    top: 11%;
    left: 15%;
    z-index:-1;
  }
  .chart-container {
  text-align: center; /* Centra el contenido horizontalmente */
 
  margin-bottom: 20px;
  padding: 10px;
}
</style>