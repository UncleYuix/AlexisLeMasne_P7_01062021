<template>
  <div
    id="backdrop"
    class="bg-image"
    style="
    background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.jpg');
    height: 100vh;
  "
  >
    <div class="Register">
      <div v-if="showLogin" class="Login">
        <form
          method="post"
          @submit.prevent="connection"
          class="form-signin container-xl col-9 col-lg-4"
        >
          <div class="text-center mb-4">
            <img
              src="../assets/icon-above-font.png"
              class="mb-4"
              alt="logo"
              width="250"
              height="250"
            />
            <h1 class="h3 mb-3 font-weight-normal">
              Votre Média à views toutes et tous !
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
                v-model="password"
              />
            </div>

            <button class="btn btn-lg btn-warning btn-block" type="submit">
              Se connecter
            </button>
          </div>
        </form>
        <div class="error" v-if="error">
          {{ error.error }}
        </div>
      </div>

      <div v-if="!showLogin" class="SignIn">
        <form class="form-signin container-xl col-9 col-lg-4">
          <div class="text-center mb-4">
            <img
              src="../assets/icon-above-font.png"
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
              placeholder="Smett"
              v-model="lastname"
            />
          </div>

          <div class="form-label-group mb-2 text-center">
            <label for="inputfirstname"> Votre Prenom </label>
            <input
              type="firstName"
              id="inputfirstName"
              class="form-control"
              placeholder="Jean-Phillipe"
              v-model="firstname"
            />
          </div>

          <div class="form-label-group mb-2 text-center">
            <label for="inputEmail"> Votre courriel </label>
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Jean-Phil@groupomania.fr"
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

          <button
            type="submit"
            @click.prevent="createAccount"
            class="btn btn-lg btn-primary btn-block"
          >
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
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      messageConnection: null,
      userId: "",
      showLogin: true,
    };
  },
  methods: {
    toggleShowLogin() {
      this.showLogin = !this.showLogin;
    },
    async createAccount() {
      axios
        .post("http://localhost:3000/api/auth/signup", {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
        })
        .then((response) => {
          sessionStorage.setItem("token", response.data.token),
            localStorage.setItem(
              "name",
              response.data.user.firstName + "_" + response.data.user.lastName
            ),
            (this.$axios.defaults.headers.common["Authorization"] =
              "Bearer " + response.data.token),
            this.$router.push({ name: "Posts" });
        });
    },
    async connection() {
      axios
        .post("http://localhost:3000/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          sessionStorage.setItem("token", response.data.token),
            localStorage.setItem(
              "name",
              response.data.user.firstName + "_" + response.data.user.lastName
            ),
            (this.messageConnection = response.data.message),
            (this.$axios.defaults.headers.common["Authorization"] =
              "Bearer " + response.data.token),
            setTimeout(
              function() {
                this.$router.push({ name: "Posts" });
              }.bind(this),
              2000
            );
        })
        .catch((error) => {
          if (error.response.status === 429) {
            this.messageConnection = error.response.data;
          } else {
            this.messageConnection = "Invalid username!";
          }
        });
    },
  },
  mounted() {
    sessionStorage.removeItem("token");
    localStorage.removeItem("name");
  },
};
</script>
