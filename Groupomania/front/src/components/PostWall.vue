<!-- Seulement pour les posts sans commentaires (genre dans le fil d'actu) -->
<template>
  <div
    class="text-light d-flex flex-column mx-auto mb-5 py-3 px-4 w-75 border border-danger m-3 bg-info4"
  >
    <div
      class="py-3 d-flex justify-content-between align-items-center border border-warning p-3 m-2 bg-info2"
    >
      <h3>{{ title }}</h3>

      <div class="d-flex flex-column">
        <!-- On vérifie les conditions d'affichage du bouton modify -->
        <router-link :to="routeUpdate">
          <button
            v-if="postUserId === userId"
            class="Gros btn btn-info5 mb-2"
            :id="postId"
          >
            Modifier
          </button>
          <button
            v-if="postUserId === userId"
            class="Tiny btn btn-info5 mb-2"
            :id="postId"
          >
            <i class="fas fa-edit"></i>
          </button>
        </router-link>
        <!-- On vérifie les conditions d'affichage du bouton delete -->
        <button
          v-if="role === 'admin' || postUserId === userId"
          class="Gros btn btn-info5"
          @click="deletePost"
        >
          Supprimer
        </button>
        <button
          v-if="role === 'admin' || postUserId === userId"
          class="Tiny btn btn-info5 mb-2"
          @click="deletePost"
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>

    <router-link :to="route">
      <img :src="image" alt="Image du post" class="not-too-big m-auto" />
    </router-link>

    <div
      class="d-flex flex-row justify-content-between py-2 align-items-center bg-info3"
    >
      <div class="mr-auto d-flex">
        <div
          class="d-flex flex-row align-items-center border border-warning pr-2"
        >
          <i
            class="pouceImg fas fa-thumbs-up pl-3"
            alt="Pouce up"
            @click="addLike"
          ></i>
          <p class="ml-1">{{ likes }}</p>
        </div>

        <div
          class="d-flex flex-row align-items-center border border-warning pr-2"
        >
          <i
            class="pouceImg fas fa-thumbs-down pl-3"
            alt="Pouce down"
            @click="addDislike"
          ></i>
          <p class="ml-1">{{ dislikes }}</p>
        </div>
      </div>

      <p v-if="message">
        {{ message }}
      </p>
    </div>
    <div class="clickImage border border-warning p-1">
      <i
        class="infoLogo fas fa-info-circle"
        @click="Wrong"
        alt="icone info"
      ></i>
      Cliquez sur l'image pour lire et commenter
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    postUserId: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    postId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      message: "",
      route: "",
      routeUpdate: "",
      likes: Number,
      dislikes: Number,
    };
  },
  mounted() {
    this.$axios.get(`/posts/likedislike/${this.postId}`).then((response) => {
      (this.likes = response.data.likes),
        (this.dislikes = response.data.dislikes);
    });
    this.route = "/post/" + `${this.postId}`;
    this.routeUpdate = "/postupdate/" + `${this.postId}`;
  },
  methods: {
    createMessage() {
      this.message = response.data.message;
    },
    deletePost() {
      this.$axios
        .delete(`/posts/${this.postId}`)
        .then(this.$emit("post-deleted"))
        .catch((error) => (this.message = error));
    },
    addLike() {
      this.$axios
        .post(`/posts/${this.postId}/like`, {
          type: 1,
          userId: this.userId,
        })
        .then((response) => {
          this.message = response.data.message;
          this.likes = response.data.likes;
          this.dislikes = response.data.dislikes;
        })
        .catch((error) => (this.message = error));
    },
    addDislike() {
      this.$axios
        .post(`/posts/${this.postId}/like`, {
          type: -1,
          userId: this.userId,
        })
        .then((response) => {
          this.message = response.data.message;
          this.likes = response.data.likes;
          this.dislikes = response.data.dislikes;
        })
        .catch((error) => (this.message = error));
    },
    Wrong() {
      alert("j'avais bien spécifié l'IMAGE pas l'icône.  - le Webmaster");
    },
  },
};
</script>

<style lang="scss">
.not-too-big {
  max-width: 100%;
  max-height: 800px;
}

.Tiny {
  display: none;
}

.bg-info2 {
  background-color: #5bc0de;
}

.bg-info3 {
  background-color: #1a7f9e;
}
.bg-info4 {
  background-color: #2b6c81;
}

.btn-info5 {
  background-color: #0d80a7;
}

.pouceImg,
.infoLogo {
  width: 45px;

  &:hover {
    color: red;
    cursor: pointer;
  }
}

@media screen and (max-width: 640px) {
  .Gros,
  .infoLogo,
  .clickImage {
    display: none;
  }

  .pouceImg {
    width: 20px;
    margin-right: 20px;
  }
  .Tiny {
    display: block;
    color: rgb(97, 58, 58);
    font-size: 10px;
  }
}
</style>
