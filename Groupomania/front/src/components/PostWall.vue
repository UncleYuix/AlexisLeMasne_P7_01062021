<!-- Seulement pour les posts sans commentaires (genre dans le fil d'actu) -->
<template> 
    <div class="text-light d-flex flex-column mx-auto mb-5 py-3 px-4 w-75 border border-danger m-3 bg-info4">
      <div class="py-3 d-flex justify-content-between align-items-center border border-warning p-3 m-2 bg-info2">
        <h3>{{ title }}</h3>

        <div class="d-flex flex-column">
          <!-- On vérifie les conditions d'affichage du bouton modify -->
          <router-link :to="routeUpdate">
            <button v-if="postUserId === userId"
                    class="btn btn-info5 mb-2"
                    :id="postId">
              Modifier
            </button>
          </router-link>
          <!-- On vérifie les conditions d'affichage du bouton delete -->
          <button v-if="role === 'admin' || postUserId === userId"
                  class="btn btn-info5"
                  @click="deletePost">
            Supprimer
          </button> 
        </div>

      </div>
      
      <router-link :to="route">
          <img :src=image  alt="Image du post" class="not-too-big m-auto"/>
      </router-link>

      <!-- Une div pour heure date à droite, un pour les pouces à gauche -->
      <div class="d-flex flex-row justify-content-between py-2 align-items-center bg-info3"> 

        <div class="mr-auto d-flex flex-column pr-3">
          <div class="d-flex flex-row align-items-center border border-warning pr-2">
            <img src="@/assets/Like-2-icon.png" alt="Pouce levé" class="pouceImg" @click="addLike"/> 
            <p class="ml-1">{{ likes }}</p>            
          </div>

          <div class="d-flex flex-row align-items-center border border-warning pr-2">
            <img src="@/assets/Unlike-2-icon.png" alt="Pouce baissé" class="pouceImg" @click="addDislike"/>
            <p class="ml-1">{{ dislikes }}</p>  
          </div>
        </div>

        <p v-if="message">
          {{ message }}
        </p>

        <div class="ml-auto d-flex flex-column text-right low-font-size">
        <p class="mr-5 border border-warning p-1">   <img  @click="Wrong" src="@/assets/info--v3.png" alt="Pouce baissé" class="pouceImg">  Cliquez l'image pour réagir </p>
        </div>

      </div>

    </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    postUserId: {
      type: Number,
      required: true
    },
    userId: {
      type: Number,
      required: true
    },
    postId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      message: "",
      route: "",
      routeUpdate:"",
      likes: Number,
      dislikes: Number
    }
  },
  mounted() {
    this.$axios
      .get(`/posts/likedislike/${this.postId}`)
      .then(response => {
        this.likes= response.data.likes,
        this.dislikes= response.data.dislikes
      })
    this.route= "/post/" + `${this.postId}`
    this.routeUpdate = "/postupdate/" + `${this.postId}`
  },
  methods: {
    createMessage() {
      this.message = response.data.message
    },
    deletePost() {
      this.$axios
        .delete(`/posts/${this.postId}`)
        .then(this.$emit('post-deleted'))
        .catch(error => this.message=error)
    },
    addLike() {
      this.$axios
        .post(`/posts/${this.postId}/like`, {
            type: 1,
            userId: this.userId
          })
        .then((response) => {
          this.message = response.data.message
          this.likes = response.data.likes
          this.dislikes = response.data.dislikes
        })
        .catch(error => this.message=error)
    },
    addDislike() {
      this.$axios
        .post(`/posts/${this.postId}/like`, {
            type: -1,
            userId: this.userId
          })
        .then((response) => {
          this.message = response.data.message
          this.likes = response.data.likes
          this.dislikes = response.data.dislikes
        })
        .catch(error => this.message=error)
    },
    Wrong() {
  alert("j'avais bien spécifié l'IMAGE pas l'icône.  - le Webmaster");
},
  }
};
</script>

<style lang="scss">

.not-too-big {
  max-width: 95%;
  max-height: 800px;
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

.pouceImg {
  width: 45px;
   background-color: #3c9ebe;
   margin: 5px;
  &:hover {
    cursor: pointer;
  }
}


</style>
