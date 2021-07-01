<template>
  <header>
    <div class="bg-dark">
      <div class="row">
        <nav class="col navbar navbar-expand-lg navbar-dark">
          <div class="navbar-brand ml-3">
            <img
              src="../assets/icon-left-font-monochrome-white.png"
              width="220"
              height="150"
              alt="Site logo"
            />
          </div>
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
                <a class="nav-link border border-info ml-5" href="">
                  Mes Publications</a
                >
                <router-link to="myPublication"> Mes publications </router-link>
              </li>

              <li class="nav-item active">
                <a class="nav-link border border-info ml-5" href="">
                  Poster un message sans modale </a
                >
                <router-link to="addMessage"> Poster un message sans Modale  </router-link>
              </li>

              <li class="nav-item active">
                <a class="nav-link border border-info ml-5" href="myAccount">
                  Mon Compte
                </a>
                <router-link to="myAccount"> Mon compte </router-link>
              </li>

              <li class="nav-item active">
                <a
                  href="Register"
                  v-on:click="Logout()"
                  class="nav-link border border-info ml-5"
                >
                  Se déconnecter
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="jumbotron text-center"></div>

    <div class="row">
      <!-- c'est là que ça chie dans les mediaQ -->
      <div class="col-12 text-center font-weight-light xs-Display 3">
        <!-- <img
          class="logo"
          src="../assets/icon-left-font-monochrome-black.png"
          height="200"
        /> -->
        <aside class="border border-dark rounded-sm">
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
  </header>
</template>

<script>
export default {
  name: "header",
  methods: {
    Logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
header {
  width: 99%;
}
.logo {
  margin: 25px;
  padding: 10px;
  border: 3px solid black;
  border-radius: 50px;
}
</style>
