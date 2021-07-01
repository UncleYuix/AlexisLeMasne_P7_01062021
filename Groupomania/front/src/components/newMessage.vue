<template>

<!-- merci à https://www.youtube.com/watch?v=LrI3MwOQzEs&ab_channel=LeDesignerduWeb  IL S'AGIT DE MON MODALE CELUI LA-->


  <div class="bloc_modale" v-if="revele">
    <div class="overlay">  
         <!-- v-on:click="toggleModale" -->
      <div class="modale card">
        <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
              <form method="post" @submit.prevent="buttonAddMessage">
        <h2>Poster un message</h2>
        <div>
          <label for="title"> </label>
          <input
            class="title m-2"
            type="title"
            id="title"
            placeholder="Titre"
            v-model="title"
          />
        </div>
        <div>
          <label for="content"></label>
          <textarea
            type="text"
            id="content"
            placeholder=" ecrivez ici votre message"
            rows="5"
            cols="55"
            v-model="content"
          />
        </div>
        <div>
        <label for="File">(Le fichier n'est pas pas obligatoire)</label><br />
        <input type="file" ref="file" @change="selectFile()" />
      </div>
        <button type="submit"  @click.prevent="buttonAddMessage" >Envoyer</button>
        <div class="error" v-if="error">
          {{ error.error }}
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "newMessage",
  props: ['revele', 'toggleModale'],
   data() {
    return {
      title: "",
      content: "",
      attachment: null,
      error: "",
    };
  },
  methods: {
    buttonAddMessage() {
      let token = localStorage.getItem("token");
      const data = new FormData();
      //   if (this.file !== null) {
      //     data.append("title", this.title);
      //     data.append("content", this.content);
      //     data.append("image", this.file, this.file.name);
      //   } else

      if (this.title !== null) {
        data.append("title", this.title);
        data.append("content", this.content);
      }

      axios
        .post("http://localhost:8080/api/messages/new/", data, {
          headers: { Authorization: "Bearer" + token },
          //    + {Content-Type: application/json}
        })
        .then(() => {
          alert("Votre message a bien été envoyé !");
          document.location.reload();
          this.$router.push("/Content");
        })
        .catch((error) => {
          this.error = error.response.data;
        });
    },
    // selectFile() {
    //   this.file = this.$refs.file.files[0];
    // },
  },
};

</script>

<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 40%;
  right: 30%;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
