<template>
  <div id="backdrop" class="bg-image"
    style="
    background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.jpg');
    height: 100vh;
  ">
    <div class="Register">
      <div v-if="showLogin" class="Login">
        <form
          method="post"
          @submit.prevent="buttonLogin"
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
              v-model="name"
            />
          </div>

          <div class="form-label-group mb-2 text-center">
            <label for="inputfirstname"> Votre Prenom </label>
            <input
              type="firstName"
              id="inputfirstName"
              class="form-control"
              placeholder="Jean-Phillipe"
              v-model="username"
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
            @click.prevent="buttonRegister"
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
  name: "Register",

  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      token: "",
      UserId: "",
      showLogin: true,
    };
  },
  methods: {
    toggleShowLogin() {
      this.showLogin = !this.showLogin;
    },
    async buttonRegister() {
      const data = {
        email: this.email,
        name: this.name,
        username: this.username,
        password: this.password,
      };
      await axios
        .post("http://localhost:8080/api/users/register/", data)
        .then((res) => {
          console.log(res);
          this.$router.push("/Register");
        })
        .catch((error) => {
          this.error = error.response.data;
          console.log(error.response.data);
        });
    },
    async buttonLogin() {
      await axios
        .post("http://localhost:8080/api/users/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data.userId);
          }
          this.$router.push("/Content");
        })
        .catch((error) => {
          this.error = error.response.data;
        });
    },
  },
};
</script>
