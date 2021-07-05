<template>
  <header class="border border-dark d-flex flex-row justify-content-between px-3 mb-4 bg-info">

    <!-- Le logo qui permettra de retourner à /posts -->
    <div class="col-4 d-flex align-items-center justify-content-start px-0">
      <router-link to="/posts">
        <img src="@/assets/icon-left-font.png" id="logoGroupo" width="250px" alt="Logo Groupomania" class="logo"/>
      </router-link>
    </div>

    <div class="d-flex col-4 justify-content-center align-items-center">
      <p class="text-dark" id="name"> Bonne navigation  {{ fullName }} ! </p>
    </div>

    <!-- L'avatar + upload à droite pour aller sur son compte ou createpost -->
    <div id="rightSide" class="d-flex flex-row align-items-center justify-content-end col-4">
             <router-link to="/rules" >
        <button class="my-auto btn-red p-1">         
           Règles 
        </button>
      </router-link>
         <router-link to="/upload" >
        <button class="my-auto btn-red p-1">         
          + Publier 
        </button>
      </router-link>
      <router-link to="/settings" class="ml-4">
        <img src="@/assets/icon-account.png" />
      </router-link>
      

    </div>

  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      fullName: "",
    }
  },
  mounted() {
    this.fullName = localStorage.getItem("name").split('_')[0] + (' ') + localStorage.getItem("name").split('_')[1]
  },
  destroyed() {
    this.fullName= null;
  }
};
</script>

<style lang="scss" scoped>

#rightSide {
  align-content: center;
  &>a>img {
    width: 50px;
    height: 50px;
  }
}

p {
  font-size: 28px;
  font-weight: 500;
  margin: 0;
}

@media all and (max-width: 750px) {
  #logoGroupo {
    width: auto;
    height:40px;
  }

  #name {
    font-size: 15px;
    font-weight: 600;
    display:none
  }

  #rightSide {
    &>a>img {
      width:auto;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    &>a>button {
      font-size: 13px;
      width: 65px;
      height: 50px;
      padding: auto;  
    }
  }
} 
</style>