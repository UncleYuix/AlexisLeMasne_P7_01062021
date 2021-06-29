<template>
          <header>
      <div class="bg-dark">
        <div class="row">
          <nav class="col navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand ml-3" href="index.html">
              <img
                src="../assets/icon-left-font-monochrome-white.png"
                width="220"
                height="150"
                alt="Site logo"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarContent" class="collapse navbar-collapse">
              <ul class="navbar-nav float-right ml-5 mr-1 text-center">
                <li class="nav-item active">
                  <a class="nav-link border border-primary ml-5" href="">
                    Accueil</a
                  >
                </li>

                <li class="nav-item active">
                  <a class="nav-link border border-primary ml-5" href=""
                    >Publication</a
                  >
                </li>

                <li class="nav-item active">
                  <a class="nav-link border border-primary ml-5" href="">
                    Profil</a
                  >
                </li>

                <li class="nav-item active">
                  <a
                    class="nav-link border border-primary ml-5"
                    href="Register"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div class="jumbotron text-center"></div>

      <div class="row">
        <div class="col-12 text-center font-weight-light xs-Display 3">
          <img
            class="caca"
            src="../assets/icon-left-font-monochrome-black.png"
            height="200"
          />
          <aside class="border border-primary">
            <h1>
              Structurons notre collectif vers un avenir co-construit et
              bienveillant
            </h1>
            <h2>Et la bonne année aussi, profitez du 13e mois !</h2>
            <h3>
              le forum est soumis a modération, contactez l'administrateur en
              cas problèmes ou situation ne respectant
              <router-link to="/rules"> les règles </router-link>
            </h3>
          </aside>
        </div>
      </div>
    </header>
</template>