<template>
  <div class="leContenuQuiDoitLoad">


    <my-header>
  
    </my-header>


    <!-- le contenu chargé par l'API commence là dans l'article--->

    <article class="text-center m-5">
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
      <p>plop</p>
    </article>

  <my-footer>
  </my-footer>
  </div>
</template>


<script>
import header from '../components/header';
import footer from '../components/footer'

  export default {
     components:{
         'my-header':header,
         'my-footer':footer
     }
  }
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
