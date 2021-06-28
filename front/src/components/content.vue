

<template>
  <div class="leContenuQuiDoitLoad">

     <header>
      <div class="bg-dark">
        <div class="row">
          <nav class="col navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand ml-3" href="index.html">
              <img src="../assets/icon-left-font-monochrome-white.png" width="220" height="150" alt="Site logo">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarContent" class="collapse navbar-collapse">
              <ul class="navbar-nav float-right ml-5 mr-1  text-center">
                <li class="nav-item active">
                  <a class="nav-link border border-primary ml-5" href=""> Acceuil</a>
                </li>

                <li class="nav-item active ">
                  <a class="nav-link border border-primary ml-5" href="">Publication</a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link border border-primary ml-5" href=""> Profil</a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link border border-primary ml-5" href="register/"> Logout </a>
                </li>

              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>

          <div class="jumbotron text-center">
          </div>

    <div class="row">
      <div class="col-12 text-center font-weight-light xs-Display 3">
      
                <img class="caca" src="../assets/icon-left-font-monochrome-black.png" height="200" > 
        <aside class="border border-primary">
          <h1>
            Structurons notre collectif vers un avenir co-construit et
            bienveillant
          </h1>
          <h2>Et la bonne année aussi, profitez du 13e mois !</h2>
          <h3>
            le forum est soumis a modération, contactez l'administrateur en cas
            problèmes ou situation ne respectant
            <router-link to="/rules"> les règles </router-link>
          </h3>
        </aside>
      </div>
    </div>


    <!-- le contenu chargé par l'API commence là dans l'article--->

    <article class="text-center m-5">

      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
    </article>





    <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted">
      <!-- Section: Social media -->
      <section class="d-flex justify-content-center m-5 p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span> Nos réseaux sociaux pour rester en contact :</span>
        </div>
        <div>
          <a href="" class="me-4 text-reset pl-5">
            <i class="fab fa-facebook-f"></i> 
          </a>
          <a href="" class="me-4 text-reset pl-5">
            <i class="fab fa-twitter"></i> 
          </a>
          <a href="" class="me-4 text-reset pl-5">
            <i class="fab fa-instagram"></i> 
          </a>
          <a href="" class="me-4 text-reset pl-5"> 
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </section>

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-building"></i> Groupomania
              </h6>
              <p>
                Notre entreprise, spécialisée dans la grande distribution, est
                en pleine expansion. Nous avons actuellement plus de 600
                collaborateurs.
              </p>
            </div>

          

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3"></i> 3 Place Arthur Chaussy, Melun,
                77000, France
              </p>
              <p><i class="fas fa-phone me-3"></i> +(33) 01 34 57 67 88</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05)"
      >
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://groupomania.com/">
          Groupomania Corp</a
        >
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>





<style>
body {
    align-items: center;
    margin: 2%
}

.jumbotron {
    background-image: url(../assets/equipe-projet-creation-dentreprise.png);
    height: 250px;
    opacity: 0.4;
    background-repeat: repeat;
  }
</style>