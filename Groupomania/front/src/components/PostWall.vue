<!-- Ce components sert a afficher les contenu "conditionnel", ainsi on a les bouton edit ou delete si user qui a post ou admin
on a aussi les icones et nombres likes ainsi que le bouton "info"  -->

<!--- le chargement de l'image ici se fait par le router like to route --->




<template>
  <div
    class="d-flex flex-column mx-auto mb-5 py-3 px-4 w-75 border border-info m-3 bg-info4"
  >
    <div
      class="py-3 d-flex justify-content-between align-items-center text-center border-info p-3 m-2 bg-info2"
    >
      <h2><strong>{{ title }} </strong> </h2>

      <div class="d-flex flex-column">
        <!-- On vérifie les conditions d'affichage du bouton modify -->
        <router-link :to="routeUpdate">
          <button
            v-if="postUserId === userId"
            class="Gros btn text-light btn-info5 mb-2"
            :id="postId"
          >
            Modifier
          </button>
          <button
            v-if="postUserId === userId"
            class="Tiny btn btn-info5 mb-2"
            :id="postId"
          >
            <i class="fas fa-edit"></i> !
          </button>
        </router-link>
        <!-- On vérifie les conditions d'affichage du bouton delete -->
        <button
          v-if="role === 'admin' || postUserId === userId"
          class="Gros btn text-light btn-info5"
          @click="deletePost"
        >
          Supprimer
        </button>
        <button
          v-if="role === 'admin' || postUserId === userId"
          class="Tiny btn btn-info5 mb-2"
          @click="deletePost"
        >
          <i class="far fa-trash-alt"> !</i>
        </button>
      </div>
    </div>

<!-- Le chargement de l'image  -->

    
    <div class="image text-center">
      <router-link :to="route">
        <img :src="image" alt="Image du post" class="not-too-big" />
      </router-link>
    </div>

<!-- les pouces -->
    <div
      class="d-flex flex-row text-center py-2 bg-info3"
    >
      <div class="mr-auto d-flex">
        <div
          class="d-flex flex-row align-items-center border border-info pr-2"
        >
          <i
            class="pouceImg fas fa-thumbs-up pl-3"
            alt="Pouce up"
            @click="addLike"
          ></i>
          <p class="ml-1 text-dark">{{ likes }}</p>
        </div>

        <div
          class="d-flex flex-row align-items-center border border-info pr-2"
        >
          <i
            class="pouceImg fas fa-thumbs-down pl-3"
            alt="Pouce down"
            @click="addDislike"
          ></i>
          <p class="ml-1 text-dark">{{ dislikes }}</p>
        </div>
      </div>

      <p class="pr-5 font-weight-bold" v-if="message">
        {{ message }}
      </p>
    </div>

    <!-- l'icone info  -->
    <div class="clickImage border border-info p-1 text-dark">
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

    // affichage du nombre de like 
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

    // fonction pour delete un post avec la requete axios
    deletePost() {
      this.$axios
        .delete(`/posts/${this.postId}`)
        .then(this.$emit("post-deleted"))
        .catch((error) => (this.message = error));
    },
    // fonctions pour ajouter un like / dislike avec la requete post axios
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

    // fonction pour faire une blague 
    Wrong() {
      alert("j'avais bien spécifié l'IMAGE pas l'icône.  - le Webmaster");
    },
  },
};
</script>

<style lang="scss">

 h2 strong {
   font-size: 0.8em;
 }
.not-too-big {
  max-width: 100%;
  max-height: 800px;
  text-align: center;
}

.Tiny {
  display: none;
}

.bg-info2 {
  background-color: #6ca1b1;
}

.bg-info3 {
  background-color: #a4bcc3;
}
.bg-info4 {
  background-color: #8db4c0;
}

.btn-info5 {
  background-color: #064053;
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
    color: rgb(233, 10, 10);
    font-size: 10px;
  }
}
</style>
