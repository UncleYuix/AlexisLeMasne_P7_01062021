<template>
  <div
    id="myAccount"
    class="fullAccount text-center"
    style="
    background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/90.jpg');
    height: 100vh;
   
  "
  >
    <h1>Profil de votre compte</h1>
    <div class="actualProfil border border-white m-5">
      <div>
        <u> E-mail : </u>
        <p> mon-email </p>

        <!-- {{ users.email }}
       {{ users.name }} {{ users.username }} -->
      </div>
      <div>
        <u> Nom et Prenom :</u>
        <p>users.name et users.username</p>
      </div>
      <div>
        <u> Date de création de compte : </u>
        <p>user.dateblablabla</p>
      </div>
    </div>

    <form method="post" @submit.prevent="updateProfile">
      <div>
        <h3 class="speech m-5">
          nous vous donnons la possibilité de changer de nom d'utilisateur en cas d'erreur à l'authentification,
          merci de garder votre nom d'usage au sein de l'entreprise
        </h3>
        <label for="name"></label>
        <input type="name" id="name" placeholder="Nom" v-model="name" />
      </div>
      <div>
        <label for="firstname"></label>
        <input
          type="firstname"
          id="firstname"
          placeholder="Prénom"
          v-model="username"
        />
      </div>
      <button type="submit" @click.prevent="updateProfile">Modifier</button>
    </form>

    <h4> Vous avez la possibilité de supprimer votre compte, attention à ce bouton, il n'y a pas de retour en arrière </h4>
        <button class="deletebtn" type="submit" @click.prevent="deleteProfile">
      Supprimer mon compte
    </button>


      <router-link to="Content"  class="nav-link border border-info m-5 text-center bg-dark"> Retour à l'accueil </router-link>
      <router-link to="Content"  class="btn btn-primary btn-lg"> Accueil </router-link>
      

    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "myAccount",
  data() {
    return {
      token: "",
      error: "",
      userId: "",
      email: "",
      username: "",
    };
  },
  methods: {
    loadProfil() {
      let token = localStorage.getItem("token");

      axios
        .get("http://localhost:8080/api/users/me/", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          this.users = res.data;
        })
        .catch((error) => {
          console.log({ error });
        });
    },

    loadProfile() {
      let token = localStorage.getItem("token");
      axios.get("http://localhost:8080/api/users/me/", {
        headers: { Authorization: "Bearer " + token }.then((response) =>
          console.log(response)
        ),
      });
    },
    updateProfile() {

    },
    deleteProfile(){

    }
  },
  mounted() {
    this.loadProfile();
    this.loadProfil();
  },
};
</script>

<style scoped>
.fullAccount {
  color: white;
}

.actualProfil p {
  font-size: 1.2em;
  font-family: cursive;
}



</style>
