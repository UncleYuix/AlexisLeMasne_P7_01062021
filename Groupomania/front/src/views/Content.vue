<template>
  <div class="leContenuQuiDoitLoad">
    <my-header> </my-header>

    <article class="text-center m-5">
      <!-- le contenu chargé par l'API commence là dans l'article--->

      <div id="app">
        <newMessage
          v-bind:revele="revele"
          v-bind:toggleModale="toggleModale"
        ></newMessage>
        <div v-on:click="toggleModale" class="btn btn-success pt-5 mr-5">
          Poster un message !
        </div>

        <!-- <router-link to="/addMessage"> Ajouter un message </router-link>
        <a href="..\components\addMessage.vue" class="afficher" role="button">
          Poster un message sur notre mur !
        </a> -->

        <button v-on:click="updatePost()" class="afficher">
          Afficher le flux de la communauté !
        </button>
        <ul>
          <li v-for="message in messages" :key="message">
            <div class="col-10 m-5" id="post-box">
              <div class="user border border-danger" id="author-box">
                <p>
                  <i class="fas fa-portrait"></i> Post par id:
                  {{ message.id }} à la date du :
                  {{ message.createdAt }}
                </p>
              </div>
              <div class="title border border-info" id="message-box">
                <p class="font-weight-bold">{{ message.title }}</p>
                <p class="font-italic">{{ message.attachment }}</p>
                <p class="font-italic">{{ message.content }}</p>
              </div>
              <div class="title border border-info" id="like-box">
                {{ message.likes }}
                <button v-on:click="Liked(message.id)">
                  <i class="far fa-thumbs-up"></i>
                </button>
                <div class="wrapper">
                  <div id="merci" class="hide">
                    Merci pour le vote
                  </div>
                </div>
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
import newMessage from "../components/newMessage";
import header from "../components/header";
import footer from "../components/footer";
import axios from "axios";

// let button = document.querySelector('#button');
// let merci = document.querySelector('#merci');

export default {
  components: {
    "my-header": header,
    "my-footer": footer,
    newMessage: newMessage,
  },
  name: "App",
  data() {
    return { messages: [] };
    // { revele: true }; remetre la virgule au dessus
  },
  methods: {
    updatePost() {
      axios
        .get("http://localhost:8080/api/messages/")
        .then((response) => (this.messages = response.data))
        .catch((error) => error);
    },
    toggleModale: function() {
      this.revele = !this.revele;
    },
    Liked(id) {
      alert("hop le like !");
      console.warn(id);
      let token = localStorage.getItem("token");
      axios.post("http://localhost:8080/api/messages/" + id + "/vote/like", {
        headers: { Authorization: "Bearer " + token },
      });
    },
  },
};
</script>

<style>
body {
  align-items: center;
}

.jumbotron {
  background-image: url(../assets/equipe-projet-creation-dentreprise.png);
  height: 250px;
  opacity: 0.4;
  background-repeat: repeat;
}

#app ul {
  list-style-type: none;
}

#app .afficher {
  color: rgb(114, 85, 85);
  background-color: rgb(211, 214, 213);
  border-radius: 30px;
  height: 150px;
}

#app .afficher:hover {
  background-color: rgb(224, 194, 194);
  color: rgb(202, 94, 94);
}

#post-box {
  border: 5px solid rgb(70, 58, 58);
  border-left: dashed rgb(70, 53, 53);
  border-right: dashed rgb(70, 53, 53);
}

#author-box {
  background-color: rgb(238, 218, 218);
}

#like-box {
  background-color: rgb(211, 203, 203);
}

#message-box {
  background-color: whitesmoke;
}

.hide {
  visibility: hidden;
}
.fa-thumbs-up {
  color: red;
}

.fa-portrait {
  color: rgb(20, 119, 58);
  width: 50px;
  padding-top: 15px;
}

.afficher {
  font-family: cursive;
}
</style>
