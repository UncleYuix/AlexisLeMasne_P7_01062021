<template>

  <nav>
  <router-view />

  <footer class="mt-5 mb-3 text-muted text-center">
    <p>         
          <router-link to="/Content"> lien vers vue Content sans login </router-link>
    </p>
    <p> Je met ça en bas   <a href="content.html">  le vieux html du Content </a> </p>
      <p> &copy; Produit par Mr Alexis LM pour la société Groupomania -  2021</p>
    </footer>
  </nav>

</template>

