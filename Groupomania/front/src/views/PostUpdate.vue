<template>
  <div class="big-height pb-5">
    <Header/>

<!-- On crée deux partie 50% / 50% pour avoir la mise a jour du post -->


<!-- résumé du post ( la partie left ) -->


    <div class="container border border-dark rounded-lg d-flex flex-row p-3 mt-5 bg-info4">
      <div class="resume w-50">
        <p> Avant </p>
    
        <p class="h1">{{ post.title }}</p>
        <img :src="post.imageUrl" class="not-too-big" alt="Post img"/>
      </div>

<!-- la partie modifiable renvoi au components de modification (partie right)   -->
      <div class="w-50 ml-1">
        <p> Après</p>

        <div class="mb-4">
          <p :v-model="newTitle" class="h1"><u>{{newTitle}}</u></p>
          <FormInputSettings idLinked="Title"
                            v-model="newTitle"
                            :placeholder="title"
                            @input="alwaysTitle" >
          </FormInputSettings>
        </div>

<!-- On suit la méthodo boostrap   -->
        <form class="mb-4" enctype="multipart/form-data">
          <label class="h2" for="imgInput"><u>Image ? </u></label><br/>
          <input required 
                  type="file" 
                  ref="file" 
                  id="newImage" 
                  name="imgInput" 
                  class=""
                  enctype="multipart/form-data"
                  @change="selectImg($event)"/>
        </form>

<!-- les deux boutons habituels pour la modification ou annuler la modif  -->
        <button class="btn btn-dark"
                @click="updatePost"
                v-if="!messageOk">
          Modifier
        </button>

        <router-link to="/Posts"  class="btn btn-primary btn ml-2">  Retour </router-link>

        <div v-if="messageOk">
          <h3 class="font-weight-bold h2 mb-4 text-white">
            {{ messageOk }}
          </h3>



          <div class="mt-4">
            <h4>{{ newTitle }}</h4>
            <img :src="newImageSrc" class="img-fluid" alt="Nouvelle image"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      post: [],
      userId: Number,
      role: "",
      messageOk: "",
      messageError: "",
      postId: Number,
      title: "",
      btnClass: "btn btn-success text-light",
      newTitle: " Titre ?",
      newImage: null,
      newImageSrc: ""
    }
  },
  created() {
    if (sessionStorage.getItem('token')===null) {
      this.$router.push({ name: 'Login' })
    }
  },
  mounted() {
    this.$axios
      .get(`auth/profile/${sessionStorage.getItem('token')}`)
      .then(response => {
        this.role= response.data.user[0].role
        this.userId= response.data.user[0].id
        this.$axios
          .get(`/posts/${this.$route.path.split('/')[2]}`)
          .then(responses => {
            this.post = responses.data.post[0]
            this.postId= responses.data.post[0].id
            this.title= responses.data.post[0].title
          })
      })    
  },
  methods: {

    // si tout va bien, le fichier est envoyé au backend et rejoins les posts existants

    updatePost() {
      if (this.newImage===null) this.messageError= "Merci de choisir une image"
      else {
        const myForm = new FormData();
        myForm.append("file", this.newImage);
        myForm.append("title", this.newTitle);
        myForm.append("oldImage", this.post.imageUrl)
        this.$axios
        .put(`posts/${this.postId}`, myForm)
        .then(response => {
          this.messageOk = response.data.message
          this.newImageSrc= response.data.path
        })
      }
    },
    alwaysTitle() {
      if (this.newTitle==="") this.newTitle = "New title"
    },
    selectImg() {
      this.newImage = this.$refs.file.files[0]
    }
  }
}
</script>

<style scoped lang="scss">

hr {
  width: 100%;
  border-top: 1px solid rgb(97%, 98%, 98%);
}

.not-too-big {
  max-width: 50%;
  max-height: 800px;
  background-position : center;
}

// en écran plus petit, on enlêve la "preview" ou "postview" pour une meilleur UX

@media screen and (max-width: 640px) {
.resume {
  display: none;
}
}
</style>