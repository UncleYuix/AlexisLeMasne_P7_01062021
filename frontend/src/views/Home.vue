/* eslint-disable */
<template>
  
    <article id="whatIsTheUse">
  
        <div>
          <router-link to="/register">Se connecter</router-link>
        </div>
  

        <div>
          <router-link to="/content"> le Contenu du site que je cacherai donc ensuite ! ! ! </router-link>
        </div>

  
    </article>
   <!--- <register /> --->
  
</template>

<script>
import register from "../components/register"
// import Content from "./views/Content.vue"

export default {
  name: "App",
  views: { register },
};

</script>

