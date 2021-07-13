<template>
  <div class="pb-5 min-height bg-clair">
    <Header />

    <!-- On charge ici le contenu d'un id de post pour afficher les commentaires  -->

    <!-- v-if si on supprime le post   -->
    <div
      class="container d-flex flex-column align-items-center border border-dark bg-info3"
      v-if="deleted === false"
    >
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
        @post-deleted="updatePost"
      >
      </PostWall>

      <!-- Formulaire pour l'ajout de commentaire -->
      <div
        class="d-flex flex-row justify-content-between align-items-end text-light border border-light rounded-lg p-3 mb-3 bg-info2"
      >
        <div class="d-flex flex-column container">
          <form class="row">
            <label for="newComment" class="mr-auto h4">
              <u> Votre commentaire: </u>
            </label>
            <div class="w-100"></div>
            <textarea
              class="rounded-lg text-area-height inside-padding col-11"
              placeholder=""
              maxlength="250"
              minlength="1"
              v-model="newComment"
              id="inputNewComment"
            />
          </form>
        </div>

        <!-- création de bouton retour à l'accueil et la fonction click pour poster le commentaire ajouté  -->

        <div>
          <router-link to="/Posts" class="btn btn-dark btn mb-2 ">
            Accueil
          </router-link>
          <button @click="sendComment" class="btn btn-red mr-3 bg-info3">
            Envoyer
          </button>
        </div>
      </div>

      <!-- Affichage des commentaires -->
      <Commentaries
        v-for="commentary in commentaries"
        :key="commentary.id"
        :idPost="commentary.postId"
        :comment="commentary.comment"
        :user="commentary.userId"
        :time="commentary.date"
        :commentId="commentary.id"
      >
      </Commentaries>
    </div>

    <!-- Si un commentaire est supprimé -->
    <div v-else class="border border-dark rounded-lg  container py-3 mt-4">
      <p class="mb-3">
        {{ message }}
      </p>

      <router-link to="/Posts" class="btn btn-primary ml-3">
        Retour à l'accueil
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      commentaries: [],
      likes: Number,
      dislikes: Number,
      userId: Number,
      role: "",
      message: "",
      deleted: false,
      postId: Number,
      newComment: "",
    };
  },
  created() {
    if (sessionStorage.getItem("token") === null) {
      this.$router.push({ name: "Login" });
    }
  },
  mounted() {
    // l'administrateur à le droit de supprimer tout les posts , on vérifie donc si l'user est bien l'admin
    // dans ce cas là, il a la croix rouge

    this.$axios
      .get(`auth/profile/${sessionStorage.getItem("token")}`)
      .then((response) => {
        this.role = response.data.user[0].role;
        this.userId = response.data.user[0].id;
        this.$axios
          .get(`/posts/${this.$route.path.split("/")[2]}`)
          .then((responses) => {
            this.posts = responses.data.post;
            this.commentaries = responses.data.commentaires;
            this.postId = responses.data.post[0].id;
          });
      });
  },
  methods: {
    updatePost() {
      this.deleted = true;
      this.message = "Post bien supprimé!";
    },
    sendComment() {
      // request pour l'envoi du commentaire puis réponse et publication du message
      this.$axios
        .post(`/posts/${this.postId}/comments`, {
          userId: `${this.userId}`,
          comment: `${this.newComment}`,
        })
        .then((response) => {
          this.$axios
            .get(`/posts/${this.$route.path.split("/")[2]}`)
            .then((responses) => {
              this.posts = responses.data.post;
              this.commentaries = responses.data.commentaires;
              this.postId = responses.data.post[0].id;
              this.newComment = "";
            });
        });
    },
  },
};
</script>

<style scoped lang="scss">
.text-area-height {
  min-height: 119px;
  max-height: 120px;
}

.clickImage p {
  display: none;
}

.bg-clair {
  background-color: rgba(157, 192, 202, 0.849);
}

@media all and (max-width: 750px) {
  label {
    font-size: 21px;
  }
}
</style>
