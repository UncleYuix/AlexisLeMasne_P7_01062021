<template>
  <div
    class="bg-image d-flex align-items-center flex-column"
    style="
    background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.jpg');
    height: 100vh;
  "
  >

  <!-- Formulaire pour le login au compte et homepage en premiere visite ou déconnexion  -->

    <div class="col col-12 col-sm-8 col-lg-5 text-center">
      <img src="@/assets/icon-left-font.png" width="250px" class="my-5" alt="icon Groupomania" />
      <h1 class="mb-5 font-weight-bold">
        Partager votre quotidien entre collègues, dans une ambiance
        bienveillante !
      </h1>
      <h2 class="mb-5 font-weight-bold" v-if="messageConnection === null">
        Connectez-vous !
      </h2>

      <h2 class="mb-5 font-weight-bold" v-else>{{ messageConnection }}</h2>

      <form @submit="connection">
        <FormInput idLinked="VotreEmail" v-model="email" label="email"/>

        <FormInput idLinked="Password" v-model="password" class="mb-5" />

        <p>
          <input
            type="submit"
            value="Se connecter"
            class="btn btn-info border mb-3"
          />
        </p>
      </form>
      <div class="row col-12 col-sm-8 col-lg-12">
        <div
          class="col align-items-center border border-dark justify-content-center text-center bg-white1 rounded-pill"
        >
          <p class="my-auto mr-2">Pas encore de compte?</p>
          <MessageRouter msg="Inscrivez vous!" route="signup"></MessageRouter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// request post pour login + storage utilisateurs, info bearer + token prise + erreur si utilisateurs pas existant ou faux 

export default {
  data() {
    return {
      email: "",
      password: "",
      messageConnection: null,
      userId: "",
    };
  },
  methods: {
    connection(e) {
      e.preventDefault();
      this.$axios
        .post("/auth/login", {
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

<style scoped lang="scss">
.bg-white1 {
  background-color: rgb(228, 200, 182);
}
</style>
