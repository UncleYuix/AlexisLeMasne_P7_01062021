<template>
  <div class="leContenuQuiDoitLoad">
    <my-header> </my-header>



    <article class="text-center m-5">
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>

          <!-- le contenu chargé par l'API commence là dans l'article--->


      <div id="app">
        <button v-on:click="updatePost()">Mettre à jour</button>
        <ul>
          <li v-for="post in posts" :key="post">
            <div class="col-8 text-center border border-dark m-5">
              <div class="user border border-danger">
                posté par : {{ post.userId }}
              </div>
              <div class="id border border-success">
                à l'heure de : {{ post.id }}
              </div>
              <div class="title border border-info">
                son message est : {{ post.title }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </article>

    <my-footer> </my-footer>
  </div>
</template>




<script>
// import Vue from "vue";
// import axios from "axios";
import header from "../components/header";
import footer from "../components/footer";

export default {
  components: {
    "my-header": header,
    "my-footer": footer,
  },
};

// var app = new Vue({
//   el: "#app",
//   data()  {
//      return
//      { []
//      }
//   },
//   methods: {
//     updatePost() {
//       axios
//         .get("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => (this.posts = response.data))
//         .catch((erreur) => (this.posts = [{ title: "erreur de charg" }]));
//       axios
//         .get("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => console.log(response));
//     }
//   },
// });
</script>



<style>
body {
  align-items: center;
  margin: 2%;
}

.jumbotron {
  background-image: url(../assets/equipe-projet-creation-dentreprise.png);
  height: 250px;
  opacity: 0.4;
  background-repeat: repeat;
}
</style>
