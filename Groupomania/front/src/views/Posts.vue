<template>
  <div class="pb-5 mt-2 min-height bg-clair">
    <Header />

    <!-- Le header est load, on ajoute un jumbo décoratif qui partira en plus petit mediaquery  -->

    <div
      class="jumbotron text-center"
      style="
    background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/89.jpg');
    height: 35vh"
    ></div>

    <aside class="border border-dark rounded-sm text-center">
      <h1>
        Structurons notre collectif vers un avenir co-construit et bienveillant
      </h1>
      <p class="display-6 p-4">
        <em>
          le forum est soumis à modération, contactez l'administrateur en cas de
          problèmes ou situation ne respectant
        </em>
        <router-link to="/rules"> les règles </router-link>
      </p>
    </aside>

    <!-- On donne les infos à PostWall qui se chargera comme components de s'occuper du contenu de l'app + mise en forme du contenu mysql  -->
    <div class="container bg-info6">
      <PostWall
        v-for="post in posts"
        :key="post.id"
        :postId="post.id"
        :image="post.imageUrl"
        :title="post.title"
        :date="post.date"
        :postUserId="post.userId"
        :role="role"
        :userId="userId"
        @post-deleted="updatePosts"
      >
      </PostWall>
    </div>

    <!-- le footer est load par cette balise, il n'apparait que sur la page Posts et pas les autres -->
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      userId: Number,
      role: "",
    };
  },

  // on vérifie que l'user est bien logué, sinon, on renvoi au Login car il y a un problème de sécurité
  // on fait une request token avec un get au profile de l'user pour celà

  created() {
    if (sessionStorage.getItem("token") === null) {
      this.$router.push({ name: "Login" });
    }
  },
  mounted() {
    this.$axios
      .get(`auth/profile/${sessionStorage.getItem("token")}`)
      .then((response) => {
        this.role = response.data.user[0].role;
        this.userId = response.data.user[0].id;
        this.$axios.get("/posts").then((responses) => {
          this.posts = responses.data.post;
        });
      });
  },
  methods: {
    // on demande à la bdd d'avoir la liste des posts avec une requête get/axios
    updatePosts() {
      setTimeout(
        function() {
          this.$axios
            .get("/posts")
            .then((response) => (this.posts = response.data.post));
        }.bind(this),
        150
      );
    },
  },
};
</script>

<style scoped lang="scss">
.bg-clair {
  background-color: rgba(157, 192, 202, 0.849);
}

.bg-info6
{
  background-color:#98c6cd ;
}

@media screen and (max-width: 640px) {
  .jumbotron {
    display: none;
  }

  h1 {
    font-size: 25px;
  }
}
</style>
