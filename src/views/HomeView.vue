<template>
  <header data-bs-theme="dark" class="fixed-top">
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
   <div class="collapse text-bg-dark" id="navbarHeader">
     <div class="container">
       <div class="row">
         <div class="col-sm-8 col-md-7 py-4">
           <h4>Sobre Nosotros</h4>
           <p class="text-body-secondary">En bioCode Innovators, estamos en la vanguardia de la innovación tecnológica y el desarrollo web. Nuestra pasión por la creación de experiencias digitales excepcionales se refleja en cada proyecto que emprendemos.</p>
         </div>
         <div class="col-sm-4 offset-md-1 py-4">
           <h4>Contactanos</h4>
           <ul class="list-unstyled">
             <li><a href="#" class="text-white">Siguenos en Twitter</a></li>
             <li><a href="#" class="text-white">Like en Facebook</a></li>
             <li><a href="#" class="text-white">Correo</a></li>
           </ul>
         </div>
       </div>
     </div>
   </div>
 <div class="navbar navbar-dark bg-dark shadow-sm">
   <div class="container">
     <a href="#" class="navbar-brand d-flex align-items-center">
      <div><img  src="../assets/img1.png" alt="Card image cap" class="img-fluid" style="max-height: 50px;"></div>
      <div><strong>BioCodeInnovators</strong></div>
     </a>
     <div class="d-flex align-items-center">
          <router-link to="/Login" style="color: white; margin-right: 10px; text-decoration: none;">
            <i class="btn btn-link"></i> Ingresar
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      </div>
     
   </div>
 </div>
</header>   
    <router-view></router-view>
    <div id="carouselExampleDark" class="carousel slide" style="margin-top: 100px; background-color: #003e4b;" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" ></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-bs-interval="1000">
        <img src="../assets/admon.png" class="d-block" alt="banner 1" style="max-height: 300px; margin-left: 10%;" >
        <div class="carousel-caption d-none d-md-block"  style="position: absolute; top: 0; left: 100px; right: 0; text-align: center; padding: 20px;">
          <div style="text-align: center;"> 
            <h5 style="font-size: 2em;">Administrador</h5>
          </div>
          <p style="text-align: justify; max-width: 600px; margin: 20px auto; font-size: 1.2em;">La plataforma facilita la gestión de cuentas de usuario, establecer estándares
                de habilitación, definir los servicios que serán evaluados y proporcionar herramientas como listas
                de chequeo para garantizar el cumplimiento de las condiciones de habilitación en la atención médica.
          </p>
        </div>
      </div>
      <div class="carousel-item" data-bs-bs-interval="1000">
        <img src="../assets/usuario.png" class="d-block" alt="banner 2" style="max-height: 300px; margin-left: 8%;">
        <div class="carousel-caption d-none d-md-block"  style="position: absolute; top: 0; left: 100px; right: 0; text-align: center; padding: 20px;">
          <div style="text-align: center;">
            <h5 style="font-size: 2em;">Usuario</h5>
          </div>
          <p style="text-align: justify; max-width: 600px; margin: 20px auto;  font-size: 1.2em">La plataforma de autoevaluación esta diseñada para monitorear y mejorar el cumplimiento 
                de los estándares de habilitación en su organización de salud. A través de la plataforma, 
                pueden acceder a información visual, cargar documentos relevantes y recibir orientación 
                para garantizar que la organización cumpla con los estándares y pueda proporcionar 
                servicios de alta calidad y seguridad.
          </p>
        </div>
      </div>
      <div class="carousel-item" data-bs-bs-interval="3000">
        <img src="../assets/auditor.png" class="d-block" alt="danner 3" style="max-height: 300px; margin-left: 10%;">
        <div class="carousel-caption d-none d-md-block"  style="position: absolute; top: 0; left: 100px; right: 0; text-align: center; padding: 20px;">
          <div style="text-align: center;">
            <h5 style="font-size: 2em;">Auditor</h5>
          </div>
          <p style="text-align: justify; max-width: 600px; margin: 20px auto;  font-size: 1.2em">La plataforma permite la supervisión y evaluación de las organizaciones de salud asignadas. 
                permite enviar recomendaciones, llevar a cabo revisiones y evaluar el cumplimiento de estándares. 
                Permitiendo colaborar a que las organizaciones cumplan con los requisitos establecidos y mantengan altos estándares de calidad 
                y seguridad en la atención médica que brindan.
          </p>
        </div>
      </div>
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <section class="py-5 text-center container">
      <div class="row py-lg-5" data-aos="fade-down">
        <div class="heading_container heading_center">
          <h5 style="font-size: 5em; font-weight: bold;">Resolución 3100 de 2019</h5>
        </div>
        <p style="font-size: 1.2em;">Por la cual se definen los procedimientos y condiciones de inscripción de los prestadores
          de servicios de salud y de habilitación de los servicios de salud y se adopta el Manual de 
          Inscripción de Prestadores y Habilitación de Servicios de Salud.
        </p>
      </div>
    </section>
    <section class="headers1 cid-svGO3o7YHJ" id="header01-0" style="background-color: #f0f0f0;" >
        <div class="container" data-aos="fade-right">
            <div class="row align-items-center">
                <div class="col-12 col-md-12 col-lg-5 title-col">
                    <h6 class="mbr-section-subtitle align-left mbr-fonts-style my-3 display-1"><strong>Servicios</strong></h6>
                    <img src="../assets/servicios.png" class="d-block" alt="Intento 1" style="width: 50%; max-width: 400px; margin-left: 10%;">
                </div>
                <div class="col-12 col-md-12 text-col col-lg-6">
                    <p class="mbr-text align-left mbr-fonts-style mb-0 display-7" style="margin-top: 4%; font-size: 1.2em;">Servicios con los que cuentan las entidades de salud:<br></p>
                    <ol class="list-group-numbered" style="text-align: justify; padding-left: 10%; margin-top: 2%; font-size: 1.2em;">
                        <li class="list-group-item">Consulta externa.</li>
                        <li class="list-group-item">Servicio farmaceutico.</li>
                        <li class="list-group-item">Servicio de dialisis.</li>
                        <li class="list-group-item"><strong>Servicio de cirugía.</strong></li>
                        <li class="list-group-item">Servicio de hospitalización.</li>
                        <li class="list-group-item">Servicio de imágenes diagnósticas.</li>
                        <li class="list-group-item">Servicio de transporte clínico.</li>
                        <li class="list-group-item">Servicio de patología.</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section class="headers1 cid-svGO3o7YHJ" id="header01-0" style="background-color: white;">
        <div class="container" data-aos="fade-left">
            <div class="row align-items-center">
                <div class="col-12 col-md-12 col-lg-5 title-col">
                    <h6 class="mbr-section-subtitle align-left mbr-fonts-style my-3 display-1"><strong>Estándar</strong></h6>
                    <img src="../assets/estandar.png" class="d-block" alt="Intento 1" style="width: 50%; max-width: 400px; margin-left: 10%;">
                </div>
                <div class="col-12 col-md-12 text-col col-lg-6">
                    <p class="mbr-text align-left mbr-fonts-style mb-0 display-7" style="margin-top: 4%; font-size: 1.2em;">Se presentan los estándares con los que cada servicio cuenta:<br></p>
                    <ol class="list-group-numbered" style="text-align: justify; padding-left: 10%; margin-top: 2%; font-size: 1.2em;">
                        <li class="list-group-item">Talento humano.</li>
                        <li class="list-group-item">Infraestructura.</li>
                        <li class="list-group-item">Dotación.</li>
                        <li class="list-group-item">Medicamentos, dispositivos médicos e insumos.</li>
                        <li class="list-group-item">Procesos prioritarios.</li>
                        <li class="list-group-item">Hisotia clínica y registros.</li>
                        <li class="list-group-item">Interdependencia.</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section class="headers1 cid-svGO3o7YHJ" id="header01-0" style="background-color: #f0f0f0; padding-bottom: 30px;">
        <div class="container" data-aos="fade-right">
            <div class="row align-items-center">
                <div class="col-12 col-md-12 col-lg-5 title-col">
                    <h6 class="mbr-section-subtitle align-left mbr-fonts-style my-3 display-1"><strong>Criterios</strong></h6>
                    <img src="../assets/criterios.png" class="d-block" alt="Intento 1" style="width: 50%; max-width: 400px; margin-left: 10%;">
                </div>
                <div class="col-12 col-md-12 text-col col-lg-6" style="text-align: justify;" text-align="justify">
                    <p class="mbr-text align-left mbr-fonts-style mb-0 display-7" style="margin-top: 4%; font-size: 1.2em;">Los criterios son los preceptos o indicadores
                      obligatorios que resumen la calidad de una actividad que se pretende evaluar. Para efectos de la presente webpage, el criterio es la unidad
                      básica del estándar sobre el cual se realiza la verificación orientada hacia el análisis
                      de los riesgos y la seguridad en la atención de los pacientes.<br></p>
                </div>
            </div>
        </div>
    </section>
     <section class="py-5 text-center container">
       <div class="row py-lg-5" data-aos="flip-down">
         <div class="col-lg-6 col-md-8 mx-auto">
           <h1 class="fw-light">Quienes somos</h1>
           <p class="lead text-body-secondary" style="text-align: justify;">Fundada con la visión de fusionar la biotecnología y el código, nuestra empresa se ha convertido en un referente en el mundo del desarrollo web. Nuestro equipo de expertos en diseño, programación y marketing digital trabaja incansablemente para transformar ideas en realidades digitales impactantes. Desde sitios web a medida hasta aplicaciones interactivas, en bioCode Innovators, creamos soluciones web que no solo impresionan visualmente, sino que también impulsan el éxito de nuestros clientes en el mundo en línea. ¡Únete a nosotros en este emocionante viaje hacia un futuro digital más brillante!</p>
         </div>
       </div>
   </section>
   <div style=" text-align: center;">
    <footer data-bs-theme="g-dark shadow-sm text-center text-white fixed-bottom">
      <div class="text-center p-3" style="color:white; background-color: #212529; text-decoration: none;">
        <a>Hecho con <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg> Por BioCodeInnovators</a>
      </div>
    </footer>
  </div>
</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  mounted() {
    const navbarHeader = document.getElementById('navbarHeader');
    const carouselContainer = document.getElementById('carouselExampleDark');
    
    navbarHeader.addEventListener('show.bs.collapse', function () {
      // Ajustar el margen superior del carrusel cuando se muestra el menú
      carouselContainer.style.marginTop = '300px'; // Ajusta según sea necesario
    });

    navbarHeader.addEventListener('hide.bs.collapse', function () {
      // Restaurar el margen superior del carrusel cuando se oculta el menú
      carouselContainer.style.marginTop = '100px'; // Ajusta según sea necesario
    });
    AOS.init();
  }
}
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
.carousel-inner img {
  max-height: 300px; 
}
.carousel-caption {
    max-height: 600px; 
  }
  .carousel-image-container {
  position: relative;
  height: 200px; 
  overflow: hidden;
  background-color: #274e59;
}

.carousel-image-container img {
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
}
.footer {
  background-color: #003e4b; 
  text-decoration: none; /* Quita la subrayado del enlace */
  width: 100%;
}

.footer a {
  color: white; 
}

#carouselExampleDark {
  margin-top: 100px; 
  transition: margin-top 0.5s ease; 
}
body {
    font-family: 'Roboto', sans-serif;
  }
</style>