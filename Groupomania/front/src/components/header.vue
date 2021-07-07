<template>

<!-- il s'agit d'un composants qui s'ajoutera sur les views de type header -->
  <header
    class="border border-dark d-flex flex-row justify-content-between px-3 mb-4 bg-info"
  >
    <!-- Le logo qui permettra de retourner à /posts -->
    <div class="col-4 d-flex align-items-center justify-content-start px-0">
      <router-link to="/posts">
        <img
          src="@/assets/icon-left-font.png"
          id="logoGroupo"
          width="250px"
          alt="Logo Groupomania"
          class="logo"
        />
      </router-link>
    </div>

    <div
      class="d-flex col-4 justify-content-center align-items-center text-center"
    >
      <p class="text-warning" id="name">
        <i class="fas fa-anchor"></i> Bonne navigation {{ fullName }} !
        <i class="fas fa-anchor"></i>
      </p>
    </div>

    <div
      id="rightSide"
      class="d-flex flex-row align-items-center justify-content-end col-4"
    >
      <button class="Gros btn btn-dark m-2" @click="backToLogin">
        Se déconnecter
      </button>
      <button class="Tiny btn btn-danger ml-2 " @click="backToLogin">
        X
      </button>
      <div class="rightYellow m-2">
        <router-link to="/upload">
          <button class="btn-warning p-1 m-2">
            Publier
          </button>
        </router-link>
        <router-link to="/settings">
          <button class="btn-warning p-1 m-2">
            Profil
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      fullName: "",
    };
  },
  methods: {
    backToLogin() {
      this.$router.push({ name: "Login" });
    },
  },
  mounted() {
    this.fullName =
      localStorage.getItem("name").split("_")[0] +
      " " +
      localStorage.getItem("name").split("_")[1];
  },
  destroyed() {
    this.fullName = null;
  },
};
</script>

<style lang="scss" scoped>
#rightSide {
  align-content: center;
}

p {
  font-size: 28px;
  font-weight: 500;
  margin: 0;
}

@media all and (max-width: 750px) {
  #logoGroupo {
    width: 145px;
    height: 50px;
  }

  #name {
    font-size: 15px;
    font-weight: 600;
    display: none;
  }

  .btn-warning {
    margin-bottom: 10px;
  }
}
</style>
