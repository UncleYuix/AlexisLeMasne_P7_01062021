<template>
  <div class="leContenuQuiDoitLoad">
    <my-header> </my-header>



    <article class="text-center m-5">
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
   

          <!-- le contenu chargé par l'API commence là dans l'article--->


      <div id="app">
        <button v-on:click="updatePost()"> Voir le contenu </button>
        <ul>
          <li v-for="film in films" :key="film">
            <div class="col-8 text-center m-5" id="post-box">
              <div class="user border border-danger" id="author-box">
                posté par : {{ film.director }}
              </div>
              <div class="id border border-success" id="to-define-box">
                à l'heure de : {{ film.release_date }}
              </div>
              <div class="title border border-info" id="message-box">
                says {{ film.description }}
              </div>
      <div class="title border border-info" id="original-box">
                son message est : {{ film.original_title  }}
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
import header from "../components/header";
import footer from "../components/footer";
 import axios from 'axios'; // on le tente

export default {
  components: {
    "my-header": header,
    "my-footer": footer,
  },
     name: "App",
      data(){
 return { films: [] }},
       methods: {
         updatePost() {
axios.get('https://ghibliapi.herokuapp.com/films').then(response => this.films = response.data).catch(error => error );
       }
       
     }
   };

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

#app ul {
 list-style-type: none
}
post-box {
}
#author-box, #to-define-box, #message-box, #original-box {
  padding: 10px;
border-radius: 98px 98px 98px 98px;
-webkit-border-radius: 98px 98px 98px 98px;
-moz-border-radius: 98px 98px 98px 98px;
background: #9be6e6;
border: 10px solid #ff6550;
}

#message-box {
  background-color: silver;
}
#original-box {
  background-color: rgb(228, 170, 170);
}
</style>
