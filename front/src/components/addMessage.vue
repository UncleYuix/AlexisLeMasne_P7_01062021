<template>
  <div class="add text-center">
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
      <!-- <div>
        <label for="File">(Facultatif)</label><br />
        <input type="file" ref="file" @change="selectFile()" />
      </div> -->
      <button type="submit" @click.prevent="buttonAddMessage">Envoyer</button>
      <div class="error" v-if="error">
        {{ error.error }}
      </div>
    </form>
  </div>
</template>

<style>
.add {
  justify-content: center;
  width: 50%;
  height: 35%;
  background-color: rgb(245, 207, 174);
}
</style>

<script>
import axios from "axios";

export default {
  name: "addMessage",
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

        if (this.title !== null)
     {
        data.append("title", this.title);
        data.append("content", this.content);
    }
      

      axios
        .post("http://localhost:8080/api/messages/new/", data, {
          headers: { Authorization: "Bearer" + token} 
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
