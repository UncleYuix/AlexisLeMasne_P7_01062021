<template>
  <div
    class="bg-image d-flex align-items-center flex-column"
    style="
    background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.jpg');
    height: 100vh;
  "
  >

 <!-- Formulaire pour créer un compte  -->

    <div class="col col-12 col-sm-8 col-lg-5 mb-4 text-center">
      <img src="@/assets/icon-left-font.png" width="250px" class="my-5" alt="icon Groupomania"/>
      <h1 class="mb-5 font-weight-bold">Votre Media à toutes et tous !</h1>
      <form @submit="createAccount">
        <FormInput idLinked="Jean-Philippe" v-model="firstName" />

        <FormInput idLinked="Smett" v-model="lastName" />

        <FormInput
          idLinked="JeanPhil@wanadoo.fr"
          patternLinked="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
          v-model="email"
        />

        <FormInput
          idLinked="Password"
          v-model="password"
          patternLinked="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          class="mb-1"
        />

        <p class="m-3" id="regexMessage">
          <u>
            <i class="fas fa-exclamation-triangle" alt="icon danger"></i> Votre mot de passe doit
            contenir au moins une majuscule, un chiffre et 8 caractères
            <i class="fas fa-exclamation-triangle" alt="icon danger"></i>
          </u>
        </p>

        <p>
          <input
            type="submit"
            value="S'inscrire"
            class="btn btn-info border mb-3"
            alt="bouton inscrire"
          />
        </p>
      </form>

      <!-- Renvoi au Login  -->


      <div class="row col-12 col-sm-8 col-lg-12 text-center">
        <div class="col align-items-center justify-content-center p-2">
          <strong>
            <p class="my-auto mr-2">Déjà un compte?</p>
            <MessageRouter
              msg="Connectez vous!"
              route="login"
              class="connectYou"
              alt="bouton connectez vous"
            ></MessageRouter>
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// requête post a axios pour connexion à la page Posts ( sans avoir à faire un login pour une création de compte )
// Storage du Nom_Prenom
 
export default {
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    };
  },
  methods: {
    createAccount(e) {
      e.preventDefault();
      this.$axios
        .post("/auth/signup", {
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
  },
};
</script>
