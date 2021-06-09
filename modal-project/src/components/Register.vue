<template>
  <div class="backdrop">
    <div class="Register">
        <div v-if="showLogin" class="Login">
          <form class="form-signin container-xl col-9 col-lg-4">
            <div class="text-center mb-4">
              <img src="../assets/icon-above-font.png"
                class="mb-4"
                alt="logo"
                width="250"
                height="250"
              />
              <h1 class="h3 mb-3 font-weight-normal">
                Votre Média à HEIN DIT DONC toutes et tous !
              </h1>
              <p>
                Partager votre quotidien entre collègues, dans une ambiance
                bienveillante
              </p>
            </div>

            <div class="form-label-group mb-5 text-center">
              <label for="inputEmail"> Votre courriel </label>
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Jean-Phil@groupomania.fr "
                v-model="email"
              />

              <!-- ne pas oublier les  required autofocus -->

              <div class="form-label-group mb-5 text-center">
                <label for="inputPassword">Mot de passe </label>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="VotreMotdePasse"
                  v-model='password'
                />
              </div>

              <button class="btn btn-lg btn-primary btn-block" type="submit">
                Se connecter
              </button>
            </div>
          </form>
        </div>

        <div v-if="!showLogin" class="SignIn">
          <form class="form-signin container-xl col-9 col-lg-4">
            <div class="text-center mb-4">
                <img src="../assets/icon-above-font.png"
                class="mb-4"
                alt="logo"
                width="250"
                height="250"
              />
              <h1 class="h3 mb-3 font-weight-normal">
                Votre Média pour toutes et tous !
              </h1>
              <p>
                Partager votre quotidien entre collègues, dans une ambiance
                bienveillante
              </p>
            </div>

            <div class="form-label-group mb-2 text-center">
              <label for="inputName"> Votre nom </label>
              <input
                type="name"
                id="inputName"
                class="form-control"
                placeholder="Smett "
                v-model="name"
              />
            </div>

            <div class="form-label-group mb-2 text-center">
              <label for="inputfirstname"> Votre Prenom </label>
              <input
                type="firstName"
                id="inputfirstName"
                class="form-control"
                placeholder="Jean-Phillipe "
                 v-model="firstName"
              />
            </div>

            <div class="form-label-group mb-2 text-center">
              <label for="inputEmail"> Votre courriel </label>
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Jean-Phil@groupomania.fr "
                 v-model="email"
              />
            </div>

            <div class="form-label-group mb-2 text-center">
              <label for="inputPassword">Mot de passe </label>
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="VotreMotdePasse"
                 v-model="password"
              />
            </div>

            <button class="btn btn-lg btn-primary btn-block" type="submit">
              S'inscrire
            </button>
          </form>
        </div>

        <div class="signin pt-6 text-center">
          <p v-show="showLogin">Pas encore enregistré sur notre plateforme ?</p>
          <p v-show="!showLogin">Vous êtes déjà membre ?</p>
          <button
            @click="toggleShowLogin"
            class="btn btn-primary btn-lg"
            role="button"
          >
            <span v-if="showLogin"> S'inscrire ? </span>
            <span v-else> Se connecter ? </span>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      name: "",
      firstName: "",
      email: "",
      password: "",
      showLogin: true,
    };
  },
  methods: {
    toggleShowLogin( ) {
      console.log("Le petit test de consol"),
        (this.showLogin = !this.showLogin);
    },
  },
};
 </script>

