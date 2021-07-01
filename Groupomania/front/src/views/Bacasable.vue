<template>
  <div id="app">
    <button v-on:click="updatePost()">Mettre à jour</button>
    <ul>
      <li v-for="post in posts" :key="post">
        <div class="col-8 text-center border border-dark m-5">
          <div class="user border border-danger">
            posté par (post.userId) : {{ post.userId }}
          </div>
          <div class="id border border-success">
            à l'heure de  (post.id): {{ post.id }}
          </div>
          <div class="title border border-info">
            son message est (post.title) : {{ post.title }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
 import axios from 'axios';
   export default {
     name: "App",
      data(){
 return { posts: [] }},
       methods: {
         updatePost() {
axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.posts = response.data).catch(error => error );
       }
       
     }
   }
</script>
