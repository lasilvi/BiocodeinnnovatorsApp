<template>
  <header data-bs-theme="dark" class="fixed-top">
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
    <div id="carouselExampleDark" class="carousel carousel slide" style="margin-top: 100px; background-color: #003e4b;" data-bs-interval="3000">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="../assets/admon.png" class="d-block" alt="banner 1" style="max-height: 300px; margin-left: 10%;" >
        <div class="carousel-caption d-none d-md-block"  style="position: absolute; top: 0; left: 100px; right: 0; text-align: center; padding: 20px;">
          <div style="text-align: center;">
            <h5 style="font-size: 2em;">Administrador</h5>
          </div>
          <p style="text-align: justify; max-width: 600px; margin: 20px auto;">La plataforma facilita la gestión de cuentas de usuario, establecer estándares
                de habilitación, definir los servicios que serán evaluados y proporcionar herramientas como listas
                de chequeo para garantizar el cumplimiento de las condiciones de habilitación en la atención médica
          </p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="../assets/usuario.png" class="d-block" alt="banner 2" style="max-height: 300px; margin-left: 8%;">
        <div class="carousel-caption d-none d-md-block"  style="position: absolute; top: 0; left: 100px; right: 0; text-align: center; padding: 20px;">
          <div style="text-align: center;">
            <h5 style="font-size: 2em;">Usuario</h5>
          </div>
          <p style="text-align: justify; max-width: 600px; margin: 20px auto;">La plataforma de autoevaluación esta diseñada para monitorear y mejorar el cumplimiento 
                de los estándares de habilitación en su organización de salud. A través de la plataforma, 
                pueden acceder a información visual, cargar documentos relevantes y recibir orientación 
                para garantizar que la organización cumpla con los estándares y pueda proporcionar 
                servicios de alta calidad y seguridad.
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/auditor.png" class="d-block" alt="danner 3" style="max-height: 300px; margin-left: 10%;">
        <div class="carousel-caption d-none d-md-block"  style="position: absolute; top: 0; left: 100px; right: 0; text-align: center; padding: 20px;">
          <div style="text-align: center;">
            <h5 style="font-size: 2em;">Auditor</h5>
          </div>
          <p style="text-align: justify; max-width: 600px; margin: 20px auto;">La plataforma permite la supervisión y evaluación de las organizaciones de salud asignadas. 
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
     <div class="row mb-5" style="margin-top: 70px;">
         <div class="col-md-6 col-lg-4 mb-3">
           <div class="card h-100">
            <img class="card-img-top" src="../assets/admon.png" alt="Card image cap" style="max-height: 300px;">
             <div class="card-body">
               <h5 class="card-title">Administrador</h5>
               <p class="card-text">
                La plataforma facilita la gestión de cuentas de usuario, establecer estándares
                de habilitación, definir los servicios que serán evaluados y proporcionar herramientas como listas
                de chequeo para garantizar el cumplimiento de las condiciones de habilitación en la atención médica
               </p>
             
             </div>
           </div>
         </div>
         <div class="col-md-6 col-lg-4 mb-3">
           <div class="card h-100">
            <img class="card-img-top" src="../assets/usuario.png" alt="Card image cap" style="max-height: 300px;">
             <div class="card-body">
               <h5 class="card-title">Usuario</h5>
               <p class="card-text">
                La plataforma de autoevaluación esta diseñada para monitorear y mejorar el cumplimiento 
                de los estándares de habilitación en su organización de salud. A través de la plataforma, 
                pueden acceder a información visual, cargar documentos relevantes y recibir orientación 
                para garantizar que la organización cumpla con los estándares y pueda proporcionar 
                servicios de alta calidad y seguridad.
               </p>
               
             </div>
           </div>
         </div>
         <div class="col-md-6 col-lg-4 mb-3">
           <div class="card h-100">
            <img class="card-img-top" src="../assets/auditor.png" alt="Card image cap"  style="max-height: 300px;">
             <div class="card-body">
               <h5 class="card-title">Auditor</h5>
               <p class="card-text">
                La plataforma permite la supervisión y evaluación de las organizaciones de salud asignadas. 
                permite enviar recomendaciones, llevar a cabo revisiones y evaluar el cumplimiento de estándares. 
                Permitiendo colaborar a que las organizaciones cumplan con los requisitos establecidos y mantengan altos estándares de calidad 
                y seguridad en la atención médica que brindan.
               </p>
            
             </div>
           </div>
         </div>
       </div>
     </section>
     <section class="py-5 text-center container">
       <div class="row py-lg-5">
         <div class="col-lg-6 col-md-8 mx-auto">
           <h1 class="fw-light">Quienes somos</h1>
           <p class="lead text-body-secondary">Fundada con la visión de fusionar la biotecnología y el código, nuestra empresa se ha convertido en un referente en el mundo del desarrollo web. Nuestro equipo de expertos en diseño, programación y marketing digital trabaja incansablemente para transformar ideas en realidades digitales impactantes. Desde sitios web a medida hasta aplicaciones interactivas, en bioCode Innovators, creamos soluciones web que no solo impresionan visualmente, sino que también impulsan el éxito de nuestros clientes en el mundo en línea. ¡Únete a nosotros en este emocionante viaje hacia un futuro digital más brillante!</p>
         </div>
       </div>
   </section>

</template>

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
.carousel-inner img {
  max-height: 300px; /* Ajusta el valor según sea necesario */
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
</style>