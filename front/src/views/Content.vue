<template>
  <div class="leContenuQuiDoitLoad">
    <my-header> </my-header>



    <article class="text-center m-5">
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
   

          <!-- le contenu chargé par l'API commence là dans l'article--->


      <div id="app">
        <button v-on:click="updatePost()"> Si vous voulez voir le contenu ... cliquez ici </button>
        <ul>
          <li v-for="message in messages" :key="message">
            <div class="col-8 text-center m-5" id="post-box">
              <div class="user border border-danger" id="author-box">
               <p> posté le  : {{ message.createdAt }} par  id: {{ message.id }} </p>
              </div>
              <div class="title border border-info" id="message-box">
                <p class="font-weight-bold"> {{ message.title }} </p> 

              <p class="font-italic"> son message est : {{ message.content }} </p> 
              </div>
                   <div class="title border border-info" id="original-box">
                {{ message.likes }}  <i class="far fa-thumbs-up"></i>
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
 return { messages: [] }},
       methods: {
         updatePost() {
axios.get('http://localhost:8080/api/messages/').then(response => this.messages = response.data).catch(error => error );
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

#app button {
 color: red;
 background-color: rgb(55, 114, 84);
 border-radius: 30px;
 height: 50px;
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
