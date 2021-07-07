<template>
  <div class="pb-5 big-height">
    <Header />

<!-- 
    création d'un post  -->

    <div class="backNewPost bg-info3">
      <div class="container pt-5 pb-5 bg-info4">
        <div class="row">
          <div :class="borderClass">
            <form @submit.prevent="createPost">
              <h2 :class="titleClass"><u>Nouvelle Publication</u></h2>

              <div class="mb-4 d-flex flex-column px-3">
                <div class="text-left">
                  <label id="titleText" for="Title">
                    Titre de la publication:</label
                  >
                  <FormInput idLinked="Title" v-model="title"></FormInput>
                </div>


<!-- methodo boostrapvue  -->
                <form class="text" enctype="multipart/form-data">
                  <label for="imgInput">Lien de l'image:</label><br />
                  <input
                    required
                    type="file"
                    ref="file"
                    id="newImage"
                    message=""
                    name="imgInput"
                    class="text-light"
                    @change="selectImg($event)"
                    enctype="multipart/form-data"
                  />
                </form>
              </div>

<!-- Post crée ?  -->
              <h3 v-if="message" class="font-weight-bold h2 mb-4 text-danger">
                {{ message }} - merci !
              </h3>

 
      

              <div v-if="message" class="mt-4">
                <h4>{{ title }}</h4>
                <img :src="imageSrc" class="img-fluid" alt="Image uploadé" />
              </div>

<!--les deux Boutons  -->
              <button v-if="message === ''" :class="btnClass" type="submit">
                Publier
              </button>

              <router-link to="/Posts" class="btn btn-primary ml-3">
                Retour
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      imageUrl: undefined,
      userId: "",
      message: "",
      btnClass: "btn btn-info",
      titleClass: "font-weight-bold h1 mb-4 mt-3",
      borderClass:
        "container border border-light p-3 text-light pb-4 col-10 col-sm-8 col-lg-6",
      imageTitle: "",
      imageSrc: null,
    };
  },

  // le kick si pas logued

  created() {
    if (sessionStorage.getItem("token") === null) {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {

    // On récupère un token puis request post d'une publication > reponse avec le l'upload de l'image backend et bdd et ajout

    createPost(e) {
      e.preventDefault();
      const myForm = new FormData();
      myForm.append("file", this.imageUrl);
      myForm.append("title", this.title);

      this.$axios
        .get(`auth/profile/${sessionStorage.getItem("token")}`)
        .then((response) => {
          this.userId = response.data.user[0].id;
          myForm.append("userId", this.userId);

          this.$axios
            .post("posts/", myForm)
            .then((responses) => {
              (this.message = responses.data.message),
                (this.btnClass = "btn"),
                (this.titleClass = "font-weight-bold h1 mb-4"),
                (this.borderClass =
                  "container border border-success p-3 text-light pb-4"),
                (this.imageSrc = responses.data.imagePath),
                (this.imageTitle = this.title);
            })
            .catch((error) => (this.message = error.data.message));
        });
    },
    selectImg() {
      this.imageUrl = this.$refs.file.files[0];
    },
  },
};
</script>
